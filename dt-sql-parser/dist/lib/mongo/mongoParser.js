// Generated from dt-sql-parser/src/grammar/mongo/mongo.g4 by ANTLR 4.13.1
// @ts-nocheck
import * as antlr from "antlr4ng";
class mongoParser extends antlr.Parser {
    get grammarFileName() { return "mongo.g4"; }
    get literalNames() { return mongoParser.literalNames; }
    get symbolicNames() { return mongoParser.symbolicNames; }
    get ruleNames() { return mongoParser.ruleNames; }
    get serializedATN() { return mongoParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, mongoParser._ATN, mongoParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    program() {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, mongoParser.RULE_program);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 40;
                this.mongoCommands();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    mongoCommands() {
        let localContext = new MongoCommandsContext(this.context, this.state);
        this.enterRule(localContext, 2, mongoParser.RULE_mongoCommands);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 42;
                this.commands();
                this.state = 43;
                this.match(mongoParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    commands() {
        let localContext = new CommandsContext(this.context, this.state);
        this.enterRule(localContext, 4, mongoParser.RULE_commands);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 48;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        this.state = 48;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case mongoParser.DB:
                                {
                                    this.state = 45;
                                    this.command();
                                }
                                break;
                            case mongoParser.SEMICOLON:
                                {
                                    this.state = 46;
                                    this.emptyCommand();
                                }
                                break;
                            case mongoParser.SingleLineComment:
                            case mongoParser.MultiLineComment:
                                {
                                    this.state = 47;
                                    this.comment();
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                    }
                    this.state = 50;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 41943424) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    command() {
        let localContext = new CommandContext(this.context, this.state);
        this.enterRule(localContext, 6, mongoParser.RULE_command);
        try {
            this.state = 67;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context)) {
                case 1:
                    localContext = new DbFunctionCallContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 52;
                        this.match(mongoParser.DB);
                        this.state = 53;
                        this.match(mongoParser.DOT);
                        {
                            this.state = 54;
                            this.functionCall();
                        }
                        this.state = 56;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context)) {
                            case 1:
                                {
                                    this.state = 55;
                                    this.match(mongoParser.SEMICOLON);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    localContext = new DbCollectionFunctionCallContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 58;
                        this.match(mongoParser.DB);
                        this.state = 59;
                        this.match(mongoParser.DOT);
                        {
                            this.state = 60;
                            this.collection();
                            this.state = 61;
                            this.match(mongoParser.DOT);
                            this.state = 62;
                            this.functionCall();
                        }
                        this.state = 65;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context)) {
                            case 1:
                                {
                                    this.state = 64;
                                    this.match(mongoParser.SEMICOLON);
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    emptyCommand() {
        let localContext = new EmptyCommandContext(this.context, this.state);
        this.enterRule(localContext, 8, mongoParser.RULE_emptyCommand);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 69;
                this.match(mongoParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    collection() {
        let localContext = new CollectionContext(this.context, this.state);
        this.enterRule(localContext, 10, mongoParser.RULE_collection);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 71;
                this.collectionName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    functionCall() {
        let localContext = new FunctionCallContext(this.context, this.state);
        this.enterRule(localContext, 12, mongoParser.RULE_functionCall);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 73;
                this.functionName();
                this.state = 74;
                this.arguments();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    functionName() {
        let localContext = new FunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 14, mongoParser.RULE_functionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 76;
                this.match(mongoParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    collectionName() {
        let localContext = new CollectionNameContext(this.context, this.state);
        this.enterRule(localContext, 16, mongoParser.RULE_collectionName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 78;
                this.match(mongoParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    arguments() {
        let localContext = new ArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 18, mongoParser.RULE_arguments);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 80;
                this.match(mongoParser.T__0);
                this.state = 92;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268443152) !== 0)) {
                    {
                        this.state = 81;
                        this.argumentList();
                        this.state = 86;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 82;
                                        this.match(mongoParser.T__1);
                                        this.state = 83;
                                        this.argumentList();
                                    }
                                }
                            }
                            this.state = 88;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                        }
                        this.state = 90;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 2) {
                            {
                                this.state = 89;
                                this.match(mongoParser.T__1);
                            }
                        }
                    }
                }
                this.state = 94;
                this.match(mongoParser.T__2);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    argumentList() {
        let localContext = new ArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 20, mongoParser.RULE_argumentList);
        try {
            this.state = 99;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case mongoParser.StringLiteral:
                case mongoParser.NullLiteral:
                case mongoParser.BooleanLiteral:
                case mongoParser.NumericLiteral:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 96;
                        this.literal();
                    }
                    break;
                case mongoParser.T__3:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 97;
                        this.objectLiteral();
                    }
                    break;
                case mongoParser.OPEN_BRACKET:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 98;
                        this.arrayLiteral();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    objectLiteral() {
        let localContext = new ObjectLiteralContext(this.context, this.state);
        this.enterRule(localContext, 22, mongoParser.RULE_objectLiteral);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 101;
                this.match(mongoParser.T__3);
                this.state = 103;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073746432) !== 0)) {
                    {
                        this.state = 102;
                        this.propertyNameAndValueList();
                    }
                }
                this.state = 106;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 2) {
                    {
                        this.state = 105;
                        this.match(mongoParser.T__1);
                    }
                }
                this.state = 108;
                this.match(mongoParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    arrayLiteral() {
        let localContext = new ArrayLiteralContext(this.context, this.state);
        this.enterRule(localContext, 24, mongoParser.RULE_arrayLiteral);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 110;
                    this.match(mongoParser.OPEN_BRACKET);
                    this.state = 114;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
                    while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                        if (alternative === 1) {
                            {
                                {
                                    this.state = 111;
                                    this.match(mongoParser.WhiteSpaces);
                                }
                            }
                        }
                        this.state = 116;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 11, this.context);
                    }
                    this.state = 117;
                    this.elementList();
                    this.state = 121;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 31) {
                        {
                            {
                                this.state = 118;
                                this.match(mongoParser.WhiteSpaces);
                            }
                        }
                        this.state = 123;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 124;
                    this.match(mongoParser.CLOSED_BRACKET);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    elementList() {
        let localContext = new ElementListContext(this.context, this.state);
        this.enterRule(localContext, 26, mongoParser.RULE_elementList);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 129;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 126;
                                this.match(mongoParser.T__1);
                            }
                        }
                    }
                    this.state = 131;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                }
                this.state = 133;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1342184976) !== 0)) {
                    {
                        this.state = 132;
                        this.propertyValue();
                    }
                }
                this.state = 143;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 136;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 135;
                                            this.match(mongoParser.T__1);
                                        }
                                    }
                                    this.state = 138;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                } while (_la === 2);
                                this.state = 140;
                                this.propertyValue();
                            }
                        }
                    }
                    this.state = 145;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
                }
                this.state = 149;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 2) {
                    {
                        {
                            this.state = 146;
                            this.match(mongoParser.T__1);
                        }
                    }
                    this.state = 151;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    propertyNameAndValueList() {
        let localContext = new PropertyNameAndValueListContext(this.context, this.state);
        this.enterRule(localContext, 28, mongoParser.RULE_propertyNameAndValueList);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 152;
                this.propertyAssignment();
                this.state = 157;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 153;
                                this.match(mongoParser.T__1);
                                this.state = 154;
                                this.propertyAssignment();
                            }
                        }
                    }
                    this.state = 159;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    propertyAssignment() {
        let localContext = new PropertyAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 30, mongoParser.RULE_propertyAssignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 160;
                this.propertyName();
                this.state = 161;
                this.match(mongoParser.T__5);
                this.state = 162;
                this.propertyValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    propertyValue() {
        let localContext = new PropertyValueContext(this.context, this.state);
        this.enterRule(localContext, 32, mongoParser.RULE_propertyValue);
        try {
            this.state = 168;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case mongoParser.StringLiteral:
                case mongoParser.NullLiteral:
                case mongoParser.BooleanLiteral:
                case mongoParser.NumericLiteral:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 164;
                        this.literal();
                    }
                    break;
                case mongoParser.OPEN_BRACKET:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 165;
                        this.arrayLiteral();
                    }
                    break;
                case mongoParser.T__3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 166;
                        this.objectLiteral();
                    }
                    break;
                case mongoParser.STRING_LITERAL:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 167;
                        this.functionCall();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    literal() {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 34, mongoParser.RULE_literal);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 170;
                _la = this.tokenStream.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7680) !== 0))) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    propertyName() {
        let localContext = new PropertyNameContext(this.context, this.state);
        this.enterRule(localContext, 36, mongoParser.RULE_propertyName);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 172;
                _la = this.tokenStream.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073746432) !== 0))) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    comment() {
        let localContext = new CommentContext(this.context, this.state);
        this.enterRule(localContext, 38, mongoParser.RULE_comment);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 174;
                _la = this.tokenStream.LA(1);
                if (!(_la === 7 || _la === 8)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    static get _ATN() {
        if (!mongoParser.__ATN) {
            mongoParser.__ATN = new antlr.ATNDeserializer().deserialize(mongoParser._serializedATN);
        }
        return mongoParser.__ATN;
    }
    get vocabulary() {
        return mongoParser.vocabulary;
    }
}
mongoParser.T__0 = 1;
mongoParser.T__1 = 2;
mongoParser.T__2 = 3;
mongoParser.T__3 = 4;
mongoParser.T__4 = 5;
mongoParser.T__5 = 6;
mongoParser.SingleLineComment = 7;
mongoParser.MultiLineComment = 8;
mongoParser.StringLiteral = 9;
mongoParser.NullLiteral = 10;
mongoParser.BooleanLiteral = 11;
mongoParser.NumericLiteral = 12;
mongoParser.DecimalLiteral = 13;
mongoParser.HexIntegerLiteral = 14;
mongoParser.OctalIntegerLiteral = 15;
mongoParser.OctalIntegerLiteral2 = 16;
mongoParser.BinaryIntegerLiteral = 17;
mongoParser.BigHexIntegerLiteral = 18;
mongoParser.BigOctalIntegerLiteral = 19;
mongoParser.BigBinaryIntegerLiteral = 20;
mongoParser.BigDecimalIntegerLiteral = 21;
mongoParser.LineTerminator = 22;
mongoParser.SEMICOLON = 23;
mongoParser.DOT = 24;
mongoParser.DB = 25;
mongoParser.LF = 26;
mongoParser.CRLF = 27;
mongoParser.OPEN_BRACKET = 28;
mongoParser.CLOSED_BRACKET = 29;
mongoParser.STRING_LITERAL = 30;
mongoParser.WhiteSpaces = 31;
mongoParser.RULE_program = 0;
mongoParser.RULE_mongoCommands = 1;
mongoParser.RULE_commands = 2;
mongoParser.RULE_command = 3;
mongoParser.RULE_emptyCommand = 4;
mongoParser.RULE_collection = 5;
mongoParser.RULE_functionCall = 6;
mongoParser.RULE_functionName = 7;
mongoParser.RULE_collectionName = 8;
mongoParser.RULE_arguments = 9;
mongoParser.RULE_argumentList = 10;
mongoParser.RULE_objectLiteral = 11;
mongoParser.RULE_arrayLiteral = 12;
mongoParser.RULE_elementList = 13;
mongoParser.RULE_propertyNameAndValueList = 14;
mongoParser.RULE_propertyAssignment = 15;
mongoParser.RULE_propertyValue = 16;
mongoParser.RULE_literal = 17;
mongoParser.RULE_propertyName = 18;
mongoParser.RULE_comment = 19;
mongoParser.literalNames = [
    null, "'('", "','", "')'", "'{'", "'}'", "':'", null, null, null,
    "'null'", null, null, null, null, null, null, null, null, null,
    null, null, null, "';'", "'.'", "'db'", "'\\n'", "'\\r\\n'", "'['",
    "']'"
];
mongoParser.symbolicNames = [
    null, null, null, null, null, null, null, "SingleLineComment", "MultiLineComment",
    "StringLiteral", "NullLiteral", "BooleanLiteral", "NumericLiteral",
    "DecimalLiteral", "HexIntegerLiteral", "OctalIntegerLiteral", "OctalIntegerLiteral2",
    "BinaryIntegerLiteral", "BigHexIntegerLiteral", "BigOctalIntegerLiteral",
    "BigBinaryIntegerLiteral", "BigDecimalIntegerLiteral", "LineTerminator",
    "SEMICOLON", "DOT", "DB", "LF", "CRLF", "OPEN_BRACKET", "CLOSED_BRACKET",
    "STRING_LITERAL", "WhiteSpaces"
];
mongoParser.ruleNames = [
    "program", "mongoCommands", "commands", "command", "emptyCommand",
    "collection", "functionCall", "functionName", "collectionName",
    "arguments", "argumentList", "objectLiteral", "arrayLiteral", "elementList",
    "propertyNameAndValueList", "propertyAssignment", "propertyValue",
    "literal", "propertyName", "comment",
];
mongoParser._serializedATN = [
    4, 1, 31, 177, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
    6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
    2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 1, 0,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 4, 2, 49, 8, 2, 11, 2, 12, 2, 50, 1, 3, 1, 3, 1, 3,
    1, 3, 3, 3, 57, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 66, 8, 3, 3, 3, 68, 8, 3,
    1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 9, 1, 9, 1, 9, 1, 9, 5, 9,
    85, 8, 9, 10, 9, 12, 9, 88, 9, 9, 1, 9, 3, 9, 91, 8, 9, 3, 9, 93, 8, 9, 1, 9, 1, 9, 1, 10, 1,
    10, 1, 10, 3, 10, 100, 8, 10, 1, 11, 1, 11, 3, 11, 104, 8, 11, 1, 11, 3, 11, 107, 8, 11,
    1, 11, 1, 11, 1, 12, 1, 12, 5, 12, 113, 8, 12, 10, 12, 12, 12, 116, 9, 12, 1, 12, 1, 12,
    5, 12, 120, 8, 12, 10, 12, 12, 12, 123, 9, 12, 1, 12, 1, 12, 1, 13, 5, 13, 128, 8, 13,
    10, 13, 12, 13, 131, 9, 13, 1, 13, 3, 13, 134, 8, 13, 1, 13, 4, 13, 137, 8, 13, 11, 13,
    12, 13, 138, 1, 13, 5, 13, 142, 8, 13, 10, 13, 12, 13, 145, 9, 13, 1, 13, 5, 13, 148,
    8, 13, 10, 13, 12, 13, 151, 9, 13, 1, 14, 1, 14, 1, 14, 5, 14, 156, 8, 14, 10, 14, 12,
    14, 159, 9, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 169, 8, 16,
    1, 17, 1, 17, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 0, 0, 20, 0, 2, 4, 6, 8, 10, 12, 14, 16,
    18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 0, 3, 1, 0, 9, 12, 3, 0, 9, 9, 12, 12, 30, 30,
    1, 0, 7, 8, 180, 0, 40, 1, 0, 0, 0, 2, 42, 1, 0, 0, 0, 4, 48, 1, 0, 0, 0, 6, 67, 1, 0, 0, 0,
    8, 69, 1, 0, 0, 0, 10, 71, 1, 0, 0, 0, 12, 73, 1, 0, 0, 0, 14, 76, 1, 0, 0, 0, 16, 78, 1, 0,
    0, 0, 18, 80, 1, 0, 0, 0, 20, 99, 1, 0, 0, 0, 22, 101, 1, 0, 0, 0, 24, 110, 1, 0, 0, 0, 26,
    129, 1, 0, 0, 0, 28, 152, 1, 0, 0, 0, 30, 160, 1, 0, 0, 0, 32, 168, 1, 0, 0, 0, 34, 170,
    1, 0, 0, 0, 36, 172, 1, 0, 0, 0, 38, 174, 1, 0, 0, 0, 40, 41, 3, 2, 1, 0, 41, 1, 1, 0, 0, 0,
    42, 43, 3, 4, 2, 0, 43, 44, 5, 0, 0, 1, 44, 3, 1, 0, 0, 0, 45, 49, 3, 6, 3, 0, 46, 49, 3, 8,
    4, 0, 47, 49, 3, 38, 19, 0, 48, 45, 1, 0, 0, 0, 48, 46, 1, 0, 0, 0, 48, 47, 1, 0, 0, 0, 49,
    50, 1, 0, 0, 0, 50, 48, 1, 0, 0, 0, 50, 51, 1, 0, 0, 0, 51, 5, 1, 0, 0, 0, 52, 53, 5, 25, 0,
    0, 53, 54, 5, 24, 0, 0, 54, 56, 3, 12, 6, 0, 55, 57, 5, 23, 0, 0, 56, 55, 1, 0, 0, 0, 56,
    57, 1, 0, 0, 0, 57, 68, 1, 0, 0, 0, 58, 59, 5, 25, 0, 0, 59, 60, 5, 24, 0, 0, 60, 61, 3, 10,
    5, 0, 61, 62, 5, 24, 0, 0, 62, 63, 3, 12, 6, 0, 63, 65, 1, 0, 0, 0, 64, 66, 5, 23, 0, 0, 65,
    64, 1, 0, 0, 0, 65, 66, 1, 0, 0, 0, 66, 68, 1, 0, 0, 0, 67, 52, 1, 0, 0, 0, 67, 58, 1, 0, 0,
    0, 68, 7, 1, 0, 0, 0, 69, 70, 5, 23, 0, 0, 70, 9, 1, 0, 0, 0, 71, 72, 3, 16, 8, 0, 72, 11,
    1, 0, 0, 0, 73, 74, 3, 14, 7, 0, 74, 75, 3, 18, 9, 0, 75, 13, 1, 0, 0, 0, 76, 77, 5, 30, 0,
    0, 77, 15, 1, 0, 0, 0, 78, 79, 5, 30, 0, 0, 79, 17, 1, 0, 0, 0, 80, 92, 5, 1, 0, 0, 81, 86,
    3, 20, 10, 0, 82, 83, 5, 2, 0, 0, 83, 85, 3, 20, 10, 0, 84, 82, 1, 0, 0, 0, 85, 88, 1, 0,
    0, 0, 86, 84, 1, 0, 0, 0, 86, 87, 1, 0, 0, 0, 87, 90, 1, 0, 0, 0, 88, 86, 1, 0, 0, 0, 89, 91,
    5, 2, 0, 0, 90, 89, 1, 0, 0, 0, 90, 91, 1, 0, 0, 0, 91, 93, 1, 0, 0, 0, 92, 81, 1, 0, 0, 0,
    92, 93, 1, 0, 0, 0, 93, 94, 1, 0, 0, 0, 94, 95, 5, 3, 0, 0, 95, 19, 1, 0, 0, 0, 96, 100, 3,
    34, 17, 0, 97, 100, 3, 22, 11, 0, 98, 100, 3, 24, 12, 0, 99, 96, 1, 0, 0, 0, 99, 97, 1,
    0, 0, 0, 99, 98, 1, 0, 0, 0, 100, 21, 1, 0, 0, 0, 101, 103, 5, 4, 0, 0, 102, 104, 3, 28,
    14, 0, 103, 102, 1, 0, 0, 0, 103, 104, 1, 0, 0, 0, 104, 106, 1, 0, 0, 0, 105, 107, 5, 2,
    0, 0, 106, 105, 1, 0, 0, 0, 106, 107, 1, 0, 0, 0, 107, 108, 1, 0, 0, 0, 108, 109, 5, 5,
    0, 0, 109, 23, 1, 0, 0, 0, 110, 114, 5, 28, 0, 0, 111, 113, 5, 31, 0, 0, 112, 111, 1, 0,
    0, 0, 113, 116, 1, 0, 0, 0, 114, 112, 1, 0, 0, 0, 114, 115, 1, 0, 0, 0, 115, 117, 1, 0,
    0, 0, 116, 114, 1, 0, 0, 0, 117, 121, 3, 26, 13, 0, 118, 120, 5, 31, 0, 0, 119, 118, 1,
    0, 0, 0, 120, 123, 1, 0, 0, 0, 121, 119, 1, 0, 0, 0, 121, 122, 1, 0, 0, 0, 122, 124, 1,
    0, 0, 0, 123, 121, 1, 0, 0, 0, 124, 125, 5, 29, 0, 0, 125, 25, 1, 0, 0, 0, 126, 128, 5,
    2, 0, 0, 127, 126, 1, 0, 0, 0, 128, 131, 1, 0, 0, 0, 129, 127, 1, 0, 0, 0, 129, 130, 1,
    0, 0, 0, 130, 133, 1, 0, 0, 0, 131, 129, 1, 0, 0, 0, 132, 134, 3, 32, 16, 0, 133, 132,
    1, 0, 0, 0, 133, 134, 1, 0, 0, 0, 134, 143, 1, 0, 0, 0, 135, 137, 5, 2, 0, 0, 136, 135,
    1, 0, 0, 0, 137, 138, 1, 0, 0, 0, 138, 136, 1, 0, 0, 0, 138, 139, 1, 0, 0, 0, 139, 140,
    1, 0, 0, 0, 140, 142, 3, 32, 16, 0, 141, 136, 1, 0, 0, 0, 142, 145, 1, 0, 0, 0, 143, 141,
    1, 0, 0, 0, 143, 144, 1, 0, 0, 0, 144, 149, 1, 0, 0, 0, 145, 143, 1, 0, 0, 0, 146, 148,
    5, 2, 0, 0, 147, 146, 1, 0, 0, 0, 148, 151, 1, 0, 0, 0, 149, 147, 1, 0, 0, 0, 149, 150,
    1, 0, 0, 0, 150, 27, 1, 0, 0, 0, 151, 149, 1, 0, 0, 0, 152, 157, 3, 30, 15, 0, 153, 154,
    5, 2, 0, 0, 154, 156, 3, 30, 15, 0, 155, 153, 1, 0, 0, 0, 156, 159, 1, 0, 0, 0, 157, 155,
    1, 0, 0, 0, 157, 158, 1, 0, 0, 0, 158, 29, 1, 0, 0, 0, 159, 157, 1, 0, 0, 0, 160, 161, 3,
    36, 18, 0, 161, 162, 5, 6, 0, 0, 162, 163, 3, 32, 16, 0, 163, 31, 1, 0, 0, 0, 164, 169,
    3, 34, 17, 0, 165, 169, 3, 24, 12, 0, 166, 169, 3, 22, 11, 0, 167, 169, 3, 12, 6, 0, 168,
    164, 1, 0, 0, 0, 168, 165, 1, 0, 0, 0, 168, 166, 1, 0, 0, 0, 168, 167, 1, 0, 0, 0, 169,
    33, 1, 0, 0, 0, 170, 171, 7, 0, 0, 0, 171, 35, 1, 0, 0, 0, 172, 173, 7, 1, 0, 0, 173, 37,
    1, 0, 0, 0, 174, 175, 7, 2, 0, 0, 175, 39, 1, 0, 0, 0, 20, 48, 50, 56, 65, 67, 86, 90, 92,
    99, 103, 106, 114, 121, 129, 133, 138, 143, 149, 157, 168
];
mongoParser.vocabulary = new antlr.Vocabulary(mongoParser.literalNames, mongoParser.symbolicNames, []);
mongoParser.decisionsToDFA = mongoParser._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
export { mongoParser };
export class ProgramContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    mongoCommands() {
        return this.getRuleContext(0, MongoCommandsContext);
    }
    get ruleIndex() {
        return mongoParser.RULE_program;
    }
    enterRule(listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    }
    exitRule(listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    }
    accept(visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MongoCommandsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    commands() {
        return this.getRuleContext(0, CommandsContext);
    }
    EOF() {
        return this.getToken(mongoParser.EOF, 0);
    }
    get ruleIndex() {
        return mongoParser.RULE_mongoCommands;
    }
    enterRule(listener) {
        if (listener.enterMongoCommands) {
            listener.enterMongoCommands(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMongoCommands) {
            listener.exitMongoCommands(this);
        }
    }
    accept(visitor) {
        if (visitor.visitMongoCommands) {
            return visitor.visitMongoCommands(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CommandsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    command(i) {
        if (i === undefined) {
            return this.getRuleContexts(CommandContext);
        }
        return this.getRuleContext(i, CommandContext);
    }
    emptyCommand(i) {
        if (i === undefined) {
            return this.getRuleContexts(EmptyCommandContext);
        }
        return this.getRuleContext(i, EmptyCommandContext);
    }
    comment(i) {
        if (i === undefined) {
            return this.getRuleContexts(CommentContext);
        }
        return this.getRuleContext(i, CommentContext);
    }
    get ruleIndex() {
        return mongoParser.RULE_commands;
    }
    enterRule(listener) {
        if (listener.enterCommands) {
            listener.enterCommands(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCommands) {
            listener.exitCommands(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCommands) {
            return visitor.visitCommands(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CommandContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return mongoParser.RULE_command;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class DbFunctionCallContext extends CommandContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DB() {
        return this.getToken(mongoParser.DB, 0);
    }
    DOT() {
        return this.getToken(mongoParser.DOT, 0);
    }
    functionCall() {
        return this.getRuleContext(0, FunctionCallContext);
    }
    SEMICOLON() {
        return this.getToken(mongoParser.SEMICOLON, 0);
    }
    enterRule(listener) {
        if (listener.enterDbFunctionCall) {
            listener.enterDbFunctionCall(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDbFunctionCall) {
            listener.exitDbFunctionCall(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDbFunctionCall) {
            return visitor.visitDbFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DbCollectionFunctionCallContext extends CommandContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DB() {
        return this.getToken(mongoParser.DB, 0);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(mongoParser.DOT);
        }
        else {
            return this.getToken(mongoParser.DOT, i);
        }
    }
    collection() {
        return this.getRuleContext(0, CollectionContext);
    }
    functionCall() {
        return this.getRuleContext(0, FunctionCallContext);
    }
    SEMICOLON() {
        return this.getToken(mongoParser.SEMICOLON, 0);
    }
    enterRule(listener) {
        if (listener.enterDbCollectionFunctionCall) {
            listener.enterDbCollectionFunctionCall(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDbCollectionFunctionCall) {
            listener.exitDbCollectionFunctionCall(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDbCollectionFunctionCall) {
            return visitor.visitDbCollectionFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class EmptyCommandContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SEMICOLON() {
        return this.getToken(mongoParser.SEMICOLON, 0);
    }
    get ruleIndex() {
        return mongoParser.RULE_emptyCommand;
    }
    enterRule(listener) {
        if (listener.enterEmptyCommand) {
            listener.enterEmptyCommand(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEmptyCommand) {
            listener.exitEmptyCommand(this);
        }
    }
    accept(visitor) {
        if (visitor.visitEmptyCommand) {
            return visitor.visitEmptyCommand(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CollectionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    collectionName() {
        return this.getRuleContext(0, CollectionNameContext);
    }
    get ruleIndex() {
        return mongoParser.RULE_collection;
    }
    enterRule(listener) {
        if (listener.enterCollection) {
            listener.enterCollection(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCollection) {
            listener.exitCollection(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCollection) {
            return visitor.visitCollection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    functionName() {
        return this.getRuleContext(0, FunctionNameContext);
    }
    arguments() {
        return this.getRuleContext(0, ArgumentsContext);
    }
    get ruleIndex() {
        return mongoParser.RULE_functionCall;
    }
    enterRule(listener) {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING_LITERAL() {
        return this.getToken(mongoParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return mongoParser.RULE_functionName;
    }
    enterRule(listener) {
        if (listener.enterFunctionName) {
            listener.enterFunctionName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunctionName) {
            listener.exitFunctionName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFunctionName) {
            return visitor.visitFunctionName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CollectionNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING_LITERAL() {
        return this.getToken(mongoParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return mongoParser.RULE_collectionName;
    }
    enterRule(listener) {
        if (listener.enterCollectionName) {
            listener.enterCollectionName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCollectionName) {
            listener.exitCollectionName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCollectionName) {
            return visitor.visitCollectionName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArgumentsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    argumentList(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentListContext);
        }
        return this.getRuleContext(i, ArgumentListContext);
    }
    get ruleIndex() {
        return mongoParser.RULE_arguments;
    }
    enterRule(listener) {
        if (listener.enterArguments) {
            listener.enterArguments(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArguments) {
            listener.exitArguments(this);
        }
    }
    accept(visitor) {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArgumentListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    objectLiteral() {
        return this.getRuleContext(0, ObjectLiteralContext);
    }
    arrayLiteral() {
        return this.getRuleContext(0, ArrayLiteralContext);
    }
    get ruleIndex() {
        return mongoParser.RULE_argumentList;
    }
    enterRule(listener) {
        if (listener.enterArgumentList) {
            listener.enterArgumentList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArgumentList) {
            listener.exitArgumentList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitArgumentList) {
            return visitor.visitArgumentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObjectLiteralContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    propertyNameAndValueList() {
        return this.getRuleContext(0, PropertyNameAndValueListContext);
    }
    get ruleIndex() {
        return mongoParser.RULE_objectLiteral;
    }
    enterRule(listener) {
        if (listener.enterObjectLiteral) {
            listener.enterObjectLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitObjectLiteral) {
            listener.exitObjectLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitObjectLiteral) {
            return visitor.visitObjectLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayLiteralContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    OPEN_BRACKET() {
        return this.getToken(mongoParser.OPEN_BRACKET, 0);
    }
    elementList() {
        return this.getRuleContext(0, ElementListContext);
    }
    CLOSED_BRACKET() {
        return this.getToken(mongoParser.CLOSED_BRACKET, 0);
    }
    WhiteSpaces(i) {
        if (i === undefined) {
            return this.getTokens(mongoParser.WhiteSpaces);
        }
        else {
            return this.getToken(mongoParser.WhiteSpaces, i);
        }
    }
    get ruleIndex() {
        return mongoParser.RULE_arrayLiteral;
    }
    enterRule(listener) {
        if (listener.enterArrayLiteral) {
            listener.enterArrayLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArrayLiteral) {
            listener.exitArrayLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitArrayLiteral) {
            return visitor.visitArrayLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ElementListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    propertyValue(i) {
        if (i === undefined) {
            return this.getRuleContexts(PropertyValueContext);
        }
        return this.getRuleContext(i, PropertyValueContext);
    }
    get ruleIndex() {
        return mongoParser.RULE_elementList;
    }
    enterRule(listener) {
        if (listener.enterElementList) {
            listener.enterElementList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitElementList) {
            listener.exitElementList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitElementList) {
            return visitor.visitElementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PropertyNameAndValueListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    propertyAssignment(i) {
        if (i === undefined) {
            return this.getRuleContexts(PropertyAssignmentContext);
        }
        return this.getRuleContext(i, PropertyAssignmentContext);
    }
    get ruleIndex() {
        return mongoParser.RULE_propertyNameAndValueList;
    }
    enterRule(listener) {
        if (listener.enterPropertyNameAndValueList) {
            listener.enterPropertyNameAndValueList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPropertyNameAndValueList) {
            listener.exitPropertyNameAndValueList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPropertyNameAndValueList) {
            return visitor.visitPropertyNameAndValueList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PropertyAssignmentContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    propertyName() {
        return this.getRuleContext(0, PropertyNameContext);
    }
    propertyValue() {
        return this.getRuleContext(0, PropertyValueContext);
    }
    get ruleIndex() {
        return mongoParser.RULE_propertyAssignment;
    }
    enterRule(listener) {
        if (listener.enterPropertyAssignment) {
            listener.enterPropertyAssignment(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPropertyAssignment) {
            listener.exitPropertyAssignment(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPropertyAssignment) {
            return visitor.visitPropertyAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PropertyValueContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    arrayLiteral() {
        return this.getRuleContext(0, ArrayLiteralContext);
    }
    objectLiteral() {
        return this.getRuleContext(0, ObjectLiteralContext);
    }
    functionCall() {
        return this.getRuleContext(0, FunctionCallContext);
    }
    get ruleIndex() {
        return mongoParser.RULE_propertyValue;
    }
    enterRule(listener) {
        if (listener.enterPropertyValue) {
            listener.enterPropertyValue(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPropertyValue) {
            listener.exitPropertyValue(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPropertyValue) {
            return visitor.visitPropertyValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NullLiteral() {
        return this.getToken(mongoParser.NullLiteral, 0);
    }
    BooleanLiteral() {
        return this.getToken(mongoParser.BooleanLiteral, 0);
    }
    StringLiteral() {
        return this.getToken(mongoParser.StringLiteral, 0);
    }
    NumericLiteral() {
        return this.getToken(mongoParser.NumericLiteral, 0);
    }
    get ruleIndex() {
        return mongoParser.RULE_literal;
    }
    enterRule(listener) {
        if (listener.enterLiteral) {
            listener.enterLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLiteral) {
            listener.exitLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PropertyNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING_LITERAL() {
        return this.getToken(mongoParser.STRING_LITERAL, 0);
    }
    StringLiteral() {
        return this.getToken(mongoParser.StringLiteral, 0);
    }
    NumericLiteral() {
        return this.getToken(mongoParser.NumericLiteral, 0);
    }
    get ruleIndex() {
        return mongoParser.RULE_propertyName;
    }
    enterRule(listener) {
        if (listener.enterPropertyName) {
            listener.enterPropertyName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPropertyName) {
            listener.exitPropertyName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPropertyName) {
            return visitor.visitPropertyName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CommentContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SingleLineComment() {
        return this.getToken(mongoParser.SingleLineComment, 0);
    }
    MultiLineComment() {
        return this.getToken(mongoParser.MultiLineComment, 0);
    }
    get ruleIndex() {
        return mongoParser.RULE_comment;
    }
    enterRule(listener) {
        if (listener.enterComment) {
            listener.enterComment(this);
        }
    }
    exitRule(listener) {
        if (listener.exitComment) {
            listener.exitComment(this);
        }
    }
    accept(visitor) {
        if (visitor.visitComment) {
            return visitor.visitComment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
