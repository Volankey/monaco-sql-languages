import * as antlr from "antlr4ng";
import { mongoListener } from "./mongoListener.js";
import { mongoVisitor } from "./mongoVisitor.js";
export declare class mongoParser extends antlr.Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly T__4 = 5;
    static readonly T__5 = 6;
    static readonly SingleLineComment = 7;
    static readonly MultiLineComment = 8;
    static readonly StringLiteral = 9;
    static readonly NullLiteral = 10;
    static readonly BooleanLiteral = 11;
    static readonly NumericLiteral = 12;
    static readonly DecimalLiteral = 13;
    static readonly HexIntegerLiteral = 14;
    static readonly OctalIntegerLiteral = 15;
    static readonly OctalIntegerLiteral2 = 16;
    static readonly BinaryIntegerLiteral = 17;
    static readonly BigHexIntegerLiteral = 18;
    static readonly BigOctalIntegerLiteral = 19;
    static readonly BigBinaryIntegerLiteral = 20;
    static readonly BigDecimalIntegerLiteral = 21;
    static readonly LineTerminator = 22;
    static readonly SEMICOLON = 23;
    static readonly DOT = 24;
    static readonly DB = 25;
    static readonly LF = 26;
    static readonly CRLF = 27;
    static readonly OPEN_BRACKET = 28;
    static readonly CLOSED_BRACKET = 29;
    static readonly STRING_LITERAL = 30;
    static readonly WhiteSpaces = 31;
    static readonly RULE_program = 0;
    static readonly RULE_mongoCommands = 1;
    static readonly RULE_commands = 2;
    static readonly RULE_command = 3;
    static readonly RULE_emptyCommand = 4;
    static readonly RULE_collection = 5;
    static readonly RULE_functionCall = 6;
    static readonly RULE_functionName = 7;
    static readonly RULE_collectionName = 8;
    static readonly RULE_arguments = 9;
    static readonly RULE_argumentList = 10;
    static readonly RULE_objectLiteral = 11;
    static readonly RULE_arrayLiteral = 12;
    static readonly RULE_elementList = 13;
    static readonly RULE_propertyNameAndValueList = 14;
    static readonly RULE_propertyAssignment = 15;
    static readonly RULE_propertyValue = 16;
    static readonly RULE_literal = 17;
    static readonly RULE_propertyName = 18;
    static readonly RULE_comment = 19;
    static readonly literalNames: (string | null)[];
    static readonly symbolicNames: (string | null)[];
    static readonly ruleNames: string[];
    get grammarFileName(): string;
    get literalNames(): (string | null)[];
    get symbolicNames(): (string | null)[];
    get ruleNames(): string[];
    get serializedATN(): number[];
    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException;
    constructor(input: antlr.TokenStream);
    program(): ProgramContext;
    mongoCommands(): MongoCommandsContext;
    commands(): CommandsContext;
    command(): CommandContext;
    emptyCommand(): EmptyCommandContext;
    collection(): CollectionContext;
    functionCall(): FunctionCallContext;
    functionName(): FunctionNameContext;
    collectionName(): CollectionNameContext;
    arguments(): ArgumentsContext;
    argumentList(): ArgumentListContext;
    objectLiteral(): ObjectLiteralContext;
    arrayLiteral(): ArrayLiteralContext;
    elementList(): ElementListContext;
    propertyNameAndValueList(): PropertyNameAndValueListContext;
    propertyAssignment(): PropertyAssignmentContext;
    propertyValue(): PropertyValueContext;
    literal(): LiteralContext;
    propertyName(): PropertyNameContext;
    comment(): CommentContext;
    static readonly _serializedATN: number[];
    private static __ATN;
    static get _ATN(): antlr.ATN;
    private static readonly vocabulary;
    get vocabulary(): antlr.Vocabulary;
    private static readonly decisionsToDFA;
}
export declare class ProgramContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    mongoCommands(): MongoCommandsContext;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class MongoCommandsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    commands(): CommandsContext;
    EOF(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class CommandsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    command(): CommandContext[];
    command(i: number): CommandContext | null;
    emptyCommand(): EmptyCommandContext[];
    emptyCommand(i: number): EmptyCommandContext | null;
    comment(): CommentContext[];
    comment(i: number): CommentContext | null;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class CommandContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: CommandContext): void;
}
export declare class DbFunctionCallContext extends CommandContext {
    constructor(ctx: CommandContext);
    DB(): antlr.TerminalNode;
    DOT(): antlr.TerminalNode;
    functionCall(): FunctionCallContext | null;
    SEMICOLON(): antlr.TerminalNode | null;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class DbCollectionFunctionCallContext extends CommandContext {
    constructor(ctx: CommandContext);
    DB(): antlr.TerminalNode;
    DOT(): antlr.TerminalNode[];
    DOT(i: number): antlr.TerminalNode | null;
    collection(): CollectionContext | null;
    functionCall(): FunctionCallContext | null;
    SEMICOLON(): antlr.TerminalNode | null;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class EmptyCommandContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SEMICOLON(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class CollectionContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    collectionName(): CollectionNameContext;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class FunctionCallContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    functionName(): FunctionNameContext;
    arguments(): ArgumentsContext;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class FunctionNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STRING_LITERAL(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class CollectionNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STRING_LITERAL(): antlr.TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class ArgumentsContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    argumentList(): ArgumentListContext[];
    argumentList(i: number): ArgumentListContext | null;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class ArgumentListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    literal(): LiteralContext | null;
    objectLiteral(): ObjectLiteralContext | null;
    arrayLiteral(): ArrayLiteralContext | null;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class ObjectLiteralContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    propertyNameAndValueList(): PropertyNameAndValueListContext | null;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class ArrayLiteralContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    OPEN_BRACKET(): antlr.TerminalNode | null;
    elementList(): ElementListContext | null;
    CLOSED_BRACKET(): antlr.TerminalNode | null;
    WhiteSpaces(): antlr.TerminalNode[];
    WhiteSpaces(i: number): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class ElementListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    propertyValue(): PropertyValueContext[];
    propertyValue(i: number): PropertyValueContext | null;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class PropertyNameAndValueListContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    propertyAssignment(): PropertyAssignmentContext[];
    propertyAssignment(i: number): PropertyAssignmentContext | null;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class PropertyAssignmentContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    propertyName(): PropertyNameContext;
    propertyValue(): PropertyValueContext;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class PropertyValueContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    literal(): LiteralContext | null;
    arrayLiteral(): ArrayLiteralContext | null;
    objectLiteral(): ObjectLiteralContext | null;
    functionCall(): FunctionCallContext | null;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class LiteralContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    NullLiteral(): antlr.TerminalNode | null;
    BooleanLiteral(): antlr.TerminalNode | null;
    StringLiteral(): antlr.TerminalNode | null;
    NumericLiteral(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class PropertyNameContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    STRING_LITERAL(): antlr.TerminalNode | null;
    StringLiteral(): antlr.TerminalNode | null;
    NumericLiteral(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
export declare class CommentContext extends antlr.ParserRuleContext {
    constructor(parent: antlr.ParserRuleContext | null, invokingState: number);
    SingleLineComment(): antlr.TerminalNode | null;
    MultiLineComment(): antlr.TerminalNode | null;
    get ruleIndex(): number;
    enterRule(listener: mongoListener): void;
    exitRule(listener: mongoListener): void;
    accept<Result>(visitor: mongoVisitor<Result>): Result | null;
}
