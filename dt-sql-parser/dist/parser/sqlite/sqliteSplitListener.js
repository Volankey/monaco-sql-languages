import { SplitListener } from '../common/splitListener';
export class SQLiteSplitListener extends SplitListener {
    exitSingleStatement(ctx) {
        this._statementsContext.push(ctx);
    }
}
