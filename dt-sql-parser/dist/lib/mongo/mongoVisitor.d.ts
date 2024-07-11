import { AbstractParseTreeVisitor } from "antlr4ng";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `mongoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export declare class mongoVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `mongoParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.mongoCommands`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMongoCommands?: (ctx: MongoCommandsContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.commands`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommands?: (ctx: CommandsContext) => Result;
    /**
     * Visit a parse tree produced by the `dbFunctionCall`
     * labeled alternative in `mongoParser.command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDbFunctionCall?: (ctx: DbFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `dbCollectionFunctionCall`
     * labeled alternative in `mongoParser.command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDbCollectionFunctionCall?: (ctx: DbCollectionFunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.emptyCommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyCommand?: (ctx: EmptyCommandContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.collection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollection?: (ctx: CollectionContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.functionCall`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.collectionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollectionName?: (ctx: CollectionNameContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.arguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArguments?: (ctx: ArgumentsContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.argumentList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgumentList?: (ctx: ArgumentListContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.objectLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectLiteral?: (ctx: ObjectLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.arrayLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.elementList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementList?: (ctx: ElementListContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.propertyNameAndValueList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyNameAndValueList?: (ctx: PropertyNameAndValueListContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.propertyAssignment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyAssignment?: (ctx: PropertyAssignmentContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.propertyValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyValue?: (ctx: PropertyValueContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.propertyName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyName?: (ctx: PropertyNameContext) => Result;
    /**
     * Visit a parse tree produced by `mongoParser.comment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment?: (ctx: CommentContext) => Result;
}
