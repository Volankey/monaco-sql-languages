import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { mongoLexer as MongoLexer } from '../../lib/mongo/mongoLexer';
import { mongoParser as MongoParser, MongoCommandsContext } from '../../lib/mongo/mongoParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions } from '../common/types';
import { MongoSplitListener } from './mongoSplitListener';
import { MongoEntityCollector } from './mongoEntityCollector';
export { MongoEntityCollector, MongoSplitListener };
export declare class Mongo extends BasicSQL<MongoLexer, MongoCommandsContext, MongoParser> {
    protected createLexerFromCharStream(charStreams: CharStream): MongoLexer;
    protected createParserFromTokenStream(tokenStream: CommonTokenStream): MongoParser;
    protected preferredRules: Set<number>;
    protected get splitListener(): MongoSplitListener;
    protected createEntityCollector(input: string, caretTokenIndex?: number): MongoEntityCollector;
    protected processCandidates(candidates: CandidatesCollection, allTokens: Token[], caretTokenIndex: number, tokenIndexOffset: number): Suggestions<Token>;
}
