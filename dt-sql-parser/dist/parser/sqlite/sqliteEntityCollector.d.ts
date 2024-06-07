import type { Table_nameContext as TableNameContext, View_nameContext as ViewNameContext, SingleStmtContext as SingleStatementContext, Create_table_stmtContext as QueryCreateTableContext, Create_view_stmtContext as CreateViewContext, Insert_stmtContext as InsertStatementContext, Select_stmtContext as SelectStatementContext, Simple_select_stmtContext as SimpleSelectStatementContext } from '../../lib/sqlite/SQLiteParser';
import type { SQLiteParserListener } from '../../lib/sqlite/SQLiteParserListener';
import { EntityCollector } from '../common/entityCollector';
export declare class SQLiteEntityCollector extends EntityCollector implements SQLiteParserListener {
    /** ====== Entity Begin */
    exitTable_name(ctx: TableNameContext): void;
    exitView_name(ctx: ViewNameContext): void;
    /** ===== Statement begin */
    enterSingleStmt(ctx: SingleStatementContext): void;
    exitSingleStmt(ctx: SingleStatementContext): void;
    enterCreate_table_stmt(ctx: QueryCreateTableContext): void;
    exitCreate_table_stmt(ctx: QueryCreateTableContext): void;
    enterCreate_view_stmt(ctx: CreateViewContext): void;
    exitCreate_view_stmt(ctx: CreateViewContext): void;
    enterSimple_select_stmt(ctx: SimpleSelectStatementContext): void;
    exitSimple_select_stmt(ctx: SimpleSelectStatementContext): void;
    enterSelect_stmt(ctx: SelectStatementContext): void;
    exitSelect_stmt(ctx: SelectStatementContext): void;
    enterInsert_stmt(ctx: InsertStatementContext): void;
    exitInsert_stmt(ctx: InsertStatementContext): void;
}
