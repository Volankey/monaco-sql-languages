import { SplitListener } from '../common/splitListener';
export class MongoSplitListener extends SplitListener {
    exitMongoCommands(ctx) {
        this._statementsContext.push(ctx);
    }
}
