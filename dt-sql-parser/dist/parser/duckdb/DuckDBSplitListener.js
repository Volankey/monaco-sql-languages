import { SplitListener } from '../common/splitListener';
export class DuckDBSplitListener extends SplitListener {
    exitSingleStmt(ctx) {
        this._statementsContext.push(ctx);
    }
}
