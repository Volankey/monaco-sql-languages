import * as antlr4 from "antlr4ng";
import { MongoParser } from './MongoParser';
export default class JavaScriptParserBase extends antlr4.Parser {
    constructor(input) {
        super(input);
    }
    p(str) {
        return this.prev(str);
    }
    prev(str) {
        return this._input.LT(-1).text === str;
    }
    // Short form for next(String str)
    n(str) {
        return this.next(str);
    }
    // Whether the next token value equals to @param str
    next(str) {
        return this._input.LT(1).text === str;
    }
    notLineTerminator() {
        return !this.lineTerminatorAhead();
    }
    notOpenBraceAndNotFunction() {
        const nextTokenType = this._input.LT(1).type;
        return (nextTokenType !== MongoParser.OpenBrace &&
            nextTokenType !== MongoParser.Function_);
    }
    closeBrace() {
        return this._input.LT(1).type === MongoParser.CloseBrace;
    }
    lineTerminatorAhead() {
        let possibleIndexEosToken = this.getCurrentToken().tokenIndex - 1;
        if (possibleIndexEosToken < 0)
            return false;
        let ahead = this._input.get(possibleIndexEosToken);
        if (ahead.channel !== antlr4.Lexer.HIDDEN) {
            return false;
        }
        if (ahead.type === MongoParser.LineTerminator) {
            return true;
        }
        if (ahead.type === MongoParser.WhiteSpaces) {
            possibleIndexEosToken = this.getCurrentToken().tokenIndex - 2;
            if (possibleIndexEosToken < 0)
                return false;
            ahead = this._input.get(possibleIndexEosToken);
        }
        const text = ahead.text;
        const type = ahead.type;
        return ((type === MongoParser.MultiLineComment &&
            (text.includes("\r") || text.includes("\n"))) ||
            type === MongoParser.LineTerminator);
    }
}
