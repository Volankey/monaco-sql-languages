import { SingleStmtContext } from '../../lib/sqlite/SQLiteParser';
import { SQLiteParserListener } from '../../lib/sqlite/SQLiteParserListener';
import { SplitListener } from '../common/splitListener';
export declare class SQLiteSplitListener extends SplitListener<SingleStmtContext> implements SQLiteParserListener {
    exitSingleStmt(ctx: SingleStmtContext): void;
}
