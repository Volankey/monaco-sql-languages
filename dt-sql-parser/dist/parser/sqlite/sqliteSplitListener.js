import { SplitListener } from '../common/splitListener';
export class SQLiteSplitListener extends SplitListener {
    exitSingleStmt(ctx) {
        this._statementsContext.push(ctx);
    }
}
