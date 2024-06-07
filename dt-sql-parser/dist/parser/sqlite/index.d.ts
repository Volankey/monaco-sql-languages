import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CandidatesCollection } from 'antlr4-c3';
import { SQLiteLexer } from '../../lib/sqlite/SQLiteLexer';
import { SQLiteParser, ProgramContext } from '../../lib/sqlite/SQLiteParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions } from '../common/types';
import { SQLiteSplitListener } from './sqliteSplitListener';
import { SQLiteEntityCollector } from './sqliteEntityCollector';
export { SQLiteEntityCollector, SQLiteSplitListener };
export declare class SQLite extends BasicSQL<SQLiteLexer, ProgramContext, SQLiteParser> {
    protected createLexerFromCharStream(charStreams: CharStream): SQLiteLexer;
    protected createParserFromTokenStream(tokenStream: CommonTokenStream): SQLiteParser;
    protected preferredRules: Set<number>;
    protected get splitListener(): SQLiteSplitListener;
    protected createEntityCollector(input: string, caretTokenIndex?: number): SQLiteEntityCollector;
    protected processCandidates(candidates: CandidatesCollection, allTokens: Token[], caretTokenIndex: number, tokenIndexOffset: number): Suggestions<Token>;
}
