import { mongoLexer as MongoLexer } from '../../lib/mongo/mongoLexer';
import { mongoParser as MongoParser } from '../../lib/mongo/mongoParser';
import { BasicSQL } from '../common/basicSQL';
import { EntityContextType } from '../common/types';
import { MongoSplitListener } from './mongoSplitListener';
import { MongoEntityCollector } from './mongoEntityCollector';
export { MongoEntityCollector, MongoSplitListener };
// @ts-ignore
export class Mongo extends BasicSQL {
    constructor() {
        super(...arguments);
        this.preferredRules = new Set([
            MongoParser.RULE_propertyValue,
            MongoParser.RULE_propertyName,
            MongoParser.RULE_collectionName,
            MongoParser.RULE_propertyName,
            MongoParser.RULE_functionName,
        ]);
    }
    createLexerFromCharStream(charStreams) {
        return new MongoLexer(charStreams);
    }
    createParserFromTokenStream(tokenStream) {
        return new MongoParser(tokenStream);
    }
    get splitListener() {
        return new MongoSplitListener();
    }
    createEntityCollector(input, caretTokenIndex) {
        return new MongoEntityCollector(input, caretTokenIndex);
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
                case MongoParser.RULE_functionCall: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case MongoParser.RULE_collection: {
                    syntaxContextType = EntityContextType.COLLECTION;
                    break;
                }
                case MongoParser.RULE_propertyName: {
                    syntaxContextType = EntityContextType.PROPERTY_NAME;
                    break;
                }
                case MongoParser.RULE_propertyValue: {
                    syntaxContextType = EntityContextType.PROPERTY_VAL;
                    break;
                }
                case MongoParser.RULE_functionName: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case MongoParser.RULE_collectionName: {
                    syntaxContextType = EntityContextType.COLLECTION;
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
