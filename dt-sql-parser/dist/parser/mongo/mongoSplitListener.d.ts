import { MongoCommandsContext } from '../../lib/mongo/mongoParser';
import { mongoListener as MongoParserListener } from '../../lib/mongo/mongoListener';
import { SplitListener } from '../common/splitListener';
export declare class MongoSplitListener extends SplitListener<MongoCommandsContext> implements MongoParserListener {
    exitMongoCommands(ctx: MongoCommandsContext): void;
}
