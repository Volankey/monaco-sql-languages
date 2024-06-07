import { EntityContextType } from '../common/types';
import { StmtContextType, EntityCollector } from '../common/entityCollector';
export class SQLiteEntityCollector extends EntityCollector {
    /** ====== Entity Begin */
    // exitDatabaseName(ctx: DatabaseNameContext) {
    //     this.pushEntity(ctx, EntityContextType.DATABASE);
    // }
    // exitDatabaseNameCreate(ctx: DatabaseNameCreateContext) {
    //     this.pushEntity(ctx, EntityContextType.DATABASE_CREATE);
    // }
    exitTable_name(ctx) {
        this.pushEntity(ctx, EntityContextType.TABLE);
    }
    // exitTableNameCreate(ctx: TableNameCreateContext) {
    //     this.pushEntity(ctx, EntityContextType.TABLE_CREATE);
    // }
    exitView_name(ctx) {
        this.pushEntity(ctx, EntityContextType.VIEW);
    }
    /** ===== Statement begin */
    enterSingleStmt(ctx) {
        this.pushStmt(ctx, StmtContextType.COMMON_STMT);
    }
    exitSingleStmt(ctx) {
        this.popStmt();
    }
    enterCreate_table_stmt(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_TABLE_STMT);
    }
    exitCreate_table_stmt(ctx) {
        this.popStmt();
    }
    enterCreate_view_stmt(ctx) {
        this.pushStmt(ctx, StmtContextType.CREATE_VIEW_STMT);
    }
    exitCreate_view_stmt(ctx) {
        this.popStmt();
    }
    enterSimple_select_stmt(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitSimple_select_stmt(ctx) {
        this.popStmt();
    }
    enterSelect_stmt(ctx) {
        this.pushStmt(ctx, StmtContextType.SELECT_STMT);
    }
    exitSelect_stmt(ctx) {
        this.popStmt();
    }
    enterInsert_stmt(ctx) {
        this.pushStmt(ctx, StmtContextType.INSERT_STMT);
    }
    exitInsert_stmt(ctx) {
        this.popStmt();
    }
}
