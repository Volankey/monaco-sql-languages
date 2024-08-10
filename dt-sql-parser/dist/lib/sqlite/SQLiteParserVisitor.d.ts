import { AbstractParseTreeVisitor } from "antlr4ng";
import { ProgramContext } from "./SQLiteParser.js";
import { SingleStmtContext } from "./SQLiteParser.js";
import { Sql_stmtContext } from "./SQLiteParser.js";
import { Alter_table_stmtContext } from "./SQLiteParser.js";
import { Analyze_stmtContext } from "./SQLiteParser.js";
import { Attach_stmtContext } from "./SQLiteParser.js";
import { Begin_stmtContext } from "./SQLiteParser.js";
import { Commit_stmtContext } from "./SQLiteParser.js";
import { Rollback_stmtContext } from "./SQLiteParser.js";
import { Savepoint_stmtContext } from "./SQLiteParser.js";
import { Release_stmtContext } from "./SQLiteParser.js";
import { Create_index_stmtContext } from "./SQLiteParser.js";
import { Indexed_columnContext } from "./SQLiteParser.js";
import { Create_table_stmtContext } from "./SQLiteParser.js";
import { Column_defContext } from "./SQLiteParser.js";
import { Type_nameContext } from "./SQLiteParser.js";
import { Column_constraintContext } from "./SQLiteParser.js";
import { Signed_numberContext } from "./SQLiteParser.js";
import { Table_constraintContext } from "./SQLiteParser.js";
import { Foreign_key_clauseContext } from "./SQLiteParser.js";
import { Conflict_clauseContext } from "./SQLiteParser.js";
import { Create_trigger_stmtContext } from "./SQLiteParser.js";
import { Create_view_stmtContext } from "./SQLiteParser.js";
import { Create_virtual_table_stmtContext } from "./SQLiteParser.js";
import { With_clauseContext } from "./SQLiteParser.js";
import { Cte_table_nameContext } from "./SQLiteParser.js";
import { Recursive_cteContext } from "./SQLiteParser.js";
import { Common_table_expressionContext } from "./SQLiteParser.js";
import { Delete_stmtContext } from "./SQLiteParser.js";
import { Delete_stmt_limitedContext } from "./SQLiteParser.js";
import { Detach_stmtContext } from "./SQLiteParser.js";
import { Drop_stmtContext } from "./SQLiteParser.js";
import { ExprContext } from "./SQLiteParser.js";
import { Raise_functionContext } from "./SQLiteParser.js";
import { Literal_valueContext } from "./SQLiteParser.js";
import { Value_rowContext } from "./SQLiteParser.js";
import { Values_clauseContext } from "./SQLiteParser.js";
import { Insert_stmtContext } from "./SQLiteParser.js";
import { Returning_clauseContext } from "./SQLiteParser.js";
import { Upsert_clauseContext } from "./SQLiteParser.js";
import { Pragma_stmtContext } from "./SQLiteParser.js";
import { Pragma_valueContext } from "./SQLiteParser.js";
import { Reindex_stmtContext } from "./SQLiteParser.js";
import { Select_stmtContext } from "./SQLiteParser.js";
import { Join_clauseContext } from "./SQLiteParser.js";
import { Select_coreContext } from "./SQLiteParser.js";
import { Factored_select_stmtContext } from "./SQLiteParser.js";
import { Simple_select_stmtContext } from "./SQLiteParser.js";
import { Compound_select_stmtContext } from "./SQLiteParser.js";
import { Table_or_subqueryContext } from "./SQLiteParser.js";
import { Result_columnContext } from "./SQLiteParser.js";
import { Join_operatorContext } from "./SQLiteParser.js";
import { Join_constraintContext } from "./SQLiteParser.js";
import { Compound_operatorContext } from "./SQLiteParser.js";
import { Update_stmtContext } from "./SQLiteParser.js";
import { Column_name_listContext } from "./SQLiteParser.js";
import { Update_stmt_limitedContext } from "./SQLiteParser.js";
import { Qualified_table_nameContext } from "./SQLiteParser.js";
import { Vacuum_stmtContext } from "./SQLiteParser.js";
import { Filter_clauseContext } from "./SQLiteParser.js";
import { Window_defnContext } from "./SQLiteParser.js";
import { Over_clauseContext } from "./SQLiteParser.js";
import { Frame_specContext } from "./SQLiteParser.js";
import { Frame_clauseContext } from "./SQLiteParser.js";
import { Simple_function_invocationContext } from "./SQLiteParser.js";
import { Aggregate_function_invocationContext } from "./SQLiteParser.js";
import { Window_function_invocationContext } from "./SQLiteParser.js";
import { Common_table_stmtContext } from "./SQLiteParser.js";
import { Order_by_stmtContext } from "./SQLiteParser.js";
import { Limit_stmtContext } from "./SQLiteParser.js";
import { Ordering_termContext } from "./SQLiteParser.js";
import { Asc_descContext } from "./SQLiteParser.js";
import { Frame_leftContext } from "./SQLiteParser.js";
import { Frame_rightContext } from "./SQLiteParser.js";
import { Frame_singleContext } from "./SQLiteParser.js";
import { Window_functionContext } from "./SQLiteParser.js";
import { OffsetContext } from "./SQLiteParser.js";
import { Default_valueContext } from "./SQLiteParser.js";
import { Partition_byContext } from "./SQLiteParser.js";
import { Order_by_exprContext } from "./SQLiteParser.js";
import { Order_by_expr_asc_descContext } from "./SQLiteParser.js";
import { Expr_asc_descContext } from "./SQLiteParser.js";
import { Initial_selectContext } from "./SQLiteParser.js";
import { Recursive_selectContext } from "./SQLiteParser.js";
import { Unary_operatorContext } from "./SQLiteParser.js";
import { Error_messageContext } from "./SQLiteParser.js";
import { Module_argumentContext } from "./SQLiteParser.js";
import { Column_aliasContext } from "./SQLiteParser.js";
import { KeywordContext } from "./SQLiteParser.js";
import { NameContext } from "./SQLiteParser.js";
import { Function_nameContext } from "./SQLiteParser.js";
import { Schema_nameContext } from "./SQLiteParser.js";
import { Table_nameContext } from "./SQLiteParser.js";
import { Table_or_index_nameContext } from "./SQLiteParser.js";
import { Column_nameContext } from "./SQLiteParser.js";
import { Collation_nameContext } from "./SQLiteParser.js";
import { Foreign_tableContext } from "./SQLiteParser.js";
import { Index_nameContext } from "./SQLiteParser.js";
import { Trigger_nameContext } from "./SQLiteParser.js";
import { View_nameContext } from "./SQLiteParser.js";
import { Module_nameContext } from "./SQLiteParser.js";
import { Pragma_nameContext } from "./SQLiteParser.js";
import { Savepoint_nameContext } from "./SQLiteParser.js";
import { Table_aliasContext } from "./SQLiteParser.js";
import { Transaction_nameContext } from "./SQLiteParser.js";
import { Window_nameContext } from "./SQLiteParser.js";
import { AliasContext } from "./SQLiteParser.js";
import { FilenameContext } from "./SQLiteParser.js";
import { Base_window_nameContext } from "./SQLiteParser.js";
import { Simple_funcContext } from "./SQLiteParser.js";
import { Aggregate_funcContext } from "./SQLiteParser.js";
import { Table_function_nameContext } from "./SQLiteParser.js";
import { Any_nameContext } from "./SQLiteParser.js";
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SQLiteParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export declare class SQLiteParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SQLiteParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.singleStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStmt?: (ctx: SingleStmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.sql_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_stmt?: (ctx: Sql_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.alter_table_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table_stmt?: (ctx: Alter_table_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.analyze_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze_stmt?: (ctx: Analyze_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.attach_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttach_stmt?: (ctx: Attach_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.begin_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBegin_stmt?: (ctx: Begin_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.commit_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommit_stmt?: (ctx: Commit_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.rollback_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollback_stmt?: (ctx: Rollback_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.savepoint_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSavepoint_stmt?: (ctx: Savepoint_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.release_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelease_stmt?: (ctx: Release_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.create_index_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_index_stmt?: (ctx: Create_index_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.indexed_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexed_column?: (ctx: Indexed_columnContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.create_table_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_table_stmt?: (ctx: Create_table_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.column_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_def?: (ctx: Column_defContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.type_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_name?: (ctx: Type_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.column_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_constraint?: (ctx: Column_constraintContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.signed_number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSigned_number?: (ctx: Signed_numberContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_constraint?: (ctx: Table_constraintContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.foreign_key_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeign_key_clause?: (ctx: Foreign_key_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.conflict_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConflict_clause?: (ctx: Conflict_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.create_trigger_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_trigger_stmt?: (ctx: Create_trigger_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.create_view_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_view_stmt?: (ctx: Create_view_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.create_virtual_table_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_virtual_table_stmt?: (ctx: Create_virtual_table_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.with_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWith_clause?: (ctx: With_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.cte_table_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCte_table_name?: (ctx: Cte_table_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.recursive_cte`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecursive_cte?: (ctx: Recursive_cteContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.common_table_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommon_table_expression?: (ctx: Common_table_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.delete_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDelete_stmt?: (ctx: Delete_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.delete_stmt_limited`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDelete_stmt_limited?: (ctx: Delete_stmt_limitedContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.detach_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDetach_stmt?: (ctx: Detach_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.drop_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_stmt?: (ctx: Drop_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.raise_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRaise_function?: (ctx: Raise_functionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.literal_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral_value?: (ctx: Literal_valueContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.value_row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValue_row?: (ctx: Value_rowContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.values_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValues_clause?: (ctx: Values_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.insert_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_stmt?: (ctx: Insert_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.returning_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturning_clause?: (ctx: Returning_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.upsert_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpsert_clause?: (ctx: Upsert_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.pragma_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_stmt?: (ctx: Pragma_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.pragma_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_value?: (ctx: Pragma_valueContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.reindex_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReindex_stmt?: (ctx: Reindex_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.select_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_stmt?: (ctx: Select_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.join_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_clause?: (ctx: Join_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.select_core`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_core?: (ctx: Select_coreContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.factored_select_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFactored_select_stmt?: (ctx: Factored_select_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.simple_select_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_select_stmt?: (ctx: Simple_select_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.compound_select_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompound_select_stmt?: (ctx: Compound_select_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_or_subquery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_or_subquery?: (ctx: Table_or_subqueryContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.result_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResult_column?: (ctx: Result_columnContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.join_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_operator?: (ctx: Join_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.join_constraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_constraint?: (ctx: Join_constraintContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.compound_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompound_operator?: (ctx: Compound_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.update_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_stmt?: (ctx: Update_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.column_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_name_list?: (ctx: Column_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.update_stmt_limited`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_stmt_limited?: (ctx: Update_stmt_limitedContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.qualified_table_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualified_table_name?: (ctx: Qualified_table_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.vacuum_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacuum_stmt?: (ctx: Vacuum_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.filter_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilter_clause?: (ctx: Filter_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.window_defn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_defn?: (ctx: Window_defnContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.over_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOver_clause?: (ctx: Over_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.frame_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_spec?: (ctx: Frame_specContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.frame_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_clause?: (ctx: Frame_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.simple_function_invocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_function_invocation?: (ctx: Simple_function_invocationContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.aggregate_function_invocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregate_function_invocation?: (ctx: Aggregate_function_invocationContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.window_function_invocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_function_invocation?: (ctx: Window_function_invocationContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.common_table_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommon_table_stmt?: (ctx: Common_table_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.order_by_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrder_by_stmt?: (ctx: Order_by_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.limit_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimit_stmt?: (ctx: Limit_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.ordering_term`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrdering_term?: (ctx: Ordering_termContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.asc_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsc_desc?: (ctx: Asc_descContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.frame_left`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_left?: (ctx: Frame_leftContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.frame_right`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_right?: (ctx: Frame_rightContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.frame_single`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_single?: (ctx: Frame_singleContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.window_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_function?: (ctx: Window_functionContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.offset`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOffset?: (ctx: OffsetContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.default_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_value?: (ctx: Default_valueContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.partition_by`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_by?: (ctx: Partition_byContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.order_by_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrder_by_expr?: (ctx: Order_by_exprContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.order_by_expr_asc_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrder_by_expr_asc_desc?: (ctx: Order_by_expr_asc_descContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.expr_asc_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_asc_desc?: (ctx: Expr_asc_descContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.initial_select`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInitial_select?: (ctx: Initial_selectContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.recursive_select`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRecursive_select?: (ctx: Recursive_selectContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.unary_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnary_operator?: (ctx: Unary_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.error_message`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitError_message?: (ctx: Error_messageContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.module_argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModule_argument?: (ctx: Module_argumentContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.column_alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_alias?: (ctx: Column_aliasContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyword?: (ctx: KeywordContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitName?: (ctx: NameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_name?: (ctx: Function_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.schema_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchema_name?: (ctx: Schema_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_name?: (ctx: Table_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_or_index_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_or_index_name?: (ctx: Table_or_index_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_name?: (ctx: Column_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.collation_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollation_name?: (ctx: Collation_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.foreign_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeign_table?: (ctx: Foreign_tableContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.index_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_name?: (ctx: Index_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.trigger_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrigger_name?: (ctx: Trigger_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.view_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitView_name?: (ctx: View_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.module_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModule_name?: (ctx: Module_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.pragma_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_name?: (ctx: Pragma_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.savepoint_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSavepoint_name?: (ctx: Savepoint_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_alias?: (ctx: Table_aliasContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.transaction_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransaction_name?: (ctx: Transaction_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.window_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_name?: (ctx: Window_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlias?: (ctx: AliasContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.filename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilename?: (ctx: FilenameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.base_window_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBase_window_name?: (ctx: Base_window_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.simple_func`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_func?: (ctx: Simple_funcContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.aggregate_func`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregate_func?: (ctx: Aggregate_funcContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.table_function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_function_name?: (ctx: Table_function_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SQLiteParser.any_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_name?: (ctx: Any_nameContext) => Result;
}
