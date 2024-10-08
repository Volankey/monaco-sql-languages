// Generated from dt-sql-parser/src/grammar/flink/FlinkSqlParser.g4 by ANTLR 4.13.1
// @ts-nocheck
import * as antlr from "antlr4ng";
import { SQLParserBase } from '../SQLParserBase';
class FlinkSqlParser extends SQLParserBase {
    get grammarFileName() { return "FlinkSqlParser.g4"; }
    get literalNames() { return FlinkSqlParser.literalNames; }
    get symbolicNames() { return FlinkSqlParser.symbolicNames; }
    get ruleNames() { return FlinkSqlParser.ruleNames; }
    get serializedATN() { return FlinkSqlParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, FlinkSqlParser._ATN, FlinkSqlParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    program() {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, FlinkSqlParser.RULE_program);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 379;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 8 || _la === 24 || _la === 72 || ((((_la - 109)) & ~0x1F) === 0 && ((1 << (_la - 109)) & 75497601) !== 0) || _la === 177 || ((((_la - 312)) & ~0x1F) === 0 && ((1 << (_la - 312)) & 822083585) !== 0) || ((((_la - 410)) & ~0x1F) === 0 && ((1 << (_la - 410)) & 142606353) !== 0) || _la === 450 || _la === 468 || ((((_la - 489)) & ~0x1F) === 0 && ((1 << (_la - 489)) & 134219777) !== 0) || _la === 521) {
                    {
                        {
                            this.state = 376;
                            this.singleStatement();
                        }
                    }
                    this.state = 381;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 382;
                this.match(FlinkSqlParser.EOF);
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
    singleStatement() {
        let localContext = new SingleStatementContext(this.context, this.state);
        this.enterRule(localContext, 2, FlinkSqlParser.RULE_singleStatement);
        try {
            this.state = 389;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_ALTER:
                case FlinkSqlParser.KW_BEGIN:
                case FlinkSqlParser.KW_CREATE:
                case FlinkSqlParser.KW_DESCRIBE:
                case FlinkSqlParser.KW_DROP:
                case FlinkSqlParser.KW_EXECUTE:
                case FlinkSqlParser.KW_EXPLAIN:
                case FlinkSqlParser.KW_INSERT:
                case FlinkSqlParser.KW_RESET:
                case FlinkSqlParser.KW_SELECT:
                case FlinkSqlParser.KW_SET:
                case FlinkSqlParser.KW_SHOW:
                case FlinkSqlParser.KW_USE:
                case FlinkSqlParser.KW_VALUES:
                case FlinkSqlParser.KW_WITH:
                case FlinkSqlParser.KW_ADD:
                case FlinkSqlParser.KW_DESC:
                case FlinkSqlParser.KW_LOAD:
                case FlinkSqlParser.KW_REMOVE:
                case FlinkSqlParser.KW_UNLOAD:
                case FlinkSqlParser.LR_BRACKET:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 384;
                        this.sqlStatement();
                        this.state = 386;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context)) {
                            case 1:
                                {
                                    this.state = 385;
                                    this.match(FlinkSqlParser.SEMICOLON);
                                }
                                break;
                        }
                    }
                    break;
                case FlinkSqlParser.SEMICOLON:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 388;
                        this.emptyStatement();
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
    sqlStatement() {
        let localContext = new SqlStatementContext(this.context, this.state);
        this.enterRule(localContext, 4, FlinkSqlParser.RULE_sqlStatement);
        try {
            this.state = 403;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 391;
                        this.ddlStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 392;
                        this.dmlStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 393;
                        this.describeStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 394;
                        this.explainStatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 395;
                        this.useStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 396;
                        this.showStatememt();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 397;
                        this.loadStatement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 398;
                        this.unloadStatememt();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 399;
                        this.setStatememt();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 400;
                        this.resetStatememt();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 401;
                        this.jarStatememt();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localContext, 12);
                    {
                        this.state = 402;
                        this.dtAddStatement();
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
    emptyStatement() {
        let localContext = new EmptyStatementContext(this.context, this.state);
        this.enterRule(localContext, 6, FlinkSqlParser.RULE_emptyStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 405;
                this.match(FlinkSqlParser.SEMICOLON);
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
    ddlStatement() {
        let localContext = new DdlStatementContext(this.context, this.state);
        this.enterRule(localContext, 8, FlinkSqlParser.RULE_ddlStatement);
        try {
            this.state = 421;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 407;
                        this.createTable();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 408;
                        this.createDatabase();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 409;
                        this.createView();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 410;
                        this.createFunction();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 411;
                        this.createCatalog();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 412;
                        this.alterTable();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 413;
                        this.alertView();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 414;
                        this.alterDatabase();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 415;
                        this.alterFunction();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 416;
                        this.dropCatalog();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 417;
                        this.dropTable();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localContext, 12);
                    {
                        this.state = 418;
                        this.dropDatabase();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localContext, 13);
                    {
                        this.state = 419;
                        this.dropView();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(localContext, 14);
                    {
                        this.state = 420;
                        this.dropFunction();
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
    dmlStatement() {
        let localContext = new DmlStatementContext(this.context, this.state);
        this.enterRule(localContext, 10, FlinkSqlParser.RULE_dmlStatement);
        try {
            this.state = 425;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_SELECT:
                case FlinkSqlParser.KW_VALUES:
                case FlinkSqlParser.KW_WITH:
                case FlinkSqlParser.LR_BRACKET:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 423;
                        this.queryStatement(0);
                    }
                    break;
                case FlinkSqlParser.KW_BEGIN:
                case FlinkSqlParser.KW_EXECUTE:
                case FlinkSqlParser.KW_INSERT:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 424;
                        this.insertStatement();
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
    describeStatement() {
        let localContext = new DescribeStatementContext(this.context, this.state);
        this.enterRule(localContext, 12, FlinkSqlParser.RULE_describeStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 427;
                _la = this.tokenStream.LA(1);
                if (!(_la === 109 || _la === 450)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 428;
                this.tablePath();
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
    explainStatement() {
        let localContext = new ExplainStatementContext(this.context, this.state);
        this.enterRule(localContext, 14, FlinkSqlParser.RULE_explainStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 430;
                this.match(FlinkSqlParser.KW_EXPLAIN);
                this.state = 434;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case FlinkSqlParser.KW_CHANGELOG_MODE:
                    case FlinkSqlParser.KW_ESTIMATED_COST:
                    case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
                        {
                            this.state = 431;
                            this.explainDetails();
                        }
                        break;
                    case FlinkSqlParser.KW_PLAN:
                        {
                            this.state = 432;
                            this.match(FlinkSqlParser.KW_PLAN);
                            this.state = 433;
                            this.match(FlinkSqlParser.KW_FOR);
                        }
                        break;
                    case FlinkSqlParser.KW_BEGIN:
                    case FlinkSqlParser.KW_EXECUTE:
                    case FlinkSqlParser.KW_INSERT:
                    case FlinkSqlParser.KW_SELECT:
                    case FlinkSqlParser.KW_STATEMENT:
                    case FlinkSqlParser.KW_VALUES:
                    case FlinkSqlParser.KW_WITH:
                    case FlinkSqlParser.LR_BRACKET:
                        break;
                    default:
                        break;
                }
                this.state = 439;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context)) {
                    case 1:
                        {
                            this.state = 436;
                            this.dmlStatement();
                        }
                        break;
                    case 2:
                        {
                            this.state = 437;
                            this.insertSimpleStatement();
                        }
                        break;
                    case 3:
                        {
                            this.state = 438;
                            this.insertMulStatement();
                        }
                        break;
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
    explainDetails() {
        let localContext = new ExplainDetailsContext(this.context, this.state);
        this.enterRule(localContext, 16, FlinkSqlParser.RULE_explainDetails);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 441;
                this.explainDetail();
                this.state = 446;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 442;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 443;
                            this.explainDetail();
                        }
                    }
                    this.state = 448;
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
    explainDetail() {
        let localContext = new ExplainDetailContext(this.context, this.state);
        this.enterRule(localContext, 18, FlinkSqlParser.RULE_explainDetail);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 449;
                _la = this.tokenStream.LA(1);
                if (!(_la === 45 || _la === 128 || _la === 188)) {
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
    useStatement() {
        let localContext = new UseStatementContext(this.context, this.state);
        this.enterRule(localContext, 20, FlinkSqlParser.RULE_useStatement);
        try {
            this.state = 457;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 451;
                        this.match(FlinkSqlParser.KW_USE);
                        this.state = 452;
                        this.match(FlinkSqlParser.KW_CATALOG);
                        this.state = 453;
                        this.catalogPath();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 454;
                        this.match(FlinkSqlParser.KW_USE);
                        this.state = 455;
                        this.databasePath();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 456;
                        this.useModuleStatement();
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
    useModuleStatement() {
        let localContext = new UseModuleStatementContext(this.context, this.state);
        this.enterRule(localContext, 22, FlinkSqlParser.RULE_useModuleStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 459;
                this.match(FlinkSqlParser.KW_USE);
                this.state = 460;
                this.match(FlinkSqlParser.KW_MODULES);
                this.state = 461;
                this.uid();
                this.state = 466;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 462;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 463;
                            this.uid();
                        }
                    }
                    this.state = 468;
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
    showStatememt() {
        let localContext = new ShowStatememtContext(this.context, this.state);
        this.enterRule(localContext, 24, FlinkSqlParser.RULE_showStatememt);
        let _la;
        try {
            this.state = 511;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 469;
                        this.match(FlinkSqlParser.KW_SHOW);
                        this.state = 470;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 42 || _la === 90 || _la === 422 || _la === 464)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 471;
                        this.match(FlinkSqlParser.KW_SHOW);
                        this.state = 472;
                        this.match(FlinkSqlParser.KW_CURRENT);
                        this.state = 473;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 441 || _la === 447)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 474;
                        this.match(FlinkSqlParser.KW_SHOW);
                        this.state = 475;
                        this.match(FlinkSqlParser.KW_TABLES);
                        this.state = 478;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 151 || _la === 170) {
                            {
                                this.state = 476;
                                _la = this.tokenStream.LA(1);
                                if (!(_la === 151 || _la === 170)) {
                                    this.errorHandler.recoverInline(this);
                                }
                                else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 477;
                                this.databasePath();
                            }
                        }
                        this.state = 481;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 202 || _la === 241) {
                            {
                                this.state = 480;
                                this.likePredicate();
                            }
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 483;
                        this.match(FlinkSqlParser.KW_SHOW);
                        this.state = 484;
                        this.match(FlinkSqlParser.KW_COLUMNS);
                        this.state = 485;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 151 || _la === 170)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 488;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context)) {
                            case 1:
                                {
                                    this.state = 486;
                                    this.viewPath();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 487;
                                    this.tablePath();
                                }
                                break;
                        }
                        this.state = 491;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 202 || _la === 241) {
                            {
                                this.state = 490;
                                this.likePredicate();
                            }
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 493;
                        this.match(FlinkSqlParser.KW_SHOW);
                        this.state = 494;
                        this.match(FlinkSqlParser.KW_CREATE);
                        this.state = 499;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case FlinkSqlParser.KW_TABLE:
                                {
                                    this.state = 495;
                                    this.match(FlinkSqlParser.KW_TABLE);
                                    this.state = 496;
                                    this.tablePath();
                                }
                                break;
                            case FlinkSqlParser.KW_VIEW:
                                {
                                    this.state = 497;
                                    this.match(FlinkSqlParser.KW_VIEW);
                                    this.state = 498;
                                    this.viewPath();
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 501;
                        this.match(FlinkSqlParser.KW_SHOW);
                        this.state = 503;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 411) {
                            {
                                this.state = 502;
                                this.match(FlinkSqlParser.KW_USER);
                            }
                        }
                        this.state = 505;
                        this.match(FlinkSqlParser.KW_FUNCTIONS);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 506;
                        this.match(FlinkSqlParser.KW_SHOW);
                        this.state = 508;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 152) {
                            {
                                this.state = 507;
                                this.match(FlinkSqlParser.KW_FULL);
                            }
                        }
                        this.state = 510;
                        this.match(FlinkSqlParser.KW_MODULES);
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
    loadStatement() {
        let localContext = new LoadStatementContext(this.context, this.state);
        this.enterRule(localContext, 26, FlinkSqlParser.RULE_loadStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 513;
                this.match(FlinkSqlParser.KW_LOAD);
                this.state = 514;
                this.match(FlinkSqlParser.KW_MODULE);
                this.state = 515;
                this.uid();
                this.state = 518;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context)) {
                    case 1:
                        {
                            this.state = 516;
                            this.match(FlinkSqlParser.KW_WITH);
                            this.state = 517;
                            this.tablePropertyList();
                        }
                        break;
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
    unloadStatememt() {
        let localContext = new UnloadStatememtContext(this.context, this.state);
        this.enterRule(localContext, 28, FlinkSqlParser.RULE_unloadStatememt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 520;
                this.match(FlinkSqlParser.KW_UNLOAD);
                this.state = 521;
                this.match(FlinkSqlParser.KW_MODULE);
                this.state = 522;
                this.uid();
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
    setStatememt() {
        let localContext = new SetStatememtContext(this.context, this.state);
        this.enterRule(localContext, 30, FlinkSqlParser.RULE_setStatememt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 524;
                this.match(FlinkSqlParser.KW_SET);
                this.state = 526;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context)) {
                    case 1:
                        {
                            this.state = 525;
                            this.tableProperty();
                        }
                        break;
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
    resetStatememt() {
        let localContext = new ResetStatememtContext(this.context, this.state);
        this.enterRule(localContext, 32, FlinkSqlParser.RULE_resetStatememt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 528;
                this.match(FlinkSqlParser.KW_RESET);
                this.state = 530;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context)) {
                    case 1:
                        {
                            this.state = 529;
                            this.tablePropertyKey();
                        }
                        break;
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
    jarStatememt() {
        let localContext = new JarStatememtContext(this.context, this.state);
        this.enterRule(localContext, 34, FlinkSqlParser.RULE_jarStatememt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 532;
                _la = this.tokenStream.LA(1);
                if (!(_la === 437 || _la === 489)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 533;
                this.match(FlinkSqlParser.KW_JAR);
                this.state = 534;
                this.jarFileName();
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
    dtAddStatement() {
        let localContext = new DtAddStatementContext(this.context, this.state);
        this.enterRule(localContext, 36, FlinkSqlParser.RULE_dtAddStatement);
        let _la;
        try {
            this.state = 586;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 536;
                        this.match(FlinkSqlParser.KW_ADD);
                        this.state = 537;
                        this.match(FlinkSqlParser.KW_JAR);
                        this.state = 538;
                        this.match(FlinkSqlParser.KW_WITH);
                        this.state = 539;
                        this.dtFilePath();
                        this.state = 542;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 17) {
                            {
                                this.state = 540;
                                this.match(FlinkSqlParser.KW_AS);
                                this.state = 541;
                                this.uid();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 544;
                        this.match(FlinkSqlParser.KW_ADD);
                        this.state = 545;
                        this.match(FlinkSqlParser.KW_FILE);
                        this.state = 546;
                        this.match(FlinkSqlParser.KW_WITH);
                        this.state = 547;
                        this.dtFilePath();
                        this.state = 550;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 17) {
                            {
                                this.state = 548;
                                this.match(FlinkSqlParser.KW_AS);
                                this.state = 549;
                                this.uid();
                            }
                        }
                        this.state = 554;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 311) {
                            {
                                this.state = 552;
                                this.match(FlinkSqlParser.KW_RENAME);
                                this.state = 553;
                                this.uid();
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 556;
                        this.match(FlinkSqlParser.KW_ADD);
                        this.state = 557;
                        _la = this.tokenStream.LA(1);
                        if (!(((((_la - 482)) & ~0x1F) === 0 && ((1 << (_la - 482)) & 47) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 558;
                        this.match(FlinkSqlParser.KW_WITH);
                        this.state = 559;
                        this.dtFilePath();
                        this.state = 560;
                        this.match(FlinkSqlParser.KW_RENAME);
                        this.state = 561;
                        this.uid();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 563;
                        this.match(FlinkSqlParser.KW_ADD);
                        this.state = 564;
                        this.match(FlinkSqlParser.KW_PYTHON_PARAMETER);
                        this.state = 565;
                        this.dtFilePath();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 566;
                        this.match(FlinkSqlParser.KW_ADD);
                        this.state = 567;
                        this.match(FlinkSqlParser.KW_ENGINE);
                        this.state = 568;
                        this.match(FlinkSqlParser.KW_FILE);
                        this.state = 569;
                        this.match(FlinkSqlParser.KW_WITH);
                        this.state = 570;
                        this.dtFilePath();
                        this.state = 571;
                        this.match(FlinkSqlParser.KW_RENAME);
                        this.state = 572;
                        this.uid();
                        this.state = 573;
                        this.match(FlinkSqlParser.KW_KEY);
                        this.state = 574;
                        this.uid();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 576;
                        this.match(FlinkSqlParser.KW_ADD);
                        this.state = 577;
                        this.match(FlinkSqlParser.KW_CONFIG);
                        this.state = 578;
                        this.match(FlinkSqlParser.KW_FILE);
                        this.state = 579;
                        this.match(FlinkSqlParser.KW_WITH);
                        this.state = 580;
                        this.dtFilePath();
                        this.state = 581;
                        this.match(FlinkSqlParser.KW_FOR);
                        this.state = 582;
                        this.uid();
                        this.state = 583;
                        this.match(FlinkSqlParser.KW_AS);
                        this.state = 584;
                        this.uid();
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
    dtFilePath() {
        let localContext = new DtFilePathContext(this.context, this.state);
        this.enterRule(localContext, 38, FlinkSqlParser.RULE_dtFilePath);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 592;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 589;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 534) {
                                        {
                                            this.state = 588;
                                            this.match(FlinkSqlParser.SLASH_SIGN);
                                        }
                                    }
                                    this.state = 591;
                                    this.uid();
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 594;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
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
    createTable() {
        let localContext = new CreateTableContext(this.context, this.state);
        this.enterRule(localContext, 40, FlinkSqlParser.RULE_createTable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 598;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context)) {
                    case 1:
                        {
                            this.state = 596;
                            this.simpleCreateTable();
                        }
                        break;
                    case 2:
                        {
                            this.state = 597;
                            this.createTableAsSelect();
                        }
                        break;
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
    simpleCreateTable() {
        let localContext = new SimpleCreateTableContext(this.context, this.state);
        this.enterRule(localContext, 42, FlinkSqlParser.RULE_simpleCreateTable);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 600;
                this.match(FlinkSqlParser.KW_CREATE);
                this.state = 602;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 497) {
                    {
                        this.state = 601;
                        this.match(FlinkSqlParser.KW_TEMPORARY);
                    }
                }
                this.state = 604;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 606;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 167) {
                    {
                        this.state = 605;
                        this.ifNotExists();
                    }
                }
                this.state = 608;
                this.tablePathCreate();
                this.state = 609;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 610;
                this.columnOptionDefinition();
                this.state = 615;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 611;
                                this.match(FlinkSqlParser.COMMA);
                                this.state = 612;
                                this.columnOptionDefinition();
                            }
                        }
                    }
                    this.state = 617;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 31, this.context);
                }
                this.state = 620;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context)) {
                    case 1:
                        {
                            this.state = 618;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 619;
                            this.watermarkDefinition();
                        }
                        break;
                }
                this.state = 624;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context)) {
                    case 1:
                        {
                            this.state = 622;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 623;
                            this.tableConstraint();
                        }
                        break;
                }
                this.state = 628;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 520) {
                    {
                        this.state = 626;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 627;
                        this.selfDefinitionClause();
                    }
                }
                this.state = 630;
                this.match(FlinkSqlParser.RR_BRACKET);
                this.state = 632;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 59) {
                    {
                        this.state = 631;
                        this.commentSpec();
                    }
                }
                this.state = 635;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 269) {
                    {
                        this.state = 634;
                        this.partitionDefinition();
                    }
                }
                this.state = 637;
                this.withOption();
                this.state = 639;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 202) {
                    {
                        this.state = 638;
                        this.likeDefinition();
                    }
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
    createTableAsSelect() {
        let localContext = new CreateTableAsSelectContext(this.context, this.state);
        this.enterRule(localContext, 44, FlinkSqlParser.RULE_createTableAsSelect);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 641;
                this.match(FlinkSqlParser.KW_CREATE);
                this.state = 642;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 644;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 167) {
                    {
                        this.state = 643;
                        this.ifNotExists();
                    }
                }
                this.state = 646;
                this.tablePathCreate();
                this.state = 647;
                this.withOption();
                this.state = 650;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 648;
                        this.match(FlinkSqlParser.KW_AS);
                        this.state = 649;
                        this.queryStatement(0);
                    }
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
    columnOptionDefinition() {
        let localContext = new ColumnOptionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 46, FlinkSqlParser.RULE_columnOptionDefinition);
        try {
            this.state = 655;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 652;
                        this.physicalColumnDefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 653;
                        this.metadataColumnDefinition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 654;
                        this.computedColumnDefinition();
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
    physicalColumnDefinition() {
        let localContext = new PhysicalColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 48, FlinkSqlParser.RULE_physicalColumnDefinition);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 657;
                this.columnNameCreate();
                this.state = 658;
                this.columnType();
                this.state = 660;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 64 || _la === 241 || _la === 244 || _la === 288) {
                    {
                        this.state = 659;
                        this.columnConstraint();
                    }
                }
                this.state = 663;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 59) {
                    {
                        this.state = 662;
                        this.commentSpec();
                    }
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
    columnNameCreate() {
        let localContext = new ColumnNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 50, FlinkSqlParser.RULE_columnNameCreate);
        try {
            this.state = 667;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 665;
                        this.uid();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 666;
                        this.expression();
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
    columnName() {
        let localContext = new ColumnNameContext(this.context, this.state);
        this.enterRule(localContext, 52, FlinkSqlParser.RULE_columnName);
        try {
            this.state = 671;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 669;
                        this.uid();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 670;
                        if (!(this.shouldMatchEmpty())) {
                            throw this.createFailedPredicateException("this.shouldMatchEmpty()");
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
    columnNameList() {
        let localContext = new ColumnNameListContext(this.context, this.state);
        this.enterRule(localContext, 54, FlinkSqlParser.RULE_columnNameList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 673;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 674;
                this.columnName();
                this.state = 679;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 675;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 676;
                            this.columnName();
                        }
                    }
                    this.state = 681;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 682;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    columnType() {
        let localContext = new ColumnTypeContext(this.context, this.state);
        this.enterRule(localContext, 56, FlinkSqlParser.RULE_columnType);
        let _la;
        try {
            this.state = 721;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_BOOLEAN:
                case FlinkSqlParser.KW_DATE:
                case FlinkSqlParser.KW_NULL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 684;
                        localContext._typeName = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 32 || _la === 91 || _la === 244)) {
                            localContext._typeName = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case FlinkSqlParser.KW_BIGINT:
                case FlinkSqlParser.KW_BINARY:
                case FlinkSqlParser.KW_BYTES:
                case FlinkSqlParser.KW_CHAR:
                case FlinkSqlParser.KW_DATETIME:
                case FlinkSqlParser.KW_INT:
                case FlinkSqlParser.KW_INTEGER:
                case FlinkSqlParser.KW_SMALLINT:
                case FlinkSqlParser.KW_STRING:
                case FlinkSqlParser.KW_TIME:
                case FlinkSqlParser.KW_TIMESTAMP_LTZ:
                case FlinkSqlParser.KW_TINYINT:
                case FlinkSqlParser.KW_VARBINARY:
                case FlinkSqlParser.KW_VARCHAR:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 685;
                        localContext._typeName = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 262275) !== 0) || _la === 92 || _la === 178 || _la === 179 || _la === 344 || _la === 360 || ((((_la - 378)) & ~0x1F) === 0 && ((1 << (_la - 378)) & 521) !== 0) || _la === 416 || _la === 417)) {
                            localContext._typeName = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 687;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 516) {
                            {
                                this.state = 686;
                                this.lengthOneDimension();
                            }
                        }
                    }
                    break;
                case FlinkSqlParser.KW_TIMESTAMP:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 689;
                        localContext._typeName = this.match(FlinkSqlParser.KW_TIMESTAMP);
                        this.state = 691;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 516) {
                            {
                                this.state = 690;
                                this.lengthOneDimension();
                            }
                        }
                        this.state = 699;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 433 || _la === 435) {
                            {
                                this.state = 693;
                                _la = this.tokenStream.LA(1);
                                if (!(_la === 433 || _la === 435)) {
                                    this.errorHandler.recoverInline(this);
                                }
                                else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 695;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 206) {
                                    {
                                        this.state = 694;
                                        this.match(FlinkSqlParser.KW_LOCAL);
                                    }
                                }
                                this.state = 697;
                                this.match(FlinkSqlParser.KW_TIME);
                                this.state = 698;
                                this.match(FlinkSqlParser.KW_ZONE);
                            }
                        }
                    }
                    break;
                case FlinkSqlParser.KW_DEC:
                case FlinkSqlParser.KW_DECIMAL:
                case FlinkSqlParser.KW_DOUBLE:
                case FlinkSqlParser.KW_FLOAT:
                case FlinkSqlParser.KW_NUMERIC:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 701;
                        localContext._typeName = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 16387) !== 0) || _la === 144 || _la === 246)) {
                            localContext._typeName = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 703;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 516) {
                            {
                                this.state = 702;
                                this.lengthTwoOptionalDimension();
                            }
                        }
                    }
                    break;
                case FlinkSqlParser.KW_ARRAY:
                case FlinkSqlParser.KW_MULTISET:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 705;
                        localContext._type_ = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 13 || _la === 231)) {
                            localContext._type_ = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 707;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 507) {
                            {
                                this.state = 706;
                                this.lengthOneTypeDimension();
                            }
                        }
                    }
                    break;
                case FlinkSqlParser.KW_MAP:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 709;
                        localContext._type_ = this.match(FlinkSqlParser.KW_MAP);
                        this.state = 711;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 507) {
                            {
                                this.state = 710;
                                this.mapTypeDimension();
                            }
                        }
                    }
                    break;
                case FlinkSqlParser.KW_ROW:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 713;
                        localContext._type_ = this.match(FlinkSqlParser.KW_ROW);
                        this.state = 715;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 507) {
                            {
                                this.state = 714;
                                this.rowTypeDimension();
                            }
                        }
                    }
                    break;
                case FlinkSqlParser.KW_RAW:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 717;
                        localContext._type_ = this.match(FlinkSqlParser.KW_RAW);
                        this.state = 719;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 516) {
                            {
                                this.state = 718;
                                this.lengthTwoStringDimension();
                            }
                        }
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
    lengthOneDimension() {
        let localContext = new LengthOneDimensionContext(this.context, this.state);
        this.enterRule(localContext, 58, FlinkSqlParser.RULE_lengthOneDimension);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 723;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 724;
                this.decimalLiteral();
                this.state = 725;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    lengthTwoOptionalDimension() {
        let localContext = new LengthTwoOptionalDimensionContext(this.context, this.state);
        this.enterRule(localContext, 60, FlinkSqlParser.RULE_lengthTwoOptionalDimension);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 727;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 728;
                this.decimalLiteral();
                this.state = 731;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 520) {
                    {
                        this.state = 729;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 730;
                        this.decimalLiteral();
                    }
                }
                this.state = 733;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    lengthTwoStringDimension() {
        let localContext = new LengthTwoStringDimensionContext(this.context, this.state);
        this.enterRule(localContext, 62, FlinkSqlParser.RULE_lengthTwoStringDimension);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 735;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 736;
                this.stringLiteral();
                this.state = 739;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 520) {
                    {
                        this.state = 737;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 738;
                        this.stringLiteral();
                    }
                }
                this.state = 741;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    lengthOneTypeDimension() {
        let localContext = new LengthOneTypeDimensionContext(this.context, this.state);
        this.enterRule(localContext, 64, FlinkSqlParser.RULE_lengthOneTypeDimension);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 743;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 744;
                this.columnType();
                this.state = 745;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
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
    mapTypeDimension() {
        let localContext = new MapTypeDimensionContext(this.context, this.state);
        this.enterRule(localContext, 66, FlinkSqlParser.RULE_mapTypeDimension);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 747;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 748;
                this.columnType();
                {
                    this.state = 749;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 750;
                    this.columnType();
                }
                this.state = 752;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
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
    rowTypeDimension() {
        let localContext = new RowTypeDimensionContext(this.context, this.state);
        this.enterRule(localContext, 68, FlinkSqlParser.RULE_rowTypeDimension);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 754;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 755;
                this.columnName();
                this.state = 756;
                this.columnType();
                this.state = 763;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 757;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 758;
                            this.columnName();
                            this.state = 759;
                            this.columnType();
                        }
                    }
                    this.state = 765;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 766;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
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
    columnConstraint() {
        let localContext = new ColumnConstraintContext(this.context, this.state);
        this.enterRule(localContext, 70, FlinkSqlParser.RULE_columnConstraint);
        let _la;
        try {
            this.state = 782;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_CONSTRAINT:
                case FlinkSqlParser.KW_PRIMARY:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 770;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 64) {
                            {
                                this.state = 768;
                                this.match(FlinkSqlParser.KW_CONSTRAINT);
                                this.state = 769;
                                this.constraintName();
                            }
                        }
                        this.state = 772;
                        this.match(FlinkSqlParser.KW_PRIMARY);
                        this.state = 773;
                        this.match(FlinkSqlParser.KW_KEY);
                        this.state = 776;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 241) {
                            {
                                this.state = 774;
                                this.match(FlinkSqlParser.KW_NOT);
                                this.state = 775;
                                this.match(FlinkSqlParser.KW_ENFORCED);
                            }
                        }
                    }
                    break;
                case FlinkSqlParser.KW_NOT:
                case FlinkSqlParser.KW_NULL:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 779;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 241) {
                            {
                                this.state = 778;
                                this.match(FlinkSqlParser.KW_NOT);
                            }
                        }
                        this.state = 781;
                        this.match(FlinkSqlParser.KW_NULL);
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
    commentSpec() {
        let localContext = new CommentSpecContext(this.context, this.state);
        this.enterRule(localContext, 72, FlinkSqlParser.RULE_commentSpec);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 784;
                this.match(FlinkSqlParser.KW_COMMENT);
                this.state = 785;
                this.match(FlinkSqlParser.STRING_LITERAL);
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
    metadataColumnDefinition() {
        let localContext = new MetadataColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 74, FlinkSqlParser.RULE_metadataColumnDefinition);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 787;
                this.columnNameCreate();
                this.state = 788;
                this.columnType();
                this.state = 789;
                this.match(FlinkSqlParser.KW_METADATA);
                this.state = 792;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 151) {
                    {
                        this.state = 790;
                        this.match(FlinkSqlParser.KW_FROM);
                        this.state = 791;
                        this.metadataKey();
                    }
                }
                this.state = 795;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 423) {
                    {
                        this.state = 794;
                        this.match(FlinkSqlParser.KW_VIRTUAL);
                    }
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
    metadataKey() {
        let localContext = new MetadataKeyContext(this.context, this.state);
        this.enterRule(localContext, 76, FlinkSqlParser.RULE_metadataKey);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 797;
                this.match(FlinkSqlParser.STRING_LITERAL);
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
    computedColumnDefinition() {
        let localContext = new ComputedColumnDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 78, FlinkSqlParser.RULE_computedColumnDefinition);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 799;
                this.columnNameCreate();
                this.state = 800;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 801;
                this.computedColumnExpression();
                this.state = 803;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 59) {
                    {
                        this.state = 802;
                        this.commentSpec();
                    }
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
    computedColumnExpression() {
        let localContext = new ComputedColumnExpressionContext(this.context, this.state);
        this.enterRule(localContext, 80, FlinkSqlParser.RULE_computedColumnExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 805;
                this.expression();
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
    watermarkDefinition() {
        let localContext = new WatermarkDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 82, FlinkSqlParser.RULE_watermarkDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 807;
                this.match(FlinkSqlParser.KW_WATERMARK);
                this.state = 808;
                this.match(FlinkSqlParser.KW_FOR);
                this.state = 809;
                this.columnName();
                this.state = 810;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 811;
                this.expression();
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
    tableConstraint() {
        let localContext = new TableConstraintContext(this.context, this.state);
        this.enterRule(localContext, 84, FlinkSqlParser.RULE_tableConstraint);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 815;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 64) {
                    {
                        this.state = 813;
                        this.match(FlinkSqlParser.KW_CONSTRAINT);
                        this.state = 814;
                        this.constraintName();
                    }
                }
                this.state = 817;
                this.match(FlinkSqlParser.KW_PRIMARY);
                this.state = 818;
                this.match(FlinkSqlParser.KW_KEY);
                this.state = 819;
                this.columnNameList();
                this.state = 820;
                this.match(FlinkSqlParser.KW_NOT);
                this.state = 821;
                this.match(FlinkSqlParser.KW_ENFORCED);
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
    constraintName() {
        let localContext = new ConstraintNameContext(this.context, this.state);
        this.enterRule(localContext, 86, FlinkSqlParser.RULE_constraintName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 823;
                this.identifier();
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
    selfDefinitionClause() {
        let localContext = new SelfDefinitionClauseContext(this.context, this.state);
        this.enterRule(localContext, 88, FlinkSqlParser.RULE_selfDefinitionClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 825;
                this.match(FlinkSqlParser.KW_PERIOD);
                this.state = 826;
                this.match(FlinkSqlParser.KW_FOR);
                this.state = 827;
                this.match(FlinkSqlParser.KW_SYSTEM_TIME);
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
    partitionDefinition() {
        let localContext = new PartitionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 90, FlinkSqlParser.RULE_partitionDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 829;
                this.match(FlinkSqlParser.KW_PARTITIONED);
                this.state = 830;
                this.match(FlinkSqlParser.KW_BY);
                this.state = 831;
                this.transformList();
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
    transformList() {
        let localContext = new TransformListContext(this.context, this.state);
        this.enterRule(localContext, 92, FlinkSqlParser.RULE_transformList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 833;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 834;
                this.transform();
                this.state = 839;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 835;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 836;
                            this.transform();
                        }
                    }
                    this.state = 841;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 842;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    transform() {
        let localContext = new TransformContext(this.context, this.state);
        this.enterRule(localContext, 94, FlinkSqlParser.RULE_transform);
        let _la;
        try {
            this.state = 856;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 69, this.context)) {
                case 1:
                    localContext = new IdentityTransformContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 844;
                        this.columnName();
                    }
                    break;
                case 2:
                    localContext = new ApplyTransformContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 845;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 846;
                        this.transformArgument();
                        this.state = 851;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 520) {
                            {
                                {
                                    this.state = 847;
                                    this.match(FlinkSqlParser.COMMA);
                                    this.state = 848;
                                    this.transformArgument();
                                }
                            }
                            this.state = 853;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 854;
                        this.match(FlinkSqlParser.RR_BRACKET);
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
    transformArgument() {
        let localContext = new TransformArgumentContext(this.context, this.state);
        this.enterRule(localContext, 96, FlinkSqlParser.RULE_transformArgument);
        try {
            this.state = 860;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 858;
                        this.qualifiedName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 859;
                        this.constant();
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
    likeDefinition() {
        let localContext = new LikeDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 98, FlinkSqlParser.RULE_likeDefinition);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 862;
                this.match(FlinkSqlParser.KW_LIKE);
                this.state = 863;
                this.tablePath();
                this.state = 872;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 72, this.context)) {
                    case 1:
                        {
                            this.state = 864;
                            this.match(FlinkSqlParser.LR_BRACKET);
                            this.state = 868;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 266 || _la === 455 || _la === 462) {
                                {
                                    {
                                        this.state = 865;
                                        this.likeOption();
                                    }
                                }
                                this.state = 870;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 871;
                            this.match(FlinkSqlParser.RR_BRACKET);
                        }
                        break;
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
    likeOption() {
        let localContext = new LikeOptionContext(this.context, this.state);
        this.enterRule(localContext, 100, FlinkSqlParser.RULE_likeOption);
        let _la;
        try {
            this.state = 878;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 73, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 874;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 455 || _la === 462)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 875;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 5 || _la === 270 || _la === 444)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 876;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 266 || _la === 455 || _la === 462)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 877;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 425 || _la === 458 || _la === 477)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
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
    createCatalog() {
        let localContext = new CreateCatalogContext(this.context, this.state);
        this.enterRule(localContext, 102, FlinkSqlParser.RULE_createCatalog);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 880;
                this.match(FlinkSqlParser.KW_CREATE);
                this.state = 881;
                this.match(FlinkSqlParser.KW_CATALOG);
                this.state = 882;
                this.catalogPathCreate();
                this.state = 883;
                this.withOption();
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
    createDatabase() {
        let localContext = new CreateDatabaseContext(this.context, this.state);
        this.enterRule(localContext, 104, FlinkSqlParser.RULE_createDatabase);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 885;
                this.match(FlinkSqlParser.KW_CREATE);
                this.state = 886;
                this.match(FlinkSqlParser.KW_DATABASE);
                this.state = 888;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 167) {
                    {
                        this.state = 887;
                        this.ifNotExists();
                    }
                }
                this.state = 890;
                this.databasePathCreate();
                this.state = 892;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 59) {
                    {
                        this.state = 891;
                        this.commentSpec();
                    }
                }
                this.state = 894;
                this.withOption();
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
    createView() {
        let localContext = new CreateViewContext(this.context, this.state);
        this.enterRule(localContext, 106, FlinkSqlParser.RULE_createView);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 896;
                this.match(FlinkSqlParser.KW_CREATE);
                this.state = 898;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 497) {
                    {
                        this.state = 897;
                        this.match(FlinkSqlParser.KW_TEMPORARY);
                    }
                }
                this.state = 900;
                this.match(FlinkSqlParser.KW_VIEW);
                this.state = 902;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 167) {
                    {
                        this.state = 901;
                        this.ifNotExists();
                    }
                }
                this.state = 904;
                this.viewPathCreate();
                this.state = 906;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 516) {
                    {
                        this.state = 905;
                        this.columnNameList();
                    }
                }
                this.state = 909;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 59) {
                    {
                        this.state = 908;
                        this.commentSpec();
                    }
                }
                this.state = 911;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 912;
                this.queryStatement(0);
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
    createFunction() {
        let localContext = new CreateFunctionContext(this.context, this.state);
        this.enterRule(localContext, 108, FlinkSqlParser.RULE_createFunction);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 914;
                this.match(FlinkSqlParser.KW_CREATE);
                this.state = 918;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context)) {
                    case 1:
                        {
                            this.state = 915;
                            this.match(FlinkSqlParser.KW_TEMPORARY);
                        }
                        break;
                    case 2:
                        {
                            this.state = 916;
                            this.match(FlinkSqlParser.KW_TEMPORARY);
                            this.state = 917;
                            this.match(FlinkSqlParser.KW_SYSTEM);
                        }
                        break;
                }
                this.state = 920;
                this.match(FlinkSqlParser.KW_FUNCTION);
                this.state = 922;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 167) {
                    {
                        this.state = 921;
                        this.ifNotExists();
                    }
                }
                this.state = 924;
                this.functionNameCreate();
                this.state = 925;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 926;
                this.identifier();
                this.state = 929;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 195) {
                    {
                        this.state = 927;
                        this.match(FlinkSqlParser.KW_LANGUAGE);
                        this.state = 928;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 330 || _la === 465 || _la === 481)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 932;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 412) {
                    {
                        this.state = 931;
                        this.usingClause();
                    }
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
    usingClause() {
        let localContext = new UsingClauseContext(this.context, this.state);
        this.enterRule(localContext, 110, FlinkSqlParser.RULE_usingClause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 934;
                this.match(FlinkSqlParser.KW_USING);
                this.state = 935;
                this.match(FlinkSqlParser.KW_JAR);
                this.state = 936;
                this.jarFileName();
                this.state = 942;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 937;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 938;
                            this.match(FlinkSqlParser.KW_JAR);
                            this.state = 939;
                            this.jarFileName();
                        }
                    }
                    this.state = 944;
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
    jarFileName() {
        let localContext = new JarFileNameContext(this.context, this.state);
        this.enterRule(localContext, 112, FlinkSqlParser.RULE_jarFileName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 945;
                this.match(FlinkSqlParser.STRING_LITERAL);
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
    alterTable() {
        let localContext = new AlterTableContext(this.context, this.state);
        this.enterRule(localContext, 114, FlinkSqlParser.RULE_alterTable);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 947;
                this.match(FlinkSqlParser.KW_ALTER);
                this.state = 948;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 950;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 167) {
                    {
                        this.state = 949;
                        this.ifExists();
                    }
                }
                this.state = 952;
                this.tablePath();
                this.state = 958;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 86, this.context)) {
                    case 1:
                        {
                            this.state = 953;
                            this.renameDefinition();
                        }
                        break;
                    case 2:
                        {
                            this.state = 954;
                            this.setKeyValueDefinition();
                        }
                        break;
                    case 3:
                        {
                            this.state = 955;
                            this.addConstraint();
                        }
                        break;
                    case 4:
                        {
                            this.state = 956;
                            this.dropConstraint();
                        }
                        break;
                    case 5:
                        {
                            this.state = 957;
                            this.addUnique();
                        }
                        break;
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
    renameDefinition() {
        let localContext = new RenameDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 116, FlinkSqlParser.RULE_renameDefinition);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 960;
                this.match(FlinkSqlParser.KW_RENAME);
                this.state = 962;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 437)) & ~0x1F) === 0 && ((1 << (_la - 437)) & 4294967295) !== 0) || ((((_la - 469)) & ~0x1F) === 0 && ((1 << (_la - 469)) & 4294967295) !== 0) || ((((_la - 501)) & ~0x1F) === 0 && ((1 << (_la - 501)) & 15) !== 0) || ((((_la - 537)) & ~0x1F) === 0 && ((1 << (_la - 537)) & 19) !== 0)) {
                    {
                        this.state = 961;
                        this.uid();
                    }
                }
                this.state = 964;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 965;
                this.uid();
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
    setKeyValueDefinition() {
        let localContext = new SetKeyValueDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 118, FlinkSqlParser.RULE_setKeyValueDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 967;
                this.match(FlinkSqlParser.KW_SET);
                this.state = 968;
                this.tablePropertyList();
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
    addConstraint() {
        let localContext = new AddConstraintContext(this.context, this.state);
        this.enterRule(localContext, 120, FlinkSqlParser.RULE_addConstraint);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 970;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 971;
                this.match(FlinkSqlParser.KW_CONSTRAINT);
                this.state = 972;
                this.constraintName();
                this.state = 973;
                this.match(FlinkSqlParser.KW_PRIMARY);
                this.state = 974;
                this.match(FlinkSqlParser.KW_KEY);
                this.state = 975;
                this.columnNameList();
                this.state = 977;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 241) {
                    {
                        this.state = 976;
                        this.notForced();
                    }
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
    dropConstraint() {
        let localContext = new DropConstraintContext(this.context, this.state);
        this.enterRule(localContext, 122, FlinkSqlParser.RULE_dropConstraint);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 979;
                this.match(FlinkSqlParser.KW_DROP);
                this.state = 980;
                this.match(FlinkSqlParser.KW_CONSTRAINT);
                this.state = 981;
                this.constraintName();
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
    addUnique() {
        let localContext = new AddUniqueContext(this.context, this.state);
        this.enterRule(localContext, 124, FlinkSqlParser.RULE_addUnique);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 983;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 984;
                this.match(FlinkSqlParser.KW_UNIQUE);
                this.state = 985;
                this.columnNameList();
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
    notForced() {
        let localContext = new NotForcedContext(this.context, this.state);
        this.enterRule(localContext, 126, FlinkSqlParser.RULE_notForced);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 987;
                this.match(FlinkSqlParser.KW_NOT);
                this.state = 988;
                this.match(FlinkSqlParser.KW_ENFORCED);
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
    alertView() {
        let localContext = new AlertViewContext(this.context, this.state);
        this.enterRule(localContext, 128, FlinkSqlParser.RULE_alertView);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 990;
                this.match(FlinkSqlParser.KW_ALTER);
                this.state = 991;
                this.match(FlinkSqlParser.KW_VIEW);
                this.state = 992;
                this.viewPath();
                this.state = 996;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case FlinkSqlParser.KW_RENAME:
                        {
                            this.state = 993;
                            this.renameDefinition();
                        }
                        break;
                    case FlinkSqlParser.KW_AS:
                        {
                            this.state = 994;
                            this.match(FlinkSqlParser.KW_AS);
                            this.state = 995;
                            this.queryStatement(0);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
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
    alterDatabase() {
        let localContext = new AlterDatabaseContext(this.context, this.state);
        this.enterRule(localContext, 130, FlinkSqlParser.RULE_alterDatabase);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 998;
                this.match(FlinkSqlParser.KW_ALTER);
                this.state = 999;
                this.match(FlinkSqlParser.KW_DATABASE);
                this.state = 1000;
                this.databasePath();
                this.state = 1001;
                this.setKeyValueDefinition();
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
    alterFunction() {
        let localContext = new AlterFunctionContext(this.context, this.state);
        this.enterRule(localContext, 132, FlinkSqlParser.RULE_alterFunction);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1003;
                this.match(FlinkSqlParser.KW_ALTER);
                this.state = 1007;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 90, this.context)) {
                    case 1:
                        {
                            this.state = 1004;
                            this.match(FlinkSqlParser.KW_TEMPORARY);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1005;
                            this.match(FlinkSqlParser.KW_TEMPORARY);
                            this.state = 1006;
                            this.match(FlinkSqlParser.KW_SYSTEM);
                        }
                        break;
                }
                this.state = 1009;
                this.match(FlinkSqlParser.KW_FUNCTION);
                this.state = 1011;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 91, this.context)) {
                    case 1:
                        {
                            this.state = 1010;
                            this.ifExists();
                        }
                        break;
                }
                this.state = 1013;
                this.functionName();
                this.state = 1014;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1015;
                this.identifier();
                this.state = 1018;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 195) {
                    {
                        this.state = 1016;
                        this.match(FlinkSqlParser.KW_LANGUAGE);
                        this.state = 1017;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 330 || _la === 465 || _la === 481)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
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
    dropCatalog() {
        let localContext = new DropCatalogContext(this.context, this.state);
        this.enterRule(localContext, 134, FlinkSqlParser.RULE_dropCatalog);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1020;
                this.match(FlinkSqlParser.KW_DROP);
                this.state = 1021;
                this.match(FlinkSqlParser.KW_CATALOG);
                this.state = 1023;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 167) {
                    {
                        this.state = 1022;
                        this.ifExists();
                    }
                }
                this.state = 1025;
                this.catalogPath();
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
    dropTable() {
        let localContext = new DropTableContext(this.context, this.state);
        this.enterRule(localContext, 136, FlinkSqlParser.RULE_dropTable);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1027;
                this.match(FlinkSqlParser.KW_DROP);
                this.state = 1029;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 497) {
                    {
                        this.state = 1028;
                        this.match(FlinkSqlParser.KW_TEMPORARY);
                    }
                }
                this.state = 1031;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1033;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 167) {
                    {
                        this.state = 1032;
                        this.ifExists();
                    }
                }
                this.state = 1035;
                this.tablePath();
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
    dropDatabase() {
        let localContext = new DropDatabaseContext(this.context, this.state);
        this.enterRule(localContext, 138, FlinkSqlParser.RULE_dropDatabase);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1037;
                this.match(FlinkSqlParser.KW_DROP);
                this.state = 1038;
                this.match(FlinkSqlParser.KW_DATABASE);
                this.state = 1040;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 167) {
                    {
                        this.state = 1039;
                        this.ifExists();
                    }
                }
                this.state = 1042;
                this.databasePath();
                this.state = 1044;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 440 || _la === 490) {
                    {
                        this.state = 1043;
                        localContext._dropType = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 440 || _la === 490)) {
                            localContext._dropType = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
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
    dropView() {
        let localContext = new DropViewContext(this.context, this.state);
        this.enterRule(localContext, 140, FlinkSqlParser.RULE_dropView);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1046;
                this.match(FlinkSqlParser.KW_DROP);
                this.state = 1048;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 497) {
                    {
                        this.state = 1047;
                        this.match(FlinkSqlParser.KW_TEMPORARY);
                    }
                }
                this.state = 1050;
                this.match(FlinkSqlParser.KW_VIEW);
                this.state = 1052;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 167) {
                    {
                        this.state = 1051;
                        this.ifExists();
                    }
                }
                this.state = 1054;
                this.viewPath();
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
    dropFunction() {
        let localContext = new DropFunctionContext(this.context, this.state);
        this.enterRule(localContext, 142, FlinkSqlParser.RULE_dropFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1056;
                this.match(FlinkSqlParser.KW_DROP);
                this.state = 1060;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 100, this.context)) {
                    case 1:
                        {
                            this.state = 1057;
                            this.match(FlinkSqlParser.KW_TEMPORARY);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1058;
                            this.match(FlinkSqlParser.KW_TEMPORARY);
                            this.state = 1059;
                            this.match(FlinkSqlParser.KW_SYSTEM);
                        }
                        break;
                }
                this.state = 1062;
                this.match(FlinkSqlParser.KW_FUNCTION);
                this.state = 1064;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context)) {
                    case 1:
                        {
                            this.state = 1063;
                            this.ifExists();
                        }
                        break;
                }
                this.state = 1066;
                this.functionName();
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
    insertStatement() {
        let localContext = new InsertStatementContext(this.context, this.state);
        this.enterRule(localContext, 144, FlinkSqlParser.RULE_insertStatement);
        let _la;
        try {
            this.state = 1075;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 103, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 1069;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 132) {
                                {
                                    this.state = 1068;
                                    this.match(FlinkSqlParser.KW_EXECUTE);
                                }
                            }
                            this.state = 1071;
                            this.insertSimpleStatement();
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1072;
                        this.insertMulStatementCompatibility();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        {
                            this.state = 1073;
                            this.match(FlinkSqlParser.KW_EXECUTE);
                            this.state = 1074;
                            this.insertMulStatement();
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
    insertSimpleStatement() {
        let localContext = new InsertSimpleStatementContext(this.context, this.state);
        this.enterRule(localContext, 146, FlinkSqlParser.RULE_insertSimpleStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1077;
                this.match(FlinkSqlParser.KW_INSERT);
                this.state = 1078;
                _la = this.tokenStream.LA(1);
                if (!(_la === 183 || _la === 265)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1079;
                this.tablePath();
                this.state = 1088;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 106, this.context)) {
                    case 1:
                        {
                            this.state = 1081;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 268) {
                                {
                                    this.state = 1080;
                                    this.insertPartitionDefinition();
                                }
                            }
                            this.state = 1084;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 105, this.context)) {
                                case 1:
                                    {
                                        this.state = 1083;
                                        this.columnNameList();
                                    }
                                    break;
                            }
                            this.state = 1086;
                            this.queryStatement(0);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1087;
                            this.valuesDefinition();
                        }
                        break;
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
    insertPartitionDefinition() {
        let localContext = new InsertPartitionDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 148, FlinkSqlParser.RULE_insertPartitionDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1090;
                this.match(FlinkSqlParser.KW_PARTITION);
                this.state = 1091;
                this.tablePropertyList();
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
    valuesDefinition() {
        let localContext = new ValuesDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 150, FlinkSqlParser.RULE_valuesDefinition);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1093;
                this.match(FlinkSqlParser.KW_VALUES);
                this.state = 1094;
                this.valuesRowDefinition();
                this.state = 1099;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 1095;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 1096;
                            this.valuesRowDefinition();
                        }
                    }
                    this.state = 1101;
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
    valuesRowDefinition() {
        let localContext = new ValuesRowDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 152, FlinkSqlParser.RULE_valuesRowDefinition);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1102;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1103;
                this.constant();
                this.state = 1108;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 1104;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 1105;
                            this.constant();
                        }
                    }
                    this.state = 1110;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1111;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    insertMulStatementCompatibility() {
        let localContext = new InsertMulStatementCompatibilityContext(this.context, this.state);
        this.enterRule(localContext, 154, FlinkSqlParser.RULE_insertMulStatementCompatibility);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1113;
                this.match(FlinkSqlParser.KW_BEGIN);
                this.state = 1114;
                this.match(FlinkSqlParser.KW_STATEMENT);
                this.state = 1115;
                this.match(FlinkSqlParser.KW_SET);
                this.state = 1116;
                this.match(FlinkSqlParser.SEMICOLON);
                this.state = 1120;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 1117;
                            this.insertSimpleStatement();
                            this.state = 1118;
                            this.match(FlinkSqlParser.SEMICOLON);
                        }
                    }
                    this.state = 1122;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 177);
                this.state = 1124;
                this.match(FlinkSqlParser.KW_END);
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
    insertMulStatement() {
        let localContext = new InsertMulStatementContext(this.context, this.state);
        this.enterRule(localContext, 156, FlinkSqlParser.RULE_insertMulStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1126;
                this.match(FlinkSqlParser.KW_STATEMENT);
                this.state = 1127;
                this.match(FlinkSqlParser.KW_SET);
                this.state = 1128;
                this.match(FlinkSqlParser.KW_BEGIN);
                this.state = 1132;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 1129;
                            this.insertSimpleStatement();
                            this.state = 1130;
                            this.match(FlinkSqlParser.SEMICOLON);
                        }
                    }
                    this.state = 1134;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 177);
                this.state = 1136;
                this.match(FlinkSqlParser.KW_END);
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
    queryStatement(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new QueryStatementContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 158;
        this.enterRecursionRule(localContext, 158, FlinkSqlParser.RULE_queryStatement, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1161;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context)) {
                    case 1:
                        {
                            this.state = 1139;
                            this.valuesCaluse();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1140;
                            this.withClause();
                            this.state = 1141;
                            this.queryStatement(5);
                        }
                        break;
                    case 3:
                        {
                            this.state = 1143;
                            this.match(FlinkSqlParser.LR_BRACKET);
                            this.state = 1144;
                            this.queryStatement(0);
                            this.state = 1145;
                            this.match(FlinkSqlParser.RR_BRACKET);
                        }
                        break;
                    case 4:
                        {
                            this.state = 1147;
                            this.selectClause();
                            this.state = 1149;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 111, this.context)) {
                                case 1:
                                    {
                                        this.state = 1148;
                                        this.orderByCaluse();
                                    }
                                    break;
                            }
                            this.state = 1152;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 112, this.context)) {
                                case 1:
                                    {
                                        this.state = 1151;
                                        this.limitClause();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 5:
                        {
                            this.state = 1154;
                            this.selectStatement();
                            this.state = 1156;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 113, this.context)) {
                                case 1:
                                    {
                                        this.state = 1155;
                                        this.orderByCaluse();
                                    }
                                    break;
                            }
                            this.state = 1159;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 114, this.context)) {
                                case 1:
                                    {
                                        this.state = 1158;
                                        this.limitClause();
                                    }
                                    break;
                            }
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 1177;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 119, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new QueryStatementContext(parentContext, parentState);
                                localContext._left = previousContext;
                                this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_queryStatement);
                                this.state = 1163;
                                if (!(this.precpred(this.context, 3))) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                }
                                this.state = 1164;
                                localContext._operator = this.tokenStream.LT(1);
                                _la = this.tokenStream.LA(1);
                                if (!(_la === 130 || _la === 180 || _la === 402)) {
                                    localContext._operator = this.errorHandler.recoverInline(this);
                                }
                                else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 1166;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 5) {
                                    {
                                        this.state = 1165;
                                        this.match(FlinkSqlParser.KW_ALL);
                                    }
                                }
                                this.state = 1168;
                                localContext._right = this.queryStatement(0);
                                this.state = 1170;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 117, this.context)) {
                                    case 1:
                                        {
                                            this.state = 1169;
                                            this.orderByCaluse();
                                        }
                                        break;
                                }
                                this.state = 1173;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 118, this.context)) {
                                    case 1:
                                        {
                                            this.state = 1172;
                                            this.limitClause();
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 1179;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 119, this.context);
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
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    valuesCaluse() {
        let localContext = new ValuesCaluseContext(this.context, this.state);
        this.enterRule(localContext, 160, FlinkSqlParser.RULE_valuesCaluse);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1180;
                this.match(FlinkSqlParser.KW_VALUES);
                this.state = 1181;
                this.expression();
                this.state = 1186;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 120, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1182;
                                this.match(FlinkSqlParser.COMMA);
                                this.state = 1183;
                                this.expression();
                            }
                        }
                    }
                    this.state = 1188;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 120, this.context);
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
    withClause() {
        let localContext = new WithClauseContext(this.context, this.state);
        this.enterRule(localContext, 162, FlinkSqlParser.RULE_withClause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1189;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 1190;
                this.withItem();
                this.state = 1195;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 1191;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 1192;
                            this.withItem();
                        }
                    }
                    this.state = 1197;
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
    withItem() {
        let localContext = new WithItemContext(this.context, this.state);
        this.enterRule(localContext, 164, FlinkSqlParser.RULE_withItem);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1198;
                this.withItemName();
                this.state = 1210;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 516) {
                    {
                        this.state = 1199;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 1200;
                        this.columnName();
                        this.state = 1205;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 520) {
                            {
                                {
                                    this.state = 1201;
                                    this.match(FlinkSqlParser.COMMA);
                                    this.state = 1202;
                                    this.columnName();
                                }
                            }
                            this.state = 1207;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1208;
                        this.match(FlinkSqlParser.RR_BRACKET);
                    }
                }
                this.state = 1212;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1213;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1214;
                this.queryStatement(0);
                this.state = 1215;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    withItemName() {
        let localContext = new WithItemNameContext(this.context, this.state);
        this.enterRule(localContext, 166, FlinkSqlParser.RULE_withItemName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1217;
                this.identifier();
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
    selectStatement() {
        let localContext = new SelectStatementContext(this.context, this.state);
        this.enterRule(localContext, 168, FlinkSqlParser.RULE_selectStatement);
        try {
            this.state = 1239;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 129, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1219;
                        this.selectClause();
                        this.state = 1221;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 124, this.context)) {
                            case 1:
                                {
                                    this.state = 1220;
                                    this.fromClause();
                                }
                                break;
                        }
                        this.state = 1224;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 125, this.context)) {
                            case 1:
                                {
                                    this.state = 1223;
                                    this.whereClause();
                                }
                                break;
                        }
                        this.state = 1227;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 126, this.context)) {
                            case 1:
                                {
                                    this.state = 1226;
                                    this.groupByClause();
                                }
                                break;
                        }
                        this.state = 1230;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 127, this.context)) {
                            case 1:
                                {
                                    this.state = 1229;
                                    this.havingClause();
                                }
                                break;
                        }
                        this.state = 1233;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 128, this.context)) {
                            case 1:
                                {
                                    this.state = 1232;
                                    this.windowClause();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1235;
                        this.selectClause();
                        this.state = 1236;
                        this.fromClause();
                        this.state = 1237;
                        this.matchRecognizeClause();
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
    selectClause() {
        let localContext = new SelectClauseContext(this.context, this.state);
        this.enterRule(localContext, 170, FlinkSqlParser.RULE_selectClause);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1241;
                this.match(FlinkSqlParser.KW_SELECT);
                this.state = 1243;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 130, this.context)) {
                    case 1:
                        {
                            this.state = 1242;
                            this.setQuantifier();
                        }
                        break;
                }
                this.state = 1254;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 132, this.context)) {
                    case 1:
                        {
                            this.state = 1245;
                            this.match(FlinkSqlParser.ASTERISK_SIGN);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1246;
                            this.projectItemDefinition();
                            this.state = 1251;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 131, this.context);
                            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                                if (alternative === 1) {
                                    {
                                        {
                                            this.state = 1247;
                                            this.match(FlinkSqlParser.COMMA);
                                            this.state = 1248;
                                            this.projectItemDefinition();
                                        }
                                    }
                                }
                                this.state = 1253;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 131, this.context);
                            }
                        }
                        break;
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
    projectItemDefinition() {
        let localContext = new ProjectItemDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 172, FlinkSqlParser.RULE_projectItemDefinition);
        let _la;
        try {
            this.state = 1271;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 137, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1256;
                        this.overWindowItem();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1257;
                        this.columnName();
                        this.state = 1262;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 134, this.context)) {
                            case 1:
                                {
                                    this.state = 1259;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 17) {
                                        {
                                            this.state = 1258;
                                            this.match(FlinkSqlParser.KW_AS);
                                        }
                                    }
                                    this.state = 1261;
                                    this.expression();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1264;
                        this.expression();
                        this.state = 1269;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 136, this.context)) {
                            case 1:
                                {
                                    this.state = 1266;
                                    this.errorHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 135, this.context)) {
                                        case 1:
                                            {
                                                this.state = 1265;
                                                this.match(FlinkSqlParser.KW_AS);
                                            }
                                            break;
                                    }
                                    this.state = 1268;
                                    this.columnName();
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
    overWindowItem() {
        let localContext = new OverWindowItemContext(this.context, this.state);
        this.enterRule(localContext, 174, FlinkSqlParser.RULE_overWindowItem);
        try {
            this.state = 1285;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 138, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1273;
                        this.primaryExpression(0);
                        this.state = 1274;
                        this.match(FlinkSqlParser.KW_OVER);
                        this.state = 1275;
                        this.windowSpec();
                        this.state = 1276;
                        this.match(FlinkSqlParser.KW_AS);
                        this.state = 1277;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1279;
                        this.primaryExpression(0);
                        this.state = 1280;
                        this.match(FlinkSqlParser.KW_OVER);
                        this.state = 1281;
                        this.errorCapturingIdentifier();
                        this.state = 1282;
                        this.match(FlinkSqlParser.KW_AS);
                        this.state = 1283;
                        this.identifier();
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
    fromClause() {
        let localContext = new FromClauseContext(this.context, this.state);
        this.enterRule(localContext, 176, FlinkSqlParser.RULE_fromClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1287;
                this.match(FlinkSqlParser.KW_FROM);
                this.state = 1288;
                this.tableExpression(0);
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
    tableExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TableExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 178;
        this.enterRecursionRule(localContext, 178, FlinkSqlParser.RULE_tableExpression, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1301;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 140, this.context)) {
                    case 1:
                        {
                            this.state = 1291;
                            this.tableReference();
                            this.state = 1296;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 139, this.context);
                            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                                if (alternative === 1) {
                                    {
                                        {
                                            this.state = 1292;
                                            this.match(FlinkSqlParser.COMMA);
                                            this.state = 1293;
                                            this.tableReference();
                                        }
                                    }
                                }
                                this.state = 1298;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 139, this.context);
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 1299;
                            this.inlineDataValueClause();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1300;
                            this.windoTVFClause();
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 1324;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 146, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 1322;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 145, this.context)) {
                                case 1:
                                    {
                                        localContext = new TableExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_tableExpression);
                                        this.state = 1303;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 1304;
                                        this.match(FlinkSqlParser.KW_CROSS);
                                        this.state = 1305;
                                        this.match(FlinkSqlParser.KW_JOIN);
                                        this.state = 1306;
                                        this.tableExpression(4);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new TableExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_tableExpression);
                                        this.state = 1307;
                                        if (!(this.precpred(this.context, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                                        }
                                        this.state = 1309;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 233) {
                                            {
                                                this.state = 1308;
                                                this.match(FlinkSqlParser.KW_NATURAL);
                                            }
                                        }
                                        this.state = 1312;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 152 || _la === 174 || _la === 201 || _la === 317) {
                                            {
                                                this.state = 1311;
                                                _la = this.tokenStream.LA(1);
                                                if (!(_la === 152 || _la === 174 || _la === 201 || _la === 317)) {
                                                    this.errorHandler.recoverInline(this);
                                                }
                                                else {
                                                    this.errorHandler.reportMatch(this);
                                                    this.consume();
                                                }
                                            }
                                        }
                                        this.state = 1315;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 261) {
                                            {
                                                this.state = 1314;
                                                this.match(FlinkSqlParser.KW_OUTER);
                                            }
                                        }
                                        this.state = 1317;
                                        this.match(FlinkSqlParser.KW_JOIN);
                                        this.state = 1318;
                                        this.tableExpression(0);
                                        this.state = 1320;
                                        this.errorHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this.tokenStream, 144, this.context)) {
                                            case 1:
                                                {
                                                    this.state = 1319;
                                                    this.joinCondition();
                                                }
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1326;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 146, this.context);
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
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    tableReference() {
        let localContext = new TableReferenceContext(this.context, this.state);
        this.enterRule(localContext, 180, FlinkSqlParser.RULE_tableReference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1327;
                this.tablePrimary();
                this.state = 1329;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 147, this.context)) {
                    case 1:
                        {
                            this.state = 1328;
                            this.tableAlias();
                        }
                        break;
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
    tablePrimary() {
        let localContext = new TablePrimaryContext(this.context, this.state);
        this.enterRule(localContext, 182, FlinkSqlParser.RULE_tablePrimary);
        let _la;
        try {
            this.state = 1382;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 157, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1332;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 373) {
                            {
                                this.state = 1331;
                                this.match(FlinkSqlParser.KW_TABLE);
                            }
                        }
                        this.state = 1334;
                        this.tablePath();
                        this.state = 1336;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 149, this.context)) {
                            case 1:
                                {
                                    this.state = 1335;
                                    this.systemTimePeriod();
                                }
                                break;
                        }
                        this.state = 1342;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 151, this.context)) {
                            case 1:
                                {
                                    this.state = 1339;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 17) {
                                        {
                                            this.state = 1338;
                                            this.match(FlinkSqlParser.KW_AS);
                                        }
                                    }
                                    this.state = 1341;
                                    this.correlationName();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1344;
                        this.viewPath();
                        this.state = 1346;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 152, this.context)) {
                            case 1:
                                {
                                    this.state = 1345;
                                    this.systemTimePeriod();
                                }
                                break;
                        }
                        this.state = 1352;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 154, this.context)) {
                            case 1:
                                {
                                    this.state = 1349;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 17) {
                                        {
                                            this.state = 1348;
                                            this.match(FlinkSqlParser.KW_AS);
                                        }
                                    }
                                    this.state = 1351;
                                    this.correlationName();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1354;
                        this.match(FlinkSqlParser.KW_LATERAL);
                        this.state = 1355;
                        this.match(FlinkSqlParser.KW_TABLE);
                        this.state = 1356;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 1357;
                        this.functionName();
                        this.state = 1358;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 1359;
                        this.functionParam();
                        this.state = 1364;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 520) {
                            {
                                {
                                    this.state = 1360;
                                    this.match(FlinkSqlParser.COMMA);
                                    this.state = 1361;
                                    this.functionParam();
                                }
                            }
                            this.state = 1366;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1367;
                        this.match(FlinkSqlParser.RR_BRACKET);
                        this.state = 1368;
                        this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1371;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 198) {
                            {
                                this.state = 1370;
                                this.match(FlinkSqlParser.KW_LATERAL);
                            }
                        }
                        this.state = 1373;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 1374;
                        this.queryStatement(0);
                        this.state = 1375;
                        this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1377;
                        this.match(FlinkSqlParser.KW_UNNEST);
                        this.state = 1378;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 1379;
                        this.expression();
                        this.state = 1380;
                        this.match(FlinkSqlParser.RR_BRACKET);
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
    systemTimePeriod() {
        let localContext = new SystemTimePeriodContext(this.context, this.state);
        this.enterRule(localContext, 184, FlinkSqlParser.RULE_systemTimePeriod);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1384;
                this.match(FlinkSqlParser.KW_FOR);
                this.state = 1385;
                this.match(FlinkSqlParser.KW_SYSTEM_TIME);
                this.state = 1386;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1387;
                this.match(FlinkSqlParser.KW_OF);
                this.state = 1388;
                this.dateTimeExpression();
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
    dateTimeExpression() {
        let localContext = new DateTimeExpressionContext(this.context, this.state);
        this.enterRule(localContext, 186, FlinkSqlParser.RULE_dateTimeExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1390;
                this.expression();
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
    inlineDataValueClause() {
        let localContext = new InlineDataValueClauseContext(this.context, this.state);
        this.enterRule(localContext, 188, FlinkSqlParser.RULE_inlineDataValueClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1392;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1393;
                this.valuesDefinition();
                this.state = 1394;
                this.match(FlinkSqlParser.RR_BRACKET);
                this.state = 1395;
                this.tableAlias();
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
    windoTVFClause() {
        let localContext = new WindoTVFClauseContext(this.context, this.state);
        this.enterRule(localContext, 190, FlinkSqlParser.RULE_windoTVFClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1397;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1398;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1399;
                this.windowTVFExression();
                this.state = 1400;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    windowTVFExression() {
        let localContext = new WindowTVFExressionContext(this.context, this.state);
        this.enterRule(localContext, 192, FlinkSqlParser.RULE_windowTVFExression);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1402;
                this.windoTVFName();
                this.state = 1403;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1404;
                this.windowTVFParam();
                this.state = 1409;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 1405;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 1406;
                            this.windowTVFParam();
                        }
                    }
                    this.state = 1411;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1412;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    windoTVFName() {
        let localContext = new WindoTVFNameContext(this.context, this.state);
        this.enterRule(localContext, 194, FlinkSqlParser.RULE_windoTVFName);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1414;
                _la = this.tokenStream.LA(1);
                if (!(_la === 445 || _la === 459 || _la === 499)) {
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
    windowTVFParam() {
        let localContext = new WindowTVFParamContext(this.context, this.state);
        this.enterRule(localContext, 196, FlinkSqlParser.RULE_windowTVFParam);
        try {
            this.state = 1431;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 159, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1416;
                        this.match(FlinkSqlParser.KW_TABLE);
                        this.state = 1417;
                        this.timeAttrColumn();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1418;
                        this.columnDescriptor();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1419;
                        this.timeIntervalExpression();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1420;
                        this.match(FlinkSqlParser.KW_DATA);
                        this.state = 1421;
                        this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                        this.state = 1422;
                        this.match(FlinkSqlParser.KW_TABLE);
                        this.state = 1423;
                        this.timeAttrColumn();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1424;
                        this.match(FlinkSqlParser.KW_TIMECOL);
                        this.state = 1425;
                        this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                        this.state = 1426;
                        this.columnDescriptor();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1427;
                        this.timeIntervalParamName();
                        this.state = 1428;
                        this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                        this.state = 1429;
                        this.timeIntervalExpression();
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
    timeIntervalParamName() {
        let localContext = new TimeIntervalParamNameContext(this.context, this.state);
        this.enterRule(localContext, 198, FlinkSqlParser.RULE_timeIntervalParamName);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1433;
                _la = this.tokenStream.LA(1);
                if (!(_la === 250 || _la === 446 || ((((_la - 494)) & ~0x1F) === 0 && ((1 << (_la - 494)) & 23) !== 0))) {
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
    columnDescriptor() {
        let localContext = new ColumnDescriptorContext(this.context, this.state);
        this.enterRule(localContext, 200, FlinkSqlParser.RULE_columnDescriptor);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1435;
                this.match(FlinkSqlParser.KW_DESCRIPTOR);
                this.state = 1436;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1437;
                this.columnName();
                this.state = 1438;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    joinCondition() {
        let localContext = new JoinConditionContext(this.context, this.state);
        this.enterRule(localContext, 202, FlinkSqlParser.RULE_joinCondition);
        try {
            this.state = 1444;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_ON:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1440;
                        this.match(FlinkSqlParser.KW_ON);
                        this.state = 1441;
                        this.booleanExpression(0);
                    }
                    break;
                case FlinkSqlParser.KW_USING:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1442;
                        this.match(FlinkSqlParser.KW_USING);
                        this.state = 1443;
                        this.columnNameList();
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
    whereClause() {
        let localContext = new WhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 204, FlinkSqlParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1446;
                this.match(FlinkSqlParser.KW_WHERE);
                this.state = 1447;
                this.booleanExpression(0);
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
    groupByClause() {
        let localContext = new GroupByClauseContext(this.context, this.state);
        this.enterRule(localContext, 206, FlinkSqlParser.RULE_groupByClause);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1449;
                this.match(FlinkSqlParser.KW_GROUP);
                this.state = 1450;
                this.match(FlinkSqlParser.KW_BY);
                this.state = 1451;
                this.groupItemDefinition();
                this.state = 1456;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1452;
                                this.match(FlinkSqlParser.COMMA);
                                this.state = 1453;
                                this.groupItemDefinition();
                            }
                        }
                    }
                    this.state = 1458;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 161, this.context);
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
    groupItemDefinition() {
        let localContext = new GroupItemDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 208, FlinkSqlParser.RULE_groupItemDefinition);
        let _la;
        try {
            this.state = 1499;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 165, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1459;
                        this.columnName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1460;
                        this.groupWindowFunction();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1461;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 1462;
                        this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1463;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 1464;
                        this.expression();
                        this.state = 1469;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 520) {
                            {
                                {
                                    this.state = 1465;
                                    this.match(FlinkSqlParser.COMMA);
                                    this.state = 1466;
                                    this.expression();
                                }
                            }
                            this.state = 1471;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1472;
                        this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1474;
                        this.groupingSetsNotaionName();
                        this.state = 1475;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 1476;
                        this.expression();
                        this.state = 1481;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 520) {
                            {
                                {
                                    this.state = 1477;
                                    this.match(FlinkSqlParser.COMMA);
                                    this.state = 1478;
                                    this.expression();
                                }
                            }
                            this.state = 1483;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1484;
                        this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1486;
                        this.groupingSets();
                        this.state = 1487;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 1488;
                        this.groupItemDefinition();
                        this.state = 1493;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 520) {
                            {
                                {
                                    this.state = 1489;
                                    this.match(FlinkSqlParser.COMMA);
                                    this.state = 1490;
                                    this.groupItemDefinition();
                                }
                            }
                            this.state = 1495;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1496;
                        this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 1498;
                        this.expression();
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
    groupingSets() {
        let localContext = new GroupingSetsContext(this.context, this.state);
        this.enterRule(localContext, 210, FlinkSqlParser.RULE_groupingSets);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1501;
                this.match(FlinkSqlParser.KW_GROUPING);
                this.state = 1502;
                this.match(FlinkSqlParser.KW_SETS);
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
    groupingSetsNotaionName() {
        let localContext = new GroupingSetsNotaionNameContext(this.context, this.state);
        this.enterRule(localContext, 212, FlinkSqlParser.RULE_groupingSetsNotaionName);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1504;
                _la = this.tokenStream.LA(1);
                if (!(_la === 74 || _la === 320)) {
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
    groupWindowFunction() {
        let localContext = new GroupWindowFunctionContext(this.context, this.state);
        this.enterRule(localContext, 214, FlinkSqlParser.RULE_groupWindowFunction);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1506;
                this.groupWindowFunctionName();
                this.state = 1507;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1508;
                this.timeAttrColumn();
                this.state = 1509;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1510;
                this.timeIntervalExpression();
                this.state = 1511;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    groupWindowFunctionName() {
        let localContext = new GroupWindowFunctionNameContext(this.context, this.state);
        this.enterRule(localContext, 216, FlinkSqlParser.RULE_groupWindowFunctionName);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1513;
                _la = this.tokenStream.LA(1);
                if (!(_la === 459 || _la === 492 || _la === 499)) {
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
    timeAttrColumn() {
        let localContext = new TimeAttrColumnContext(this.context, this.state);
        this.enterRule(localContext, 218, FlinkSqlParser.RULE_timeAttrColumn);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1515;
                this.uid();
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
    havingClause() {
        let localContext = new HavingClauseContext(this.context, this.state);
        this.enterRule(localContext, 220, FlinkSqlParser.RULE_havingClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1517;
                this.match(FlinkSqlParser.KW_HAVING);
                this.state = 1518;
                this.booleanExpression(0);
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
    windowClause() {
        let localContext = new WindowClauseContext(this.context, this.state);
        this.enterRule(localContext, 222, FlinkSqlParser.RULE_windowClause);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1520;
                this.match(FlinkSqlParser.KW_WINDOW);
                this.state = 1521;
                this.namedWindow();
                this.state = 1526;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 166, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1522;
                                this.match(FlinkSqlParser.COMMA);
                                this.state = 1523;
                                this.namedWindow();
                            }
                        }
                    }
                    this.state = 1528;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 166, this.context);
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
    namedWindow() {
        let localContext = new NamedWindowContext(this.context, this.state);
        this.enterRule(localContext, 224, FlinkSqlParser.RULE_namedWindow);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1529;
                localContext._name = this.errorCapturingIdentifier();
                this.state = 1530;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1531;
                this.windowSpec();
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
    windowSpec() {
        let localContext = new WindowSpecContext(this.context, this.state);
        this.enterRule(localContext, 226, FlinkSqlParser.RULE_windowSpec);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1534;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 437)) & ~0x1F) === 0 && ((1 << (_la - 437)) & 4294967295) !== 0) || ((((_la - 469)) & ~0x1F) === 0 && ((1 << (_la - 469)) & 4294967295) !== 0) || ((((_la - 501)) & ~0x1F) === 0 && ((1 << (_la - 501)) & 15) !== 0) || ((((_la - 537)) & ~0x1F) === 0 && ((1 << (_la - 537)) & 19) !== 0)) {
                    {
                        this.state = 1533;
                        localContext._name = this.errorCapturingIdentifier();
                    }
                }
                this.state = 1536;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1538;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 268) {
                    {
                        this.state = 1537;
                        this.partitionByClause();
                    }
                }
                this.state = 1541;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 258) {
                    {
                        this.state = 1540;
                        this.orderByCaluse();
                    }
                }
                this.state = 1544;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 292 || _la === 322) {
                    {
                        this.state = 1543;
                        this.windowFrame();
                    }
                }
                this.state = 1546;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    matchRecognizeClause() {
        let localContext = new MatchRecognizeClauseContext(this.context, this.state);
        this.enterRule(localContext, 228, FlinkSqlParser.RULE_matchRecognizeClause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1548;
                this.match(FlinkSqlParser.KW_MATCH_RECOGNIZE);
                this.state = 1549;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1551;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 268) {
                    {
                        this.state = 1550;
                        this.partitionByClause();
                    }
                }
                this.state = 1554;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 258) {
                    {
                        this.state = 1553;
                        this.orderByCaluse();
                    }
                }
                this.state = 1557;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 215) {
                    {
                        this.state = 1556;
                        this.measuresClause();
                    }
                }
                this.state = 1560;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5 || _la === 254) {
                    {
                        this.state = 1559;
                        this.outputMode();
                    }
                }
                this.state = 1563;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 438) {
                    {
                        this.state = 1562;
                        this.afterMatchStrategy();
                    }
                }
                this.state = 1566;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 271) {
                    {
                        this.state = 1565;
                        this.patternDefination();
                    }
                }
                this.state = 1568;
                this.patternVariablesDefination();
                this.state = 1569;
                this.match(FlinkSqlParser.RR_BRACKET);
                this.state = 1574;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 178, this.context)) {
                    case 1:
                        {
                            this.state = 1571;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 17) {
                                {
                                    this.state = 1570;
                                    this.match(FlinkSqlParser.KW_AS);
                                }
                            }
                            this.state = 1573;
                            this.identifier();
                        }
                        break;
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
    orderByCaluse() {
        let localContext = new OrderByCaluseContext(this.context, this.state);
        this.enterRule(localContext, 230, FlinkSqlParser.RULE_orderByCaluse);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1576;
                this.match(FlinkSqlParser.KW_ORDER);
                this.state = 1577;
                this.match(FlinkSqlParser.KW_BY);
                this.state = 1578;
                this.orderItemDefition();
                this.state = 1583;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 179, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1579;
                                this.match(FlinkSqlParser.COMMA);
                                this.state = 1580;
                                this.orderItemDefition();
                            }
                        }
                    }
                    this.state = 1585;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 179, this.context);
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
    orderItemDefition() {
        let localContext = new OrderItemDefitionContext(this.context, this.state);
        this.enterRule(localContext, 232, FlinkSqlParser.RULE_orderItemDefition);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1586;
                this.columnName();
                this.state = 1588;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 180, this.context)) {
                    case 1:
                        {
                            this.state = 1587;
                            localContext._ordering = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 439 || _la === 450)) {
                                localContext._ordering = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 1592;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 181, this.context)) {
                    case 1:
                        {
                            this.state = 1590;
                            this.match(FlinkSqlParser.KW_NULLS);
                            this.state = 1591;
                            localContext._nullOrder = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 457 || _la === 467)) {
                                localContext._nullOrder = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
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
    limitClause() {
        let localContext = new LimitClauseContext(this.context, this.state);
        this.enterRule(localContext, 234, FlinkSqlParser.RULE_limitClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1594;
                this.match(FlinkSqlParser.KW_LIMIT);
                this.state = 1597;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case FlinkSqlParser.KW_ALL:
                        {
                            this.state = 1595;
                            this.match(FlinkSqlParser.KW_ALL);
                        }
                        break;
                    case FlinkSqlParser.KW_ABS:
                    case FlinkSqlParser.KW_ARRAY:
                    case FlinkSqlParser.KW_AVG:
                    case FlinkSqlParser.KW_CARDINALITY:
                    case FlinkSqlParser.KW_CASE:
                    case FlinkSqlParser.KW_CAST:
                    case FlinkSqlParser.KW_CEIL:
                    case FlinkSqlParser.KW_CEILING:
                    case FlinkSqlParser.KW_COALESCE:
                    case FlinkSqlParser.KW_COLLECT:
                    case FlinkSqlParser.KW_COUNT:
                    case FlinkSqlParser.KW_CUME_DIST:
                    case FlinkSqlParser.KW_CURRENT_DATE:
                    case FlinkSqlParser.KW_CURRENT_TIME:
                    case FlinkSqlParser.KW_CURRENT_TIMESTAMP:
                    case FlinkSqlParser.KW_DATE:
                    case FlinkSqlParser.KW_DAY:
                    case FlinkSqlParser.KW_DAYOFWEEK:
                    case FlinkSqlParser.KW_DAYOFYEAR:
                    case FlinkSqlParser.KW_DENSE_RANK:
                    case FlinkSqlParser.KW_ELEMENT:
                    case FlinkSqlParser.KW_EXISTS:
                    case FlinkSqlParser.KW_EXP:
                    case FlinkSqlParser.KW_EXTRACT:
                    case FlinkSqlParser.KW_FALSE:
                    case FlinkSqlParser.KW_FIRST_VALUE:
                    case FlinkSqlParser.KW_FLOOR:
                    case FlinkSqlParser.KW_GROUPING:
                    case FlinkSqlParser.KW_HOUR:
                    case FlinkSqlParser.KW_IF:
                    case FlinkSqlParser.KW_INTERVAL:
                    case FlinkSqlParser.KW_LAG:
                    case FlinkSqlParser.KW_LAST_VALUE:
                    case FlinkSqlParser.KW_LEAD:
                    case FlinkSqlParser.KW_LEFT:
                    case FlinkSqlParser.KW_LN:
                    case FlinkSqlParser.KW_LOCALTIME:
                    case FlinkSqlParser.KW_LOCALTIMESTAMP:
                    case FlinkSqlParser.KW_LOWER:
                    case FlinkSqlParser.KW_MAX:
                    case FlinkSqlParser.KW_MIN:
                    case FlinkSqlParser.KW_MINUTE:
                    case FlinkSqlParser.KW_MOD:
                    case FlinkSqlParser.KW_MONTH:
                    case FlinkSqlParser.KW_NOT:
                    case FlinkSqlParser.KW_NTILE:
                    case FlinkSqlParser.KW_NULL:
                    case FlinkSqlParser.KW_NULLIF:
                    case FlinkSqlParser.KW_OVERLAY:
                    case FlinkSqlParser.KW_PERCENT_RANK:
                    case FlinkSqlParser.KW_POSITION:
                    case FlinkSqlParser.KW_POWER:
                    case FlinkSqlParser.KW_RANK:
                    case FlinkSqlParser.KW_RIGHT:
                    case FlinkSqlParser.KW_ROW:
                    case FlinkSqlParser.KW_ROWS:
                    case FlinkSqlParser.KW_ROW_NUMBER:
                    case FlinkSqlParser.KW_SECOND:
                    case FlinkSqlParser.KW_STDDEV_POP:
                    case FlinkSqlParser.KW_STDDEV_SAMP:
                    case FlinkSqlParser.KW_SUBSTRING:
                    case FlinkSqlParser.KW_SUM:
                    case FlinkSqlParser.KW_TIME:
                    case FlinkSqlParser.KW_TIMESTAMP:
                    case FlinkSqlParser.KW_TIMESTAMP_DIFF:
                    case FlinkSqlParser.KW_TRIM:
                    case FlinkSqlParser.KW_TRUE:
                    case FlinkSqlParser.KW_TRUNCATE:
                    case FlinkSqlParser.KW_TRY_CAST:
                    case FlinkSqlParser.KW_UPPER:
                    case FlinkSqlParser.KW_VAR_POP:
                    case FlinkSqlParser.KW_VAR_SAMP:
                    case FlinkSqlParser.KW_YEAR:
                    case FlinkSqlParser.KW_ADD:
                    case FlinkSqlParser.KW_AFTER:
                    case FlinkSqlParser.KW_ASC:
                    case FlinkSqlParser.KW_CASCADE:
                    case FlinkSqlParser.KW_CATALOG:
                    case FlinkSqlParser.KW_CENTURY:
                    case FlinkSqlParser.KW_CONFIG:
                    case FlinkSqlParser.KW_CONSTRAINTS:
                    case FlinkSqlParser.KW_CUMULATE:
                    case FlinkSqlParser.KW_DATA:
                    case FlinkSqlParser.KW_DATABASE:
                    case FlinkSqlParser.KW_DAYS:
                    case FlinkSqlParser.KW_DECADE:
                    case FlinkSqlParser.KW_DESC:
                    case FlinkSqlParser.KW_DESCRIPTOR:
                    case FlinkSqlParser.KW_DIV:
                    case FlinkSqlParser.KW_ENGINE:
                    case FlinkSqlParser.KW_EPOCH:
                    case FlinkSqlParser.KW_EXCLUDING:
                    case FlinkSqlParser.KW_FILE:
                    case FlinkSqlParser.KW_FIRST:
                    case FlinkSqlParser.KW_GENERATED:
                    case FlinkSqlParser.KW_HOP:
                    case FlinkSqlParser.KW_HOURS:
                    case FlinkSqlParser.KW_IGNORE:
                    case FlinkSqlParser.KW_INCLUDING:
                    case FlinkSqlParser.KW_JAR:
                    case FlinkSqlParser.KW_JARS:
                    case FlinkSqlParser.KW_JAVA:
                    case FlinkSqlParser.KW_KEY:
                    case FlinkSqlParser.KW_LAST:
                    case FlinkSqlParser.KW_LOAD:
                    case FlinkSqlParser.KW_MAP:
                    case FlinkSqlParser.KW_MICROSECOND:
                    case FlinkSqlParser.KW_MILLENNIUM:
                    case FlinkSqlParser.KW_MILLISECOND:
                    case FlinkSqlParser.KW_MINUTES:
                    case FlinkSqlParser.KW_MONTHS:
                    case FlinkSqlParser.KW_NANOSECOND:
                    case FlinkSqlParser.KW_NULLS:
                    case FlinkSqlParser.KW_OPTIONS:
                    case FlinkSqlParser.KW_PAST:
                    case FlinkSqlParser.KW_PLAN:
                    case FlinkSqlParser.KW_PRECEDING:
                    case FlinkSqlParser.KW_PYTHON:
                    case FlinkSqlParser.KW_PYTHON_ARCHIVES:
                    case FlinkSqlParser.KW_PYTHON_DEPENDENCIES:
                    case FlinkSqlParser.KW_PYTHON_FILES:
                    case FlinkSqlParser.KW_PYTHON_JAR:
                    case FlinkSqlParser.KW_PYTHON_PARAMETER:
                    case FlinkSqlParser.KW_PYTHON_REQUIREMENTS:
                    case FlinkSqlParser.KW_QUARTER:
                    case FlinkSqlParser.KW_REMOVE:
                    case FlinkSqlParser.KW_RESTRICT:
                    case FlinkSqlParser.KW_SECONDS:
                    case FlinkSqlParser.KW_SESSION:
                    case FlinkSqlParser.KW_SETS:
                    case FlinkSqlParser.KW_SIZE:
                    case FlinkSqlParser.KW_SLIDE:
                    case FlinkSqlParser.KW_STEP:
                    case FlinkSqlParser.KW_TEMPORARY:
                    case FlinkSqlParser.KW_TIMECOL:
                    case FlinkSqlParser.KW_TUMBLE:
                    case FlinkSqlParser.KW_UNLOAD:
                    case FlinkSqlParser.KW_VIEW:
                    case FlinkSqlParser.KW_WEEK:
                    case FlinkSqlParser.KW_YEARS:
                    case FlinkSqlParser.KW_ZONE:
                    case FlinkSqlParser.BIT_NOT_OP:
                    case FlinkSqlParser.LR_BRACKET:
                    case FlinkSqlParser.ASTERISK_SIGN:
                    case FlinkSqlParser.HYPNEN_SIGN:
                    case FlinkSqlParser.ADD_SIGN:
                    case FlinkSqlParser.STRING_LITERAL:
                    case FlinkSqlParser.DIG_LITERAL:
                    case FlinkSqlParser.REAL_LITERAL:
                    case FlinkSqlParser.BIT_STRING:
                    case FlinkSqlParser.ID_LITERAL:
                        {
                            this.state = 1596;
                            localContext._limit = this.expression();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
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
    partitionByClause() {
        let localContext = new PartitionByClauseContext(this.context, this.state);
        this.enterRule(localContext, 236, FlinkSqlParser.RULE_partitionByClause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1599;
                this.match(FlinkSqlParser.KW_PARTITION);
                this.state = 1600;
                this.match(FlinkSqlParser.KW_BY);
                this.state = 1601;
                this.columnName();
                this.state = 1606;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 1602;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 1603;
                            this.columnName();
                        }
                    }
                    this.state = 1608;
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
    quantifiers() {
        let localContext = new QuantifiersContext(this.context, this.state);
        this.enterRule(localContext, 238, FlinkSqlParser.RULE_quantifiers);
        try {
            this.state = 1625;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 184, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 1609;
                            this.match(FlinkSqlParser.ASTERISK_SIGN);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        {
                            this.state = 1610;
                            this.match(FlinkSqlParser.ADD_SIGN);
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        {
                            this.state = 1611;
                            this.match(FlinkSqlParser.QUESTION_MARK_SIGN);
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        {
                            this.state = 1612;
                            this.match(FlinkSqlParser.LB_BRACKET);
                            this.state = 1613;
                            this.match(FlinkSqlParser.DIG_LITERAL);
                            this.state = 1614;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 1615;
                            this.match(FlinkSqlParser.DIG_LITERAL);
                            this.state = 1616;
                            this.match(FlinkSqlParser.RB_BRACKET);
                        }
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        {
                            this.state = 1617;
                            this.match(FlinkSqlParser.LB_BRACKET);
                            this.state = 1618;
                            this.match(FlinkSqlParser.DIG_LITERAL);
                            this.state = 1619;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 1620;
                            this.match(FlinkSqlParser.RB_BRACKET);
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        {
                            this.state = 1621;
                            this.match(FlinkSqlParser.LB_BRACKET);
                            this.state = 1622;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 1623;
                            this.match(FlinkSqlParser.DIG_LITERAL);
                            this.state = 1624;
                            this.match(FlinkSqlParser.RB_BRACKET);
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
    measuresClause() {
        let localContext = new MeasuresClauseContext(this.context, this.state);
        this.enterRule(localContext, 240, FlinkSqlParser.RULE_measuresClause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1627;
                this.match(FlinkSqlParser.KW_MEASURES);
                this.state = 1628;
                this.projectItemDefinition();
                this.state = 1633;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 1629;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 1630;
                            this.projectItemDefinition();
                        }
                    }
                    this.state = 1635;
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
    patternDefination() {
        let localContext = new PatternDefinationContext(this.context, this.state);
        this.enterRule(localContext, 242, FlinkSqlParser.RULE_patternDefination);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1636;
                this.match(FlinkSqlParser.KW_PATTERN);
                this.state = 1637;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1639;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 1638;
                            this.patternVariable();
                        }
                    }
                    this.state = 1641;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 538 || _la === 541);
                this.state = 1643;
                this.match(FlinkSqlParser.RR_BRACKET);
                this.state = 1645;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 434) {
                    {
                        this.state = 1644;
                        this.withinClause();
                    }
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
    patternVariable() {
        let localContext = new PatternVariableContext(this.context, this.state);
        this.enterRule(localContext, 244, FlinkSqlParser.RULE_patternVariable);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1647;
                this.unquotedIdentifier();
                this.state = 1649;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 518)) & ~0x1F) === 0 && ((1 << (_la - 518)) & 135681) !== 0)) {
                    {
                        this.state = 1648;
                        this.quantifiers();
                    }
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
    outputMode() {
        let localContext = new OutputModeContext(this.context, this.state);
        this.enterRule(localContext, 246, FlinkSqlParser.RULE_outputMode);
        try {
            this.state = 1659;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_ALL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1651;
                        this.match(FlinkSqlParser.KW_ALL);
                        this.state = 1652;
                        this.match(FlinkSqlParser.KW_ROWS);
                        this.state = 1653;
                        this.match(FlinkSqlParser.KW_PER);
                        this.state = 1654;
                        this.match(FlinkSqlParser.KW_MATCH);
                    }
                    break;
                case FlinkSqlParser.KW_ONE:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1655;
                        this.match(FlinkSqlParser.KW_ONE);
                        this.state = 1656;
                        this.match(FlinkSqlParser.KW_ROW);
                        this.state = 1657;
                        this.match(FlinkSqlParser.KW_PER);
                        this.state = 1658;
                        this.match(FlinkSqlParser.KW_MATCH);
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
    afterMatchStrategy() {
        let localContext = new AfterMatchStrategyContext(this.context, this.state);
        this.enterRule(localContext, 248, FlinkSqlParser.RULE_afterMatchStrategy);
        try {
            this.state = 1685;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 190, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1661;
                        this.match(FlinkSqlParser.KW_AFTER);
                        this.state = 1662;
                        this.match(FlinkSqlParser.KW_MATCH);
                        this.state = 1663;
                        this.match(FlinkSqlParser.KW_SKIP);
                        this.state = 1664;
                        this.match(FlinkSqlParser.KW_PAST);
                        this.state = 1665;
                        this.match(FlinkSqlParser.KW_LAST);
                        this.state = 1666;
                        this.match(FlinkSqlParser.KW_ROW);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1667;
                        this.match(FlinkSqlParser.KW_AFTER);
                        this.state = 1668;
                        this.match(FlinkSqlParser.KW_MATCH);
                        this.state = 1669;
                        this.match(FlinkSqlParser.KW_SKIP);
                        this.state = 1670;
                        this.match(FlinkSqlParser.KW_TO);
                        this.state = 1671;
                        this.match(FlinkSqlParser.KW_NEXT);
                        this.state = 1672;
                        this.match(FlinkSqlParser.KW_ROW);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1673;
                        this.match(FlinkSqlParser.KW_AFTER);
                        this.state = 1674;
                        this.match(FlinkSqlParser.KW_MATCH);
                        this.state = 1675;
                        this.match(FlinkSqlParser.KW_SKIP);
                        this.state = 1676;
                        this.match(FlinkSqlParser.KW_TO);
                        this.state = 1677;
                        this.match(FlinkSqlParser.KW_LAST);
                        this.state = 1678;
                        this.unquotedIdentifier();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1679;
                        this.match(FlinkSqlParser.KW_AFTER);
                        this.state = 1680;
                        this.match(FlinkSqlParser.KW_MATCH);
                        this.state = 1681;
                        this.match(FlinkSqlParser.KW_SKIP);
                        this.state = 1682;
                        this.match(FlinkSqlParser.KW_TO);
                        this.state = 1683;
                        this.match(FlinkSqlParser.KW_FIRST);
                        this.state = 1684;
                        this.unquotedIdentifier();
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
    patternVariablesDefination() {
        let localContext = new PatternVariablesDefinationContext(this.context, this.state);
        this.enterRule(localContext, 250, FlinkSqlParser.RULE_patternVariablesDefination);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1687;
                this.match(FlinkSqlParser.KW_DEFINE);
                this.state = 1688;
                this.projectItemDefinition();
                this.state = 1693;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 1689;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 1690;
                            this.projectItemDefinition();
                        }
                    }
                    this.state = 1695;
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
    windowFrame() {
        let localContext = new WindowFrameContext(this.context, this.state);
        this.enterRule(localContext, 252, FlinkSqlParser.RULE_windowFrame);
        try {
            this.state = 1705;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_RANGE:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1696;
                        this.match(FlinkSqlParser.KW_RANGE);
                        this.state = 1697;
                        this.match(FlinkSqlParser.KW_BETWEEN);
                        this.state = 1698;
                        this.timeIntervalExpression();
                        this.state = 1699;
                        this.frameBound();
                    }
                    break;
                case FlinkSqlParser.KW_ROWS:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1701;
                        this.match(FlinkSqlParser.KW_ROWS);
                        this.state = 1702;
                        this.match(FlinkSqlParser.KW_BETWEEN);
                        this.state = 1703;
                        this.match(FlinkSqlParser.DIG_LITERAL);
                        this.state = 1704;
                        this.frameBound();
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
    frameBound() {
        let localContext = new FrameBoundContext(this.context, this.state);
        this.enterRule(localContext, 254, FlinkSqlParser.RULE_frameBound);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1707;
                this.match(FlinkSqlParser.KW_PRECEDING);
                this.state = 1708;
                this.match(FlinkSqlParser.KW_AND);
                this.state = 1709;
                this.match(FlinkSqlParser.KW_CURRENT);
                this.state = 1710;
                this.match(FlinkSqlParser.KW_ROW);
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
    withinClause() {
        let localContext = new WithinClauseContext(this.context, this.state);
        this.enterRule(localContext, 256, FlinkSqlParser.RULE_withinClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1712;
                this.match(FlinkSqlParser.KW_WITHIN);
                this.state = 1713;
                this.timeIntervalExpression();
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
    expression() {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 258, FlinkSqlParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1715;
                this.booleanExpression(0);
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
    booleanExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new BooleanExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 260;
        this.enterRecursionRule(localContext, 260, FlinkSqlParser.RULE_booleanExpression, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1729;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 194, this.context)) {
                    case 1:
                        {
                            localContext = new LogicalNotContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1718;
                            this.match(FlinkSqlParser.KW_NOT);
                            this.state = 1719;
                            this.booleanExpression(6);
                        }
                        break;
                    case 2:
                        {
                            localContext = new ExistsContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1720;
                            this.match(FlinkSqlParser.KW_EXISTS);
                            this.state = 1721;
                            this.match(FlinkSqlParser.LR_BRACKET);
                            this.state = 1722;
                            this.queryStatement(0);
                            this.state = 1723;
                            this.match(FlinkSqlParser.RR_BRACKET);
                        }
                        break;
                    case 3:
                        {
                            localContext = new PredicatedContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1725;
                            this.valueExpression(0);
                            this.state = 1727;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 193, this.context)) {
                                case 1:
                                    {
                                        this.state = 1726;
                                        this.predicate();
                                    }
                                    break;
                            }
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 1745;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 197, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 1743;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 196, this.context)) {
                                case 1:
                                    {
                                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_booleanExpression);
                                        this.state = 1731;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 1732;
                                        localContext._operator = this.match(FlinkSqlParser.KW_AND);
                                        this.state = 1733;
                                        localContext._right = this.booleanExpression(4);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new LogicalBinaryContext(new BooleanExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_booleanExpression);
                                        this.state = 1734;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 1735;
                                        localContext._operator = this.match(FlinkSqlParser.KW_OR);
                                        this.state = 1736;
                                        localContext._right = this.booleanExpression(3);
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new LogicalNestedContext(new BooleanExpressionContext(parentContext, parentState));
                                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_booleanExpression);
                                        this.state = 1737;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 1738;
                                        this.match(FlinkSqlParser.KW_IS);
                                        this.state = 1740;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 241) {
                                            {
                                                this.state = 1739;
                                                this.match(FlinkSqlParser.KW_NOT);
                                            }
                                        }
                                        this.state = 1742;
                                        localContext._kind = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 140 || _la === 244 || _la === 397 || _la === 404)) {
                                            localContext._kind = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1747;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 197, this.context);
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
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    predicate() {
        let localContext = new PredicateContext(this.context, this.state);
        this.enterRule(localContext, 262, FlinkSqlParser.RULE_predicate);
        let _la;
        try {
            this.state = 1815;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 208, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1749;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 241) {
                            {
                                this.state = 1748;
                                this.match(FlinkSqlParser.KW_NOT);
                            }
                        }
                        this.state = 1751;
                        localContext._kind = this.match(FlinkSqlParser.KW_BETWEEN);
                        this.state = 1753;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 19 || _la === 369) {
                            {
                                this.state = 1752;
                                _la = this.tokenStream.LA(1);
                                if (!(_la === 19 || _la === 369)) {
                                    this.errorHandler.recoverInline(this);
                                }
                                else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 1755;
                        localContext._lower = this.valueExpression(0);
                        this.state = 1756;
                        this.match(FlinkSqlParser.KW_AND);
                        this.state = 1757;
                        localContext._upper = this.valueExpression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1760;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 241) {
                            {
                                this.state = 1759;
                                this.match(FlinkSqlParser.KW_NOT);
                            }
                        }
                        this.state = 1762;
                        localContext._kind = this.match(FlinkSqlParser.KW_IN);
                        this.state = 1763;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 1764;
                        this.expression();
                        this.state = 1769;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 520) {
                            {
                                {
                                    this.state = 1765;
                                    this.match(FlinkSqlParser.COMMA);
                                    this.state = 1766;
                                    this.expression();
                                }
                            }
                            this.state = 1771;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1772;
                        this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1775;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 241) {
                            {
                                this.state = 1774;
                                this.match(FlinkSqlParser.KW_NOT);
                            }
                        }
                        this.state = 1777;
                        localContext._kind = this.match(FlinkSqlParser.KW_IN);
                        this.state = 1778;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 1779;
                        this.queryStatement(0);
                        this.state = 1780;
                        this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1782;
                        localContext._kind = this.match(FlinkSqlParser.KW_EXISTS);
                        this.state = 1783;
                        this.match(FlinkSqlParser.LR_BRACKET);
                        this.state = 1784;
                        this.queryStatement(0);
                        this.state = 1785;
                        this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1788;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 241) {
                            {
                                this.state = 1787;
                                this.match(FlinkSqlParser.KW_NOT);
                            }
                        }
                        this.state = 1790;
                        localContext._kind = this.match(FlinkSqlParser.KW_RLIKE);
                        this.state = 1791;
                        localContext._pattern = this.valueExpression(0);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1792;
                        this.likePredicate();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 1793;
                        this.match(FlinkSqlParser.KW_IS);
                        this.state = 1795;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 241) {
                            {
                                this.state = 1794;
                                this.match(FlinkSqlParser.KW_NOT);
                            }
                        }
                        this.state = 1797;
                        localContext._kind = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 140 || _la === 244 || _la === 397 || _la === 404)) {
                            localContext._kind = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 1798;
                        this.match(FlinkSqlParser.KW_IS);
                        this.state = 1800;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 241) {
                            {
                                this.state = 1799;
                                this.match(FlinkSqlParser.KW_NOT);
                            }
                        }
                        this.state = 1802;
                        localContext._kind = this.match(FlinkSqlParser.KW_DISTINCT);
                        this.state = 1803;
                        this.match(FlinkSqlParser.KW_FROM);
                        this.state = 1804;
                        localContext._right = this.valueExpression(0);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 1806;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 241) {
                            {
                                this.state = 1805;
                                this.match(FlinkSqlParser.KW_NOT);
                            }
                        }
                        this.state = 1808;
                        localContext._kind = this.match(FlinkSqlParser.KW_SIMILAR);
                        this.state = 1809;
                        this.match(FlinkSqlParser.KW_TO);
                        this.state = 1810;
                        localContext._right = this.valueExpression(0);
                        this.state = 1813;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 207, this.context)) {
                            case 1:
                                {
                                    this.state = 1811;
                                    this.match(FlinkSqlParser.KW_ESCAPE);
                                    this.state = 1812;
                                    this.stringLiteral();
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
    likePredicate() {
        let localContext = new LikePredicateContext(this.context, this.state);
        this.enterRule(localContext, 264, FlinkSqlParser.RULE_likePredicate);
        let _la;
        try {
            this.state = 1846;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 214, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1818;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 241) {
                            {
                                this.state = 1817;
                                this.match(FlinkSqlParser.KW_NOT);
                            }
                        }
                        this.state = 1820;
                        localContext._kind = this.match(FlinkSqlParser.KW_LIKE);
                        this.state = 1821;
                        localContext._quantifier = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 5 || _la === 11)) {
                            localContext._quantifier = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1835;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 211, this.context)) {
                            case 1:
                                {
                                    this.state = 1822;
                                    this.match(FlinkSqlParser.LR_BRACKET);
                                    this.state = 1823;
                                    this.match(FlinkSqlParser.RR_BRACKET);
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1824;
                                    this.match(FlinkSqlParser.LR_BRACKET);
                                    this.state = 1825;
                                    this.expression();
                                    this.state = 1830;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 520) {
                                        {
                                            {
                                                this.state = 1826;
                                                this.match(FlinkSqlParser.COMMA);
                                                this.state = 1827;
                                                this.expression();
                                            }
                                        }
                                        this.state = 1832;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                    this.state = 1833;
                                    this.match(FlinkSqlParser.RR_BRACKET);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1838;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 241) {
                            {
                                this.state = 1837;
                                this.match(FlinkSqlParser.KW_NOT);
                            }
                        }
                        this.state = 1840;
                        localContext._kind = this.match(FlinkSqlParser.KW_LIKE);
                        this.state = 1841;
                        localContext._pattern = this.valueExpression(0);
                        this.state = 1844;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 213, this.context)) {
                            case 1:
                                {
                                    this.state = 1842;
                                    this.match(FlinkSqlParser.KW_ESCAPE);
                                    this.state = 1843;
                                    this.stringLiteral();
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
    valueExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ValueExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 266;
        this.enterRecursionRule(localContext, 266, FlinkSqlParser.RULE_valueExpression, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1852;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 215, this.context)) {
                    case 1:
                        {
                            localContext = new ValueExpressionDefaultContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1849;
                            this.primaryExpression(0);
                        }
                        break;
                    case 2:
                        {
                            localContext = new ArithmeticUnaryContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1850;
                            localContext._operator = this.tokenStream.LT(1);
                            _la = this.tokenStream.LA(1);
                            if (!(((((_la - 509)) & ~0x1F) === 0 && ((1 << (_la - 509)) & 3145729) !== 0))) {
                                localContext._operator = this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1851;
                            this.valueExpression(7);
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 1875;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 217, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 1873;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 216, this.context)) {
                                case 1:
                                    {
                                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                                        this.state = 1854;
                                        if (!(this.precpred(this.context, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                                        }
                                        this.state = 1855;
                                        localContext._operator = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 452 || ((((_la - 527)) & ~0x1F) === 0 && ((1 << (_la - 527)) & 145) !== 0))) {
                                            localContext._operator = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1856;
                                        localContext._right = this.valueExpression(7);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                                        this.state = 1857;
                                        if (!(this.precpred(this.context, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                                        }
                                        this.state = 1858;
                                        localContext._operator = this.tokenStream.LT(1);
                                        _la = this.tokenStream.LA(1);
                                        if (!(((((_la - 529)) & ~0x1F) === 0 && ((1 << (_la - 529)) & 11) !== 0))) {
                                            localContext._operator = this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1859;
                                        localContext._right = this.valueExpression(6);
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                                        this.state = 1860;
                                        if (!(this.precpred(this.context, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                                        }
                                        this.state = 1861;
                                        localContext._operator = this.match(FlinkSqlParser.BIT_AND_OP);
                                        this.state = 1862;
                                        localContext._right = this.valueExpression(5);
                                    }
                                    break;
                                case 4:
                                    {
                                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                                        this.state = 1863;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 1864;
                                        localContext._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
                                        this.state = 1865;
                                        localContext._right = this.valueExpression(4);
                                    }
                                    break;
                                case 5:
                                    {
                                        localContext = new ArithmeticBinaryContext(new ValueExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                                        this.state = 1866;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 1867;
                                        localContext._operator = this.match(FlinkSqlParser.BIT_OR_OP);
                                        this.state = 1868;
                                        localContext._right = this.valueExpression(3);
                                    }
                                    break;
                                case 6:
                                    {
                                        localContext = new ComparisonContext(new ValueExpressionContext(parentContext, parentState));
                                        localContext._left = previousContext;
                                        this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_valueExpression);
                                        this.state = 1869;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 1870;
                                        this.comparisonOperator();
                                        this.state = 1871;
                                        localContext._right = this.valueExpression(2);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1877;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 217, this.context);
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
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    primaryExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new PrimaryExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 268;
        this.enterRecursionRule(localContext, 268, FlinkSqlParser.RULE_primaryExpression, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1970;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 227, this.context)) {
                    case 1:
                        {
                            localContext = new SearchedCaseContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1879;
                            this.match(FlinkSqlParser.KW_CASE);
                            this.state = 1881;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 1880;
                                        this.whenClause();
                                    }
                                }
                                this.state = 1883;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 428);
                            this.state = 1887;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 120) {
                                {
                                    this.state = 1885;
                                    this.match(FlinkSqlParser.KW_ELSE);
                                    this.state = 1886;
                                    localContext._elseExpression = this.expression();
                                }
                            }
                            this.state = 1889;
                            this.match(FlinkSqlParser.KW_END);
                        }
                        break;
                    case 2:
                        {
                            localContext = new SimpleCaseContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1891;
                            this.match(FlinkSqlParser.KW_CASE);
                            this.state = 1892;
                            localContext._value = this.expression();
                            this.state = 1894;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 1893;
                                        this.whenClause();
                                    }
                                }
                                this.state = 1896;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 428);
                            this.state = 1900;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 120) {
                                {
                                    this.state = 1898;
                                    this.match(FlinkSqlParser.KW_ELSE);
                                    this.state = 1899;
                                    localContext._elseExpression = this.expression();
                                }
                            }
                            this.state = 1902;
                            this.match(FlinkSqlParser.KW_END);
                        }
                        break;
                    case 3:
                        {
                            localContext = new CastContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1904;
                            this.match(FlinkSqlParser.KW_CAST);
                            this.state = 1905;
                            this.match(FlinkSqlParser.LR_BRACKET);
                            this.state = 1906;
                            this.expression();
                            this.state = 1907;
                            this.match(FlinkSqlParser.KW_AS);
                            this.state = 1908;
                            this.columnType();
                            this.state = 1909;
                            this.match(FlinkSqlParser.RR_BRACKET);
                        }
                        break;
                    case 4:
                        {
                            localContext = new FirstContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1911;
                            this.match(FlinkSqlParser.KW_FIRST);
                            this.state = 1912;
                            this.match(FlinkSqlParser.LR_BRACKET);
                            this.state = 1913;
                            this.expression();
                            this.state = 1916;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 461) {
                                {
                                    this.state = 1914;
                                    this.match(FlinkSqlParser.KW_IGNORE);
                                    this.state = 1915;
                                    this.match(FlinkSqlParser.KW_NULLS);
                                }
                            }
                            this.state = 1918;
                            this.match(FlinkSqlParser.RR_BRACKET);
                        }
                        break;
                    case 5:
                        {
                            localContext = new LastContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1920;
                            this.match(FlinkSqlParser.KW_LAST);
                            this.state = 1921;
                            this.match(FlinkSqlParser.LR_BRACKET);
                            this.state = 1922;
                            this.expression();
                            this.state = 1925;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 461) {
                                {
                                    this.state = 1923;
                                    this.match(FlinkSqlParser.KW_IGNORE);
                                    this.state = 1924;
                                    this.match(FlinkSqlParser.KW_NULLS);
                                }
                            }
                            this.state = 1927;
                            this.match(FlinkSqlParser.RR_BRACKET);
                        }
                        break;
                    case 6:
                        {
                            localContext = new PositionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1929;
                            this.match(FlinkSqlParser.KW_POSITION);
                            this.state = 1930;
                            this.match(FlinkSqlParser.LR_BRACKET);
                            this.state = 1931;
                            localContext._substr = this.valueExpression(0);
                            this.state = 1932;
                            this.match(FlinkSqlParser.KW_IN);
                            this.state = 1933;
                            localContext._str = this.valueExpression(0);
                            this.state = 1934;
                            this.match(FlinkSqlParser.RR_BRACKET);
                        }
                        break;
                    case 7:
                        {
                            localContext = new ConstantDefaultContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1936;
                            this.constant();
                        }
                        break;
                    case 8:
                        {
                            localContext = new StarContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1937;
                            this.match(FlinkSqlParser.ASTERISK_SIGN);
                        }
                        break;
                    case 9:
                        {
                            localContext = new StarContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1938;
                            this.uid();
                            this.state = 1939;
                            this.match(FlinkSqlParser.DOT);
                            this.state = 1940;
                            this.match(FlinkSqlParser.ASTERISK_SIGN);
                        }
                        break;
                    case 10:
                        {
                            localContext = new SubqueryExpressionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1942;
                            this.match(FlinkSqlParser.LR_BRACKET);
                            this.state = 1943;
                            this.queryStatement(0);
                            this.state = 1944;
                            this.match(FlinkSqlParser.RR_BRACKET);
                        }
                        break;
                    case 11:
                        {
                            localContext = new FunctionCallContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1946;
                            this.functionName();
                            this.state = 1947;
                            this.match(FlinkSqlParser.LR_BRACKET);
                            this.state = 1959;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 8396848) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 10489249) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 1883341377) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 201330753) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 337641555) !== 0) || ((((_la - 182)) & ~0x1F) === 0 && ((1 << (_la - 182)) & 244224001) !== 0) || ((((_la - 214)) & ~0x1F) === 0 && ((1 << (_la - 214)) & 3892347713) !== 0) || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 537530369) !== 0) || ((((_la - 317)) & ~0x1F) === 0 && ((1 << (_la - 317)) & 131185) !== 0) || ((((_la - 357)) & ~0x1F) === 0 && ((1 << (_la - 357)) & 14681219) !== 0) || ((((_la - 389)) & ~0x1F) === 0 && ((1 << (_la - 389)) & 3238528833) !== 0) || ((((_la - 427)) & ~0x1F) === 0 && ((1 << (_la - 427)) & 4294966785) !== 0) || ((((_la - 459)) & ~0x1F) === 0 && ((1 << (_la - 459)) & 4294967295) !== 0) || ((((_la - 491)) & ~0x1F) === 0 && ((1 << (_la - 491)) & 33832959) !== 0) || ((((_la - 527)) & ~0x1F) === 0 && ((1 << (_la - 527)) & 31757) !== 0)) {
                                {
                                    this.state = 1949;
                                    this.errorHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 224, this.context)) {
                                        case 1:
                                            {
                                                this.state = 1948;
                                                this.setQuantifier();
                                            }
                                            break;
                                    }
                                    this.state = 1951;
                                    this.functionParam();
                                    this.state = 1956;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 520) {
                                        {
                                            {
                                                this.state = 1952;
                                                this.match(FlinkSqlParser.COMMA);
                                                this.state = 1953;
                                                this.functionParam();
                                            }
                                        }
                                        this.state = 1958;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                            }
                            this.state = 1961;
                            this.match(FlinkSqlParser.RR_BRACKET);
                        }
                        break;
                    case 12:
                        {
                            localContext = new ColumnReferenceContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1963;
                            this.identifier();
                        }
                        break;
                    case 13:
                        {
                            localContext = new DereferenceContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1964;
                            this.dereferenceDefinition();
                        }
                        break;
                    case 14:
                        {
                            localContext = new ParenthesizedExpressionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1965;
                            this.match(FlinkSqlParser.LR_BRACKET);
                            this.state = 1966;
                            this.expression();
                            this.state = 1967;
                            this.match(FlinkSqlParser.RR_BRACKET);
                        }
                        break;
                    case 15:
                        {
                            localContext = new DateFunctionExpressionContext(localContext);
                            this.context = localContext;
                            previousContext = localContext;
                            this.state = 1969;
                            this.match(FlinkSqlParser.KW_CURRENT_TIMESTAMP);
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 1979;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 228, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new SubscriptContext(new PrimaryExpressionContext(parentContext, parentState));
                                localContext._value = previousContext;
                                this.pushNewRecursionContext(localContext, _startState, FlinkSqlParser.RULE_primaryExpression);
                                this.state = 1972;
                                if (!(this.precpred(this.context, 5))) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                                }
                                this.state = 1973;
                                this.match(FlinkSqlParser.LS_BRACKET);
                                this.state = 1974;
                                localContext._index = this.valueExpression(0);
                                this.state = 1975;
                                this.match(FlinkSqlParser.RS_BRACKET);
                            }
                        }
                    }
                    this.state = 1981;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 228, this.context);
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
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    functionNameCreate() {
        let localContext = new FunctionNameCreateContext(this.context, this.state);
        this.enterRule(localContext, 270, FlinkSqlParser.RULE_functionNameCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1982;
                this.uid();
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
        this.enterRule(localContext, 272, FlinkSqlParser.RULE_functionName);
        try {
            this.state = 1986;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 229, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1984;
                        this.reservedKeywordsUsedAsFuncName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1985;
                        this.uid();
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
    functionParam() {
        let localContext = new FunctionParamContext(this.context, this.state);
        this.enterRule(localContext, 274, FlinkSqlParser.RULE_functionParam);
        try {
            this.state = 1992;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 230, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1988;
                        this.reservedKeywordsUsedAsFuncParam();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1989;
                        this.timeIntervalUnit();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1990;
                        this.timePointUnit();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1991;
                        this.expression();
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
    dereferenceDefinition() {
        let localContext = new DereferenceDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 276, FlinkSqlParser.RULE_dereferenceDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1994;
                this.uid();
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
    correlationName() {
        let localContext = new CorrelationNameContext(this.context, this.state);
        this.enterRule(localContext, 278, FlinkSqlParser.RULE_correlationName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1996;
                this.identifier();
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
    qualifiedName() {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 280, FlinkSqlParser.RULE_qualifiedName);
        try {
            this.state = 2000;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 231, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1998;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1999;
                        this.dereferenceDefinition();
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
    timeIntervalExpression() {
        let localContext = new TimeIntervalExpressionContext(this.context, this.state);
        this.enterRule(localContext, 282, FlinkSqlParser.RULE_timeIntervalExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2002;
                this.match(FlinkSqlParser.KW_INTERVAL);
                this.state = 2005;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 232, this.context)) {
                    case 1:
                        {
                            this.state = 2003;
                            this.errorCapturingMultiUnitsInterval();
                        }
                        break;
                    case 2:
                        {
                            this.state = 2004;
                            this.errorCapturingUnitToUnitInterval();
                        }
                        break;
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
    errorCapturingMultiUnitsInterval() {
        let localContext = new ErrorCapturingMultiUnitsIntervalContext(this.context, this.state);
        this.enterRule(localContext, 284, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2007;
                this.multiUnitsInterval();
                this.state = 2009;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 233, this.context)) {
                    case 1:
                        {
                            this.state = 2008;
                            this.unitToUnitInterval();
                        }
                        break;
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
    multiUnitsInterval() {
        let localContext = new MultiUnitsIntervalContext(this.context, this.state);
        this.enterRule(localContext, 286, FlinkSqlParser.RULE_multiUnitsInterval);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2014;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 2011;
                                    this.intervalValue();
                                    this.state = 2012;
                                    this.timeIntervalUnit();
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 2016;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 234, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
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
    errorCapturingUnitToUnitInterval() {
        let localContext = new ErrorCapturingUnitToUnitIntervalContext(this.context, this.state);
        this.enterRule(localContext, 288, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2018;
                localContext._body = this.unitToUnitInterval();
                this.state = 2021;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 235, this.context)) {
                    case 1:
                        {
                            this.state = 2019;
                            localContext._error1 = this.multiUnitsInterval();
                        }
                        break;
                    case 2:
                        {
                            this.state = 2020;
                            localContext._error2 = this.unitToUnitInterval();
                        }
                        break;
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
    unitToUnitInterval() {
        let localContext = new UnitToUnitIntervalContext(this.context, this.state);
        this.enterRule(localContext, 290, FlinkSqlParser.RULE_unitToUnitInterval);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2023;
                localContext._value = this.intervalValue();
                this.state = 2024;
                localContext._from_ = this.timeIntervalUnit();
                this.state = 2025;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 2026;
                localContext._to = this.timeIntervalUnit();
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
    intervalValue() {
        let localContext = new IntervalValueContext(this.context, this.state);
        this.enterRule(localContext, 292, FlinkSqlParser.RULE_intervalValue);
        let _la;
        try {
            this.state = 2033;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.HYPNEN_SIGN:
                case FlinkSqlParser.ADD_SIGN:
                case FlinkSqlParser.DIG_LITERAL:
                case FlinkSqlParser.REAL_LITERAL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2029;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 529 || _la === 530) {
                            {
                                this.state = 2028;
                                _la = this.tokenStream.LA(1);
                                if (!(_la === 529 || _la === 530)) {
                                    this.errorHandler.recoverInline(this);
                                }
                                else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 2031;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 538 || _la === 539)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case FlinkSqlParser.STRING_LITERAL:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2032;
                        this.match(FlinkSqlParser.STRING_LITERAL);
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
    tableAlias() {
        let localContext = new TableAliasContext(this.context, this.state);
        this.enterRule(localContext, 294, FlinkSqlParser.RULE_tableAlias);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2036;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 2035;
                        this.match(FlinkSqlParser.KW_AS);
                    }
                }
                this.state = 2038;
                this.identifier();
                this.state = 2040;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 239, this.context)) {
                    case 1:
                        {
                            this.state = 2039;
                            this.identifierList();
                        }
                        break;
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
    errorCapturingIdentifier() {
        let localContext = new ErrorCapturingIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 296, FlinkSqlParser.RULE_errorCapturingIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2042;
                this.identifier();
                this.state = 2043;
                this.errorCapturingIdentifierExtra();
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
    errorCapturingIdentifierExtra() {
        let localContext = new ErrorCapturingIdentifierExtraContext(this.context, this.state);
        this.enterRule(localContext, 298, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
        let _la;
        try {
            this.state = 2052;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_MINUS:
                    localContext = new ErrorIdentContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2047;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 2045;
                                    this.match(FlinkSqlParser.KW_MINUS);
                                    this.state = 2046;
                                    this.identifier();
                                }
                            }
                            this.state = 2049;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 221);
                    }
                    break;
                case FlinkSqlParser.KW_AS:
                case FlinkSqlParser.LR_BRACKET:
                    localContext = new RealIdentContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    // tslint:disable-next-line:no-empty
                    {
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
    identifierList() {
        let localContext = new IdentifierListContext(this.context, this.state);
        this.enterRule(localContext, 300, FlinkSqlParser.RULE_identifierList);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2054;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 2055;
                this.identifierSeq();
                this.state = 2056;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    identifierSeq() {
        let localContext = new IdentifierSeqContext(this.context, this.state);
        this.enterRule(localContext, 302, FlinkSqlParser.RULE_identifierSeq);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2058;
                this.identifier();
                this.state = 2063;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 2059;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 2060;
                            this.identifier();
                        }
                    }
                    this.state = 2065;
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
    identifier() {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 304, FlinkSqlParser.RULE_identifier);
        try {
            this.state = 2069;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.DIG_LITERAL:
                case FlinkSqlParser.ID_LITERAL:
                    localContext = new UnquotedIdentifierAlternativeContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2066;
                        this.unquotedIdentifier();
                    }
                    break;
                case FlinkSqlParser.STRING_LITERAL:
                    localContext = new QuotedIdentifierAlternativeContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2067;
                        this.quotedIdentifier();
                    }
                    break;
                case FlinkSqlParser.KW_ADD:
                case FlinkSqlParser.KW_AFTER:
                case FlinkSqlParser.KW_ASC:
                case FlinkSqlParser.KW_CASCADE:
                case FlinkSqlParser.KW_CATALOG:
                case FlinkSqlParser.KW_CENTURY:
                case FlinkSqlParser.KW_CONFIG:
                case FlinkSqlParser.KW_CONSTRAINTS:
                case FlinkSqlParser.KW_CUMULATE:
                case FlinkSqlParser.KW_DATA:
                case FlinkSqlParser.KW_DATABASE:
                case FlinkSqlParser.KW_DAYS:
                case FlinkSqlParser.KW_DECADE:
                case FlinkSqlParser.KW_DESC:
                case FlinkSqlParser.KW_DESCRIPTOR:
                case FlinkSqlParser.KW_DIV:
                case FlinkSqlParser.KW_ENGINE:
                case FlinkSqlParser.KW_EPOCH:
                case FlinkSqlParser.KW_EXCLUDING:
                case FlinkSqlParser.KW_FILE:
                case FlinkSqlParser.KW_FIRST:
                case FlinkSqlParser.KW_GENERATED:
                case FlinkSqlParser.KW_HOP:
                case FlinkSqlParser.KW_HOURS:
                case FlinkSqlParser.KW_IGNORE:
                case FlinkSqlParser.KW_INCLUDING:
                case FlinkSqlParser.KW_JAR:
                case FlinkSqlParser.KW_JARS:
                case FlinkSqlParser.KW_JAVA:
                case FlinkSqlParser.KW_KEY:
                case FlinkSqlParser.KW_LAST:
                case FlinkSqlParser.KW_LOAD:
                case FlinkSqlParser.KW_MAP:
                case FlinkSqlParser.KW_MICROSECOND:
                case FlinkSqlParser.KW_MILLENNIUM:
                case FlinkSqlParser.KW_MILLISECOND:
                case FlinkSqlParser.KW_MINUTES:
                case FlinkSqlParser.KW_MONTHS:
                case FlinkSqlParser.KW_NANOSECOND:
                case FlinkSqlParser.KW_NULLS:
                case FlinkSqlParser.KW_OPTIONS:
                case FlinkSqlParser.KW_PAST:
                case FlinkSqlParser.KW_PLAN:
                case FlinkSqlParser.KW_PRECEDING:
                case FlinkSqlParser.KW_PYTHON:
                case FlinkSqlParser.KW_PYTHON_ARCHIVES:
                case FlinkSqlParser.KW_PYTHON_DEPENDENCIES:
                case FlinkSqlParser.KW_PYTHON_FILES:
                case FlinkSqlParser.KW_PYTHON_JAR:
                case FlinkSqlParser.KW_PYTHON_PARAMETER:
                case FlinkSqlParser.KW_PYTHON_REQUIREMENTS:
                case FlinkSqlParser.KW_QUARTER:
                case FlinkSqlParser.KW_REMOVE:
                case FlinkSqlParser.KW_RESTRICT:
                case FlinkSqlParser.KW_SECONDS:
                case FlinkSqlParser.KW_SESSION:
                case FlinkSqlParser.KW_SETS:
                case FlinkSqlParser.KW_SIZE:
                case FlinkSqlParser.KW_SLIDE:
                case FlinkSqlParser.KW_STEP:
                case FlinkSqlParser.KW_TEMPORARY:
                case FlinkSqlParser.KW_TIMECOL:
                case FlinkSqlParser.KW_TUMBLE:
                case FlinkSqlParser.KW_UNLOAD:
                case FlinkSqlParser.KW_VIEW:
                case FlinkSqlParser.KW_WEEK:
                case FlinkSqlParser.KW_YEARS:
                case FlinkSqlParser.KW_ZONE:
                    localContext = new NonReservedKeywordsAlternativeContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2068;
                        this.nonReservedKeywords();
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
    unquotedIdentifier() {
        let localContext = new UnquotedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 306, FlinkSqlParser.RULE_unquotedIdentifier);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2071;
                _la = this.tokenStream.LA(1);
                if (!(_la === 538 || _la === 541)) {
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
    quotedIdentifier() {
        let localContext = new QuotedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 308, FlinkSqlParser.RULE_quotedIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2073;
                this.match(FlinkSqlParser.STRING_LITERAL);
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
    whenClause() {
        let localContext = new WhenClauseContext(this.context, this.state);
        this.enterRule(localContext, 310, FlinkSqlParser.RULE_whenClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2075;
                this.match(FlinkSqlParser.KW_WHEN);
                this.state = 2076;
                localContext._condition = this.expression();
                this.state = 2077;
                this.match(FlinkSqlParser.KW_THEN);
                this.state = 2078;
                localContext._result = this.expression();
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
    catalogPath() {
        let localContext = new CatalogPathContext(this.context, this.state);
        this.enterRule(localContext, 312, FlinkSqlParser.RULE_catalogPath);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2080;
                this.identifier();
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
    catalogPathCreate() {
        let localContext = new CatalogPathCreateContext(this.context, this.state);
        this.enterRule(localContext, 314, FlinkSqlParser.RULE_catalogPathCreate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2082;
                this.identifier();
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
    databasePath() {
        let localContext = new DatabasePathContext(this.context, this.state);
        this.enterRule(localContext, 316, FlinkSqlParser.RULE_databasePath);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2084;
                this.identifier();
                this.state = 2087;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 513) {
                    {
                        this.state = 2085;
                        this.match(FlinkSqlParser.DOT);
                        this.state = 2086;
                        this.identifier();
                    }
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
    databasePathCreate() {
        let localContext = new DatabasePathCreateContext(this.context, this.state);
        this.enterRule(localContext, 318, FlinkSqlParser.RULE_databasePathCreate);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2089;
                this.identifier();
                this.state = 2092;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 513) {
                    {
                        this.state = 2090;
                        this.match(FlinkSqlParser.DOT);
                        this.state = 2091;
                        this.identifier();
                    }
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
    tablePathCreate() {
        let localContext = new TablePathCreateContext(this.context, this.state);
        this.enterRule(localContext, 320, FlinkSqlParser.RULE_tablePathCreate);
        let _la;
        try {
            this.state = 2106;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 248, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2094;
                        this.identifier();
                        this.state = 2097;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 513) {
                            {
                                this.state = 2095;
                                this.match(FlinkSqlParser.DOT);
                                this.state = 2096;
                                this.identifier();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2099;
                        this.identifier();
                        this.state = 2100;
                        this.match(FlinkSqlParser.DOT);
                        this.state = 2101;
                        this.identifier();
                        this.state = 2104;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 513) {
                            {
                                this.state = 2102;
                                this.match(FlinkSqlParser.DOT);
                                this.state = 2103;
                                this.identifier();
                            }
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
    tablePath() {
        let localContext = new TablePathContext(this.context, this.state);
        this.enterRule(localContext, 322, FlinkSqlParser.RULE_tablePath);
        try {
            this.state = 2120;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 251, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2108;
                        this.identifier();
                        this.state = 2111;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 249, this.context)) {
                            case 1:
                                {
                                    this.state = 2109;
                                    this.match(FlinkSqlParser.DOT);
                                    this.state = 2110;
                                    this.identifier();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2113;
                        this.identifier();
                        this.state = 2114;
                        this.match(FlinkSqlParser.DOT);
                        this.state = 2115;
                        this.identifier();
                        this.state = 2118;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 250, this.context)) {
                            case 1:
                                {
                                    this.state = 2116;
                                    this.match(FlinkSqlParser.DOT);
                                    this.state = 2117;
                                    this.identifier();
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
    viewPath() {
        let localContext = new ViewPathContext(this.context, this.state);
        this.enterRule(localContext, 324, FlinkSqlParser.RULE_viewPath);
        try {
            this.state = 2134;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 254, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2122;
                        this.identifier();
                        this.state = 2125;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 252, this.context)) {
                            case 1:
                                {
                                    this.state = 2123;
                                    this.match(FlinkSqlParser.DOT);
                                    this.state = 2124;
                                    this.identifier();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2127;
                        this.identifier();
                        this.state = 2128;
                        this.match(FlinkSqlParser.DOT);
                        this.state = 2129;
                        this.identifier();
                        this.state = 2132;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 253, this.context)) {
                            case 1:
                                {
                                    this.state = 2130;
                                    this.match(FlinkSqlParser.DOT);
                                    this.state = 2131;
                                    this.identifier();
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
    viewPathCreate() {
        let localContext = new ViewPathCreateContext(this.context, this.state);
        this.enterRule(localContext, 326, FlinkSqlParser.RULE_viewPathCreate);
        let _la;
        try {
            this.state = 2148;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 257, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2136;
                        this.identifier();
                        this.state = 2139;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 513) {
                            {
                                this.state = 2137;
                                this.match(FlinkSqlParser.DOT);
                                this.state = 2138;
                                this.identifier();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2141;
                        this.identifier();
                        this.state = 2142;
                        this.match(FlinkSqlParser.DOT);
                        this.state = 2143;
                        this.identifier();
                        this.state = 2146;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 513) {
                            {
                                this.state = 2144;
                                this.match(FlinkSqlParser.DOT);
                                this.state = 2145;
                                this.identifier();
                            }
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
    uid() {
        let localContext = new UidContext(this.context, this.state);
        this.enterRule(localContext, 328, FlinkSqlParser.RULE_uid);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2150;
                this.identifier();
                this.state = 2155;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 258, this.context);
                while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1 + 1) {
                        {
                            {
                                this.state = 2151;
                                this.match(FlinkSqlParser.DOT);
                                this.state = 2152;
                                this.identifier();
                            }
                        }
                    }
                    this.state = 2157;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 258, this.context);
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
    withOption() {
        let localContext = new WithOptionContext(this.context, this.state);
        this.enterRule(localContext, 330, FlinkSqlParser.RULE_withOption);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2158;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 2159;
                this.tablePropertyList();
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
    ifNotExists() {
        let localContext = new IfNotExistsContext(this.context, this.state);
        this.enterRule(localContext, 332, FlinkSqlParser.RULE_ifNotExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2161;
                this.match(FlinkSqlParser.KW_IF);
                this.state = 2162;
                this.match(FlinkSqlParser.KW_NOT);
                this.state = 2163;
                this.match(FlinkSqlParser.KW_EXISTS);
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
    ifExists() {
        let localContext = new IfExistsContext(this.context, this.state);
        this.enterRule(localContext, 334, FlinkSqlParser.RULE_ifExists);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2165;
                this.match(FlinkSqlParser.KW_IF);
                this.state = 2166;
                this.match(FlinkSqlParser.KW_EXISTS);
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
    tablePropertyList() {
        let localContext = new TablePropertyListContext(this.context, this.state);
        this.enterRule(localContext, 336, FlinkSqlParser.RULE_tablePropertyList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2168;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 2169;
                this.tableProperty();
                this.state = 2174;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 520) {
                    {
                        {
                            this.state = 2170;
                            this.match(FlinkSqlParser.COMMA);
                            this.state = 2171;
                            this.tableProperty();
                        }
                    }
                    this.state = 2176;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2177;
                this.match(FlinkSqlParser.RR_BRACKET);
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
    tableProperty() {
        let localContext = new TablePropertyContext(this.context, this.state);
        this.enterRule(localContext, 338, FlinkSqlParser.RULE_tableProperty);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2179;
                localContext._key = this.tablePropertyKey();
                this.state = 2184;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 140 || _la === 397 || _la === 505 || ((((_la - 537)) & ~0x1F) === 0 && ((1 << (_la - 537)) & 7) !== 0)) {
                    {
                        this.state = 2181;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 505) {
                            {
                                this.state = 2180;
                                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                            }
                        }
                        this.state = 2183;
                        localContext._value = this.tablePropertyValue();
                    }
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
    tablePropertyKey() {
        let localContext = new TablePropertyKeyContext(this.context, this.state);
        this.enterRule(localContext, 340, FlinkSqlParser.RULE_tablePropertyKey);
        try {
            this.state = 2189;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 262, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2186;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2187;
                        this.dereferenceDefinition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2188;
                        this.match(FlinkSqlParser.STRING_LITERAL);
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
    tablePropertyValue() {
        let localContext = new TablePropertyValueContext(this.context, this.state);
        this.enterRule(localContext, 342, FlinkSqlParser.RULE_tablePropertyValue);
        try {
            this.state = 2195;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.DIG_LITERAL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2191;
                        this.match(FlinkSqlParser.DIG_LITERAL);
                    }
                    break;
                case FlinkSqlParser.REAL_LITERAL:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2192;
                        this.match(FlinkSqlParser.REAL_LITERAL);
                    }
                    break;
                case FlinkSqlParser.KW_FALSE:
                case FlinkSqlParser.KW_TRUE:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2193;
                        this.booleanLiteral();
                    }
                    break;
                case FlinkSqlParser.STRING_LITERAL:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2194;
                        this.match(FlinkSqlParser.STRING_LITERAL);
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
    logicalOperator() {
        let localContext = new LogicalOperatorContext(this.context, this.state);
        this.enterRule(localContext, 344, FlinkSqlParser.RULE_logicalOperator);
        try {
            this.state = 2203;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_AND:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2197;
                        this.match(FlinkSqlParser.KW_AND);
                    }
                    break;
                case FlinkSqlParser.BIT_AND_OP:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2198;
                        this.match(FlinkSqlParser.BIT_AND_OP);
                        this.state = 2199;
                        this.match(FlinkSqlParser.BIT_AND_OP);
                    }
                    break;
                case FlinkSqlParser.KW_OR:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2200;
                        this.match(FlinkSqlParser.KW_OR);
                    }
                    break;
                case FlinkSqlParser.BIT_OR_OP:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2201;
                        this.match(FlinkSqlParser.BIT_OR_OP);
                        this.state = 2202;
                        this.match(FlinkSqlParser.BIT_OR_OP);
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
    comparisonOperator() {
        let localContext = new ComparisonOperatorContext(this.context, this.state);
        this.enterRule(localContext, 346, FlinkSqlParser.RULE_comparisonOperator);
        try {
            this.state = 2219;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 265, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2205;
                        this.match(FlinkSqlParser.EQUAL_SYMBOL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2206;
                        this.match(FlinkSqlParser.GREATER_SYMBOL);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2207;
                        this.match(FlinkSqlParser.LESS_SYMBOL);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2208;
                        this.match(FlinkSqlParser.LESS_SYMBOL);
                        this.state = 2209;
                        this.match(FlinkSqlParser.EQUAL_SYMBOL);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 2210;
                        this.match(FlinkSqlParser.GREATER_SYMBOL);
                        this.state = 2211;
                        this.match(FlinkSqlParser.EQUAL_SYMBOL);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 2212;
                        this.match(FlinkSqlParser.LESS_SYMBOL);
                        this.state = 2213;
                        this.match(FlinkSqlParser.GREATER_SYMBOL);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 2214;
                        this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
                        this.state = 2215;
                        this.match(FlinkSqlParser.EQUAL_SYMBOL);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 2216;
                        this.match(FlinkSqlParser.LESS_SYMBOL);
                        this.state = 2217;
                        this.match(FlinkSqlParser.EQUAL_SYMBOL);
                        this.state = 2218;
                        this.match(FlinkSqlParser.GREATER_SYMBOL);
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
    bitOperator() {
        let localContext = new BitOperatorContext(this.context, this.state);
        this.enterRule(localContext, 348, FlinkSqlParser.RULE_bitOperator);
        try {
            this.state = 2228;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.LESS_SYMBOL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2221;
                        this.match(FlinkSqlParser.LESS_SYMBOL);
                        this.state = 2222;
                        this.match(FlinkSqlParser.LESS_SYMBOL);
                    }
                    break;
                case FlinkSqlParser.GREATER_SYMBOL:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2223;
                        this.match(FlinkSqlParser.GREATER_SYMBOL);
                        this.state = 2224;
                        this.match(FlinkSqlParser.GREATER_SYMBOL);
                    }
                    break;
                case FlinkSqlParser.BIT_AND_OP:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2225;
                        this.match(FlinkSqlParser.BIT_AND_OP);
                    }
                    break;
                case FlinkSqlParser.BIT_XOR_OP:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2226;
                        this.match(FlinkSqlParser.BIT_XOR_OP);
                    }
                    break;
                case FlinkSqlParser.BIT_OR_OP:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 2227;
                        this.match(FlinkSqlParser.BIT_OR_OP);
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
    mathOperator() {
        let localContext = new MathOperatorContext(this.context, this.state);
        this.enterRule(localContext, 350, FlinkSqlParser.RULE_mathOperator);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2230;
                _la = this.tokenStream.LA(1);
                if (!(_la === 452 || ((((_la - 527)) & ~0x1F) === 0 && ((1 << (_la - 527)) & 221) !== 0))) {
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
    unaryOperator() {
        let localContext = new UnaryOperatorContext(this.context, this.state);
        this.enterRule(localContext, 352, FlinkSqlParser.RULE_unaryOperator);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2232;
                _la = this.tokenStream.LA(1);
                if (!(_la === 241 || ((((_la - 508)) & ~0x1F) === 0 && ((1 << (_la - 508)) & 6291459) !== 0))) {
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
    constant() {
        let localContext = new ConstantContext(this.context, this.state);
        this.enterRule(localContext, 354, FlinkSqlParser.RULE_constant);
        let _la;
        try {
            this.state = 2248;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case FlinkSqlParser.KW_INTERVAL:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2234;
                        this.timeIntervalExpression();
                    }
                    break;
                case FlinkSqlParser.KW_DAY:
                case FlinkSqlParser.KW_HOUR:
                case FlinkSqlParser.KW_MINUTE:
                case FlinkSqlParser.KW_MONTH:
                case FlinkSqlParser.KW_SECOND:
                case FlinkSqlParser.KW_YEAR:
                case FlinkSqlParser.KW_MICROSECOND:
                case FlinkSqlParser.KW_MILLISECOND:
                case FlinkSqlParser.KW_QUARTER:
                case FlinkSqlParser.KW_WEEK:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2235;
                        this.timePointLiteral();
                    }
                    break;
                case FlinkSqlParser.STRING_LITERAL:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2236;
                        this.stringLiteral();
                    }
                    break;
                case FlinkSqlParser.HYPNEN_SIGN:
                case FlinkSqlParser.DIG_LITERAL:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2238;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 529) {
                            {
                                this.state = 2237;
                                this.match(FlinkSqlParser.HYPNEN_SIGN);
                            }
                        }
                        this.state = 2240;
                        this.decimalLiteral();
                    }
                    break;
                case FlinkSqlParser.KW_FALSE:
                case FlinkSqlParser.KW_TRUE:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 2241;
                        this.booleanLiteral();
                    }
                    break;
                case FlinkSqlParser.REAL_LITERAL:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 2242;
                        this.match(FlinkSqlParser.REAL_LITERAL);
                    }
                    break;
                case FlinkSqlParser.BIT_STRING:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 2243;
                        this.match(FlinkSqlParser.BIT_STRING);
                    }
                    break;
                case FlinkSqlParser.KW_NOT:
                case FlinkSqlParser.KW_NULL:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 2245;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 241) {
                            {
                                this.state = 2244;
                                this.match(FlinkSqlParser.KW_NOT);
                            }
                        }
                        this.state = 2247;
                        this.match(FlinkSqlParser.KW_NULL);
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
    timePointLiteral() {
        let localContext = new TimePointLiteralContext(this.context, this.state);
        this.enterRule(localContext, 356, FlinkSqlParser.RULE_timePointLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2250;
                this.timePointUnit();
                this.state = 2251;
                this.stringLiteral();
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
    stringLiteral() {
        let localContext = new StringLiteralContext(this.context, this.state);
        this.enterRule(localContext, 358, FlinkSqlParser.RULE_stringLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2253;
                this.match(FlinkSqlParser.STRING_LITERAL);
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
    decimalLiteral() {
        let localContext = new DecimalLiteralContext(this.context, this.state);
        this.enterRule(localContext, 360, FlinkSqlParser.RULE_decimalLiteral);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2255;
                this.match(FlinkSqlParser.DIG_LITERAL);
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
    booleanLiteral() {
        let localContext = new BooleanLiteralContext(this.context, this.state);
        this.enterRule(localContext, 362, FlinkSqlParser.RULE_booleanLiteral);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2257;
                _la = this.tokenStream.LA(1);
                if (!(_la === 140 || _la === 397)) {
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
    setQuantifier() {
        let localContext = new SetQuantifierContext(this.context, this.state);
        this.enterRule(localContext, 364, FlinkSqlParser.RULE_setQuantifier);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2259;
                _la = this.tokenStream.LA(1);
                if (!(_la === 5 || _la === 113)) {
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
    timePointUnit() {
        let localContext = new TimePointUnitContext(this.context, this.state);
        this.enterRule(localContext, 366, FlinkSqlParser.RULE_timePointUnit);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2261;
                _la = this.tokenStream.LA(1);
                if (!(_la === 97 || _la === 165 || _la === 222 || _la === 229 || _la === 334 || _la === 436 || ((((_la - 470)) & ~0x1F) === 0 && ((1 << (_la - 470)) & 262149) !== 0) || _la === 502)) {
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
    timeIntervalUnit() {
        let localContext = new TimeIntervalUnitContext(this.context, this.state);
        this.enterRule(localContext, 368, FlinkSqlParser.RULE_timeIntervalUnit);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2263;
                _la = this.tokenStream.LA(1);
                if (!(_la === 97 || _la === 165 || _la === 222 || _la === 229 || _la === 334 || ((((_la - 427)) & ~0x1F) === 0 && ((1 << (_la - 427)) & 140542465) !== 0) || ((((_la - 460)) & ~0x1F) === 0 && ((1 << (_la - 460)) & 2415983617) !== 0) || _la === 502 || _la === 503)) {
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
    reservedKeywordsUsedAsFuncParam() {
        let localContext = new ReservedKeywordsUsedAsFuncParamContext(this.context, this.state);
        this.enterRule(localContext, 370, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2265;
                _la = this.tokenStream.LA(1);
                if (!(((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 268435713) !== 0) || _la === 85 || _la === 113 || _la === 200 || _la === 389 || _la === 413 || _la === 527)) {
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
    reservedKeywordsUsedAsFuncName() {
        let localContext = new ReservedKeywordsUsedAsFuncNameContext(this.context, this.state);
        this.enterRule(localContext, 372, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2267;
                _la = this.tokenStream.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 8396816) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 2147811433) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & 25232905) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 134221825) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 337641553) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 873523369) !== 0) || ((((_la - 229)) & ~0x1F) === 0 && ((1 << (_la - 229)) & 81921) !== 0) || ((((_la - 264)) & ~0x1F) === 0 && ((1 << (_la - 264)) & 537530369) !== 0) || ((((_la - 317)) & ~0x1F) === 0 && ((1 << (_la - 317)) & 131185) !== 0) || ((((_la - 357)) & ~0x1F) === 0 && ((1 << (_la - 357)) & 14681219) !== 0) || ((((_la - 395)) & ~0x1F) === 0 && ((1 << (_la - 395)) & 50339865) !== 0) || _la === 436 || _la === 469 || _la === 488 || _la === 502)) {
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
    nonReservedKeywords() {
        let localContext = new NonReservedKeywordsContext(this.context, this.state);
        this.enterRule(localContext, 374, FlinkSqlParser.RULE_nonReservedKeywords);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2269;
                _la = this.tokenStream.LA(1);
                if (!(((((_la - 437)) & ~0x1F) === 0 && ((1 << (_la - 437)) & 4294967295) !== 0) || ((((_la - 469)) & ~0x1F) === 0 && ((1 << (_la - 469)) & 4294967295) !== 0) || ((((_la - 501)) & ~0x1F) === 0 && ((1 << (_la - 501)) & 15) !== 0))) {
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
    sempred(localContext, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 26:
                return this.columnName_sempred(localContext, predIndex);
            case 79:
                return this.queryStatement_sempred(localContext, predIndex);
            case 89:
                return this.tableExpression_sempred(localContext, predIndex);
            case 130:
                return this.booleanExpression_sempred(localContext, predIndex);
            case 133:
                return this.valueExpression_sempred(localContext, predIndex);
            case 134:
                return this.primaryExpression_sempred(localContext, predIndex);
        }
        return true;
    }
    columnName_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 0:
                return this.shouldMatchEmpty();
        }
        return true;
    }
    queryStatement_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this.context, 3);
        }
        return true;
    }
    tableExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this.context, 3);
            case 3:
                return this.precpred(this.context, 4);
        }
        return true;
    }
    booleanExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 4:
                return this.precpred(this.context, 3);
            case 5:
                return this.precpred(this.context, 2);
            case 6:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    valueExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 7:
                return this.precpred(this.context, 6);
            case 8:
                return this.precpred(this.context, 5);
            case 9:
                return this.precpred(this.context, 4);
            case 10:
                return this.precpred(this.context, 3);
            case 11:
                return this.precpred(this.context, 2);
            case 12:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    primaryExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 13:
                return this.precpred(this.context, 5);
        }
        return true;
    }
    static get _ATN() {
        if (!FlinkSqlParser.__ATN) {
            FlinkSqlParser.__ATN = new antlr.ATNDeserializer().deserialize(FlinkSqlParser._serializedATN);
        }
        return FlinkSqlParser.__ATN;
    }
    get vocabulary() {
        return FlinkSqlParser.vocabulary;
    }
}
FlinkSqlParser.SPACE = 1;
FlinkSqlParser.COMMENT_INPUT = 2;
FlinkSqlParser.LINE_COMMENT = 3;
FlinkSqlParser.KW_ABS = 4;
FlinkSqlParser.KW_ALL = 5;
FlinkSqlParser.KW_ALLOCATE = 6;
FlinkSqlParser.KW_ALLOW = 7;
FlinkSqlParser.KW_ALTER = 8;
FlinkSqlParser.KW_ANALYZE = 9;
FlinkSqlParser.KW_AND = 10;
FlinkSqlParser.KW_ANY = 11;
FlinkSqlParser.KW_ARE = 12;
FlinkSqlParser.KW_ARRAY = 13;
FlinkSqlParser.KW_ARRAY_AGG = 14;
FlinkSqlParser.KW_ARRAY_CONCAT_AGG = 15;
FlinkSqlParser.KW_ARRAY_MAX_CARDINALITY = 16;
FlinkSqlParser.KW_AS = 17;
FlinkSqlParser.KW_ASENSITIVE = 18;
FlinkSqlParser.KW_ASYMMETRIC = 19;
FlinkSqlParser.KW_AT = 20;
FlinkSqlParser.KW_ATOMIC = 21;
FlinkSqlParser.KW_AUTHORIZATION = 22;
FlinkSqlParser.KW_AVG = 23;
FlinkSqlParser.KW_BEGIN = 24;
FlinkSqlParser.KW_BEGIN_FRAME = 25;
FlinkSqlParser.KW_BEGIN_PARTITION = 26;
FlinkSqlParser.KW_BETWEEN = 27;
FlinkSqlParser.KW_BIGINT = 28;
FlinkSqlParser.KW_BINARY = 29;
FlinkSqlParser.KW_BIT = 30;
FlinkSqlParser.KW_BLOB = 31;
FlinkSqlParser.KW_BOOLEAN = 32;
FlinkSqlParser.KW_BOTH = 33;
FlinkSqlParser.KW_BY = 34;
FlinkSqlParser.KW_BYTES = 35;
FlinkSqlParser.KW_CALL = 36;
FlinkSqlParser.KW_CALLED = 37;
FlinkSqlParser.KW_CARDINALITY = 38;
FlinkSqlParser.KW_CASCADED = 39;
FlinkSqlParser.KW_CASE = 40;
FlinkSqlParser.KW_CAST = 41;
FlinkSqlParser.KW_CATALOGS = 42;
FlinkSqlParser.KW_CEIL = 43;
FlinkSqlParser.KW_CEILING = 44;
FlinkSqlParser.KW_CHANGELOG_MODE = 45;
FlinkSqlParser.KW_CHAR = 46;
FlinkSqlParser.KW_CHARACTER = 47;
FlinkSqlParser.KW_CHARACTER_LENGTH = 48;
FlinkSqlParser.KW_CHAR_LENGTH = 49;
FlinkSqlParser.KW_CHECK = 50;
FlinkSqlParser.KW_CLASSIFIER = 51;
FlinkSqlParser.KW_CLOB = 52;
FlinkSqlParser.KW_CLOSE = 53;
FlinkSqlParser.KW_COALESCE = 54;
FlinkSqlParser.KW_COLLATE = 55;
FlinkSqlParser.KW_COLLECT = 56;
FlinkSqlParser.KW_COLUMN = 57;
FlinkSqlParser.KW_COLUMNS = 58;
FlinkSqlParser.KW_COMMENT = 59;
FlinkSqlParser.KW_COMMIT = 60;
FlinkSqlParser.KW_COMPUTE = 61;
FlinkSqlParser.KW_CONDITION = 62;
FlinkSqlParser.KW_CONNECT = 63;
FlinkSqlParser.KW_CONSTRAINT = 64;
FlinkSqlParser.KW_CONTAINS = 65;
FlinkSqlParser.KW_CONVERT = 66;
FlinkSqlParser.KW_CORR = 67;
FlinkSqlParser.KW_CORRESPONDING = 68;
FlinkSqlParser.KW_COUNT = 69;
FlinkSqlParser.KW_COVAR_POP = 70;
FlinkSqlParser.KW_COVAR_SAMP = 71;
FlinkSqlParser.KW_CREATE = 72;
FlinkSqlParser.KW_CROSS = 73;
FlinkSqlParser.KW_CUBE = 74;
FlinkSqlParser.KW_CUME_DIST = 75;
FlinkSqlParser.KW_CURRENT = 76;
FlinkSqlParser.KW_CURRENT_CATALOG = 77;
FlinkSqlParser.KW_CURRENT_DATE = 78;
FlinkSqlParser.KW_CURRENT_DEFAULT_TRANSFORM_GROUP = 79;
FlinkSqlParser.KW_CURRENT_PATH = 80;
FlinkSqlParser.KW_CURRENT_ROLE = 81;
FlinkSqlParser.KW_CURRENT_ROW = 82;
FlinkSqlParser.KW_CURRENT_SCHEMA = 83;
FlinkSqlParser.KW_CURRENT_TIME = 84;
FlinkSqlParser.KW_CURRENT_TIMESTAMP = 85;
FlinkSqlParser.KW_CURRENT_TRANSFORM_GROUP_FOR_TYPE = 86;
FlinkSqlParser.KW_CURRENT_USER = 87;
FlinkSqlParser.KW_CURSOR = 88;
FlinkSqlParser.KW_CYCLE = 89;
FlinkSqlParser.KW_DATABASES = 90;
FlinkSqlParser.KW_DATE = 91;
FlinkSqlParser.KW_DATETIME = 92;
FlinkSqlParser.KW_DATETIME_DIFF = 93;
FlinkSqlParser.KW_DATETIME_TRUNC = 94;
FlinkSqlParser.KW_DATE_DIFF = 95;
FlinkSqlParser.KW_DATE_TRUNC = 96;
FlinkSqlParser.KW_DAY = 97;
FlinkSqlParser.KW_DAYOFWEEK = 98;
FlinkSqlParser.KW_DAYOFYEAR = 99;
FlinkSqlParser.KW_DEALLOCATE = 100;
FlinkSqlParser.KW_DEC = 101;
FlinkSqlParser.KW_DECIMAL = 102;
FlinkSqlParser.KW_DECLARE = 103;
FlinkSqlParser.KW_DEFAULT = 104;
FlinkSqlParser.KW_DEFINE = 105;
FlinkSqlParser.KW_DELETE = 106;
FlinkSqlParser.KW_DENSE_RANK = 107;
FlinkSqlParser.KW_DEREF = 108;
FlinkSqlParser.KW_DESCRIBE = 109;
FlinkSqlParser.KW_DETERMINISTIC = 110;
FlinkSqlParser.KW_DISALLOW = 111;
FlinkSqlParser.KW_DISCONNECT = 112;
FlinkSqlParser.KW_DISTINCT = 113;
FlinkSqlParser.KW_DOT = 114;
FlinkSqlParser.KW_DOUBLE = 115;
FlinkSqlParser.KW_DROP = 116;
FlinkSqlParser.KW_DYNAMIC = 117;
FlinkSqlParser.KW_EACH = 118;
FlinkSqlParser.KW_ELEMENT = 119;
FlinkSqlParser.KW_ELSE = 120;
FlinkSqlParser.KW_EMPTY = 121;
FlinkSqlParser.KW_END = 122;
FlinkSqlParser.KW_END_FRAME = 123;
FlinkSqlParser.KW_END_PARTITION = 124;
FlinkSqlParser.KW_ENFORCED = 125;
FlinkSqlParser.KW_EQUALS = 126;
FlinkSqlParser.KW_ESCAPE = 127;
FlinkSqlParser.KW_ESTIMATED_COST = 128;
FlinkSqlParser.KW_EVERY = 129;
FlinkSqlParser.KW_EXCEPT = 130;
FlinkSqlParser.KW_EXEC = 131;
FlinkSqlParser.KW_EXECUTE = 132;
FlinkSqlParser.KW_EXISTS = 133;
FlinkSqlParser.KW_EXP = 134;
FlinkSqlParser.KW_EXPLAIN = 135;
FlinkSqlParser.KW_EXTEND = 136;
FlinkSqlParser.KW_EXTENDED = 137;
FlinkSqlParser.KW_EXTERNAL = 138;
FlinkSqlParser.KW_EXTRACT = 139;
FlinkSqlParser.KW_FALSE = 140;
FlinkSqlParser.KW_FETCH = 141;
FlinkSqlParser.KW_FILTER = 142;
FlinkSqlParser.KW_FIRST_VALUE = 143;
FlinkSqlParser.KW_FLOAT = 144;
FlinkSqlParser.KW_FLOOR = 145;
FlinkSqlParser.KW_FOR = 146;
FlinkSqlParser.KW_FOREIGN = 147;
FlinkSqlParser.KW_FRAME_ROW = 148;
FlinkSqlParser.KW_FREE = 149;
FlinkSqlParser.KW_FRIDAY = 150;
FlinkSqlParser.KW_FROM = 151;
FlinkSqlParser.KW_FULL = 152;
FlinkSqlParser.KW_FUNCTION = 153;
FlinkSqlParser.KW_FUNCTIONS = 154;
FlinkSqlParser.KW_FUSION = 155;
FlinkSqlParser.KW_GET = 156;
FlinkSqlParser.KW_GLOBAL = 157;
FlinkSqlParser.KW_GRANT = 158;
FlinkSqlParser.KW_GROUP = 159;
FlinkSqlParser.KW_GROUPING = 160;
FlinkSqlParser.KW_GROUPS = 161;
FlinkSqlParser.KW_GROUP_CONCAT = 162;
FlinkSqlParser.KW_HAVING = 163;
FlinkSqlParser.KW_HOLD = 164;
FlinkSqlParser.KW_HOUR = 165;
FlinkSqlParser.KW_IDENTITY = 166;
FlinkSqlParser.KW_IF = 167;
FlinkSqlParser.KW_ILIKE = 168;
FlinkSqlParser.KW_IMPORT = 169;
FlinkSqlParser.KW_IN = 170;
FlinkSqlParser.KW_INCLUDE = 171;
FlinkSqlParser.KW_INDICATOR = 172;
FlinkSqlParser.KW_INITIAL = 173;
FlinkSqlParser.KW_INNER = 174;
FlinkSqlParser.KW_INOUT = 175;
FlinkSqlParser.KW_INSENSITIVE = 176;
FlinkSqlParser.KW_INSERT = 177;
FlinkSqlParser.KW_INT = 178;
FlinkSqlParser.KW_INTEGER = 179;
FlinkSqlParser.KW_INTERSECT = 180;
FlinkSqlParser.KW_INTERSECTION = 181;
FlinkSqlParser.KW_INTERVAL = 182;
FlinkSqlParser.KW_INTO = 183;
FlinkSqlParser.KW_IS = 184;
FlinkSqlParser.KW_JOIN = 185;
FlinkSqlParser.KW_JSON_ARRAY = 186;
FlinkSqlParser.KW_JSON_ARRAYAGG = 187;
FlinkSqlParser.KW_JSON_EXECUTION_PLAN = 188;
FlinkSqlParser.KW_JSON_EXISTS = 189;
FlinkSqlParser.KW_JSON_OBJECT = 190;
FlinkSqlParser.KW_JSON_OBJECTAGG = 191;
FlinkSqlParser.KW_JSON_QUERY = 192;
FlinkSqlParser.KW_JSON_VALUE = 193;
FlinkSqlParser.KW_LAG = 194;
FlinkSqlParser.KW_LANGUAGE = 195;
FlinkSqlParser.KW_LARGE = 196;
FlinkSqlParser.KW_LAST_VALUE = 197;
FlinkSqlParser.KW_LATERAL = 198;
FlinkSqlParser.KW_LEAD = 199;
FlinkSqlParser.KW_LEADING = 200;
FlinkSqlParser.KW_LEFT = 201;
FlinkSqlParser.KW_LIKE = 202;
FlinkSqlParser.KW_LIKE_REGEX = 203;
FlinkSqlParser.KW_LIMIT = 204;
FlinkSqlParser.KW_LN = 205;
FlinkSqlParser.KW_LOCAL = 206;
FlinkSqlParser.KW_LOCALTIME = 207;
FlinkSqlParser.KW_LOCALTIMESTAMP = 208;
FlinkSqlParser.KW_LOWER = 209;
FlinkSqlParser.KW_MATCH = 210;
FlinkSqlParser.KW_MATCHES = 211;
FlinkSqlParser.KW_MATCH_NUMBER = 212;
FlinkSqlParser.KW_MATCH_RECOGNIZE = 213;
FlinkSqlParser.KW_MAX = 214;
FlinkSqlParser.KW_MEASURES = 215;
FlinkSqlParser.KW_MEMBER = 216;
FlinkSqlParser.KW_MERGE = 217;
FlinkSqlParser.KW_METADATA = 218;
FlinkSqlParser.KW_METHOD = 219;
FlinkSqlParser.KW_MIN = 220;
FlinkSqlParser.KW_MINUS = 221;
FlinkSqlParser.KW_MINUTE = 222;
FlinkSqlParser.KW_MOD = 223;
FlinkSqlParser.KW_MODIFIES = 224;
FlinkSqlParser.KW_MODIFY = 225;
FlinkSqlParser.KW_MODULE = 226;
FlinkSqlParser.KW_MODULES = 227;
FlinkSqlParser.KW_MONDAY = 228;
FlinkSqlParser.KW_MONTH = 229;
FlinkSqlParser.KW_MORE = 230;
FlinkSqlParser.KW_MULTISET = 231;
FlinkSqlParser.KW_NATIONAL = 232;
FlinkSqlParser.KW_NATURAL = 233;
FlinkSqlParser.KW_NCHAR = 234;
FlinkSqlParser.KW_NCLOB = 235;
FlinkSqlParser.KW_NEW = 236;
FlinkSqlParser.KW_NEXT = 237;
FlinkSqlParser.KW_NO = 238;
FlinkSqlParser.KW_NONE = 239;
FlinkSqlParser.KW_NORMALIZE = 240;
FlinkSqlParser.KW_NOT = 241;
FlinkSqlParser.KW_NTH_VALUE = 242;
FlinkSqlParser.KW_NTILE = 243;
FlinkSqlParser.KW_NULL = 244;
FlinkSqlParser.KW_NULLIF = 245;
FlinkSqlParser.KW_NUMERIC = 246;
FlinkSqlParser.KW_OCCURRENCES_REGEX = 247;
FlinkSqlParser.KW_OCTET_LENGTH = 248;
FlinkSqlParser.KW_OF = 249;
FlinkSqlParser.KW_OFFSET = 250;
FlinkSqlParser.KW_OLD = 251;
FlinkSqlParser.KW_OMIT = 252;
FlinkSqlParser.KW_ON = 253;
FlinkSqlParser.KW_ONE = 254;
FlinkSqlParser.KW_ONLY = 255;
FlinkSqlParser.KW_OPEN = 256;
FlinkSqlParser.KW_OR = 257;
FlinkSqlParser.KW_ORDER = 258;
FlinkSqlParser.KW_ORDINAL = 259;
FlinkSqlParser.KW_OUT = 260;
FlinkSqlParser.KW_OUTER = 261;
FlinkSqlParser.KW_OVER = 262;
FlinkSqlParser.KW_OVERLAPS = 263;
FlinkSqlParser.KW_OVERLAY = 264;
FlinkSqlParser.KW_OVERWRITE = 265;
FlinkSqlParser.KW_OVERWRITING = 266;
FlinkSqlParser.KW_PARAMETER = 267;
FlinkSqlParser.KW_PARTITION = 268;
FlinkSqlParser.KW_PARTITIONED = 269;
FlinkSqlParser.KW_PARTITIONS = 270;
FlinkSqlParser.KW_PATTERN = 271;
FlinkSqlParser.KW_PER = 272;
FlinkSqlParser.KW_PERCENT = 273;
FlinkSqlParser.KW_PERCENTILE_CONT = 274;
FlinkSqlParser.KW_PERCENTILE_DISC = 275;
FlinkSqlParser.KW_PERCENT_RANK = 276;
FlinkSqlParser.KW_PERIOD = 277;
FlinkSqlParser.KW_PERMUTE = 278;
FlinkSqlParser.KW_PIVOT = 279;
FlinkSqlParser.KW_PORTION = 280;
FlinkSqlParser.KW_POSITION = 281;
FlinkSqlParser.KW_POSITION_REGEX = 282;
FlinkSqlParser.KW_POWER = 283;
FlinkSqlParser.KW_PRECEDES = 284;
FlinkSqlParser.KW_PRECISION = 285;
FlinkSqlParser.KW_PREPARE = 286;
FlinkSqlParser.KW_PREV = 287;
FlinkSqlParser.KW_PRIMARY = 288;
FlinkSqlParser.KW_PROCEDURE = 289;
FlinkSqlParser.KW_QUALIFY = 290;
FlinkSqlParser.KW_QUARTERS = 291;
FlinkSqlParser.KW_RANGE = 292;
FlinkSqlParser.KW_RANK = 293;
FlinkSqlParser.KW_RAW = 294;
FlinkSqlParser.KW_READS = 295;
FlinkSqlParser.KW_REAL = 296;
FlinkSqlParser.KW_RECURSIVE = 297;
FlinkSqlParser.KW_REF = 298;
FlinkSqlParser.KW_REFERENCES = 299;
FlinkSqlParser.KW_REFERENCING = 300;
FlinkSqlParser.KW_REGR_AVGX = 301;
FlinkSqlParser.KW_REGR_AVGY = 302;
FlinkSqlParser.KW_REGR_COUNT = 303;
FlinkSqlParser.KW_REGR_INTERCEPT = 304;
FlinkSqlParser.KW_REGR_R2 = 305;
FlinkSqlParser.KW_REGR_SLOPE = 306;
FlinkSqlParser.KW_REGR_SXX = 307;
FlinkSqlParser.KW_REGR_SXY = 308;
FlinkSqlParser.KW_REGR_SYY = 309;
FlinkSqlParser.KW_RELEASE = 310;
FlinkSqlParser.KW_RENAME = 311;
FlinkSqlParser.KW_RESET = 312;
FlinkSqlParser.KW_RESULT = 313;
FlinkSqlParser.KW_RETURN = 314;
FlinkSqlParser.KW_RETURNS = 315;
FlinkSqlParser.KW_REVOKE = 316;
FlinkSqlParser.KW_RIGHT = 317;
FlinkSqlParser.KW_RLIKE = 318;
FlinkSqlParser.KW_ROLLBACK = 319;
FlinkSqlParser.KW_ROLLUP = 320;
FlinkSqlParser.KW_ROW = 321;
FlinkSqlParser.KW_ROWS = 322;
FlinkSqlParser.KW_ROW_NUMBER = 323;
FlinkSqlParser.KW_RUNNING = 324;
FlinkSqlParser.KW_SAFE_CAST = 325;
FlinkSqlParser.KW_SAFE_OFFSET = 326;
FlinkSqlParser.KW_SAFE_ORDINAL = 327;
FlinkSqlParser.KW_SATURDAY = 328;
FlinkSqlParser.KW_SAVEPOINT = 329;
FlinkSqlParser.KW_SCALA = 330;
FlinkSqlParser.KW_SCOPE = 331;
FlinkSqlParser.KW_SCROLL = 332;
FlinkSqlParser.KW_SEARCH = 333;
FlinkSqlParser.KW_SECOND = 334;
FlinkSqlParser.KW_SEEK = 335;
FlinkSqlParser.KW_SELECT = 336;
FlinkSqlParser.KW_SENSITIVE = 337;
FlinkSqlParser.KW_SEPARATOR = 338;
FlinkSqlParser.KW_SESSION_USER = 339;
FlinkSqlParser.KW_SET = 340;
FlinkSqlParser.KW_SHOW = 341;
FlinkSqlParser.KW_SIMILAR = 342;
FlinkSqlParser.KW_SKIP = 343;
FlinkSqlParser.KW_SMALLINT = 344;
FlinkSqlParser.KW_SOME = 345;
FlinkSqlParser.KW_SPECIFIC = 346;
FlinkSqlParser.KW_SPECIFICTYPE = 347;
FlinkSqlParser.KW_SQL = 348;
FlinkSqlParser.KW_SQLEXCEPTION = 349;
FlinkSqlParser.KW_SQLSTATE = 350;
FlinkSqlParser.KW_SQLWARNING = 351;
FlinkSqlParser.KW_SQRT = 352;
FlinkSqlParser.KW_START = 353;
FlinkSqlParser.KW_STATEMENT = 354;
FlinkSqlParser.KW_STATIC = 355;
FlinkSqlParser.KW_STATISTICS = 356;
FlinkSqlParser.KW_STDDEV_POP = 357;
FlinkSqlParser.KW_STDDEV_SAMP = 358;
FlinkSqlParser.KW_STREAM = 359;
FlinkSqlParser.KW_STRING = 360;
FlinkSqlParser.KW_STRING_AGG = 361;
FlinkSqlParser.KW_SUBMULTISET = 362;
FlinkSqlParser.KW_SUBSET = 363;
FlinkSqlParser.KW_SUBSTRING = 364;
FlinkSqlParser.KW_SUBSTRING_REGEX = 365;
FlinkSqlParser.KW_SUCCEEDS = 366;
FlinkSqlParser.KW_SUM = 367;
FlinkSqlParser.KW_SUNDAY = 368;
FlinkSqlParser.KW_SYMMETRIC = 369;
FlinkSqlParser.KW_SYSTEM = 370;
FlinkSqlParser.KW_SYSTEM_TIME = 371;
FlinkSqlParser.KW_SYSTEM_USER = 372;
FlinkSqlParser.KW_TABLE = 373;
FlinkSqlParser.KW_TABLES = 374;
FlinkSqlParser.KW_TABLESAMPLE = 375;
FlinkSqlParser.KW_THEN = 376;
FlinkSqlParser.KW_THURSDAY = 377;
FlinkSqlParser.KW_TIME = 378;
FlinkSqlParser.KW_TIMESTAMP = 379;
FlinkSqlParser.KW_TIMESTAMP_DIFF = 380;
FlinkSqlParser.KW_TIMESTAMP_LTZ = 381;
FlinkSqlParser.KW_TIMESTAMP_TRUNC = 382;
FlinkSqlParser.KW_TIMEZONE_HOUR = 383;
FlinkSqlParser.KW_TIMEZONE_MINUTE = 384;
FlinkSqlParser.KW_TIME_DIFF = 385;
FlinkSqlParser.KW_TIME_TRUNC = 386;
FlinkSqlParser.KW_TINYINT = 387;
FlinkSqlParser.KW_TO = 388;
FlinkSqlParser.KW_TRAILING = 389;
FlinkSqlParser.KW_TRANSLATE = 390;
FlinkSqlParser.KW_TRANSLATE_REGEX = 391;
FlinkSqlParser.KW_TRANSLATION = 392;
FlinkSqlParser.KW_TREAT = 393;
FlinkSqlParser.KW_TRIGGER = 394;
FlinkSqlParser.KW_TRIM = 395;
FlinkSqlParser.KW_TRIM_ARRAY = 396;
FlinkSqlParser.KW_TRUE = 397;
FlinkSqlParser.KW_TRUNCATE = 398;
FlinkSqlParser.KW_TRY_CAST = 399;
FlinkSqlParser.KW_TUESDAY = 400;
FlinkSqlParser.KW_UESCAPE = 401;
FlinkSqlParser.KW_UNION = 402;
FlinkSqlParser.KW_UNIQUE = 403;
FlinkSqlParser.KW_UNKNOWN = 404;
FlinkSqlParser.KW_UNNEST = 405;
FlinkSqlParser.KW_UNPIVOT = 406;
FlinkSqlParser.KW_UPDATE = 407;
FlinkSqlParser.KW_UPPER = 408;
FlinkSqlParser.KW_UPSERT = 409;
FlinkSqlParser.KW_USE = 410;
FlinkSqlParser.KW_USER = 411;
FlinkSqlParser.KW_USING = 412;
FlinkSqlParser.KW_VALUE = 413;
FlinkSqlParser.KW_VALUES = 414;
FlinkSqlParser.KW_VALUE_OF = 415;
FlinkSqlParser.KW_VARBINARY = 416;
FlinkSqlParser.KW_VARCHAR = 417;
FlinkSqlParser.KW_VARYING = 418;
FlinkSqlParser.KW_VAR_POP = 419;
FlinkSqlParser.KW_VAR_SAMP = 420;
FlinkSqlParser.KW_VERSIONING = 421;
FlinkSqlParser.KW_VIEWS = 422;
FlinkSqlParser.KW_VIRTUAL = 423;
FlinkSqlParser.KW_WATERMARK = 424;
FlinkSqlParser.KW_WATERMARKS = 425;
FlinkSqlParser.KW_WEDNESDAY = 426;
FlinkSqlParser.KW_WEEKS = 427;
FlinkSqlParser.KW_WHEN = 428;
FlinkSqlParser.KW_WHENEVER = 429;
FlinkSqlParser.KW_WHERE = 430;
FlinkSqlParser.KW_WIDTH_BUCKET = 431;
FlinkSqlParser.KW_WINDOW = 432;
FlinkSqlParser.KW_WITH = 433;
FlinkSqlParser.KW_WITHIN = 434;
FlinkSqlParser.KW_WITHOUT = 435;
FlinkSqlParser.KW_YEAR = 436;
FlinkSqlParser.KW_ADD = 437;
FlinkSqlParser.KW_AFTER = 438;
FlinkSqlParser.KW_ASC = 439;
FlinkSqlParser.KW_CASCADE = 440;
FlinkSqlParser.KW_CATALOG = 441;
FlinkSqlParser.KW_CENTURY = 442;
FlinkSqlParser.KW_CONFIG = 443;
FlinkSqlParser.KW_CONSTRAINTS = 444;
FlinkSqlParser.KW_CUMULATE = 445;
FlinkSqlParser.KW_DATA = 446;
FlinkSqlParser.KW_DATABASE = 447;
FlinkSqlParser.KW_DAYS = 448;
FlinkSqlParser.KW_DECADE = 449;
FlinkSqlParser.KW_DESC = 450;
FlinkSqlParser.KW_DESCRIPTOR = 451;
FlinkSqlParser.KW_DIV = 452;
FlinkSqlParser.KW_ENGINE = 453;
FlinkSqlParser.KW_EPOCH = 454;
FlinkSqlParser.KW_EXCLUDING = 455;
FlinkSqlParser.KW_FILE = 456;
FlinkSqlParser.KW_FIRST = 457;
FlinkSqlParser.KW_GENERATED = 458;
FlinkSqlParser.KW_HOP = 459;
FlinkSqlParser.KW_HOURS = 460;
FlinkSqlParser.KW_IGNORE = 461;
FlinkSqlParser.KW_INCLUDING = 462;
FlinkSqlParser.KW_JAR = 463;
FlinkSqlParser.KW_JARS = 464;
FlinkSqlParser.KW_JAVA = 465;
FlinkSqlParser.KW_KEY = 466;
FlinkSqlParser.KW_LAST = 467;
FlinkSqlParser.KW_LOAD = 468;
FlinkSqlParser.KW_MAP = 469;
FlinkSqlParser.KW_MICROSECOND = 470;
FlinkSqlParser.KW_MILLENNIUM = 471;
FlinkSqlParser.KW_MILLISECOND = 472;
FlinkSqlParser.KW_MINUTES = 473;
FlinkSqlParser.KW_MONTHS = 474;
FlinkSqlParser.KW_NANOSECOND = 475;
FlinkSqlParser.KW_NULLS = 476;
FlinkSqlParser.KW_OPTIONS = 477;
FlinkSqlParser.KW_PAST = 478;
FlinkSqlParser.KW_PLAN = 479;
FlinkSqlParser.KW_PRECEDING = 480;
FlinkSqlParser.KW_PYTHON = 481;
FlinkSqlParser.KW_PYTHON_ARCHIVES = 482;
FlinkSqlParser.KW_PYTHON_DEPENDENCIES = 483;
FlinkSqlParser.KW_PYTHON_FILES = 484;
FlinkSqlParser.KW_PYTHON_JAR = 485;
FlinkSqlParser.KW_PYTHON_PARAMETER = 486;
FlinkSqlParser.KW_PYTHON_REQUIREMENTS = 487;
FlinkSqlParser.KW_QUARTER = 488;
FlinkSqlParser.KW_REMOVE = 489;
FlinkSqlParser.KW_RESTRICT = 490;
FlinkSqlParser.KW_SECONDS = 491;
FlinkSqlParser.KW_SESSION = 492;
FlinkSqlParser.KW_SETS = 493;
FlinkSqlParser.KW_SIZE = 494;
FlinkSqlParser.KW_SLIDE = 495;
FlinkSqlParser.KW_STEP = 496;
FlinkSqlParser.KW_TEMPORARY = 497;
FlinkSqlParser.KW_TIMECOL = 498;
FlinkSqlParser.KW_TUMBLE = 499;
FlinkSqlParser.KW_UNLOAD = 500;
FlinkSqlParser.KW_VIEW = 501;
FlinkSqlParser.KW_WEEK = 502;
FlinkSqlParser.KW_YEARS = 503;
FlinkSqlParser.KW_ZONE = 504;
FlinkSqlParser.EQUAL_SYMBOL = 505;
FlinkSqlParser.GREATER_SYMBOL = 506;
FlinkSqlParser.LESS_SYMBOL = 507;
FlinkSqlParser.EXCLAMATION_SYMBOL = 508;
FlinkSqlParser.BIT_NOT_OP = 509;
FlinkSqlParser.BIT_OR_OP = 510;
FlinkSqlParser.BIT_AND_OP = 511;
FlinkSqlParser.BIT_XOR_OP = 512;
FlinkSqlParser.DOT = 513;
FlinkSqlParser.LS_BRACKET = 514;
FlinkSqlParser.RS_BRACKET = 515;
FlinkSqlParser.LR_BRACKET = 516;
FlinkSqlParser.RR_BRACKET = 517;
FlinkSqlParser.LB_BRACKET = 518;
FlinkSqlParser.RB_BRACKET = 519;
FlinkSqlParser.COMMA = 520;
FlinkSqlParser.SEMICOLON = 521;
FlinkSqlParser.AT_SIGN = 522;
FlinkSqlParser.SINGLE_QUOTE_SYMB = 523;
FlinkSqlParser.DOUBLE_QUOTE_SYMB = 524;
FlinkSqlParser.REVERSE_QUOTE_SYMB = 525;
FlinkSqlParser.COLON_SYMB = 526;
FlinkSqlParser.ASTERISK_SIGN = 527;
FlinkSqlParser.UNDERLINE_SIGN = 528;
FlinkSqlParser.HYPNEN_SIGN = 529;
FlinkSqlParser.ADD_SIGN = 530;
FlinkSqlParser.PENCENT_SIGN = 531;
FlinkSqlParser.DOUBLE_VERTICAL_SIGN = 532;
FlinkSqlParser.DOUBLE_HYPNEN_SIGN = 533;
FlinkSqlParser.SLASH_SIGN = 534;
FlinkSqlParser.QUESTION_MARK_SIGN = 535;
FlinkSqlParser.DOUBLE_RIGHT_ARROW = 536;
FlinkSqlParser.STRING_LITERAL = 537;
FlinkSqlParser.DIG_LITERAL = 538;
FlinkSqlParser.REAL_LITERAL = 539;
FlinkSqlParser.BIT_STRING = 540;
FlinkSqlParser.ID_LITERAL = 541;
FlinkSqlParser.RULE_program = 0;
FlinkSqlParser.RULE_singleStatement = 1;
FlinkSqlParser.RULE_sqlStatement = 2;
FlinkSqlParser.RULE_emptyStatement = 3;
FlinkSqlParser.RULE_ddlStatement = 4;
FlinkSqlParser.RULE_dmlStatement = 5;
FlinkSqlParser.RULE_describeStatement = 6;
FlinkSqlParser.RULE_explainStatement = 7;
FlinkSqlParser.RULE_explainDetails = 8;
FlinkSqlParser.RULE_explainDetail = 9;
FlinkSqlParser.RULE_useStatement = 10;
FlinkSqlParser.RULE_useModuleStatement = 11;
FlinkSqlParser.RULE_showStatememt = 12;
FlinkSqlParser.RULE_loadStatement = 13;
FlinkSqlParser.RULE_unloadStatememt = 14;
FlinkSqlParser.RULE_setStatememt = 15;
FlinkSqlParser.RULE_resetStatememt = 16;
FlinkSqlParser.RULE_jarStatememt = 17;
FlinkSqlParser.RULE_dtAddStatement = 18;
FlinkSqlParser.RULE_dtFilePath = 19;
FlinkSqlParser.RULE_createTable = 20;
FlinkSqlParser.RULE_simpleCreateTable = 21;
FlinkSqlParser.RULE_createTableAsSelect = 22;
FlinkSqlParser.RULE_columnOptionDefinition = 23;
FlinkSqlParser.RULE_physicalColumnDefinition = 24;
FlinkSqlParser.RULE_columnNameCreate = 25;
FlinkSqlParser.RULE_columnName = 26;
FlinkSqlParser.RULE_columnNameList = 27;
FlinkSqlParser.RULE_columnType = 28;
FlinkSqlParser.RULE_lengthOneDimension = 29;
FlinkSqlParser.RULE_lengthTwoOptionalDimension = 30;
FlinkSqlParser.RULE_lengthTwoStringDimension = 31;
FlinkSqlParser.RULE_lengthOneTypeDimension = 32;
FlinkSqlParser.RULE_mapTypeDimension = 33;
FlinkSqlParser.RULE_rowTypeDimension = 34;
FlinkSqlParser.RULE_columnConstraint = 35;
FlinkSqlParser.RULE_commentSpec = 36;
FlinkSqlParser.RULE_metadataColumnDefinition = 37;
FlinkSqlParser.RULE_metadataKey = 38;
FlinkSqlParser.RULE_computedColumnDefinition = 39;
FlinkSqlParser.RULE_computedColumnExpression = 40;
FlinkSqlParser.RULE_watermarkDefinition = 41;
FlinkSqlParser.RULE_tableConstraint = 42;
FlinkSqlParser.RULE_constraintName = 43;
FlinkSqlParser.RULE_selfDefinitionClause = 44;
FlinkSqlParser.RULE_partitionDefinition = 45;
FlinkSqlParser.RULE_transformList = 46;
FlinkSqlParser.RULE_transform = 47;
FlinkSqlParser.RULE_transformArgument = 48;
FlinkSqlParser.RULE_likeDefinition = 49;
FlinkSqlParser.RULE_likeOption = 50;
FlinkSqlParser.RULE_createCatalog = 51;
FlinkSqlParser.RULE_createDatabase = 52;
FlinkSqlParser.RULE_createView = 53;
FlinkSqlParser.RULE_createFunction = 54;
FlinkSqlParser.RULE_usingClause = 55;
FlinkSqlParser.RULE_jarFileName = 56;
FlinkSqlParser.RULE_alterTable = 57;
FlinkSqlParser.RULE_renameDefinition = 58;
FlinkSqlParser.RULE_setKeyValueDefinition = 59;
FlinkSqlParser.RULE_addConstraint = 60;
FlinkSqlParser.RULE_dropConstraint = 61;
FlinkSqlParser.RULE_addUnique = 62;
FlinkSqlParser.RULE_notForced = 63;
FlinkSqlParser.RULE_alertView = 64;
FlinkSqlParser.RULE_alterDatabase = 65;
FlinkSqlParser.RULE_alterFunction = 66;
FlinkSqlParser.RULE_dropCatalog = 67;
FlinkSqlParser.RULE_dropTable = 68;
FlinkSqlParser.RULE_dropDatabase = 69;
FlinkSqlParser.RULE_dropView = 70;
FlinkSqlParser.RULE_dropFunction = 71;
FlinkSqlParser.RULE_insertStatement = 72;
FlinkSqlParser.RULE_insertSimpleStatement = 73;
FlinkSqlParser.RULE_insertPartitionDefinition = 74;
FlinkSqlParser.RULE_valuesDefinition = 75;
FlinkSqlParser.RULE_valuesRowDefinition = 76;
FlinkSqlParser.RULE_insertMulStatementCompatibility = 77;
FlinkSqlParser.RULE_insertMulStatement = 78;
FlinkSqlParser.RULE_queryStatement = 79;
FlinkSqlParser.RULE_valuesCaluse = 80;
FlinkSqlParser.RULE_withClause = 81;
FlinkSqlParser.RULE_withItem = 82;
FlinkSqlParser.RULE_withItemName = 83;
FlinkSqlParser.RULE_selectStatement = 84;
FlinkSqlParser.RULE_selectClause = 85;
FlinkSqlParser.RULE_projectItemDefinition = 86;
FlinkSqlParser.RULE_overWindowItem = 87;
FlinkSqlParser.RULE_fromClause = 88;
FlinkSqlParser.RULE_tableExpression = 89;
FlinkSqlParser.RULE_tableReference = 90;
FlinkSqlParser.RULE_tablePrimary = 91;
FlinkSqlParser.RULE_systemTimePeriod = 92;
FlinkSqlParser.RULE_dateTimeExpression = 93;
FlinkSqlParser.RULE_inlineDataValueClause = 94;
FlinkSqlParser.RULE_windoTVFClause = 95;
FlinkSqlParser.RULE_windowTVFExression = 96;
FlinkSqlParser.RULE_windoTVFName = 97;
FlinkSqlParser.RULE_windowTVFParam = 98;
FlinkSqlParser.RULE_timeIntervalParamName = 99;
FlinkSqlParser.RULE_columnDescriptor = 100;
FlinkSqlParser.RULE_joinCondition = 101;
FlinkSqlParser.RULE_whereClause = 102;
FlinkSqlParser.RULE_groupByClause = 103;
FlinkSqlParser.RULE_groupItemDefinition = 104;
FlinkSqlParser.RULE_groupingSets = 105;
FlinkSqlParser.RULE_groupingSetsNotaionName = 106;
FlinkSqlParser.RULE_groupWindowFunction = 107;
FlinkSqlParser.RULE_groupWindowFunctionName = 108;
FlinkSqlParser.RULE_timeAttrColumn = 109;
FlinkSqlParser.RULE_havingClause = 110;
FlinkSqlParser.RULE_windowClause = 111;
FlinkSqlParser.RULE_namedWindow = 112;
FlinkSqlParser.RULE_windowSpec = 113;
FlinkSqlParser.RULE_matchRecognizeClause = 114;
FlinkSqlParser.RULE_orderByCaluse = 115;
FlinkSqlParser.RULE_orderItemDefition = 116;
FlinkSqlParser.RULE_limitClause = 117;
FlinkSqlParser.RULE_partitionByClause = 118;
FlinkSqlParser.RULE_quantifiers = 119;
FlinkSqlParser.RULE_measuresClause = 120;
FlinkSqlParser.RULE_patternDefination = 121;
FlinkSqlParser.RULE_patternVariable = 122;
FlinkSqlParser.RULE_outputMode = 123;
FlinkSqlParser.RULE_afterMatchStrategy = 124;
FlinkSqlParser.RULE_patternVariablesDefination = 125;
FlinkSqlParser.RULE_windowFrame = 126;
FlinkSqlParser.RULE_frameBound = 127;
FlinkSqlParser.RULE_withinClause = 128;
FlinkSqlParser.RULE_expression = 129;
FlinkSqlParser.RULE_booleanExpression = 130;
FlinkSqlParser.RULE_predicate = 131;
FlinkSqlParser.RULE_likePredicate = 132;
FlinkSqlParser.RULE_valueExpression = 133;
FlinkSqlParser.RULE_primaryExpression = 134;
FlinkSqlParser.RULE_functionNameCreate = 135;
FlinkSqlParser.RULE_functionName = 136;
FlinkSqlParser.RULE_functionParam = 137;
FlinkSqlParser.RULE_dereferenceDefinition = 138;
FlinkSqlParser.RULE_correlationName = 139;
FlinkSqlParser.RULE_qualifiedName = 140;
FlinkSqlParser.RULE_timeIntervalExpression = 141;
FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval = 142;
FlinkSqlParser.RULE_multiUnitsInterval = 143;
FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval = 144;
FlinkSqlParser.RULE_unitToUnitInterval = 145;
FlinkSqlParser.RULE_intervalValue = 146;
FlinkSqlParser.RULE_tableAlias = 147;
FlinkSqlParser.RULE_errorCapturingIdentifier = 148;
FlinkSqlParser.RULE_errorCapturingIdentifierExtra = 149;
FlinkSqlParser.RULE_identifierList = 150;
FlinkSqlParser.RULE_identifierSeq = 151;
FlinkSqlParser.RULE_identifier = 152;
FlinkSqlParser.RULE_unquotedIdentifier = 153;
FlinkSqlParser.RULE_quotedIdentifier = 154;
FlinkSqlParser.RULE_whenClause = 155;
FlinkSqlParser.RULE_catalogPath = 156;
FlinkSqlParser.RULE_catalogPathCreate = 157;
FlinkSqlParser.RULE_databasePath = 158;
FlinkSqlParser.RULE_databasePathCreate = 159;
FlinkSqlParser.RULE_tablePathCreate = 160;
FlinkSqlParser.RULE_tablePath = 161;
FlinkSqlParser.RULE_viewPath = 162;
FlinkSqlParser.RULE_viewPathCreate = 163;
FlinkSqlParser.RULE_uid = 164;
FlinkSqlParser.RULE_withOption = 165;
FlinkSqlParser.RULE_ifNotExists = 166;
FlinkSqlParser.RULE_ifExists = 167;
FlinkSqlParser.RULE_tablePropertyList = 168;
FlinkSqlParser.RULE_tableProperty = 169;
FlinkSqlParser.RULE_tablePropertyKey = 170;
FlinkSqlParser.RULE_tablePropertyValue = 171;
FlinkSqlParser.RULE_logicalOperator = 172;
FlinkSqlParser.RULE_comparisonOperator = 173;
FlinkSqlParser.RULE_bitOperator = 174;
FlinkSqlParser.RULE_mathOperator = 175;
FlinkSqlParser.RULE_unaryOperator = 176;
FlinkSqlParser.RULE_constant = 177;
FlinkSqlParser.RULE_timePointLiteral = 178;
FlinkSqlParser.RULE_stringLiteral = 179;
FlinkSqlParser.RULE_decimalLiteral = 180;
FlinkSqlParser.RULE_booleanLiteral = 181;
FlinkSqlParser.RULE_setQuantifier = 182;
FlinkSqlParser.RULE_timePointUnit = 183;
FlinkSqlParser.RULE_timeIntervalUnit = 184;
FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam = 185;
FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName = 186;
FlinkSqlParser.RULE_nonReservedKeywords = 187;
FlinkSqlParser.literalNames = [
    null, null, null, null, "'ABS'", "'ALL'", "'ALLOCATE'", "'ALLOW'",
    "'ALTER'", "'ANALYZE'", "'AND'", "'ANY'", "'ARE'", "'ARRAY'", "'ARRAY_AGG'",
    "'ARRAY_CONCAT_AGG'", "'ARRAY_MAX_CARDINALITY'", "'AS'", "'ASENSITIVE'",
    "'ASYMMETRIC'", "'AT'", "'ATOMIC'", "'AUTHORIZATION'", "'AVG'",
    "'BEGIN'", "'BEGIN_FRAME'", "'BEGIN_PARTITION'", "'BETWEEN'", "'BIGINT'",
    "'BINARY'", "'BIT'", "'BLOB'", "'BOOLEAN'", "'BOTH'", "'BY'", "'BYTES'",
    "'CALL'", "'CALLED'", "'CARDINALITY'", "'CASCADED'", "'CASE'", "'CAST'",
    "'CATALOGS'", "'CEIL'", "'CEILING'", "'CHANGELOG_MODE'", "'CHAR'",
    "'CHARACTER'", "'CHARACTER_LENGTH'", "'CHAR_LENGTH'", "'CHECK'",
    "'CLASSIFIER'", "'CLOB'", "'CLOSE'", "'COALESCE'", "'COLLATE'",
    "'COLLECT'", "'COLUMN'", "'COLUMNS'", "'COMMENT'", "'COMMIT'", "'COMPUTE'",
    "'CONDITION'", "'CONNECT'", "'CONSTRAINT'", "'CONTAINS'", "'CONVERT'",
    "'CORR'", "'CORRESPONDING'", "'COUNT'", "'COVAR_POP'", "'COVAR_SAMP'",
    "'CREATE'", "'CROSS'", "'CUBE'", "'CUME_DIST'", "'CURRENT'", "'CURRENT_CATALOG'",
    "'CURRENT_DATE'", "'CURRENT_DEFAULT_TRANSFORM_GROUP'", "'CURRENT_PATH'",
    "'CURRENT_ROLE'", "'CURRENT_ROW'", "'CURRENT_SCHEMA'", "'CURRENT_TIME'",
    "'CURRENT_TIMESTAMP'", "'CURRENT_TRANSFORM_GROUP_FOR_TYPE'", "'CURRENT_USER'",
    "'CURSOR'", "'CYCLE'", "'DATABASES'", "'DATE'", "'DATETIME'", "'DATETIME_DIFF'",
    "'DATETIME_TRUNC'", "'DATE_DIFF'", "'DATE_TRUNC'", "'DAY'", "'DAYOFWEEK'",
    "'DAYOFYEAR'", "'DEALLOCATE'", "'DEC'", "'DECIMAL'", "'DECLARE'",
    "'DEFAULT'", "'DEFINE'", "'DELETE'", "'DENSE_RANK'", "'DEREF'",
    "'DESCRIBE'", "'DETERMINISTIC'", "'DISALLOW'", "'DISCONNECT'", "'DISTINCT'",
    "'DOT'", "'DOUBLE'", "'DROP'", "'DYNAMIC'", "'EACH'", "'ELEMENT'",
    "'ELSE'", "'EMPTY'", "'END'", "'END_FRAME'", "'END_PARTITION'",
    "'ENFORCED'", "'EQUALS'", "'ESCAPE'", "'ESTIMATED_COST'", "'EVERY'",
    "'EXCEPT'", "'EXEC'", "'EXECUTE'", "'EXISTS'", "'EXP'", "'EXPLAIN'",
    "'EXTEND'", "'EXTENDED'", "'EXTERNAL'", "'EXTRACT'", "'FALSE'",
    "'FETCH'", "'FILTER'", "'FIRST_VALUE'", "'FLOAT'", "'FLOOR'", "'FOR'",
    "'FOREIGN'", "'FRAME_ROW'", "'FREE'", "'FRIDAY'", "'FROM'", "'FULL'",
    "'FUNCTION'", "'FUNCTIONS'", "'FUSION'", "'GET'", "'GLOBAL'", "'GRANT'",
    "'GROUP'", "'GROUPING'", "'GROUPS'", "'GROUP_CONCAT'", "'HAVING'",
    "'HOLD'", "'HOUR'", "'IDENTITY'", "'IF'", "'ILIKE'", "'IMPORT'",
    "'IN'", "'INCLUDE'", "'INDICATOR'", "'INITIAL'", "'INNER'", "'INOUT'",
    "'INSENSITIVE'", "'INSERT'", "'INT'", "'INTEGER'", "'INTERSECT'",
    "'INTERSECTION'", "'INTERVAL'", "'INTO'", "'IS'", "'JOIN'", "'JSON_ARRAY'",
    "'JSON_ARRAYAGG'", "'JSON_EXECUTION_PLAN'", "'JSON_EXISTS'", "'JSON_OBJECT'",
    "'JSON_OBJECTAGG'", "'JSON_QUERY'", "'JSON_VALUE'", "'LAG'", "'LANGUAGE'",
    "'LARGE'", "'LAST_VALUE'", "'LATERAL'", "'LEAD'", "'LEADING'", "'LEFT'",
    "'LIKE'", "'LIKE_REGEX'", "'LIMIT'", "'LN'", "'LOCAL'", "'LOCALTIME'",
    "'LOCALTIMESTAMP'", "'LOWER'", "'MATCH'", "'MATCHES'", "'MATCH_NUMBER'",
    "'MATCH_RECOGNIZE'", "'MAX'", "'MEASURES'", "'MEMBER'", "'MERGE'",
    "'METADATA'", "'METHOD'", "'MIN'", "'MINUS'", "'MINUTE'", "'MOD'",
    "'MODIFIES'", "'MODIFY'", "'MODULE'", "'MODULES'", "'MONDAY'", "'MONTH'",
    "'MORE'", "'MULTISET'", "'NATIONAL'", "'NATURAL'", "'NCHAR'", "'NCLOB'",
    "'NEW'", "'NEXT'", "'NO'", "'NONE'", "'NORMALIZE'", "'NOT'", "'NTH_VALUE'",
    "'NTILE'", "'NULL'", "'NULLIF'", "'NUMERIC'", "'OCCURRENCES_REGEX'",
    "'OCTET_LENGTH'", "'OF'", "'OFFSET'", "'OLD'", "'OMIT'", "'ON'",
    "'ONE'", "'ONLY'", "'OPEN'", "'OR'", "'ORDER'", "'ORDINAL'", "'OUT'",
    "'OUTER'", "'OVER'", "'OVERLAPS'", "'OVERLAY'", "'OVERWRITE'", "'OVERWRITING'",
    "'PARAMETER'", "'PARTITION'", "'PARTITIONED'", "'PARTITIONS'", "'PATTERN'",
    "'PER'", "'PERCENT'", "'PERCENTILE_CONT'", "'PERCENTILE_DISC'",
    "'PERCENT_RANK'", "'PERIOD'", "'PERMUTE'", "'PIVOT'", "'PORTION'",
    "'POSITION'", "'POSITION_REGEX'", "'POWER'", "'PRECEDES'", "'PRECISION'",
    "'PREPARE'", "'PREV'", "'PRIMARY'", "'PROCEDURE'", "'QUALIFY'",
    "'QUARTERS'", "'RANGE'", "'RANK'", "'RAW'", "'READS'", "'REAL'",
    "'RECURSIVE'", "'REF'", "'REFERENCES'", "'REFERENCING'", "'REGR_AVGX'",
    "'REGR_AVGY'", "'REGR_COUNT'", "'REGR_INTERCEPT'", "'REGR_R2'",
    "'REGR_SLOPE'", "'REGR_SXX'", "'REGR_SXY'", "'REGR_SYY'", "'RELEASE'",
    "'RENAME'", "'RESET'", "'RESULT'", "'RETURN'", "'RETURNS'", "'REVOKE'",
    "'RIGHT'", "'RLIKE'", "'ROLLBACK'", "'ROLLUP'", "'ROW'", "'ROWS'",
    "'ROW_NUMBER'", "'RUNNING'", "'SAFE_CAST'", "'SAFE_OFFSET'", "'SAFE_ORDINAL'",
    "'SATURDAY'", "'SAVEPOINT'", "'SCALA'", "'SCOPE'", "'SCROLL'", "'SEARCH'",
    "'SECOND'", "'SEEK'", "'SELECT'", "'SENSITIVE'", "'SEPARATOR'",
    "'SESSION_USER'", "'SET'", "'SHOW'", "'SIMILAR'", "'SKIP'", "'SMALLINT'",
    "'SOME'", "'SPECIFIC'", "'SPECIFICTYPE'", "'SQL'", "'SQLEXCEPTION'",
    "'SQLSTATE'", "'SQLWARNING'", "'SQRT'", "'START'", "'STATEMENT'",
    "'STATIC'", "'STATISTICS'", "'STDDEV_POP'", "'STDDEV_SAMP'", "'STREAM'",
    "'STRING'", "'STRING_AGG'", "'SUBMULTISET'", "'SUBSET'", "'SUBSTRING'",
    "'SUBSTRING_REGEX'", "'SUCCEEDS'", "'SUM'", "'SUNDAY'", "'SYMMETRIC'",
    "'SYSTEM'", "'SYSTEM_TIME'", "'SYSTEM_USER'", "'TABLE'", "'TABLES'",
    "'TABLESAMPLE'", "'THEN'", "'THURSDAY'", "'TIME'", "'TIMESTAMP'",
    "'TIMESTAMP_DIFF'", "'TIMESTAMP_LTZ'", "'TIMESTAMP_TRUNC'", "'TIMEZONE_HOUR'",
    "'TIMEZONE_MINUTE'", "'TIME_DIFF'", "'TIME_TRUNC'", "'TINYINT'",
    "'TO'", "'TRAILING'", "'TRANSLATE'", "'TRANSLATE_REGEX'", "'TRANSLATION'",
    "'TREAT'", "'TRIGGER'", "'TRIM'", "'TRIM_ARRAY'", "'TRUE'", "'TRUNCATE'",
    "'TRY_CAST'", "'TUESDAY'", "'UESCAPE'", "'UNION'", "'UNIQUE'", "'UNKNOWN'",
    "'UNNEST'", "'UNPIVOT'", "'UPDATE'", "'UPPER'", "'UPSERT'", "'USE'",
    "'USER'", "'USING'", "'VALUE'", "'VALUES'", "'VALUE_OF'", "'VARBINARY'",
    "'VARCHAR'", "'VARYING'", "'VAR_POP'", "'VAR_SAMP'", "'VERSIONING'",
    "'VIEWS'", "'VIRTUAL'", "'WATERMARK'", "'WATERMARKS'", "'WEDNESDAY'",
    "'WEEKS'", "'WHEN'", "'WHENEVER'", "'WHERE'", "'WIDTH_BUCKET'",
    "'WINDOW'", "'WITH'", "'WITHIN'", "'WITHOUT'", "'YEAR'", "'ADD'",
    "'AFTER'", "'ASC'", "'CASCADE'", "'CATALOG'", "'CENTURY'", "'CONFIG'",
    "'CONSTRAINTS'", "'CUMULATE'", "'DATA'", "'DATABASE'", "'DAYS'",
    "'DECADE'", "'DESC'", "'DESCRIPTOR'", "'DIV'", "'ENGINE'", "'EPOCH'",
    "'EXCLUDING'", "'FILE'", "'FIRST'", "'GENERATED'", "'HOP'", "'HOURS'",
    "'IGNORE'", "'INCLUDING'", "'JAR'", "'JARS'", "'JAVA'", "'KEY'",
    "'LAST'", "'LOAD'", "'MAP'", "'MICROSECOND'", "'MILLENNIUM'", "'MILLISECOND'",
    "'MINUTES'", "'MONTHS'", "'NANOSECOND'", "'NULLS'", "'OPTIONS'",
    "'PAST'", "'PLAN'", "'PRECEDING'", "'PYTHON'", "'PYTHON_ARCHIVES'",
    "'PYTHON_DEPENDENCIES'", "'PYTHON_FILES'", "'PYTHON_JAR'", "'PYTHON_PARAMETER'",
    "'PYTHON_REQUIREMENTS'", "'QUARTER'", "'REMOVE'", "'RESTRICT'",
    "'SECONDS'", "'SESSION'", "'SETS'", "'SIZE'", "'SLIDE'", "'STEP'",
    "'TEMPORARY'", "'TIMECOL'", "'TUMBLE'", "'UNLOAD'", "'VIEW'", "'WEEK'",
    "'YEARS'", "'ZONE'", "'='", "'>'", "'<'", "'!'", "'~'", "'|'", "'&'",
    "'^'", "'.'", "'['", "']'", "'('", "')'", "'{'", "'}'", "','", "';'",
    "'@'", "'''", "'\"'", "'`'", "':'", "'*'", "'_'", "'-'", "'+'",
    "'%'", "'||'", "'--'", "'/'", "'?'", "'=>'"
];
FlinkSqlParser.symbolicNames = [
    null, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ABS", "KW_ALL",
    "KW_ALLOCATE", "KW_ALLOW", "KW_ALTER", "KW_ANALYZE", "KW_AND", "KW_ANY",
    "KW_ARE", "KW_ARRAY", "KW_ARRAY_AGG", "KW_ARRAY_CONCAT_AGG", "KW_ARRAY_MAX_CARDINALITY",
    "KW_AS", "KW_ASENSITIVE", "KW_ASYMMETRIC", "KW_AT", "KW_ATOMIC",
    "KW_AUTHORIZATION", "KW_AVG", "KW_BEGIN", "KW_BEGIN_FRAME", "KW_BEGIN_PARTITION",
    "KW_BETWEEN", "KW_BIGINT", "KW_BINARY", "KW_BIT", "KW_BLOB", "KW_BOOLEAN",
    "KW_BOTH", "KW_BY", "KW_BYTES", "KW_CALL", "KW_CALLED", "KW_CARDINALITY",
    "KW_CASCADED", "KW_CASE", "KW_CAST", "KW_CATALOGS", "KW_CEIL", "KW_CEILING",
    "KW_CHANGELOG_MODE", "KW_CHAR", "KW_CHARACTER", "KW_CHARACTER_LENGTH",
    "KW_CHAR_LENGTH", "KW_CHECK", "KW_CLASSIFIER", "KW_CLOB", "KW_CLOSE",
    "KW_COALESCE", "KW_COLLATE", "KW_COLLECT", "KW_COLUMN", "KW_COLUMNS",
    "KW_COMMENT", "KW_COMMIT", "KW_COMPUTE", "KW_CONDITION", "KW_CONNECT",
    "KW_CONSTRAINT", "KW_CONTAINS", "KW_CONVERT", "KW_CORR", "KW_CORRESPONDING",
    "KW_COUNT", "KW_COVAR_POP", "KW_COVAR_SAMP", "KW_CREATE", "KW_CROSS",
    "KW_CUBE", "KW_CUME_DIST", "KW_CURRENT", "KW_CURRENT_CATALOG", "KW_CURRENT_DATE",
    "KW_CURRENT_DEFAULT_TRANSFORM_GROUP", "KW_CURRENT_PATH", "KW_CURRENT_ROLE",
    "KW_CURRENT_ROW", "KW_CURRENT_SCHEMA", "KW_CURRENT_TIME", "KW_CURRENT_TIMESTAMP",
    "KW_CURRENT_TRANSFORM_GROUP_FOR_TYPE", "KW_CURRENT_USER", "KW_CURSOR",
    "KW_CYCLE", "KW_DATABASES", "KW_DATE", "KW_DATETIME", "KW_DATETIME_DIFF",
    "KW_DATETIME_TRUNC", "KW_DATE_DIFF", "KW_DATE_TRUNC", "KW_DAY",
    "KW_DAYOFWEEK", "KW_DAYOFYEAR", "KW_DEALLOCATE", "KW_DEC", "KW_DECIMAL",
    "KW_DECLARE", "KW_DEFAULT", "KW_DEFINE", "KW_DELETE", "KW_DENSE_RANK",
    "KW_DEREF", "KW_DESCRIBE", "KW_DETERMINISTIC", "KW_DISALLOW", "KW_DISCONNECT",
    "KW_DISTINCT", "KW_DOT", "KW_DOUBLE", "KW_DROP", "KW_DYNAMIC", "KW_EACH",
    "KW_ELEMENT", "KW_ELSE", "KW_EMPTY", "KW_END", "KW_END_FRAME", "KW_END_PARTITION",
    "KW_ENFORCED", "KW_EQUALS", "KW_ESCAPE", "KW_ESTIMATED_COST", "KW_EVERY",
    "KW_EXCEPT", "KW_EXEC", "KW_EXECUTE", "KW_EXISTS", "KW_EXP", "KW_EXPLAIN",
    "KW_EXTEND", "KW_EXTENDED", "KW_EXTERNAL", "KW_EXTRACT", "KW_FALSE",
    "KW_FETCH", "KW_FILTER", "KW_FIRST_VALUE", "KW_FLOAT", "KW_FLOOR",
    "KW_FOR", "KW_FOREIGN", "KW_FRAME_ROW", "KW_FREE", "KW_FRIDAY",
    "KW_FROM", "KW_FULL", "KW_FUNCTION", "KW_FUNCTIONS", "KW_FUSION",
    "KW_GET", "KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", "KW_GROUPS",
    "KW_GROUP_CONCAT", "KW_HAVING", "KW_HOLD", "KW_HOUR", "KW_IDENTITY",
    "KW_IF", "KW_ILIKE", "KW_IMPORT", "KW_IN", "KW_INCLUDE", "KW_INDICATOR",
    "KW_INITIAL", "KW_INNER", "KW_INOUT", "KW_INSENSITIVE", "KW_INSERT",
    "KW_INT", "KW_INTEGER", "KW_INTERSECT", "KW_INTERSECTION", "KW_INTERVAL",
    "KW_INTO", "KW_IS", "KW_JOIN", "KW_JSON_ARRAY", "KW_JSON_ARRAYAGG",
    "KW_JSON_EXECUTION_PLAN", "KW_JSON_EXISTS", "KW_JSON_OBJECT", "KW_JSON_OBJECTAGG",
    "KW_JSON_QUERY", "KW_JSON_VALUE", "KW_LAG", "KW_LANGUAGE", "KW_LARGE",
    "KW_LAST_VALUE", "KW_LATERAL", "KW_LEAD", "KW_LEADING", "KW_LEFT",
    "KW_LIKE", "KW_LIKE_REGEX", "KW_LIMIT", "KW_LN", "KW_LOCAL", "KW_LOCALTIME",
    "KW_LOCALTIMESTAMP", "KW_LOWER", "KW_MATCH", "KW_MATCHES", "KW_MATCH_NUMBER",
    "KW_MATCH_RECOGNIZE", "KW_MAX", "KW_MEASURES", "KW_MEMBER", "KW_MERGE",
    "KW_METADATA", "KW_METHOD", "KW_MIN", "KW_MINUS", "KW_MINUTE", "KW_MOD",
    "KW_MODIFIES", "KW_MODIFY", "KW_MODULE", "KW_MODULES", "KW_MONDAY",
    "KW_MONTH", "KW_MORE", "KW_MULTISET", "KW_NATIONAL", "KW_NATURAL",
    "KW_NCHAR", "KW_NCLOB", "KW_NEW", "KW_NEXT", "KW_NO", "KW_NONE",
    "KW_NORMALIZE", "KW_NOT", "KW_NTH_VALUE", "KW_NTILE", "KW_NULL",
    "KW_NULLIF", "KW_NUMERIC", "KW_OCCURRENCES_REGEX", "KW_OCTET_LENGTH",
    "KW_OF", "KW_OFFSET", "KW_OLD", "KW_OMIT", "KW_ON", "KW_ONE", "KW_ONLY",
    "KW_OPEN", "KW_OR", "KW_ORDER", "KW_ORDINAL", "KW_OUT", "KW_OUTER",
    "KW_OVER", "KW_OVERLAPS", "KW_OVERLAY", "KW_OVERWRITE", "KW_OVERWRITING",
    "KW_PARAMETER", "KW_PARTITION", "KW_PARTITIONED", "KW_PARTITIONS",
    "KW_PATTERN", "KW_PER", "KW_PERCENT", "KW_PERCENTILE_CONT", "KW_PERCENTILE_DISC",
    "KW_PERCENT_RANK", "KW_PERIOD", "KW_PERMUTE", "KW_PIVOT", "KW_PORTION",
    "KW_POSITION", "KW_POSITION_REGEX", "KW_POWER", "KW_PRECEDES", "KW_PRECISION",
    "KW_PREPARE", "KW_PREV", "KW_PRIMARY", "KW_PROCEDURE", "KW_QUALIFY",
    "KW_QUARTERS", "KW_RANGE", "KW_RANK", "KW_RAW", "KW_READS", "KW_REAL",
    "KW_RECURSIVE", "KW_REF", "KW_REFERENCES", "KW_REFERENCING", "KW_REGR_AVGX",
    "KW_REGR_AVGY", "KW_REGR_COUNT", "KW_REGR_INTERCEPT", "KW_REGR_R2",
    "KW_REGR_SLOPE", "KW_REGR_SXX", "KW_REGR_SXY", "KW_REGR_SYY", "KW_RELEASE",
    "KW_RENAME", "KW_RESET", "KW_RESULT", "KW_RETURN", "KW_RETURNS",
    "KW_REVOKE", "KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", "KW_ROLLUP",
    "KW_ROW", "KW_ROWS", "KW_ROW_NUMBER", "KW_RUNNING", "KW_SAFE_CAST",
    "KW_SAFE_OFFSET", "KW_SAFE_ORDINAL", "KW_SATURDAY", "KW_SAVEPOINT",
    "KW_SCALA", "KW_SCOPE", "KW_SCROLL", "KW_SEARCH", "KW_SECOND", "KW_SEEK",
    "KW_SELECT", "KW_SENSITIVE", "KW_SEPARATOR", "KW_SESSION_USER",
    "KW_SET", "KW_SHOW", "KW_SIMILAR", "KW_SKIP", "KW_SMALLINT", "KW_SOME",
    "KW_SPECIFIC", "KW_SPECIFICTYPE", "KW_SQL", "KW_SQLEXCEPTION", "KW_SQLSTATE",
    "KW_SQLWARNING", "KW_SQRT", "KW_START", "KW_STATEMENT", "KW_STATIC",
    "KW_STATISTICS", "KW_STDDEV_POP", "KW_STDDEV_SAMP", "KW_STREAM",
    "KW_STRING", "KW_STRING_AGG", "KW_SUBMULTISET", "KW_SUBSET", "KW_SUBSTRING",
    "KW_SUBSTRING_REGEX", "KW_SUCCEEDS", "KW_SUM", "KW_SUNDAY", "KW_SYMMETRIC",
    "KW_SYSTEM", "KW_SYSTEM_TIME", "KW_SYSTEM_USER", "KW_TABLE", "KW_TABLES",
    "KW_TABLESAMPLE", "KW_THEN", "KW_THURSDAY", "KW_TIME", "KW_TIMESTAMP",
    "KW_TIMESTAMP_DIFF", "KW_TIMESTAMP_LTZ", "KW_TIMESTAMP_TRUNC", "KW_TIMEZONE_HOUR",
    "KW_TIMEZONE_MINUTE", "KW_TIME_DIFF", "KW_TIME_TRUNC", "KW_TINYINT",
    "KW_TO", "KW_TRAILING", "KW_TRANSLATE", "KW_TRANSLATE_REGEX", "KW_TRANSLATION",
    "KW_TREAT", "KW_TRIGGER", "KW_TRIM", "KW_TRIM_ARRAY", "KW_TRUE",
    "KW_TRUNCATE", "KW_TRY_CAST", "KW_TUESDAY", "KW_UESCAPE", "KW_UNION",
    "KW_UNIQUE", "KW_UNKNOWN", "KW_UNNEST", "KW_UNPIVOT", "KW_UPDATE",
    "KW_UPPER", "KW_UPSERT", "KW_USE", "KW_USER", "KW_USING", "KW_VALUE",
    "KW_VALUES", "KW_VALUE_OF", "KW_VARBINARY", "KW_VARCHAR", "KW_VARYING",
    "KW_VAR_POP", "KW_VAR_SAMP", "KW_VERSIONING", "KW_VIEWS", "KW_VIRTUAL",
    "KW_WATERMARK", "KW_WATERMARKS", "KW_WEDNESDAY", "KW_WEEKS", "KW_WHEN",
    "KW_WHENEVER", "KW_WHERE", "KW_WIDTH_BUCKET", "KW_WINDOW", "KW_WITH",
    "KW_WITHIN", "KW_WITHOUT", "KW_YEAR", "KW_ADD", "KW_AFTER", "KW_ASC",
    "KW_CASCADE", "KW_CATALOG", "KW_CENTURY", "KW_CONFIG", "KW_CONSTRAINTS",
    "KW_CUMULATE", "KW_DATA", "KW_DATABASE", "KW_DAYS", "KW_DECADE",
    "KW_DESC", "KW_DESCRIPTOR", "KW_DIV", "KW_ENGINE", "KW_EPOCH", "KW_EXCLUDING",
    "KW_FILE", "KW_FIRST", "KW_GENERATED", "KW_HOP", "KW_HOURS", "KW_IGNORE",
    "KW_INCLUDING", "KW_JAR", "KW_JARS", "KW_JAVA", "KW_KEY", "KW_LAST",
    "KW_LOAD", "KW_MAP", "KW_MICROSECOND", "KW_MILLENNIUM", "KW_MILLISECOND",
    "KW_MINUTES", "KW_MONTHS", "KW_NANOSECOND", "KW_NULLS", "KW_OPTIONS",
    "KW_PAST", "KW_PLAN", "KW_PRECEDING", "KW_PYTHON", "KW_PYTHON_ARCHIVES",
    "KW_PYTHON_DEPENDENCIES", "KW_PYTHON_FILES", "KW_PYTHON_JAR", "KW_PYTHON_PARAMETER",
    "KW_PYTHON_REQUIREMENTS", "KW_QUARTER", "KW_REMOVE", "KW_RESTRICT",
    "KW_SECONDS", "KW_SESSION", "KW_SETS", "KW_SIZE", "KW_SLIDE", "KW_STEP",
    "KW_TEMPORARY", "KW_TIMECOL", "KW_TUMBLE", "KW_UNLOAD", "KW_VIEW",
    "KW_WEEK", "KW_YEARS", "KW_ZONE", "EQUAL_SYMBOL", "GREATER_SYMBOL",
    "LESS_SYMBOL", "EXCLAMATION_SYMBOL", "BIT_NOT_OP", "BIT_OR_OP",
    "BIT_AND_OP", "BIT_XOR_OP", "DOT", "LS_BRACKET", "RS_BRACKET", "LR_BRACKET",
    "RR_BRACKET", "LB_BRACKET", "RB_BRACKET", "COMMA", "SEMICOLON",
    "AT_SIGN", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", "REVERSE_QUOTE_SYMB",
    "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", "HYPNEN_SIGN",
    "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", "DOUBLE_HYPNEN_SIGN",
    "SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", "STRING_LITERAL",
    "DIG_LITERAL", "REAL_LITERAL", "BIT_STRING", "ID_LITERAL"
];
FlinkSqlParser.ruleNames = [
    "program", "singleStatement", "sqlStatement", "emptyStatement",
    "ddlStatement", "dmlStatement", "describeStatement", "explainStatement",
    "explainDetails", "explainDetail", "useStatement", "useModuleStatement",
    "showStatememt", "loadStatement", "unloadStatememt", "setStatememt",
    "resetStatememt", "jarStatememt", "dtAddStatement", "dtFilePath",
    "createTable", "simpleCreateTable", "createTableAsSelect", "columnOptionDefinition",
    "physicalColumnDefinition", "columnNameCreate", "columnName", "columnNameList",
    "columnType", "lengthOneDimension", "lengthTwoOptionalDimension",
    "lengthTwoStringDimension", "lengthOneTypeDimension", "mapTypeDimension",
    "rowTypeDimension", "columnConstraint", "commentSpec", "metadataColumnDefinition",
    "metadataKey", "computedColumnDefinition", "computedColumnExpression",
    "watermarkDefinition", "tableConstraint", "constraintName", "selfDefinitionClause",
    "partitionDefinition", "transformList", "transform", "transformArgument",
    "likeDefinition", "likeOption", "createCatalog", "createDatabase",
    "createView", "createFunction", "usingClause", "jarFileName", "alterTable",
    "renameDefinition", "setKeyValueDefinition", "addConstraint", "dropConstraint",
    "addUnique", "notForced", "alertView", "alterDatabase", "alterFunction",
    "dropCatalog", "dropTable", "dropDatabase", "dropView", "dropFunction",
    "insertStatement", "insertSimpleStatement", "insertPartitionDefinition",
    "valuesDefinition", "valuesRowDefinition", "insertMulStatementCompatibility",
    "insertMulStatement", "queryStatement", "valuesCaluse", "withClause",
    "withItem", "withItemName", "selectStatement", "selectClause", "projectItemDefinition",
    "overWindowItem", "fromClause", "tableExpression", "tableReference",
    "tablePrimary", "systemTimePeriod", "dateTimeExpression", "inlineDataValueClause",
    "windoTVFClause", "windowTVFExression", "windoTVFName", "windowTVFParam",
    "timeIntervalParamName", "columnDescriptor", "joinCondition", "whereClause",
    "groupByClause", "groupItemDefinition", "groupingSets", "groupingSetsNotaionName",
    "groupWindowFunction", "groupWindowFunctionName", "timeAttrColumn",
    "havingClause", "windowClause", "namedWindow", "windowSpec", "matchRecognizeClause",
    "orderByCaluse", "orderItemDefition", "limitClause", "partitionByClause",
    "quantifiers", "measuresClause", "patternDefination", "patternVariable",
    "outputMode", "afterMatchStrategy", "patternVariablesDefination",
    "windowFrame", "frameBound", "withinClause", "expression", "booleanExpression",
    "predicate", "likePredicate", "valueExpression", "primaryExpression",
    "functionNameCreate", "functionName", "functionParam", "dereferenceDefinition",
    "correlationName", "qualifiedName", "timeIntervalExpression", "errorCapturingMultiUnitsInterval",
    "multiUnitsInterval", "errorCapturingUnitToUnitInterval", "unitToUnitInterval",
    "intervalValue", "tableAlias", "errorCapturingIdentifier", "errorCapturingIdentifierExtra",
    "identifierList", "identifierSeq", "identifier", "unquotedIdentifier",
    "quotedIdentifier", "whenClause", "catalogPath", "catalogPathCreate",
    "databasePath", "databasePathCreate", "tablePathCreate", "tablePath",
    "viewPath", "viewPathCreate", "uid", "withOption", "ifNotExists",
    "ifExists", "tablePropertyList", "tableProperty", "tablePropertyKey",
    "tablePropertyValue", "logicalOperator", "comparisonOperator", "bitOperator",
    "mathOperator", "unaryOperator", "constant", "timePointLiteral",
    "stringLiteral", "decimalLiteral", "booleanLiteral", "setQuantifier",
    "timePointUnit", "timeIntervalUnit", "reservedKeywordsUsedAsFuncParam",
    "reservedKeywordsUsedAsFuncName", "nonReservedKeywords",
];
FlinkSqlParser._serializedATN = [
    4, 1, 541, 2272, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6,
    7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7,
    13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2,
    20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7,
    26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2,
    33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7,
    39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2,
    46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7,
    52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2,
    59, 7, 59, 2, 60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7,
    65, 2, 66, 7, 66, 2, 67, 7, 67, 2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 2,
    72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2, 75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7,
    78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82, 7, 82, 2, 83, 7, 83, 2, 84, 7, 84, 2,
    85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2, 88, 7, 88, 2, 89, 7, 89, 2, 90, 7, 90, 2, 91, 7,
    91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96, 2, 97, 7, 97, 2,
    98, 7, 98, 2, 99, 7, 99, 2, 100, 7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 2, 103, 7, 103,
    2, 104, 7, 104, 2, 105, 7, 105, 2, 106, 7, 106, 2, 107, 7, 107, 2, 108, 7, 108, 2, 109,
    7, 109, 2, 110, 7, 110, 2, 111, 7, 111, 2, 112, 7, 112, 2, 113, 7, 113, 2, 114, 7, 114,
    2, 115, 7, 115, 2, 116, 7, 116, 2, 117, 7, 117, 2, 118, 7, 118, 2, 119, 7, 119, 2, 120,
    7, 120, 2, 121, 7, 121, 2, 122, 7, 122, 2, 123, 7, 123, 2, 124, 7, 124, 2, 125, 7, 125,
    2, 126, 7, 126, 2, 127, 7, 127, 2, 128, 7, 128, 2, 129, 7, 129, 2, 130, 7, 130, 2, 131,
    7, 131, 2, 132, 7, 132, 2, 133, 7, 133, 2, 134, 7, 134, 2, 135, 7, 135, 2, 136, 7, 136,
    2, 137, 7, 137, 2, 138, 7, 138, 2, 139, 7, 139, 2, 140, 7, 140, 2, 141, 7, 141, 2, 142,
    7, 142, 2, 143, 7, 143, 2, 144, 7, 144, 2, 145, 7, 145, 2, 146, 7, 146, 2, 147, 7, 147,
    2, 148, 7, 148, 2, 149, 7, 149, 2, 150, 7, 150, 2, 151, 7, 151, 2, 152, 7, 152, 2, 153,
    7, 153, 2, 154, 7, 154, 2, 155, 7, 155, 2, 156, 7, 156, 2, 157, 7, 157, 2, 158, 7, 158,
    2, 159, 7, 159, 2, 160, 7, 160, 2, 161, 7, 161, 2, 162, 7, 162, 2, 163, 7, 163, 2, 164,
    7, 164, 2, 165, 7, 165, 2, 166, 7, 166, 2, 167, 7, 167, 2, 168, 7, 168, 2, 169, 7, 169,
    2, 170, 7, 170, 2, 171, 7, 171, 2, 172, 7, 172, 2, 173, 7, 173, 2, 174, 7, 174, 2, 175,
    7, 175, 2, 176, 7, 176, 2, 177, 7, 177, 2, 178, 7, 178, 2, 179, 7, 179, 2, 180, 7, 180,
    2, 181, 7, 181, 2, 182, 7, 182, 2, 183, 7, 183, 2, 184, 7, 184, 2, 185, 7, 185, 2, 186,
    7, 186, 2, 187, 7, 187, 1, 0, 5, 0, 378, 8, 0, 10, 0, 12, 0, 381, 9, 0, 1, 0, 1, 0, 1, 1,
    1, 1, 3, 1, 387, 8, 1, 1, 1, 3, 1, 390, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2,
    1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 404, 8, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4,
    1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 422, 8, 4, 1, 5, 1, 5, 3, 5, 426, 8, 5, 1, 6,
    1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 435, 8, 7, 1, 7, 1, 7, 1, 7, 3, 7, 440, 8, 7, 1, 8,
    1, 8, 1, 8, 5, 8, 445, 8, 8, 10, 8, 12, 8, 448, 9, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10,
    1, 10, 1, 10, 3, 10, 458, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 5, 11, 465, 8, 11, 10,
    11, 12, 11, 468, 9, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3,
    12, 479, 8, 12, 1, 12, 3, 12, 482, 8, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 489,
    8, 12, 1, 12, 3, 12, 492, 8, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 500, 8,
    12, 1, 12, 1, 12, 3, 12, 504, 8, 12, 1, 12, 1, 12, 1, 12, 3, 12, 509, 8, 12, 1, 12, 3, 12,
    512, 8, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 519, 8, 13, 1, 14, 1, 14, 1, 14, 1,
    14, 1, 15, 1, 15, 3, 15, 527, 8, 15, 1, 16, 1, 16, 3, 16, 531, 8, 16, 1, 17, 1, 17, 1, 17,
    1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 3, 18, 543, 8, 18, 1, 18, 1, 18, 1, 18,
    1, 18, 1, 18, 1, 18, 3, 18, 551, 8, 18, 1, 18, 1, 18, 3, 18, 555, 8, 18, 1, 18, 1, 18, 1,
    18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1,
    18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1,
    18, 1, 18, 3, 18, 587, 8, 18, 1, 19, 3, 19, 590, 8, 19, 1, 19, 4, 19, 593, 8, 19, 11, 19,
    12, 19, 594, 1, 20, 1, 20, 3, 20, 599, 8, 20, 1, 21, 1, 21, 3, 21, 603, 8, 21, 1, 21, 1,
    21, 3, 21, 607, 8, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 5, 21, 614, 8, 21, 10, 21, 12,
    21, 617, 9, 21, 1, 21, 1, 21, 3, 21, 621, 8, 21, 1, 21, 1, 21, 3, 21, 625, 8, 21, 1, 21,
    1, 21, 3, 21, 629, 8, 21, 1, 21, 1, 21, 3, 21, 633, 8, 21, 1, 21, 3, 21, 636, 8, 21, 1,
    21, 1, 21, 3, 21, 640, 8, 21, 1, 22, 1, 22, 1, 22, 3, 22, 645, 8, 22, 1, 22, 1, 22, 1, 22,
    1, 22, 3, 22, 651, 8, 22, 1, 23, 1, 23, 1, 23, 3, 23, 656, 8, 23, 1, 24, 1, 24, 1, 24, 3,
    24, 661, 8, 24, 1, 24, 3, 24, 664, 8, 24, 1, 25, 1, 25, 3, 25, 668, 8, 25, 1, 26, 1, 26,
    3, 26, 672, 8, 26, 1, 27, 1, 27, 1, 27, 1, 27, 5, 27, 678, 8, 27, 10, 27, 12, 27, 681,
    9, 27, 1, 27, 1, 27, 1, 28, 1, 28, 1, 28, 3, 28, 688, 8, 28, 1, 28, 1, 28, 3, 28, 692, 8,
    28, 1, 28, 1, 28, 3, 28, 696, 8, 28, 1, 28, 1, 28, 3, 28, 700, 8, 28, 1, 28, 1, 28, 3, 28,
    704, 8, 28, 1, 28, 1, 28, 3, 28, 708, 8, 28, 1, 28, 1, 28, 3, 28, 712, 8, 28, 1, 28, 1,
    28, 3, 28, 716, 8, 28, 1, 28, 1, 28, 3, 28, 720, 8, 28, 3, 28, 722, 8, 28, 1, 29, 1, 29,
    1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 1, 30, 3, 30, 732, 8, 30, 1, 30, 1, 30, 1, 31, 1, 31,
    1, 31, 1, 31, 3, 31, 740, 8, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32, 1, 32, 1, 33, 1, 33,
    1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 5, 34,
    762, 8, 34, 10, 34, 12, 34, 765, 9, 34, 1, 34, 1, 34, 1, 35, 1, 35, 3, 35, 771, 8, 35,
    1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 777, 8, 35, 1, 35, 3, 35, 780, 8, 35, 1, 35, 3, 35, 783,
    8, 35, 1, 36, 1, 36, 1, 36, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 3, 37, 793, 8, 37, 1, 37,
    3, 37, 796, 8, 37, 1, 38, 1, 38, 1, 39, 1, 39, 1, 39, 1, 39, 3, 39, 804, 8, 39, 1, 40, 1,
    40, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 41, 1, 42, 1, 42, 3, 42, 816, 8, 42, 1, 42, 1,
    42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 43, 1, 43, 1, 44, 1, 44, 1, 44, 1, 44, 1, 45, 1, 45, 1,
    45, 1, 45, 1, 46, 1, 46, 1, 46, 1, 46, 5, 46, 838, 8, 46, 10, 46, 12, 46, 841, 9, 46, 1,
    46, 1, 46, 1, 47, 1, 47, 1, 47, 1, 47, 1, 47, 5, 47, 850, 8, 47, 10, 47, 12, 47, 853, 9,
    47, 1, 47, 1, 47, 3, 47, 857, 8, 47, 1, 48, 1, 48, 3, 48, 861, 8, 48, 1, 49, 1, 49, 1, 49,
    1, 49, 5, 49, 867, 8, 49, 10, 49, 12, 49, 870, 9, 49, 1, 49, 3, 49, 873, 8, 49, 1, 50,
    1, 50, 1, 50, 1, 50, 3, 50, 879, 8, 50, 1, 51, 1, 51, 1, 51, 1, 51, 1, 51, 1, 52, 1, 52,
    1, 52, 3, 52, 889, 8, 52, 1, 52, 1, 52, 3, 52, 893, 8, 52, 1, 52, 1, 52, 1, 53, 1, 53, 3,
    53, 899, 8, 53, 1, 53, 1, 53, 3, 53, 903, 8, 53, 1, 53, 1, 53, 3, 53, 907, 8, 53, 1, 53,
    3, 53, 910, 8, 53, 1, 53, 1, 53, 1, 53, 1, 54, 1, 54, 1, 54, 1, 54, 3, 54, 919, 8, 54, 1,
    54, 1, 54, 3, 54, 923, 8, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 3, 54, 930, 8, 54, 1, 54,
    3, 54, 933, 8, 54, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55, 5, 55, 941, 8, 55, 10, 55,
    12, 55, 944, 9, 55, 1, 56, 1, 56, 1, 57, 1, 57, 1, 57, 3, 57, 951, 8, 57, 1, 57, 1, 57,
    1, 57, 1, 57, 1, 57, 1, 57, 3, 57, 959, 8, 57, 1, 58, 1, 58, 3, 58, 963, 8, 58, 1, 58, 1,
    58, 1, 58, 1, 59, 1, 59, 1, 59, 1, 60, 1, 60, 1, 60, 1, 60, 1, 60, 1, 60, 1, 60, 3, 60, 978,
    8, 60, 1, 61, 1, 61, 1, 61, 1, 61, 1, 62, 1, 62, 1, 62, 1, 62, 1, 63, 1, 63, 1, 63, 1, 64,
    1, 64, 1, 64, 1, 64, 1, 64, 1, 64, 3, 64, 997, 8, 64, 1, 65, 1, 65, 1, 65, 1, 65, 1, 65,
    1, 66, 1, 66, 1, 66, 1, 66, 3, 66, 1008, 8, 66, 1, 66, 1, 66, 3, 66, 1012, 8, 66, 1, 66,
    1, 66, 1, 66, 1, 66, 1, 66, 3, 66, 1019, 8, 66, 1, 67, 1, 67, 1, 67, 3, 67, 1024, 8, 67,
    1, 67, 1, 67, 1, 68, 1, 68, 3, 68, 1030, 8, 68, 1, 68, 1, 68, 3, 68, 1034, 8, 68, 1, 68,
    1, 68, 1, 69, 1, 69, 1, 69, 3, 69, 1041, 8, 69, 1, 69, 1, 69, 3, 69, 1045, 8, 69, 1, 70,
    1, 70, 3, 70, 1049, 8, 70, 1, 70, 1, 70, 3, 70, 1053, 8, 70, 1, 70, 1, 70, 1, 71, 1, 71,
    1, 71, 1, 71, 3, 71, 1061, 8, 71, 1, 71, 1, 71, 3, 71, 1065, 8, 71, 1, 71, 1, 71, 1, 72,
    3, 72, 1070, 8, 72, 1, 72, 1, 72, 1, 72, 1, 72, 3, 72, 1076, 8, 72, 1, 73, 1, 73, 1, 73,
    1, 73, 3, 73, 1082, 8, 73, 1, 73, 3, 73, 1085, 8, 73, 1, 73, 1, 73, 3, 73, 1089, 8, 73,
    1, 74, 1, 74, 1, 74, 1, 75, 1, 75, 1, 75, 1, 75, 5, 75, 1098, 8, 75, 10, 75, 12, 75, 1101,
    9, 75, 1, 76, 1, 76, 1, 76, 1, 76, 5, 76, 1107, 8, 76, 10, 76, 12, 76, 1110, 9, 76, 1,
    76, 1, 76, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 4, 77, 1121, 8, 77, 11, 77,
    12, 77, 1122, 1, 77, 1, 77, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 4, 78, 1133, 8, 78,
    11, 78, 12, 78, 1134, 1, 78, 1, 78, 1, 79, 1, 79, 1, 79, 1, 79, 1, 79, 1, 79, 1, 79, 1,
    79, 1, 79, 1, 79, 1, 79, 3, 79, 1150, 8, 79, 1, 79, 3, 79, 1153, 8, 79, 1, 79, 1, 79, 3,
    79, 1157, 8, 79, 1, 79, 3, 79, 1160, 8, 79, 3, 79, 1162, 8, 79, 1, 79, 1, 79, 1, 79, 3,
    79, 1167, 8, 79, 1, 79, 1, 79, 3, 79, 1171, 8, 79, 1, 79, 3, 79, 1174, 8, 79, 5, 79, 1176,
    8, 79, 10, 79, 12, 79, 1179, 9, 79, 1, 80, 1, 80, 1, 80, 1, 80, 5, 80, 1185, 8, 80, 10,
    80, 12, 80, 1188, 9, 80, 1, 81, 1, 81, 1, 81, 1, 81, 5, 81, 1194, 8, 81, 10, 81, 12, 81,
    1197, 9, 81, 1, 82, 1, 82, 1, 82, 1, 82, 1, 82, 5, 82, 1204, 8, 82, 10, 82, 12, 82, 1207,
    9, 82, 1, 82, 1, 82, 3, 82, 1211, 8, 82, 1, 82, 1, 82, 1, 82, 1, 82, 1, 82, 1, 83, 1, 83,
    1, 84, 1, 84, 3, 84, 1222, 8, 84, 1, 84, 3, 84, 1225, 8, 84, 1, 84, 3, 84, 1228, 8, 84,
    1, 84, 3, 84, 1231, 8, 84, 1, 84, 3, 84, 1234, 8, 84, 1, 84, 1, 84, 1, 84, 1, 84, 3, 84,
    1240, 8, 84, 1, 85, 1, 85, 3, 85, 1244, 8, 85, 1, 85, 1, 85, 1, 85, 1, 85, 5, 85, 1250,
    8, 85, 10, 85, 12, 85, 1253, 9, 85, 3, 85, 1255, 8, 85, 1, 86, 1, 86, 1, 86, 3, 86, 1260,
    8, 86, 1, 86, 3, 86, 1263, 8, 86, 1, 86, 1, 86, 3, 86, 1267, 8, 86, 1, 86, 3, 86, 1270,
    8, 86, 3, 86, 1272, 8, 86, 1, 87, 1, 87, 1, 87, 1, 87, 1, 87, 1, 87, 1, 87, 1, 87, 1, 87,
    1, 87, 1, 87, 1, 87, 3, 87, 1286, 8, 87, 1, 88, 1, 88, 1, 88, 1, 89, 1, 89, 1, 89, 1, 89,
    5, 89, 1295, 8, 89, 10, 89, 12, 89, 1298, 9, 89, 1, 89, 1, 89, 3, 89, 1302, 8, 89, 1,
    89, 1, 89, 1, 89, 1, 89, 1, 89, 1, 89, 3, 89, 1310, 8, 89, 1, 89, 3, 89, 1313, 8, 89, 1,
    89, 3, 89, 1316, 8, 89, 1, 89, 1, 89, 1, 89, 3, 89, 1321, 8, 89, 5, 89, 1323, 8, 89, 10,
    89, 12, 89, 1326, 9, 89, 1, 90, 1, 90, 3, 90, 1330, 8, 90, 1, 91, 3, 91, 1333, 8, 91,
    1, 91, 1, 91, 3, 91, 1337, 8, 91, 1, 91, 3, 91, 1340, 8, 91, 1, 91, 3, 91, 1343, 8, 91,
    1, 91, 1, 91, 3, 91, 1347, 8, 91, 1, 91, 3, 91, 1350, 8, 91, 1, 91, 3, 91, 1353, 8, 91,
    1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 5, 91, 1363, 8, 91, 10, 91, 12,
    91, 1366, 9, 91, 1, 91, 1, 91, 1, 91, 1, 91, 3, 91, 1372, 8, 91, 1, 91, 1, 91, 1, 91, 1,
    91, 1, 91, 1, 91, 1, 91, 1, 91, 1, 91, 3, 91, 1383, 8, 91, 1, 92, 1, 92, 1, 92, 1, 92, 1,
    92, 1, 92, 1, 93, 1, 93, 1, 94, 1, 94, 1, 94, 1, 94, 1, 94, 1, 95, 1, 95, 1, 95, 1, 95, 1,
    95, 1, 96, 1, 96, 1, 96, 1, 96, 1, 96, 5, 96, 1408, 8, 96, 10, 96, 12, 96, 1411, 9, 96,
    1, 96, 1, 96, 1, 97, 1, 97, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98,
    1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 1, 98, 3, 98, 1432, 8, 98, 1, 99, 1, 99, 1, 100, 1, 100,
    1, 100, 1, 100, 1, 100, 1, 101, 1, 101, 1, 101, 1, 101, 3, 101, 1445, 8, 101, 1, 102,
    1, 102, 1, 102, 1, 103, 1, 103, 1, 103, 1, 103, 1, 103, 5, 103, 1455, 8, 103, 10, 103,
    12, 103, 1458, 9, 103, 1, 104, 1, 104, 1, 104, 1, 104, 1, 104, 1, 104, 1, 104, 1, 104,
    5, 104, 1468, 8, 104, 10, 104, 12, 104, 1471, 9, 104, 1, 104, 1, 104, 1, 104, 1, 104,
    1, 104, 1, 104, 1, 104, 5, 104, 1480, 8, 104, 10, 104, 12, 104, 1483, 9, 104, 1, 104,
    1, 104, 1, 104, 1, 104, 1, 104, 1, 104, 1, 104, 5, 104, 1492, 8, 104, 10, 104, 12, 104,
    1495, 9, 104, 1, 104, 1, 104, 1, 104, 3, 104, 1500, 8, 104, 1, 105, 1, 105, 1, 105,
    1, 106, 1, 106, 1, 107, 1, 107, 1, 107, 1, 107, 1, 107, 1, 107, 1, 107, 1, 108, 1, 108,
    1, 109, 1, 109, 1, 110, 1, 110, 1, 110, 1, 111, 1, 111, 1, 111, 1, 111, 5, 111, 1525,
    8, 111, 10, 111, 12, 111, 1528, 9, 111, 1, 112, 1, 112, 1, 112, 1, 112, 1, 113, 3, 113,
    1535, 8, 113, 1, 113, 1, 113, 3, 113, 1539, 8, 113, 1, 113, 3, 113, 1542, 8, 113, 1,
    113, 3, 113, 1545, 8, 113, 1, 113, 1, 113, 1, 114, 1, 114, 1, 114, 3, 114, 1552, 8,
    114, 1, 114, 3, 114, 1555, 8, 114, 1, 114, 3, 114, 1558, 8, 114, 1, 114, 3, 114, 1561,
    8, 114, 1, 114, 3, 114, 1564, 8, 114, 1, 114, 3, 114, 1567, 8, 114, 1, 114, 1, 114,
    1, 114, 3, 114, 1572, 8, 114, 1, 114, 3, 114, 1575, 8, 114, 1, 115, 1, 115, 1, 115,
    1, 115, 1, 115, 5, 115, 1582, 8, 115, 10, 115, 12, 115, 1585, 9, 115, 1, 116, 1, 116,
    3, 116, 1589, 8, 116, 1, 116, 1, 116, 3, 116, 1593, 8, 116, 1, 117, 1, 117, 1, 117,
    3, 117, 1598, 8, 117, 1, 118, 1, 118, 1, 118, 1, 118, 1, 118, 5, 118, 1605, 8, 118,
    10, 118, 12, 118, 1608, 9, 118, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119,
    1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 1, 119, 3, 119, 1626,
    8, 119, 1, 120, 1, 120, 1, 120, 1, 120, 5, 120, 1632, 8, 120, 10, 120, 12, 120, 1635,
    9, 120, 1, 121, 1, 121, 1, 121, 4, 121, 1640, 8, 121, 11, 121, 12, 121, 1641, 1, 121,
    1, 121, 3, 121, 1646, 8, 121, 1, 122, 1, 122, 3, 122, 1650, 8, 122, 1, 123, 1, 123,
    1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 3, 123, 1660, 8, 123, 1, 124, 1, 124,
    1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124,
    1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124, 1, 124,
    3, 124, 1686, 8, 124, 1, 125, 1, 125, 1, 125, 1, 125, 5, 125, 1692, 8, 125, 10, 125,
    12, 125, 1695, 9, 125, 1, 126, 1, 126, 1, 126, 1, 126, 1, 126, 1, 126, 1, 126, 1, 126,
    1, 126, 3, 126, 1706, 8, 126, 1, 127, 1, 127, 1, 127, 1, 127, 1, 127, 1, 128, 1, 128,
    1, 128, 1, 129, 1, 129, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130,
    1, 130, 1, 130, 3, 130, 1728, 8, 130, 3, 130, 1730, 8, 130, 1, 130, 1, 130, 1, 130,
    1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 3, 130, 1741, 8, 130, 1, 130, 5, 130,
    1744, 8, 130, 10, 130, 12, 130, 1747, 9, 130, 1, 131, 3, 131, 1750, 8, 131, 1, 131,
    1, 131, 3, 131, 1754, 8, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 3, 131, 1761,
    8, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 5, 131, 1768, 8, 131, 10, 131, 12, 131,
    1771, 9, 131, 1, 131, 1, 131, 1, 131, 3, 131, 1776, 8, 131, 1, 131, 1, 131, 1, 131,
    1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 3, 131, 1789, 8, 131,
    1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 3, 131, 1796, 8, 131, 1, 131, 1, 131, 1, 131,
    3, 131, 1801, 8, 131, 1, 131, 1, 131, 1, 131, 1, 131, 3, 131, 1807, 8, 131, 1, 131,
    1, 131, 1, 131, 1, 131, 1, 131, 3, 131, 1814, 8, 131, 3, 131, 1816, 8, 131, 1, 132,
    3, 132, 1819, 8, 132, 1, 132, 1, 132, 1, 132, 1, 132, 1, 132, 1, 132, 1, 132, 1, 132,
    5, 132, 1829, 8, 132, 10, 132, 12, 132, 1832, 9, 132, 1, 132, 1, 132, 3, 132, 1836,
    8, 132, 1, 132, 3, 132, 1839, 8, 132, 1, 132, 1, 132, 1, 132, 1, 132, 3, 132, 1845,
    8, 132, 3, 132, 1847, 8, 132, 1, 133, 1, 133, 1, 133, 1, 133, 3, 133, 1853, 8, 133,
    1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133,
    1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 5, 133, 1874, 8, 133,
    10, 133, 12, 133, 1877, 9, 133, 1, 134, 1, 134, 1, 134, 4, 134, 1882, 8, 134, 11, 134,
    12, 134, 1883, 1, 134, 1, 134, 3, 134, 1888, 8, 134, 1, 134, 1, 134, 1, 134, 1, 134,
    1, 134, 4, 134, 1895, 8, 134, 11, 134, 12, 134, 1896, 1, 134, 1, 134, 3, 134, 1901,
    8, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134,
    1, 134, 1, 134, 1, 134, 1, 134, 3, 134, 1917, 8, 134, 1, 134, 1, 134, 1, 134, 1, 134,
    1, 134, 1, 134, 1, 134, 3, 134, 1926, 8, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134,
    1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134,
    1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 3, 134, 1950, 8, 134, 1, 134, 1, 134,
    1, 134, 5, 134, 1955, 8, 134, 10, 134, 12, 134, 1958, 9, 134, 3, 134, 1960, 8, 134,
    1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 3, 134, 1971,
    8, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134, 5, 134, 1978, 8, 134, 10, 134, 12, 134,
    1981, 9, 134, 1, 135, 1, 135, 1, 136, 1, 136, 3, 136, 1987, 8, 136, 1, 137, 1, 137,
    1, 137, 1, 137, 3, 137, 1993, 8, 137, 1, 138, 1, 138, 1, 139, 1, 139, 1, 140, 1, 140,
    3, 140, 2001, 8, 140, 1, 141, 1, 141, 1, 141, 3, 141, 2006, 8, 141, 1, 142, 1, 142,
    3, 142, 2010, 8, 142, 1, 143, 1, 143, 1, 143, 4, 143, 2015, 8, 143, 11, 143, 12, 143,
    2016, 1, 144, 1, 144, 1, 144, 3, 144, 2022, 8, 144, 1, 145, 1, 145, 1, 145, 1, 145,
    1, 145, 1, 146, 3, 146, 2030, 8, 146, 1, 146, 1, 146, 3, 146, 2034, 8, 146, 1, 147,
    3, 147, 2037, 8, 147, 1, 147, 1, 147, 3, 147, 2041, 8, 147, 1, 148, 1, 148, 1, 148,
    1, 149, 1, 149, 4, 149, 2048, 8, 149, 11, 149, 12, 149, 2049, 1, 149, 3, 149, 2053,
    8, 149, 1, 150, 1, 150, 1, 150, 1, 150, 1, 151, 1, 151, 1, 151, 5, 151, 2062, 8, 151,
    10, 151, 12, 151, 2065, 9, 151, 1, 152, 1, 152, 1, 152, 3, 152, 2070, 8, 152, 1, 153,
    1, 153, 1, 154, 1, 154, 1, 155, 1, 155, 1, 155, 1, 155, 1, 155, 1, 156, 1, 156, 1, 157,
    1, 157, 1, 158, 1, 158, 1, 158, 3, 158, 2088, 8, 158, 1, 159, 1, 159, 1, 159, 3, 159,
    2093, 8, 159, 1, 160, 1, 160, 1, 160, 3, 160, 2098, 8, 160, 1, 160, 1, 160, 1, 160,
    1, 160, 1, 160, 3, 160, 2105, 8, 160, 3, 160, 2107, 8, 160, 1, 161, 1, 161, 1, 161,
    3, 161, 2112, 8, 161, 1, 161, 1, 161, 1, 161, 1, 161, 1, 161, 3, 161, 2119, 8, 161,
    3, 161, 2121, 8, 161, 1, 162, 1, 162, 1, 162, 3, 162, 2126, 8, 162, 1, 162, 1, 162,
    1, 162, 1, 162, 1, 162, 3, 162, 2133, 8, 162, 3, 162, 2135, 8, 162, 1, 163, 1, 163,
    1, 163, 3, 163, 2140, 8, 163, 1, 163, 1, 163, 1, 163, 1, 163, 1, 163, 3, 163, 2147,
    8, 163, 3, 163, 2149, 8, 163, 1, 164, 1, 164, 1, 164, 5, 164, 2154, 8, 164, 10, 164,
    12, 164, 2157, 9, 164, 1, 165, 1, 165, 1, 165, 1, 166, 1, 166, 1, 166, 1, 166, 1, 167,
    1, 167, 1, 167, 1, 168, 1, 168, 1, 168, 1, 168, 5, 168, 2173, 8, 168, 10, 168, 12, 168,
    2176, 9, 168, 1, 168, 1, 168, 1, 169, 1, 169, 3, 169, 2182, 8, 169, 1, 169, 3, 169,
    2185, 8, 169, 1, 170, 1, 170, 1, 170, 3, 170, 2190, 8, 170, 1, 171, 1, 171, 1, 171,
    1, 171, 3, 171, 2196, 8, 171, 1, 172, 1, 172, 1, 172, 1, 172, 1, 172, 1, 172, 3, 172,
    2204, 8, 172, 1, 173, 1, 173, 1, 173, 1, 173, 1, 173, 1, 173, 1, 173, 1, 173, 1, 173,
    1, 173, 1, 173, 1, 173, 1, 173, 1, 173, 3, 173, 2220, 8, 173, 1, 174, 1, 174, 1, 174,
    1, 174, 1, 174, 1, 174, 1, 174, 3, 174, 2229, 8, 174, 1, 175, 1, 175, 1, 176, 1, 176,
    1, 177, 1, 177, 1, 177, 1, 177, 3, 177, 2239, 8, 177, 1, 177, 1, 177, 1, 177, 1, 177,
    1, 177, 3, 177, 2246, 8, 177, 1, 177, 3, 177, 2249, 8, 177, 1, 178, 1, 178, 1, 178,
    1, 179, 1, 179, 1, 180, 1, 180, 1, 181, 1, 181, 1, 182, 1, 182, 1, 183, 1, 183, 1, 184,
    1, 184, 1, 185, 1, 185, 1, 186, 1, 186, 1, 187, 1, 187, 1, 187, 1, 2155, 5, 158, 178,
    260, 266, 268, 188, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
    36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78,
    80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116,
    118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148,
    150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180,
    182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212,
    214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244,
    246, 248, 250, 252, 254, 256, 258, 260, 262, 264, 266, 268, 270, 272, 274, 276,
    278, 280, 282, 284, 286, 288, 290, 292, 294, 296, 298, 300, 302, 304, 306, 308,
    310, 312, 314, 316, 318, 320, 322, 324, 326, 328, 330, 332, 334, 336, 338, 340,
    342, 344, 346, 348, 350, 352, 354, 356, 358, 360, 362, 364, 366, 368, 370, 372,
    374, 0, 45, 2, 0, 109, 109, 450, 450, 3, 0, 45, 45, 128, 128, 188, 188, 4, 0, 42, 42,
    90, 90, 422, 422, 464, 464, 2, 0, 441, 441, 447, 447, 2, 0, 151, 151, 170, 170, 2,
    0, 437, 437, 489, 489, 2, 0, 482, 485, 487, 487, 3, 0, 32, 32, 91, 91, 244, 244, 11,
    0, 28, 29, 35, 35, 46, 46, 92, 92, 178, 179, 344, 344, 360, 360, 378, 378, 381, 381,
    387, 387, 416, 417, 2, 0, 433, 433, 435, 435, 4, 0, 101, 102, 115, 115, 144, 144,
    246, 246, 2, 0, 13, 13, 231, 231, 2, 0, 455, 455, 462, 462, 3, 0, 5, 5, 270, 270, 444,
    444, 3, 0, 266, 266, 455, 455, 462, 462, 3, 0, 425, 425, 458, 458, 477, 477, 3, 0,
    330, 330, 465, 465, 481, 481, 2, 0, 440, 440, 490, 490, 2, 0, 183, 183, 265, 265,
    3, 0, 130, 130, 180, 180, 402, 402, 4, 0, 152, 152, 174, 174, 201, 201, 317, 317,
    3, 0, 445, 445, 459, 459, 499, 499, 4, 0, 250, 250, 446, 446, 494, 496, 498, 498,
    2, 0, 74, 74, 320, 320, 3, 0, 459, 459, 492, 492, 499, 499, 2, 0, 439, 439, 450, 450,
    2, 0, 457, 457, 467, 467, 4, 0, 140, 140, 244, 244, 397, 397, 404, 404, 2, 0, 19, 19,
    369, 369, 2, 0, 5, 5, 11, 11, 2, 0, 509, 509, 529, 530, 4, 0, 452, 452, 527, 527, 531,
    531, 534, 534, 2, 0, 529, 530, 532, 532, 1, 0, 529, 530, 1, 0, 538, 539, 2, 0, 538,
    538, 541, 541, 4, 0, 452, 452, 527, 527, 529, 531, 533, 534, 3, 0, 241, 241, 508,
    509, 529, 530, 2, 0, 140, 140, 397, 397, 2, 0, 5, 5, 113, 113, 10, 0, 97, 97, 165, 165,
    222, 222, 229, 229, 334, 334, 436, 436, 470, 470, 472, 472, 488, 488, 502, 502,
    15, 0, 97, 97, 165, 165, 222, 222, 229, 229, 334, 334, 427, 427, 436, 436, 442, 442,
    448, 449, 454, 454, 460, 460, 470, 475, 488, 488, 491, 491, 502, 503, 9, 0, 5, 5,
    13, 13, 33, 33, 85, 85, 113, 113, 200, 200, 389, 389, 413, 413, 527, 527, 55, 0, 4,
    4, 13, 13, 23, 23, 38, 38, 41, 41, 43, 44, 54, 54, 56, 56, 69, 69, 75, 75, 78, 78, 84,
    85, 91, 91, 98, 99, 107, 107, 119, 119, 134, 134, 139, 139, 143, 143, 145, 145, 160,
    160, 165, 165, 167, 167, 194, 194, 197, 197, 199, 199, 201, 201, 205, 205, 207,
    209, 214, 214, 220, 220, 222, 223, 229, 229, 243, 243, 245, 245, 264, 264, 276,
    276, 281, 281, 283, 283, 293, 293, 317, 317, 321, 323, 334, 334, 357, 358, 364,
    364, 367, 367, 378, 380, 395, 395, 398, 399, 408, 408, 419, 420, 436, 436, 469,
    469, 488, 488, 502, 502, 1, 0, 437, 504, 2475, 0, 379, 1, 0, 0, 0, 2, 389, 1, 0, 0, 0,
    4, 403, 1, 0, 0, 0, 6, 405, 1, 0, 0, 0, 8, 421, 1, 0, 0, 0, 10, 425, 1, 0, 0, 0, 12, 427,
    1, 0, 0, 0, 14, 430, 1, 0, 0, 0, 16, 441, 1, 0, 0, 0, 18, 449, 1, 0, 0, 0, 20, 457, 1, 0,
    0, 0, 22, 459, 1, 0, 0, 0, 24, 511, 1, 0, 0, 0, 26, 513, 1, 0, 0, 0, 28, 520, 1, 0, 0, 0,
    30, 524, 1, 0, 0, 0, 32, 528, 1, 0, 0, 0, 34, 532, 1, 0, 0, 0, 36, 586, 1, 0, 0, 0, 38, 592,
    1, 0, 0, 0, 40, 598, 1, 0, 0, 0, 42, 600, 1, 0, 0, 0, 44, 641, 1, 0, 0, 0, 46, 655, 1, 0,
    0, 0, 48, 657, 1, 0, 0, 0, 50, 667, 1, 0, 0, 0, 52, 671, 1, 0, 0, 0, 54, 673, 1, 0, 0, 0,
    56, 721, 1, 0, 0, 0, 58, 723, 1, 0, 0, 0, 60, 727, 1, 0, 0, 0, 62, 735, 1, 0, 0, 0, 64, 743,
    1, 0, 0, 0, 66, 747, 1, 0, 0, 0, 68, 754, 1, 0, 0, 0, 70, 782, 1, 0, 0, 0, 72, 784, 1, 0,
    0, 0, 74, 787, 1, 0, 0, 0, 76, 797, 1, 0, 0, 0, 78, 799, 1, 0, 0, 0, 80, 805, 1, 0, 0, 0,
    82, 807, 1, 0, 0, 0, 84, 815, 1, 0, 0, 0, 86, 823, 1, 0, 0, 0, 88, 825, 1, 0, 0, 0, 90, 829,
    1, 0, 0, 0, 92, 833, 1, 0, 0, 0, 94, 856, 1, 0, 0, 0, 96, 860, 1, 0, 0, 0, 98, 862, 1, 0,
    0, 0, 100, 878, 1, 0, 0, 0, 102, 880, 1, 0, 0, 0, 104, 885, 1, 0, 0, 0, 106, 896, 1, 0,
    0, 0, 108, 914, 1, 0, 0, 0, 110, 934, 1, 0, 0, 0, 112, 945, 1, 0, 0, 0, 114, 947, 1, 0,
    0, 0, 116, 960, 1, 0, 0, 0, 118, 967, 1, 0, 0, 0, 120, 970, 1, 0, 0, 0, 122, 979, 1, 0,
    0, 0, 124, 983, 1, 0, 0, 0, 126, 987, 1, 0, 0, 0, 128, 990, 1, 0, 0, 0, 130, 998, 1, 0,
    0, 0, 132, 1003, 1, 0, 0, 0, 134, 1020, 1, 0, 0, 0, 136, 1027, 1, 0, 0, 0, 138, 1037,
    1, 0, 0, 0, 140, 1046, 1, 0, 0, 0, 142, 1056, 1, 0, 0, 0, 144, 1075, 1, 0, 0, 0, 146, 1077,
    1, 0, 0, 0, 148, 1090, 1, 0, 0, 0, 150, 1093, 1, 0, 0, 0, 152, 1102, 1, 0, 0, 0, 154, 1113,
    1, 0, 0, 0, 156, 1126, 1, 0, 0, 0, 158, 1161, 1, 0, 0, 0, 160, 1180, 1, 0, 0, 0, 162, 1189,
    1, 0, 0, 0, 164, 1198, 1, 0, 0, 0, 166, 1217, 1, 0, 0, 0, 168, 1239, 1, 0, 0, 0, 170, 1241,
    1, 0, 0, 0, 172, 1271, 1, 0, 0, 0, 174, 1285, 1, 0, 0, 0, 176, 1287, 1, 0, 0, 0, 178, 1301,
    1, 0, 0, 0, 180, 1327, 1, 0, 0, 0, 182, 1382, 1, 0, 0, 0, 184, 1384, 1, 0, 0, 0, 186, 1390,
    1, 0, 0, 0, 188, 1392, 1, 0, 0, 0, 190, 1397, 1, 0, 0, 0, 192, 1402, 1, 0, 0, 0, 194, 1414,
    1, 0, 0, 0, 196, 1431, 1, 0, 0, 0, 198, 1433, 1, 0, 0, 0, 200, 1435, 1, 0, 0, 0, 202, 1444,
    1, 0, 0, 0, 204, 1446, 1, 0, 0, 0, 206, 1449, 1, 0, 0, 0, 208, 1499, 1, 0, 0, 0, 210, 1501,
    1, 0, 0, 0, 212, 1504, 1, 0, 0, 0, 214, 1506, 1, 0, 0, 0, 216, 1513, 1, 0, 0, 0, 218, 1515,
    1, 0, 0, 0, 220, 1517, 1, 0, 0, 0, 222, 1520, 1, 0, 0, 0, 224, 1529, 1, 0, 0, 0, 226, 1534,
    1, 0, 0, 0, 228, 1548, 1, 0, 0, 0, 230, 1576, 1, 0, 0, 0, 232, 1586, 1, 0, 0, 0, 234, 1594,
    1, 0, 0, 0, 236, 1599, 1, 0, 0, 0, 238, 1625, 1, 0, 0, 0, 240, 1627, 1, 0, 0, 0, 242, 1636,
    1, 0, 0, 0, 244, 1647, 1, 0, 0, 0, 246, 1659, 1, 0, 0, 0, 248, 1685, 1, 0, 0, 0, 250, 1687,
    1, 0, 0, 0, 252, 1705, 1, 0, 0, 0, 254, 1707, 1, 0, 0, 0, 256, 1712, 1, 0, 0, 0, 258, 1715,
    1, 0, 0, 0, 260, 1729, 1, 0, 0, 0, 262, 1815, 1, 0, 0, 0, 264, 1846, 1, 0, 0, 0, 266, 1852,
    1, 0, 0, 0, 268, 1970, 1, 0, 0, 0, 270, 1982, 1, 0, 0, 0, 272, 1986, 1, 0, 0, 0, 274, 1992,
    1, 0, 0, 0, 276, 1994, 1, 0, 0, 0, 278, 1996, 1, 0, 0, 0, 280, 2000, 1, 0, 0, 0, 282, 2002,
    1, 0, 0, 0, 284, 2007, 1, 0, 0, 0, 286, 2014, 1, 0, 0, 0, 288, 2018, 1, 0, 0, 0, 290, 2023,
    1, 0, 0, 0, 292, 2033, 1, 0, 0, 0, 294, 2036, 1, 0, 0, 0, 296, 2042, 1, 0, 0, 0, 298, 2052,
    1, 0, 0, 0, 300, 2054, 1, 0, 0, 0, 302, 2058, 1, 0, 0, 0, 304, 2069, 1, 0, 0, 0, 306, 2071,
    1, 0, 0, 0, 308, 2073, 1, 0, 0, 0, 310, 2075, 1, 0, 0, 0, 312, 2080, 1, 0, 0, 0, 314, 2082,
    1, 0, 0, 0, 316, 2084, 1, 0, 0, 0, 318, 2089, 1, 0, 0, 0, 320, 2106, 1, 0, 0, 0, 322, 2120,
    1, 0, 0, 0, 324, 2134, 1, 0, 0, 0, 326, 2148, 1, 0, 0, 0, 328, 2150, 1, 0, 0, 0, 330, 2158,
    1, 0, 0, 0, 332, 2161, 1, 0, 0, 0, 334, 2165, 1, 0, 0, 0, 336, 2168, 1, 0, 0, 0, 338, 2179,
    1, 0, 0, 0, 340, 2189, 1, 0, 0, 0, 342, 2195, 1, 0, 0, 0, 344, 2203, 1, 0, 0, 0, 346, 2219,
    1, 0, 0, 0, 348, 2228, 1, 0, 0, 0, 350, 2230, 1, 0, 0, 0, 352, 2232, 1, 0, 0, 0, 354, 2248,
    1, 0, 0, 0, 356, 2250, 1, 0, 0, 0, 358, 2253, 1, 0, 0, 0, 360, 2255, 1, 0, 0, 0, 362, 2257,
    1, 0, 0, 0, 364, 2259, 1, 0, 0, 0, 366, 2261, 1, 0, 0, 0, 368, 2263, 1, 0, 0, 0, 370, 2265,
    1, 0, 0, 0, 372, 2267, 1, 0, 0, 0, 374, 2269, 1, 0, 0, 0, 376, 378, 3, 2, 1, 0, 377, 376,
    1, 0, 0, 0, 378, 381, 1, 0, 0, 0, 379, 377, 1, 0, 0, 0, 379, 380, 1, 0, 0, 0, 380, 382,
    1, 0, 0, 0, 381, 379, 1, 0, 0, 0, 382, 383, 5, 0, 0, 1, 383, 1, 1, 0, 0, 0, 384, 386, 3,
    4, 2, 0, 385, 387, 5, 521, 0, 0, 386, 385, 1, 0, 0, 0, 386, 387, 1, 0, 0, 0, 387, 390,
    1, 0, 0, 0, 388, 390, 3, 6, 3, 0, 389, 384, 1, 0, 0, 0, 389, 388, 1, 0, 0, 0, 390, 3, 1,
    0, 0, 0, 391, 404, 3, 8, 4, 0, 392, 404, 3, 10, 5, 0, 393, 404, 3, 12, 6, 0, 394, 404,
    3, 14, 7, 0, 395, 404, 3, 20, 10, 0, 396, 404, 3, 24, 12, 0, 397, 404, 3, 26, 13, 0, 398,
    404, 3, 28, 14, 0, 399, 404, 3, 30, 15, 0, 400, 404, 3, 32, 16, 0, 401, 404, 3, 34, 17,
    0, 402, 404, 3, 36, 18, 0, 403, 391, 1, 0, 0, 0, 403, 392, 1, 0, 0, 0, 403, 393, 1, 0,
    0, 0, 403, 394, 1, 0, 0, 0, 403, 395, 1, 0, 0, 0, 403, 396, 1, 0, 0, 0, 403, 397, 1, 0,
    0, 0, 403, 398, 1, 0, 0, 0, 403, 399, 1, 0, 0, 0, 403, 400, 1, 0, 0, 0, 403, 401, 1, 0,
    0, 0, 403, 402, 1, 0, 0, 0, 404, 5, 1, 0, 0, 0, 405, 406, 5, 521, 0, 0, 406, 7, 1, 0, 0,
    0, 407, 422, 3, 40, 20, 0, 408, 422, 3, 104, 52, 0, 409, 422, 3, 106, 53, 0, 410, 422,
    3, 108, 54, 0, 411, 422, 3, 102, 51, 0, 412, 422, 3, 114, 57, 0, 413, 422, 3, 128, 64,
    0, 414, 422, 3, 130, 65, 0, 415, 422, 3, 132, 66, 0, 416, 422, 3, 134, 67, 0, 417, 422,
    3, 136, 68, 0, 418, 422, 3, 138, 69, 0, 419, 422, 3, 140, 70, 0, 420, 422, 3, 142, 71,
    0, 421, 407, 1, 0, 0, 0, 421, 408, 1, 0, 0, 0, 421, 409, 1, 0, 0, 0, 421, 410, 1, 0, 0,
    0, 421, 411, 1, 0, 0, 0, 421, 412, 1, 0, 0, 0, 421, 413, 1, 0, 0, 0, 421, 414, 1, 0, 0,
    0, 421, 415, 1, 0, 0, 0, 421, 416, 1, 0, 0, 0, 421, 417, 1, 0, 0, 0, 421, 418, 1, 0, 0,
    0, 421, 419, 1, 0, 0, 0, 421, 420, 1, 0, 0, 0, 422, 9, 1, 0, 0, 0, 423, 426, 3, 158, 79,
    0, 424, 426, 3, 144, 72, 0, 425, 423, 1, 0, 0, 0, 425, 424, 1, 0, 0, 0, 426, 11, 1, 0,
    0, 0, 427, 428, 7, 0, 0, 0, 428, 429, 3, 322, 161, 0, 429, 13, 1, 0, 0, 0, 430, 434, 5,
    135, 0, 0, 431, 435, 3, 16, 8, 0, 432, 433, 5, 479, 0, 0, 433, 435, 5, 146, 0, 0, 434,
    431, 1, 0, 0, 0, 434, 432, 1, 0, 0, 0, 434, 435, 1, 0, 0, 0, 435, 439, 1, 0, 0, 0, 436,
    440, 3, 10, 5, 0, 437, 440, 3, 146, 73, 0, 438, 440, 3, 156, 78, 0, 439, 436, 1, 0, 0,
    0, 439, 437, 1, 0, 0, 0, 439, 438, 1, 0, 0, 0, 440, 15, 1, 0, 0, 0, 441, 446, 3, 18, 9,
    0, 442, 443, 5, 520, 0, 0, 443, 445, 3, 18, 9, 0, 444, 442, 1, 0, 0, 0, 445, 448, 1, 0,
    0, 0, 446, 444, 1, 0, 0, 0, 446, 447, 1, 0, 0, 0, 447, 17, 1, 0, 0, 0, 448, 446, 1, 0, 0,
    0, 449, 450, 7, 1, 0, 0, 450, 19, 1, 0, 0, 0, 451, 452, 5, 410, 0, 0, 452, 453, 5, 441,
    0, 0, 453, 458, 3, 312, 156, 0, 454, 455, 5, 410, 0, 0, 455, 458, 3, 316, 158, 0, 456,
    458, 3, 22, 11, 0, 457, 451, 1, 0, 0, 0, 457, 454, 1, 0, 0, 0, 457, 456, 1, 0, 0, 0, 458,
    21, 1, 0, 0, 0, 459, 460, 5, 410, 0, 0, 460, 461, 5, 227, 0, 0, 461, 466, 3, 328, 164,
    0, 462, 463, 5, 520, 0, 0, 463, 465, 3, 328, 164, 0, 464, 462, 1, 0, 0, 0, 465, 468,
    1, 0, 0, 0, 466, 464, 1, 0, 0, 0, 466, 467, 1, 0, 0, 0, 467, 23, 1, 0, 0, 0, 468, 466, 1,
    0, 0, 0, 469, 470, 5, 341, 0, 0, 470, 512, 7, 2, 0, 0, 471, 472, 5, 341, 0, 0, 472, 473,
    5, 76, 0, 0, 473, 512, 7, 3, 0, 0, 474, 475, 5, 341, 0, 0, 475, 478, 5, 374, 0, 0, 476,
    477, 7, 4, 0, 0, 477, 479, 3, 316, 158, 0, 478, 476, 1, 0, 0, 0, 478, 479, 1, 0, 0, 0,
    479, 481, 1, 0, 0, 0, 480, 482, 3, 264, 132, 0, 481, 480, 1, 0, 0, 0, 481, 482, 1, 0,
    0, 0, 482, 512, 1, 0, 0, 0, 483, 484, 5, 341, 0, 0, 484, 485, 5, 58, 0, 0, 485, 488, 7,
    4, 0, 0, 486, 489, 3, 324, 162, 0, 487, 489, 3, 322, 161, 0, 488, 486, 1, 0, 0, 0, 488,
    487, 1, 0, 0, 0, 489, 491, 1, 0, 0, 0, 490, 492, 3, 264, 132, 0, 491, 490, 1, 0, 0, 0,
    491, 492, 1, 0, 0, 0, 492, 512, 1, 0, 0, 0, 493, 494, 5, 341, 0, 0, 494, 499, 5, 72, 0,
    0, 495, 496, 5, 373, 0, 0, 496, 500, 3, 322, 161, 0, 497, 498, 5, 501, 0, 0, 498, 500,
    3, 324, 162, 0, 499, 495, 1, 0, 0, 0, 499, 497, 1, 0, 0, 0, 500, 512, 1, 0, 0, 0, 501,
    503, 5, 341, 0, 0, 502, 504, 5, 411, 0, 0, 503, 502, 1, 0, 0, 0, 503, 504, 1, 0, 0, 0,
    504, 505, 1, 0, 0, 0, 505, 512, 5, 154, 0, 0, 506, 508, 5, 341, 0, 0, 507, 509, 5, 152,
    0, 0, 508, 507, 1, 0, 0, 0, 508, 509, 1, 0, 0, 0, 509, 510, 1, 0, 0, 0, 510, 512, 5, 227,
    0, 0, 511, 469, 1, 0, 0, 0, 511, 471, 1, 0, 0, 0, 511, 474, 1, 0, 0, 0, 511, 483, 1, 0,
    0, 0, 511, 493, 1, 0, 0, 0, 511, 501, 1, 0, 0, 0, 511, 506, 1, 0, 0, 0, 512, 25, 1, 0, 0,
    0, 513, 514, 5, 468, 0, 0, 514, 515, 5, 226, 0, 0, 515, 518, 3, 328, 164, 0, 516, 517,
    5, 433, 0, 0, 517, 519, 3, 336, 168, 0, 518, 516, 1, 0, 0, 0, 518, 519, 1, 0, 0, 0, 519,
    27, 1, 0, 0, 0, 520, 521, 5, 500, 0, 0, 521, 522, 5, 226, 0, 0, 522, 523, 3, 328, 164,
    0, 523, 29, 1, 0, 0, 0, 524, 526, 5, 340, 0, 0, 525, 527, 3, 338, 169, 0, 526, 525, 1,
    0, 0, 0, 526, 527, 1, 0, 0, 0, 527, 31, 1, 0, 0, 0, 528, 530, 5, 312, 0, 0, 529, 531, 3,
    340, 170, 0, 530, 529, 1, 0, 0, 0, 530, 531, 1, 0, 0, 0, 531, 33, 1, 0, 0, 0, 532, 533,
    7, 5, 0, 0, 533, 534, 5, 463, 0, 0, 534, 535, 3, 112, 56, 0, 535, 35, 1, 0, 0, 0, 536,
    537, 5, 437, 0, 0, 537, 538, 5, 463, 0, 0, 538, 539, 5, 433, 0, 0, 539, 542, 3, 38, 19,
    0, 540, 541, 5, 17, 0, 0, 541, 543, 3, 328, 164, 0, 542, 540, 1, 0, 0, 0, 542, 543, 1,
    0, 0, 0, 543, 587, 1, 0, 0, 0, 544, 545, 5, 437, 0, 0, 545, 546, 5, 456, 0, 0, 546, 547,
    5, 433, 0, 0, 547, 550, 3, 38, 19, 0, 548, 549, 5, 17, 0, 0, 549, 551, 3, 328, 164, 0,
    550, 548, 1, 0, 0, 0, 550, 551, 1, 0, 0, 0, 551, 554, 1, 0, 0, 0, 552, 553, 5, 311, 0,
    0, 553, 555, 3, 328, 164, 0, 554, 552, 1, 0, 0, 0, 554, 555, 1, 0, 0, 0, 555, 587, 1,
    0, 0, 0, 556, 557, 5, 437, 0, 0, 557, 558, 7, 6, 0, 0, 558, 559, 5, 433, 0, 0, 559, 560,
    3, 38, 19, 0, 560, 561, 5, 311, 0, 0, 561, 562, 3, 328, 164, 0, 562, 587, 1, 0, 0, 0,
    563, 564, 5, 437, 0, 0, 564, 565, 5, 486, 0, 0, 565, 587, 3, 38, 19, 0, 566, 567, 5,
    437, 0, 0, 567, 568, 5, 453, 0, 0, 568, 569, 5, 456, 0, 0, 569, 570, 5, 433, 0, 0, 570,
    571, 3, 38, 19, 0, 571, 572, 5, 311, 0, 0, 572, 573, 3, 328, 164, 0, 573, 574, 5, 466,
    0, 0, 574, 575, 3, 328, 164, 0, 575, 587, 1, 0, 0, 0, 576, 577, 5, 437, 0, 0, 577, 578,
    5, 443, 0, 0, 578, 579, 5, 456, 0, 0, 579, 580, 5, 433, 0, 0, 580, 581, 3, 38, 19, 0,
    581, 582, 5, 146, 0, 0, 582, 583, 3, 328, 164, 0, 583, 584, 5, 17, 0, 0, 584, 585, 3,
    328, 164, 0, 585, 587, 1, 0, 0, 0, 586, 536, 1, 0, 0, 0, 586, 544, 1, 0, 0, 0, 586, 556,
    1, 0, 0, 0, 586, 563, 1, 0, 0, 0, 586, 566, 1, 0, 0, 0, 586, 576, 1, 0, 0, 0, 587, 37, 1,
    0, 0, 0, 588, 590, 5, 534, 0, 0, 589, 588, 1, 0, 0, 0, 589, 590, 1, 0, 0, 0, 590, 591,
    1, 0, 0, 0, 591, 593, 3, 328, 164, 0, 592, 589, 1, 0, 0, 0, 593, 594, 1, 0, 0, 0, 594,
    592, 1, 0, 0, 0, 594, 595, 1, 0, 0, 0, 595, 39, 1, 0, 0, 0, 596, 599, 3, 42, 21, 0, 597,
    599, 3, 44, 22, 0, 598, 596, 1, 0, 0, 0, 598, 597, 1, 0, 0, 0, 599, 41, 1, 0, 0, 0, 600,
    602, 5, 72, 0, 0, 601, 603, 5, 497, 0, 0, 602, 601, 1, 0, 0, 0, 602, 603, 1, 0, 0, 0, 603,
    604, 1, 0, 0, 0, 604, 606, 5, 373, 0, 0, 605, 607, 3, 332, 166, 0, 606, 605, 1, 0, 0,
    0, 606, 607, 1, 0, 0, 0, 607, 608, 1, 0, 0, 0, 608, 609, 3, 320, 160, 0, 609, 610, 5,
    516, 0, 0, 610, 615, 3, 46, 23, 0, 611, 612, 5, 520, 0, 0, 612, 614, 3, 46, 23, 0, 613,
    611, 1, 0, 0, 0, 614, 617, 1, 0, 0, 0, 615, 613, 1, 0, 0, 0, 615, 616, 1, 0, 0, 0, 616,
    620, 1, 0, 0, 0, 617, 615, 1, 0, 0, 0, 618, 619, 5, 520, 0, 0, 619, 621, 3, 82, 41, 0,
    620, 618, 1, 0, 0, 0, 620, 621, 1, 0, 0, 0, 621, 624, 1, 0, 0, 0, 622, 623, 5, 520, 0,
    0, 623, 625, 3, 84, 42, 0, 624, 622, 1, 0, 0, 0, 624, 625, 1, 0, 0, 0, 625, 628, 1, 0,
    0, 0, 626, 627, 5, 520, 0, 0, 627, 629, 3, 88, 44, 0, 628, 626, 1, 0, 0, 0, 628, 629,
    1, 0, 0, 0, 629, 630, 1, 0, 0, 0, 630, 632, 5, 517, 0, 0, 631, 633, 3, 72, 36, 0, 632,
    631, 1, 0, 0, 0, 632, 633, 1, 0, 0, 0, 633, 635, 1, 0, 0, 0, 634, 636, 3, 90, 45, 0, 635,
    634, 1, 0, 0, 0, 635, 636, 1, 0, 0, 0, 636, 637, 1, 0, 0, 0, 637, 639, 3, 330, 165, 0,
    638, 640, 3, 98, 49, 0, 639, 638, 1, 0, 0, 0, 639, 640, 1, 0, 0, 0, 640, 43, 1, 0, 0, 0,
    641, 642, 5, 72, 0, 0, 642, 644, 5, 373, 0, 0, 643, 645, 3, 332, 166, 0, 644, 643, 1,
    0, 0, 0, 644, 645, 1, 0, 0, 0, 645, 646, 1, 0, 0, 0, 646, 647, 3, 320, 160, 0, 647, 650,
    3, 330, 165, 0, 648, 649, 5, 17, 0, 0, 649, 651, 3, 158, 79, 0, 650, 648, 1, 0, 0, 0,
    650, 651, 1, 0, 0, 0, 651, 45, 1, 0, 0, 0, 652, 656, 3, 48, 24, 0, 653, 656, 3, 74, 37,
    0, 654, 656, 3, 78, 39, 0, 655, 652, 1, 0, 0, 0, 655, 653, 1, 0, 0, 0, 655, 654, 1, 0,
    0, 0, 656, 47, 1, 0, 0, 0, 657, 658, 3, 50, 25, 0, 658, 660, 3, 56, 28, 0, 659, 661, 3,
    70, 35, 0, 660, 659, 1, 0, 0, 0, 660, 661, 1, 0, 0, 0, 661, 663, 1, 0, 0, 0, 662, 664,
    3, 72, 36, 0, 663, 662, 1, 0, 0, 0, 663, 664, 1, 0, 0, 0, 664, 49, 1, 0, 0, 0, 665, 668,
    3, 328, 164, 0, 666, 668, 3, 258, 129, 0, 667, 665, 1, 0, 0, 0, 667, 666, 1, 0, 0, 0,
    668, 51, 1, 0, 0, 0, 669, 672, 3, 328, 164, 0, 670, 672, 4, 26, 0, 0, 671, 669, 1, 0,
    0, 0, 671, 670, 1, 0, 0, 0, 672, 53, 1, 0, 0, 0, 673, 674, 5, 516, 0, 0, 674, 679, 3, 52,
    26, 0, 675, 676, 5, 520, 0, 0, 676, 678, 3, 52, 26, 0, 677, 675, 1, 0, 0, 0, 678, 681,
    1, 0, 0, 0, 679, 677, 1, 0, 0, 0, 679, 680, 1, 0, 0, 0, 680, 682, 1, 0, 0, 0, 681, 679,
    1, 0, 0, 0, 682, 683, 5, 517, 0, 0, 683, 55, 1, 0, 0, 0, 684, 722, 7, 7, 0, 0, 685, 687,
    7, 8, 0, 0, 686, 688, 3, 58, 29, 0, 687, 686, 1, 0, 0, 0, 687, 688, 1, 0, 0, 0, 688, 722,
    1, 0, 0, 0, 689, 691, 5, 379, 0, 0, 690, 692, 3, 58, 29, 0, 691, 690, 1, 0, 0, 0, 691,
    692, 1, 0, 0, 0, 692, 699, 1, 0, 0, 0, 693, 695, 7, 9, 0, 0, 694, 696, 5, 206, 0, 0, 695,
    694, 1, 0, 0, 0, 695, 696, 1, 0, 0, 0, 696, 697, 1, 0, 0, 0, 697, 698, 5, 378, 0, 0, 698,
    700, 5, 504, 0, 0, 699, 693, 1, 0, 0, 0, 699, 700, 1, 0, 0, 0, 700, 722, 1, 0, 0, 0, 701,
    703, 7, 10, 0, 0, 702, 704, 3, 60, 30, 0, 703, 702, 1, 0, 0, 0, 703, 704, 1, 0, 0, 0, 704,
    722, 1, 0, 0, 0, 705, 707, 7, 11, 0, 0, 706, 708, 3, 64, 32, 0, 707, 706, 1, 0, 0, 0, 707,
    708, 1, 0, 0, 0, 708, 722, 1, 0, 0, 0, 709, 711, 5, 469, 0, 0, 710, 712, 3, 66, 33, 0,
    711, 710, 1, 0, 0, 0, 711, 712, 1, 0, 0, 0, 712, 722, 1, 0, 0, 0, 713, 715, 5, 321, 0,
    0, 714, 716, 3, 68, 34, 0, 715, 714, 1, 0, 0, 0, 715, 716, 1, 0, 0, 0, 716, 722, 1, 0,
    0, 0, 717, 719, 5, 294, 0, 0, 718, 720, 3, 62, 31, 0, 719, 718, 1, 0, 0, 0, 719, 720,
    1, 0, 0, 0, 720, 722, 1, 0, 0, 0, 721, 684, 1, 0, 0, 0, 721, 685, 1, 0, 0, 0, 721, 689,
    1, 0, 0, 0, 721, 701, 1, 0, 0, 0, 721, 705, 1, 0, 0, 0, 721, 709, 1, 0, 0, 0, 721, 713,
    1, 0, 0, 0, 721, 717, 1, 0, 0, 0, 722, 57, 1, 0, 0, 0, 723, 724, 5, 516, 0, 0, 724, 725,
    3, 360, 180, 0, 725, 726, 5, 517, 0, 0, 726, 59, 1, 0, 0, 0, 727, 728, 5, 516, 0, 0, 728,
    731, 3, 360, 180, 0, 729, 730, 5, 520, 0, 0, 730, 732, 3, 360, 180, 0, 731, 729, 1,
    0, 0, 0, 731, 732, 1, 0, 0, 0, 732, 733, 1, 0, 0, 0, 733, 734, 5, 517, 0, 0, 734, 61, 1,
    0, 0, 0, 735, 736, 5, 516, 0, 0, 736, 739, 3, 358, 179, 0, 737, 738, 5, 520, 0, 0, 738,
    740, 3, 358, 179, 0, 739, 737, 1, 0, 0, 0, 739, 740, 1, 0, 0, 0, 740, 741, 1, 0, 0, 0,
    741, 742, 5, 517, 0, 0, 742, 63, 1, 0, 0, 0, 743, 744, 5, 507, 0, 0, 744, 745, 3, 56,
    28, 0, 745, 746, 5, 506, 0, 0, 746, 65, 1, 0, 0, 0, 747, 748, 5, 507, 0, 0, 748, 749,
    3, 56, 28, 0, 749, 750, 5, 520, 0, 0, 750, 751, 3, 56, 28, 0, 751, 752, 1, 0, 0, 0, 752,
    753, 5, 506, 0, 0, 753, 67, 1, 0, 0, 0, 754, 755, 5, 507, 0, 0, 755, 756, 3, 52, 26, 0,
    756, 763, 3, 56, 28, 0, 757, 758, 5, 520, 0, 0, 758, 759, 3, 52, 26, 0, 759, 760, 3,
    56, 28, 0, 760, 762, 1, 0, 0, 0, 761, 757, 1, 0, 0, 0, 762, 765, 1, 0, 0, 0, 763, 761,
    1, 0, 0, 0, 763, 764, 1, 0, 0, 0, 764, 766, 1, 0, 0, 0, 765, 763, 1, 0, 0, 0, 766, 767,
    5, 506, 0, 0, 767, 69, 1, 0, 0, 0, 768, 769, 5, 64, 0, 0, 769, 771, 3, 86, 43, 0, 770,
    768, 1, 0, 0, 0, 770, 771, 1, 0, 0, 0, 771, 772, 1, 0, 0, 0, 772, 773, 5, 288, 0, 0, 773,
    776, 5, 466, 0, 0, 774, 775, 5, 241, 0, 0, 775, 777, 5, 125, 0, 0, 776, 774, 1, 0, 0,
    0, 776, 777, 1, 0, 0, 0, 777, 783, 1, 0, 0, 0, 778, 780, 5, 241, 0, 0, 779, 778, 1, 0,
    0, 0, 779, 780, 1, 0, 0, 0, 780, 781, 1, 0, 0, 0, 781, 783, 5, 244, 0, 0, 782, 770, 1,
    0, 0, 0, 782, 779, 1, 0, 0, 0, 783, 71, 1, 0, 0, 0, 784, 785, 5, 59, 0, 0, 785, 786, 5,
    537, 0, 0, 786, 73, 1, 0, 0, 0, 787, 788, 3, 50, 25, 0, 788, 789, 3, 56, 28, 0, 789, 792,
    5, 218, 0, 0, 790, 791, 5, 151, 0, 0, 791, 793, 3, 76, 38, 0, 792, 790, 1, 0, 0, 0, 792,
    793, 1, 0, 0, 0, 793, 795, 1, 0, 0, 0, 794, 796, 5, 423, 0, 0, 795, 794, 1, 0, 0, 0, 795,
    796, 1, 0, 0, 0, 796, 75, 1, 0, 0, 0, 797, 798, 5, 537, 0, 0, 798, 77, 1, 0, 0, 0, 799,
    800, 3, 50, 25, 0, 800, 801, 5, 17, 0, 0, 801, 803, 3, 80, 40, 0, 802, 804, 3, 72, 36,
    0, 803, 802, 1, 0, 0, 0, 803, 804, 1, 0, 0, 0, 804, 79, 1, 0, 0, 0, 805, 806, 3, 258, 129,
    0, 806, 81, 1, 0, 0, 0, 807, 808, 5, 424, 0, 0, 808, 809, 5, 146, 0, 0, 809, 810, 3, 52,
    26, 0, 810, 811, 5, 17, 0, 0, 811, 812, 3, 258, 129, 0, 812, 83, 1, 0, 0, 0, 813, 814,
    5, 64, 0, 0, 814, 816, 3, 86, 43, 0, 815, 813, 1, 0, 0, 0, 815, 816, 1, 0, 0, 0, 816, 817,
    1, 0, 0, 0, 817, 818, 5, 288, 0, 0, 818, 819, 5, 466, 0, 0, 819, 820, 3, 54, 27, 0, 820,
    821, 5, 241, 0, 0, 821, 822, 5, 125, 0, 0, 822, 85, 1, 0, 0, 0, 823, 824, 3, 304, 152,
    0, 824, 87, 1, 0, 0, 0, 825, 826, 5, 277, 0, 0, 826, 827, 5, 146, 0, 0, 827, 828, 5, 371,
    0, 0, 828, 89, 1, 0, 0, 0, 829, 830, 5, 269, 0, 0, 830, 831, 5, 34, 0, 0, 831, 832, 3,
    92, 46, 0, 832, 91, 1, 0, 0, 0, 833, 834, 5, 516, 0, 0, 834, 839, 3, 94, 47, 0, 835, 836,
    5, 520, 0, 0, 836, 838, 3, 94, 47, 0, 837, 835, 1, 0, 0, 0, 838, 841, 1, 0, 0, 0, 839,
    837, 1, 0, 0, 0, 839, 840, 1, 0, 0, 0, 840, 842, 1, 0, 0, 0, 841, 839, 1, 0, 0, 0, 842,
    843, 5, 517, 0, 0, 843, 93, 1, 0, 0, 0, 844, 857, 3, 52, 26, 0, 845, 846, 5, 516, 0, 0,
    846, 851, 3, 96, 48, 0, 847, 848, 5, 520, 0, 0, 848, 850, 3, 96, 48, 0, 849, 847, 1,
    0, 0, 0, 850, 853, 1, 0, 0, 0, 851, 849, 1, 0, 0, 0, 851, 852, 1, 0, 0, 0, 852, 854, 1,
    0, 0, 0, 853, 851, 1, 0, 0, 0, 854, 855, 5, 517, 0, 0, 855, 857, 1, 0, 0, 0, 856, 844,
    1, 0, 0, 0, 856, 845, 1, 0, 0, 0, 857, 95, 1, 0, 0, 0, 858, 861, 3, 280, 140, 0, 859, 861,
    3, 354, 177, 0, 860, 858, 1, 0, 0, 0, 860, 859, 1, 0, 0, 0, 861, 97, 1, 0, 0, 0, 862, 863,
    5, 202, 0, 0, 863, 872, 3, 322, 161, 0, 864, 868, 5, 516, 0, 0, 865, 867, 3, 100, 50,
    0, 866, 865, 1, 0, 0, 0, 867, 870, 1, 0, 0, 0, 868, 866, 1, 0, 0, 0, 868, 869, 1, 0, 0,
    0, 869, 871, 1, 0, 0, 0, 870, 868, 1, 0, 0, 0, 871, 873, 5, 517, 0, 0, 872, 864, 1, 0,
    0, 0, 872, 873, 1, 0, 0, 0, 873, 99, 1, 0, 0, 0, 874, 875, 7, 12, 0, 0, 875, 879, 7, 13,
    0, 0, 876, 877, 7, 14, 0, 0, 877, 879, 7, 15, 0, 0, 878, 874, 1, 0, 0, 0, 878, 876, 1,
    0, 0, 0, 879, 101, 1, 0, 0, 0, 880, 881, 5, 72, 0, 0, 881, 882, 5, 441, 0, 0, 882, 883,
    3, 314, 157, 0, 883, 884, 3, 330, 165, 0, 884, 103, 1, 0, 0, 0, 885, 886, 5, 72, 0, 0,
    886, 888, 5, 447, 0, 0, 887, 889, 3, 332, 166, 0, 888, 887, 1, 0, 0, 0, 888, 889, 1,
    0, 0, 0, 889, 890, 1, 0, 0, 0, 890, 892, 3, 318, 159, 0, 891, 893, 3, 72, 36, 0, 892,
    891, 1, 0, 0, 0, 892, 893, 1, 0, 0, 0, 893, 894, 1, 0, 0, 0, 894, 895, 3, 330, 165, 0,
    895, 105, 1, 0, 0, 0, 896, 898, 5, 72, 0, 0, 897, 899, 5, 497, 0, 0, 898, 897, 1, 0, 0,
    0, 898, 899, 1, 0, 0, 0, 899, 900, 1, 0, 0, 0, 900, 902, 5, 501, 0, 0, 901, 903, 3, 332,
    166, 0, 902, 901, 1, 0, 0, 0, 902, 903, 1, 0, 0, 0, 903, 904, 1, 0, 0, 0, 904, 906, 3,
    326, 163, 0, 905, 907, 3, 54, 27, 0, 906, 905, 1, 0, 0, 0, 906, 907, 1, 0, 0, 0, 907,
    909, 1, 0, 0, 0, 908, 910, 3, 72, 36, 0, 909, 908, 1, 0, 0, 0, 909, 910, 1, 0, 0, 0, 910,
    911, 1, 0, 0, 0, 911, 912, 5, 17, 0, 0, 912, 913, 3, 158, 79, 0, 913, 107, 1, 0, 0, 0,
    914, 918, 5, 72, 0, 0, 915, 919, 5, 497, 0, 0, 916, 917, 5, 497, 0, 0, 917, 919, 5, 370,
    0, 0, 918, 915, 1, 0, 0, 0, 918, 916, 1, 0, 0, 0, 918, 919, 1, 0, 0, 0, 919, 920, 1, 0,
    0, 0, 920, 922, 5, 153, 0, 0, 921, 923, 3, 332, 166, 0, 922, 921, 1, 0, 0, 0, 922, 923,
    1, 0, 0, 0, 923, 924, 1, 0, 0, 0, 924, 925, 3, 270, 135, 0, 925, 926, 5, 17, 0, 0, 926,
    929, 3, 304, 152, 0, 927, 928, 5, 195, 0, 0, 928, 930, 7, 16, 0, 0, 929, 927, 1, 0, 0,
    0, 929, 930, 1, 0, 0, 0, 930, 932, 1, 0, 0, 0, 931, 933, 3, 110, 55, 0, 932, 931, 1, 0,
    0, 0, 932, 933, 1, 0, 0, 0, 933, 109, 1, 0, 0, 0, 934, 935, 5, 412, 0, 0, 935, 936, 5,
    463, 0, 0, 936, 942, 3, 112, 56, 0, 937, 938, 5, 520, 0, 0, 938, 939, 5, 463, 0, 0, 939,
    941, 3, 112, 56, 0, 940, 937, 1, 0, 0, 0, 941, 944, 1, 0, 0, 0, 942, 940, 1, 0, 0, 0, 942,
    943, 1, 0, 0, 0, 943, 111, 1, 0, 0, 0, 944, 942, 1, 0, 0, 0, 945, 946, 5, 537, 0, 0, 946,
    113, 1, 0, 0, 0, 947, 948, 5, 8, 0, 0, 948, 950, 5, 373, 0, 0, 949, 951, 3, 334, 167,
    0, 950, 949, 1, 0, 0, 0, 950, 951, 1, 0, 0, 0, 951, 952, 1, 0, 0, 0, 952, 958, 3, 322,
    161, 0, 953, 959, 3, 116, 58, 0, 954, 959, 3, 118, 59, 0, 955, 959, 3, 120, 60, 0, 956,
    959, 3, 122, 61, 0, 957, 959, 3, 124, 62, 0, 958, 953, 1, 0, 0, 0, 958, 954, 1, 0, 0,
    0, 958, 955, 1, 0, 0, 0, 958, 956, 1, 0, 0, 0, 958, 957, 1, 0, 0, 0, 959, 115, 1, 0, 0,
    0, 960, 962, 5, 311, 0, 0, 961, 963, 3, 328, 164, 0, 962, 961, 1, 0, 0, 0, 962, 963,
    1, 0, 0, 0, 963, 964, 1, 0, 0, 0, 964, 965, 5, 388, 0, 0, 965, 966, 3, 328, 164, 0, 966,
    117, 1, 0, 0, 0, 967, 968, 5, 340, 0, 0, 968, 969, 3, 336, 168, 0, 969, 119, 1, 0, 0,
    0, 970, 971, 5, 437, 0, 0, 971, 972, 5, 64, 0, 0, 972, 973, 3, 86, 43, 0, 973, 974, 5,
    288, 0, 0, 974, 975, 5, 466, 0, 0, 975, 977, 3, 54, 27, 0, 976, 978, 3, 126, 63, 0, 977,
    976, 1, 0, 0, 0, 977, 978, 1, 0, 0, 0, 978, 121, 1, 0, 0, 0, 979, 980, 5, 116, 0, 0, 980,
    981, 5, 64, 0, 0, 981, 982, 3, 86, 43, 0, 982, 123, 1, 0, 0, 0, 983, 984, 5, 437, 0, 0,
    984, 985, 5, 403, 0, 0, 985, 986, 3, 54, 27, 0, 986, 125, 1, 0, 0, 0, 987, 988, 5, 241,
    0, 0, 988, 989, 5, 125, 0, 0, 989, 127, 1, 0, 0, 0, 990, 991, 5, 8, 0, 0, 991, 992, 5,
    501, 0, 0, 992, 996, 3, 324, 162, 0, 993, 997, 3, 116, 58, 0, 994, 995, 5, 17, 0, 0,
    995, 997, 3, 158, 79, 0, 996, 993, 1, 0, 0, 0, 996, 994, 1, 0, 0, 0, 997, 129, 1, 0, 0,
    0, 998, 999, 5, 8, 0, 0, 999, 1000, 5, 447, 0, 0, 1000, 1001, 3, 316, 158, 0, 1001,
    1002, 3, 118, 59, 0, 1002, 131, 1, 0, 0, 0, 1003, 1007, 5, 8, 0, 0, 1004, 1008, 5, 497,
    0, 0, 1005, 1006, 5, 497, 0, 0, 1006, 1008, 5, 370, 0, 0, 1007, 1004, 1, 0, 0, 0, 1007,
    1005, 1, 0, 0, 0, 1007, 1008, 1, 0, 0, 0, 1008, 1009, 1, 0, 0, 0, 1009, 1011, 5, 153,
    0, 0, 1010, 1012, 3, 334, 167, 0, 1011, 1010, 1, 0, 0, 0, 1011, 1012, 1, 0, 0, 0, 1012,
    1013, 1, 0, 0, 0, 1013, 1014, 3, 272, 136, 0, 1014, 1015, 5, 17, 0, 0, 1015, 1018,
    3, 304, 152, 0, 1016, 1017, 5, 195, 0, 0, 1017, 1019, 7, 16, 0, 0, 1018, 1016, 1, 0,
    0, 0, 1018, 1019, 1, 0, 0, 0, 1019, 133, 1, 0, 0, 0, 1020, 1021, 5, 116, 0, 0, 1021,
    1023, 5, 441, 0, 0, 1022, 1024, 3, 334, 167, 0, 1023, 1022, 1, 0, 0, 0, 1023, 1024,
    1, 0, 0, 0, 1024, 1025, 1, 0, 0, 0, 1025, 1026, 3, 312, 156, 0, 1026, 135, 1, 0, 0, 0,
    1027, 1029, 5, 116, 0, 0, 1028, 1030, 5, 497, 0, 0, 1029, 1028, 1, 0, 0, 0, 1029, 1030,
    1, 0, 0, 0, 1030, 1031, 1, 0, 0, 0, 1031, 1033, 5, 373, 0, 0, 1032, 1034, 3, 334, 167,
    0, 1033, 1032, 1, 0, 0, 0, 1033, 1034, 1, 0, 0, 0, 1034, 1035, 1, 0, 0, 0, 1035, 1036,
    3, 322, 161, 0, 1036, 137, 1, 0, 0, 0, 1037, 1038, 5, 116, 0, 0, 1038, 1040, 5, 447,
    0, 0, 1039, 1041, 3, 334, 167, 0, 1040, 1039, 1, 0, 0, 0, 1040, 1041, 1, 0, 0, 0, 1041,
    1042, 1, 0, 0, 0, 1042, 1044, 3, 316, 158, 0, 1043, 1045, 7, 17, 0, 0, 1044, 1043,
    1, 0, 0, 0, 1044, 1045, 1, 0, 0, 0, 1045, 139, 1, 0, 0, 0, 1046, 1048, 5, 116, 0, 0, 1047,
    1049, 5, 497, 0, 0, 1048, 1047, 1, 0, 0, 0, 1048, 1049, 1, 0, 0, 0, 1049, 1050, 1, 0,
    0, 0, 1050, 1052, 5, 501, 0, 0, 1051, 1053, 3, 334, 167, 0, 1052, 1051, 1, 0, 0, 0,
    1052, 1053, 1, 0, 0, 0, 1053, 1054, 1, 0, 0, 0, 1054, 1055, 3, 324, 162, 0, 1055, 141,
    1, 0, 0, 0, 1056, 1060, 5, 116, 0, 0, 1057, 1061, 5, 497, 0, 0, 1058, 1059, 5, 497,
    0, 0, 1059, 1061, 5, 370, 0, 0, 1060, 1057, 1, 0, 0, 0, 1060, 1058, 1, 0, 0, 0, 1060,
    1061, 1, 0, 0, 0, 1061, 1062, 1, 0, 0, 0, 1062, 1064, 5, 153, 0, 0, 1063, 1065, 3, 334,
    167, 0, 1064, 1063, 1, 0, 0, 0, 1064, 1065, 1, 0, 0, 0, 1065, 1066, 1, 0, 0, 0, 1066,
    1067, 3, 272, 136, 0, 1067, 143, 1, 0, 0, 0, 1068, 1070, 5, 132, 0, 0, 1069, 1068,
    1, 0, 0, 0, 1069, 1070, 1, 0, 0, 0, 1070, 1071, 1, 0, 0, 0, 1071, 1076, 3, 146, 73, 0,
    1072, 1076, 3, 154, 77, 0, 1073, 1074, 5, 132, 0, 0, 1074, 1076, 3, 156, 78, 0, 1075,
    1069, 1, 0, 0, 0, 1075, 1072, 1, 0, 0, 0, 1075, 1073, 1, 0, 0, 0, 1076, 145, 1, 0, 0,
    0, 1077, 1078, 5, 177, 0, 0, 1078, 1079, 7, 18, 0, 0, 1079, 1088, 3, 322, 161, 0, 1080,
    1082, 3, 148, 74, 0, 1081, 1080, 1, 0, 0, 0, 1081, 1082, 1, 0, 0, 0, 1082, 1084, 1,
    0, 0, 0, 1083, 1085, 3, 54, 27, 0, 1084, 1083, 1, 0, 0, 0, 1084, 1085, 1, 0, 0, 0, 1085,
    1086, 1, 0, 0, 0, 1086, 1089, 3, 158, 79, 0, 1087, 1089, 3, 150, 75, 0, 1088, 1081,
    1, 0, 0, 0, 1088, 1087, 1, 0, 0, 0, 1089, 147, 1, 0, 0, 0, 1090, 1091, 5, 268, 0, 0, 1091,
    1092, 3, 336, 168, 0, 1092, 149, 1, 0, 0, 0, 1093, 1094, 5, 414, 0, 0, 1094, 1099,
    3, 152, 76, 0, 1095, 1096, 5, 520, 0, 0, 1096, 1098, 3, 152, 76, 0, 1097, 1095, 1,
    0, 0, 0, 1098, 1101, 1, 0, 0, 0, 1099, 1097, 1, 0, 0, 0, 1099, 1100, 1, 0, 0, 0, 1100,
    151, 1, 0, 0, 0, 1101, 1099, 1, 0, 0, 0, 1102, 1103, 5, 516, 0, 0, 1103, 1108, 3, 354,
    177, 0, 1104, 1105, 5, 520, 0, 0, 1105, 1107, 3, 354, 177, 0, 1106, 1104, 1, 0, 0,
    0, 1107, 1110, 1, 0, 0, 0, 1108, 1106, 1, 0, 0, 0, 1108, 1109, 1, 0, 0, 0, 1109, 1111,
    1, 0, 0, 0, 1110, 1108, 1, 0, 0, 0, 1111, 1112, 5, 517, 0, 0, 1112, 153, 1, 0, 0, 0, 1113,
    1114, 5, 24, 0, 0, 1114, 1115, 5, 354, 0, 0, 1115, 1116, 5, 340, 0, 0, 1116, 1120,
    5, 521, 0, 0, 1117, 1118, 3, 146, 73, 0, 1118, 1119, 5, 521, 0, 0, 1119, 1121, 1, 0,
    0, 0, 1120, 1117, 1, 0, 0, 0, 1121, 1122, 1, 0, 0, 0, 1122, 1120, 1, 0, 0, 0, 1122, 1123,
    1, 0, 0, 0, 1123, 1124, 1, 0, 0, 0, 1124, 1125, 5, 122, 0, 0, 1125, 155, 1, 0, 0, 0, 1126,
    1127, 5, 354, 0, 0, 1127, 1128, 5, 340, 0, 0, 1128, 1132, 5, 24, 0, 0, 1129, 1130,
    3, 146, 73, 0, 1130, 1131, 5, 521, 0, 0, 1131, 1133, 1, 0, 0, 0, 1132, 1129, 1, 0, 0,
    0, 1133, 1134, 1, 0, 0, 0, 1134, 1132, 1, 0, 0, 0, 1134, 1135, 1, 0, 0, 0, 1135, 1136,
    1, 0, 0, 0, 1136, 1137, 5, 122, 0, 0, 1137, 157, 1, 0, 0, 0, 1138, 1139, 6, 79, -1, 0,
    1139, 1162, 3, 160, 80, 0, 1140, 1141, 3, 162, 81, 0, 1141, 1142, 3, 158, 79, 5, 1142,
    1162, 1, 0, 0, 0, 1143, 1144, 5, 516, 0, 0, 1144, 1145, 3, 158, 79, 0, 1145, 1146,
    5, 517, 0, 0, 1146, 1162, 1, 0, 0, 0, 1147, 1149, 3, 170, 85, 0, 1148, 1150, 3, 230,
    115, 0, 1149, 1148, 1, 0, 0, 0, 1149, 1150, 1, 0, 0, 0, 1150, 1152, 1, 0, 0, 0, 1151,
    1153, 3, 234, 117, 0, 1152, 1151, 1, 0, 0, 0, 1152, 1153, 1, 0, 0, 0, 1153, 1162, 1,
    0, 0, 0, 1154, 1156, 3, 168, 84, 0, 1155, 1157, 3, 230, 115, 0, 1156, 1155, 1, 0, 0,
    0, 1156, 1157, 1, 0, 0, 0, 1157, 1159, 1, 0, 0, 0, 1158, 1160, 3, 234, 117, 0, 1159,
    1158, 1, 0, 0, 0, 1159, 1160, 1, 0, 0, 0, 1160, 1162, 1, 0, 0, 0, 1161, 1138, 1, 0, 0,
    0, 1161, 1140, 1, 0, 0, 0, 1161, 1143, 1, 0, 0, 0, 1161, 1147, 1, 0, 0, 0, 1161, 1154,
    1, 0, 0, 0, 1162, 1177, 1, 0, 0, 0, 1163, 1164, 10, 3, 0, 0, 1164, 1166, 7, 19, 0, 0,
    1165, 1167, 5, 5, 0, 0, 1166, 1165, 1, 0, 0, 0, 1166, 1167, 1, 0, 0, 0, 1167, 1168,
    1, 0, 0, 0, 1168, 1170, 3, 158, 79, 0, 1169, 1171, 3, 230, 115, 0, 1170, 1169, 1, 0,
    0, 0, 1170, 1171, 1, 0, 0, 0, 1171, 1173, 1, 0, 0, 0, 1172, 1174, 3, 234, 117, 0, 1173,
    1172, 1, 0, 0, 0, 1173, 1174, 1, 0, 0, 0, 1174, 1176, 1, 0, 0, 0, 1175, 1163, 1, 0, 0,
    0, 1176, 1179, 1, 0, 0, 0, 1177, 1175, 1, 0, 0, 0, 1177, 1178, 1, 0, 0, 0, 1178, 159,
    1, 0, 0, 0, 1179, 1177, 1, 0, 0, 0, 1180, 1181, 5, 414, 0, 0, 1181, 1186, 3, 258, 129,
    0, 1182, 1183, 5, 520, 0, 0, 1183, 1185, 3, 258, 129, 0, 1184, 1182, 1, 0, 0, 0, 1185,
    1188, 1, 0, 0, 0, 1186, 1184, 1, 0, 0, 0, 1186, 1187, 1, 0, 0, 0, 1187, 161, 1, 0, 0,
    0, 1188, 1186, 1, 0, 0, 0, 1189, 1190, 5, 433, 0, 0, 1190, 1195, 3, 164, 82, 0, 1191,
    1192, 5, 520, 0, 0, 1192, 1194, 3, 164, 82, 0, 1193, 1191, 1, 0, 0, 0, 1194, 1197,
    1, 0, 0, 0, 1195, 1193, 1, 0, 0, 0, 1195, 1196, 1, 0, 0, 0, 1196, 163, 1, 0, 0, 0, 1197,
    1195, 1, 0, 0, 0, 1198, 1210, 3, 166, 83, 0, 1199, 1200, 5, 516, 0, 0, 1200, 1205,
    3, 52, 26, 0, 1201, 1202, 5, 520, 0, 0, 1202, 1204, 3, 52, 26, 0, 1203, 1201, 1, 0,
    0, 0, 1204, 1207, 1, 0, 0, 0, 1205, 1203, 1, 0, 0, 0, 1205, 1206, 1, 0, 0, 0, 1206, 1208,
    1, 0, 0, 0, 1207, 1205, 1, 0, 0, 0, 1208, 1209, 5, 517, 0, 0, 1209, 1211, 1, 0, 0, 0,
    1210, 1199, 1, 0, 0, 0, 1210, 1211, 1, 0, 0, 0, 1211, 1212, 1, 0, 0, 0, 1212, 1213,
    5, 17, 0, 0, 1213, 1214, 5, 516, 0, 0, 1214, 1215, 3, 158, 79, 0, 1215, 1216, 5, 517,
    0, 0, 1216, 165, 1, 0, 0, 0, 1217, 1218, 3, 304, 152, 0, 1218, 167, 1, 0, 0, 0, 1219,
    1221, 3, 170, 85, 0, 1220, 1222, 3, 176, 88, 0, 1221, 1220, 1, 0, 0, 0, 1221, 1222,
    1, 0, 0, 0, 1222, 1224, 1, 0, 0, 0, 1223, 1225, 3, 204, 102, 0, 1224, 1223, 1, 0, 0,
    0, 1224, 1225, 1, 0, 0, 0, 1225, 1227, 1, 0, 0, 0, 1226, 1228, 3, 206, 103, 0, 1227,
    1226, 1, 0, 0, 0, 1227, 1228, 1, 0, 0, 0, 1228, 1230, 1, 0, 0, 0, 1229, 1231, 3, 220,
    110, 0, 1230, 1229, 1, 0, 0, 0, 1230, 1231, 1, 0, 0, 0, 1231, 1233, 1, 0, 0, 0, 1232,
    1234, 3, 222, 111, 0, 1233, 1232, 1, 0, 0, 0, 1233, 1234, 1, 0, 0, 0, 1234, 1240, 1,
    0, 0, 0, 1235, 1236, 3, 170, 85, 0, 1236, 1237, 3, 176, 88, 0, 1237, 1238, 3, 228,
    114, 0, 1238, 1240, 1, 0, 0, 0, 1239, 1219, 1, 0, 0, 0, 1239, 1235, 1, 0, 0, 0, 1240,
    169, 1, 0, 0, 0, 1241, 1243, 5, 336, 0, 0, 1242, 1244, 3, 364, 182, 0, 1243, 1242,
    1, 0, 0, 0, 1243, 1244, 1, 0, 0, 0, 1244, 1254, 1, 0, 0, 0, 1245, 1255, 5, 527, 0, 0,
    1246, 1251, 3, 172, 86, 0, 1247, 1248, 5, 520, 0, 0, 1248, 1250, 3, 172, 86, 0, 1249,
    1247, 1, 0, 0, 0, 1250, 1253, 1, 0, 0, 0, 1251, 1249, 1, 0, 0, 0, 1251, 1252, 1, 0, 0,
    0, 1252, 1255, 1, 0, 0, 0, 1253, 1251, 1, 0, 0, 0, 1254, 1245, 1, 0, 0, 0, 1254, 1246,
    1, 0, 0, 0, 1255, 171, 1, 0, 0, 0, 1256, 1272, 3, 174, 87, 0, 1257, 1262, 3, 52, 26,
    0, 1258, 1260, 5, 17, 0, 0, 1259, 1258, 1, 0, 0, 0, 1259, 1260, 1, 0, 0, 0, 1260, 1261,
    1, 0, 0, 0, 1261, 1263, 3, 258, 129, 0, 1262, 1259, 1, 0, 0, 0, 1262, 1263, 1, 0, 0,
    0, 1263, 1272, 1, 0, 0, 0, 1264, 1269, 3, 258, 129, 0, 1265, 1267, 5, 17, 0, 0, 1266,
    1265, 1, 0, 0, 0, 1266, 1267, 1, 0, 0, 0, 1267, 1268, 1, 0, 0, 0, 1268, 1270, 3, 52,
    26, 0, 1269, 1266, 1, 0, 0, 0, 1269, 1270, 1, 0, 0, 0, 1270, 1272, 1, 0, 0, 0, 1271,
    1256, 1, 0, 0, 0, 1271, 1257, 1, 0, 0, 0, 1271, 1264, 1, 0, 0, 0, 1272, 173, 1, 0, 0,
    0, 1273, 1274, 3, 268, 134, 0, 1274, 1275, 5, 262, 0, 0, 1275, 1276, 3, 226, 113,
    0, 1276, 1277, 5, 17, 0, 0, 1277, 1278, 3, 304, 152, 0, 1278, 1286, 1, 0, 0, 0, 1279,
    1280, 3, 268, 134, 0, 1280, 1281, 5, 262, 0, 0, 1281, 1282, 3, 296, 148, 0, 1282,
    1283, 5, 17, 0, 0, 1283, 1284, 3, 304, 152, 0, 1284, 1286, 1, 0, 0, 0, 1285, 1273,
    1, 0, 0, 0, 1285, 1279, 1, 0, 0, 0, 1286, 175, 1, 0, 0, 0, 1287, 1288, 5, 151, 0, 0, 1288,
    1289, 3, 178, 89, 0, 1289, 177, 1, 0, 0, 0, 1290, 1291, 6, 89, -1, 0, 1291, 1296, 3,
    180, 90, 0, 1292, 1293, 5, 520, 0, 0, 1293, 1295, 3, 180, 90, 0, 1294, 1292, 1, 0,
    0, 0, 1295, 1298, 1, 0, 0, 0, 1296, 1294, 1, 0, 0, 0, 1296, 1297, 1, 0, 0, 0, 1297, 1302,
    1, 0, 0, 0, 1298, 1296, 1, 0, 0, 0, 1299, 1302, 3, 188, 94, 0, 1300, 1302, 3, 190, 95,
    0, 1301, 1290, 1, 0, 0, 0, 1301, 1299, 1, 0, 0, 0, 1301, 1300, 1, 0, 0, 0, 1302, 1324,
    1, 0, 0, 0, 1303, 1304, 10, 3, 0, 0, 1304, 1305, 5, 73, 0, 0, 1305, 1306, 5, 185, 0,
    0, 1306, 1323, 3, 178, 89, 4, 1307, 1309, 10, 4, 0, 0, 1308, 1310, 5, 233, 0, 0, 1309,
    1308, 1, 0, 0, 0, 1309, 1310, 1, 0, 0, 0, 1310, 1312, 1, 0, 0, 0, 1311, 1313, 7, 20,
    0, 0, 1312, 1311, 1, 0, 0, 0, 1312, 1313, 1, 0, 0, 0, 1313, 1315, 1, 0, 0, 0, 1314, 1316,
    5, 261, 0, 0, 1315, 1314, 1, 0, 0, 0, 1315, 1316, 1, 0, 0, 0, 1316, 1317, 1, 0, 0, 0,
    1317, 1318, 5, 185, 0, 0, 1318, 1320, 3, 178, 89, 0, 1319, 1321, 3, 202, 101, 0, 1320,
    1319, 1, 0, 0, 0, 1320, 1321, 1, 0, 0, 0, 1321, 1323, 1, 0, 0, 0, 1322, 1303, 1, 0, 0,
    0, 1322, 1307, 1, 0, 0, 0, 1323, 1326, 1, 0, 0, 0, 1324, 1322, 1, 0, 0, 0, 1324, 1325,
    1, 0, 0, 0, 1325, 179, 1, 0, 0, 0, 1326, 1324, 1, 0, 0, 0, 1327, 1329, 3, 182, 91, 0,
    1328, 1330, 3, 294, 147, 0, 1329, 1328, 1, 0, 0, 0, 1329, 1330, 1, 0, 0, 0, 1330, 181,
    1, 0, 0, 0, 1331, 1333, 5, 373, 0, 0, 1332, 1331, 1, 0, 0, 0, 1332, 1333, 1, 0, 0, 0,
    1333, 1334, 1, 0, 0, 0, 1334, 1336, 3, 322, 161, 0, 1335, 1337, 3, 184, 92, 0, 1336,
    1335, 1, 0, 0, 0, 1336, 1337, 1, 0, 0, 0, 1337, 1342, 1, 0, 0, 0, 1338, 1340, 5, 17,
    0, 0, 1339, 1338, 1, 0, 0, 0, 1339, 1340, 1, 0, 0, 0, 1340, 1341, 1, 0, 0, 0, 1341, 1343,
    3, 278, 139, 0, 1342, 1339, 1, 0, 0, 0, 1342, 1343, 1, 0, 0, 0, 1343, 1383, 1, 0, 0,
    0, 1344, 1346, 3, 324, 162, 0, 1345, 1347, 3, 184, 92, 0, 1346, 1345, 1, 0, 0, 0, 1346,
    1347, 1, 0, 0, 0, 1347, 1352, 1, 0, 0, 0, 1348, 1350, 5, 17, 0, 0, 1349, 1348, 1, 0,
    0, 0, 1349, 1350, 1, 0, 0, 0, 1350, 1351, 1, 0, 0, 0, 1351, 1353, 3, 278, 139, 0, 1352,
    1349, 1, 0, 0, 0, 1352, 1353, 1, 0, 0, 0, 1353, 1383, 1, 0, 0, 0, 1354, 1355, 5, 198,
    0, 0, 1355, 1356, 5, 373, 0, 0, 1356, 1357, 5, 516, 0, 0, 1357, 1358, 3, 272, 136,
    0, 1358, 1359, 5, 516, 0, 0, 1359, 1364, 3, 274, 137, 0, 1360, 1361, 5, 520, 0, 0,
    1361, 1363, 3, 274, 137, 0, 1362, 1360, 1, 0, 0, 0, 1363, 1366, 1, 0, 0, 0, 1364, 1362,
    1, 0, 0, 0, 1364, 1365, 1, 0, 0, 0, 1365, 1367, 1, 0, 0, 0, 1366, 1364, 1, 0, 0, 0, 1367,
    1368, 5, 517, 0, 0, 1368, 1369, 5, 517, 0, 0, 1369, 1383, 1, 0, 0, 0, 1370, 1372, 5,
    198, 0, 0, 1371, 1370, 1, 0, 0, 0, 1371, 1372, 1, 0, 0, 0, 1372, 1373, 1, 0, 0, 0, 1373,
    1374, 5, 516, 0, 0, 1374, 1375, 3, 158, 79, 0, 1375, 1376, 5, 517, 0, 0, 1376, 1383,
    1, 0, 0, 0, 1377, 1378, 5, 405, 0, 0, 1378, 1379, 5, 516, 0, 0, 1379, 1380, 3, 258,
    129, 0, 1380, 1381, 5, 517, 0, 0, 1381, 1383, 1, 0, 0, 0, 1382, 1332, 1, 0, 0, 0, 1382,
    1344, 1, 0, 0, 0, 1382, 1354, 1, 0, 0, 0, 1382, 1371, 1, 0, 0, 0, 1382, 1377, 1, 0, 0,
    0, 1383, 183, 1, 0, 0, 0, 1384, 1385, 5, 146, 0, 0, 1385, 1386, 5, 371, 0, 0, 1386,
    1387, 5, 17, 0, 0, 1387, 1388, 5, 249, 0, 0, 1388, 1389, 3, 186, 93, 0, 1389, 185,
    1, 0, 0, 0, 1390, 1391, 3, 258, 129, 0, 1391, 187, 1, 0, 0, 0, 1392, 1393, 5, 516, 0,
    0, 1393, 1394, 3, 150, 75, 0, 1394, 1395, 5, 517, 0, 0, 1395, 1396, 3, 294, 147, 0,
    1396, 189, 1, 0, 0, 0, 1397, 1398, 5, 373, 0, 0, 1398, 1399, 5, 516, 0, 0, 1399, 1400,
    3, 192, 96, 0, 1400, 1401, 5, 517, 0, 0, 1401, 191, 1, 0, 0, 0, 1402, 1403, 3, 194,
    97, 0, 1403, 1404, 5, 516, 0, 0, 1404, 1409, 3, 196, 98, 0, 1405, 1406, 5, 520, 0,
    0, 1406, 1408, 3, 196, 98, 0, 1407, 1405, 1, 0, 0, 0, 1408, 1411, 1, 0, 0, 0, 1409,
    1407, 1, 0, 0, 0, 1409, 1410, 1, 0, 0, 0, 1410, 1412, 1, 0, 0, 0, 1411, 1409, 1, 0, 0,
    0, 1412, 1413, 5, 517, 0, 0, 1413, 193, 1, 0, 0, 0, 1414, 1415, 7, 21, 0, 0, 1415, 195,
    1, 0, 0, 0, 1416, 1417, 5, 373, 0, 0, 1417, 1432, 3, 218, 109, 0, 1418, 1432, 3, 200,
    100, 0, 1419, 1432, 3, 282, 141, 0, 1420, 1421, 5, 446, 0, 0, 1421, 1422, 5, 536,
    0, 0, 1422, 1423, 5, 373, 0, 0, 1423, 1432, 3, 218, 109, 0, 1424, 1425, 5, 498, 0,
    0, 1425, 1426, 5, 536, 0, 0, 1426, 1432, 3, 200, 100, 0, 1427, 1428, 3, 198, 99, 0,
    1428, 1429, 5, 536, 0, 0, 1429, 1430, 3, 282, 141, 0, 1430, 1432, 1, 0, 0, 0, 1431,
    1416, 1, 0, 0, 0, 1431, 1418, 1, 0, 0, 0, 1431, 1419, 1, 0, 0, 0, 1431, 1420, 1, 0, 0,
    0, 1431, 1424, 1, 0, 0, 0, 1431, 1427, 1, 0, 0, 0, 1432, 197, 1, 0, 0, 0, 1433, 1434,
    7, 22, 0, 0, 1434, 199, 1, 0, 0, 0, 1435, 1436, 5, 451, 0, 0, 1436, 1437, 5, 516, 0,
    0, 1437, 1438, 3, 52, 26, 0, 1438, 1439, 5, 517, 0, 0, 1439, 201, 1, 0, 0, 0, 1440,
    1441, 5, 253, 0, 0, 1441, 1445, 3, 260, 130, 0, 1442, 1443, 5, 412, 0, 0, 1443, 1445,
    3, 54, 27, 0, 1444, 1440, 1, 0, 0, 0, 1444, 1442, 1, 0, 0, 0, 1445, 203, 1, 0, 0, 0, 1446,
    1447, 5, 430, 0, 0, 1447, 1448, 3, 260, 130, 0, 1448, 205, 1, 0, 0, 0, 1449, 1450,
    5, 159, 0, 0, 1450, 1451, 5, 34, 0, 0, 1451, 1456, 3, 208, 104, 0, 1452, 1453, 5, 520,
    0, 0, 1453, 1455, 3, 208, 104, 0, 1454, 1452, 1, 0, 0, 0, 1455, 1458, 1, 0, 0, 0, 1456,
    1454, 1, 0, 0, 0, 1456, 1457, 1, 0, 0, 0, 1457, 207, 1, 0, 0, 0, 1458, 1456, 1, 0, 0,
    0, 1459, 1500, 3, 52, 26, 0, 1460, 1500, 3, 214, 107, 0, 1461, 1462, 5, 516, 0, 0,
    1462, 1500, 5, 517, 0, 0, 1463, 1464, 5, 516, 0, 0, 1464, 1469, 3, 258, 129, 0, 1465,
    1466, 5, 520, 0, 0, 1466, 1468, 3, 258, 129, 0, 1467, 1465, 1, 0, 0, 0, 1468, 1471,
    1, 0, 0, 0, 1469, 1467, 1, 0, 0, 0, 1469, 1470, 1, 0, 0, 0, 1470, 1472, 1, 0, 0, 0, 1471,
    1469, 1, 0, 0, 0, 1472, 1473, 5, 517, 0, 0, 1473, 1500, 1, 0, 0, 0, 1474, 1475, 3, 212,
    106, 0, 1475, 1476, 5, 516, 0, 0, 1476, 1481, 3, 258, 129, 0, 1477, 1478, 5, 520,
    0, 0, 1478, 1480, 3, 258, 129, 0, 1479, 1477, 1, 0, 0, 0, 1480, 1483, 1, 0, 0, 0, 1481,
    1479, 1, 0, 0, 0, 1481, 1482, 1, 0, 0, 0, 1482, 1484, 1, 0, 0, 0, 1483, 1481, 1, 0, 0,
    0, 1484, 1485, 5, 517, 0, 0, 1485, 1500, 1, 0, 0, 0, 1486, 1487, 3, 210, 105, 0, 1487,
    1488, 5, 516, 0, 0, 1488, 1493, 3, 208, 104, 0, 1489, 1490, 5, 520, 0, 0, 1490, 1492,
    3, 208, 104, 0, 1491, 1489, 1, 0, 0, 0, 1492, 1495, 1, 0, 0, 0, 1493, 1491, 1, 0, 0,
    0, 1493, 1494, 1, 0, 0, 0, 1494, 1496, 1, 0, 0, 0, 1495, 1493, 1, 0, 0, 0, 1496, 1497,
    5, 517, 0, 0, 1497, 1500, 1, 0, 0, 0, 1498, 1500, 3, 258, 129, 0, 1499, 1459, 1, 0,
    0, 0, 1499, 1460, 1, 0, 0, 0, 1499, 1461, 1, 0, 0, 0, 1499, 1463, 1, 0, 0, 0, 1499, 1474,
    1, 0, 0, 0, 1499, 1486, 1, 0, 0, 0, 1499, 1498, 1, 0, 0, 0, 1500, 209, 1, 0, 0, 0, 1501,
    1502, 5, 160, 0, 0, 1502, 1503, 5, 493, 0, 0, 1503, 211, 1, 0, 0, 0, 1504, 1505, 7,
    23, 0, 0, 1505, 213, 1, 0, 0, 0, 1506, 1507, 3, 216, 108, 0, 1507, 1508, 5, 516, 0,
    0, 1508, 1509, 3, 218, 109, 0, 1509, 1510, 5, 520, 0, 0, 1510, 1511, 3, 282, 141,
    0, 1511, 1512, 5, 517, 0, 0, 1512, 215, 1, 0, 0, 0, 1513, 1514, 7, 24, 0, 0, 1514, 217,
    1, 0, 0, 0, 1515, 1516, 3, 328, 164, 0, 1516, 219, 1, 0, 0, 0, 1517, 1518, 5, 163, 0,
    0, 1518, 1519, 3, 260, 130, 0, 1519, 221, 1, 0, 0, 0, 1520, 1521, 5, 432, 0, 0, 1521,
    1526, 3, 224, 112, 0, 1522, 1523, 5, 520, 0, 0, 1523, 1525, 3, 224, 112, 0, 1524,
    1522, 1, 0, 0, 0, 1525, 1528, 1, 0, 0, 0, 1526, 1524, 1, 0, 0, 0, 1526, 1527, 1, 0, 0,
    0, 1527, 223, 1, 0, 0, 0, 1528, 1526, 1, 0, 0, 0, 1529, 1530, 3, 296, 148, 0, 1530,
    1531, 5, 17, 0, 0, 1531, 1532, 3, 226, 113, 0, 1532, 225, 1, 0, 0, 0, 1533, 1535, 3,
    296, 148, 0, 1534, 1533, 1, 0, 0, 0, 1534, 1535, 1, 0, 0, 0, 1535, 1536, 1, 0, 0, 0,
    1536, 1538, 5, 516, 0, 0, 1537, 1539, 3, 236, 118, 0, 1538, 1537, 1, 0, 0, 0, 1538,
    1539, 1, 0, 0, 0, 1539, 1541, 1, 0, 0, 0, 1540, 1542, 3, 230, 115, 0, 1541, 1540, 1,
    0, 0, 0, 1541, 1542, 1, 0, 0, 0, 1542, 1544, 1, 0, 0, 0, 1543, 1545, 3, 252, 126, 0,
    1544, 1543, 1, 0, 0, 0, 1544, 1545, 1, 0, 0, 0, 1545, 1546, 1, 0, 0, 0, 1546, 1547,
    5, 517, 0, 0, 1547, 227, 1, 0, 0, 0, 1548, 1549, 5, 213, 0, 0, 1549, 1551, 5, 516, 0,
    0, 1550, 1552, 3, 236, 118, 0, 1551, 1550, 1, 0, 0, 0, 1551, 1552, 1, 0, 0, 0, 1552,
    1554, 1, 0, 0, 0, 1553, 1555, 3, 230, 115, 0, 1554, 1553, 1, 0, 0, 0, 1554, 1555, 1,
    0, 0, 0, 1555, 1557, 1, 0, 0, 0, 1556, 1558, 3, 240, 120, 0, 1557, 1556, 1, 0, 0, 0,
    1557, 1558, 1, 0, 0, 0, 1558, 1560, 1, 0, 0, 0, 1559, 1561, 3, 246, 123, 0, 1560, 1559,
    1, 0, 0, 0, 1560, 1561, 1, 0, 0, 0, 1561, 1563, 1, 0, 0, 0, 1562, 1564, 3, 248, 124,
    0, 1563, 1562, 1, 0, 0, 0, 1563, 1564, 1, 0, 0, 0, 1564, 1566, 1, 0, 0, 0, 1565, 1567,
    3, 242, 121, 0, 1566, 1565, 1, 0, 0, 0, 1566, 1567, 1, 0, 0, 0, 1567, 1568, 1, 0, 0,
    0, 1568, 1569, 3, 250, 125, 0, 1569, 1574, 5, 517, 0, 0, 1570, 1572, 5, 17, 0, 0, 1571,
    1570, 1, 0, 0, 0, 1571, 1572, 1, 0, 0, 0, 1572, 1573, 1, 0, 0, 0, 1573, 1575, 3, 304,
    152, 0, 1574, 1571, 1, 0, 0, 0, 1574, 1575, 1, 0, 0, 0, 1575, 229, 1, 0, 0, 0, 1576,
    1577, 5, 258, 0, 0, 1577, 1578, 5, 34, 0, 0, 1578, 1583, 3, 232, 116, 0, 1579, 1580,
    5, 520, 0, 0, 1580, 1582, 3, 232, 116, 0, 1581, 1579, 1, 0, 0, 0, 1582, 1585, 1, 0,
    0, 0, 1583, 1581, 1, 0, 0, 0, 1583, 1584, 1, 0, 0, 0, 1584, 231, 1, 0, 0, 0, 1585, 1583,
    1, 0, 0, 0, 1586, 1588, 3, 52, 26, 0, 1587, 1589, 7, 25, 0, 0, 1588, 1587, 1, 0, 0, 0,
    1588, 1589, 1, 0, 0, 0, 1589, 1592, 1, 0, 0, 0, 1590, 1591, 5, 476, 0, 0, 1591, 1593,
    7, 26, 0, 0, 1592, 1590, 1, 0, 0, 0, 1592, 1593, 1, 0, 0, 0, 1593, 233, 1, 0, 0, 0, 1594,
    1597, 5, 204, 0, 0, 1595, 1598, 5, 5, 0, 0, 1596, 1598, 3, 258, 129, 0, 1597, 1595,
    1, 0, 0, 0, 1597, 1596, 1, 0, 0, 0, 1598, 235, 1, 0, 0, 0, 1599, 1600, 5, 268, 0, 0, 1600,
    1601, 5, 34, 0, 0, 1601, 1606, 3, 52, 26, 0, 1602, 1603, 5, 520, 0, 0, 1603, 1605,
    3, 52, 26, 0, 1604, 1602, 1, 0, 0, 0, 1605, 1608, 1, 0, 0, 0, 1606, 1604, 1, 0, 0, 0,
    1606, 1607, 1, 0, 0, 0, 1607, 237, 1, 0, 0, 0, 1608, 1606, 1, 0, 0, 0, 1609, 1626, 5,
    527, 0, 0, 1610, 1626, 5, 530, 0, 0, 1611, 1626, 5, 535, 0, 0, 1612, 1613, 5, 518,
    0, 0, 1613, 1614, 5, 538, 0, 0, 1614, 1615, 5, 520, 0, 0, 1615, 1616, 5, 538, 0, 0,
    1616, 1626, 5, 519, 0, 0, 1617, 1618, 5, 518, 0, 0, 1618, 1619, 5, 538, 0, 0, 1619,
    1620, 5, 520, 0, 0, 1620, 1626, 5, 519, 0, 0, 1621, 1622, 5, 518, 0, 0, 1622, 1623,
    5, 520, 0, 0, 1623, 1624, 5, 538, 0, 0, 1624, 1626, 5, 519, 0, 0, 1625, 1609, 1, 0,
    0, 0, 1625, 1610, 1, 0, 0, 0, 1625, 1611, 1, 0, 0, 0, 1625, 1612, 1, 0, 0, 0, 1625, 1617,
    1, 0, 0, 0, 1625, 1621, 1, 0, 0, 0, 1626, 239, 1, 0, 0, 0, 1627, 1628, 5, 215, 0, 0, 1628,
    1633, 3, 172, 86, 0, 1629, 1630, 5, 520, 0, 0, 1630, 1632, 3, 172, 86, 0, 1631, 1629,
    1, 0, 0, 0, 1632, 1635, 1, 0, 0, 0, 1633, 1631, 1, 0, 0, 0, 1633, 1634, 1, 0, 0, 0, 1634,
    241, 1, 0, 0, 0, 1635, 1633, 1, 0, 0, 0, 1636, 1637, 5, 271, 0, 0, 1637, 1639, 5, 516,
    0, 0, 1638, 1640, 3, 244, 122, 0, 1639, 1638, 1, 0, 0, 0, 1640, 1641, 1, 0, 0, 0, 1641,
    1639, 1, 0, 0, 0, 1641, 1642, 1, 0, 0, 0, 1642, 1643, 1, 0, 0, 0, 1643, 1645, 5, 517,
    0, 0, 1644, 1646, 3, 256, 128, 0, 1645, 1644, 1, 0, 0, 0, 1645, 1646, 1, 0, 0, 0, 1646,
    243, 1, 0, 0, 0, 1647, 1649, 3, 306, 153, 0, 1648, 1650, 3, 238, 119, 0, 1649, 1648,
    1, 0, 0, 0, 1649, 1650, 1, 0, 0, 0, 1650, 245, 1, 0, 0, 0, 1651, 1652, 5, 5, 0, 0, 1652,
    1653, 5, 322, 0, 0, 1653, 1654, 5, 272, 0, 0, 1654, 1660, 5, 210, 0, 0, 1655, 1656,
    5, 254, 0, 0, 1656, 1657, 5, 321, 0, 0, 1657, 1658, 5, 272, 0, 0, 1658, 1660, 5, 210,
    0, 0, 1659, 1651, 1, 0, 0, 0, 1659, 1655, 1, 0, 0, 0, 1660, 247, 1, 0, 0, 0, 1661, 1662,
    5, 438, 0, 0, 1662, 1663, 5, 210, 0, 0, 1663, 1664, 5, 343, 0, 0, 1664, 1665, 5, 478,
    0, 0, 1665, 1666, 5, 467, 0, 0, 1666, 1686, 5, 321, 0, 0, 1667, 1668, 5, 438, 0, 0,
    1668, 1669, 5, 210, 0, 0, 1669, 1670, 5, 343, 0, 0, 1670, 1671, 5, 388, 0, 0, 1671,
    1672, 5, 237, 0, 0, 1672, 1686, 5, 321, 0, 0, 1673, 1674, 5, 438, 0, 0, 1674, 1675,
    5, 210, 0, 0, 1675, 1676, 5, 343, 0, 0, 1676, 1677, 5, 388, 0, 0, 1677, 1678, 5, 467,
    0, 0, 1678, 1686, 3, 306, 153, 0, 1679, 1680, 5, 438, 0, 0, 1680, 1681, 5, 210, 0,
    0, 1681, 1682, 5, 343, 0, 0, 1682, 1683, 5, 388, 0, 0, 1683, 1684, 5, 457, 0, 0, 1684,
    1686, 3, 306, 153, 0, 1685, 1661, 1, 0, 0, 0, 1685, 1667, 1, 0, 0, 0, 1685, 1673, 1,
    0, 0, 0, 1685, 1679, 1, 0, 0, 0, 1686, 249, 1, 0, 0, 0, 1687, 1688, 5, 105, 0, 0, 1688,
    1693, 3, 172, 86, 0, 1689, 1690, 5, 520, 0, 0, 1690, 1692, 3, 172, 86, 0, 1691, 1689,
    1, 0, 0, 0, 1692, 1695, 1, 0, 0, 0, 1693, 1691, 1, 0, 0, 0, 1693, 1694, 1, 0, 0, 0, 1694,
    251, 1, 0, 0, 0, 1695, 1693, 1, 0, 0, 0, 1696, 1697, 5, 292, 0, 0, 1697, 1698, 5, 27,
    0, 0, 1698, 1699, 3, 282, 141, 0, 1699, 1700, 3, 254, 127, 0, 1700, 1706, 1, 0, 0,
    0, 1701, 1702, 5, 322, 0, 0, 1702, 1703, 5, 27, 0, 0, 1703, 1704, 5, 538, 0, 0, 1704,
    1706, 3, 254, 127, 0, 1705, 1696, 1, 0, 0, 0, 1705, 1701, 1, 0, 0, 0, 1706, 253, 1,
    0, 0, 0, 1707, 1708, 5, 480, 0, 0, 1708, 1709, 5, 10, 0, 0, 1709, 1710, 5, 76, 0, 0,
    1710, 1711, 5, 321, 0, 0, 1711, 255, 1, 0, 0, 0, 1712, 1713, 5, 434, 0, 0, 1713, 1714,
    3, 282, 141, 0, 1714, 257, 1, 0, 0, 0, 1715, 1716, 3, 260, 130, 0, 1716, 259, 1, 0,
    0, 0, 1717, 1718, 6, 130, -1, 0, 1718, 1719, 5, 241, 0, 0, 1719, 1730, 3, 260, 130,
    6, 1720, 1721, 5, 133, 0, 0, 1721, 1722, 5, 516, 0, 0, 1722, 1723, 3, 158, 79, 0, 1723,
    1724, 5, 517, 0, 0, 1724, 1730, 1, 0, 0, 0, 1725, 1727, 3, 266, 133, 0, 1726, 1728,
    3, 262, 131, 0, 1727, 1726, 1, 0, 0, 0, 1727, 1728, 1, 0, 0, 0, 1728, 1730, 1, 0, 0,
    0, 1729, 1717, 1, 0, 0, 0, 1729, 1720, 1, 0, 0, 0, 1729, 1725, 1, 0, 0, 0, 1730, 1745,
    1, 0, 0, 0, 1731, 1732, 10, 3, 0, 0, 1732, 1733, 5, 10, 0, 0, 1733, 1744, 3, 260, 130,
    4, 1734, 1735, 10, 2, 0, 0, 1735, 1736, 5, 257, 0, 0, 1736, 1744, 3, 260, 130, 3, 1737,
    1738, 10, 1, 0, 0, 1738, 1740, 5, 184, 0, 0, 1739, 1741, 5, 241, 0, 0, 1740, 1739,
    1, 0, 0, 0, 1740, 1741, 1, 0, 0, 0, 1741, 1742, 1, 0, 0, 0, 1742, 1744, 7, 27, 0, 0, 1743,
    1731, 1, 0, 0, 0, 1743, 1734, 1, 0, 0, 0, 1743, 1737, 1, 0, 0, 0, 1744, 1747, 1, 0, 0,
    0, 1745, 1743, 1, 0, 0, 0, 1745, 1746, 1, 0, 0, 0, 1746, 261, 1, 0, 0, 0, 1747, 1745,
    1, 0, 0, 0, 1748, 1750, 5, 241, 0, 0, 1749, 1748, 1, 0, 0, 0, 1749, 1750, 1, 0, 0, 0,
    1750, 1751, 1, 0, 0, 0, 1751, 1753, 5, 27, 0, 0, 1752, 1754, 7, 28, 0, 0, 1753, 1752,
    1, 0, 0, 0, 1753, 1754, 1, 0, 0, 0, 1754, 1755, 1, 0, 0, 0, 1755, 1756, 3, 266, 133,
    0, 1756, 1757, 5, 10, 0, 0, 1757, 1758, 3, 266, 133, 0, 1758, 1816, 1, 0, 0, 0, 1759,
    1761, 5, 241, 0, 0, 1760, 1759, 1, 0, 0, 0, 1760, 1761, 1, 0, 0, 0, 1761, 1762, 1, 0,
    0, 0, 1762, 1763, 5, 170, 0, 0, 1763, 1764, 5, 516, 0, 0, 1764, 1769, 3, 258, 129,
    0, 1765, 1766, 5, 520, 0, 0, 1766, 1768, 3, 258, 129, 0, 1767, 1765, 1, 0, 0, 0, 1768,
    1771, 1, 0, 0, 0, 1769, 1767, 1, 0, 0, 0, 1769, 1770, 1, 0, 0, 0, 1770, 1772, 1, 0, 0,
    0, 1771, 1769, 1, 0, 0, 0, 1772, 1773, 5, 517, 0, 0, 1773, 1816, 1, 0, 0, 0, 1774, 1776,
    5, 241, 0, 0, 1775, 1774, 1, 0, 0, 0, 1775, 1776, 1, 0, 0, 0, 1776, 1777, 1, 0, 0, 0,
    1777, 1778, 5, 170, 0, 0, 1778, 1779, 5, 516, 0, 0, 1779, 1780, 3, 158, 79, 0, 1780,
    1781, 5, 517, 0, 0, 1781, 1816, 1, 0, 0, 0, 1782, 1783, 5, 133, 0, 0, 1783, 1784, 5,
    516, 0, 0, 1784, 1785, 3, 158, 79, 0, 1785, 1786, 5, 517, 0, 0, 1786, 1816, 1, 0, 0,
    0, 1787, 1789, 5, 241, 0, 0, 1788, 1787, 1, 0, 0, 0, 1788, 1789, 1, 0, 0, 0, 1789, 1790,
    1, 0, 0, 0, 1790, 1791, 5, 318, 0, 0, 1791, 1816, 3, 266, 133, 0, 1792, 1816, 3, 264,
    132, 0, 1793, 1795, 5, 184, 0, 0, 1794, 1796, 5, 241, 0, 0, 1795, 1794, 1, 0, 0, 0,
    1795, 1796, 1, 0, 0, 0, 1796, 1797, 1, 0, 0, 0, 1797, 1816, 7, 27, 0, 0, 1798, 1800,
    5, 184, 0, 0, 1799, 1801, 5, 241, 0, 0, 1800, 1799, 1, 0, 0, 0, 1800, 1801, 1, 0, 0,
    0, 1801, 1802, 1, 0, 0, 0, 1802, 1803, 5, 113, 0, 0, 1803, 1804, 5, 151, 0, 0, 1804,
    1816, 3, 266, 133, 0, 1805, 1807, 5, 241, 0, 0, 1806, 1805, 1, 0, 0, 0, 1806, 1807,
    1, 0, 0, 0, 1807, 1808, 1, 0, 0, 0, 1808, 1809, 5, 342, 0, 0, 1809, 1810, 5, 388, 0,
    0, 1810, 1813, 3, 266, 133, 0, 1811, 1812, 5, 127, 0, 0, 1812, 1814, 3, 358, 179,
    0, 1813, 1811, 1, 0, 0, 0, 1813, 1814, 1, 0, 0, 0, 1814, 1816, 1, 0, 0, 0, 1815, 1749,
    1, 0, 0, 0, 1815, 1760, 1, 0, 0, 0, 1815, 1775, 1, 0, 0, 0, 1815, 1782, 1, 0, 0, 0, 1815,
    1788, 1, 0, 0, 0, 1815, 1792, 1, 0, 0, 0, 1815, 1793, 1, 0, 0, 0, 1815, 1798, 1, 0, 0,
    0, 1815, 1806, 1, 0, 0, 0, 1816, 263, 1, 0, 0, 0, 1817, 1819, 5, 241, 0, 0, 1818, 1817,
    1, 0, 0, 0, 1818, 1819, 1, 0, 0, 0, 1819, 1820, 1, 0, 0, 0, 1820, 1821, 5, 202, 0, 0,
    1821, 1835, 7, 29, 0, 0, 1822, 1823, 5, 516, 0, 0, 1823, 1836, 5, 517, 0, 0, 1824,
    1825, 5, 516, 0, 0, 1825, 1830, 3, 258, 129, 0, 1826, 1827, 5, 520, 0, 0, 1827, 1829,
    3, 258, 129, 0, 1828, 1826, 1, 0, 0, 0, 1829, 1832, 1, 0, 0, 0, 1830, 1828, 1, 0, 0,
    0, 1830, 1831, 1, 0, 0, 0, 1831, 1833, 1, 0, 0, 0, 1832, 1830, 1, 0, 0, 0, 1833, 1834,
    5, 517, 0, 0, 1834, 1836, 1, 0, 0, 0, 1835, 1822, 1, 0, 0, 0, 1835, 1824, 1, 0, 0, 0,
    1836, 1847, 1, 0, 0, 0, 1837, 1839, 5, 241, 0, 0, 1838, 1837, 1, 0, 0, 0, 1838, 1839,
    1, 0, 0, 0, 1839, 1840, 1, 0, 0, 0, 1840, 1841, 5, 202, 0, 0, 1841, 1844, 3, 266, 133,
    0, 1842, 1843, 5, 127, 0, 0, 1843, 1845, 3, 358, 179, 0, 1844, 1842, 1, 0, 0, 0, 1844,
    1845, 1, 0, 0, 0, 1845, 1847, 1, 0, 0, 0, 1846, 1818, 1, 0, 0, 0, 1846, 1838, 1, 0, 0,
    0, 1847, 265, 1, 0, 0, 0, 1848, 1849, 6, 133, -1, 0, 1849, 1853, 3, 268, 134, 0, 1850,
    1851, 7, 30, 0, 0, 1851, 1853, 3, 266, 133, 7, 1852, 1848, 1, 0, 0, 0, 1852, 1850,
    1, 0, 0, 0, 1853, 1875, 1, 0, 0, 0, 1854, 1855, 10, 6, 0, 0, 1855, 1856, 7, 31, 0, 0,
    1856, 1874, 3, 266, 133, 7, 1857, 1858, 10, 5, 0, 0, 1858, 1859, 7, 32, 0, 0, 1859,
    1874, 3, 266, 133, 6, 1860, 1861, 10, 4, 0, 0, 1861, 1862, 5, 511, 0, 0, 1862, 1874,
    3, 266, 133, 5, 1863, 1864, 10, 3, 0, 0, 1864, 1865, 5, 512, 0, 0, 1865, 1874, 3, 266,
    133, 4, 1866, 1867, 10, 2, 0, 0, 1867, 1868, 5, 510, 0, 0, 1868, 1874, 3, 266, 133,
    3, 1869, 1870, 10, 1, 0, 0, 1870, 1871, 3, 346, 173, 0, 1871, 1872, 3, 266, 133, 2,
    1872, 1874, 1, 0, 0, 0, 1873, 1854, 1, 0, 0, 0, 1873, 1857, 1, 0, 0, 0, 1873, 1860,
    1, 0, 0, 0, 1873, 1863, 1, 0, 0, 0, 1873, 1866, 1, 0, 0, 0, 1873, 1869, 1, 0, 0, 0, 1874,
    1877, 1, 0, 0, 0, 1875, 1873, 1, 0, 0, 0, 1875, 1876, 1, 0, 0, 0, 1876, 267, 1, 0, 0,
    0, 1877, 1875, 1, 0, 0, 0, 1878, 1879, 6, 134, -1, 0, 1879, 1881, 5, 40, 0, 0, 1880,
    1882, 3, 310, 155, 0, 1881, 1880, 1, 0, 0, 0, 1882, 1883, 1, 0, 0, 0, 1883, 1881, 1,
    0, 0, 0, 1883, 1884, 1, 0, 0, 0, 1884, 1887, 1, 0, 0, 0, 1885, 1886, 5, 120, 0, 0, 1886,
    1888, 3, 258, 129, 0, 1887, 1885, 1, 0, 0, 0, 1887, 1888, 1, 0, 0, 0, 1888, 1889, 1,
    0, 0, 0, 1889, 1890, 5, 122, 0, 0, 1890, 1971, 1, 0, 0, 0, 1891, 1892, 5, 40, 0, 0, 1892,
    1894, 3, 258, 129, 0, 1893, 1895, 3, 310, 155, 0, 1894, 1893, 1, 0, 0, 0, 1895, 1896,
    1, 0, 0, 0, 1896, 1894, 1, 0, 0, 0, 1896, 1897, 1, 0, 0, 0, 1897, 1900, 1, 0, 0, 0, 1898,
    1899, 5, 120, 0, 0, 1899, 1901, 3, 258, 129, 0, 1900, 1898, 1, 0, 0, 0, 1900, 1901,
    1, 0, 0, 0, 1901, 1902, 1, 0, 0, 0, 1902, 1903, 5, 122, 0, 0, 1903, 1971, 1, 0, 0, 0,
    1904, 1905, 5, 41, 0, 0, 1905, 1906, 5, 516, 0, 0, 1906, 1907, 3, 258, 129, 0, 1907,
    1908, 5, 17, 0, 0, 1908, 1909, 3, 56, 28, 0, 1909, 1910, 5, 517, 0, 0, 1910, 1971,
    1, 0, 0, 0, 1911, 1912, 5, 457, 0, 0, 1912, 1913, 5, 516, 0, 0, 1913, 1916, 3, 258,
    129, 0, 1914, 1915, 5, 461, 0, 0, 1915, 1917, 5, 476, 0, 0, 1916, 1914, 1, 0, 0, 0,
    1916, 1917, 1, 0, 0, 0, 1917, 1918, 1, 0, 0, 0, 1918, 1919, 5, 517, 0, 0, 1919, 1971,
    1, 0, 0, 0, 1920, 1921, 5, 467, 0, 0, 1921, 1922, 5, 516, 0, 0, 1922, 1925, 3, 258,
    129, 0, 1923, 1924, 5, 461, 0, 0, 1924, 1926, 5, 476, 0, 0, 1925, 1923, 1, 0, 0, 0,
    1925, 1926, 1, 0, 0, 0, 1926, 1927, 1, 0, 0, 0, 1927, 1928, 5, 517, 0, 0, 1928, 1971,
    1, 0, 0, 0, 1929, 1930, 5, 281, 0, 0, 1930, 1931, 5, 516, 0, 0, 1931, 1932, 3, 266,
    133, 0, 1932, 1933, 5, 170, 0, 0, 1933, 1934, 3, 266, 133, 0, 1934, 1935, 5, 517,
    0, 0, 1935, 1971, 1, 0, 0, 0, 1936, 1971, 3, 354, 177, 0, 1937, 1971, 5, 527, 0, 0,
    1938, 1939, 3, 328, 164, 0, 1939, 1940, 5, 513, 0, 0, 1940, 1941, 5, 527, 0, 0, 1941,
    1971, 1, 0, 0, 0, 1942, 1943, 5, 516, 0, 0, 1943, 1944, 3, 158, 79, 0, 1944, 1945,
    5, 517, 0, 0, 1945, 1971, 1, 0, 0, 0, 1946, 1947, 3, 272, 136, 0, 1947, 1959, 5, 516,
    0, 0, 1948, 1950, 3, 364, 182, 0, 1949, 1948, 1, 0, 0, 0, 1949, 1950, 1, 0, 0, 0, 1950,
    1951, 1, 0, 0, 0, 1951, 1956, 3, 274, 137, 0, 1952, 1953, 5, 520, 0, 0, 1953, 1955,
    3, 274, 137, 0, 1954, 1952, 1, 0, 0, 0, 1955, 1958, 1, 0, 0, 0, 1956, 1954, 1, 0, 0,
    0, 1956, 1957, 1, 0, 0, 0, 1957, 1960, 1, 0, 0, 0, 1958, 1956, 1, 0, 0, 0, 1959, 1949,
    1, 0, 0, 0, 1959, 1960, 1, 0, 0, 0, 1960, 1961, 1, 0, 0, 0, 1961, 1962, 5, 517, 0, 0,
    1962, 1971, 1, 0, 0, 0, 1963, 1971, 3, 304, 152, 0, 1964, 1971, 3, 276, 138, 0, 1965,
    1966, 5, 516, 0, 0, 1966, 1967, 3, 258, 129, 0, 1967, 1968, 5, 517, 0, 0, 1968, 1971,
    1, 0, 0, 0, 1969, 1971, 5, 85, 0, 0, 1970, 1878, 1, 0, 0, 0, 1970, 1891, 1, 0, 0, 0, 1970,
    1904, 1, 0, 0, 0, 1970, 1911, 1, 0, 0, 0, 1970, 1920, 1, 0, 0, 0, 1970, 1929, 1, 0, 0,
    0, 1970, 1936, 1, 0, 0, 0, 1970, 1937, 1, 0, 0, 0, 1970, 1938, 1, 0, 0, 0, 1970, 1942,
    1, 0, 0, 0, 1970, 1946, 1, 0, 0, 0, 1970, 1963, 1, 0, 0, 0, 1970, 1964, 1, 0, 0, 0, 1970,
    1965, 1, 0, 0, 0, 1970, 1969, 1, 0, 0, 0, 1971, 1979, 1, 0, 0, 0, 1972, 1973, 10, 5,
    0, 0, 1973, 1974, 5, 514, 0, 0, 1974, 1975, 3, 266, 133, 0, 1975, 1976, 5, 515, 0,
    0, 1976, 1978, 1, 0, 0, 0, 1977, 1972, 1, 0, 0, 0, 1978, 1981, 1, 0, 0, 0, 1979, 1977,
    1, 0, 0, 0, 1979, 1980, 1, 0, 0, 0, 1980, 269, 1, 0, 0, 0, 1981, 1979, 1, 0, 0, 0, 1982,
    1983, 3, 328, 164, 0, 1983, 271, 1, 0, 0, 0, 1984, 1987, 3, 372, 186, 0, 1985, 1987,
    3, 328, 164, 0, 1986, 1984, 1, 0, 0, 0, 1986, 1985, 1, 0, 0, 0, 1987, 273, 1, 0, 0, 0,
    1988, 1993, 3, 370, 185, 0, 1989, 1993, 3, 368, 184, 0, 1990, 1993, 3, 366, 183,
    0, 1991, 1993, 3, 258, 129, 0, 1992, 1988, 1, 0, 0, 0, 1992, 1989, 1, 0, 0, 0, 1992,
    1990, 1, 0, 0, 0, 1992, 1991, 1, 0, 0, 0, 1993, 275, 1, 0, 0, 0, 1994, 1995, 3, 328,
    164, 0, 1995, 277, 1, 0, 0, 0, 1996, 1997, 3, 304, 152, 0, 1997, 279, 1, 0, 0, 0, 1998,
    2001, 3, 304, 152, 0, 1999, 2001, 3, 276, 138, 0, 2000, 1998, 1, 0, 0, 0, 2000, 1999,
    1, 0, 0, 0, 2001, 281, 1, 0, 0, 0, 2002, 2005, 5, 182, 0, 0, 2003, 2006, 3, 284, 142,
    0, 2004, 2006, 3, 288, 144, 0, 2005, 2003, 1, 0, 0, 0, 2005, 2004, 1, 0, 0, 0, 2005,
    2006, 1, 0, 0, 0, 2006, 283, 1, 0, 0, 0, 2007, 2009, 3, 286, 143, 0, 2008, 2010, 3,
    290, 145, 0, 2009, 2008, 1, 0, 0, 0, 2009, 2010, 1, 0, 0, 0, 2010, 285, 1, 0, 0, 0, 2011,
    2012, 3, 292, 146, 0, 2012, 2013, 3, 368, 184, 0, 2013, 2015, 1, 0, 0, 0, 2014, 2011,
    1, 0, 0, 0, 2015, 2016, 1, 0, 0, 0, 2016, 2014, 1, 0, 0, 0, 2016, 2017, 1, 0, 0, 0, 2017,
    287, 1, 0, 0, 0, 2018, 2021, 3, 290, 145, 0, 2019, 2022, 3, 286, 143, 0, 2020, 2022,
    3, 290, 145, 0, 2021, 2019, 1, 0, 0, 0, 2021, 2020, 1, 0, 0, 0, 2021, 2022, 1, 0, 0,
    0, 2022, 289, 1, 0, 0, 0, 2023, 2024, 3, 292, 146, 0, 2024, 2025, 3, 368, 184, 0, 2025,
    2026, 5, 388, 0, 0, 2026, 2027, 3, 368, 184, 0, 2027, 291, 1, 0, 0, 0, 2028, 2030,
    7, 33, 0, 0, 2029, 2028, 1, 0, 0, 0, 2029, 2030, 1, 0, 0, 0, 2030, 2031, 1, 0, 0, 0, 2031,
    2034, 7, 34, 0, 0, 2032, 2034, 5, 537, 0, 0, 2033, 2029, 1, 0, 0, 0, 2033, 2032, 1,
    0, 0, 0, 2034, 293, 1, 0, 0, 0, 2035, 2037, 5, 17, 0, 0, 2036, 2035, 1, 0, 0, 0, 2036,
    2037, 1, 0, 0, 0, 2037, 2038, 1, 0, 0, 0, 2038, 2040, 3, 304, 152, 0, 2039, 2041, 3,
    300, 150, 0, 2040, 2039, 1, 0, 0, 0, 2040, 2041, 1, 0, 0, 0, 2041, 295, 1, 0, 0, 0, 2042,
    2043, 3, 304, 152, 0, 2043, 2044, 3, 298, 149, 0, 2044, 297, 1, 0, 0, 0, 2045, 2046,
    5, 221, 0, 0, 2046, 2048, 3, 304, 152, 0, 2047, 2045, 1, 0, 0, 0, 2048, 2049, 1, 0,
    0, 0, 2049, 2047, 1, 0, 0, 0, 2049, 2050, 1, 0, 0, 0, 2050, 2053, 1, 0, 0, 0, 2051, 2053,
    1, 0, 0, 0, 2052, 2047, 1, 0, 0, 0, 2052, 2051, 1, 0, 0, 0, 2053, 299, 1, 0, 0, 0, 2054,
    2055, 5, 516, 0, 0, 2055, 2056, 3, 302, 151, 0, 2056, 2057, 5, 517, 0, 0, 2057, 301,
    1, 0, 0, 0, 2058, 2063, 3, 304, 152, 0, 2059, 2060, 5, 520, 0, 0, 2060, 2062, 3, 304,
    152, 0, 2061, 2059, 1, 0, 0, 0, 2062, 2065, 1, 0, 0, 0, 2063, 2061, 1, 0, 0, 0, 2063,
    2064, 1, 0, 0, 0, 2064, 303, 1, 0, 0, 0, 2065, 2063, 1, 0, 0, 0, 2066, 2070, 3, 306,
    153, 0, 2067, 2070, 3, 308, 154, 0, 2068, 2070, 3, 374, 187, 0, 2069, 2066, 1, 0,
    0, 0, 2069, 2067, 1, 0, 0, 0, 2069, 2068, 1, 0, 0, 0, 2070, 305, 1, 0, 0, 0, 2071, 2072,
    7, 35, 0, 0, 2072, 307, 1, 0, 0, 0, 2073, 2074, 5, 537, 0, 0, 2074, 309, 1, 0, 0, 0, 2075,
    2076, 5, 428, 0, 0, 2076, 2077, 3, 258, 129, 0, 2077, 2078, 5, 376, 0, 0, 2078, 2079,
    3, 258, 129, 0, 2079, 311, 1, 0, 0, 0, 2080, 2081, 3, 304, 152, 0, 2081, 313, 1, 0,
    0, 0, 2082, 2083, 3, 304, 152, 0, 2083, 315, 1, 0, 0, 0, 2084, 2087, 3, 304, 152, 0,
    2085, 2086, 5, 513, 0, 0, 2086, 2088, 3, 304, 152, 0, 2087, 2085, 1, 0, 0, 0, 2087,
    2088, 1, 0, 0, 0, 2088, 317, 1, 0, 0, 0, 2089, 2092, 3, 304, 152, 0, 2090, 2091, 5,
    513, 0, 0, 2091, 2093, 3, 304, 152, 0, 2092, 2090, 1, 0, 0, 0, 2092, 2093, 1, 0, 0,
    0, 2093, 319, 1, 0, 0, 0, 2094, 2097, 3, 304, 152, 0, 2095, 2096, 5, 513, 0, 0, 2096,
    2098, 3, 304, 152, 0, 2097, 2095, 1, 0, 0, 0, 2097, 2098, 1, 0, 0, 0, 2098, 2107, 1,
    0, 0, 0, 2099, 2100, 3, 304, 152, 0, 2100, 2101, 5, 513, 0, 0, 2101, 2104, 3, 304,
    152, 0, 2102, 2103, 5, 513, 0, 0, 2103, 2105, 3, 304, 152, 0, 2104, 2102, 1, 0, 0,
    0, 2104, 2105, 1, 0, 0, 0, 2105, 2107, 1, 0, 0, 0, 2106, 2094, 1, 0, 0, 0, 2106, 2099,
    1, 0, 0, 0, 2107, 321, 1, 0, 0, 0, 2108, 2111, 3, 304, 152, 0, 2109, 2110, 5, 513, 0,
    0, 2110, 2112, 3, 304, 152, 0, 2111, 2109, 1, 0, 0, 0, 2111, 2112, 1, 0, 0, 0, 2112,
    2121, 1, 0, 0, 0, 2113, 2114, 3, 304, 152, 0, 2114, 2115, 5, 513, 0, 0, 2115, 2118,
    3, 304, 152, 0, 2116, 2117, 5, 513, 0, 0, 2117, 2119, 3, 304, 152, 0, 2118, 2116,
    1, 0, 0, 0, 2118, 2119, 1, 0, 0, 0, 2119, 2121, 1, 0, 0, 0, 2120, 2108, 1, 0, 0, 0, 2120,
    2113, 1, 0, 0, 0, 2121, 323, 1, 0, 0, 0, 2122, 2125, 3, 304, 152, 0, 2123, 2124, 5,
    513, 0, 0, 2124, 2126, 3, 304, 152, 0, 2125, 2123, 1, 0, 0, 0, 2125, 2126, 1, 0, 0,
    0, 2126, 2135, 1, 0, 0, 0, 2127, 2128, 3, 304, 152, 0, 2128, 2129, 5, 513, 0, 0, 2129,
    2132, 3, 304, 152, 0, 2130, 2131, 5, 513, 0, 0, 2131, 2133, 3, 304, 152, 0, 2132,
    2130, 1, 0, 0, 0, 2132, 2133, 1, 0, 0, 0, 2133, 2135, 1, 0, 0, 0, 2134, 2122, 1, 0, 0,
    0, 2134, 2127, 1, 0, 0, 0, 2135, 325, 1, 0, 0, 0, 2136, 2139, 3, 304, 152, 0, 2137,
    2138, 5, 513, 0, 0, 2138, 2140, 3, 304, 152, 0, 2139, 2137, 1, 0, 0, 0, 2139, 2140,
    1, 0, 0, 0, 2140, 2149, 1, 0, 0, 0, 2141, 2142, 3, 304, 152, 0, 2142, 2143, 5, 513,
    0, 0, 2143, 2146, 3, 304, 152, 0, 2144, 2145, 5, 513, 0, 0, 2145, 2147, 3, 304, 152,
    0, 2146, 2144, 1, 0, 0, 0, 2146, 2147, 1, 0, 0, 0, 2147, 2149, 1, 0, 0, 0, 2148, 2136,
    1, 0, 0, 0, 2148, 2141, 1, 0, 0, 0, 2149, 327, 1, 0, 0, 0, 2150, 2155, 3, 304, 152, 0,
    2151, 2152, 5, 513, 0, 0, 2152, 2154, 3, 304, 152, 0, 2153, 2151, 1, 0, 0, 0, 2154,
    2157, 1, 0, 0, 0, 2155, 2156, 1, 0, 0, 0, 2155, 2153, 1, 0, 0, 0, 2156, 329, 1, 0, 0,
    0, 2157, 2155, 1, 0, 0, 0, 2158, 2159, 5, 433, 0, 0, 2159, 2160, 3, 336, 168, 0, 2160,
    331, 1, 0, 0, 0, 2161, 2162, 5, 167, 0, 0, 2162, 2163, 5, 241, 0, 0, 2163, 2164, 5,
    133, 0, 0, 2164, 333, 1, 0, 0, 0, 2165, 2166, 5, 167, 0, 0, 2166, 2167, 5, 133, 0, 0,
    2167, 335, 1, 0, 0, 0, 2168, 2169, 5, 516, 0, 0, 2169, 2174, 3, 338, 169, 0, 2170,
    2171, 5, 520, 0, 0, 2171, 2173, 3, 338, 169, 0, 2172, 2170, 1, 0, 0, 0, 2173, 2176,
    1, 0, 0, 0, 2174, 2172, 1, 0, 0, 0, 2174, 2175, 1, 0, 0, 0, 2175, 2177, 1, 0, 0, 0, 2176,
    2174, 1, 0, 0, 0, 2177, 2178, 5, 517, 0, 0, 2178, 337, 1, 0, 0, 0, 2179, 2184, 3, 340,
    170, 0, 2180, 2182, 5, 505, 0, 0, 2181, 2180, 1, 0, 0, 0, 2181, 2182, 1, 0, 0, 0, 2182,
    2183, 1, 0, 0, 0, 2183, 2185, 3, 342, 171, 0, 2184, 2181, 1, 0, 0, 0, 2184, 2185, 1,
    0, 0, 0, 2185, 339, 1, 0, 0, 0, 2186, 2190, 3, 304, 152, 0, 2187, 2190, 3, 276, 138,
    0, 2188, 2190, 5, 537, 0, 0, 2189, 2186, 1, 0, 0, 0, 2189, 2187, 1, 0, 0, 0, 2189, 2188,
    1, 0, 0, 0, 2190, 341, 1, 0, 0, 0, 2191, 2196, 5, 538, 0, 0, 2192, 2196, 5, 539, 0, 0,
    2193, 2196, 3, 362, 181, 0, 2194, 2196, 5, 537, 0, 0, 2195, 2191, 1, 0, 0, 0, 2195,
    2192, 1, 0, 0, 0, 2195, 2193, 1, 0, 0, 0, 2195, 2194, 1, 0, 0, 0, 2196, 343, 1, 0, 0,
    0, 2197, 2204, 5, 10, 0, 0, 2198, 2199, 5, 511, 0, 0, 2199, 2204, 5, 511, 0, 0, 2200,
    2204, 5, 257, 0, 0, 2201, 2202, 5, 510, 0, 0, 2202, 2204, 5, 510, 0, 0, 2203, 2197,
    1, 0, 0, 0, 2203, 2198, 1, 0, 0, 0, 2203, 2200, 1, 0, 0, 0, 2203, 2201, 1, 0, 0, 0, 2204,
    345, 1, 0, 0, 0, 2205, 2220, 5, 505, 0, 0, 2206, 2220, 5, 506, 0, 0, 2207, 2220, 5,
    507, 0, 0, 2208, 2209, 5, 507, 0, 0, 2209, 2220, 5, 505, 0, 0, 2210, 2211, 5, 506,
    0, 0, 2211, 2220, 5, 505, 0, 0, 2212, 2213, 5, 507, 0, 0, 2213, 2220, 5, 506, 0, 0,
    2214, 2215, 5, 508, 0, 0, 2215, 2220, 5, 505, 0, 0, 2216, 2217, 5, 507, 0, 0, 2217,
    2218, 5, 505, 0, 0, 2218, 2220, 5, 506, 0, 0, 2219, 2205, 1, 0, 0, 0, 2219, 2206, 1,
    0, 0, 0, 2219, 2207, 1, 0, 0, 0, 2219, 2208, 1, 0, 0, 0, 2219, 2210, 1, 0, 0, 0, 2219,
    2212, 1, 0, 0, 0, 2219, 2214, 1, 0, 0, 0, 2219, 2216, 1, 0, 0, 0, 2220, 347, 1, 0, 0,
    0, 2221, 2222, 5, 507, 0, 0, 2222, 2229, 5, 507, 0, 0, 2223, 2224, 5, 506, 0, 0, 2224,
    2229, 5, 506, 0, 0, 2225, 2229, 5, 511, 0, 0, 2226, 2229, 5, 512, 0, 0, 2227, 2229,
    5, 510, 0, 0, 2228, 2221, 1, 0, 0, 0, 2228, 2223, 1, 0, 0, 0, 2228, 2225, 1, 0, 0, 0,
    2228, 2226, 1, 0, 0, 0, 2228, 2227, 1, 0, 0, 0, 2229, 349, 1, 0, 0, 0, 2230, 2231, 7,
    36, 0, 0, 2231, 351, 1, 0, 0, 0, 2232, 2233, 7, 37, 0, 0, 2233, 353, 1, 0, 0, 0, 2234,
    2249, 3, 282, 141, 0, 2235, 2249, 3, 356, 178, 0, 2236, 2249, 3, 358, 179, 0, 2237,
    2239, 5, 529, 0, 0, 2238, 2237, 1, 0, 0, 0, 2238, 2239, 1, 0, 0, 0, 2239, 2240, 1, 0,
    0, 0, 2240, 2249, 3, 360, 180, 0, 2241, 2249, 3, 362, 181, 0, 2242, 2249, 5, 539,
    0, 0, 2243, 2249, 5, 540, 0, 0, 2244, 2246, 5, 241, 0, 0, 2245, 2244, 1, 0, 0, 0, 2245,
    2246, 1, 0, 0, 0, 2246, 2247, 1, 0, 0, 0, 2247, 2249, 5, 244, 0, 0, 2248, 2234, 1, 0,
    0, 0, 2248, 2235, 1, 0, 0, 0, 2248, 2236, 1, 0, 0, 0, 2248, 2238, 1, 0, 0, 0, 2248, 2241,
    1, 0, 0, 0, 2248, 2242, 1, 0, 0, 0, 2248, 2243, 1, 0, 0, 0, 2248, 2245, 1, 0, 0, 0, 2249,
    355, 1, 0, 0, 0, 2250, 2251, 3, 366, 183, 0, 2251, 2252, 3, 358, 179, 0, 2252, 357,
    1, 0, 0, 0, 2253, 2254, 5, 537, 0, 0, 2254, 359, 1, 0, 0, 0, 2255, 2256, 5, 538, 0, 0,
    2256, 361, 1, 0, 0, 0, 2257, 2258, 7, 38, 0, 0, 2258, 363, 1, 0, 0, 0, 2259, 2260, 7,
    39, 0, 0, 2260, 365, 1, 0, 0, 0, 2261, 2262, 7, 40, 0, 0, 2262, 367, 1, 0, 0, 0, 2263,
    2264, 7, 41, 0, 0, 2264, 369, 1, 0, 0, 0, 2265, 2266, 7, 42, 0, 0, 2266, 371, 1, 0, 0,
    0, 2267, 2268, 7, 43, 0, 0, 2268, 373, 1, 0, 0, 0, 2269, 2270, 7, 44, 0, 0, 2270, 375,
    1, 0, 0, 0, 270, 379, 386, 389, 403, 421, 425, 434, 439, 446, 457, 466, 478, 481,
    488, 491, 499, 503, 508, 511, 518, 526, 530, 542, 550, 554, 586, 589, 594, 598,
    602, 606, 615, 620, 624, 628, 632, 635, 639, 644, 650, 655, 660, 663, 667, 671,
    679, 687, 691, 695, 699, 703, 707, 711, 715, 719, 721, 731, 739, 763, 770, 776,
    779, 782, 792, 795, 803, 815, 839, 851, 856, 860, 868, 872, 878, 888, 892, 898,
    902, 906, 909, 918, 922, 929, 932, 942, 950, 958, 962, 977, 996, 1007, 1011, 1018,
    1023, 1029, 1033, 1040, 1044, 1048, 1052, 1060, 1064, 1069, 1075, 1081, 1084,
    1088, 1099, 1108, 1122, 1134, 1149, 1152, 1156, 1159, 1161, 1166, 1170, 1173,
    1177, 1186, 1195, 1205, 1210, 1221, 1224, 1227, 1230, 1233, 1239, 1243, 1251,
    1254, 1259, 1262, 1266, 1269, 1271, 1285, 1296, 1301, 1309, 1312, 1315, 1320,
    1322, 1324, 1329, 1332, 1336, 1339, 1342, 1346, 1349, 1352, 1364, 1371, 1382,
    1409, 1431, 1444, 1456, 1469, 1481, 1493, 1499, 1526, 1534, 1538, 1541, 1544,
    1551, 1554, 1557, 1560, 1563, 1566, 1571, 1574, 1583, 1588, 1592, 1597, 1606,
    1625, 1633, 1641, 1645, 1649, 1659, 1685, 1693, 1705, 1727, 1729, 1740, 1743,
    1745, 1749, 1753, 1760, 1769, 1775, 1788, 1795, 1800, 1806, 1813, 1815, 1818,
    1830, 1835, 1838, 1844, 1846, 1852, 1873, 1875, 1883, 1887, 1896, 1900, 1916,
    1925, 1949, 1956, 1959, 1970, 1979, 1986, 1992, 2000, 2005, 2009, 2016, 2021,
    2029, 2033, 2036, 2040, 2049, 2052, 2063, 2069, 2087, 2092, 2097, 2104, 2106,
    2111, 2118, 2120, 2125, 2132, 2134, 2139, 2146, 2148, 2155, 2174, 2181, 2184,
    2189, 2195, 2203, 2219, 2228, 2238, 2245, 2248
];
FlinkSqlParser.vocabulary = new antlr.Vocabulary(FlinkSqlParser.literalNames, FlinkSqlParser.symbolicNames, []);
FlinkSqlParser.decisionsToDFA = FlinkSqlParser._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
export { FlinkSqlParser };
export class ProgramContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() {
        return this.getToken(FlinkSqlParser.EOF, 0);
    }
    singleStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleStatementContext);
        }
        return this.getRuleContext(i, SingleStatementContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_program;
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
export class SingleStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    sqlStatement() {
        return this.getRuleContext(0, SqlStatementContext);
    }
    SEMICOLON() {
        return this.getToken(FlinkSqlParser.SEMICOLON, 0);
    }
    emptyStatement() {
        return this.getRuleContext(0, EmptyStatementContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_singleStatement;
    }
    enterRule(listener) {
        if (listener.enterSingleStatement) {
            listener.enterSingleStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSingleStatement) {
            listener.exitSingleStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSingleStatement) {
            return visitor.visitSingleStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SqlStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ddlStatement() {
        return this.getRuleContext(0, DdlStatementContext);
    }
    dmlStatement() {
        return this.getRuleContext(0, DmlStatementContext);
    }
    describeStatement() {
        return this.getRuleContext(0, DescribeStatementContext);
    }
    explainStatement() {
        return this.getRuleContext(0, ExplainStatementContext);
    }
    useStatement() {
        return this.getRuleContext(0, UseStatementContext);
    }
    showStatememt() {
        return this.getRuleContext(0, ShowStatememtContext);
    }
    loadStatement() {
        return this.getRuleContext(0, LoadStatementContext);
    }
    unloadStatememt() {
        return this.getRuleContext(0, UnloadStatememtContext);
    }
    setStatememt() {
        return this.getRuleContext(0, SetStatememtContext);
    }
    resetStatememt() {
        return this.getRuleContext(0, ResetStatememtContext);
    }
    jarStatememt() {
        return this.getRuleContext(0, JarStatememtContext);
    }
    dtAddStatement() {
        return this.getRuleContext(0, DtAddStatementContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_sqlStatement;
    }
    enterRule(listener) {
        if (listener.enterSqlStatement) {
            listener.enterSqlStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSqlStatement) {
            listener.exitSqlStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSqlStatement) {
            return visitor.visitSqlStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class EmptyStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SEMICOLON() {
        return this.getToken(FlinkSqlParser.SEMICOLON, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_emptyStatement;
    }
    enterRule(listener) {
        if (listener.enterEmptyStatement) {
            listener.enterEmptyStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEmptyStatement) {
            listener.exitEmptyStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitEmptyStatement) {
            return visitor.visitEmptyStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DdlStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    createTable() {
        return this.getRuleContext(0, CreateTableContext);
    }
    createDatabase() {
        return this.getRuleContext(0, CreateDatabaseContext);
    }
    createView() {
        return this.getRuleContext(0, CreateViewContext);
    }
    createFunction() {
        return this.getRuleContext(0, CreateFunctionContext);
    }
    createCatalog() {
        return this.getRuleContext(0, CreateCatalogContext);
    }
    alterTable() {
        return this.getRuleContext(0, AlterTableContext);
    }
    alertView() {
        return this.getRuleContext(0, AlertViewContext);
    }
    alterDatabase() {
        return this.getRuleContext(0, AlterDatabaseContext);
    }
    alterFunction() {
        return this.getRuleContext(0, AlterFunctionContext);
    }
    dropCatalog() {
        return this.getRuleContext(0, DropCatalogContext);
    }
    dropTable() {
        return this.getRuleContext(0, DropTableContext);
    }
    dropDatabase() {
        return this.getRuleContext(0, DropDatabaseContext);
    }
    dropView() {
        return this.getRuleContext(0, DropViewContext);
    }
    dropFunction() {
        return this.getRuleContext(0, DropFunctionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_ddlStatement;
    }
    enterRule(listener) {
        if (listener.enterDdlStatement) {
            listener.enterDdlStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDdlStatement) {
            listener.exitDdlStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDdlStatement) {
            return visitor.visitDdlStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DmlStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    insertStatement() {
        return this.getRuleContext(0, InsertStatementContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_dmlStatement;
    }
    enterRule(listener) {
        if (listener.enterDmlStatement) {
            listener.enterDmlStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDmlStatement) {
            listener.exitDmlStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDmlStatement) {
            return visitor.visitDmlStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DescribeStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    tablePath() {
        return this.getRuleContext(0, TablePathContext);
    }
    KW_DESCRIBE() {
        return this.getToken(FlinkSqlParser.KW_DESCRIBE, 0);
    }
    KW_DESC() {
        return this.getToken(FlinkSqlParser.KW_DESC, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_describeStatement;
    }
    enterRule(listener) {
        if (listener.enterDescribeStatement) {
            listener.enterDescribeStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDescribeStatement) {
            listener.exitDescribeStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDescribeStatement) {
            return visitor.visitDescribeStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExplainStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_EXPLAIN() {
        return this.getToken(FlinkSqlParser.KW_EXPLAIN, 0);
    }
    dmlStatement() {
        return this.getRuleContext(0, DmlStatementContext);
    }
    insertSimpleStatement() {
        return this.getRuleContext(0, InsertSimpleStatementContext);
    }
    insertMulStatement() {
        return this.getRuleContext(0, InsertMulStatementContext);
    }
    explainDetails() {
        return this.getRuleContext(0, ExplainDetailsContext);
    }
    KW_PLAN() {
        return this.getToken(FlinkSqlParser.KW_PLAN, 0);
    }
    KW_FOR() {
        return this.getToken(FlinkSqlParser.KW_FOR, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_explainStatement;
    }
    enterRule(listener) {
        if (listener.enterExplainStatement) {
            listener.enterExplainStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExplainStatement) {
            listener.exitExplainStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExplainStatement) {
            return visitor.visitExplainStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExplainDetailsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    explainDetail(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExplainDetailContext);
        }
        return this.getRuleContext(i, ExplainDetailContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_explainDetails;
    }
    enterRule(listener) {
        if (listener.enterExplainDetails) {
            listener.enterExplainDetails(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExplainDetails) {
            listener.exitExplainDetails(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExplainDetails) {
            return visitor.visitExplainDetails(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExplainDetailContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CHANGELOG_MODE() {
        return this.getToken(FlinkSqlParser.KW_CHANGELOG_MODE, 0);
    }
    KW_JSON_EXECUTION_PLAN() {
        return this.getToken(FlinkSqlParser.KW_JSON_EXECUTION_PLAN, 0);
    }
    KW_ESTIMATED_COST() {
        return this.getToken(FlinkSqlParser.KW_ESTIMATED_COST, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_explainDetail;
    }
    enterRule(listener) {
        if (listener.enterExplainDetail) {
            listener.enterExplainDetail(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExplainDetail) {
            listener.exitExplainDetail(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExplainDetail) {
            return visitor.visitExplainDetail(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UseStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_USE() {
        return this.getToken(FlinkSqlParser.KW_USE, 0);
    }
    KW_CATALOG() {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
    }
    catalogPath() {
        return this.getRuleContext(0, CatalogPathContext);
    }
    databasePath() {
        return this.getRuleContext(0, DatabasePathContext);
    }
    useModuleStatement() {
        return this.getRuleContext(0, UseModuleStatementContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_useStatement;
    }
    enterRule(listener) {
        if (listener.enterUseStatement) {
            listener.enterUseStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUseStatement) {
            listener.exitUseStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUseStatement) {
            return visitor.visitUseStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UseModuleStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_USE() {
        return this.getToken(FlinkSqlParser.KW_USE, 0);
    }
    KW_MODULES() {
        return this.getToken(FlinkSqlParser.KW_MODULES, 0);
    }
    uid(i) {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }
        return this.getRuleContext(i, UidContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_useModuleStatement;
    }
    enterRule(listener) {
        if (listener.enterUseModuleStatement) {
            listener.enterUseModuleStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUseModuleStatement) {
            listener.exitUseModuleStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUseModuleStatement) {
            return visitor.visitUseModuleStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowStatememtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SHOW() {
        return this.getToken(FlinkSqlParser.KW_SHOW, 0);
    }
    KW_CATALOGS() {
        return this.getToken(FlinkSqlParser.KW_CATALOGS, 0);
    }
    KW_DATABASES() {
        return this.getToken(FlinkSqlParser.KW_DATABASES, 0);
    }
    KW_VIEWS() {
        return this.getToken(FlinkSqlParser.KW_VIEWS, 0);
    }
    KW_JARS() {
        return this.getToken(FlinkSqlParser.KW_JARS, 0);
    }
    KW_CURRENT() {
        return this.getToken(FlinkSqlParser.KW_CURRENT, 0);
    }
    KW_CATALOG() {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
    }
    KW_DATABASE() {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
    }
    KW_TABLES() {
        return this.getToken(FlinkSqlParser.KW_TABLES, 0);
    }
    databasePath() {
        return this.getRuleContext(0, DatabasePathContext);
    }
    likePredicate() {
        return this.getRuleContext(0, LikePredicateContext);
    }
    KW_FROM() {
        return this.getToken(FlinkSqlParser.KW_FROM, 0);
    }
    KW_IN() {
        return this.getToken(FlinkSqlParser.KW_IN, 0);
    }
    KW_COLUMNS() {
        return this.getToken(FlinkSqlParser.KW_COLUMNS, 0);
    }
    viewPath() {
        return this.getRuleContext(0, ViewPathContext);
    }
    tablePath() {
        return this.getRuleContext(0, TablePathContext);
    }
    KW_CREATE() {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    KW_TABLE() {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    KW_VIEW() {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0);
    }
    KW_FUNCTIONS() {
        return this.getToken(FlinkSqlParser.KW_FUNCTIONS, 0);
    }
    KW_USER() {
        return this.getToken(FlinkSqlParser.KW_USER, 0);
    }
    KW_MODULES() {
        return this.getToken(FlinkSqlParser.KW_MODULES, 0);
    }
    KW_FULL() {
        return this.getToken(FlinkSqlParser.KW_FULL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_showStatememt;
    }
    enterRule(listener) {
        if (listener.enterShowStatememt) {
            listener.enterShowStatememt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShowStatememt) {
            listener.exitShowStatememt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitShowStatememt) {
            return visitor.visitShowStatememt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LoadStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_LOAD() {
        return this.getToken(FlinkSqlParser.KW_LOAD, 0);
    }
    KW_MODULE() {
        return this.getToken(FlinkSqlParser.KW_MODULE, 0);
    }
    uid() {
        return this.getRuleContext(0, UidContext);
    }
    KW_WITH() {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    tablePropertyList() {
        return this.getRuleContext(0, TablePropertyListContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_loadStatement;
    }
    enterRule(listener) {
        if (listener.enterLoadStatement) {
            listener.enterLoadStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLoadStatement) {
            listener.exitLoadStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLoadStatement) {
            return visitor.visitLoadStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnloadStatememtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_UNLOAD() {
        return this.getToken(FlinkSqlParser.KW_UNLOAD, 0);
    }
    KW_MODULE() {
        return this.getToken(FlinkSqlParser.KW_MODULE, 0);
    }
    uid() {
        return this.getRuleContext(0, UidContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_unloadStatememt;
    }
    enterRule(listener) {
        if (listener.enterUnloadStatememt) {
            listener.enterUnloadStatememt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnloadStatememt) {
            listener.exitUnloadStatememt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUnloadStatememt) {
            return visitor.visitUnloadStatememt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetStatememtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SET() {
        return this.getToken(FlinkSqlParser.KW_SET, 0);
    }
    tableProperty() {
        return this.getRuleContext(0, TablePropertyContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_setStatememt;
    }
    enterRule(listener) {
        if (listener.enterSetStatememt) {
            listener.enterSetStatememt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSetStatememt) {
            listener.exitSetStatememt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSetStatememt) {
            return visitor.visitSetStatememt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ResetStatememtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_RESET() {
        return this.getToken(FlinkSqlParser.KW_RESET, 0);
    }
    tablePropertyKey() {
        return this.getRuleContext(0, TablePropertyKeyContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_resetStatememt;
    }
    enterRule(listener) {
        if (listener.enterResetStatememt) {
            listener.enterResetStatememt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitResetStatememt) {
            listener.exitResetStatememt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitResetStatememt) {
            return visitor.visitResetStatememt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class JarStatememtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_JAR() {
        return this.getToken(FlinkSqlParser.KW_JAR, 0);
    }
    jarFileName() {
        return this.getRuleContext(0, JarFileNameContext);
    }
    KW_ADD() {
        return this.getToken(FlinkSqlParser.KW_ADD, 0);
    }
    KW_REMOVE() {
        return this.getToken(FlinkSqlParser.KW_REMOVE, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_jarStatememt;
    }
    enterRule(listener) {
        if (listener.enterJarStatememt) {
            listener.enterJarStatememt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitJarStatememt) {
            listener.exitJarStatememt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitJarStatememt) {
            return visitor.visitJarStatememt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DtAddStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ADD() {
        return this.getToken(FlinkSqlParser.KW_ADD, 0);
    }
    KW_JAR() {
        return this.getToken(FlinkSqlParser.KW_JAR, 0);
    }
    KW_WITH() {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    dtFilePath() {
        return this.getRuleContext(0, DtFilePathContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    uid(i) {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }
        return this.getRuleContext(i, UidContext);
    }
    KW_FILE() {
        return this.getToken(FlinkSqlParser.KW_FILE, 0);
    }
    KW_RENAME() {
        return this.getToken(FlinkSqlParser.KW_RENAME, 0);
    }
    KW_PYTHON_FILES() {
        return this.getToken(FlinkSqlParser.KW_PYTHON_FILES, 0);
    }
    KW_PYTHON_REQUIREMENTS() {
        return this.getToken(FlinkSqlParser.KW_PYTHON_REQUIREMENTS, 0);
    }
    KW_PYTHON_DEPENDENCIES() {
        return this.getToken(FlinkSqlParser.KW_PYTHON_DEPENDENCIES, 0);
    }
    KW_PYTHON_JAR() {
        return this.getToken(FlinkSqlParser.KW_PYTHON_JAR, 0);
    }
    KW_PYTHON_ARCHIVES() {
        return this.getToken(FlinkSqlParser.KW_PYTHON_ARCHIVES, 0);
    }
    KW_PYTHON_PARAMETER() {
        return this.getToken(FlinkSqlParser.KW_PYTHON_PARAMETER, 0);
    }
    KW_ENGINE() {
        return this.getToken(FlinkSqlParser.KW_ENGINE, 0);
    }
    KW_KEY() {
        return this.getToken(FlinkSqlParser.KW_KEY, 0);
    }
    KW_CONFIG() {
        return this.getToken(FlinkSqlParser.KW_CONFIG, 0);
    }
    KW_FOR() {
        return this.getToken(FlinkSqlParser.KW_FOR, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_dtAddStatement;
    }
    enterRule(listener) {
        if (listener.enterDtAddStatement) {
            listener.enterDtAddStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDtAddStatement) {
            listener.exitDtAddStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDtAddStatement) {
            return visitor.visitDtAddStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DtFilePathContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    uid(i) {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }
        return this.getRuleContext(i, UidContext);
    }
    SLASH_SIGN(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.SLASH_SIGN);
        }
        else {
            return this.getToken(FlinkSqlParser.SLASH_SIGN, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_dtFilePath;
    }
    enterRule(listener) {
        if (listener.enterDtFilePath) {
            listener.enterDtFilePath(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDtFilePath) {
            listener.exitDtFilePath(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDtFilePath) {
            return visitor.visitDtFilePath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateTableContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    simpleCreateTable() {
        return this.getRuleContext(0, SimpleCreateTableContext);
    }
    createTableAsSelect() {
        return this.getRuleContext(0, CreateTableAsSelectContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_createTable;
    }
    enterRule(listener) {
        if (listener.enterCreateTable) {
            listener.enterCreateTable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateTable) {
            listener.exitCreateTable(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateTable) {
            return visitor.visitCreateTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SimpleCreateTableContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    KW_TABLE() {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    tablePathCreate() {
        return this.getRuleContext(0, TablePathCreateContext);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    columnOptionDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnOptionDefinitionContext);
        }
        return this.getRuleContext(i, ColumnOptionDefinitionContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    withOption() {
        return this.getRuleContext(0, WithOptionContext);
    }
    KW_TEMPORARY() {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    watermarkDefinition() {
        return this.getRuleContext(0, WatermarkDefinitionContext);
    }
    tableConstraint() {
        return this.getRuleContext(0, TableConstraintContext);
    }
    selfDefinitionClause() {
        return this.getRuleContext(0, SelfDefinitionClauseContext);
    }
    commentSpec() {
        return this.getRuleContext(0, CommentSpecContext);
    }
    partitionDefinition() {
        return this.getRuleContext(0, PartitionDefinitionContext);
    }
    likeDefinition() {
        return this.getRuleContext(0, LikeDefinitionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_simpleCreateTable;
    }
    enterRule(listener) {
        if (listener.enterSimpleCreateTable) {
            listener.enterSimpleCreateTable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSimpleCreateTable) {
            listener.exitSimpleCreateTable(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSimpleCreateTable) {
            return visitor.visitSimpleCreateTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateTableAsSelectContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    KW_TABLE() {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    tablePathCreate() {
        return this.getRuleContext(0, TablePathCreateContext);
    }
    withOption() {
        return this.getRuleContext(0, WithOptionContext);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_createTableAsSelect;
    }
    enterRule(listener) {
        if (listener.enterCreateTableAsSelect) {
            listener.enterCreateTableAsSelect(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateTableAsSelect) {
            listener.exitCreateTableAsSelect(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateTableAsSelect) {
            return visitor.visitCreateTableAsSelect(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnOptionDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    physicalColumnDefinition() {
        return this.getRuleContext(0, PhysicalColumnDefinitionContext);
    }
    metadataColumnDefinition() {
        return this.getRuleContext(0, MetadataColumnDefinitionContext);
    }
    computedColumnDefinition() {
        return this.getRuleContext(0, ComputedColumnDefinitionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_columnOptionDefinition;
    }
    enterRule(listener) {
        if (listener.enterColumnOptionDefinition) {
            listener.enterColumnOptionDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnOptionDefinition) {
            listener.exitColumnOptionDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnOptionDefinition) {
            return visitor.visitColumnOptionDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PhysicalColumnDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnNameCreate() {
        return this.getRuleContext(0, ColumnNameCreateContext);
    }
    columnType() {
        return this.getRuleContext(0, ColumnTypeContext);
    }
    columnConstraint() {
        return this.getRuleContext(0, ColumnConstraintContext);
    }
    commentSpec() {
        return this.getRuleContext(0, CommentSpecContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_physicalColumnDefinition;
    }
    enterRule(listener) {
        if (listener.enterPhysicalColumnDefinition) {
            listener.enterPhysicalColumnDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPhysicalColumnDefinition) {
            listener.exitPhysicalColumnDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPhysicalColumnDefinition) {
            return visitor.visitPhysicalColumnDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnNameCreateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    uid() {
        return this.getRuleContext(0, UidContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_columnNameCreate;
    }
    enterRule(listener) {
        if (listener.enterColumnNameCreate) {
            listener.enterColumnNameCreate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnNameCreate) {
            listener.exitColumnNameCreate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnNameCreate) {
            return visitor.visitColumnNameCreate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    uid() {
        return this.getRuleContext(0, UidContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_columnName;
    }
    enterRule(listener) {
        if (listener.enterColumnName) {
            listener.enterColumnName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnName) {
            listener.exitColumnName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnName) {
            return visitor.visitColumnName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnNameListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    columnName(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameContext);
        }
        return this.getRuleContext(i, ColumnNameContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_columnNameList;
    }
    enterRule(listener) {
        if (listener.enterColumnNameList) {
            listener.enterColumnNameList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnNameList) {
            listener.exitColumnNameList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnNameList) {
            return visitor.visitColumnNameList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DATE() {
        return this.getToken(FlinkSqlParser.KW_DATE, 0);
    }
    KW_BOOLEAN() {
        return this.getToken(FlinkSqlParser.KW_BOOLEAN, 0);
    }
    KW_NULL() {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    KW_CHAR() {
        return this.getToken(FlinkSqlParser.KW_CHAR, 0);
    }
    KW_VARCHAR() {
        return this.getToken(FlinkSqlParser.KW_VARCHAR, 0);
    }
    KW_STRING() {
        return this.getToken(FlinkSqlParser.KW_STRING, 0);
    }
    KW_BINARY() {
        return this.getToken(FlinkSqlParser.KW_BINARY, 0);
    }
    KW_VARBINARY() {
        return this.getToken(FlinkSqlParser.KW_VARBINARY, 0);
    }
    KW_BYTES() {
        return this.getToken(FlinkSqlParser.KW_BYTES, 0);
    }
    KW_TINYINT() {
        return this.getToken(FlinkSqlParser.KW_TINYINT, 0);
    }
    KW_SMALLINT() {
        return this.getToken(FlinkSqlParser.KW_SMALLINT, 0);
    }
    KW_INT() {
        return this.getToken(FlinkSqlParser.KW_INT, 0);
    }
    KW_INTEGER() {
        return this.getToken(FlinkSqlParser.KW_INTEGER, 0);
    }
    KW_BIGINT() {
        return this.getToken(FlinkSqlParser.KW_BIGINT, 0);
    }
    KW_TIME() {
        return this.getToken(FlinkSqlParser.KW_TIME, 0);
    }
    KW_TIMESTAMP_LTZ() {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMP_LTZ, 0);
    }
    KW_DATETIME() {
        return this.getToken(FlinkSqlParser.KW_DATETIME, 0);
    }
    lengthOneDimension() {
        return this.getRuleContext(0, LengthOneDimensionContext);
    }
    KW_TIMESTAMP() {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMP, 0);
    }
    KW_ZONE() {
        return this.getToken(FlinkSqlParser.KW_ZONE, 0);
    }
    KW_WITHOUT() {
        return this.getToken(FlinkSqlParser.KW_WITHOUT, 0);
    }
    KW_WITH() {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    KW_LOCAL() {
        return this.getToken(FlinkSqlParser.KW_LOCAL, 0);
    }
    KW_DECIMAL() {
        return this.getToken(FlinkSqlParser.KW_DECIMAL, 0);
    }
    KW_DEC() {
        return this.getToken(FlinkSqlParser.KW_DEC, 0);
    }
    KW_NUMERIC() {
        return this.getToken(FlinkSqlParser.KW_NUMERIC, 0);
    }
    KW_FLOAT() {
        return this.getToken(FlinkSqlParser.KW_FLOAT, 0);
    }
    KW_DOUBLE() {
        return this.getToken(FlinkSqlParser.KW_DOUBLE, 0);
    }
    lengthTwoOptionalDimension() {
        return this.getRuleContext(0, LengthTwoOptionalDimensionContext);
    }
    KW_ARRAY() {
        return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
    }
    KW_MULTISET() {
        return this.getToken(FlinkSqlParser.KW_MULTISET, 0);
    }
    lengthOneTypeDimension() {
        return this.getRuleContext(0, LengthOneTypeDimensionContext);
    }
    KW_MAP() {
        return this.getToken(FlinkSqlParser.KW_MAP, 0);
    }
    mapTypeDimension() {
        return this.getRuleContext(0, MapTypeDimensionContext);
    }
    KW_ROW() {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    rowTypeDimension() {
        return this.getRuleContext(0, RowTypeDimensionContext);
    }
    KW_RAW() {
        return this.getToken(FlinkSqlParser.KW_RAW, 0);
    }
    lengthTwoStringDimension() {
        return this.getRuleContext(0, LengthTwoStringDimensionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_columnType;
    }
    enterRule(listener) {
        if (listener.enterColumnType) {
            listener.enterColumnType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnType) {
            listener.exitColumnType(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnType) {
            return visitor.visitColumnType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LengthOneDimensionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    decimalLiteral() {
        return this.getRuleContext(0, DecimalLiteralContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_lengthOneDimension;
    }
    enterRule(listener) {
        if (listener.enterLengthOneDimension) {
            listener.enterLengthOneDimension(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLengthOneDimension) {
            listener.exitLengthOneDimension(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLengthOneDimension) {
            return visitor.visitLengthOneDimension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LengthTwoOptionalDimensionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    decimalLiteral(i) {
        if (i === undefined) {
            return this.getRuleContexts(DecimalLiteralContext);
        }
        return this.getRuleContext(i, DecimalLiteralContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    COMMA() {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_lengthTwoOptionalDimension;
    }
    enterRule(listener) {
        if (listener.enterLengthTwoOptionalDimension) {
            listener.enterLengthTwoOptionalDimension(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLengthTwoOptionalDimension) {
            listener.exitLengthTwoOptionalDimension(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLengthTwoOptionalDimension) {
            return visitor.visitLengthTwoOptionalDimension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LengthTwoStringDimensionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    stringLiteral(i) {
        if (i === undefined) {
            return this.getRuleContexts(StringLiteralContext);
        }
        return this.getRuleContext(i, StringLiteralContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    COMMA() {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_lengthTwoStringDimension;
    }
    enterRule(listener) {
        if (listener.enterLengthTwoStringDimension) {
            listener.enterLengthTwoStringDimension(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLengthTwoStringDimension) {
            listener.exitLengthTwoStringDimension(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLengthTwoStringDimension) {
            return visitor.visitLengthTwoStringDimension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LengthOneTypeDimensionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LESS_SYMBOL() {
        return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
    }
    columnType() {
        return this.getRuleContext(0, ColumnTypeContext);
    }
    GREATER_SYMBOL() {
        return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_lengthOneTypeDimension;
    }
    enterRule(listener) {
        if (listener.enterLengthOneTypeDimension) {
            listener.enterLengthOneTypeDimension(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLengthOneTypeDimension) {
            listener.exitLengthOneTypeDimension(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLengthOneTypeDimension) {
            return visitor.visitLengthOneTypeDimension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MapTypeDimensionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LESS_SYMBOL() {
        return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
    }
    columnType(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnTypeContext);
        }
        return this.getRuleContext(i, ColumnTypeContext);
    }
    GREATER_SYMBOL() {
        return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
    }
    COMMA() {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_mapTypeDimension;
    }
    enterRule(listener) {
        if (listener.enterMapTypeDimension) {
            listener.enterMapTypeDimension(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMapTypeDimension) {
            listener.exitMapTypeDimension(this);
        }
    }
    accept(visitor) {
        if (visitor.visitMapTypeDimension) {
            return visitor.visitMapTypeDimension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RowTypeDimensionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LESS_SYMBOL() {
        return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
    }
    columnName(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameContext);
        }
        return this.getRuleContext(i, ColumnNameContext);
    }
    columnType(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnTypeContext);
        }
        return this.getRuleContext(i, ColumnTypeContext);
    }
    GREATER_SYMBOL() {
        return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_rowTypeDimension;
    }
    enterRule(listener) {
        if (listener.enterRowTypeDimension) {
            listener.enterRowTypeDimension(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRowTypeDimension) {
            listener.exitRowTypeDimension(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRowTypeDimension) {
            return visitor.visitRowTypeDimension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnConstraintContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_PRIMARY() {
        return this.getToken(FlinkSqlParser.KW_PRIMARY, 0);
    }
    KW_KEY() {
        return this.getToken(FlinkSqlParser.KW_KEY, 0);
    }
    KW_CONSTRAINT() {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
    }
    constraintName() {
        return this.getRuleContext(0, ConstraintNameContext);
    }
    KW_NOT() {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    KW_ENFORCED() {
        return this.getToken(FlinkSqlParser.KW_ENFORCED, 0);
    }
    KW_NULL() {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_columnConstraint;
    }
    enterRule(listener) {
        if (listener.enterColumnConstraint) {
            listener.enterColumnConstraint(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnConstraint) {
            listener.exitColumnConstraint(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnConstraint) {
            return visitor.visitColumnConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CommentSpecContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_COMMENT() {
        return this.getToken(FlinkSqlParser.KW_COMMENT, 0);
    }
    STRING_LITERAL() {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_commentSpec;
    }
    enterRule(listener) {
        if (listener.enterCommentSpec) {
            listener.enterCommentSpec(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCommentSpec) {
            listener.exitCommentSpec(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCommentSpec) {
            return visitor.visitCommentSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MetadataColumnDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnNameCreate() {
        return this.getRuleContext(0, ColumnNameCreateContext);
    }
    columnType() {
        return this.getRuleContext(0, ColumnTypeContext);
    }
    KW_METADATA() {
        return this.getToken(FlinkSqlParser.KW_METADATA, 0);
    }
    KW_FROM() {
        return this.getToken(FlinkSqlParser.KW_FROM, 0);
    }
    metadataKey() {
        return this.getRuleContext(0, MetadataKeyContext);
    }
    KW_VIRTUAL() {
        return this.getToken(FlinkSqlParser.KW_VIRTUAL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_metadataColumnDefinition;
    }
    enterRule(listener) {
        if (listener.enterMetadataColumnDefinition) {
            listener.enterMetadataColumnDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMetadataColumnDefinition) {
            listener.exitMetadataColumnDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitMetadataColumnDefinition) {
            return visitor.visitMetadataColumnDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MetadataKeyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING_LITERAL() {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_metadataKey;
    }
    enterRule(listener) {
        if (listener.enterMetadataKey) {
            listener.enterMetadataKey(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMetadataKey) {
            listener.exitMetadataKey(this);
        }
    }
    accept(visitor) {
        if (visitor.visitMetadataKey) {
            return visitor.visitMetadataKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComputedColumnDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnNameCreate() {
        return this.getRuleContext(0, ColumnNameCreateContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    computedColumnExpression() {
        return this.getRuleContext(0, ComputedColumnExpressionContext);
    }
    commentSpec() {
        return this.getRuleContext(0, CommentSpecContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_computedColumnDefinition;
    }
    enterRule(listener) {
        if (listener.enterComputedColumnDefinition) {
            listener.enterComputedColumnDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitComputedColumnDefinition) {
            listener.exitComputedColumnDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitComputedColumnDefinition) {
            return visitor.visitComputedColumnDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComputedColumnExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_computedColumnExpression;
    }
    enterRule(listener) {
        if (listener.enterComputedColumnExpression) {
            listener.enterComputedColumnExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitComputedColumnExpression) {
            listener.exitComputedColumnExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitComputedColumnExpression) {
            return visitor.visitComputedColumnExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WatermarkDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_WATERMARK() {
        return this.getToken(FlinkSqlParser.KW_WATERMARK, 0);
    }
    KW_FOR() {
        return this.getToken(FlinkSqlParser.KW_FOR, 0);
    }
    columnName() {
        return this.getRuleContext(0, ColumnNameContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_watermarkDefinition;
    }
    enterRule(listener) {
        if (listener.enterWatermarkDefinition) {
            listener.enterWatermarkDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWatermarkDefinition) {
            listener.exitWatermarkDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWatermarkDefinition) {
            return visitor.visitWatermarkDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableConstraintContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_PRIMARY() {
        return this.getToken(FlinkSqlParser.KW_PRIMARY, 0);
    }
    KW_KEY() {
        return this.getToken(FlinkSqlParser.KW_KEY, 0);
    }
    columnNameList() {
        return this.getRuleContext(0, ColumnNameListContext);
    }
    KW_NOT() {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    KW_ENFORCED() {
        return this.getToken(FlinkSqlParser.KW_ENFORCED, 0);
    }
    KW_CONSTRAINT() {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
    }
    constraintName() {
        return this.getRuleContext(0, ConstraintNameContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_tableConstraint;
    }
    enterRule(listener) {
        if (listener.enterTableConstraint) {
            listener.enterTableConstraint(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTableConstraint) {
            listener.exitTableConstraint(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTableConstraint) {
            return visitor.visitTableConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConstraintNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_constraintName;
    }
    enterRule(listener) {
        if (listener.enterConstraintName) {
            listener.enterConstraintName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConstraintName) {
            listener.exitConstraintName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitConstraintName) {
            return visitor.visitConstraintName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SelfDefinitionClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_PERIOD() {
        return this.getToken(FlinkSqlParser.KW_PERIOD, 0);
    }
    KW_FOR() {
        return this.getToken(FlinkSqlParser.KW_FOR, 0);
    }
    KW_SYSTEM_TIME() {
        return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_selfDefinitionClause;
    }
    enterRule(listener) {
        if (listener.enterSelfDefinitionClause) {
            listener.enterSelfDefinitionClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelfDefinitionClause) {
            listener.exitSelfDefinitionClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSelfDefinitionClause) {
            return visitor.visitSelfDefinitionClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PartitionDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_PARTITIONED() {
        return this.getToken(FlinkSqlParser.KW_PARTITIONED, 0);
    }
    KW_BY() {
        return this.getToken(FlinkSqlParser.KW_BY, 0);
    }
    transformList() {
        return this.getRuleContext(0, TransformListContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_partitionDefinition;
    }
    enterRule(listener) {
        if (listener.enterPartitionDefinition) {
            listener.enterPartitionDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPartitionDefinition) {
            listener.exitPartitionDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPartitionDefinition) {
            return visitor.visitPartitionDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TransformListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    transform(i) {
        if (i === undefined) {
            return this.getRuleContexts(TransformContext);
        }
        return this.getRuleContext(i, TransformContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_transformList;
    }
    enterRule(listener) {
        if (listener.enterTransformList) {
            listener.enterTransformList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTransformList) {
            listener.exitTransformList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTransformList) {
            return visitor.visitTransformList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TransformContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_transform;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class IdentityTransformContext extends TransformContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    columnName() {
        return this.getRuleContext(0, ColumnNameContext);
    }
    enterRule(listener) {
        if (listener.enterIdentityTransform) {
            listener.enterIdentityTransform(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIdentityTransform) {
            listener.exitIdentityTransform(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIdentityTransform) {
            return visitor.visitIdentityTransform(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ApplyTransformContext extends TransformContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    transformArgument(i) {
        if (i === undefined) {
            return this.getRuleContexts(TransformArgumentContext);
        }
        return this.getRuleContext(i, TransformArgumentContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    enterRule(listener) {
        if (listener.enterApplyTransform) {
            listener.enterApplyTransform(this);
        }
    }
    exitRule(listener) {
        if (listener.exitApplyTransform) {
            listener.exitApplyTransform(this);
        }
    }
    accept(visitor) {
        if (visitor.visitApplyTransform) {
            return visitor.visitApplyTransform(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TransformArgumentContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    qualifiedName() {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    constant() {
        return this.getRuleContext(0, ConstantContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_transformArgument;
    }
    enterRule(listener) {
        if (listener.enterTransformArgument) {
            listener.enterTransformArgument(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTransformArgument) {
            listener.exitTransformArgument(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTransformArgument) {
            return visitor.visitTransformArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LikeDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_LIKE() {
        return this.getToken(FlinkSqlParser.KW_LIKE, 0);
    }
    tablePath() {
        return this.getRuleContext(0, TablePathContext);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    likeOption(i) {
        if (i === undefined) {
            return this.getRuleContexts(LikeOptionContext);
        }
        return this.getRuleContext(i, LikeOptionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_likeDefinition;
    }
    enterRule(listener) {
        if (listener.enterLikeDefinition) {
            listener.enterLikeDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLikeDefinition) {
            listener.exitLikeDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLikeDefinition) {
            return visitor.visitLikeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LikeOptionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_INCLUDING() {
        return this.getToken(FlinkSqlParser.KW_INCLUDING, 0);
    }
    KW_EXCLUDING() {
        return this.getToken(FlinkSqlParser.KW_EXCLUDING, 0);
    }
    KW_ALL() {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    KW_CONSTRAINTS() {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINTS, 0);
    }
    KW_PARTITIONS() {
        return this.getToken(FlinkSqlParser.KW_PARTITIONS, 0);
    }
    KW_OVERWRITING() {
        return this.getToken(FlinkSqlParser.KW_OVERWRITING, 0);
    }
    KW_GENERATED() {
        return this.getToken(FlinkSqlParser.KW_GENERATED, 0);
    }
    KW_OPTIONS() {
        return this.getToken(FlinkSqlParser.KW_OPTIONS, 0);
    }
    KW_WATERMARKS() {
        return this.getToken(FlinkSqlParser.KW_WATERMARKS, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_likeOption;
    }
    enterRule(listener) {
        if (listener.enterLikeOption) {
            listener.enterLikeOption(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLikeOption) {
            listener.exitLikeOption(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLikeOption) {
            return visitor.visitLikeOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateCatalogContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    KW_CATALOG() {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
    }
    catalogPathCreate() {
        return this.getRuleContext(0, CatalogPathCreateContext);
    }
    withOption() {
        return this.getRuleContext(0, WithOptionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_createCatalog;
    }
    enterRule(listener) {
        if (listener.enterCreateCatalog) {
            listener.enterCreateCatalog(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateCatalog) {
            listener.exitCreateCatalog(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateCatalog) {
            return visitor.visitCreateCatalog(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateDatabaseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    KW_DATABASE() {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
    }
    databasePathCreate() {
        return this.getRuleContext(0, DatabasePathCreateContext);
    }
    withOption() {
        return this.getRuleContext(0, WithOptionContext);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    commentSpec() {
        return this.getRuleContext(0, CommentSpecContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_createDatabase;
    }
    enterRule(listener) {
        if (listener.enterCreateDatabase) {
            listener.enterCreateDatabase(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateDatabase) {
            listener.exitCreateDatabase(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateDatabase) {
            return visitor.visitCreateDatabase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateViewContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    KW_VIEW() {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0);
    }
    viewPathCreate() {
        return this.getRuleContext(0, ViewPathCreateContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    KW_TEMPORARY() {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    columnNameList() {
        return this.getRuleContext(0, ColumnNameListContext);
    }
    commentSpec() {
        return this.getRuleContext(0, CommentSpecContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_createView;
    }
    enterRule(listener) {
        if (listener.enterCreateView) {
            listener.enterCreateView(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateView) {
            listener.exitCreateView(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateView) {
            return visitor.visitCreateView(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateFunctionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CREATE() {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    KW_FUNCTION() {
        return this.getToken(FlinkSqlParser.KW_FUNCTION, 0);
    }
    functionNameCreate() {
        return this.getRuleContext(0, FunctionNameCreateContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_TEMPORARY() {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    KW_SYSTEM() {
        return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
    }
    ifNotExists() {
        return this.getRuleContext(0, IfNotExistsContext);
    }
    KW_LANGUAGE() {
        return this.getToken(FlinkSqlParser.KW_LANGUAGE, 0);
    }
    usingClause() {
        return this.getRuleContext(0, UsingClauseContext);
    }
    KW_JAVA() {
        return this.getToken(FlinkSqlParser.KW_JAVA, 0);
    }
    KW_SCALA() {
        return this.getToken(FlinkSqlParser.KW_SCALA, 0);
    }
    KW_PYTHON() {
        return this.getToken(FlinkSqlParser.KW_PYTHON, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_createFunction;
    }
    enterRule(listener) {
        if (listener.enterCreateFunction) {
            listener.enterCreateFunction(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreateFunction) {
            listener.exitCreateFunction(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreateFunction) {
            return visitor.visitCreateFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UsingClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_USING() {
        return this.getToken(FlinkSqlParser.KW_USING, 0);
    }
    KW_JAR(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.KW_JAR);
        }
        else {
            return this.getToken(FlinkSqlParser.KW_JAR, i);
        }
    }
    jarFileName(i) {
        if (i === undefined) {
            return this.getRuleContexts(JarFileNameContext);
        }
        return this.getRuleContext(i, JarFileNameContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_usingClause;
    }
    enterRule(listener) {
        if (listener.enterUsingClause) {
            listener.enterUsingClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUsingClause) {
            listener.exitUsingClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUsingClause) {
            return visitor.visitUsingClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class JarFileNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING_LITERAL() {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_jarFileName;
    }
    enterRule(listener) {
        if (listener.enterJarFileName) {
            listener.enterJarFileName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitJarFileName) {
            listener.exitJarFileName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitJarFileName) {
            return visitor.visitJarFileName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(FlinkSqlParser.KW_ALTER, 0);
    }
    KW_TABLE() {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    tablePath() {
        return this.getRuleContext(0, TablePathContext);
    }
    renameDefinition() {
        return this.getRuleContext(0, RenameDefinitionContext);
    }
    setKeyValueDefinition() {
        return this.getRuleContext(0, SetKeyValueDefinitionContext);
    }
    addConstraint() {
        return this.getRuleContext(0, AddConstraintContext);
    }
    dropConstraint() {
        return this.getRuleContext(0, DropConstraintContext);
    }
    addUnique() {
        return this.getRuleContext(0, AddUniqueContext);
    }
    ifExists() {
        return this.getRuleContext(0, IfExistsContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_alterTable;
    }
    enterRule(listener) {
        if (listener.enterAlterTable) {
            listener.enterAlterTable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterTable) {
            listener.exitAlterTable(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterTable) {
            return visitor.visitAlterTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RenameDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_RENAME() {
        return this.getToken(FlinkSqlParser.KW_RENAME, 0);
    }
    KW_TO() {
        return this.getToken(FlinkSqlParser.KW_TO, 0);
    }
    uid(i) {
        if (i === undefined) {
            return this.getRuleContexts(UidContext);
        }
        return this.getRuleContext(i, UidContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_renameDefinition;
    }
    enterRule(listener) {
        if (listener.enterRenameDefinition) {
            listener.enterRenameDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRenameDefinition) {
            listener.exitRenameDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRenameDefinition) {
            return visitor.visitRenameDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetKeyValueDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SET() {
        return this.getToken(FlinkSqlParser.KW_SET, 0);
    }
    tablePropertyList() {
        return this.getRuleContext(0, TablePropertyListContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_setKeyValueDefinition;
    }
    enterRule(listener) {
        if (listener.enterSetKeyValueDefinition) {
            listener.enterSetKeyValueDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSetKeyValueDefinition) {
            listener.exitSetKeyValueDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSetKeyValueDefinition) {
            return visitor.visitSetKeyValueDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddConstraintContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ADD() {
        return this.getToken(FlinkSqlParser.KW_ADD, 0);
    }
    KW_CONSTRAINT() {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
    }
    constraintName() {
        return this.getRuleContext(0, ConstraintNameContext);
    }
    KW_PRIMARY() {
        return this.getToken(FlinkSqlParser.KW_PRIMARY, 0);
    }
    KW_KEY() {
        return this.getToken(FlinkSqlParser.KW_KEY, 0);
    }
    columnNameList() {
        return this.getRuleContext(0, ColumnNameListContext);
    }
    notForced() {
        return this.getRuleContext(0, NotForcedContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_addConstraint;
    }
    enterRule(listener) {
        if (listener.enterAddConstraint) {
            listener.enterAddConstraint(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAddConstraint) {
            listener.exitAddConstraint(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAddConstraint) {
            return visitor.visitAddConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropConstraintContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DROP() {
        return this.getToken(FlinkSqlParser.KW_DROP, 0);
    }
    KW_CONSTRAINT() {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
    }
    constraintName() {
        return this.getRuleContext(0, ConstraintNameContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_dropConstraint;
    }
    enterRule(listener) {
        if (listener.enterDropConstraint) {
            listener.enterDropConstraint(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropConstraint) {
            listener.exitDropConstraint(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropConstraint) {
            return visitor.visitDropConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AddUniqueContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ADD() {
        return this.getToken(FlinkSqlParser.KW_ADD, 0);
    }
    KW_UNIQUE() {
        return this.getToken(FlinkSqlParser.KW_UNIQUE, 0);
    }
    columnNameList() {
        return this.getRuleContext(0, ColumnNameListContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_addUnique;
    }
    enterRule(listener) {
        if (listener.enterAddUnique) {
            listener.enterAddUnique(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAddUnique) {
            listener.exitAddUnique(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAddUnique) {
            return visitor.visitAddUnique(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NotForcedContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_NOT() {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    KW_ENFORCED() {
        return this.getToken(FlinkSqlParser.KW_ENFORCED, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_notForced;
    }
    enterRule(listener) {
        if (listener.enterNotForced) {
            listener.enterNotForced(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNotForced) {
            listener.exitNotForced(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNotForced) {
            return visitor.visitNotForced(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlertViewContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(FlinkSqlParser.KW_ALTER, 0);
    }
    KW_VIEW() {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0);
    }
    viewPath() {
        return this.getRuleContext(0, ViewPathContext);
    }
    renameDefinition() {
        return this.getRuleContext(0, RenameDefinitionContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_alertView;
    }
    enterRule(listener) {
        if (listener.enterAlertView) {
            listener.enterAlertView(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlertView) {
            listener.exitAlertView(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlertView) {
            return visitor.visitAlertView(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterDatabaseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(FlinkSqlParser.KW_ALTER, 0);
    }
    KW_DATABASE() {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
    }
    databasePath() {
        return this.getRuleContext(0, DatabasePathContext);
    }
    setKeyValueDefinition() {
        return this.getRuleContext(0, SetKeyValueDefinitionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_alterDatabase;
    }
    enterRule(listener) {
        if (listener.enterAlterDatabase) {
            listener.enterAlterDatabase(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterDatabase) {
            listener.exitAlterDatabase(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterDatabase) {
            return visitor.visitAlterDatabase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterFunctionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALTER() {
        return this.getToken(FlinkSqlParser.KW_ALTER, 0);
    }
    KW_FUNCTION() {
        return this.getToken(FlinkSqlParser.KW_FUNCTION, 0);
    }
    functionName() {
        return this.getRuleContext(0, FunctionNameContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_TEMPORARY() {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    KW_SYSTEM() {
        return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
    }
    ifExists() {
        return this.getRuleContext(0, IfExistsContext);
    }
    KW_LANGUAGE() {
        return this.getToken(FlinkSqlParser.KW_LANGUAGE, 0);
    }
    KW_JAVA() {
        return this.getToken(FlinkSqlParser.KW_JAVA, 0);
    }
    KW_SCALA() {
        return this.getToken(FlinkSqlParser.KW_SCALA, 0);
    }
    KW_PYTHON() {
        return this.getToken(FlinkSqlParser.KW_PYTHON, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_alterFunction;
    }
    enterRule(listener) {
        if (listener.enterAlterFunction) {
            listener.enterAlterFunction(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlterFunction) {
            listener.exitAlterFunction(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlterFunction) {
            return visitor.visitAlterFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropCatalogContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DROP() {
        return this.getToken(FlinkSqlParser.KW_DROP, 0);
    }
    KW_CATALOG() {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
    }
    catalogPath() {
        return this.getRuleContext(0, CatalogPathContext);
    }
    ifExists() {
        return this.getRuleContext(0, IfExistsContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_dropCatalog;
    }
    enterRule(listener) {
        if (listener.enterDropCatalog) {
            listener.enterDropCatalog(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropCatalog) {
            listener.exitDropCatalog(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropCatalog) {
            return visitor.visitDropCatalog(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropTableContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DROP() {
        return this.getToken(FlinkSqlParser.KW_DROP, 0);
    }
    KW_TABLE() {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    tablePath() {
        return this.getRuleContext(0, TablePathContext);
    }
    KW_TEMPORARY() {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    ifExists() {
        return this.getRuleContext(0, IfExistsContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_dropTable;
    }
    enterRule(listener) {
        if (listener.enterDropTable) {
            listener.enterDropTable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropTable) {
            listener.exitDropTable(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropTable) {
            return visitor.visitDropTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropDatabaseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DROP() {
        return this.getToken(FlinkSqlParser.KW_DROP, 0);
    }
    KW_DATABASE() {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
    }
    databasePath() {
        return this.getRuleContext(0, DatabasePathContext);
    }
    ifExists() {
        return this.getRuleContext(0, IfExistsContext);
    }
    KW_RESTRICT() {
        return this.getToken(FlinkSqlParser.KW_RESTRICT, 0);
    }
    KW_CASCADE() {
        return this.getToken(FlinkSqlParser.KW_CASCADE, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_dropDatabase;
    }
    enterRule(listener) {
        if (listener.enterDropDatabase) {
            listener.enterDropDatabase(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropDatabase) {
            listener.exitDropDatabase(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropDatabase) {
            return visitor.visitDropDatabase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropViewContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DROP() {
        return this.getToken(FlinkSqlParser.KW_DROP, 0);
    }
    KW_VIEW() {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0);
    }
    viewPath() {
        return this.getRuleContext(0, ViewPathContext);
    }
    KW_TEMPORARY() {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    ifExists() {
        return this.getRuleContext(0, IfExistsContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_dropView;
    }
    enterRule(listener) {
        if (listener.enterDropView) {
            listener.enterDropView(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropView) {
            listener.exitDropView(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropView) {
            return visitor.visitDropView(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropFunctionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DROP() {
        return this.getToken(FlinkSqlParser.KW_DROP, 0);
    }
    KW_FUNCTION() {
        return this.getToken(FlinkSqlParser.KW_FUNCTION, 0);
    }
    functionName() {
        return this.getRuleContext(0, FunctionNameContext);
    }
    KW_TEMPORARY() {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    KW_SYSTEM() {
        return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
    }
    ifExists() {
        return this.getRuleContext(0, IfExistsContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_dropFunction;
    }
    enterRule(listener) {
        if (listener.enterDropFunction) {
            listener.enterDropFunction(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDropFunction) {
            listener.exitDropFunction(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDropFunction) {
            return visitor.visitDropFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InsertStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    insertSimpleStatement() {
        return this.getRuleContext(0, InsertSimpleStatementContext);
    }
    KW_EXECUTE() {
        return this.getToken(FlinkSqlParser.KW_EXECUTE, 0);
    }
    insertMulStatementCompatibility() {
        return this.getRuleContext(0, InsertMulStatementCompatibilityContext);
    }
    insertMulStatement() {
        return this.getRuleContext(0, InsertMulStatementContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_insertStatement;
    }
    enterRule(listener) {
        if (listener.enterInsertStatement) {
            listener.enterInsertStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInsertStatement) {
            listener.exitInsertStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInsertStatement) {
            return visitor.visitInsertStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InsertSimpleStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_INSERT() {
        return this.getToken(FlinkSqlParser.KW_INSERT, 0);
    }
    tablePath() {
        return this.getRuleContext(0, TablePathContext);
    }
    KW_INTO() {
        return this.getToken(FlinkSqlParser.KW_INTO, 0);
    }
    KW_OVERWRITE() {
        return this.getToken(FlinkSqlParser.KW_OVERWRITE, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    valuesDefinition() {
        return this.getRuleContext(0, ValuesDefinitionContext);
    }
    insertPartitionDefinition() {
        return this.getRuleContext(0, InsertPartitionDefinitionContext);
    }
    columnNameList() {
        return this.getRuleContext(0, ColumnNameListContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_insertSimpleStatement;
    }
    enterRule(listener) {
        if (listener.enterInsertSimpleStatement) {
            listener.enterInsertSimpleStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInsertSimpleStatement) {
            listener.exitInsertSimpleStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInsertSimpleStatement) {
            return visitor.visitInsertSimpleStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InsertPartitionDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_PARTITION() {
        return this.getToken(FlinkSqlParser.KW_PARTITION, 0);
    }
    tablePropertyList() {
        return this.getRuleContext(0, TablePropertyListContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_insertPartitionDefinition;
    }
    enterRule(listener) {
        if (listener.enterInsertPartitionDefinition) {
            listener.enterInsertPartitionDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInsertPartitionDefinition) {
            listener.exitInsertPartitionDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInsertPartitionDefinition) {
            return visitor.visitInsertPartitionDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ValuesDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_VALUES() {
        return this.getToken(FlinkSqlParser.KW_VALUES, 0);
    }
    valuesRowDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValuesRowDefinitionContext);
        }
        return this.getRuleContext(i, ValuesRowDefinitionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_valuesDefinition;
    }
    enterRule(listener) {
        if (listener.enterValuesDefinition) {
            listener.enterValuesDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitValuesDefinition) {
            listener.exitValuesDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitValuesDefinition) {
            return visitor.visitValuesDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ValuesRowDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    constant(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantContext);
        }
        return this.getRuleContext(i, ConstantContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_valuesRowDefinition;
    }
    enterRule(listener) {
        if (listener.enterValuesRowDefinition) {
            listener.enterValuesRowDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitValuesRowDefinition) {
            listener.exitValuesRowDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitValuesRowDefinition) {
            return visitor.visitValuesRowDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InsertMulStatementCompatibilityContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_BEGIN() {
        return this.getToken(FlinkSqlParser.KW_BEGIN, 0);
    }
    KW_STATEMENT() {
        return this.getToken(FlinkSqlParser.KW_STATEMENT, 0);
    }
    KW_SET() {
        return this.getToken(FlinkSqlParser.KW_SET, 0);
    }
    SEMICOLON(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.SEMICOLON);
        }
        else {
            return this.getToken(FlinkSqlParser.SEMICOLON, i);
        }
    }
    KW_END() {
        return this.getToken(FlinkSqlParser.KW_END, 0);
    }
    insertSimpleStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(InsertSimpleStatementContext);
        }
        return this.getRuleContext(i, InsertSimpleStatementContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_insertMulStatementCompatibility;
    }
    enterRule(listener) {
        if (listener.enterInsertMulStatementCompatibility) {
            listener.enterInsertMulStatementCompatibility(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInsertMulStatementCompatibility) {
            listener.exitInsertMulStatementCompatibility(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInsertMulStatementCompatibility) {
            return visitor.visitInsertMulStatementCompatibility(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InsertMulStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_STATEMENT() {
        return this.getToken(FlinkSqlParser.KW_STATEMENT, 0);
    }
    KW_SET() {
        return this.getToken(FlinkSqlParser.KW_SET, 0);
    }
    KW_BEGIN() {
        return this.getToken(FlinkSqlParser.KW_BEGIN, 0);
    }
    KW_END() {
        return this.getToken(FlinkSqlParser.KW_END, 0);
    }
    insertSimpleStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(InsertSimpleStatementContext);
        }
        return this.getRuleContext(i, InsertSimpleStatementContext);
    }
    SEMICOLON(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.SEMICOLON);
        }
        else {
            return this.getToken(FlinkSqlParser.SEMICOLON, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_insertMulStatement;
    }
    enterRule(listener) {
        if (listener.enterInsertMulStatement) {
            listener.enterInsertMulStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInsertMulStatement) {
            listener.exitInsertMulStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInsertMulStatement) {
            return visitor.visitInsertMulStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QueryStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    valuesCaluse() {
        return this.getRuleContext(0, ValuesCaluseContext);
    }
    withClause() {
        return this.getRuleContext(0, WithClauseContext);
    }
    queryStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(QueryStatementContext);
        }
        return this.getRuleContext(i, QueryStatementContext);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    selectClause() {
        return this.getRuleContext(0, SelectClauseContext);
    }
    orderByCaluse() {
        return this.getRuleContext(0, OrderByCaluseContext);
    }
    limitClause() {
        return this.getRuleContext(0, LimitClauseContext);
    }
    selectStatement() {
        return this.getRuleContext(0, SelectStatementContext);
    }
    KW_INTERSECT() {
        return this.getToken(FlinkSqlParser.KW_INTERSECT, 0);
    }
    KW_UNION() {
        return this.getToken(FlinkSqlParser.KW_UNION, 0);
    }
    KW_EXCEPT() {
        return this.getToken(FlinkSqlParser.KW_EXCEPT, 0);
    }
    KW_ALL() {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_queryStatement;
    }
    enterRule(listener) {
        if (listener.enterQueryStatement) {
            listener.enterQueryStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQueryStatement) {
            listener.exitQueryStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQueryStatement) {
            return visitor.visitQueryStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ValuesCaluseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_VALUES() {
        return this.getToken(FlinkSqlParser.KW_VALUES, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_valuesCaluse;
    }
    enterRule(listener) {
        if (listener.enterValuesCaluse) {
            listener.enterValuesCaluse(this);
        }
    }
    exitRule(listener) {
        if (listener.exitValuesCaluse) {
            listener.exitValuesCaluse(this);
        }
    }
    accept(visitor) {
        if (visitor.visitValuesCaluse) {
            return visitor.visitValuesCaluse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WithClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_WITH() {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    withItem(i) {
        if (i === undefined) {
            return this.getRuleContexts(WithItemContext);
        }
        return this.getRuleContext(i, WithItemContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_withClause;
    }
    enterRule(listener) {
        if (listener.enterWithClause) {
            listener.enterWithClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWithClause) {
            listener.exitWithClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWithClause) {
            return visitor.visitWithClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WithItemContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    withItemName() {
        return this.getRuleContext(0, WithItemNameContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    LR_BRACKET(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.LR_BRACKET);
        }
        else {
            return this.getToken(FlinkSqlParser.LR_BRACKET, i);
        }
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    RR_BRACKET(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.RR_BRACKET);
        }
        else {
            return this.getToken(FlinkSqlParser.RR_BRACKET, i);
        }
    }
    columnName(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameContext);
        }
        return this.getRuleContext(i, ColumnNameContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_withItem;
    }
    enterRule(listener) {
        if (listener.enterWithItem) {
            listener.enterWithItem(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWithItem) {
            listener.exitWithItem(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWithItem) {
            return visitor.visitWithItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WithItemNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_withItemName;
    }
    enterRule(listener) {
        if (listener.enterWithItemName) {
            listener.enterWithItemName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWithItemName) {
            listener.exitWithItemName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWithItemName) {
            return visitor.visitWithItemName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SelectStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    selectClause() {
        return this.getRuleContext(0, SelectClauseContext);
    }
    fromClause() {
        return this.getRuleContext(0, FromClauseContext);
    }
    whereClause() {
        return this.getRuleContext(0, WhereClauseContext);
    }
    groupByClause() {
        return this.getRuleContext(0, GroupByClauseContext);
    }
    havingClause() {
        return this.getRuleContext(0, HavingClauseContext);
    }
    windowClause() {
        return this.getRuleContext(0, WindowClauseContext);
    }
    matchRecognizeClause() {
        return this.getRuleContext(0, MatchRecognizeClauseContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_selectStatement;
    }
    enterRule(listener) {
        if (listener.enterSelectStatement) {
            listener.enterSelectStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelectStatement) {
            listener.exitSelectStatement(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSelectStatement) {
            return visitor.visitSelectStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SelectClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_SELECT() {
        return this.getToken(FlinkSqlParser.KW_SELECT, 0);
    }
    ASTERISK_SIGN() {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    projectItemDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ProjectItemDefinitionContext);
        }
        return this.getRuleContext(i, ProjectItemDefinitionContext);
    }
    setQuantifier() {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_selectClause;
    }
    enterRule(listener) {
        if (listener.enterSelectClause) {
            listener.enterSelectClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelectClause) {
            listener.exitSelectClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSelectClause) {
            return visitor.visitSelectClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ProjectItemDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    overWindowItem() {
        return this.getRuleContext(0, OverWindowItemContext);
    }
    columnName() {
        return this.getRuleContext(0, ColumnNameContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_projectItemDefinition;
    }
    enterRule(listener) {
        if (listener.enterProjectItemDefinition) {
            listener.enterProjectItemDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitProjectItemDefinition) {
            listener.exitProjectItemDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitProjectItemDefinition) {
            return visitor.visitProjectItemDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class OverWindowItemContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primaryExpression() {
        return this.getRuleContext(0, PrimaryExpressionContext);
    }
    KW_OVER() {
        return this.getToken(FlinkSqlParser.KW_OVER, 0);
    }
    windowSpec() {
        return this.getRuleContext(0, WindowSpecContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    errorCapturingIdentifier() {
        return this.getRuleContext(0, ErrorCapturingIdentifierContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_overWindowItem;
    }
    enterRule(listener) {
        if (listener.enterOverWindowItem) {
            listener.enterOverWindowItem(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOverWindowItem) {
            listener.exitOverWindowItem(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOverWindowItem) {
            return visitor.visitOverWindowItem(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FromClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_FROM() {
        return this.getToken(FlinkSqlParser.KW_FROM, 0);
    }
    tableExpression() {
        return this.getRuleContext(0, TableExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_fromClause;
    }
    enterRule(listener) {
        if (listener.enterFromClause) {
            listener.enterFromClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFromClause) {
            listener.exitFromClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFromClause) {
            return visitor.visitFromClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    tableReference(i) {
        if (i === undefined) {
            return this.getRuleContexts(TableReferenceContext);
        }
        return this.getRuleContext(i, TableReferenceContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    inlineDataValueClause() {
        return this.getRuleContext(0, InlineDataValueClauseContext);
    }
    windoTVFClause() {
        return this.getRuleContext(0, WindoTVFClauseContext);
    }
    tableExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(TableExpressionContext);
        }
        return this.getRuleContext(i, TableExpressionContext);
    }
    KW_CROSS() {
        return this.getToken(FlinkSqlParser.KW_CROSS, 0);
    }
    KW_JOIN() {
        return this.getToken(FlinkSqlParser.KW_JOIN, 0);
    }
    KW_NATURAL() {
        return this.getToken(FlinkSqlParser.KW_NATURAL, 0);
    }
    KW_OUTER() {
        return this.getToken(FlinkSqlParser.KW_OUTER, 0);
    }
    joinCondition() {
        return this.getRuleContext(0, JoinConditionContext);
    }
    KW_LEFT() {
        return this.getToken(FlinkSqlParser.KW_LEFT, 0);
    }
    KW_RIGHT() {
        return this.getToken(FlinkSqlParser.KW_RIGHT, 0);
    }
    KW_FULL() {
        return this.getToken(FlinkSqlParser.KW_FULL, 0);
    }
    KW_INNER() {
        return this.getToken(FlinkSqlParser.KW_INNER, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_tableExpression;
    }
    enterRule(listener) {
        if (listener.enterTableExpression) {
            listener.enterTableExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTableExpression) {
            listener.exitTableExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTableExpression) {
            return visitor.visitTableExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableReferenceContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    tablePrimary() {
        return this.getRuleContext(0, TablePrimaryContext);
    }
    tableAlias() {
        return this.getRuleContext(0, TableAliasContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_tableReference;
    }
    enterRule(listener) {
        if (listener.enterTableReference) {
            listener.enterTableReference(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTableReference) {
            listener.exitTableReference(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTableReference) {
            return visitor.visitTableReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TablePrimaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    tablePath() {
        return this.getRuleContext(0, TablePathContext);
    }
    KW_TABLE() {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    systemTimePeriod() {
        return this.getRuleContext(0, SystemTimePeriodContext);
    }
    correlationName() {
        return this.getRuleContext(0, CorrelationNameContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    viewPath() {
        return this.getRuleContext(0, ViewPathContext);
    }
    KW_LATERAL() {
        return this.getToken(FlinkSqlParser.KW_LATERAL, 0);
    }
    LR_BRACKET(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.LR_BRACKET);
        }
        else {
            return this.getToken(FlinkSqlParser.LR_BRACKET, i);
        }
    }
    functionName() {
        return this.getRuleContext(0, FunctionNameContext);
    }
    functionParam(i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionParamContext);
        }
        return this.getRuleContext(i, FunctionParamContext);
    }
    RR_BRACKET(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.RR_BRACKET);
        }
        else {
            return this.getToken(FlinkSqlParser.RR_BRACKET, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    KW_UNNEST() {
        return this.getToken(FlinkSqlParser.KW_UNNEST, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_tablePrimary;
    }
    enterRule(listener) {
        if (listener.enterTablePrimary) {
            listener.enterTablePrimary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTablePrimary) {
            listener.exitTablePrimary(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTablePrimary) {
            return visitor.visitTablePrimary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SystemTimePeriodContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_FOR() {
        return this.getToken(FlinkSqlParser.KW_FOR, 0);
    }
    KW_SYSTEM_TIME() {
        return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    KW_OF() {
        return this.getToken(FlinkSqlParser.KW_OF, 0);
    }
    dateTimeExpression() {
        return this.getRuleContext(0, DateTimeExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_systemTimePeriod;
    }
    enterRule(listener) {
        if (listener.enterSystemTimePeriod) {
            listener.enterSystemTimePeriod(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSystemTimePeriod) {
            listener.exitSystemTimePeriod(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSystemTimePeriod) {
            return visitor.visitSystemTimePeriod(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DateTimeExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_dateTimeExpression;
    }
    enterRule(listener) {
        if (listener.enterDateTimeExpression) {
            listener.enterDateTimeExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDateTimeExpression) {
            listener.exitDateTimeExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDateTimeExpression) {
            return visitor.visitDateTimeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InlineDataValueClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    valuesDefinition() {
        return this.getRuleContext(0, ValuesDefinitionContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    tableAlias() {
        return this.getRuleContext(0, TableAliasContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_inlineDataValueClause;
    }
    enterRule(listener) {
        if (listener.enterInlineDataValueClause) {
            listener.enterInlineDataValueClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInlineDataValueClause) {
            listener.exitInlineDataValueClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInlineDataValueClause) {
            return visitor.visitInlineDataValueClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WindoTVFClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_TABLE() {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    windowTVFExression() {
        return this.getRuleContext(0, WindowTVFExressionContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_windoTVFClause;
    }
    enterRule(listener) {
        if (listener.enterWindoTVFClause) {
            listener.enterWindoTVFClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWindoTVFClause) {
            listener.exitWindoTVFClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWindoTVFClause) {
            return visitor.visitWindoTVFClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WindowTVFExressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    windoTVFName() {
        return this.getRuleContext(0, WindoTVFNameContext);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    windowTVFParam(i) {
        if (i === undefined) {
            return this.getRuleContexts(WindowTVFParamContext);
        }
        return this.getRuleContext(i, WindowTVFParamContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_windowTVFExression;
    }
    enterRule(listener) {
        if (listener.enterWindowTVFExression) {
            listener.enterWindowTVFExression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWindowTVFExression) {
            listener.exitWindowTVFExression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWindowTVFExression) {
            return visitor.visitWindowTVFExression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WindoTVFNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_TUMBLE() {
        return this.getToken(FlinkSqlParser.KW_TUMBLE, 0);
    }
    KW_HOP() {
        return this.getToken(FlinkSqlParser.KW_HOP, 0);
    }
    KW_CUMULATE() {
        return this.getToken(FlinkSqlParser.KW_CUMULATE, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_windoTVFName;
    }
    enterRule(listener) {
        if (listener.enterWindoTVFName) {
            listener.enterWindoTVFName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWindoTVFName) {
            listener.exitWindoTVFName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWindoTVFName) {
            return visitor.visitWindoTVFName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WindowTVFParamContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_TABLE() {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    timeAttrColumn() {
        return this.getRuleContext(0, TimeAttrColumnContext);
    }
    columnDescriptor() {
        return this.getRuleContext(0, ColumnDescriptorContext);
    }
    timeIntervalExpression() {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    KW_DATA() {
        return this.getToken(FlinkSqlParser.KW_DATA, 0);
    }
    DOUBLE_RIGHT_ARROW() {
        return this.getToken(FlinkSqlParser.DOUBLE_RIGHT_ARROW, 0);
    }
    KW_TIMECOL() {
        return this.getToken(FlinkSqlParser.KW_TIMECOL, 0);
    }
    timeIntervalParamName() {
        return this.getRuleContext(0, TimeIntervalParamNameContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_windowTVFParam;
    }
    enterRule(listener) {
        if (listener.enterWindowTVFParam) {
            listener.enterWindowTVFParam(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWindowTVFParam) {
            listener.exitWindowTVFParam(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWindowTVFParam) {
            return visitor.visitWindowTVFParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TimeIntervalParamNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DATA() {
        return this.getToken(FlinkSqlParser.KW_DATA, 0);
    }
    KW_TIMECOL() {
        return this.getToken(FlinkSqlParser.KW_TIMECOL, 0);
    }
    KW_SIZE() {
        return this.getToken(FlinkSqlParser.KW_SIZE, 0);
    }
    KW_OFFSET() {
        return this.getToken(FlinkSqlParser.KW_OFFSET, 0);
    }
    KW_STEP() {
        return this.getToken(FlinkSqlParser.KW_STEP, 0);
    }
    KW_SLIDE() {
        return this.getToken(FlinkSqlParser.KW_SLIDE, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_timeIntervalParamName;
    }
    enterRule(listener) {
        if (listener.enterTimeIntervalParamName) {
            listener.enterTimeIntervalParamName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTimeIntervalParamName) {
            listener.exitTimeIntervalParamName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTimeIntervalParamName) {
            return visitor.visitTimeIntervalParamName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnDescriptorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DESCRIPTOR() {
        return this.getToken(FlinkSqlParser.KW_DESCRIPTOR, 0);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    columnName() {
        return this.getRuleContext(0, ColumnNameContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_columnDescriptor;
    }
    enterRule(listener) {
        if (listener.enterColumnDescriptor) {
            listener.enterColumnDescriptor(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnDescriptor) {
            listener.exitColumnDescriptor(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnDescriptor) {
            return visitor.visitColumnDescriptor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinConditionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ON() {
        return this.getToken(FlinkSqlParser.KW_ON, 0);
    }
    booleanExpression() {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    KW_USING() {
        return this.getToken(FlinkSqlParser.KW_USING, 0);
    }
    columnNameList() {
        return this.getRuleContext(0, ColumnNameListContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_joinCondition;
    }
    enterRule(listener) {
        if (listener.enterJoinCondition) {
            listener.enterJoinCondition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitJoinCondition) {
            listener.exitJoinCondition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitJoinCondition) {
            return visitor.visitJoinCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WhereClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_WHERE() {
        return this.getToken(FlinkSqlParser.KW_WHERE, 0);
    }
    booleanExpression() {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_whereClause;
    }
    enterRule(listener) {
        if (listener.enterWhereClause) {
            listener.enterWhereClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWhereClause) {
            listener.exitWhereClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupByClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_GROUP() {
        return this.getToken(FlinkSqlParser.KW_GROUP, 0);
    }
    KW_BY() {
        return this.getToken(FlinkSqlParser.KW_BY, 0);
    }
    groupItemDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(GroupItemDefinitionContext);
        }
        return this.getRuleContext(i, GroupItemDefinitionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_groupByClause;
    }
    enterRule(listener) {
        if (listener.enterGroupByClause) {
            listener.enterGroupByClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGroupByClause) {
            listener.exitGroupByClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGroupByClause) {
            return visitor.visitGroupByClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupItemDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnName() {
        return this.getRuleContext(0, ColumnNameContext);
    }
    groupWindowFunction() {
        return this.getRuleContext(0, GroupWindowFunctionContext);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    groupingSetsNotaionName() {
        return this.getRuleContext(0, GroupingSetsNotaionNameContext);
    }
    groupingSets() {
        return this.getRuleContext(0, GroupingSetsContext);
    }
    groupItemDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(GroupItemDefinitionContext);
        }
        return this.getRuleContext(i, GroupItemDefinitionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_groupItemDefinition;
    }
    enterRule(listener) {
        if (listener.enterGroupItemDefinition) {
            listener.enterGroupItemDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGroupItemDefinition) {
            listener.exitGroupItemDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGroupItemDefinition) {
            return visitor.visitGroupItemDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupingSetsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_GROUPING() {
        return this.getToken(FlinkSqlParser.KW_GROUPING, 0);
    }
    KW_SETS() {
        return this.getToken(FlinkSqlParser.KW_SETS, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_groupingSets;
    }
    enterRule(listener) {
        if (listener.enterGroupingSets) {
            listener.enterGroupingSets(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGroupingSets) {
            listener.exitGroupingSets(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGroupingSets) {
            return visitor.visitGroupingSets(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupingSetsNotaionNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_CUBE() {
        return this.getToken(FlinkSqlParser.KW_CUBE, 0);
    }
    KW_ROLLUP() {
        return this.getToken(FlinkSqlParser.KW_ROLLUP, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_groupingSetsNotaionName;
    }
    enterRule(listener) {
        if (listener.enterGroupingSetsNotaionName) {
            listener.enterGroupingSetsNotaionName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGroupingSetsNotaionName) {
            listener.exitGroupingSetsNotaionName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGroupingSetsNotaionName) {
            return visitor.visitGroupingSetsNotaionName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupWindowFunctionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    groupWindowFunctionName() {
        return this.getRuleContext(0, GroupWindowFunctionNameContext);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    timeAttrColumn() {
        return this.getRuleContext(0, TimeAttrColumnContext);
    }
    COMMA() {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    timeIntervalExpression() {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_groupWindowFunction;
    }
    enterRule(listener) {
        if (listener.enterGroupWindowFunction) {
            listener.enterGroupWindowFunction(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGroupWindowFunction) {
            listener.exitGroupWindowFunction(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGroupWindowFunction) {
            return visitor.visitGroupWindowFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GroupWindowFunctionNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_TUMBLE() {
        return this.getToken(FlinkSqlParser.KW_TUMBLE, 0);
    }
    KW_HOP() {
        return this.getToken(FlinkSqlParser.KW_HOP, 0);
    }
    KW_SESSION() {
        return this.getToken(FlinkSqlParser.KW_SESSION, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_groupWindowFunctionName;
    }
    enterRule(listener) {
        if (listener.enterGroupWindowFunctionName) {
            listener.enterGroupWindowFunctionName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGroupWindowFunctionName) {
            listener.exitGroupWindowFunctionName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitGroupWindowFunctionName) {
            return visitor.visitGroupWindowFunctionName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TimeAttrColumnContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    uid() {
        return this.getRuleContext(0, UidContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_timeAttrColumn;
    }
    enterRule(listener) {
        if (listener.enterTimeAttrColumn) {
            listener.enterTimeAttrColumn(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTimeAttrColumn) {
            listener.exitTimeAttrColumn(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTimeAttrColumn) {
            return visitor.visitTimeAttrColumn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class HavingClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_HAVING() {
        return this.getToken(FlinkSqlParser.KW_HAVING, 0);
    }
    booleanExpression() {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_havingClause;
    }
    enterRule(listener) {
        if (listener.enterHavingClause) {
            listener.enterHavingClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitHavingClause) {
            listener.exitHavingClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitHavingClause) {
            return visitor.visitHavingClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WindowClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_WINDOW() {
        return this.getToken(FlinkSqlParser.KW_WINDOW, 0);
    }
    namedWindow(i) {
        if (i === undefined) {
            return this.getRuleContexts(NamedWindowContext);
        }
        return this.getRuleContext(i, NamedWindowContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_windowClause;
    }
    enterRule(listener) {
        if (listener.enterWindowClause) {
            listener.enterWindowClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWindowClause) {
            listener.exitWindowClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWindowClause) {
            return visitor.visitWindowClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NamedWindowContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    windowSpec() {
        return this.getRuleContext(0, WindowSpecContext);
    }
    errorCapturingIdentifier() {
        return this.getRuleContext(0, ErrorCapturingIdentifierContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_namedWindow;
    }
    enterRule(listener) {
        if (listener.enterNamedWindow) {
            listener.enterNamedWindow(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNamedWindow) {
            listener.exitNamedWindow(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNamedWindow) {
            return visitor.visitNamedWindow(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WindowSpecContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    partitionByClause() {
        return this.getRuleContext(0, PartitionByClauseContext);
    }
    orderByCaluse() {
        return this.getRuleContext(0, OrderByCaluseContext);
    }
    windowFrame() {
        return this.getRuleContext(0, WindowFrameContext);
    }
    errorCapturingIdentifier() {
        return this.getRuleContext(0, ErrorCapturingIdentifierContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_windowSpec;
    }
    enterRule(listener) {
        if (listener.enterWindowSpec) {
            listener.enterWindowSpec(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWindowSpec) {
            listener.exitWindowSpec(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWindowSpec) {
            return visitor.visitWindowSpec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MatchRecognizeClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_MATCH_RECOGNIZE() {
        return this.getToken(FlinkSqlParser.KW_MATCH_RECOGNIZE, 0);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    patternVariablesDefination() {
        return this.getRuleContext(0, PatternVariablesDefinationContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    partitionByClause() {
        return this.getRuleContext(0, PartitionByClauseContext);
    }
    orderByCaluse() {
        return this.getRuleContext(0, OrderByCaluseContext);
    }
    measuresClause() {
        return this.getRuleContext(0, MeasuresClauseContext);
    }
    outputMode() {
        return this.getRuleContext(0, OutputModeContext);
    }
    afterMatchStrategy() {
        return this.getRuleContext(0, AfterMatchStrategyContext);
    }
    patternDefination() {
        return this.getRuleContext(0, PatternDefinationContext);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_matchRecognizeClause;
    }
    enterRule(listener) {
        if (listener.enterMatchRecognizeClause) {
            listener.enterMatchRecognizeClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMatchRecognizeClause) {
            listener.exitMatchRecognizeClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitMatchRecognizeClause) {
            return visitor.visitMatchRecognizeClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class OrderByCaluseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ORDER() {
        return this.getToken(FlinkSqlParser.KW_ORDER, 0);
    }
    KW_BY() {
        return this.getToken(FlinkSqlParser.KW_BY, 0);
    }
    orderItemDefition(i) {
        if (i === undefined) {
            return this.getRuleContexts(OrderItemDefitionContext);
        }
        return this.getRuleContext(i, OrderItemDefitionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_orderByCaluse;
    }
    enterRule(listener) {
        if (listener.enterOrderByCaluse) {
            listener.enterOrderByCaluse(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOrderByCaluse) {
            listener.exitOrderByCaluse(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOrderByCaluse) {
            return visitor.visitOrderByCaluse(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class OrderItemDefitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    columnName() {
        return this.getRuleContext(0, ColumnNameContext);
    }
    KW_NULLS() {
        return this.getToken(FlinkSqlParser.KW_NULLS, 0);
    }
    KW_ASC() {
        return this.getToken(FlinkSqlParser.KW_ASC, 0);
    }
    KW_DESC() {
        return this.getToken(FlinkSqlParser.KW_DESC, 0);
    }
    KW_LAST() {
        return this.getToken(FlinkSqlParser.KW_LAST, 0);
    }
    KW_FIRST() {
        return this.getToken(FlinkSqlParser.KW_FIRST, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_orderItemDefition;
    }
    enterRule(listener) {
        if (listener.enterOrderItemDefition) {
            listener.enterOrderItemDefition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOrderItemDefition) {
            listener.exitOrderItemDefition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOrderItemDefition) {
            return visitor.visitOrderItemDefition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LimitClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_LIMIT() {
        return this.getToken(FlinkSqlParser.KW_LIMIT, 0);
    }
    KW_ALL() {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_limitClause;
    }
    enterRule(listener) {
        if (listener.enterLimitClause) {
            listener.enterLimitClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLimitClause) {
            listener.exitLimitClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLimitClause) {
            return visitor.visitLimitClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PartitionByClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_PARTITION() {
        return this.getToken(FlinkSqlParser.KW_PARTITION, 0);
    }
    KW_BY() {
        return this.getToken(FlinkSqlParser.KW_BY, 0);
    }
    columnName(i) {
        if (i === undefined) {
            return this.getRuleContexts(ColumnNameContext);
        }
        return this.getRuleContext(i, ColumnNameContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_partitionByClause;
    }
    enterRule(listener) {
        if (listener.enterPartitionByClause) {
            listener.enterPartitionByClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPartitionByClause) {
            listener.exitPartitionByClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPartitionByClause) {
            return visitor.visitPartitionByClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuantifiersContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ASTERISK_SIGN() {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    ADD_SIGN() {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    QUESTION_MARK_SIGN() {
        return this.getToken(FlinkSqlParser.QUESTION_MARK_SIGN, 0);
    }
    LB_BRACKET() {
        return this.getToken(FlinkSqlParser.LB_BRACKET, 0);
    }
    DIG_LITERAL(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.DIG_LITERAL);
        }
        else {
            return this.getToken(FlinkSqlParser.DIG_LITERAL, i);
        }
    }
    COMMA() {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    RB_BRACKET() {
        return this.getToken(FlinkSqlParser.RB_BRACKET, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_quantifiers;
    }
    enterRule(listener) {
        if (listener.enterQuantifiers) {
            listener.enterQuantifiers(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQuantifiers) {
            listener.exitQuantifiers(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQuantifiers) {
            return visitor.visitQuantifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MeasuresClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_MEASURES() {
        return this.getToken(FlinkSqlParser.KW_MEASURES, 0);
    }
    projectItemDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ProjectItemDefinitionContext);
        }
        return this.getRuleContext(i, ProjectItemDefinitionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_measuresClause;
    }
    enterRule(listener) {
        if (listener.enterMeasuresClause) {
            listener.enterMeasuresClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMeasuresClause) {
            listener.exitMeasuresClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitMeasuresClause) {
            return visitor.visitMeasuresClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PatternDefinationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_PATTERN() {
        return this.getToken(FlinkSqlParser.KW_PATTERN, 0);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    patternVariable(i) {
        if (i === undefined) {
            return this.getRuleContexts(PatternVariableContext);
        }
        return this.getRuleContext(i, PatternVariableContext);
    }
    withinClause() {
        return this.getRuleContext(0, WithinClauseContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_patternDefination;
    }
    enterRule(listener) {
        if (listener.enterPatternDefination) {
            listener.enterPatternDefination(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPatternDefination) {
            listener.exitPatternDefination(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPatternDefination) {
            return visitor.visitPatternDefination(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PatternVariableContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unquotedIdentifier() {
        return this.getRuleContext(0, UnquotedIdentifierContext);
    }
    quantifiers() {
        return this.getRuleContext(0, QuantifiersContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_patternVariable;
    }
    enterRule(listener) {
        if (listener.enterPatternVariable) {
            listener.enterPatternVariable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPatternVariable) {
            listener.exitPatternVariable(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPatternVariable) {
            return visitor.visitPatternVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class OutputModeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ALL() {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    KW_ROWS() {
        return this.getToken(FlinkSqlParser.KW_ROWS, 0);
    }
    KW_PER() {
        return this.getToken(FlinkSqlParser.KW_PER, 0);
    }
    KW_MATCH() {
        return this.getToken(FlinkSqlParser.KW_MATCH, 0);
    }
    KW_ONE() {
        return this.getToken(FlinkSqlParser.KW_ONE, 0);
    }
    KW_ROW() {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_outputMode;
    }
    enterRule(listener) {
        if (listener.enterOutputMode) {
            listener.enterOutputMode(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOutputMode) {
            listener.exitOutputMode(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOutputMode) {
            return visitor.visitOutputMode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AfterMatchStrategyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_AFTER() {
        return this.getToken(FlinkSqlParser.KW_AFTER, 0);
    }
    KW_MATCH() {
        return this.getToken(FlinkSqlParser.KW_MATCH, 0);
    }
    KW_SKIP() {
        return this.getToken(FlinkSqlParser.KW_SKIP, 0);
    }
    KW_PAST() {
        return this.getToken(FlinkSqlParser.KW_PAST, 0);
    }
    KW_LAST() {
        return this.getToken(FlinkSqlParser.KW_LAST, 0);
    }
    KW_ROW() {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    KW_TO() {
        return this.getToken(FlinkSqlParser.KW_TO, 0);
    }
    KW_NEXT() {
        return this.getToken(FlinkSqlParser.KW_NEXT, 0);
    }
    unquotedIdentifier() {
        return this.getRuleContext(0, UnquotedIdentifierContext);
    }
    KW_FIRST() {
        return this.getToken(FlinkSqlParser.KW_FIRST, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_afterMatchStrategy;
    }
    enterRule(listener) {
        if (listener.enterAfterMatchStrategy) {
            listener.enterAfterMatchStrategy(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAfterMatchStrategy) {
            listener.exitAfterMatchStrategy(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAfterMatchStrategy) {
            return visitor.visitAfterMatchStrategy(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PatternVariablesDefinationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DEFINE() {
        return this.getToken(FlinkSqlParser.KW_DEFINE, 0);
    }
    projectItemDefinition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ProjectItemDefinitionContext);
        }
        return this.getRuleContext(i, ProjectItemDefinitionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_patternVariablesDefination;
    }
    enterRule(listener) {
        if (listener.enterPatternVariablesDefination) {
            listener.enterPatternVariablesDefination(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPatternVariablesDefination) {
            listener.exitPatternVariablesDefination(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPatternVariablesDefination) {
            return visitor.visitPatternVariablesDefination(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WindowFrameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_RANGE() {
        return this.getToken(FlinkSqlParser.KW_RANGE, 0);
    }
    KW_BETWEEN() {
        return this.getToken(FlinkSqlParser.KW_BETWEEN, 0);
    }
    timeIntervalExpression() {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    frameBound() {
        return this.getRuleContext(0, FrameBoundContext);
    }
    KW_ROWS() {
        return this.getToken(FlinkSqlParser.KW_ROWS, 0);
    }
    DIG_LITERAL() {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_windowFrame;
    }
    enterRule(listener) {
        if (listener.enterWindowFrame) {
            listener.enterWindowFrame(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWindowFrame) {
            listener.exitWindowFrame(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWindowFrame) {
            return visitor.visitWindowFrame(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FrameBoundContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_PRECEDING() {
        return this.getToken(FlinkSqlParser.KW_PRECEDING, 0);
    }
    KW_AND() {
        return this.getToken(FlinkSqlParser.KW_AND, 0);
    }
    KW_CURRENT() {
        return this.getToken(FlinkSqlParser.KW_CURRENT, 0);
    }
    KW_ROW() {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_frameBound;
    }
    enterRule(listener) {
        if (listener.enterFrameBound) {
            listener.enterFrameBound(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFrameBound) {
            listener.exitFrameBound(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFrameBound) {
            return visitor.visitFrameBound(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WithinClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_WITHIN() {
        return this.getToken(FlinkSqlParser.KW_WITHIN, 0);
    }
    timeIntervalExpression() {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_withinClause;
    }
    enterRule(listener) {
        if (listener.enterWithinClause) {
            listener.enterWithinClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWithinClause) {
            listener.exitWithinClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWithinClause) {
            return visitor.visitWithinClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    booleanExpression() {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_expression;
    }
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BooleanExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_booleanExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class LogicalNotContext extends BooleanExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_NOT() {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    booleanExpression() {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterLogicalNot) {
            listener.enterLogicalNot(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLogicalNot) {
            listener.exitLogicalNot(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLogicalNot) {
            return visitor.visitLogicalNot(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PredicatedContext extends BooleanExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    predicate() {
        return this.getRuleContext(0, PredicateContext);
    }
    enterRule(listener) {
        if (listener.enterPredicated) {
            listener.enterPredicated(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPredicated) {
            listener.exitPredicated(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPredicated) {
            return visitor.visitPredicated(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExistsContext extends BooleanExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_EXISTS() {
        return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    enterRule(listener) {
        if (listener.enterExists) {
            listener.enterExists(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExists) {
            listener.exitExists(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExists) {
            return visitor.visitExists(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalNestedContext extends BooleanExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    booleanExpression() {
        return this.getRuleContext(0, BooleanExpressionContext);
    }
    KW_IS() {
        return this.getToken(FlinkSqlParser.KW_IS, 0);
    }
    KW_TRUE() {
        return this.getToken(FlinkSqlParser.KW_TRUE, 0);
    }
    KW_FALSE() {
        return this.getToken(FlinkSqlParser.KW_FALSE, 0);
    }
    KW_UNKNOWN() {
        return this.getToken(FlinkSqlParser.KW_UNKNOWN, 0);
    }
    KW_NULL() {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    KW_NOT() {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    enterRule(listener) {
        if (listener.enterLogicalNested) {
            listener.enterLogicalNested(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLogicalNested) {
            listener.exitLogicalNested(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLogicalNested) {
            return visitor.visitLogicalNested(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalBinaryContext extends BooleanExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    booleanExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(BooleanExpressionContext);
        }
        return this.getRuleContext(i, BooleanExpressionContext);
    }
    KW_AND() {
        return this.getToken(FlinkSqlParser.KW_AND, 0);
    }
    KW_OR() {
        return this.getToken(FlinkSqlParser.KW_OR, 0);
    }
    enterRule(listener) {
        if (listener.enterLogicalBinary) {
            listener.enterLogicalBinary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLogicalBinary) {
            listener.exitLogicalBinary(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLogicalBinary) {
            return visitor.visitLogicalBinary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PredicateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_AND() {
        return this.getToken(FlinkSqlParser.KW_AND, 0);
    }
    KW_BETWEEN() {
        return this.getToken(FlinkSqlParser.KW_BETWEEN, 0);
    }
    valueExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }
        return this.getRuleContext(i, ValueExpressionContext);
    }
    KW_NOT() {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    KW_ASYMMETRIC() {
        return this.getToken(FlinkSqlParser.KW_ASYMMETRIC, 0);
    }
    KW_SYMMETRIC() {
        return this.getToken(FlinkSqlParser.KW_SYMMETRIC, 0);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    KW_IN() {
        return this.getToken(FlinkSqlParser.KW_IN, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    KW_EXISTS() {
        return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
    }
    KW_RLIKE() {
        return this.getToken(FlinkSqlParser.KW_RLIKE, 0);
    }
    likePredicate() {
        return this.getRuleContext(0, LikePredicateContext);
    }
    KW_IS() {
        return this.getToken(FlinkSqlParser.KW_IS, 0);
    }
    KW_TRUE() {
        return this.getToken(FlinkSqlParser.KW_TRUE, 0);
    }
    KW_FALSE() {
        return this.getToken(FlinkSqlParser.KW_FALSE, 0);
    }
    KW_UNKNOWN() {
        return this.getToken(FlinkSqlParser.KW_UNKNOWN, 0);
    }
    KW_NULL() {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    KW_FROM() {
        return this.getToken(FlinkSqlParser.KW_FROM, 0);
    }
    KW_DISTINCT() {
        return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
    }
    KW_TO() {
        return this.getToken(FlinkSqlParser.KW_TO, 0);
    }
    KW_SIMILAR() {
        return this.getToken(FlinkSqlParser.KW_SIMILAR, 0);
    }
    KW_ESCAPE() {
        return this.getToken(FlinkSqlParser.KW_ESCAPE, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_predicate;
    }
    enterRule(listener) {
        if (listener.enterPredicate) {
            listener.enterPredicate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPredicate) {
            listener.exitPredicate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPredicate) {
            return visitor.visitPredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LikePredicateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_LIKE() {
        return this.getToken(FlinkSqlParser.KW_LIKE, 0);
    }
    KW_ANY() {
        return this.getToken(FlinkSqlParser.KW_ANY, 0);
    }
    KW_ALL() {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    KW_NOT() {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    KW_ESCAPE() {
        return this.getToken(FlinkSqlParser.KW_ESCAPE, 0);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_likePredicate;
    }
    enterRule(listener) {
        if (listener.enterLikePredicate) {
            listener.enterLikePredicate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLikePredicate) {
            listener.exitLikePredicate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLikePredicate) {
            return visitor.visitLikePredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ValueExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_valueExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    primaryExpression() {
        return this.getRuleContext(0, PrimaryExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterValueExpressionDefault) {
            listener.enterValueExpressionDefault(this);
        }
    }
    exitRule(listener) {
        if (listener.exitValueExpressionDefault) {
            listener.exitValueExpressionDefault(this);
        }
    }
    accept(visitor) {
        if (visitor.visitValueExpressionDefault) {
            return visitor.visitValueExpressionDefault(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComparisonContext extends ValueExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    comparisonOperator() {
        return this.getRuleContext(0, ComparisonOperatorContext);
    }
    valueExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }
        return this.getRuleContext(i, ValueExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterComparison) {
            listener.enterComparison(this);
        }
    }
    exitRule(listener) {
        if (listener.exitComparison) {
            listener.exitComparison(this);
        }
    }
    accept(visitor) {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    valueExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }
        return this.getRuleContext(i, ValueExpressionContext);
    }
    ASTERISK_SIGN() {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    SLASH_SIGN() {
        return this.getToken(FlinkSqlParser.SLASH_SIGN, 0);
    }
    PENCENT_SIGN() {
        return this.getToken(FlinkSqlParser.PENCENT_SIGN, 0);
    }
    KW_DIV() {
        return this.getToken(FlinkSqlParser.KW_DIV, 0);
    }
    ADD_SIGN() {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    HYPNEN_SIGN() {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
    }
    DOUBLE_VERTICAL_SIGN() {
        return this.getToken(FlinkSqlParser.DOUBLE_VERTICAL_SIGN, 0);
    }
    BIT_AND_OP() {
        return this.getToken(FlinkSqlParser.BIT_AND_OP, 0);
    }
    BIT_XOR_OP() {
        return this.getToken(FlinkSqlParser.BIT_XOR_OP, 0);
    }
    BIT_OR_OP() {
        return this.getToken(FlinkSqlParser.BIT_OR_OP, 0);
    }
    enterRule(listener) {
        if (listener.enterArithmeticBinary) {
            listener.enterArithmeticBinary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArithmeticBinary) {
            listener.exitArithmeticBinary(this);
        }
    }
    accept(visitor) {
        if (visitor.visitArithmeticBinary) {
            return visitor.visitArithmeticBinary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    HYPNEN_SIGN() {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
    }
    ADD_SIGN() {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    BIT_NOT_OP() {
        return this.getToken(FlinkSqlParser.BIT_NOT_OP, 0);
    }
    enterRule(listener) {
        if (listener.enterArithmeticUnary) {
            listener.enterArithmeticUnary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArithmeticUnary) {
            listener.exitArithmeticUnary(this);
        }
    }
    accept(visitor) {
        if (visitor.visitArithmeticUnary) {
            return visitor.visitArithmeticUnary(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PrimaryExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_primaryExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class DereferenceContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    dereferenceDefinition() {
        return this.getRuleContext(0, DereferenceDefinitionContext);
    }
    enterRule(listener) {
        if (listener.enterDereference) {
            listener.enterDereference(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDereference) {
            listener.exitDereference(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDereference) {
            return visitor.visitDereference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SimpleCaseContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CASE() {
        return this.getToken(FlinkSqlParser.KW_CASE, 0);
    }
    KW_END() {
        return this.getToken(FlinkSqlParser.KW_END, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    whenClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }
        return this.getRuleContext(i, WhenClauseContext);
    }
    KW_ELSE() {
        return this.getToken(FlinkSqlParser.KW_ELSE, 0);
    }
    enterRule(listener) {
        if (listener.enterSimpleCase) {
            listener.enterSimpleCase(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSimpleCase) {
            listener.exitSimpleCase(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSimpleCase) {
            return visitor.visitSimpleCase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    enterRule(listener) {
        if (listener.enterColumnReference) {
            listener.enterColumnReference(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumnReference) {
            listener.exitColumnReference(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumnReference) {
            return visitor.visitColumnReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LastContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_LAST() {
        return this.getToken(FlinkSqlParser.KW_LAST, 0);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    KW_IGNORE() {
        return this.getToken(FlinkSqlParser.KW_IGNORE, 0);
    }
    KW_NULLS() {
        return this.getToken(FlinkSqlParser.KW_NULLS, 0);
    }
    enterRule(listener) {
        if (listener.enterLast) {
            listener.enterLast(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLast) {
            listener.exitLast(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLast) {
            return visitor.visitLast(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StarContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ASTERISK_SIGN() {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    uid() {
        return this.getRuleContext(0, UidContext);
    }
    DOT() {
        return this.getToken(FlinkSqlParser.DOT, 0);
    }
    enterRule(listener) {
        if (listener.enterStar) {
            listener.enterStar(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStar) {
            listener.exitStar(this);
        }
    }
    accept(visitor) {
        if (visitor.visitStar) {
            return visitor.visitStar(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubscriptContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LS_BRACKET() {
        return this.getToken(FlinkSqlParser.LS_BRACKET, 0);
    }
    RS_BRACKET() {
        return this.getToken(FlinkSqlParser.RS_BRACKET, 0);
    }
    primaryExpression() {
        return this.getRuleContext(0, PrimaryExpressionContext);
    }
    valueExpression() {
        return this.getRuleContext(0, ValueExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterSubscript) {
            listener.enterSubscript(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSubscript) {
            listener.exitSubscript(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSubscript) {
            return visitor.visitSubscript(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    queryStatement() {
        return this.getRuleContext(0, QueryStatementContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    enterRule(listener) {
        if (listener.enterSubqueryExpression) {
            listener.enterSubqueryExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSubqueryExpression) {
            listener.exitSubqueryExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSubqueryExpression) {
            return visitor.visitSubqueryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CastContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CAST() {
        return this.getToken(FlinkSqlParser.KW_CAST, 0);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    columnType() {
        return this.getRuleContext(0, ColumnTypeContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    enterRule(listener) {
        if (listener.enterCast) {
            listener.enterCast(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCast) {
            listener.exitCast(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCast) {
            return visitor.visitCast(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConstantDefaultContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    constant() {
        return this.getRuleContext(0, ConstantContext);
    }
    enterRule(listener) {
        if (listener.enterConstantDefault) {
            listener.enterConstantDefault(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConstantDefault) {
            listener.exitConstantDefault(this);
        }
    }
    accept(visitor) {
        if (visitor.visitConstantDefault) {
            return visitor.visitConstantDefault(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    enterRule(listener) {
        if (listener.enterParenthesizedExpression) {
            listener.enterParenthesizedExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParenthesizedExpression) {
            listener.exitParenthesizedExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    functionName() {
        return this.getRuleContext(0, FunctionNameContext);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    functionParam(i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionParamContext);
        }
        return this.getRuleContext(i, FunctionParamContext);
    }
    setQuantifier() {
        return this.getRuleContext(0, SetQuantifierContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
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
export class SearchedCaseContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CASE() {
        return this.getToken(FlinkSqlParser.KW_CASE, 0);
    }
    KW_END() {
        return this.getToken(FlinkSqlParser.KW_END, 0);
    }
    whenClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(WhenClauseContext);
        }
        return this.getRuleContext(i, WhenClauseContext);
    }
    KW_ELSE() {
        return this.getToken(FlinkSqlParser.KW_ELSE, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterSearchedCase) {
            listener.enterSearchedCase(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSearchedCase) {
            listener.exitSearchedCase(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSearchedCase) {
            return visitor.visitSearchedCase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PositionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_POSITION() {
        return this.getToken(FlinkSqlParser.KW_POSITION, 0);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    KW_IN() {
        return this.getToken(FlinkSqlParser.KW_IN, 0);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    valueExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueExpressionContext);
        }
        return this.getRuleContext(i, ValueExpressionContext);
    }
    enterRule(listener) {
        if (listener.enterPosition) {
            listener.enterPosition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPosition) {
            listener.exitPosition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPosition) {
            return visitor.visitPosition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DateFunctionExpressionContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_CURRENT_TIMESTAMP() {
        return this.getToken(FlinkSqlParser.KW_CURRENT_TIMESTAMP, 0);
    }
    enterRule(listener) {
        if (listener.enterDateFunctionExpression) {
            listener.enterDateFunctionExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDateFunctionExpression) {
            listener.exitDateFunctionExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDateFunctionExpression) {
            return visitor.visitDateFunctionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FirstContext extends PrimaryExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_FIRST() {
        return this.getToken(FlinkSqlParser.KW_FIRST, 0);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    KW_IGNORE() {
        return this.getToken(FlinkSqlParser.KW_IGNORE, 0);
    }
    KW_NULLS() {
        return this.getToken(FlinkSqlParser.KW_NULLS, 0);
    }
    enterRule(listener) {
        if (listener.enterFirst) {
            listener.enterFirst(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFirst) {
            listener.exitFirst(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFirst) {
            return visitor.visitFirst(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionNameCreateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    uid() {
        return this.getRuleContext(0, UidContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_functionNameCreate;
    }
    enterRule(listener) {
        if (listener.enterFunctionNameCreate) {
            listener.enterFunctionNameCreate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunctionNameCreate) {
            listener.exitFunctionNameCreate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFunctionNameCreate) {
            return visitor.visitFunctionNameCreate(this);
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
    reservedKeywordsUsedAsFuncName() {
        return this.getRuleContext(0, ReservedKeywordsUsedAsFuncNameContext);
    }
    uid() {
        return this.getRuleContext(0, UidContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_functionName;
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
export class FunctionParamContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    reservedKeywordsUsedAsFuncParam() {
        return this.getRuleContext(0, ReservedKeywordsUsedAsFuncParamContext);
    }
    timeIntervalUnit() {
        return this.getRuleContext(0, TimeIntervalUnitContext);
    }
    timePointUnit() {
        return this.getRuleContext(0, TimePointUnitContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_functionParam;
    }
    enterRule(listener) {
        if (listener.enterFunctionParam) {
            listener.enterFunctionParam(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunctionParam) {
            listener.exitFunctionParam(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFunctionParam) {
            return visitor.visitFunctionParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DereferenceDefinitionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    uid() {
        return this.getRuleContext(0, UidContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_dereferenceDefinition;
    }
    enterRule(listener) {
        if (listener.enterDereferenceDefinition) {
            listener.enterDereferenceDefinition(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDereferenceDefinition) {
            listener.exitDereferenceDefinition(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDereferenceDefinition) {
            return visitor.visitDereferenceDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CorrelationNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_correlationName;
    }
    enterRule(listener) {
        if (listener.enterCorrelationName) {
            listener.enterCorrelationName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCorrelationName) {
            listener.exitCorrelationName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCorrelationName) {
            return visitor.visitCorrelationName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QualifiedNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    dereferenceDefinition() {
        return this.getRuleContext(0, DereferenceDefinitionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_qualifiedName;
    }
    enterRule(listener) {
        if (listener.enterQualifiedName) {
            listener.enterQualifiedName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQualifiedName) {
            listener.exitQualifiedName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TimeIntervalExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_INTERVAL() {
        return this.getToken(FlinkSqlParser.KW_INTERVAL, 0);
    }
    errorCapturingMultiUnitsInterval() {
        return this.getRuleContext(0, ErrorCapturingMultiUnitsIntervalContext);
    }
    errorCapturingUnitToUnitInterval() {
        return this.getRuleContext(0, ErrorCapturingUnitToUnitIntervalContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_timeIntervalExpression;
    }
    enterRule(listener) {
        if (listener.enterTimeIntervalExpression) {
            listener.enterTimeIntervalExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTimeIntervalExpression) {
            listener.exitTimeIntervalExpression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTimeIntervalExpression) {
            return visitor.visitTimeIntervalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ErrorCapturingMultiUnitsIntervalContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    multiUnitsInterval() {
        return this.getRuleContext(0, MultiUnitsIntervalContext);
    }
    unitToUnitInterval() {
        return this.getRuleContext(0, UnitToUnitIntervalContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval;
    }
    enterRule(listener) {
        if (listener.enterErrorCapturingMultiUnitsInterval) {
            listener.enterErrorCapturingMultiUnitsInterval(this);
        }
    }
    exitRule(listener) {
        if (listener.exitErrorCapturingMultiUnitsInterval) {
            listener.exitErrorCapturingMultiUnitsInterval(this);
        }
    }
    accept(visitor) {
        if (visitor.visitErrorCapturingMultiUnitsInterval) {
            return visitor.visitErrorCapturingMultiUnitsInterval(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultiUnitsIntervalContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    intervalValue(i) {
        if (i === undefined) {
            return this.getRuleContexts(IntervalValueContext);
        }
        return this.getRuleContext(i, IntervalValueContext);
    }
    timeIntervalUnit(i) {
        if (i === undefined) {
            return this.getRuleContexts(TimeIntervalUnitContext);
        }
        return this.getRuleContext(i, TimeIntervalUnitContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_multiUnitsInterval;
    }
    enterRule(listener) {
        if (listener.enterMultiUnitsInterval) {
            listener.enterMultiUnitsInterval(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMultiUnitsInterval) {
            listener.exitMultiUnitsInterval(this);
        }
    }
    accept(visitor) {
        if (visitor.visitMultiUnitsInterval) {
            return visitor.visitMultiUnitsInterval(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ErrorCapturingUnitToUnitIntervalContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unitToUnitInterval(i) {
        if (i === undefined) {
            return this.getRuleContexts(UnitToUnitIntervalContext);
        }
        return this.getRuleContext(i, UnitToUnitIntervalContext);
    }
    multiUnitsInterval() {
        return this.getRuleContext(0, MultiUnitsIntervalContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval;
    }
    enterRule(listener) {
        if (listener.enterErrorCapturingUnitToUnitInterval) {
            listener.enterErrorCapturingUnitToUnitInterval(this);
        }
    }
    exitRule(listener) {
        if (listener.exitErrorCapturingUnitToUnitInterval) {
            listener.exitErrorCapturingUnitToUnitInterval(this);
        }
    }
    accept(visitor) {
        if (visitor.visitErrorCapturingUnitToUnitInterval) {
            return visitor.visitErrorCapturingUnitToUnitInterval(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnitToUnitIntervalContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_TO() {
        return this.getToken(FlinkSqlParser.KW_TO, 0);
    }
    intervalValue() {
        return this.getRuleContext(0, IntervalValueContext);
    }
    timeIntervalUnit(i) {
        if (i === undefined) {
            return this.getRuleContexts(TimeIntervalUnitContext);
        }
        return this.getRuleContext(i, TimeIntervalUnitContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_unitToUnitInterval;
    }
    enterRule(listener) {
        if (listener.enterUnitToUnitInterval) {
            listener.enterUnitToUnitInterval(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnitToUnitInterval) {
            listener.exitUnitToUnitInterval(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUnitToUnitInterval) {
            return visitor.visitUnitToUnitInterval(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntervalValueContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DIG_LITERAL() {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    REAL_LITERAL() {
        return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
    }
    ADD_SIGN() {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    HYPNEN_SIGN() {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
    }
    STRING_LITERAL() {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_intervalValue;
    }
    enterRule(listener) {
        if (listener.enterIntervalValue) {
            listener.enterIntervalValue(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIntervalValue) {
            listener.exitIntervalValue(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIntervalValue) {
            return visitor.visitIntervalValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableAliasContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    KW_AS() {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    identifierList() {
        return this.getRuleContext(0, IdentifierListContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_tableAlias;
    }
    enterRule(listener) {
        if (listener.enterTableAlias) {
            listener.enterTableAlias(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTableAlias) {
            listener.exitTableAlias(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTableAlias) {
            return visitor.visitTableAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ErrorCapturingIdentifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    errorCapturingIdentifierExtra() {
        return this.getRuleContext(0, ErrorCapturingIdentifierExtraContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_errorCapturingIdentifier;
    }
    enterRule(listener) {
        if (listener.enterErrorCapturingIdentifier) {
            listener.enterErrorCapturingIdentifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitErrorCapturingIdentifier) {
            listener.exitErrorCapturingIdentifier(this);
        }
    }
    accept(visitor) {
        if (visitor.visitErrorCapturingIdentifier) {
            return visitor.visitErrorCapturingIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ErrorCapturingIdentifierExtraContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_errorCapturingIdentifierExtra;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    KW_MINUS(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.KW_MINUS);
        }
        else {
            return this.getToken(FlinkSqlParser.KW_MINUS, i);
        }
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    enterRule(listener) {
        if (listener.enterErrorIdent) {
            listener.enterErrorIdent(this);
        }
    }
    exitRule(listener) {
        if (listener.exitErrorIdent) {
            listener.exitErrorIdent(this);
        }
    }
    accept(visitor) {
        if (visitor.visitErrorIdent) {
            return visitor.visitErrorIdent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    enterRule(listener) {
        if (listener.enterRealIdent) {
            listener.enterRealIdent(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRealIdent) {
            listener.exitRealIdent(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRealIdent) {
            return visitor.visitRealIdent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentifierListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    identifierSeq() {
        return this.getRuleContext(0, IdentifierSeqContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_identifierList;
    }
    enterRule(listener) {
        if (listener.enterIdentifierList) {
            listener.enterIdentifierList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIdentifierList) {
            listener.exitIdentifierList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIdentifierList) {
            return visitor.visitIdentifierList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentifierSeqContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_identifierSeq;
    }
    enterRule(listener) {
        if (listener.enterIdentifierSeq) {
            listener.enterIdentifierSeq(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIdentifierSeq) {
            listener.exitIdentifierSeq(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIdentifierSeq) {
            return visitor.visitIdentifierSeq(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_identifier;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class QuotedIdentifierAlternativeContext extends IdentifierContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    quotedIdentifier() {
        return this.getRuleContext(0, QuotedIdentifierContext);
    }
    enterRule(listener) {
        if (listener.enterQuotedIdentifierAlternative) {
            listener.enterQuotedIdentifierAlternative(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQuotedIdentifierAlternative) {
            listener.exitQuotedIdentifierAlternative(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQuotedIdentifierAlternative) {
            return visitor.visitQuotedIdentifierAlternative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NonReservedKeywordsAlternativeContext extends IdentifierContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    nonReservedKeywords() {
        return this.getRuleContext(0, NonReservedKeywordsContext);
    }
    enterRule(listener) {
        if (listener.enterNonReservedKeywordsAlternative) {
            listener.enterNonReservedKeywordsAlternative(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNonReservedKeywordsAlternative) {
            listener.exitNonReservedKeywordsAlternative(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNonReservedKeywordsAlternative) {
            return visitor.visitNonReservedKeywordsAlternative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnquotedIdentifierAlternativeContext extends IdentifierContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    unquotedIdentifier() {
        return this.getRuleContext(0, UnquotedIdentifierContext);
    }
    enterRule(listener) {
        if (listener.enterUnquotedIdentifierAlternative) {
            listener.enterUnquotedIdentifierAlternative(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnquotedIdentifierAlternative) {
            listener.exitUnquotedIdentifierAlternative(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUnquotedIdentifierAlternative) {
            return visitor.visitUnquotedIdentifierAlternative(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnquotedIdentifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DIG_LITERAL() {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    ID_LITERAL() {
        return this.getToken(FlinkSqlParser.ID_LITERAL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_unquotedIdentifier;
    }
    enterRule(listener) {
        if (listener.enterUnquotedIdentifier) {
            listener.enterUnquotedIdentifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnquotedIdentifier) {
            listener.exitUnquotedIdentifier(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUnquotedIdentifier) {
            return visitor.visitUnquotedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class QuotedIdentifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING_LITERAL() {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_quotedIdentifier;
    }
    enterRule(listener) {
        if (listener.enterQuotedIdentifier) {
            listener.enterQuotedIdentifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQuotedIdentifier) {
            listener.exitQuotedIdentifier(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQuotedIdentifier) {
            return visitor.visitQuotedIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WhenClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_WHEN() {
        return this.getToken(FlinkSqlParser.KW_WHEN, 0);
    }
    KW_THEN() {
        return this.getToken(FlinkSqlParser.KW_THEN, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_whenClause;
    }
    enterRule(listener) {
        if (listener.enterWhenClause) {
            listener.enterWhenClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWhenClause) {
            listener.exitWhenClause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWhenClause) {
            return visitor.visitWhenClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CatalogPathContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_catalogPath;
    }
    enterRule(listener) {
        if (listener.enterCatalogPath) {
            listener.enterCatalogPath(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCatalogPath) {
            listener.exitCatalogPath(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCatalogPath) {
            return visitor.visitCatalogPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CatalogPathCreateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_catalogPathCreate;
    }
    enterRule(listener) {
        if (listener.enterCatalogPathCreate) {
            listener.enterCatalogPathCreate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCatalogPathCreate) {
            listener.exitCatalogPathCreate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCatalogPathCreate) {
            return visitor.visitCatalogPathCreate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DatabasePathContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    DOT() {
        return this.getToken(FlinkSqlParser.DOT, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_databasePath;
    }
    enterRule(listener) {
        if (listener.enterDatabasePath) {
            listener.enterDatabasePath(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDatabasePath) {
            listener.exitDatabasePath(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDatabasePath) {
            return visitor.visitDatabasePath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DatabasePathCreateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    DOT() {
        return this.getToken(FlinkSqlParser.DOT, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_databasePathCreate;
    }
    enterRule(listener) {
        if (listener.enterDatabasePathCreate) {
            listener.enterDatabasePathCreate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDatabasePathCreate) {
            listener.exitDatabasePathCreate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDatabasePathCreate) {
            return visitor.visitDatabasePathCreate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TablePathCreateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.DOT);
        }
        else {
            return this.getToken(FlinkSqlParser.DOT, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_tablePathCreate;
    }
    enterRule(listener) {
        if (listener.enterTablePathCreate) {
            listener.enterTablePathCreate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTablePathCreate) {
            listener.exitTablePathCreate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTablePathCreate) {
            return visitor.visitTablePathCreate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TablePathContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.DOT);
        }
        else {
            return this.getToken(FlinkSqlParser.DOT, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_tablePath;
    }
    enterRule(listener) {
        if (listener.enterTablePath) {
            listener.enterTablePath(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTablePath) {
            listener.exitTablePath(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTablePath) {
            return visitor.visitTablePath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ViewPathContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.DOT);
        }
        else {
            return this.getToken(FlinkSqlParser.DOT, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_viewPath;
    }
    enterRule(listener) {
        if (listener.enterViewPath) {
            listener.enterViewPath(this);
        }
    }
    exitRule(listener) {
        if (listener.exitViewPath) {
            listener.exitViewPath(this);
        }
    }
    accept(visitor) {
        if (visitor.visitViewPath) {
            return visitor.visitViewPath(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ViewPathCreateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.DOT);
        }
        else {
            return this.getToken(FlinkSqlParser.DOT, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_viewPathCreate;
    }
    enterRule(listener) {
        if (listener.enterViewPathCreate) {
            listener.enterViewPathCreate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitViewPathCreate) {
            listener.exitViewPathCreate(this);
        }
    }
    accept(visitor) {
        if (visitor.visitViewPathCreate) {
            return visitor.visitViewPathCreate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UidContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }
        return this.getRuleContext(i, IdentifierContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.DOT);
        }
        else {
            return this.getToken(FlinkSqlParser.DOT, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_uid;
    }
    enterRule(listener) {
        if (listener.enterUid) {
            listener.enterUid(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUid) {
            listener.exitUid(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUid) {
            return visitor.visitUid(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WithOptionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_WITH() {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    tablePropertyList() {
        return this.getRuleContext(0, TablePropertyListContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_withOption;
    }
    enterRule(listener) {
        if (listener.enterWithOption) {
            listener.enterWithOption(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWithOption) {
            listener.exitWithOption(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWithOption) {
            return visitor.visitWithOption(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IfNotExistsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_IF() {
        return this.getToken(FlinkSqlParser.KW_IF, 0);
    }
    KW_NOT() {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    KW_EXISTS() {
        return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_ifNotExists;
    }
    enterRule(listener) {
        if (listener.enterIfNotExists) {
            listener.enterIfNotExists(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIfNotExists) {
            listener.exitIfNotExists(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIfNotExists) {
            return visitor.visitIfNotExists(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IfExistsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_IF() {
        return this.getToken(FlinkSqlParser.KW_IF, 0);
    }
    KW_EXISTS() {
        return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_ifExists;
    }
    enterRule(listener) {
        if (listener.enterIfExists) {
            listener.enterIfExists(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIfExists) {
            listener.exitIfExists(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIfExists) {
            return visitor.visitIfExists(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TablePropertyListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LR_BRACKET() {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    tableProperty(i) {
        if (i === undefined) {
            return this.getRuleContexts(TablePropertyContext);
        }
        return this.getRuleContext(i, TablePropertyContext);
    }
    RR_BRACKET() {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.COMMA);
        }
        else {
            return this.getToken(FlinkSqlParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_tablePropertyList;
    }
    enterRule(listener) {
        if (listener.enterTablePropertyList) {
            listener.enterTablePropertyList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTablePropertyList) {
            listener.exitTablePropertyList(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTablePropertyList) {
            return visitor.visitTablePropertyList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TablePropertyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    tablePropertyKey() {
        return this.getRuleContext(0, TablePropertyKeyContext);
    }
    tablePropertyValue() {
        return this.getRuleContext(0, TablePropertyValueContext);
    }
    EQUAL_SYMBOL() {
        return this.getToken(FlinkSqlParser.EQUAL_SYMBOL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_tableProperty;
    }
    enterRule(listener) {
        if (listener.enterTableProperty) {
            listener.enterTableProperty(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTableProperty) {
            listener.exitTableProperty(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTableProperty) {
            return visitor.visitTableProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TablePropertyKeyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    dereferenceDefinition() {
        return this.getRuleContext(0, DereferenceDefinitionContext);
    }
    STRING_LITERAL() {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_tablePropertyKey;
    }
    enterRule(listener) {
        if (listener.enterTablePropertyKey) {
            listener.enterTablePropertyKey(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTablePropertyKey) {
            listener.exitTablePropertyKey(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTablePropertyKey) {
            return visitor.visitTablePropertyKey(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TablePropertyValueContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DIG_LITERAL() {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    REAL_LITERAL() {
        return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
    }
    booleanLiteral() {
        return this.getRuleContext(0, BooleanLiteralContext);
    }
    STRING_LITERAL() {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_tablePropertyValue;
    }
    enterRule(listener) {
        if (listener.enterTablePropertyValue) {
            listener.enterTablePropertyValue(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTablePropertyValue) {
            listener.exitTablePropertyValue(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTablePropertyValue) {
            return visitor.visitTablePropertyValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalOperatorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_AND() {
        return this.getToken(FlinkSqlParser.KW_AND, 0);
    }
    BIT_AND_OP(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.BIT_AND_OP);
        }
        else {
            return this.getToken(FlinkSqlParser.BIT_AND_OP, i);
        }
    }
    KW_OR() {
        return this.getToken(FlinkSqlParser.KW_OR, 0);
    }
    BIT_OR_OP(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.BIT_OR_OP);
        }
        else {
            return this.getToken(FlinkSqlParser.BIT_OR_OP, i);
        }
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_logicalOperator;
    }
    enterRule(listener) {
        if (listener.enterLogicalOperator) {
            listener.enterLogicalOperator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLogicalOperator) {
            listener.exitLogicalOperator(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLogicalOperator) {
            return visitor.visitLogicalOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EQUAL_SYMBOL() {
        return this.getToken(FlinkSqlParser.EQUAL_SYMBOL, 0);
    }
    GREATER_SYMBOL() {
        return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
    }
    LESS_SYMBOL() {
        return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
    }
    EXCLAMATION_SYMBOL() {
        return this.getToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_comparisonOperator;
    }
    enterRule(listener) {
        if (listener.enterComparisonOperator) {
            listener.enterComparisonOperator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitComparisonOperator) {
            listener.exitComparisonOperator(this);
        }
    }
    accept(visitor) {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitOperatorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LESS_SYMBOL(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.LESS_SYMBOL);
        }
        else {
            return this.getToken(FlinkSqlParser.LESS_SYMBOL, i);
        }
    }
    GREATER_SYMBOL(i) {
        if (i === undefined) {
            return this.getTokens(FlinkSqlParser.GREATER_SYMBOL);
        }
        else {
            return this.getToken(FlinkSqlParser.GREATER_SYMBOL, i);
        }
    }
    BIT_AND_OP() {
        return this.getToken(FlinkSqlParser.BIT_AND_OP, 0);
    }
    BIT_XOR_OP() {
        return this.getToken(FlinkSqlParser.BIT_XOR_OP, 0);
    }
    BIT_OR_OP() {
        return this.getToken(FlinkSqlParser.BIT_OR_OP, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_bitOperator;
    }
    enterRule(listener) {
        if (listener.enterBitOperator) {
            listener.enterBitOperator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBitOperator) {
            listener.exitBitOperator(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBitOperator) {
            return visitor.visitBitOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MathOperatorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ASTERISK_SIGN() {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    SLASH_SIGN() {
        return this.getToken(FlinkSqlParser.SLASH_SIGN, 0);
    }
    PENCENT_SIGN() {
        return this.getToken(FlinkSqlParser.PENCENT_SIGN, 0);
    }
    KW_DIV() {
        return this.getToken(FlinkSqlParser.KW_DIV, 0);
    }
    ADD_SIGN() {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    HYPNEN_SIGN() {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
    }
    DOUBLE_HYPNEN_SIGN() {
        return this.getToken(FlinkSqlParser.DOUBLE_HYPNEN_SIGN, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_mathOperator;
    }
    enterRule(listener) {
        if (listener.enterMathOperator) {
            listener.enterMathOperator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMathOperator) {
            listener.exitMathOperator(this);
        }
    }
    accept(visitor) {
        if (visitor.visitMathOperator) {
            return visitor.visitMathOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryOperatorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EXCLAMATION_SYMBOL() {
        return this.getToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0);
    }
    BIT_NOT_OP() {
        return this.getToken(FlinkSqlParser.BIT_NOT_OP, 0);
    }
    ADD_SIGN() {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    HYPNEN_SIGN() {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
    }
    KW_NOT() {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_unaryOperator;
    }
    enterRule(listener) {
        if (listener.enterUnaryOperator) {
            listener.enterUnaryOperator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnaryOperator) {
            listener.exitUnaryOperator(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUnaryOperator) {
            return visitor.visitUnaryOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConstantContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    timeIntervalExpression() {
        return this.getRuleContext(0, TimeIntervalExpressionContext);
    }
    timePointLiteral() {
        return this.getRuleContext(0, TimePointLiteralContext);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    decimalLiteral() {
        return this.getRuleContext(0, DecimalLiteralContext);
    }
    HYPNEN_SIGN() {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
    }
    booleanLiteral() {
        return this.getRuleContext(0, BooleanLiteralContext);
    }
    REAL_LITERAL() {
        return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
    }
    BIT_STRING() {
        return this.getToken(FlinkSqlParser.BIT_STRING, 0);
    }
    KW_NULL() {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    KW_NOT() {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_constant;
    }
    enterRule(listener) {
        if (listener.enterConstant) {
            listener.enterConstant(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConstant) {
            listener.exitConstant(this);
        }
    }
    accept(visitor) {
        if (visitor.visitConstant) {
            return visitor.visitConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TimePointLiteralContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    timePointUnit() {
        return this.getRuleContext(0, TimePointUnitContext);
    }
    stringLiteral() {
        return this.getRuleContext(0, StringLiteralContext);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_timePointLiteral;
    }
    enterRule(listener) {
        if (listener.enterTimePointLiteral) {
            listener.enterTimePointLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTimePointLiteral) {
            listener.exitTimePointLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTimePointLiteral) {
            return visitor.visitTimePointLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING_LITERAL() {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_stringLiteral;
    }
    enterRule(listener) {
        if (listener.enterStringLiteral) {
            listener.enterStringLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStringLiteral) {
            listener.exitStringLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DecimalLiteralContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DIG_LITERAL() {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_decimalLiteral;
    }
    enterRule(listener) {
        if (listener.enterDecimalLiteral) {
            listener.enterDecimalLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDecimalLiteral) {
            listener.exitDecimalLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDecimalLiteral) {
            return visitor.visitDecimalLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BooleanLiteralContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_TRUE() {
        return this.getToken(FlinkSqlParser.KW_TRUE, 0);
    }
    KW_FALSE() {
        return this.getToken(FlinkSqlParser.KW_FALSE, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_booleanLiteral;
    }
    enterRule(listener) {
        if (listener.enterBooleanLiteral) {
            listener.enterBooleanLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBooleanLiteral) {
            listener.exitBooleanLiteral(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBooleanLiteral) {
            return visitor.visitBooleanLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetQuantifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_DISTINCT() {
        return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
    }
    KW_ALL() {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_setQuantifier;
    }
    enterRule(listener) {
        if (listener.enterSetQuantifier) {
            listener.enterSetQuantifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSetQuantifier) {
            listener.exitSetQuantifier(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSetQuantifier) {
            return visitor.visitSetQuantifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TimePointUnitContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_YEAR() {
        return this.getToken(FlinkSqlParser.KW_YEAR, 0);
    }
    KW_QUARTER() {
        return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
    }
    KW_MONTH() {
        return this.getToken(FlinkSqlParser.KW_MONTH, 0);
    }
    KW_WEEK() {
        return this.getToken(FlinkSqlParser.KW_WEEK, 0);
    }
    KW_DAY() {
        return this.getToken(FlinkSqlParser.KW_DAY, 0);
    }
    KW_HOUR() {
        return this.getToken(FlinkSqlParser.KW_HOUR, 0);
    }
    KW_MINUTE() {
        return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
    }
    KW_SECOND() {
        return this.getToken(FlinkSqlParser.KW_SECOND, 0);
    }
    KW_MILLISECOND() {
        return this.getToken(FlinkSqlParser.KW_MILLISECOND, 0);
    }
    KW_MICROSECOND() {
        return this.getToken(FlinkSqlParser.KW_MICROSECOND, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_timePointUnit;
    }
    enterRule(listener) {
        if (listener.enterTimePointUnit) {
            listener.enterTimePointUnit(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTimePointUnit) {
            listener.exitTimePointUnit(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTimePointUnit) {
            return visitor.visitTimePointUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TimeIntervalUnitContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_MILLENNIUM() {
        return this.getToken(FlinkSqlParser.KW_MILLENNIUM, 0);
    }
    KW_CENTURY() {
        return this.getToken(FlinkSqlParser.KW_CENTURY, 0);
    }
    KW_DECADE() {
        return this.getToken(FlinkSqlParser.KW_DECADE, 0);
    }
    KW_YEAR() {
        return this.getToken(FlinkSqlParser.KW_YEAR, 0);
    }
    KW_YEARS() {
        return this.getToken(FlinkSqlParser.KW_YEARS, 0);
    }
    KW_QUARTER() {
        return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
    }
    KW_MONTH() {
        return this.getToken(FlinkSqlParser.KW_MONTH, 0);
    }
    KW_MONTHS() {
        return this.getToken(FlinkSqlParser.KW_MONTHS, 0);
    }
    KW_WEEK() {
        return this.getToken(FlinkSqlParser.KW_WEEK, 0);
    }
    KW_WEEKS() {
        return this.getToken(FlinkSqlParser.KW_WEEKS, 0);
    }
    KW_DAY() {
        return this.getToken(FlinkSqlParser.KW_DAY, 0);
    }
    KW_DAYS() {
        return this.getToken(FlinkSqlParser.KW_DAYS, 0);
    }
    KW_HOUR() {
        return this.getToken(FlinkSqlParser.KW_HOUR, 0);
    }
    KW_HOURS() {
        return this.getToken(FlinkSqlParser.KW_HOURS, 0);
    }
    KW_MINUTE() {
        return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
    }
    KW_MINUTES() {
        return this.getToken(FlinkSqlParser.KW_MINUTES, 0);
    }
    KW_SECOND() {
        return this.getToken(FlinkSqlParser.KW_SECOND, 0);
    }
    KW_SECONDS() {
        return this.getToken(FlinkSqlParser.KW_SECONDS, 0);
    }
    KW_MILLISECOND() {
        return this.getToken(FlinkSqlParser.KW_MILLISECOND, 0);
    }
    KW_MICROSECOND() {
        return this.getToken(FlinkSqlParser.KW_MICROSECOND, 0);
    }
    KW_NANOSECOND() {
        return this.getToken(FlinkSqlParser.KW_NANOSECOND, 0);
    }
    KW_EPOCH() {
        return this.getToken(FlinkSqlParser.KW_EPOCH, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_timeIntervalUnit;
    }
    enterRule(listener) {
        if (listener.enterTimeIntervalUnit) {
            listener.enterTimeIntervalUnit(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTimeIntervalUnit) {
            listener.exitTimeIntervalUnit(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTimeIntervalUnit) {
            return visitor.visitTimeIntervalUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReservedKeywordsUsedAsFuncParamContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ARRAY() {
        return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
    }
    KW_ALL() {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    KW_BOTH() {
        return this.getToken(FlinkSqlParser.KW_BOTH, 0);
    }
    KW_CURRENT_TIMESTAMP() {
        return this.getToken(FlinkSqlParser.KW_CURRENT_TIMESTAMP, 0);
    }
    KW_DISTINCT() {
        return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
    }
    KW_LEADING() {
        return this.getToken(FlinkSqlParser.KW_LEADING, 0);
    }
    KW_TRAILING() {
        return this.getToken(FlinkSqlParser.KW_TRAILING, 0);
    }
    KW_VALUE() {
        return this.getToken(FlinkSqlParser.KW_VALUE, 0);
    }
    ASTERISK_SIGN() {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam;
    }
    enterRule(listener) {
        if (listener.enterReservedKeywordsUsedAsFuncParam) {
            listener.enterReservedKeywordsUsedAsFuncParam(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReservedKeywordsUsedAsFuncParam) {
            listener.exitReservedKeywordsUsedAsFuncParam(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReservedKeywordsUsedAsFuncParam) {
            return visitor.visitReservedKeywordsUsedAsFuncParam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReservedKeywordsUsedAsFuncNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ABS() {
        return this.getToken(FlinkSqlParser.KW_ABS, 0);
    }
    KW_ARRAY() {
        return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
    }
    KW_AVG() {
        return this.getToken(FlinkSqlParser.KW_AVG, 0);
    }
    KW_CARDINALITY() {
        return this.getToken(FlinkSqlParser.KW_CARDINALITY, 0);
    }
    KW_CAST() {
        return this.getToken(FlinkSqlParser.KW_CAST, 0);
    }
    KW_CEIL() {
        return this.getToken(FlinkSqlParser.KW_CEIL, 0);
    }
    KW_CEILING() {
        return this.getToken(FlinkSqlParser.KW_CEILING, 0);
    }
    KW_COALESCE() {
        return this.getToken(FlinkSqlParser.KW_COALESCE, 0);
    }
    KW_COLLECT() {
        return this.getToken(FlinkSqlParser.KW_COLLECT, 0);
    }
    KW_COUNT() {
        return this.getToken(FlinkSqlParser.KW_COUNT, 0);
    }
    KW_CUME_DIST() {
        return this.getToken(FlinkSqlParser.KW_CUME_DIST, 0);
    }
    KW_CURRENT_DATE() {
        return this.getToken(FlinkSqlParser.KW_CURRENT_DATE, 0);
    }
    KW_CURRENT_TIME() {
        return this.getToken(FlinkSqlParser.KW_CURRENT_TIME, 0);
    }
    KW_CURRENT_TIMESTAMP() {
        return this.getToken(FlinkSqlParser.KW_CURRENT_TIMESTAMP, 0);
    }
    KW_DATE() {
        return this.getToken(FlinkSqlParser.KW_DATE, 0);
    }
    KW_DAYOFWEEK() {
        return this.getToken(FlinkSqlParser.KW_DAYOFWEEK, 0);
    }
    KW_DAYOFYEAR() {
        return this.getToken(FlinkSqlParser.KW_DAYOFYEAR, 0);
    }
    KW_DENSE_RANK() {
        return this.getToken(FlinkSqlParser.KW_DENSE_RANK, 0);
    }
    KW_ELEMENT() {
        return this.getToken(FlinkSqlParser.KW_ELEMENT, 0);
    }
    KW_EXP() {
        return this.getToken(FlinkSqlParser.KW_EXP, 0);
    }
    KW_EXTRACT() {
        return this.getToken(FlinkSqlParser.KW_EXTRACT, 0);
    }
    KW_FIRST_VALUE() {
        return this.getToken(FlinkSqlParser.KW_FIRST_VALUE, 0);
    }
    KW_FLOOR() {
        return this.getToken(FlinkSqlParser.KW_FLOOR, 0);
    }
    KW_GROUPING() {
        return this.getToken(FlinkSqlParser.KW_GROUPING, 0);
    }
    KW_HOUR() {
        return this.getToken(FlinkSqlParser.KW_HOUR, 0);
    }
    KW_IF() {
        return this.getToken(FlinkSqlParser.KW_IF, 0);
    }
    KW_LAG() {
        return this.getToken(FlinkSqlParser.KW_LAG, 0);
    }
    KW_LAST_VALUE() {
        return this.getToken(FlinkSqlParser.KW_LAST_VALUE, 0);
    }
    KW_LEAD() {
        return this.getToken(FlinkSqlParser.KW_LEAD, 0);
    }
    KW_LEFT() {
        return this.getToken(FlinkSqlParser.KW_LEFT, 0);
    }
    KW_LN() {
        return this.getToken(FlinkSqlParser.KW_LN, 0);
    }
    KW_LOCALTIME() {
        return this.getToken(FlinkSqlParser.KW_LOCALTIME, 0);
    }
    KW_LOCALTIMESTAMP() {
        return this.getToken(FlinkSqlParser.KW_LOCALTIMESTAMP, 0);
    }
    KW_LOWER() {
        return this.getToken(FlinkSqlParser.KW_LOWER, 0);
    }
    KW_MAP() {
        return this.getToken(FlinkSqlParser.KW_MAP, 0);
    }
    KW_MAX() {
        return this.getToken(FlinkSqlParser.KW_MAX, 0);
    }
    KW_MIN() {
        return this.getToken(FlinkSqlParser.KW_MIN, 0);
    }
    KW_MINUTE() {
        return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
    }
    KW_MOD() {
        return this.getToken(FlinkSqlParser.KW_MOD, 0);
    }
    KW_MONTH() {
        return this.getToken(FlinkSqlParser.KW_MONTH, 0);
    }
    KW_NULLIF() {
        return this.getToken(FlinkSqlParser.KW_NULLIF, 0);
    }
    KW_NTILE() {
        return this.getToken(FlinkSqlParser.KW_NTILE, 0);
    }
    KW_OVERLAY() {
        return this.getToken(FlinkSqlParser.KW_OVERLAY, 0);
    }
    KW_PERCENT_RANK() {
        return this.getToken(FlinkSqlParser.KW_PERCENT_RANK, 0);
    }
    KW_POSITION() {
        return this.getToken(FlinkSqlParser.KW_POSITION, 0);
    }
    KW_POWER() {
        return this.getToken(FlinkSqlParser.KW_POWER, 0);
    }
    KW_QUARTER() {
        return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
    }
    KW_ROW() {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    KW_ROWS() {
        return this.getToken(FlinkSqlParser.KW_ROWS, 0);
    }
    KW_ROW_NUMBER() {
        return this.getToken(FlinkSqlParser.KW_ROW_NUMBER, 0);
    }
    KW_RANK() {
        return this.getToken(FlinkSqlParser.KW_RANK, 0);
    }
    KW_RIGHT() {
        return this.getToken(FlinkSqlParser.KW_RIGHT, 0);
    }
    KW_SECOND() {
        return this.getToken(FlinkSqlParser.KW_SECOND, 0);
    }
    KW_STDDEV_POP() {
        return this.getToken(FlinkSqlParser.KW_STDDEV_POP, 0);
    }
    KW_STDDEV_SAMP() {
        return this.getToken(FlinkSqlParser.KW_STDDEV_SAMP, 0);
    }
    KW_SUBSTRING() {
        return this.getToken(FlinkSqlParser.KW_SUBSTRING, 0);
    }
    KW_SUM() {
        return this.getToken(FlinkSqlParser.KW_SUM, 0);
    }
    KW_TIME() {
        return this.getToken(FlinkSqlParser.KW_TIME, 0);
    }
    KW_TIMESTAMP() {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMP, 0);
    }
    KW_TIMESTAMP_DIFF() {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMP_DIFF, 0);
    }
    KW_TRIM() {
        return this.getToken(FlinkSqlParser.KW_TRIM, 0);
    }
    KW_TRUNCATE() {
        return this.getToken(FlinkSqlParser.KW_TRUNCATE, 0);
    }
    KW_TRY_CAST() {
        return this.getToken(FlinkSqlParser.KW_TRY_CAST, 0);
    }
    KW_UPPER() {
        return this.getToken(FlinkSqlParser.KW_UPPER, 0);
    }
    KW_VAR_POP() {
        return this.getToken(FlinkSqlParser.KW_VAR_POP, 0);
    }
    KW_VAR_SAMP() {
        return this.getToken(FlinkSqlParser.KW_VAR_SAMP, 0);
    }
    KW_WEEK() {
        return this.getToken(FlinkSqlParser.KW_WEEK, 0);
    }
    KW_YEAR() {
        return this.getToken(FlinkSqlParser.KW_YEAR, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName;
    }
    enterRule(listener) {
        if (listener.enterReservedKeywordsUsedAsFuncName) {
            listener.enterReservedKeywordsUsedAsFuncName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReservedKeywordsUsedAsFuncName) {
            listener.exitReservedKeywordsUsedAsFuncName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReservedKeywordsUsedAsFuncName) {
            return visitor.visitReservedKeywordsUsedAsFuncName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NonReservedKeywordsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    KW_ADD() {
        return this.getToken(FlinkSqlParser.KW_ADD, 0);
    }
    KW_AFTER() {
        return this.getToken(FlinkSqlParser.KW_AFTER, 0);
    }
    KW_ASC() {
        return this.getToken(FlinkSqlParser.KW_ASC, 0);
    }
    KW_CASCADE() {
        return this.getToken(FlinkSqlParser.KW_CASCADE, 0);
    }
    KW_CATALOG() {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
    }
    KW_CENTURY() {
        return this.getToken(FlinkSqlParser.KW_CENTURY, 0);
    }
    KW_CONFIG() {
        return this.getToken(FlinkSqlParser.KW_CONFIG, 0);
    }
    KW_CONSTRAINTS() {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINTS, 0);
    }
    KW_CUMULATE() {
        return this.getToken(FlinkSqlParser.KW_CUMULATE, 0);
    }
    KW_DATA() {
        return this.getToken(FlinkSqlParser.KW_DATA, 0);
    }
    KW_DATABASE() {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
    }
    KW_DAYS() {
        return this.getToken(FlinkSqlParser.KW_DAYS, 0);
    }
    KW_DECADE() {
        return this.getToken(FlinkSqlParser.KW_DECADE, 0);
    }
    KW_DESC() {
        return this.getToken(FlinkSqlParser.KW_DESC, 0);
    }
    KW_DESCRIPTOR() {
        return this.getToken(FlinkSqlParser.KW_DESCRIPTOR, 0);
    }
    KW_DIV() {
        return this.getToken(FlinkSqlParser.KW_DIV, 0);
    }
    KW_ENGINE() {
        return this.getToken(FlinkSqlParser.KW_ENGINE, 0);
    }
    KW_EPOCH() {
        return this.getToken(FlinkSqlParser.KW_EPOCH, 0);
    }
    KW_EXCLUDING() {
        return this.getToken(FlinkSqlParser.KW_EXCLUDING, 0);
    }
    KW_FILE() {
        return this.getToken(FlinkSqlParser.KW_FILE, 0);
    }
    KW_FIRST() {
        return this.getToken(FlinkSqlParser.KW_FIRST, 0);
    }
    KW_GENERATED() {
        return this.getToken(FlinkSqlParser.KW_GENERATED, 0);
    }
    KW_HOP() {
        return this.getToken(FlinkSqlParser.KW_HOP, 0);
    }
    KW_HOURS() {
        return this.getToken(FlinkSqlParser.KW_HOURS, 0);
    }
    KW_IGNORE() {
        return this.getToken(FlinkSqlParser.KW_IGNORE, 0);
    }
    KW_INCLUDING() {
        return this.getToken(FlinkSqlParser.KW_INCLUDING, 0);
    }
    KW_JAR() {
        return this.getToken(FlinkSqlParser.KW_JAR, 0);
    }
    KW_JARS() {
        return this.getToken(FlinkSqlParser.KW_JARS, 0);
    }
    KW_JAVA() {
        return this.getToken(FlinkSqlParser.KW_JAVA, 0);
    }
    KW_KEY() {
        return this.getToken(FlinkSqlParser.KW_KEY, 0);
    }
    KW_LAST() {
        return this.getToken(FlinkSqlParser.KW_LAST, 0);
    }
    KW_LOAD() {
        return this.getToken(FlinkSqlParser.KW_LOAD, 0);
    }
    KW_MAP() {
        return this.getToken(FlinkSqlParser.KW_MAP, 0);
    }
    KW_MICROSECOND() {
        return this.getToken(FlinkSqlParser.KW_MICROSECOND, 0);
    }
    KW_MILLENNIUM() {
        return this.getToken(FlinkSqlParser.KW_MILLENNIUM, 0);
    }
    KW_MILLISECOND() {
        return this.getToken(FlinkSqlParser.KW_MILLISECOND, 0);
    }
    KW_MINUTES() {
        return this.getToken(FlinkSqlParser.KW_MINUTES, 0);
    }
    KW_MONTHS() {
        return this.getToken(FlinkSqlParser.KW_MONTHS, 0);
    }
    KW_NANOSECOND() {
        return this.getToken(FlinkSqlParser.KW_NANOSECOND, 0);
    }
    KW_NULLS() {
        return this.getToken(FlinkSqlParser.KW_NULLS, 0);
    }
    KW_OPTIONS() {
        return this.getToken(FlinkSqlParser.KW_OPTIONS, 0);
    }
    KW_PAST() {
        return this.getToken(FlinkSqlParser.KW_PAST, 0);
    }
    KW_PLAN() {
        return this.getToken(FlinkSqlParser.KW_PLAN, 0);
    }
    KW_PRECEDING() {
        return this.getToken(FlinkSqlParser.KW_PRECEDING, 0);
    }
    KW_PYTHON() {
        return this.getToken(FlinkSqlParser.KW_PYTHON, 0);
    }
    KW_PYTHON_ARCHIVES() {
        return this.getToken(FlinkSqlParser.KW_PYTHON_ARCHIVES, 0);
    }
    KW_PYTHON_DEPENDENCIES() {
        return this.getToken(FlinkSqlParser.KW_PYTHON_DEPENDENCIES, 0);
    }
    KW_PYTHON_FILES() {
        return this.getToken(FlinkSqlParser.KW_PYTHON_FILES, 0);
    }
    KW_PYTHON_JAR() {
        return this.getToken(FlinkSqlParser.KW_PYTHON_JAR, 0);
    }
    KW_PYTHON_PARAMETER() {
        return this.getToken(FlinkSqlParser.KW_PYTHON_PARAMETER, 0);
    }
    KW_PYTHON_REQUIREMENTS() {
        return this.getToken(FlinkSqlParser.KW_PYTHON_REQUIREMENTS, 0);
    }
    KW_QUARTER() {
        return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
    }
    KW_REMOVE() {
        return this.getToken(FlinkSqlParser.KW_REMOVE, 0);
    }
    KW_RESTRICT() {
        return this.getToken(FlinkSqlParser.KW_RESTRICT, 0);
    }
    KW_SECONDS() {
        return this.getToken(FlinkSqlParser.KW_SECONDS, 0);
    }
    KW_SESSION() {
        return this.getToken(FlinkSqlParser.KW_SESSION, 0);
    }
    KW_SETS() {
        return this.getToken(FlinkSqlParser.KW_SETS, 0);
    }
    KW_SIZE() {
        return this.getToken(FlinkSqlParser.KW_SIZE, 0);
    }
    KW_SLIDE() {
        return this.getToken(FlinkSqlParser.KW_SLIDE, 0);
    }
    KW_STEP() {
        return this.getToken(FlinkSqlParser.KW_STEP, 0);
    }
    KW_TEMPORARY() {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    KW_TIMECOL() {
        return this.getToken(FlinkSqlParser.KW_TIMECOL, 0);
    }
    KW_TUMBLE() {
        return this.getToken(FlinkSqlParser.KW_TUMBLE, 0);
    }
    KW_UNLOAD() {
        return this.getToken(FlinkSqlParser.KW_UNLOAD, 0);
    }
    KW_VIEW() {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0);
    }
    KW_WEEK() {
        return this.getToken(FlinkSqlParser.KW_WEEK, 0);
    }
    KW_YEARS() {
        return this.getToken(FlinkSqlParser.KW_YEARS, 0);
    }
    KW_ZONE() {
        return this.getToken(FlinkSqlParser.KW_ZONE, 0);
    }
    get ruleIndex() {
        return FlinkSqlParser.RULE_nonReservedKeywords;
    }
    enterRule(listener) {
        if (listener.enterNonReservedKeywords) {
            listener.enterNonReservedKeywords(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNonReservedKeywords) {
            listener.exitNonReservedKeywords(this);
        }
    }
    accept(visitor) {
        if (visitor.visitNonReservedKeywords) {
            return visitor.visitNonReservedKeywords(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
