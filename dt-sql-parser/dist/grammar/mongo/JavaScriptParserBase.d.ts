export default class JavaScriptParserBase extends antlr4.Parser {
    constructor(input: any);
    p(str: any): boolean;
    prev(str: any): boolean;
    n(str: any): boolean;
    next(str: any): boolean;
    notLineTerminator(): boolean;
    notOpenBraceAndNotFunction(): boolean;
    closeBrace(): boolean;
    lineTerminatorAhead(): boolean;
}
import * as antlr4 from 'antlr4ng';
