import { DuckDBLexer } from '../../lib/duckdb/DuckDBLexer';
import { DuckDBParser } from '../../lib/duckdb/DuckDBParser';
import { EntityContextType } from '../common/types';
import { BasicSQL } from '../common/basicSQL';
import { DuckDBEntityCollector } from './DuckDBEntityCollector';
import { DuckDBSplitListener } from './DuckDBSplitListener';
export { DuckDBEntityCollector, DuckDBSplitListener };
export class DuckDB extends BasicSQL {
    constructor() {
        super(...arguments);
        this.preferredRules = new Set([
            DuckDBParser.RULE_table_name_create,
            DuckDBParser.RULE_table_name,
            DuckDBParser.RULE_function_name,
            DuckDBParser.RULE_function_name_create,
            DuckDBParser.RULE_schema_name_create,
            DuckDBParser.RULE_schema_name,
            DuckDBParser.RULE_view_name_create,
            DuckDBParser.RULE_view_name,
            DuckDBParser.RULE_database_name_create,
            DuckDBParser.RULE_database_name,
            DuckDBParser.RULE_procedure_name_create,
            DuckDBParser.RULE_procedure_name,
            DuckDBParser.RULE_column_name_create,
            DuckDBParser.RULE_column_name, // column name
        ]);
    }
    createLexerFromCharStream(charStreams) {
        return new DuckDBLexer(charStreams);
    }
    createParserFromTokenStream(tokenStream) {
        return new DuckDBParser(tokenStream);
    }
    get splitListener() {
        return new DuckDBSplitListener();
    }
    createEntityCollector(input, caretTokenIndex) {
        return new DuckDBEntityCollector(input, caretTokenIndex);
    }
    processCandidates(candidates, allTokens, caretTokenIndex, tokenIndexOffset) {
        const originalSyntaxSuggestions = [];
        const keywords = [];
        for (let candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
            const tokenRanges = allTokens.slice(startTokenIndex, caretTokenIndex + tokenIndexOffset + 1);
            let syntaxContextType = void 0;
            switch (ruleType) {
                case DuckDBParser.RULE_table_name_create: {
                    syntaxContextType = EntityContextType.TABLE_CREATE;
                    break;
                }
                case DuckDBParser.RULE_table_name: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                case DuckDBParser.RULE_function_name_create: {
                    syntaxContextType = EntityContextType.FUNCTION_CREATE;
                    break;
                }
                case DuckDBParser.RULE_function_name: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case DuckDBParser.RULE_schema_name_create: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case DuckDBParser.RULE_schema_name: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case DuckDBParser.RULE_view_name_create: {
                    syntaxContextType = EntityContextType.VIEW_CREATE;
                    break;
                }
                case DuckDBParser.RULE_view_name: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                case DuckDBParser.RULE_database_name_create: {
                    syntaxContextType = EntityContextType.DATABASE_CREATE;
                    break;
                }
                case DuckDBParser.RULE_database_name: {
                    syntaxContextType = EntityContextType.DATABASE;
                    break;
                }
                case DuckDBParser.RULE_procedure_name_create: {
                    syntaxContextType = EntityContextType.PROCEDURE_CREATE;
                    break;
                }
                case DuckDBParser.RULE_procedure_name: {
                    syntaxContextType = EntityContextType.PROCEDURE;
                    break;
                }
                case DuckDBParser.RULE_column_name_create: {
                    syntaxContextType = EntityContextType.COLUMN_CREATE;
                    break;
                }
                case DuckDBParser.RULE_column_name: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                default:
                    break;
            }
            if (syntaxContextType) {
                originalSyntaxSuggestions.push({
                    syntaxContextType,
                    wordRanges: tokenRanges,
                });
            }
        }
        for (let candidate of candidates.tokens) {
            const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
            const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
            if (displayName && symbolicName && symbolicName.startsWith('KW_')) {
                const keyword = displayName.startsWith("'") && displayName.endsWith("'")
                    ? displayName.slice(1, -1)
                    : displayName;
                keywords.push(keyword);
            }
        }
        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        };
    }
}
