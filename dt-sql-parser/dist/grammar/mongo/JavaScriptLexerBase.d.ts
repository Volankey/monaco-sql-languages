export default class JavaScriptLexerBase extends antlr4.Lexer {
    constructor(input: any);
    scopeStrictModes: any[];
    lastToken: antlr4.Token | null;
    useStrictDefault: boolean;
    useStrictCurrent: boolean;
    currentDepth: number;
    templateDepthStack: any[];
    getStrictDefault(): boolean;
    setUseStrictDefault(value: any): void;
    IsStrictMode(): boolean;
    IsInTemplateString(): boolean;
    getCurrentToken(): antlr4.Token;
    ProcessOpenBrace(): void;
    ProcessCloseBrace(): void;
    ProcessStringLiteral(): void;
    ProcessTemplateOpenBrace(): void;
    ProcessTemplateCloseBrace(): void;
    IsRegexPossible(): boolean;
    IsStartOfFile(): boolean;
    reset(): void;
}
import * as antlr4 from 'antlr4ng';
