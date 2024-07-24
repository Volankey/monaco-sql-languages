import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { DuckDBLexer } from '../../lib/duckdb/DuckDBLexer';
import { DuckDBParser, ProgramContext } from '../../lib/duckdb/DuckDBParser';
import { Suggestions } from '../common/types';
import { BasicSQL } from '../common/basicSQL';
import { DuckDBEntityCollector } from './DuckDBEntityCollector';
import { DuckDBSplitListener } from './DuckDBSplitListener';
export { DuckDBEntityCollector, DuckDBSplitListener };
export declare class DuckDB extends BasicSQL<DuckDBLexer, ProgramContext, DuckDBParser> {
    protected createLexerFromCharStream(charStreams: CharStream): DuckDBLexer;
    protected createParserFromTokenStream(tokenStream: CommonTokenStream): DuckDBParser;
    protected preferredRules: Set<number>;
    protected get splitListener(): DuckDBSplitListener;
    protected createEntityCollector(input: string, caretTokenIndex?: number): DuckDBEntityCollector;
    protected processCandidates(candidates: CandidatesCollection, allTokens: Token[], caretTokenIndex: number, tokenIndexOffset: number): Suggestions<Token>;
}
