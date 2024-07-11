import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";
import { ProgramContext } from "./mongoParser.js";
import { MongoCommandsContext } from "./mongoParser.js";
import { CommandsContext } from "./mongoParser.js";
import { DbFunctionCallContext } from "./mongoParser.js";
import { DbCollectionFunctionCallContext } from "./mongoParser.js";
import { EmptyCommandContext } from "./mongoParser.js";
import { CollectionContext } from "./mongoParser.js";
import { FunctionCallContext } from "./mongoParser.js";
import { FunctionNameContext } from "./mongoParser.js";
import { CollectionNameContext } from "./mongoParser.js";
import { ArgumentsContext } from "./mongoParser.js";
import { ArgumentListContext } from "./mongoParser.js";
import { ObjectLiteralContext } from "./mongoParser.js";
import { ArrayLiteralContext } from "./mongoParser.js";
import { ElementListContext } from "./mongoParser.js";
import { PropertyNameAndValueListContext } from "./mongoParser.js";
import { PropertyAssignmentContext } from "./mongoParser.js";
import { PropertyValueContext } from "./mongoParser.js";
import { LiteralContext } from "./mongoParser.js";
import { PropertyNameContext } from "./mongoParser.js";
import { CommentContext } from "./mongoParser.js";
/**
 * This interface defines a complete listener for a parse tree produced by
 * `mongoParser`.
 */
export declare class mongoListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `mongoParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.mongoCommands`.
     * @param ctx the parse tree
     */
    enterMongoCommands?: (ctx: MongoCommandsContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.mongoCommands`.
     * @param ctx the parse tree
     */
    exitMongoCommands?: (ctx: MongoCommandsContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.commands`.
     * @param ctx the parse tree
     */
    enterCommands?: (ctx: CommandsContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.commands`.
     * @param ctx the parse tree
     */
    exitCommands?: (ctx: CommandsContext) => void;
    /**
     * Enter a parse tree produced by the `dbFunctionCall`
     * labeled alternative in `mongoParser.command`.
     * @param ctx the parse tree
     */
    enterDbFunctionCall?: (ctx: DbFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `dbFunctionCall`
     * labeled alternative in `mongoParser.command`.
     * @param ctx the parse tree
     */
    exitDbFunctionCall?: (ctx: DbFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `dbCollectionFunctionCall`
     * labeled alternative in `mongoParser.command`.
     * @param ctx the parse tree
     */
    enterDbCollectionFunctionCall?: (ctx: DbCollectionFunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `dbCollectionFunctionCall`
     * labeled alternative in `mongoParser.command`.
     * @param ctx the parse tree
     */
    exitDbCollectionFunctionCall?: (ctx: DbCollectionFunctionCallContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.emptyCommand`.
     * @param ctx the parse tree
     */
    enterEmptyCommand?: (ctx: EmptyCommandContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.emptyCommand`.
     * @param ctx the parse tree
     */
    exitEmptyCommand?: (ctx: EmptyCommandContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.collection`.
     * @param ctx the parse tree
     */
    enterCollection?: (ctx: CollectionContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.collection`.
     * @param ctx the parse tree
     */
    exitCollection?: (ctx: CollectionContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.functionCall`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.functionCall`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.functionName`.
     * @param ctx the parse tree
     */
    enterFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.functionName`.
     * @param ctx the parse tree
     */
    exitFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.collectionName`.
     * @param ctx the parse tree
     */
    enterCollectionName?: (ctx: CollectionNameContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.collectionName`.
     * @param ctx the parse tree
     */
    exitCollectionName?: (ctx: CollectionNameContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.arguments`.
     * @param ctx the parse tree
     */
    enterArguments?: (ctx: ArgumentsContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.arguments`.
     * @param ctx the parse tree
     */
    exitArguments?: (ctx: ArgumentsContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.argumentList`.
     * @param ctx the parse tree
     */
    enterArgumentList?: (ctx: ArgumentListContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.argumentList`.
     * @param ctx the parse tree
     */
    exitArgumentList?: (ctx: ArgumentListContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.objectLiteral`.
     * @param ctx the parse tree
     */
    enterObjectLiteral?: (ctx: ObjectLiteralContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.objectLiteral`.
     * @param ctx the parse tree
     */
    exitObjectLiteral?: (ctx: ObjectLiteralContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.arrayLiteral`.
     * @param ctx the parse tree
     */
    enterArrayLiteral?: (ctx: ArrayLiteralContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.arrayLiteral`.
     * @param ctx the parse tree
     */
    exitArrayLiteral?: (ctx: ArrayLiteralContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.elementList`.
     * @param ctx the parse tree
     */
    enterElementList?: (ctx: ElementListContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.elementList`.
     * @param ctx the parse tree
     */
    exitElementList?: (ctx: ElementListContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.propertyNameAndValueList`.
     * @param ctx the parse tree
     */
    enterPropertyNameAndValueList?: (ctx: PropertyNameAndValueListContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.propertyNameAndValueList`.
     * @param ctx the parse tree
     */
    exitPropertyNameAndValueList?: (ctx: PropertyNameAndValueListContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.propertyAssignment`.
     * @param ctx the parse tree
     */
    enterPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.propertyAssignment`.
     * @param ctx the parse tree
     */
    exitPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.propertyValue`.
     * @param ctx the parse tree
     */
    enterPropertyValue?: (ctx: PropertyValueContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.propertyValue`.
     * @param ctx the parse tree
     */
    exitPropertyValue?: (ctx: PropertyValueContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.literal`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.literal`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.propertyName`.
     * @param ctx the parse tree
     */
    enterPropertyName?: (ctx: PropertyNameContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.propertyName`.
     * @param ctx the parse tree
     */
    exitPropertyName?: (ctx: PropertyNameContext) => void;
    /**
     * Enter a parse tree produced by `mongoParser.comment`.
     * @param ctx the parse tree
     */
    enterComment?: (ctx: CommentContext) => void;
    /**
     * Exit a parse tree produced by `mongoParser.comment`.
     * @param ctx the parse tree
     */
    exitComment?: (ctx: CommentContext) => void;
    visitTerminal(node: TerminalNode): void;
    visitErrorNode(node: ErrorNode): void;
    enterEveryRule(node: ParserRuleContext): void;
    exitEveryRule(node: ParserRuleContext): void;
}
