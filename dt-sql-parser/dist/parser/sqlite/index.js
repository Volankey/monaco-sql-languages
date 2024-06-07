import { SQLiteLexer } from '../../lib/sqlite/SQLiteLexer';
import { SQLiteParser } from '../../lib/sqlite/SQLiteParser';
import { BasicSQL } from '../common/basicSQL';
import { EntityContextType } from '../common/types';
import { SQLiteSplitListener } from './sqliteSplitListener';
import { SQLiteEntityCollector } from './sqliteEntityCollector';
export { SQLiteEntityCollector, SQLiteSplitListener };
export class SQLite extends BasicSQL {
    constructor() {
        super(...arguments);
        this.preferredRules = new Set([
            SQLiteParser.RULE_table_name,
            SQLiteParser.RULE_view_name,
            SQLiteParser.RULE_function_name,
            SQLiteParser.RULE_column_name,
        ]);
    }
    createLexerFromCharStream(charStreams) {
        return new SQLiteLexer(charStreams);
    }
    createParserFromTokenStream(tokenStream) {
        return new SQLiteParser(tokenStream);
    }
    get splitListener() {
        return new SQLiteSplitListener();
    }
    createEntityCollector(input, caretTokenIndex) {
        return new SQLiteEntityCollector(input, caretTokenIndex);
    }
    processCandidates(candidates, allTokens, caretTokenIndex, tokenIndexOffset) {
        const originalSyntaxSuggestions = [];
        const keywords = [];
        for (const candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
            const tokenRanges = allTokens.slice(startTokenIndex, caretTokenIndex + tokenIndexOffset + 1);
            let syntaxContextType = void 0;
            switch (ruleType) {
                // case SQLiteParser.RULE_databaseName: {
                //     syntaxContextType = EntityContextType.DATABASE;
                //     break;
                // }
                // case SQLiteParser.RULE_databaseNameCreate: {
                //     syntaxContextType = EntityContextType.DATABASE_CREATE;
                //     break;
                // }
                case SQLiteParser.RULE_table_name: {
                    syntaxContextType = EntityContextType.TABLE;
                    break;
                }
                // case SQLiteParser.RULE_tableNameCreate: {
                //     syntaxContextType = EntityContextType.TABLE_CREATE;
                //     break;
                // }
                case SQLiteParser.RULE_view_name: {
                    syntaxContextType = EntityContextType.VIEW;
                    break;
                }
                // case SQLiteParser.RULE_viewNameCreate: {
                //     syntaxContextType = EntityContextType.VIEW_CREATE;
                //     break;
                // }
                case SQLiteParser.RULE_function_name: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                // case SQLiteParser.RULE_functionNameCreate: {
                //     syntaxContextType = EntityContextType.FUNCTION_CREATE;
                //     break;
                // }
                case SQLiteParser.RULE_column_name: {
                    syntaxContextType = EntityContextType.COLUMN;
                    break;
                }
                // case SQLiteParser.RULE_columnNameCreate: {
                //     syntaxContextType = EntityContextType.COLUMN_CREATE;
                //     break;
                // }
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
        for (const candidate of candidates.tokens) {
            const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
            const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
            if (displayName && symbolicName && symbolicName.endsWith('_')) {
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
