window.SIDEBAR_ITEMS = {"fn":[["avg","Represents a SQL `AVG` function. This function can only take types which are Foldable."],["count","Creates a SQL `COUNT` expression"],["count_distinct","Creates a SQL `COUNT(DISTINCT ...)` expression"],["count_star","Creates a SQL `COUNT(*)` expression"],["date","Represents the SQL `DATE` function. The argument should be a Timestamp expression, and the return value will be an expression of type Date."],["delete","Creates a `DELETE` statement."],["exists","Creates a SQL `EXISTS` expression."],["insert_into","Creates an `INSERT` statement for the target table."],["insert_or_ignore_into","Creates an `INSERT [OR] IGNORE` statement."],["max","Represents a SQL `MAX` function. This function can only take types which are ordered."],["min","Represents a SQL `MIN` function. This function can only take types which are ordered."],["not","Creates a SQL `NOT` expression"],["replace_into","Creates a `REPLACE` statement."],["select","Creates a bare select statement, with no from clause. Primarily used for testing diesel itself, but likely useful for third party crates as well. The given expressions must be selectable from anywhere."],["sql","Use literal SQL in the query builder."],["sql_query","Construct a full SQL query using raw SQL."],["sum","Represents a SQL `SUM` function. This function can only take types which are Foldable."],["update","Creates an `UPDATE` statement."]],"struct":[["now","Represents the SQL `CURRENT_TIMESTAMP` constant. This is equivalent to the `NOW()` function on backends that support it."],["today","Represents the SQL `CURRENT_DATE` constant."]],"type":[["AliasedFields","Maps `F` to `Alias<S>`"],["And","The return type of `lhs.and(rhs)`"],["AndNet","The return type of `lsh.and(rhs)` for network types"],["ArrayContains","The return type of `lhs.contains(rhs)` for array expressions"],["ArrayIndex","The return type of `lhs.index(rhs)`"],["AsExpr","The type of `Item` when converted to an expression with the same type as `TargetExpr`"],["AsExprOf","The type of `Item` when converted to an expression of `Type`"],["AsSelect","Represents the return type of `.as_select()`"],["Asc","The return type of `expr.asc()`"],["AssumeNotNull","The return type of `expr.assume_not_null()`"],["AtTimeZone","The return type of `expr.at_time_zone(tz)`"],["BareSelect","Represents the return type of `diesel::select(selection)`"],["Between","The return type of `lhs.between(lower, upper)`"],["Concat","The return type of `lhs.concat(rhs)`"],["ConcatBinary","The return type of `lhs.remove_by_path(rhs)`"],["ConcatJsonb","The return type of `lsh.concat(rhs)`"],["ContainsJsonb","The return type of `lsh.contains(rhs)` for jsonb types"],["ContainsNet","The return type of `lhs.contains(rhs)` for network types"],["ContainsNetLoose","The return type of `lhs.contains_or_eq(rhs)`"],["Desc","The return type of `expr.desc()`"],["DifferenceNet","The return type of `lsh.diff(rhs)`"],["Distinct","Represents the return type of `.distinct()`"],["DistinctOn","Represents the return type of `.distinct_on(expr)`"],["Eq","The return type of `lhs.eq(rhs)`"],["EqAny","The return type of `lhs.eq_any(rhs)`"],["Escape","The return type of `lhs.escape('x')`"],["Except","Represents the return type of `.except(rhs)`"],["ExceptAll","Represents the return type of `.except_all(rhs)`"],["Filter","Represents the return type of `.filter(predicate)`"],["Find","Represents the return type of `.find(pk)`"],["FindBy","Represents the return type of `.filter(lhs.eq(rhs))`"],["ForKeyShare","Represents the return type of `.for_key_share()`"],["ForNoKeyUpdate","Represents the return type of `.for_no_key_update()`"],["ForShare","Represents the return type of `.for_share()`"],["ForUpdate","Represents the return type of `.for_update()`"],["GroupBy","Represents the return type of `.group_by(expr)`"],["Gt","The return type of `lhs.gt(rhs)`"],["GtEq","The return type of `lhs.ge(rhs)`"],["HasAllKeysJsonb","The return type of `lsh.has_all_keys(rhs)`"],["HasAnyKeyJsonb","The return type of `lsh.has_any_key(rhs)`"],["HasKeyJsonb","The return type of `lsh.has_key(rhs)`"],["Having","Represents the return type of `.having(predicate)`"],["ILike","The return type of `lhs.ilike(rhs)`"],["InnerJoin","Represents the return type of `.inner_join(rhs)`"],["InnerJoinOn","Represents the return type of `.inner_join(rhs.on(on))`"],["InnerJoinQuerySource","A query source representing the inner join between two tables. For example, for the inner join between three tables that implement `JoinTo`: `InnerJoinQuerySource<InnerJoinQuerySource<table1, table2>, table3>` Which conveniently lets you omit the exact join condition."],["Intersect","Represents the return type of `.intersect(rhs)`"],["IntersectAll","Represents the return type of `.intersect_all(rhs)`"],["IntoBoxed","Represents the return type of `.into_boxed::<'a, DB>()`"],["Is","The return type of `lhs.is(rhs)`."],["IsContainedBy","The return type of `lhs.is_contained_by(rhs)`"],["IsContainedByJsonb","The return type of `lsh.is_contained_by(rhs)` for jsonb types"],["IsContainedByNet","The return type of [`lhs.is_contained_by(rhs)`]((super::expression_methods::PgNetExpressionMethods::is_contained_by) for network types"],["IsContainedByNetLoose","The return type of `lhs.is_contained_by_or_eq(rhs)`"],["IsDistinctFrom","The return type of `lhs.is_distinct_from(rhs)`"],["IsNot","The return type of `lhs.is_not(rhs)`."],["IsNotDistinctFrom","The return type of `lhs.is_not_distinct_from(rhs)`"],["IsNotNull","The return type of `expr.is_not_null()`"],["IsNull","The return type of `expr.is_null()`"],["LeftJoin","Represents the return type of `.left_join(rhs)`"],["LeftJoinOn","Represents the return type of `.left_join(rhs.on(on))`"],["LeftJoinQuerySource","A query source representing the left outer join between two tables. For example, for the left join between three tables that implement `JoinTo`: `LeftJoinQuerySource<LeftJoinQuerySource<table1, table2>, table3>` Which conveniently lets you omit the exact join condition."],["Like","The return type of `lhs.like(rhs)`"],["LikeBinary","The return type of `lhs.remove_by_path(rhs)`"],["Limit","Represents the return type of `.limit()`"],["Lt","The return type of `lhs.lt(rhs)`"],["LtEq","The return type of `lhs.le(rhs)`"],["NeAny","The return type of `lhs.ne_all(rhs)`"],["NoWait","Represents the return type of `.no_wait()`"],["NotBetween","The return type of `lhs.not_between(lower, upper)`"],["NotEq","The return type of `lhs.ne(rhs)`"],["NotILike","The return type of `lhs.not_ilike(rhs)`"],["NotLike","The return type of `lhs.not_like(rhs)`"],["NotLikeBinary","The return type of `lhs.remove_by_path(rhs)`"],["NotSimilarTo","The return type of `lhs.not_similar_to(rhs)`"],["Nullable","The return type of `expr.nullable()`"],["NullableSelect","Represents the return type of `.nullable()`"],["NullsFirst","The return type of `expr.nulls_first()`"],["NullsLast","The return type of `expr.nulls_last()`"],["Offset","Represents the return type of `.offset()`"],["On","Represents the return type of `rhs.on(on)`"],["Or","The return type of `lhs.or(rhs)`"],["OrFilter","Represents the return type of `.or_filter(predicate)`"],["OrNet","The return type of `lsh.or(rhs)` for network types"],["Order","Represents the return type of `.order(ordering)`"],["OverlapsWith","The return type of `lhs.overlaps_with(rhs)`"],["OverlapsWithNet","The return type of `lhs.overlaps_with(rhs)` for network types"],["RangeContains","The return type of `lhs.contains(rhs)` for range expressions"],["RemoveByPathFromJsonb","The return type of `lhs.remove_by_path(rhs)`"],["RemoveFromJsonb","The return type of `lhs.remove(rhs)`"],["RetrieveAsObjectJson","The return type of `lhs.retrieve_as_object(rhs)`"],["RetrieveAsTextJson","The return type of `lhs.retrieve_as_text(rhs)`"],["RetrieveByPathAsObjectJson","The return type of `lhs.retrieve_by_path_as_object(rhs)`"],["RetrieveByPathAsTextJson","The return type of `lhs.retrieve_by_path_as_text(rhs)`"],["Select","Represents the return type of `.select(selection)`"],["SimilarTo","The return type of `lhs.similar_to(rhs)`"],["SingleValue","Represents the return type of `.single_value()`"],["SkipLocked","Represents the return type of `.skip_locked()`"],["SqlTypeOf","The SQL type of an expression"],["ThenOrderBy","Represents the return type of `.then_order_by(ordering)`"],["Union","Represents the return type of `.union(rhs)`"],["UnionAll","Represents the return type of `.union_all(rhs)`"],["Update","Represents the return type of `update(lhs).set(rhs)`"],["avg","The return type of `avg(expr)`"],["count","The return type of `count(expr)`"],["count_distinct","The return type of `count_distinct()`"],["count_star","The return type of `count_star()`"],["date","The return type of `date(expr)`"],["exists","The return type of `exists(expr)`"],["max","The return type of `max(expr)`"],["min","The return type of `min(expr)`"],["not","The return type of `not(expr)`"],["sum","The return type of `sum(expr)`"]]};