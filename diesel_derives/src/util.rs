use proc_macro2::TokenStream;
use syn::parse::{Parse, ParseStream, Result};
use syn::token::Eq;
use syn::{parenthesized, Data, DeriveInput, GenericArgument, Ident, Type};

use model::Model;

pub const COLUMN_NAME_NOTE: &str = "column_name = foo";
pub const SQL_TYPE_NOTE: &str = "sql_type = Foo";
pub const SERIALIZE_AS_NOTE: &str = "serialize_as = Foo";
pub const DESERIALIZE_AS_NOTE: &str = "deserialize_as = Foo";
pub const TABLE_NAME_NOTE: &str = "table_name = foo";
pub const TREAT_NONE_AS_DEFAULT_VALUE_NOTE: &str = "treat_none_as_default_value = true";
pub const TREAT_NONE_AS_NULL_NOTE: &str = "treat_none_as_null = true";
pub const BELONGS_TO_NOTE: &str = "belongs_to(Foo, foreign_key = foo_id)";
pub const MYSQL_TYPE_NOTE: &str = "mysql_type(name = \"foo\")";
pub const SQLITE_TYPE_NOTE: &str = "sqlite_type(name = \"foo\")";
pub const POSTGRES_TYPE_NOTE: &str = "postgres_type(name = \"foo\", schema = \"public\")";
pub const POSTGRES_TYPE_NOTE_ID: &str = "postgres_type(oid = 37, array_oid = 54)";
pub const SELECT_EXPRESSION_NOTE: &str =
    "select_expression = schema::table_name::column_name.is_not_null()";
pub const SELECT_EXPRESSION_TYPE_NOTE: &str =
    "select_expression_type = dsl::IsNotNull<schema::table_name::column_name>";

pub fn unknown_attribute(name: &Ident, valid: &[&str]) -> ! {
    let prefix = if valid.len() == 1 { "" } else { " one of" };

    abort!(
        name,
        "unknown attribute, expected{} `{}`",
        prefix,
        valid.join("`, `")
    )
}

pub fn parse_eq<T: Parse>(input: ParseStream, help: &str) -> Result<T> {
    if input.is_empty() {
        abort!(
            input.span(),
            "unexpected end of input, expected `=`";
            help = "The correct format looks like `#[diesel({})]`", help
        );
    }

    input.parse::<Eq>()?;
    input.parse()
}

pub fn parse_paren<T: Parse>(input: ParseStream, help: &str) -> Result<T> {
    if input.is_empty() {
        abort!(
            input.span(),
            "unexpected end of input, expected parentheses";
            help = "The correct format looks like `#[diesel({})]`", help
        );
    }

    let content;
    parenthesized!(content in input);
    content.parse()
}

pub fn wrap_in_dummy_mod(item: TokenStream) -> TokenStream {
    quote! {
        #[allow(unused_imports)]
        const _: () = {
            // This import is not actually redundant. When using diesel_derives
            // inside of diesel, `diesel` doesn't exist as an extern crate, and
            // to work around that it contains a private
            // `mod diesel { pub use super::*; }` that this import will then
            // refer to. In all other cases, this imports refers to the extern
            // crate diesel.
            use diesel;

            #item
        };
    }
}

pub fn inner_of_option_ty(ty: &Type) -> &Type {
    option_ty_arg(ty).unwrap_or(ty)
}

pub fn is_option_ty(ty: &Type) -> bool {
    option_ty_arg(ty).is_some()
}

fn option_ty_arg(ty: &Type) -> Option<&Type> {
    use syn::PathArguments::AngleBracketed;

    match *ty {
        Type::Path(ref ty) => {
            let last_segment = ty.path.segments.iter().last().unwrap();
            match last_segment.arguments {
                AngleBracketed(ref args) if last_segment.ident == "Option" => {
                    match args.args.iter().last() {
                        Some(GenericArgument::Type(ty)) => Some(ty),
                        _ => None,
                    }
                }
                _ => None,
            }
        }
        _ => None,
    }
}

pub fn ty_for_foreign_derive(item: &DeriveInput, model: &Model) -> Type {
    if model.foreign_derive {
        match item.data {
            Data::Struct(ref body) => match body.fields.iter().next() {
                Some(field) => field.ty.clone(),
                None => abort_call_site!("foreign_derive requires at least one field"),
            },
            _ => abort_call_site!("foreign_derive can only be used with structs"),
        }
    } else {
        let ident = &item.ident;
        let (_, ty_generics, ..) = item.generics.split_for_impl();
        parse_quote!(#ident #ty_generics)
    }
}

pub fn camel_to_snake(name: &str) -> String {
    let mut result = String::with_capacity(name.len());
    result.push_str(&name[..1].to_lowercase());
    for character in name[1..].chars() {
        if character.is_uppercase() {
            result.push('_');
            for lowercase in character.to_lowercase() {
                result.push(lowercase);
            }
        } else {
            result.push(character);
        }
    }
    result
}
