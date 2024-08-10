// Generated from dt-sql-parser/src/grammar/sqlite/SQLiteParser.g4 by ANTLR 4.13.1
// @ts-nocheck
import * as antlr from "antlr4ng";
import { SQLParserBase } from '../SQLParserBase';
class SQLiteParser extends SQLParserBase {
    get grammarFileName() { return "SQLiteParser.g4"; }
    get literalNames() { return SQLiteParser.literalNames; }
    get symbolicNames() { return SQLiteParser.symbolicNames; }
    get ruleNames() { return SQLiteParser.ruleNames; }
    get serializedATN() { return SQLiteParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SQLiteParser._ATN, SQLiteParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    program() {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, SQLiteParser.RULE_program);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 229;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 2685534499) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & 33554697) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & 2684765569) !== 0) || _la === 144 || _la === 149) {
                    {
                        {
                            this.state = 226;
                            this.singleStmt();
                        }
                    }
                    this.state = 231;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 232;
                this.match(SQLiteParser.EOF);
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
    singleStmt() {
        let localContext = new SingleStmtContext(this.context, this.state);
        this.enterRule(localContext, 2, SQLiteParser.RULE_singleStmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 234;
                this.sql_stmt();
                this.state = 236;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                        this.state = 235;
                        this.match(SQLiteParser.SCOL);
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
    sql_stmt() {
        let localContext = new Sql_stmtContext(this.context, this.state);
        this.enterRule(localContext, 4, SQLiteParser.RULE_sql_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 243;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 71) {
                    {
                        this.state = 238;
                        this.match(SQLiteParser.EXPLAIN_);
                        this.state = 241;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 114) {
                            {
                                this.state = 239;
                                this.match(SQLiteParser.QUERY_);
                                this.state = 240;
                                this.match(SQLiteParser.PLAN_);
                            }
                        }
                    }
                }
                this.state = 269;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context)) {
                    case 1:
                        {
                            this.state = 245;
                            this.alter_table_stmt();
                        }
                        break;
                    case 2:
                        {
                            this.state = 246;
                            this.analyze_stmt();
                        }
                        break;
                    case 3:
                        {
                            this.state = 247;
                            this.attach_stmt();
                        }
                        break;
                    case 4:
                        {
                            this.state = 248;
                            this.begin_stmt();
                        }
                        break;
                    case 5:
                        {
                            this.state = 249;
                            this.commit_stmt();
                        }
                        break;
                    case 6:
                        {
                            this.state = 250;
                            this.create_index_stmt();
                        }
                        break;
                    case 7:
                        {
                            this.state = 251;
                            this.create_table_stmt();
                        }
                        break;
                    case 8:
                        {
                            this.state = 252;
                            this.create_trigger_stmt();
                        }
                        break;
                    case 9:
                        {
                            this.state = 253;
                            this.create_view_stmt();
                        }
                        break;
                    case 10:
                        {
                            this.state = 254;
                            this.create_virtual_table_stmt();
                        }
                        break;
                    case 11:
                        {
                            this.state = 255;
                            this.delete_stmt();
                        }
                        break;
                    case 12:
                        {
                            this.state = 256;
                            this.delete_stmt_limited();
                        }
                        break;
                    case 13:
                        {
                            this.state = 257;
                            this.detach_stmt();
                        }
                        break;
                    case 14:
                        {
                            this.state = 258;
                            this.drop_stmt();
                        }
                        break;
                    case 15:
                        {
                            this.state = 259;
                            this.insert_stmt();
                        }
                        break;
                    case 16:
                        {
                            this.state = 260;
                            this.reindex_stmt();
                        }
                        break;
                    case 17:
                        {
                            this.state = 261;
                            this.release_stmt();
                        }
                        break;
                    case 18:
                        {
                            this.state = 262;
                            this.rollback_stmt();
                        }
                        break;
                    case 19:
                        {
                            this.state = 263;
                            this.savepoint_stmt();
                        }
                        break;
                    case 20:
                        {
                            this.state = 264;
                            this.select_stmt();
                        }
                        break;
                    case 21:
                        {
                            this.state = 265;
                            this.update_stmt();
                        }
                        break;
                    case 22:
                        {
                            this.state = 266;
                            this.update_stmt_limited();
                        }
                        break;
                    case 23:
                        {
                            this.state = 267;
                            this.vacuum_stmt();
                        }
                        break;
                    case 24:
                        {
                            this.state = 268;
                            this.pragma_stmt();
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
    alter_table_stmt() {
        let localContext = new Alter_table_stmtContext(this.context, this.state);
        this.enterRule(localContext, 6, SQLiteParser.RULE_alter_table_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 271;
                this.match(SQLiteParser.ALTER_);
                this.state = 272;
                this.match(SQLiteParser.TABLE_);
                this.state = 276;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context)) {
                    case 1:
                        {
                            this.state = 273;
                            this.schema_name();
                            this.state = 274;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 278;
                this.table_name();
                this.state = 301;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.RENAME_:
                        {
                            this.state = 279;
                            this.match(SQLiteParser.RENAME_);
                            this.state = 289;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context)) {
                                case 1:
                                    {
                                        this.state = 280;
                                        this.match(SQLiteParser.TO_);
                                        this.state = 281;
                                        localContext._new_table_name = this.table_name();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 283;
                                        this.errorHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context)) {
                                            case 1:
                                                {
                                                    this.state = 282;
                                                    this.match(SQLiteParser.COLUMN_);
                                                }
                                                break;
                                        }
                                        this.state = 285;
                                        localContext._old_column_name = this.column_name();
                                        this.state = 286;
                                        this.match(SQLiteParser.TO_);
                                        this.state = 287;
                                        localContext._new_column_name = this.column_name();
                                    }
                                    break;
                            }
                        }
                        break;
                    case SQLiteParser.ADD_:
                        {
                            this.state = 291;
                            this.match(SQLiteParser.ADD_);
                            this.state = 293;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context)) {
                                case 1:
                                    {
                                        this.state = 292;
                                        this.match(SQLiteParser.COLUMN_);
                                    }
                                    break;
                            }
                            this.state = 295;
                            this.column_def();
                        }
                        break;
                    case SQLiteParser.DROP_:
                        {
                            this.state = 296;
                            this.match(SQLiteParser.DROP_);
                            this.state = 298;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 9, this.context)) {
                                case 1:
                                    {
                                        this.state = 297;
                                        this.match(SQLiteParser.COLUMN_);
                                    }
                                    break;
                            }
                            this.state = 300;
                            this.column_name();
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
    analyze_stmt() {
        let localContext = new Analyze_stmtContext(this.context, this.state);
        this.enterRule(localContext, 8, SQLiteParser.RULE_analyze_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 303;
                this.match(SQLiteParser.ANALYZE_);
                this.state = 311;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context)) {
                    case 1:
                        {
                            this.state = 304;
                            this.schema_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 308;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context)) {
                                case 1:
                                    {
                                        this.state = 305;
                                        this.schema_name();
                                        this.state = 306;
                                        this.match(SQLiteParser.DOT);
                                    }
                                    break;
                            }
                            this.state = 310;
                            this.table_or_index_name();
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
    attach_stmt() {
        let localContext = new Attach_stmtContext(this.context, this.state);
        this.enterRule(localContext, 10, SQLiteParser.RULE_attach_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 313;
                this.match(SQLiteParser.ATTACH_);
                this.state = 315;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context)) {
                    case 1:
                        {
                            this.state = 314;
                            this.match(SQLiteParser.DATABASE_);
                        }
                        break;
                }
                this.state = 317;
                this.expr(0);
                this.state = 318;
                this.match(SQLiteParser.AS_);
                this.state = 319;
                this.schema_name();
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
    begin_stmt() {
        let localContext = new Begin_stmtContext(this.context, this.state);
        this.enterRule(localContext, 12, SQLiteParser.RULE_begin_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 321;
                this.match(SQLiteParser.BEGIN_);
                this.state = 323;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 16779265) !== 0)) {
                    {
                        this.state = 322;
                        _la = this.tokenStream.LA(1);
                        if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 16779265) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 329;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 137) {
                    {
                        this.state = 325;
                        this.match(SQLiteParser.TRANSACTION_);
                        this.state = 327;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context)) {
                            case 1:
                                {
                                    this.state = 326;
                                    this.transaction_name();
                                }
                                break;
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
    commit_stmt() {
        let localContext = new Commit_stmtContext(this.context, this.state);
        this.enterRule(localContext, 14, SQLiteParser.RULE_commit_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 331;
                _la = this.tokenStream.LA(1);
                if (!(_la === 47 || _la === 66)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 333;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 137) {
                    {
                        this.state = 332;
                        this.match(SQLiteParser.TRANSACTION_);
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
    rollback_stmt() {
        let localContext = new Rollback_stmtContext(this.context, this.state);
        this.enterRule(localContext, 16, SQLiteParser.RULE_rollback_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 335;
                this.match(SQLiteParser.ROLLBACK_);
                this.state = 337;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 137) {
                    {
                        this.state = 336;
                        this.match(SQLiteParser.TRANSACTION_);
                    }
                }
                this.state = 344;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 136) {
                    {
                        this.state = 339;
                        this.match(SQLiteParser.TO_);
                        this.state = 341;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context)) {
                            case 1:
                                {
                                    this.state = 340;
                                    this.match(SQLiteParser.SAVEPOINT_);
                                }
                                break;
                        }
                        this.state = 343;
                        this.savepoint_name();
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
    savepoint_stmt() {
        let localContext = new Savepoint_stmtContext(this.context, this.state);
        this.enterRule(localContext, 18, SQLiteParser.RULE_savepoint_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 346;
                this.match(SQLiteParser.SAVEPOINT_);
                this.state = 347;
                this.savepoint_name();
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
    release_stmt() {
        let localContext = new Release_stmtContext(this.context, this.state);
        this.enterRule(localContext, 20, SQLiteParser.RULE_release_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 349;
                this.match(SQLiteParser.RELEASE_);
                this.state = 351;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 21, this.context)) {
                    case 1:
                        {
                            this.state = 350;
                            this.match(SQLiteParser.SAVEPOINT_);
                        }
                        break;
                }
                this.state = 353;
                this.savepoint_name();
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
    create_index_stmt() {
        let localContext = new Create_index_stmtContext(this.context, this.state);
        this.enterRule(localContext, 22, SQLiteParser.RULE_create_index_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 355;
                this.match(SQLiteParser.CREATE_);
                this.state = 357;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 140) {
                    {
                        this.state = 356;
                        this.match(SQLiteParser.UNIQUE_);
                    }
                }
                this.state = 359;
                this.match(SQLiteParser.INDEX_);
                this.state = 363;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context)) {
                    case 1:
                        {
                            this.state = 360;
                            this.match(SQLiteParser.IF_);
                            this.state = 361;
                            this.match(SQLiteParser.NOT_);
                            this.state = 362;
                            this.match(SQLiteParser.EXISTS_);
                        }
                        break;
                }
                this.state = 368;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context)) {
                    case 1:
                        {
                            this.state = 365;
                            this.schema_name();
                            this.state = 366;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 370;
                this.index_name();
                this.state = 371;
                this.match(SQLiteParser.ON_);
                this.state = 372;
                this.table_name();
                this.state = 373;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 374;
                this.indexed_column();
                this.state = 379;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                        {
                            this.state = 375;
                            this.match(SQLiteParser.COMMA);
                            this.state = 376;
                            this.indexed_column();
                        }
                    }
                    this.state = 381;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 382;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 385;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                        this.state = 383;
                        this.match(SQLiteParser.WHERE_);
                        this.state = 384;
                        this.expr(0);
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
    indexed_column() {
        let localContext = new Indexed_columnContext(this.context, this.state);
        this.enterRule(localContext, 24, SQLiteParser.RULE_indexed_column);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 389;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context)) {
                    case 1:
                        {
                            this.state = 387;
                            this.column_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 388;
                            this.expr(0);
                        }
                        break;
                }
                this.state = 393;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 45) {
                    {
                        this.state = 391;
                        this.match(SQLiteParser.COLLATE_);
                        this.state = 392;
                        this.collation_name();
                    }
                }
                this.state = 396;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34 || _la === 60) {
                    {
                        this.state = 395;
                        this.asc_desc();
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
    create_table_stmt() {
        let localContext = new Create_table_stmtContext(this.context, this.state);
        this.enterRule(localContext, 26, SQLiteParser.RULE_create_table_stmt);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 398;
                this.match(SQLiteParser.CREATE_);
                this.state = 400;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 133 || _la === 134) {
                    {
                        this.state = 399;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 133 || _la === 134)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 402;
                this.match(SQLiteParser.TABLE_);
                this.state = 406;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context)) {
                    case 1:
                        {
                            this.state = 403;
                            this.match(SQLiteParser.IF_);
                            this.state = 404;
                            this.match(SQLiteParser.NOT_);
                            this.state = 405;
                            this.match(SQLiteParser.EXISTS_);
                        }
                        break;
                }
                this.state = 411;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context)) {
                    case 1:
                        {
                            this.state = 408;
                            this.schema_name();
                            this.state = 409;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 413;
                this.table_name();
                this.state = 437;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.OPEN_PAR:
                        {
                            this.state = 414;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 415;
                            this.column_def();
                            this.state = 420;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
                            while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                                if (alternative === 1 + 1) {
                                    {
                                        {
                                            this.state = 416;
                                            this.match(SQLiteParser.COMMA);
                                            this.state = 417;
                                            this.column_def();
                                        }
                                    }
                                }
                                this.state = 422;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
                            }
                            this.state = 427;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 5) {
                                {
                                    {
                                        this.state = 423;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 424;
                                        this.table_constraint();
                                    }
                                }
                                this.state = 429;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 430;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 433;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 150) {
                                {
                                    this.state = 431;
                                    this.match(SQLiteParser.WITHOUT_);
                                    this.state = 432;
                                    localContext._row_ROW_ID = this.match(SQLiteParser.IDENTIFIER);
                                }
                            }
                        }
                        break;
                    case SQLiteParser.AS_:
                        {
                            this.state = 435;
                            this.match(SQLiteParser.AS_);
                            this.state = 436;
                            this.select_stmt();
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
    column_def() {
        let localContext = new Column_defContext(this.context, this.state);
        this.enterRule(localContext, 28, SQLiteParser.RULE_column_def);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 439;
                this.column_name();
                this.state = 441;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context)) {
                    case 1:
                        {
                            this.state = 440;
                            this.type_name();
                        }
                        break;
                }
                this.state = 446;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 8460289) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & 34821) !== 0) || _la === 140 || _la === 169) {
                    {
                        {
                            this.state = 443;
                            this.column_constraint();
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
    type_name() {
        let localContext = new Type_nameContext(this.context, this.state);
        this.enterRule(localContext, 30, SQLiteParser.RULE_type_name);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 450;
                this.errorHandler.sync(this);
                alternative = 1 + 1;
                do {
                    switch (alternative) {
                        case 1 + 1:
                            {
                                {
                                    this.state = 449;
                                    this.name();
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 452;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 39, this.context);
                } while (alternative !== 1 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 464;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context)) {
                    case 1:
                        {
                            this.state = 454;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 455;
                            this.signed_number();
                            this.state = 456;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case 2:
                        {
                            this.state = 458;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 459;
                            this.signed_number();
                            this.state = 460;
                            this.match(SQLiteParser.COMMA);
                            this.state = 461;
                            this.signed_number();
                            this.state = 462;
                            this.match(SQLiteParser.CLOSE_PAR);
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
    column_constraint() {
        let localContext = new Column_constraintContext(this.context, this.state);
        this.enterRule(localContext, 32, SQLiteParser.RULE_column_constraint);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 468;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 49) {
                    {
                        this.state = 466;
                        this.match(SQLiteParser.CONSTRAINT_);
                        this.state = 467;
                        this.name();
                    }
                }
                this.state = 519;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.PRIMARY_:
                        {
                            {
                                this.state = 470;
                                this.match(SQLiteParser.PRIMARY_);
                                this.state = 471;
                                this.match(SQLiteParser.KEY_);
                                this.state = 473;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 34 || _la === 60) {
                                    {
                                        this.state = 472;
                                        this.asc_desc();
                                    }
                                }
                                this.state = 476;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 107) {
                                    {
                                        this.state = 475;
                                        this.conflict_clause();
                                    }
                                }
                                this.state = 479;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 36) {
                                    {
                                        this.state = 478;
                                        this.match(SQLiteParser.AUTOINCREMENT_);
                                    }
                                }
                            }
                        }
                        break;
                    case SQLiteParser.NOT_:
                    case SQLiteParser.NULL_:
                    case SQLiteParser.UNIQUE_:
                        {
                            this.state = 486;
                            this.errorHandler.sync(this);
                            switch (this.tokenStream.LA(1)) {
                                case SQLiteParser.NOT_:
                                case SQLiteParser.NULL_:
                                    {
                                        this.state = 482;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 102) {
                                            {
                                                this.state = 481;
                                                this.match(SQLiteParser.NOT_);
                                            }
                                        }
                                        this.state = 484;
                                        this.match(SQLiteParser.NULL_);
                                    }
                                    break;
                                case SQLiteParser.UNIQUE_:
                                    {
                                        this.state = 485;
                                        this.match(SQLiteParser.UNIQUE_);
                                    }
                                    break;
                                default:
                                    throw new antlr.NoViableAltException(this);
                            }
                            this.state = 489;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 107) {
                                {
                                    this.state = 488;
                                    this.conflict_clause();
                                }
                            }
                        }
                        break;
                    case SQLiteParser.CHECK_:
                        {
                            this.state = 491;
                            this.match(SQLiteParser.CHECK_);
                            this.state = 492;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 493;
                            this.expr(0);
                            this.state = 494;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case SQLiteParser.DEFAULT_:
                        {
                            this.state = 496;
                            this.match(SQLiteParser.DEFAULT_);
                            this.state = 503;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context)) {
                                case 1:
                                    {
                                        this.state = 497;
                                        this.signed_number();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 498;
                                        this.literal_value();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 499;
                                        this.match(SQLiteParser.OPEN_PAR);
                                        this.state = 500;
                                        this.expr(0);
                                        this.state = 501;
                                        this.match(SQLiteParser.CLOSE_PAR);
                                    }
                                    break;
                            }
                        }
                        break;
                    case SQLiteParser.COLLATE_:
                        {
                            this.state = 505;
                            this.match(SQLiteParser.COLLATE_);
                            this.state = 506;
                            this.collation_name();
                        }
                        break;
                    case SQLiteParser.REFERENCES_:
                        {
                            this.state = 507;
                            this.foreign_key_clause();
                        }
                        break;
                    case SQLiteParser.AS_:
                    case SQLiteParser.GENERATED_:
                        {
                            this.state = 510;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 169) {
                                {
                                    this.state = 508;
                                    this.match(SQLiteParser.GENERATED_);
                                    this.state = 509;
                                    this.match(SQLiteParser.ALWAYS_);
                                }
                            }
                            this.state = 512;
                            this.match(SQLiteParser.AS_);
                            this.state = 513;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 514;
                            this.expr(0);
                            this.state = 515;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 517;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 146 || _la === 171) {
                                {
                                    this.state = 516;
                                    _la = this.tokenStream.LA(1);
                                    if (!(_la === 146 || _la === 171)) {
                                        this.errorHandler.recoverInline(this);
                                    }
                                    else {
                                        this.errorHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                            }
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
    signed_number() {
        let localContext = new Signed_numberContext(this.context, this.state);
        this.enterRule(localContext, 34, SQLiteParser.RULE_signed_number);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 522;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 8 || _la === 9) {
                    {
                        this.state = 521;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 8 || _la === 9)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 524;
                this.match(SQLiteParser.NUMERIC_LITERAL);
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
    table_constraint() {
        let localContext = new Table_constraintContext(this.context, this.state);
        this.enterRule(localContext, 36, SQLiteParser.RULE_table_constraint);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 528;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 49) {
                    {
                        this.state = 526;
                        this.match(SQLiteParser.CONSTRAINT_);
                        this.state = 527;
                        this.name();
                    }
                }
                this.state = 567;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.PRIMARY_:
                    case SQLiteParser.UNIQUE_:
                        {
                            this.state = 533;
                            this.errorHandler.sync(this);
                            switch (this.tokenStream.LA(1)) {
                                case SQLiteParser.PRIMARY_:
                                    {
                                        this.state = 530;
                                        this.match(SQLiteParser.PRIMARY_);
                                        this.state = 531;
                                        this.match(SQLiteParser.KEY_);
                                    }
                                    break;
                                case SQLiteParser.UNIQUE_:
                                    {
                                        this.state = 532;
                                        this.match(SQLiteParser.UNIQUE_);
                                    }
                                    break;
                                default:
                                    throw new antlr.NoViableAltException(this);
                            }
                            this.state = 535;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 536;
                            this.indexed_column();
                            this.state = 541;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 5) {
                                {
                                    {
                                        this.state = 537;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 538;
                                        this.indexed_column();
                                    }
                                }
                                this.state = 543;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 544;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 546;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 107) {
                                {
                                    this.state = 545;
                                    this.conflict_clause();
                                }
                            }
                        }
                        break;
                    case SQLiteParser.CHECK_:
                        {
                            this.state = 548;
                            this.match(SQLiteParser.CHECK_);
                            this.state = 549;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 550;
                            this.expr(0);
                            this.state = 551;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case SQLiteParser.FOREIGN_:
                        {
                            this.state = 553;
                            this.match(SQLiteParser.FOREIGN_);
                            this.state = 554;
                            this.match(SQLiteParser.KEY_);
                            this.state = 555;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 556;
                            this.column_name();
                            this.state = 561;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 5) {
                                {
                                    {
                                        this.state = 557;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 558;
                                        this.column_name();
                                    }
                                }
                                this.state = 563;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 564;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 565;
                            this.foreign_key_clause();
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
    foreign_key_clause() {
        let localContext = new Foreign_key_clauseContext(this.context, this.state);
        this.enterRule(localContext, 38, SQLiteParser.RULE_foreign_key_clause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 569;
                this.match(SQLiteParser.REFERENCES_);
                this.state = 570;
                this.foreign_table();
                this.state = 582;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                        this.state = 571;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 572;
                        this.column_name();
                        this.state = 577;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 5) {
                            {
                                {
                                    this.state = 573;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 574;
                                    this.column_name();
                                }
                            }
                            this.state = 579;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 580;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                }
                this.state = 598;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 99 || _la === 107) {
                    {
                        this.state = 596;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case SQLiteParser.ON_:
                                {
                                    this.state = 584;
                                    this.match(SQLiteParser.ON_);
                                    this.state = 585;
                                    _la = this.tokenStream.LA(1);
                                    if (!(_la === 59 || _la === 141)) {
                                        this.errorHandler.recoverInline(this);
                                    }
                                    else {
                                        this.errorHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 592;
                                    this.errorHandler.sync(this);
                                    switch (this.tokenStream.LA(1)) {
                                        case SQLiteParser.SET_:
                                            {
                                                this.state = 586;
                                                this.match(SQLiteParser.SET_);
                                                this.state = 587;
                                                _la = this.tokenStream.LA(1);
                                                if (!(_la === 56 || _la === 104)) {
                                                    this.errorHandler.recoverInline(this);
                                                }
                                                else {
                                                    this.errorHandler.reportMatch(this);
                                                    this.consume();
                                                }
                                            }
                                            break;
                                        case SQLiteParser.CASCADE_:
                                            {
                                                this.state = 588;
                                                this.match(SQLiteParser.CASCADE_);
                                            }
                                            break;
                                        case SQLiteParser.RESTRICT_:
                                            {
                                                this.state = 589;
                                                this.match(SQLiteParser.RESTRICT_);
                                            }
                                            break;
                                        case SQLiteParser.NO_:
                                            {
                                                this.state = 590;
                                                this.match(SQLiteParser.NO_);
                                                this.state = 591;
                                                this.match(SQLiteParser.ACTION_);
                                            }
                                            break;
                                        default:
                                            throw new antlr.NoViableAltException(this);
                                    }
                                }
                                break;
                            case SQLiteParser.MATCH_:
                                {
                                    this.state = 594;
                                    this.match(SQLiteParser.MATCH_);
                                    this.state = 595;
                                    this.name();
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                    }
                    this.state = 600;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 609;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 66, this.context)) {
                    case 1:
                        {
                            this.state = 602;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 102) {
                                {
                                    this.state = 601;
                                    this.match(SQLiteParser.NOT_);
                                }
                            }
                            this.state = 604;
                            this.match(SQLiteParser.DEFERRABLE_);
                            this.state = 607;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 86) {
                                {
                                    this.state = 605;
                                    this.match(SQLiteParser.INITIALLY_);
                                    this.state = 606;
                                    _la = this.tokenStream.LA(1);
                                    if (!(_la === 58 || _la === 82)) {
                                        this.errorHandler.recoverInline(this);
                                    }
                                    else {
                                        this.errorHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
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
    conflict_clause() {
        let localContext = new Conflict_clauseContext(this.context, this.state);
        this.enterRule(localContext, 40, SQLiteParser.RULE_conflict_clause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 611;
                this.match(SQLiteParser.ON_);
                this.state = 612;
                this.match(SQLiteParser.CONFLICT_);
                this.state = 613;
                _la = this.tokenStream.LA(1);
                if (!(_la === 25 || _la === 72 || _la === 81 || _la === 122 || _la === 126)) {
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
    create_trigger_stmt() {
        let localContext = new Create_trigger_stmtContext(this.context, this.state);
        this.enterRule(localContext, 42, SQLiteParser.RULE_create_trigger_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 615;
                this.match(SQLiteParser.CREATE_);
                this.state = 617;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 133 || _la === 134) {
                    {
                        this.state = 616;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 133 || _la === 134)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 619;
                this.match(SQLiteParser.TRIGGER_);
                this.state = 623;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 68, this.context)) {
                    case 1:
                        {
                            this.state = 620;
                            this.match(SQLiteParser.IF_);
                            this.state = 621;
                            this.match(SQLiteParser.NOT_);
                            this.state = 622;
                            this.match(SQLiteParser.EXISTS_);
                        }
                        break;
                }
                this.state = 628;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 69, this.context)) {
                    case 1:
                        {
                            this.state = 625;
                            this.schema_name();
                            this.state = 626;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 630;
                this.trigger_name();
                this.state = 635;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.BEFORE_:
                        {
                            this.state = 631;
                            this.match(SQLiteParser.BEFORE_);
                        }
                        break;
                    case SQLiteParser.AFTER_:
                        {
                            this.state = 632;
                            this.match(SQLiteParser.AFTER_);
                        }
                        break;
                    case SQLiteParser.INSTEAD_:
                        {
                            this.state = 633;
                            this.match(SQLiteParser.INSTEAD_);
                            this.state = 634;
                            this.match(SQLiteParser.OF_);
                        }
                        break;
                    case SQLiteParser.DELETE_:
                    case SQLiteParser.INSERT_:
                    case SQLiteParser.UPDATE_:
                        break;
                    default:
                        break;
                }
                this.state = 651;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.DELETE_:
                        {
                            this.state = 637;
                            this.match(SQLiteParser.DELETE_);
                        }
                        break;
                    case SQLiteParser.INSERT_:
                        {
                            this.state = 638;
                            this.match(SQLiteParser.INSERT_);
                        }
                        break;
                    case SQLiteParser.UPDATE_:
                        {
                            this.state = 639;
                            this.match(SQLiteParser.UPDATE_);
                            this.state = 649;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 105) {
                                {
                                    this.state = 640;
                                    this.match(SQLiteParser.OF_);
                                    this.state = 641;
                                    this.column_name();
                                    this.state = 646;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 5) {
                                        {
                                            {
                                                this.state = 642;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 643;
                                                this.column_name();
                                            }
                                        }
                                        this.state = 648;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                            }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.state = 653;
                this.match(SQLiteParser.ON_);
                this.state = 654;
                this.table_name();
                this.state = 658;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 73) {
                    {
                        this.state = 655;
                        this.match(SQLiteParser.FOR_);
                        this.state = 656;
                        this.match(SQLiteParser.EACH_);
                        this.state = 657;
                        this.match(SQLiteParser.ROW_);
                    }
                }
                this.state = 662;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                        this.state = 660;
                        this.match(SQLiteParser.WHEN_);
                        this.state = 661;
                        this.expr(0);
                    }
                }
                this.state = 664;
                this.match(SQLiteParser.BEGIN_);
                this.state = 673;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 669;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 76, this.context)) {
                                case 1:
                                    {
                                        this.state = 665;
                                        this.update_stmt();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 666;
                                        this.insert_stmt();
                                    }
                                    break;
                                case 3:
                                    {
                                        this.state = 667;
                                        this.delete_stmt();
                                    }
                                    break;
                                case 4:
                                    {
                                        this.state = 668;
                                        this.select_stmt();
                                    }
                                    break;
                            }
                            this.state = 671;
                            this.match(SQLiteParser.SCOL);
                        }
                    }
                    this.state = 675;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 59 || _la === 88 || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 138936577) !== 0));
                this.state = 677;
                this.match(SQLiteParser.END_);
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
    create_view_stmt() {
        let localContext = new Create_view_stmtContext(this.context, this.state);
        this.enterRule(localContext, 44, SQLiteParser.RULE_create_view_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 679;
                this.match(SQLiteParser.CREATE_);
                this.state = 681;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 133 || _la === 134) {
                    {
                        this.state = 680;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 133 || _la === 134)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 683;
                this.match(SQLiteParser.VIEW_);
                this.state = 687;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 79, this.context)) {
                    case 1:
                        {
                            this.state = 684;
                            this.match(SQLiteParser.IF_);
                            this.state = 685;
                            this.match(SQLiteParser.NOT_);
                            this.state = 686;
                            this.match(SQLiteParser.EXISTS_);
                        }
                        break;
                }
                this.state = 692;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 80, this.context)) {
                    case 1:
                        {
                            this.state = 689;
                            this.schema_name();
                            this.state = 690;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 694;
                this.view_name();
                this.state = 706;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                        this.state = 695;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 696;
                        this.column_name();
                        this.state = 701;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 5) {
                            {
                                {
                                    this.state = 697;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 698;
                                    this.column_name();
                                }
                            }
                            this.state = 703;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 704;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                }
                this.state = 708;
                this.match(SQLiteParser.AS_);
                this.state = 709;
                this.select_stmt();
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
    create_virtual_table_stmt() {
        let localContext = new Create_virtual_table_stmtContext(this.context, this.state);
        this.enterRule(localContext, 46, SQLiteParser.RULE_create_virtual_table_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 711;
                this.match(SQLiteParser.CREATE_);
                this.state = 712;
                this.match(SQLiteParser.VIRTUAL_);
                this.state = 713;
                this.match(SQLiteParser.TABLE_);
                this.state = 717;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 83, this.context)) {
                    case 1:
                        {
                            this.state = 714;
                            this.match(SQLiteParser.IF_);
                            this.state = 715;
                            this.match(SQLiteParser.NOT_);
                            this.state = 716;
                            this.match(SQLiteParser.EXISTS_);
                        }
                        break;
                }
                this.state = 722;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context)) {
                    case 1:
                        {
                            this.state = 719;
                            this.schema_name();
                            this.state = 720;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 724;
                this.table_name();
                this.state = 725;
                this.match(SQLiteParser.USING_);
                this.state = 726;
                this.module_name();
                this.state = 738;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                        this.state = 727;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 728;
                        this.module_argument();
                        this.state = 733;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 5) {
                            {
                                {
                                    this.state = 729;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 730;
                                    this.module_argument();
                                }
                            }
                            this.state = 735;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 736;
                        this.match(SQLiteParser.CLOSE_PAR);
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
    with_clause() {
        let localContext = new With_clauseContext(this.context, this.state);
        this.enterRule(localContext, 48, SQLiteParser.RULE_with_clause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 740;
                this.match(SQLiteParser.WITH_);
                this.state = 742;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 87, this.context)) {
                    case 1:
                        {
                            this.state = 741;
                            this.match(SQLiteParser.RECURSIVE_);
                        }
                        break;
                }
                this.state = 744;
                this.cte_table_name();
                this.state = 745;
                this.match(SQLiteParser.AS_);
                this.state = 746;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 747;
                this.select_stmt();
                this.state = 748;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 758;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                        {
                            this.state = 749;
                            this.match(SQLiteParser.COMMA);
                            this.state = 750;
                            this.cte_table_name();
                            this.state = 751;
                            this.match(SQLiteParser.AS_);
                            this.state = 752;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 753;
                            this.select_stmt();
                            this.state = 754;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                    }
                    this.state = 760;
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
    cte_table_name() {
        let localContext = new Cte_table_nameContext(this.context, this.state);
        this.enterRule(localContext, 50, SQLiteParser.RULE_cte_table_name);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 761;
                this.table_name();
                this.state = 773;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                        this.state = 762;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 763;
                        this.column_name();
                        this.state = 768;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 5) {
                            {
                                {
                                    this.state = 764;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 765;
                                    this.column_name();
                                }
                            }
                            this.state = 770;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 771;
                        this.match(SQLiteParser.CLOSE_PAR);
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
    recursive_cte() {
        let localContext = new Recursive_cteContext(this.context, this.state);
        this.enterRule(localContext, 52, SQLiteParser.RULE_recursive_cte);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 775;
                this.cte_table_name();
                this.state = 776;
                this.match(SQLiteParser.AS_);
                this.state = 777;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 778;
                this.initial_select();
                this.state = 779;
                this.match(SQLiteParser.UNION_);
                this.state = 781;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 29) {
                    {
                        this.state = 780;
                        this.match(SQLiteParser.ALL_);
                    }
                }
                this.state = 783;
                this.recursive_select();
                this.state = 784;
                this.match(SQLiteParser.CLOSE_PAR);
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
    common_table_expression() {
        let localContext = new Common_table_expressionContext(this.context, this.state);
        this.enterRule(localContext, 54, SQLiteParser.RULE_common_table_expression);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 786;
                this.table_name();
                this.state = 798;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                        this.state = 787;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 788;
                        this.column_name();
                        this.state = 793;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 5) {
                            {
                                {
                                    this.state = 789;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 790;
                                    this.column_name();
                                }
                            }
                            this.state = 795;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 796;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                }
                this.state = 800;
                this.match(SQLiteParser.AS_);
                this.state = 801;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 802;
                this.select_stmt();
                this.state = 803;
                this.match(SQLiteParser.CLOSE_PAR);
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
    delete_stmt() {
        let localContext = new Delete_stmtContext(this.context, this.state);
        this.enterRule(localContext, 56, SQLiteParser.RULE_delete_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 806;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 149) {
                    {
                        this.state = 805;
                        this.with_clause();
                    }
                }
                this.state = 808;
                this.match(SQLiteParser.DELETE_);
                this.state = 809;
                this.match(SQLiteParser.FROM_);
                this.state = 810;
                this.qualified_table_name();
                this.state = 813;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                        this.state = 811;
                        this.match(SQLiteParser.WHERE_);
                        this.state = 812;
                        this.expr(0);
                    }
                }
                this.state = 816;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 124) {
                    {
                        this.state = 815;
                        this.returning_clause();
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
    delete_stmt_limited() {
        let localContext = new Delete_stmt_limitedContext(this.context, this.state);
        this.enterRule(localContext, 58, SQLiteParser.RULE_delete_stmt_limited);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 819;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 149) {
                    {
                        this.state = 818;
                        this.with_clause();
                    }
                }
                this.state = 821;
                this.match(SQLiteParser.DELETE_);
                this.state = 822;
                this.match(SQLiteParser.FROM_);
                this.state = 823;
                this.qualified_table_name();
                this.state = 826;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                        this.state = 824;
                        this.match(SQLiteParser.WHERE_);
                        this.state = 825;
                        this.expr(0);
                    }
                }
                this.state = 829;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 124) {
                    {
                        this.state = 828;
                        this.returning_clause();
                    }
                }
                this.state = 835;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 98 || _la === 109) {
                    {
                        this.state = 832;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 109) {
                            {
                                this.state = 831;
                                this.order_by_stmt();
                            }
                        }
                        this.state = 834;
                        this.limit_stmt();
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
    detach_stmt() {
        let localContext = new Detach_stmtContext(this.context, this.state);
        this.enterRule(localContext, 60, SQLiteParser.RULE_detach_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 837;
                this.match(SQLiteParser.DETACH_);
                this.state = 839;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context)) {
                    case 1:
                        {
                            this.state = 838;
                            this.match(SQLiteParser.DATABASE_);
                        }
                        break;
                }
                this.state = 841;
                this.schema_name();
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
    drop_stmt() {
        let localContext = new Drop_stmtContext(this.context, this.state);
        this.enterRule(localContext, 62, SQLiteParser.RULE_drop_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 843;
                this.match(SQLiteParser.DROP_);
                this.state = 844;
                localContext._object = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if (!(_la === 84 || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & 8257) !== 0))) {
                    localContext._object = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 847;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 103, this.context)) {
                    case 1:
                        {
                            this.state = 845;
                            this.match(SQLiteParser.IF_);
                            this.state = 846;
                            this.match(SQLiteParser.EXISTS_);
                        }
                        break;
                }
                this.state = 852;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 104, this.context)) {
                    case 1:
                        {
                            this.state = 849;
                            this.schema_name();
                            this.state = 850;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 854;
                this.any_name();
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
    expr(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 64;
        this.enterRecursionRule(localContext, 64, SQLiteParser.RULE_expr, _p);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 944;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 118, this.context)) {
                    case 1:
                        {
                            this.state = 857;
                            this.literal_value();
                        }
                        break;
                    case 2:
                        {
                            this.state = 858;
                            this.match(SQLiteParser.BIND_PARAMETER);
                        }
                        break;
                    case 3:
                        {
                            this.state = 867;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 106, this.context)) {
                                case 1:
                                    {
                                        this.state = 862;
                                        this.errorHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this.tokenStream, 105, this.context)) {
                                            case 1:
                                                {
                                                    this.state = 859;
                                                    this.schema_name();
                                                    this.state = 860;
                                                    this.match(SQLiteParser.DOT);
                                                }
                                                break;
                                        }
                                        this.state = 864;
                                        this.table_name();
                                        this.state = 865;
                                        this.match(SQLiteParser.DOT);
                                    }
                                    break;
                            }
                            this.state = 869;
                            this.column_name();
                        }
                        break;
                    case 4:
                        {
                            this.state = 870;
                            this.unary_operator();
                            this.state = 871;
                            this.expr(21);
                        }
                        break;
                    case 5:
                        {
                            this.state = 873;
                            this.function_name();
                            this.state = 874;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 887;
                            this.errorHandler.sync(this);
                            switch (this.tokenStream.LA(1)) {
                                case SQLiteParser.OPEN_PAR:
                                case SQLiteParser.PLUS:
                                case SQLiteParser.MINUS:
                                case SQLiteParser.TILDE:
                                case SQLiteParser.ABORT_:
                                case SQLiteParser.ACTION_:
                                case SQLiteParser.ADD_:
                                case SQLiteParser.AFTER_:
                                case SQLiteParser.ALL_:
                                case SQLiteParser.ALTER_:
                                case SQLiteParser.ANALYZE_:
                                case SQLiteParser.AND_:
                                case SQLiteParser.AS_:
                                case SQLiteParser.ASC_:
                                case SQLiteParser.ATTACH_:
                                case SQLiteParser.AUTOINCREMENT_:
                                case SQLiteParser.BEFORE_:
                                case SQLiteParser.BEGIN_:
                                case SQLiteParser.BETWEEN_:
                                case SQLiteParser.BY_:
                                case SQLiteParser.CASCADE_:
                                case SQLiteParser.CASE_:
                                case SQLiteParser.CAST_:
                                case SQLiteParser.CHECK_:
                                case SQLiteParser.COLLATE_:
                                case SQLiteParser.COLUMN_:
                                case SQLiteParser.COMMIT_:
                                case SQLiteParser.CONFLICT_:
                                case SQLiteParser.CONSTRAINT_:
                                case SQLiteParser.CREATE_:
                                case SQLiteParser.CROSS_:
                                case SQLiteParser.CURRENT_DATE_:
                                case SQLiteParser.CURRENT_TIME_:
                                case SQLiteParser.CURRENT_TIMESTAMP_:
                                case SQLiteParser.DATABASE_:
                                case SQLiteParser.DEFAULT_:
                                case SQLiteParser.DEFERRABLE_:
                                case SQLiteParser.DEFERRED_:
                                case SQLiteParser.DELETE_:
                                case SQLiteParser.DESC_:
                                case SQLiteParser.DETACH_:
                                case SQLiteParser.DISTINCT_:
                                case SQLiteParser.DROP_:
                                case SQLiteParser.EACH_:
                                case SQLiteParser.ELSE_:
                                case SQLiteParser.END_:
                                case SQLiteParser.ESCAPE_:
                                case SQLiteParser.EXCEPT_:
                                case SQLiteParser.EXCLUSIVE_:
                                case SQLiteParser.EXISTS_:
                                case SQLiteParser.EXPLAIN_:
                                case SQLiteParser.FAIL_:
                                case SQLiteParser.FOR_:
                                case SQLiteParser.FOREIGN_:
                                case SQLiteParser.FROM_:
                                case SQLiteParser.FULL_:
                                case SQLiteParser.GLOB_:
                                case SQLiteParser.GROUP_:
                                case SQLiteParser.HAVING_:
                                case SQLiteParser.IF_:
                                case SQLiteParser.IGNORE_:
                                case SQLiteParser.IMMEDIATE_:
                                case SQLiteParser.IN_:
                                case SQLiteParser.INDEX_:
                                case SQLiteParser.INDEXED_:
                                case SQLiteParser.INITIALLY_:
                                case SQLiteParser.INNER_:
                                case SQLiteParser.INSERT_:
                                case SQLiteParser.INSTEAD_:
                                case SQLiteParser.INTERSECT_:
                                case SQLiteParser.INTO_:
                                case SQLiteParser.IS_:
                                case SQLiteParser.ISNULL_:
                                case SQLiteParser.JOIN_:
                                case SQLiteParser.KEY_:
                                case SQLiteParser.LEFT_:
                                case SQLiteParser.LIKE_:
                                case SQLiteParser.LIMIT_:
                                case SQLiteParser.MATCH_:
                                case SQLiteParser.NATURAL_:
                                case SQLiteParser.NO_:
                                case SQLiteParser.NOT_:
                                case SQLiteParser.NOTNULL_:
                                case SQLiteParser.NULL_:
                                case SQLiteParser.OF_:
                                case SQLiteParser.OFFSET_:
                                case SQLiteParser.ON_:
                                case SQLiteParser.OR_:
                                case SQLiteParser.ORDER_:
                                case SQLiteParser.OUTER_:
                                case SQLiteParser.PLAN_:
                                case SQLiteParser.PRAGMA_:
                                case SQLiteParser.PRIMARY_:
                                case SQLiteParser.QUERY_:
                                case SQLiteParser.RAISE_:
                                case SQLiteParser.RECURSIVE_:
                                case SQLiteParser.REFERENCES_:
                                case SQLiteParser.REGEXP_:
                                case SQLiteParser.REINDEX_:
                                case SQLiteParser.RELEASE_:
                                case SQLiteParser.RENAME_:
                                case SQLiteParser.REPLACE_:
                                case SQLiteParser.RESTRICT_:
                                case SQLiteParser.RIGHT_:
                                case SQLiteParser.ROLLBACK_:
                                case SQLiteParser.ROW_:
                                case SQLiteParser.ROWS_:
                                case SQLiteParser.SAVEPOINT_:
                                case SQLiteParser.SELECT_:
                                case SQLiteParser.SET_:
                                case SQLiteParser.TABLE_:
                                case SQLiteParser.TEMP_:
                                case SQLiteParser.TEMPORARY_:
                                case SQLiteParser.THEN_:
                                case SQLiteParser.TO_:
                                case SQLiteParser.TRANSACTION_:
                                case SQLiteParser.TRIGGER_:
                                case SQLiteParser.UNION_:
                                case SQLiteParser.UNIQUE_:
                                case SQLiteParser.UPDATE_:
                                case SQLiteParser.USING_:
                                case SQLiteParser.VACUUM_:
                                case SQLiteParser.VALUES_:
                                case SQLiteParser.VIEW_:
                                case SQLiteParser.VIRTUAL_:
                                case SQLiteParser.WHEN_:
                                case SQLiteParser.WHERE_:
                                case SQLiteParser.WITH_:
                                case SQLiteParser.WITHOUT_:
                                case SQLiteParser.FIRST_VALUE_:
                                case SQLiteParser.OVER_:
                                case SQLiteParser.PARTITION_:
                                case SQLiteParser.RANGE_:
                                case SQLiteParser.PRECEDING_:
                                case SQLiteParser.UNBOUNDED_:
                                case SQLiteParser.CURRENT_:
                                case SQLiteParser.FOLLOWING_:
                                case SQLiteParser.CUME_DIST_:
                                case SQLiteParser.DENSE_RANK_:
                                case SQLiteParser.LAG_:
                                case SQLiteParser.LAST_VALUE_:
                                case SQLiteParser.LEAD_:
                                case SQLiteParser.NTH_VALUE_:
                                case SQLiteParser.NTILE_:
                                case SQLiteParser.PERCENT_RANK_:
                                case SQLiteParser.RANK_:
                                case SQLiteParser.ROW_NUMBER_:
                                case SQLiteParser.GENERATED_:
                                case SQLiteParser.ALWAYS_:
                                case SQLiteParser.STORED_:
                                case SQLiteParser.TRUE_:
                                case SQLiteParser.FALSE_:
                                case SQLiteParser.WINDOW_:
                                case SQLiteParser.NULLS_:
                                case SQLiteParser.FIRST_:
                                case SQLiteParser.LAST_:
                                case SQLiteParser.FILTER_:
                                case SQLiteParser.GROUPS_:
                                case SQLiteParser.EXCLUDE_:
                                case SQLiteParser.IDENTIFIER:
                                case SQLiteParser.NUMERIC_LITERAL:
                                case SQLiteParser.BIND_PARAMETER:
                                case SQLiteParser.STRING_LITERAL:
                                case SQLiteParser.BLOB_LITERAL:
                                    {
                                        {
                                            this.state = 876;
                                            this.errorHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context)) {
                                                case 1:
                                                    {
                                                        this.state = 875;
                                                        this.match(SQLiteParser.DISTINCT_);
                                                    }
                                                    break;
                                            }
                                            this.state = 878;
                                            this.expr(0);
                                            this.state = 883;
                                            this.errorHandler.sync(this);
                                            _la = this.tokenStream.LA(1);
                                            while (_la === 5) {
                                                {
                                                    {
                                                        this.state = 879;
                                                        this.match(SQLiteParser.COMMA);
                                                        this.state = 880;
                                                        this.expr(0);
                                                    }
                                                }
                                                this.state = 885;
                                                this.errorHandler.sync(this);
                                                _la = this.tokenStream.LA(1);
                                            }
                                        }
                                    }
                                    break;
                                case SQLiteParser.STAR:
                                    {
                                        this.state = 886;
                                        this.match(SQLiteParser.STAR);
                                    }
                                    break;
                                case SQLiteParser.CLOSE_PAR:
                                    break;
                                default:
                                    break;
                            }
                            this.state = 889;
                            this.match(SQLiteParser.CLOSE_PAR);
                            this.state = 891;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 110, this.context)) {
                                case 1:
                                    {
                                        this.state = 890;
                                        this.filter_clause();
                                    }
                                    break;
                            }
                            this.state = 894;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 111, this.context)) {
                                case 1:
                                    {
                                        this.state = 893;
                                        this.over_clause();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 6:
                        {
                            this.state = 896;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 897;
                            this.expr(0);
                            this.state = 902;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 5) {
                                {
                                    {
                                        this.state = 898;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 899;
                                        this.expr(0);
                                    }
                                }
                                this.state = 904;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 905;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case 7:
                        {
                            this.state = 907;
                            this.match(SQLiteParser.CAST_);
                            this.state = 908;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 909;
                            this.expr(0);
                            this.state = 910;
                            this.match(SQLiteParser.AS_);
                            this.state = 911;
                            this.type_name();
                            this.state = 912;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case 8:
                        {
                            this.state = 918;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 70 || _la === 102) {
                                {
                                    this.state = 915;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 102) {
                                        {
                                            this.state = 914;
                                            this.match(SQLiteParser.NOT_);
                                        }
                                    }
                                    this.state = 917;
                                    this.match(SQLiteParser.EXISTS_);
                                }
                            }
                            this.state = 920;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 921;
                            this.select_stmt();
                            this.state = 922;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case 9:
                        {
                            this.state = 924;
                            this.match(SQLiteParser.CASE_);
                            this.state = 926;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context)) {
                                case 1:
                                    {
                                        this.state = 925;
                                        this.expr(0);
                                    }
                                    break;
                            }
                            this.state = 933;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 928;
                                        this.match(SQLiteParser.WHEN_);
                                        this.state = 929;
                                        this.expr(0);
                                        this.state = 930;
                                        this.match(SQLiteParser.THEN_);
                                        this.state = 931;
                                        this.expr(0);
                                    }
                                }
                                this.state = 935;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 147);
                            this.state = 939;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 65) {
                                {
                                    this.state = 937;
                                    this.match(SQLiteParser.ELSE_);
                                    this.state = 938;
                                    this.expr(0);
                                }
                            }
                            this.state = 941;
                            this.match(SQLiteParser.END_);
                        }
                        break;
                    case 10:
                        {
                            this.state = 943;
                            this.raise_function();
                        }
                        break;
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 1071;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 135, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 1069;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 134, this.context)) {
                                case 1:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 946;
                                        if (!(this.precpred(this.context, 20))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                                        }
                                        this.state = 947;
                                        this.match(SQLiteParser.PIPE2);
                                        this.state = 948;
                                        this.expr(21);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 949;
                                        if (!(this.precpred(this.context, 19))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                                        }
                                        this.state = 950;
                                        _la = this.tokenStream.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 12416) !== 0))) {
                                            this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 951;
                                        this.expr(20);
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 952;
                                        if (!(this.precpred(this.context, 18))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                                        }
                                        this.state = 953;
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 8 || _la === 9)) {
                                            this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 954;
                                        this.expr(19);
                                    }
                                    break;
                                case 4:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 955;
                                        if (!(this.precpred(this.context, 17))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                                        }
                                        this.state = 956;
                                        _la = this.tokenStream.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 245760) !== 0))) {
                                            this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 957;
                                        this.expr(18);
                                    }
                                    break;
                                case 5:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 958;
                                        if (!(this.precpred(this.context, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                                        }
                                        this.state = 959;
                                        _la = this.tokenStream.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3932160) !== 0))) {
                                            this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 960;
                                        this.expr(17);
                                    }
                                    break;
                                case 6:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 961;
                                        if (!(this.precpred(this.context, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                                        }
                                        this.state = 980;
                                        this.errorHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context)) {
                                            case 1:
                                                {
                                                    this.state = 962;
                                                    this.match(SQLiteParser.ASSIGN);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 963;
                                                    this.match(SQLiteParser.EQ);
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 964;
                                                    this.match(SQLiteParser.NOT_EQ1);
                                                }
                                                break;
                                            case 4:
                                                {
                                                    this.state = 965;
                                                    this.match(SQLiteParser.NOT_EQ2);
                                                }
                                                break;
                                            case 5:
                                                {
                                                    this.state = 966;
                                                    this.match(SQLiteParser.IS_);
                                                }
                                                break;
                                            case 6:
                                                {
                                                    this.state = 967;
                                                    this.match(SQLiteParser.IS_);
                                                    this.state = 968;
                                                    this.match(SQLiteParser.NOT_);
                                                }
                                                break;
                                            case 7:
                                                {
                                                    this.state = 969;
                                                    this.match(SQLiteParser.IS_);
                                                    this.state = 971;
                                                    this.errorHandler.sync(this);
                                                    _la = this.tokenStream.LA(1);
                                                    if (_la === 102) {
                                                        {
                                                            this.state = 970;
                                                            this.match(SQLiteParser.NOT_);
                                                        }
                                                    }
                                                    this.state = 973;
                                                    this.match(SQLiteParser.DISTINCT_);
                                                    this.state = 974;
                                                    this.match(SQLiteParser.FROM_);
                                                }
                                                break;
                                            case 8:
                                                {
                                                    this.state = 975;
                                                    this.match(SQLiteParser.IN_);
                                                }
                                                break;
                                            case 9:
                                                {
                                                    this.state = 976;
                                                    this.match(SQLiteParser.LIKE_);
                                                }
                                                break;
                                            case 10:
                                                {
                                                    this.state = 977;
                                                    this.match(SQLiteParser.GLOB_);
                                                }
                                                break;
                                            case 11:
                                                {
                                                    this.state = 978;
                                                    this.match(SQLiteParser.MATCH_);
                                                }
                                                break;
                                            case 12:
                                                {
                                                    this.state = 979;
                                                    this.match(SQLiteParser.REGEXP_);
                                                }
                                                break;
                                        }
                                        this.state = 982;
                                        this.expr(16);
                                    }
                                    break;
                                case 7:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 983;
                                        if (!(this.precpred(this.context, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                                        }
                                        this.state = 984;
                                        this.match(SQLiteParser.AND_);
                                        this.state = 985;
                                        this.expr(15);
                                    }
                                    break;
                                case 8:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 986;
                                        if (!(this.precpred(this.context, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                                        }
                                        this.state = 987;
                                        this.match(SQLiteParser.OR_);
                                        this.state = 988;
                                        this.expr(14);
                                    }
                                    break;
                                case 9:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 989;
                                        if (!(this.precpred(this.context, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                                        }
                                        this.state = 990;
                                        this.match(SQLiteParser.IS_);
                                        this.state = 992;
                                        this.errorHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this.tokenStream, 121, this.context)) {
                                            case 1:
                                                {
                                                    this.state = 991;
                                                    this.match(SQLiteParser.NOT_);
                                                }
                                                break;
                                        }
                                        this.state = 994;
                                        this.expr(7);
                                    }
                                    break;
                                case 10:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 995;
                                        if (!(this.precpred(this.context, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                                        }
                                        this.state = 997;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 102) {
                                            {
                                                this.state = 996;
                                                this.match(SQLiteParser.NOT_);
                                            }
                                        }
                                        this.state = 999;
                                        this.match(SQLiteParser.BETWEEN_);
                                        this.state = 1000;
                                        this.expr(0);
                                        this.state = 1001;
                                        this.match(SQLiteParser.AND_);
                                        this.state = 1002;
                                        this.expr(6);
                                    }
                                    break;
                                case 11:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1004;
                                        if (!(this.precpred(this.context, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                                        }
                                        this.state = 1005;
                                        this.match(SQLiteParser.COLLATE_);
                                        this.state = 1006;
                                        this.collation_name();
                                    }
                                    break;
                                case 12:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1007;
                                        if (!(this.precpred(this.context, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                                        }
                                        this.state = 1009;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 102) {
                                            {
                                                this.state = 1008;
                                                this.match(SQLiteParser.NOT_);
                                            }
                                        }
                                        this.state = 1011;
                                        _la = this.tokenStream.LA(1);
                                        if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 5242881) !== 0) || _la === 118)) {
                                            this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1012;
                                        this.expr(0);
                                        this.state = 1015;
                                        this.errorHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this.tokenStream, 124, this.context)) {
                                            case 1:
                                                {
                                                    this.state = 1013;
                                                    this.match(SQLiteParser.ESCAPE_);
                                                    this.state = 1014;
                                                    this.expr(0);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                case 13:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1017;
                                        if (!(this.precpred(this.context, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                                        }
                                        this.state = 1022;
                                        this.errorHandler.sync(this);
                                        switch (this.tokenStream.LA(1)) {
                                            case SQLiteParser.ISNULL_:
                                                {
                                                    this.state = 1018;
                                                    this.match(SQLiteParser.ISNULL_);
                                                }
                                                break;
                                            case SQLiteParser.NOTNULL_:
                                                {
                                                    this.state = 1019;
                                                    this.match(SQLiteParser.NOTNULL_);
                                                }
                                                break;
                                            case SQLiteParser.NOT_:
                                                {
                                                    this.state = 1020;
                                                    this.match(SQLiteParser.NOT_);
                                                    this.state = 1021;
                                                    this.match(SQLiteParser.NULL_);
                                                }
                                                break;
                                            default:
                                                throw new antlr.NoViableAltException(this);
                                        }
                                    }
                                    break;
                                case 14:
                                    {
                                        localContext = new ExprContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, SQLiteParser.RULE_expr);
                                        this.state = 1024;
                                        if (!(this.precpred(this.context, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                                        }
                                        this.state = 1026;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 102) {
                                            {
                                                this.state = 1025;
                                                this.match(SQLiteParser.NOT_);
                                            }
                                        }
                                        this.state = 1028;
                                        this.match(SQLiteParser.IN_);
                                        this.state = 1067;
                                        this.errorHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this.tokenStream, 133, this.context)) {
                                            case 1:
                                                {
                                                    this.state = 1029;
                                                    this.match(SQLiteParser.OPEN_PAR);
                                                    this.state = 1039;
                                                    this.errorHandler.sync(this);
                                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 128, this.context)) {
                                                        case 1:
                                                            {
                                                                this.state = 1030;
                                                                this.select_stmt();
                                                            }
                                                            break;
                                                        case 2:
                                                            {
                                                                this.state = 1031;
                                                                this.expr(0);
                                                                this.state = 1036;
                                                                this.errorHandler.sync(this);
                                                                _la = this.tokenStream.LA(1);
                                                                while (_la === 5) {
                                                                    {
                                                                        {
                                                                            this.state = 1032;
                                                                            this.match(SQLiteParser.COMMA);
                                                                            this.state = 1033;
                                                                            this.expr(0);
                                                                        }
                                                                    }
                                                                    this.state = 1038;
                                                                    this.errorHandler.sync(this);
                                                                    _la = this.tokenStream.LA(1);
                                                                }
                                                            }
                                                            break;
                                                    }
                                                    this.state = 1041;
                                                    this.match(SQLiteParser.CLOSE_PAR);
                                                }
                                                break;
                                            case 2:
                                                {
                                                    this.state = 1045;
                                                    this.errorHandler.sync(this);
                                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 129, this.context)) {
                                                        case 1:
                                                            {
                                                                this.state = 1042;
                                                                this.schema_name();
                                                                this.state = 1043;
                                                                this.match(SQLiteParser.DOT);
                                                            }
                                                            break;
                                                    }
                                                    this.state = 1047;
                                                    this.table_name();
                                                }
                                                break;
                                            case 3:
                                                {
                                                    this.state = 1051;
                                                    this.errorHandler.sync(this);
                                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 130, this.context)) {
                                                        case 1:
                                                            {
                                                                this.state = 1048;
                                                                this.schema_name();
                                                                this.state = 1049;
                                                                this.match(SQLiteParser.DOT);
                                                            }
                                                            break;
                                                    }
                                                    this.state = 1053;
                                                    this.table_function_name();
                                                    this.state = 1054;
                                                    this.match(SQLiteParser.OPEN_PAR);
                                                    this.state = 1063;
                                                    this.errorHandler.sync(this);
                                                    _la = this.tokenStream.LA(1);
                                                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4261414664) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4026531839) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 1042284543) !== 0)) {
                                                        {
                                                            this.state = 1055;
                                                            this.expr(0);
                                                            this.state = 1060;
                                                            this.errorHandler.sync(this);
                                                            _la = this.tokenStream.LA(1);
                                                            while (_la === 5) {
                                                                {
                                                                    {
                                                                        this.state = 1056;
                                                                        this.match(SQLiteParser.COMMA);
                                                                        this.state = 1057;
                                                                        this.expr(0);
                                                                    }
                                                                }
                                                                this.state = 1062;
                                                                this.errorHandler.sync(this);
                                                                _la = this.tokenStream.LA(1);
                                                            }
                                                        }
                                                    }
                                                    this.state = 1065;
                                                    this.match(SQLiteParser.CLOSE_PAR);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1073;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 135, this.context);
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
    raise_function() {
        let localContext = new Raise_functionContext(this.context, this.state);
        this.enterRule(localContext, 66, SQLiteParser.RULE_raise_function);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1074;
                this.match(SQLiteParser.RAISE_);
                this.state = 1075;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1080;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.IGNORE_:
                        {
                            this.state = 1076;
                            this.match(SQLiteParser.IGNORE_);
                        }
                        break;
                    case SQLiteParser.ABORT_:
                    case SQLiteParser.FAIL_:
                    case SQLiteParser.ROLLBACK_:
                        {
                            this.state = 1077;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 25 || _la === 72 || _la === 126)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1078;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1079;
                            this.error_message();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.state = 1082;
                this.match(SQLiteParser.CLOSE_PAR);
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
    literal_value() {
        let localContext = new Literal_valueContext(this.context, this.state);
        this.enterRule(localContext, 68, SQLiteParser.RULE_literal_value);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1084;
                _la = this.tokenStream.LA(1);
                if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 7) !== 0) || _la === 104 || ((((_la - 172)) & ~0x1F) === 0 && ((1 << (_la - 172)) & 212995) !== 0))) {
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
    value_row() {
        let localContext = new Value_rowContext(this.context, this.state);
        this.enterRule(localContext, 70, SQLiteParser.RULE_value_row);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1086;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1087;
                this.expr(0);
                this.state = 1092;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                        {
                            this.state = 1088;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1089;
                            this.expr(0);
                        }
                    }
                    this.state = 1094;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1095;
                this.match(SQLiteParser.CLOSE_PAR);
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
    values_clause() {
        let localContext = new Values_clauseContext(this.context, this.state);
        this.enterRule(localContext, 72, SQLiteParser.RULE_values_clause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1097;
                this.match(SQLiteParser.VALUES_);
                this.state = 1098;
                this.value_row();
                this.state = 1103;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                        {
                            this.state = 1099;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1100;
                            this.value_row();
                        }
                    }
                    this.state = 1105;
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
    insert_stmt() {
        let localContext = new Insert_stmtContext(this.context, this.state);
        this.enterRule(localContext, 74, SQLiteParser.RULE_insert_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1107;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 149) {
                    {
                        this.state = 1106;
                        this.with_clause();
                    }
                }
                this.state = 1114;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 140, this.context)) {
                    case 1:
                        {
                            this.state = 1109;
                            this.match(SQLiteParser.INSERT_);
                        }
                        break;
                    case 2:
                        {
                            this.state = 1110;
                            this.match(SQLiteParser.REPLACE_);
                        }
                        break;
                    case 3:
                        {
                            this.state = 1111;
                            this.match(SQLiteParser.INSERT_);
                            this.state = 1112;
                            this.match(SQLiteParser.OR_);
                            this.state = 1113;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 25 || _la === 72 || _la === 81 || _la === 122 || _la === 126)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 1116;
                this.match(SQLiteParser.INTO_);
                this.state = 1120;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 141, this.context)) {
                    case 1:
                        {
                            this.state = 1117;
                            this.schema_name();
                            this.state = 1118;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 1122;
                this.table_name();
                this.state = 1125;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 33) {
                    {
                        this.state = 1123;
                        this.match(SQLiteParser.AS_);
                        this.state = 1124;
                        this.table_alias();
                    }
                }
                this.state = 1138;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                        this.state = 1127;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1128;
                        this.column_name();
                        this.state = 1133;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 5) {
                            {
                                {
                                    this.state = 1129;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1130;
                                    this.column_name();
                                }
                            }
                            this.state = 1135;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1136;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                }
                this.state = 1149;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.SELECT_:
                    case SQLiteParser.VALUES_:
                    case SQLiteParser.WITH_:
                        {
                            {
                                this.state = 1142;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 145, this.context)) {
                                    case 1:
                                        {
                                            this.state = 1140;
                                            this.values_clause();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1141;
                                            this.select_stmt();
                                        }
                                        break;
                                }
                                this.state = 1145;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 107) {
                                    {
                                        this.state = 1144;
                                        this.upsert_clause();
                                    }
                                }
                            }
                        }
                        break;
                    case SQLiteParser.DEFAULT_:
                        {
                            this.state = 1147;
                            this.match(SQLiteParser.DEFAULT_);
                            this.state = 1148;
                            this.match(SQLiteParser.VALUES_);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.state = 1152;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 124) {
                    {
                        this.state = 1151;
                        this.returning_clause();
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
    returning_clause() {
        let localContext = new Returning_clauseContext(this.context, this.state);
        this.enterRule(localContext, 76, SQLiteParser.RULE_returning_clause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1154;
                this.match(SQLiteParser.RETURNING_);
                this.state = 1155;
                this.result_column();
                this.state = 1160;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                        {
                            this.state = 1156;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1157;
                            this.result_column();
                        }
                    }
                    this.state = 1162;
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
    upsert_clause() {
        let localContext = new Upsert_clauseContext(this.context, this.state);
        this.enterRule(localContext, 78, SQLiteParser.RULE_upsert_clause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1163;
                this.match(SQLiteParser.ON_);
                this.state = 1164;
                this.match(SQLiteParser.CONFLICT_);
                this.state = 1179;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3) {
                    {
                        this.state = 1165;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1166;
                        this.indexed_column();
                        this.state = 1171;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 5) {
                            {
                                {
                                    this.state = 1167;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1168;
                                    this.indexed_column();
                                }
                            }
                            this.state = 1173;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1174;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1177;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 148) {
                            {
                                this.state = 1175;
                                this.match(SQLiteParser.WHERE_);
                                this.state = 1176;
                                this.expr(0);
                            }
                        }
                    }
                }
                this.state = 1181;
                this.match(SQLiteParser.DO_);
                this.state = 1208;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.NOTHING_:
                        {
                            this.state = 1182;
                            this.match(SQLiteParser.NOTHING_);
                        }
                        break;
                    case SQLiteParser.UPDATE_:
                        {
                            this.state = 1183;
                            this.match(SQLiteParser.UPDATE_);
                            this.state = 1184;
                            this.match(SQLiteParser.SET_);
                            {
                                this.state = 1187;
                                this.errorHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this.tokenStream, 153, this.context)) {
                                    case 1:
                                        {
                                            this.state = 1185;
                                            this.column_name();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1186;
                                            this.column_name_list();
                                        }
                                        break;
                                }
                                this.state = 1189;
                                this.match(SQLiteParser.ASSIGN);
                                this.state = 1190;
                                this.expr(0);
                                this.state = 1201;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                while (_la === 5) {
                                    {
                                        {
                                            this.state = 1191;
                                            this.match(SQLiteParser.COMMA);
                                            this.state = 1194;
                                            this.errorHandler.sync(this);
                                            switch (this.interpreter.adaptivePredict(this.tokenStream, 154, this.context)) {
                                                case 1:
                                                    {
                                                        this.state = 1192;
                                                        this.column_name();
                                                    }
                                                    break;
                                                case 2:
                                                    {
                                                        this.state = 1193;
                                                        this.column_name_list();
                                                    }
                                                    break;
                                            }
                                            this.state = 1196;
                                            this.match(SQLiteParser.ASSIGN);
                                            this.state = 1197;
                                            this.expr(0);
                                        }
                                    }
                                    this.state = 1203;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                }
                                this.state = 1206;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 148) {
                                    {
                                        this.state = 1204;
                                        this.match(SQLiteParser.WHERE_);
                                        this.state = 1205;
                                        this.expr(0);
                                    }
                                }
                            }
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
    pragma_stmt() {
        let localContext = new Pragma_stmtContext(this.context, this.state);
        this.enterRule(localContext, 80, SQLiteParser.RULE_pragma_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1210;
                this.match(SQLiteParser.PRAGMA_);
                this.state = 1214;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 158, this.context)) {
                    case 1:
                        {
                            this.state = 1211;
                            this.schema_name();
                            this.state = 1212;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 1216;
                this.pragma_name();
                this.state = 1223;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.ASSIGN:
                        {
                            this.state = 1217;
                            this.match(SQLiteParser.ASSIGN);
                            this.state = 1218;
                            this.pragma_value();
                        }
                        break;
                    case SQLiteParser.OPEN_PAR:
                        {
                            this.state = 1219;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1220;
                            this.pragma_value();
                            this.state = 1221;
                            this.match(SQLiteParser.CLOSE_PAR);
                        }
                        break;
                    case SQLiteParser.EOF:
                    case SQLiteParser.SCOL:
                    case SQLiteParser.ALTER_:
                    case SQLiteParser.ANALYZE_:
                    case SQLiteParser.ATTACH_:
                    case SQLiteParser.BEGIN_:
                    case SQLiteParser.COMMIT_:
                    case SQLiteParser.CREATE_:
                    case SQLiteParser.DELETE_:
                    case SQLiteParser.DETACH_:
                    case SQLiteParser.DROP_:
                    case SQLiteParser.END_:
                    case SQLiteParser.EXPLAIN_:
                    case SQLiteParser.INSERT_:
                    case SQLiteParser.PRAGMA_:
                    case SQLiteParser.REINDEX_:
                    case SQLiteParser.RELEASE_:
                    case SQLiteParser.REPLACE_:
                    case SQLiteParser.ROLLBACK_:
                    case SQLiteParser.SAVEPOINT_:
                    case SQLiteParser.SELECT_:
                    case SQLiteParser.UPDATE_:
                    case SQLiteParser.VACUUM_:
                    case SQLiteParser.VALUES_:
                    case SQLiteParser.WITH_:
                        break;
                    default:
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
    pragma_value() {
        let localContext = new Pragma_valueContext(this.context, this.state);
        this.enterRule(localContext, 82, SQLiteParser.RULE_pragma_value);
        try {
            this.state = 1228;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 160, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1225;
                        this.signed_number();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1226;
                        this.name();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1227;
                        this.match(SQLiteParser.STRING_LITERAL);
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
    reindex_stmt() {
        let localContext = new Reindex_stmtContext(this.context, this.state);
        this.enterRule(localContext, 84, SQLiteParser.RULE_reindex_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1230;
                this.match(SQLiteParser.REINDEX_);
                this.state = 1241;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context)) {
                    case 1:
                        {
                            this.state = 1231;
                            this.collation_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1235;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 161, this.context)) {
                                case 1:
                                    {
                                        this.state = 1232;
                                        this.schema_name();
                                        this.state = 1233;
                                        this.match(SQLiteParser.DOT);
                                    }
                                    break;
                            }
                            this.state = 1239;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 162, this.context)) {
                                case 1:
                                    {
                                        this.state = 1237;
                                        this.table_name();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1238;
                                        this.index_name();
                                    }
                                    break;
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
    select_stmt() {
        let localContext = new Select_stmtContext(this.context, this.state);
        this.enterRule(localContext, 86, SQLiteParser.RULE_select_stmt);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1244;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 149) {
                    {
                        this.state = 1243;
                        this.common_table_stmt();
                    }
                }
                this.state = 1246;
                this.select_core();
                this.state = 1252;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 165, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1247;
                                this.compound_operator();
                                this.state = 1248;
                                this.select_core();
                            }
                        }
                    }
                    this.state = 1254;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 165, this.context);
                }
                this.state = 1256;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 109) {
                    {
                        this.state = 1255;
                        this.order_by_stmt();
                    }
                }
                this.state = 1259;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 98) {
                    {
                        this.state = 1258;
                        this.limit_stmt();
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
    join_clause() {
        let localContext = new Join_clauseContext(this.context, this.state);
        this.enterRule(localContext, 88, SQLiteParser.RULE_join_clause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1261;
                this.table_or_subquery();
                this.state = 1269;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5 || _la === 51 || _la === 76 || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 8833) !== 0) || _la === 125) {
                    {
                        {
                            this.state = 1262;
                            this.join_operator();
                            this.state = 1263;
                            this.table_or_subquery();
                            this.state = 1265;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 168, this.context)) {
                                case 1:
                                    {
                                        this.state = 1264;
                                        this.join_constraint();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1271;
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
    select_core() {
        let localContext = new Select_coreContext(this.context, this.state);
        this.enterRule(localContext, 90, SQLiteParser.RULE_select_core);
        let _la;
        try {
            this.state = 1335;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SQLiteParser.SELECT_:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 1272;
                            this.match(SQLiteParser.SELECT_);
                            this.state = 1274;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 170, this.context)) {
                                case 1:
                                    {
                                        this.state = 1273;
                                        _la = this.tokenStream.LA(1);
                                        if (!(_la === 29 || _la === 62)) {
                                            this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                    }
                                    break;
                            }
                            this.state = 1276;
                            this.result_column();
                            this.state = 1281;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 5) {
                                {
                                    {
                                        this.state = 1277;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 1278;
                                        this.result_column();
                                    }
                                }
                                this.state = 1283;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 1296;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 75) {
                                {
                                    this.state = 1284;
                                    this.match(SQLiteParser.FROM_);
                                    this.state = 1294;
                                    this.errorHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 173, this.context)) {
                                        case 1:
                                            {
                                                this.state = 1285;
                                                this.table_or_subquery();
                                                this.state = 1290;
                                                this.errorHandler.sync(this);
                                                _la = this.tokenStream.LA(1);
                                                while (_la === 5) {
                                                    {
                                                        {
                                                            this.state = 1286;
                                                            this.match(SQLiteParser.COMMA);
                                                            this.state = 1287;
                                                            this.table_or_subquery();
                                                        }
                                                    }
                                                    this.state = 1292;
                                                    this.errorHandler.sync(this);
                                                    _la = this.tokenStream.LA(1);
                                                }
                                            }
                                            break;
                                        case 2:
                                            {
                                                this.state = 1293;
                                                this.join_clause();
                                            }
                                            break;
                                    }
                                }
                            }
                            this.state = 1300;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 148) {
                                {
                                    this.state = 1298;
                                    this.match(SQLiteParser.WHERE_);
                                    this.state = 1299;
                                    localContext._whereExpr = this.expr(0);
                                }
                            }
                            this.state = 1316;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 78) {
                                {
                                    this.state = 1302;
                                    this.match(SQLiteParser.GROUP_);
                                    this.state = 1303;
                                    this.match(SQLiteParser.BY_);
                                    this.state = 1304;
                                    localContext._expr = this.expr(0);
                                    localContext._groupByExpr.push(localContext._expr);
                                    this.state = 1309;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 5) {
                                        {
                                            {
                                                this.state = 1305;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1306;
                                                localContext._expr = this.expr(0);
                                                localContext._groupByExpr.push(localContext._expr);
                                            }
                                        }
                                        this.state = 1311;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                    this.state = 1314;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 79) {
                                        {
                                            this.state = 1312;
                                            this.match(SQLiteParser.HAVING_);
                                            this.state = 1313;
                                            localContext._havingExpr = this.expr(0);
                                        }
                                    }
                                }
                            }
                            this.state = 1332;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 174) {
                                {
                                    this.state = 1318;
                                    this.match(SQLiteParser.WINDOW_);
                                    this.state = 1319;
                                    this.window_name();
                                    this.state = 1320;
                                    this.match(SQLiteParser.AS_);
                                    this.state = 1321;
                                    this.window_defn();
                                    this.state = 1329;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 5) {
                                        {
                                            {
                                                this.state = 1322;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1323;
                                                this.window_name();
                                                this.state = 1324;
                                                this.match(SQLiteParser.AS_);
                                                this.state = 1325;
                                                this.window_defn();
                                            }
                                        }
                                        this.state = 1331;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                            }
                        }
                    }
                    break;
                case SQLiteParser.VALUES_:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1334;
                        this.values_clause();
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
    factored_select_stmt() {
        let localContext = new Factored_select_stmtContext(this.context, this.state);
        this.enterRule(localContext, 92, SQLiteParser.RULE_factored_select_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1337;
                this.select_stmt();
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
    simple_select_stmt() {
        let localContext = new Simple_select_stmtContext(this.context, this.state);
        this.enterRule(localContext, 94, SQLiteParser.RULE_simple_select_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1340;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 149) {
                    {
                        this.state = 1339;
                        this.common_table_stmt();
                    }
                }
                this.state = 1342;
                this.select_core();
                this.state = 1344;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 109) {
                    {
                        this.state = 1343;
                        this.order_by_stmt();
                    }
                }
                this.state = 1347;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 98) {
                    {
                        this.state = 1346;
                        this.limit_stmt();
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
    compound_select_stmt() {
        let localContext = new Compound_select_stmtContext(this.context, this.state);
        this.enterRule(localContext, 96, SQLiteParser.RULE_compound_select_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1350;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 149) {
                    {
                        this.state = 1349;
                        this.common_table_stmt();
                    }
                }
                this.state = 1352;
                this.select_core();
                this.state = 1362;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 1359;
                            this.errorHandler.sync(this);
                            switch (this.tokenStream.LA(1)) {
                                case SQLiteParser.UNION_:
                                    {
                                        this.state = 1353;
                                        this.match(SQLiteParser.UNION_);
                                        this.state = 1355;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        if (_la === 29) {
                                            {
                                                this.state = 1354;
                                                this.match(SQLiteParser.ALL_);
                                            }
                                        }
                                    }
                                    break;
                                case SQLiteParser.INTERSECT_:
                                    {
                                        this.state = 1357;
                                        this.match(SQLiteParser.INTERSECT_);
                                    }
                                    break;
                                case SQLiteParser.EXCEPT_:
                                    {
                                        this.state = 1358;
                                        this.match(SQLiteParser.EXCEPT_);
                                    }
                                    break;
                                default:
                                    throw new antlr.NoViableAltException(this);
                            }
                            this.state = 1361;
                            this.select_core();
                        }
                    }
                    this.state = 1364;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 68 || _la === 90 || _la === 139);
                this.state = 1367;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 109) {
                    {
                        this.state = 1366;
                        this.order_by_stmt();
                    }
                }
                this.state = 1370;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 98) {
                    {
                        this.state = 1369;
                        this.limit_stmt();
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
    table_or_subquery() {
        let localContext = new Table_or_subqueryContext(this.context, this.state);
        this.enterRule(localContext, 98, SQLiteParser.RULE_table_or_subquery);
        let _la;
        try {
            this.state = 1436;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 203, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        {
                            this.state = 1375;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 191, this.context)) {
                                case 1:
                                    {
                                        this.state = 1372;
                                        this.schema_name();
                                        this.state = 1373;
                                        this.match(SQLiteParser.DOT);
                                    }
                                    break;
                            }
                            this.state = 1377;
                            this.table_name();
                            this.state = 1382;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 193, this.context)) {
                                case 1:
                                    {
                                        this.state = 1379;
                                        this.errorHandler.sync(this);
                                        switch (this.interpreter.adaptivePredict(this.tokenStream, 192, this.context)) {
                                            case 1:
                                                {
                                                    this.state = 1378;
                                                    this.match(SQLiteParser.AS_);
                                                }
                                                break;
                                        }
                                        this.state = 1381;
                                        this.table_alias();
                                    }
                                    break;
                            }
                            this.state = 1389;
                            this.errorHandler.sync(this);
                            switch (this.tokenStream.LA(1)) {
                                case SQLiteParser.INDEXED_:
                                    {
                                        this.state = 1384;
                                        this.match(SQLiteParser.INDEXED_);
                                        this.state = 1385;
                                        this.match(SQLiteParser.BY_);
                                        this.state = 1386;
                                        this.index_name();
                                    }
                                    break;
                                case SQLiteParser.NOT_:
                                    {
                                        this.state = 1387;
                                        this.match(SQLiteParser.NOT_);
                                        this.state = 1388;
                                        this.match(SQLiteParser.INDEXED_);
                                    }
                                    break;
                                case SQLiteParser.EOF:
                                case SQLiteParser.SCOL:
                                case SQLiteParser.CLOSE_PAR:
                                case SQLiteParser.COMMA:
                                case SQLiteParser.ALTER_:
                                case SQLiteParser.ANALYZE_:
                                case SQLiteParser.ATTACH_:
                                case SQLiteParser.BEGIN_:
                                case SQLiteParser.COMMIT_:
                                case SQLiteParser.CREATE_:
                                case SQLiteParser.CROSS_:
                                case SQLiteParser.DELETE_:
                                case SQLiteParser.DETACH_:
                                case SQLiteParser.DROP_:
                                case SQLiteParser.END_:
                                case SQLiteParser.EXCEPT_:
                                case SQLiteParser.EXPLAIN_:
                                case SQLiteParser.FULL_:
                                case SQLiteParser.GROUP_:
                                case SQLiteParser.INNER_:
                                case SQLiteParser.INSERT_:
                                case SQLiteParser.INTERSECT_:
                                case SQLiteParser.JOIN_:
                                case SQLiteParser.LEFT_:
                                case SQLiteParser.LIMIT_:
                                case SQLiteParser.NATURAL_:
                                case SQLiteParser.ON_:
                                case SQLiteParser.ORDER_:
                                case SQLiteParser.PRAGMA_:
                                case SQLiteParser.REINDEX_:
                                case SQLiteParser.RELEASE_:
                                case SQLiteParser.REPLACE_:
                                case SQLiteParser.RETURNING_:
                                case SQLiteParser.RIGHT_:
                                case SQLiteParser.ROLLBACK_:
                                case SQLiteParser.SAVEPOINT_:
                                case SQLiteParser.SELECT_:
                                case SQLiteParser.UNION_:
                                case SQLiteParser.UPDATE_:
                                case SQLiteParser.USING_:
                                case SQLiteParser.VACUUM_:
                                case SQLiteParser.VALUES_:
                                case SQLiteParser.WHERE_:
                                case SQLiteParser.WITH_:
                                case SQLiteParser.WINDOW_:
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1394;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 195, this.context)) {
                            case 1:
                                {
                                    this.state = 1391;
                                    this.schema_name();
                                    this.state = 1392;
                                    this.match(SQLiteParser.DOT);
                                }
                                break;
                        }
                        this.state = 1396;
                        this.table_function_name();
                        this.state = 1397;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1398;
                        this.expr(0);
                        this.state = 1403;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 5) {
                            {
                                {
                                    this.state = 1399;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1400;
                                    this.expr(0);
                                }
                            }
                            this.state = 1405;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1406;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1411;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 198, this.context)) {
                            case 1:
                                {
                                    this.state = 1408;
                                    this.errorHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 197, this.context)) {
                                        case 1:
                                            {
                                                this.state = 1407;
                                                this.match(SQLiteParser.AS_);
                                            }
                                            break;
                                    }
                                    this.state = 1410;
                                    this.table_alias();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1413;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1423;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 200, this.context)) {
                            case 1:
                                {
                                    this.state = 1414;
                                    this.table_or_subquery();
                                    this.state = 1419;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 5) {
                                        {
                                            {
                                                this.state = 1415;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1416;
                                                this.table_or_subquery();
                                            }
                                        }
                                        this.state = 1421;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1422;
                                    this.join_clause();
                                }
                                break;
                        }
                        this.state = 1425;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1427;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1428;
                        this.select_stmt();
                        this.state = 1429;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1434;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 202, this.context)) {
                            case 1:
                                {
                                    this.state = 1431;
                                    this.errorHandler.sync(this);
                                    switch (this.interpreter.adaptivePredict(this.tokenStream, 201, this.context)) {
                                        case 1:
                                            {
                                                this.state = 1430;
                                                this.match(SQLiteParser.AS_);
                                            }
                                            break;
                                    }
                                    this.state = 1433;
                                    this.table_alias();
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
    result_column() {
        let localContext = new Result_columnContext(this.context, this.state);
        this.enterRule(localContext, 100, SQLiteParser.RULE_result_column);
        let _la;
        try {
            this.state = 1450;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 206, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1438;
                        this.match(SQLiteParser.STAR);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1439;
                        this.table_name();
                        this.state = 1440;
                        this.match(SQLiteParser.DOT);
                        this.state = 1441;
                        this.match(SQLiteParser.STAR);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1443;
                        this.expr(0);
                        this.state = 1448;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 33 || _la === 185 || _la === 188) {
                            {
                                this.state = 1445;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                if (_la === 33) {
                                    {
                                        this.state = 1444;
                                        this.match(SQLiteParser.AS_);
                                    }
                                }
                                this.state = 1447;
                                this.column_alias();
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
    join_operator() {
        let localContext = new Join_operatorContext(this.context, this.state);
        this.enterRule(localContext, 102, SQLiteParser.RULE_join_operator);
        let _la;
        try {
            this.state = 1465;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SQLiteParser.COMMA:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1452;
                        this.match(SQLiteParser.COMMA);
                    }
                    break;
                case SQLiteParser.CROSS_:
                case SQLiteParser.FULL_:
                case SQLiteParser.INNER_:
                case SQLiteParser.JOIN_:
                case SQLiteParser.LEFT_:
                case SQLiteParser.NATURAL_:
                case SQLiteParser.RIGHT_:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1454;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 100) {
                            {
                                this.state = 1453;
                                this.match(SQLiteParser.NATURAL_);
                            }
                        }
                        this.state = 1462;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case SQLiteParser.FULL_:
                            case SQLiteParser.LEFT_:
                            case SQLiteParser.RIGHT_:
                                {
                                    this.state = 1456;
                                    _la = this.tokenStream.LA(1);
                                    if (!(_la === 76 || _la === 96 || _la === 125)) {
                                        this.errorHandler.recoverInline(this);
                                    }
                                    else {
                                        this.errorHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 1458;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    if (_la === 110) {
                                        {
                                            this.state = 1457;
                                            this.match(SQLiteParser.OUTER_);
                                        }
                                    }
                                }
                                break;
                            case SQLiteParser.INNER_:
                                {
                                    this.state = 1460;
                                    this.match(SQLiteParser.INNER_);
                                }
                                break;
                            case SQLiteParser.CROSS_:
                                {
                                    this.state = 1461;
                                    this.match(SQLiteParser.CROSS_);
                                }
                                break;
                            case SQLiteParser.JOIN_:
                                break;
                            default:
                                break;
                        }
                        this.state = 1464;
                        this.match(SQLiteParser.JOIN_);
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
    join_constraint() {
        let localContext = new Join_constraintContext(this.context, this.state);
        this.enterRule(localContext, 104, SQLiteParser.RULE_join_constraint);
        let _la;
        try {
            this.state = 1481;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SQLiteParser.ON_:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1467;
                        this.match(SQLiteParser.ON_);
                        this.state = 1468;
                        this.expr(0);
                    }
                    break;
                case SQLiteParser.USING_:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1469;
                        this.match(SQLiteParser.USING_);
                        this.state = 1470;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1471;
                        this.column_name();
                        this.state = 1476;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 5) {
                            {
                                {
                                    this.state = 1472;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1473;
                                    this.column_name();
                                }
                            }
                            this.state = 1478;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1479;
                        this.match(SQLiteParser.CLOSE_PAR);
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
    compound_operator() {
        let localContext = new Compound_operatorContext(this.context, this.state);
        this.enterRule(localContext, 106, SQLiteParser.RULE_compound_operator);
        let _la;
        try {
            this.state = 1489;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SQLiteParser.UNION_:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1483;
                        this.match(SQLiteParser.UNION_);
                        this.state = 1485;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 29) {
                            {
                                this.state = 1484;
                                this.match(SQLiteParser.ALL_);
                            }
                        }
                    }
                    break;
                case SQLiteParser.INTERSECT_:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1487;
                        this.match(SQLiteParser.INTERSECT_);
                    }
                    break;
                case SQLiteParser.EXCEPT_:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1488;
                        this.match(SQLiteParser.EXCEPT_);
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
    update_stmt() {
        let localContext = new Update_stmtContext(this.context, this.state);
        this.enterRule(localContext, 108, SQLiteParser.RULE_update_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1492;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 149) {
                    {
                        this.state = 1491;
                        this.with_clause();
                    }
                }
                this.state = 1494;
                this.match(SQLiteParser.UPDATE_);
                this.state = 1497;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 216, this.context)) {
                    case 1:
                        {
                            this.state = 1495;
                            this.match(SQLiteParser.OR_);
                            this.state = 1496;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 25 || _la === 72 || _la === 81 || _la === 122 || _la === 126)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 1499;
                this.qualified_table_name();
                this.state = 1500;
                this.match(SQLiteParser.SET_);
                this.state = 1503;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 217, this.context)) {
                    case 1:
                        {
                            this.state = 1501;
                            this.column_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1502;
                            this.column_name_list();
                        }
                        break;
                }
                this.state = 1505;
                this.match(SQLiteParser.ASSIGN);
                this.state = 1506;
                this.expr(0);
                this.state = 1517;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                        {
                            this.state = 1507;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1510;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 218, this.context)) {
                                case 1:
                                    {
                                        this.state = 1508;
                                        this.column_name();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1509;
                                        this.column_name_list();
                                    }
                                    break;
                            }
                            this.state = 1512;
                            this.match(SQLiteParser.ASSIGN);
                            this.state = 1513;
                            this.expr(0);
                        }
                    }
                    this.state = 1519;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1532;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 75) {
                    {
                        this.state = 1520;
                        this.match(SQLiteParser.FROM_);
                        this.state = 1530;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 221, this.context)) {
                            case 1:
                                {
                                    this.state = 1521;
                                    this.table_or_subquery();
                                    this.state = 1526;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 5) {
                                        {
                                            {
                                                this.state = 1522;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1523;
                                                this.table_or_subquery();
                                            }
                                        }
                                        this.state = 1528;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1529;
                                    this.join_clause();
                                }
                                break;
                        }
                    }
                }
                this.state = 1536;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                        this.state = 1534;
                        this.match(SQLiteParser.WHERE_);
                        this.state = 1535;
                        this.expr(0);
                    }
                }
                this.state = 1539;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 124) {
                    {
                        this.state = 1538;
                        this.returning_clause();
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
    column_name_list() {
        let localContext = new Column_name_listContext(this.context, this.state);
        this.enterRule(localContext, 110, SQLiteParser.RULE_column_name_list);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1541;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1542;
                this.column_name();
                this.state = 1547;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                        {
                            this.state = 1543;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1544;
                            this.column_name();
                        }
                    }
                    this.state = 1549;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1550;
                this.match(SQLiteParser.CLOSE_PAR);
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
    update_stmt_limited() {
        let localContext = new Update_stmt_limitedContext(this.context, this.state);
        this.enterRule(localContext, 112, SQLiteParser.RULE_update_stmt_limited);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1553;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 149) {
                    {
                        this.state = 1552;
                        this.with_clause();
                    }
                }
                this.state = 1555;
                this.match(SQLiteParser.UPDATE_);
                this.state = 1558;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 227, this.context)) {
                    case 1:
                        {
                            this.state = 1556;
                            this.match(SQLiteParser.OR_);
                            this.state = 1557;
                            _la = this.tokenStream.LA(1);
                            if (!(_la === 25 || _la === 72 || _la === 81 || _la === 122 || _la === 126)) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 1560;
                this.qualified_table_name();
                this.state = 1561;
                this.match(SQLiteParser.SET_);
                this.state = 1564;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 228, this.context)) {
                    case 1:
                        {
                            this.state = 1562;
                            this.column_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1563;
                            this.column_name_list();
                        }
                        break;
                }
                this.state = 1566;
                this.match(SQLiteParser.ASSIGN);
                this.state = 1567;
                this.expr(0);
                this.state = 1578;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                        {
                            this.state = 1568;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1571;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 229, this.context)) {
                                case 1:
                                    {
                                        this.state = 1569;
                                        this.column_name();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1570;
                                        this.column_name_list();
                                    }
                                    break;
                            }
                            this.state = 1573;
                            this.match(SQLiteParser.ASSIGN);
                            this.state = 1574;
                            this.expr(0);
                        }
                    }
                    this.state = 1580;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1583;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 148) {
                    {
                        this.state = 1581;
                        this.match(SQLiteParser.WHERE_);
                        this.state = 1582;
                        this.expr(0);
                    }
                }
                this.state = 1586;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 124) {
                    {
                        this.state = 1585;
                        this.returning_clause();
                    }
                }
                this.state = 1592;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 98 || _la === 109) {
                    {
                        this.state = 1589;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 109) {
                            {
                                this.state = 1588;
                                this.order_by_stmt();
                            }
                        }
                        this.state = 1591;
                        this.limit_stmt();
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
    qualified_table_name() {
        let localContext = new Qualified_table_nameContext(this.context, this.state);
        this.enterRule(localContext, 114, SQLiteParser.RULE_qualified_table_name);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1597;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 235, this.context)) {
                    case 1:
                        {
                            this.state = 1594;
                            this.schema_name();
                            this.state = 1595;
                            this.match(SQLiteParser.DOT);
                        }
                        break;
                }
                this.state = 1599;
                this.table_name();
                this.state = 1602;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 33) {
                    {
                        this.state = 1600;
                        this.match(SQLiteParser.AS_);
                        this.state = 1601;
                        this.alias();
                    }
                }
                this.state = 1609;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.INDEXED_:
                        {
                            this.state = 1604;
                            this.match(SQLiteParser.INDEXED_);
                            this.state = 1605;
                            this.match(SQLiteParser.BY_);
                            this.state = 1606;
                            this.index_name();
                        }
                        break;
                    case SQLiteParser.NOT_:
                        {
                            this.state = 1607;
                            this.match(SQLiteParser.NOT_);
                            this.state = 1608;
                            this.match(SQLiteParser.INDEXED_);
                        }
                        break;
                    case SQLiteParser.EOF:
                    case SQLiteParser.SCOL:
                    case SQLiteParser.ALTER_:
                    case SQLiteParser.ANALYZE_:
                    case SQLiteParser.ATTACH_:
                    case SQLiteParser.BEGIN_:
                    case SQLiteParser.COMMIT_:
                    case SQLiteParser.CREATE_:
                    case SQLiteParser.DELETE_:
                    case SQLiteParser.DETACH_:
                    case SQLiteParser.DROP_:
                    case SQLiteParser.END_:
                    case SQLiteParser.EXPLAIN_:
                    case SQLiteParser.INSERT_:
                    case SQLiteParser.LIMIT_:
                    case SQLiteParser.ORDER_:
                    case SQLiteParser.PRAGMA_:
                    case SQLiteParser.REINDEX_:
                    case SQLiteParser.RELEASE_:
                    case SQLiteParser.REPLACE_:
                    case SQLiteParser.RETURNING_:
                    case SQLiteParser.ROLLBACK_:
                    case SQLiteParser.SAVEPOINT_:
                    case SQLiteParser.SELECT_:
                    case SQLiteParser.SET_:
                    case SQLiteParser.UPDATE_:
                    case SQLiteParser.VACUUM_:
                    case SQLiteParser.VALUES_:
                    case SQLiteParser.WHERE_:
                    case SQLiteParser.WITH_:
                        break;
                    default:
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
    vacuum_stmt() {
        let localContext = new Vacuum_stmtContext(this.context, this.state);
        this.enterRule(localContext, 116, SQLiteParser.RULE_vacuum_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1611;
                this.match(SQLiteParser.VACUUM_);
                this.state = 1613;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 238, this.context)) {
                    case 1:
                        {
                            this.state = 1612;
                            this.schema_name();
                        }
                        break;
                }
                this.state = 1617;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 91) {
                    {
                        this.state = 1615;
                        this.match(SQLiteParser.INTO_);
                        this.state = 1616;
                        this.filename();
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
    filter_clause() {
        let localContext = new Filter_clauseContext(this.context, this.state);
        this.enterRule(localContext, 118, SQLiteParser.RULE_filter_clause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1619;
                this.match(SQLiteParser.FILTER_);
                this.state = 1620;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1621;
                this.match(SQLiteParser.WHERE_);
                this.state = 1622;
                this.expr(0);
                this.state = 1623;
                this.match(SQLiteParser.CLOSE_PAR);
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
    window_defn() {
        let localContext = new Window_defnContext(this.context, this.state);
        this.enterRule(localContext, 120, SQLiteParser.RULE_window_defn);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1625;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1627;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 240, this.context)) {
                    case 1:
                        {
                            this.state = 1626;
                            this.base_window_name();
                        }
                        break;
                }
                this.state = 1639;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 153) {
                    {
                        this.state = 1629;
                        this.match(SQLiteParser.PARTITION_);
                        this.state = 1630;
                        this.match(SQLiteParser.BY_);
                        this.state = 1631;
                        this.expr(0);
                        this.state = 1636;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 5) {
                            {
                                {
                                    this.state = 1632;
                                    this.match(SQLiteParser.COMMA);
                                    this.state = 1633;
                                    this.expr(0);
                                }
                            }
                            this.state = 1638;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                }
                {
                    this.state = 1641;
                    this.match(SQLiteParser.ORDER_);
                    this.state = 1642;
                    this.match(SQLiteParser.BY_);
                    this.state = 1643;
                    this.ordering_term();
                    this.state = 1648;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 5) {
                        {
                            {
                                this.state = 1644;
                                this.match(SQLiteParser.COMMA);
                                this.state = 1645;
                                this.ordering_term();
                            }
                        }
                        this.state = 1650;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                }
                this.state = 1652;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 128 || _la === 154 || _la === 179) {
                    {
                        this.state = 1651;
                        this.frame_spec();
                    }
                }
                this.state = 1654;
                this.match(SQLiteParser.CLOSE_PAR);
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
    over_clause() {
        let localContext = new Over_clauseContext(this.context, this.state);
        this.enterRule(localContext, 122, SQLiteParser.RULE_over_clause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1656;
                this.match(SQLiteParser.OVER_);
                this.state = 1690;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 251, this.context)) {
                    case 1:
                        {
                            this.state = 1657;
                            this.window_name();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1658;
                            this.match(SQLiteParser.OPEN_PAR);
                            this.state = 1660;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 245, this.context)) {
                                case 1:
                                    {
                                        this.state = 1659;
                                        this.base_window_name();
                                    }
                                    break;
                            }
                            this.state = 1672;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 153) {
                                {
                                    this.state = 1662;
                                    this.match(SQLiteParser.PARTITION_);
                                    this.state = 1663;
                                    this.match(SQLiteParser.BY_);
                                    this.state = 1664;
                                    this.expr(0);
                                    this.state = 1669;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 5) {
                                        {
                                            {
                                                this.state = 1665;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1666;
                                                this.expr(0);
                                            }
                                        }
                                        this.state = 1671;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                            }
                            this.state = 1684;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 109) {
                                {
                                    this.state = 1674;
                                    this.match(SQLiteParser.ORDER_);
                                    this.state = 1675;
                                    this.match(SQLiteParser.BY_);
                                    this.state = 1676;
                                    this.ordering_term();
                                    this.state = 1681;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 5) {
                                        {
                                            {
                                                this.state = 1677;
                                                this.match(SQLiteParser.COMMA);
                                                this.state = 1678;
                                                this.ordering_term();
                                            }
                                        }
                                        this.state = 1683;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                }
                            }
                            this.state = 1687;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 128 || _la === 154 || _la === 179) {
                                {
                                    this.state = 1686;
                                    this.frame_spec();
                                }
                            }
                            this.state = 1689;
                            this.match(SQLiteParser.CLOSE_PAR);
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
    frame_spec() {
        let localContext = new Frame_specContext(this.context, this.state);
        this.enterRule(localContext, 124, SQLiteParser.RULE_frame_spec);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1692;
                this.frame_clause();
                this.state = 1702;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 180) {
                    {
                        this.state = 1693;
                        this.match(SQLiteParser.EXCLUDE_);
                        this.state = 1700;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case SQLiteParser.NO_:
                                {
                                    this.state = 1694;
                                    this.match(SQLiteParser.NO_);
                                    this.state = 1695;
                                    this.match(SQLiteParser.OTHERS_);
                                }
                                break;
                            case SQLiteParser.CURRENT_:
                                {
                                    this.state = 1696;
                                    this.match(SQLiteParser.CURRENT_);
                                    this.state = 1697;
                                    this.match(SQLiteParser.ROW_);
                                }
                                break;
                            case SQLiteParser.GROUP_:
                                {
                                    this.state = 1698;
                                    this.match(SQLiteParser.GROUP_);
                                }
                                break;
                            case SQLiteParser.TIES_:
                                {
                                    this.state = 1699;
                                    this.match(SQLiteParser.TIES_);
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
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
    frame_clause() {
        let localContext = new Frame_clauseContext(this.context, this.state);
        this.enterRule(localContext, 126, SQLiteParser.RULE_frame_clause);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1704;
                _la = this.tokenStream.LA(1);
                if (!(_la === 128 || _la === 154 || _la === 179)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1711;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 254, this.context)) {
                    case 1:
                        {
                            this.state = 1705;
                            this.frame_single();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1706;
                            this.match(SQLiteParser.BETWEEN_);
                            this.state = 1707;
                            this.frame_left();
                            this.state = 1708;
                            this.match(SQLiteParser.AND_);
                            this.state = 1709;
                            this.frame_right();
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
    simple_function_invocation() {
        let localContext = new Simple_function_invocationContext(this.context, this.state);
        this.enterRule(localContext, 128, SQLiteParser.RULE_simple_function_invocation);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1713;
                this.simple_func();
                this.state = 1714;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1724;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.OPEN_PAR:
                    case SQLiteParser.PLUS:
                    case SQLiteParser.MINUS:
                    case SQLiteParser.TILDE:
                    case SQLiteParser.ABORT_:
                    case SQLiteParser.ACTION_:
                    case SQLiteParser.ADD_:
                    case SQLiteParser.AFTER_:
                    case SQLiteParser.ALL_:
                    case SQLiteParser.ALTER_:
                    case SQLiteParser.ANALYZE_:
                    case SQLiteParser.AND_:
                    case SQLiteParser.AS_:
                    case SQLiteParser.ASC_:
                    case SQLiteParser.ATTACH_:
                    case SQLiteParser.AUTOINCREMENT_:
                    case SQLiteParser.BEFORE_:
                    case SQLiteParser.BEGIN_:
                    case SQLiteParser.BETWEEN_:
                    case SQLiteParser.BY_:
                    case SQLiteParser.CASCADE_:
                    case SQLiteParser.CASE_:
                    case SQLiteParser.CAST_:
                    case SQLiteParser.CHECK_:
                    case SQLiteParser.COLLATE_:
                    case SQLiteParser.COLUMN_:
                    case SQLiteParser.COMMIT_:
                    case SQLiteParser.CONFLICT_:
                    case SQLiteParser.CONSTRAINT_:
                    case SQLiteParser.CREATE_:
                    case SQLiteParser.CROSS_:
                    case SQLiteParser.CURRENT_DATE_:
                    case SQLiteParser.CURRENT_TIME_:
                    case SQLiteParser.CURRENT_TIMESTAMP_:
                    case SQLiteParser.DATABASE_:
                    case SQLiteParser.DEFAULT_:
                    case SQLiteParser.DEFERRABLE_:
                    case SQLiteParser.DEFERRED_:
                    case SQLiteParser.DELETE_:
                    case SQLiteParser.DESC_:
                    case SQLiteParser.DETACH_:
                    case SQLiteParser.DISTINCT_:
                    case SQLiteParser.DROP_:
                    case SQLiteParser.EACH_:
                    case SQLiteParser.ELSE_:
                    case SQLiteParser.END_:
                    case SQLiteParser.ESCAPE_:
                    case SQLiteParser.EXCEPT_:
                    case SQLiteParser.EXCLUSIVE_:
                    case SQLiteParser.EXISTS_:
                    case SQLiteParser.EXPLAIN_:
                    case SQLiteParser.FAIL_:
                    case SQLiteParser.FOR_:
                    case SQLiteParser.FOREIGN_:
                    case SQLiteParser.FROM_:
                    case SQLiteParser.FULL_:
                    case SQLiteParser.GLOB_:
                    case SQLiteParser.GROUP_:
                    case SQLiteParser.HAVING_:
                    case SQLiteParser.IF_:
                    case SQLiteParser.IGNORE_:
                    case SQLiteParser.IMMEDIATE_:
                    case SQLiteParser.IN_:
                    case SQLiteParser.INDEX_:
                    case SQLiteParser.INDEXED_:
                    case SQLiteParser.INITIALLY_:
                    case SQLiteParser.INNER_:
                    case SQLiteParser.INSERT_:
                    case SQLiteParser.INSTEAD_:
                    case SQLiteParser.INTERSECT_:
                    case SQLiteParser.INTO_:
                    case SQLiteParser.IS_:
                    case SQLiteParser.ISNULL_:
                    case SQLiteParser.JOIN_:
                    case SQLiteParser.KEY_:
                    case SQLiteParser.LEFT_:
                    case SQLiteParser.LIKE_:
                    case SQLiteParser.LIMIT_:
                    case SQLiteParser.MATCH_:
                    case SQLiteParser.NATURAL_:
                    case SQLiteParser.NO_:
                    case SQLiteParser.NOT_:
                    case SQLiteParser.NOTNULL_:
                    case SQLiteParser.NULL_:
                    case SQLiteParser.OF_:
                    case SQLiteParser.OFFSET_:
                    case SQLiteParser.ON_:
                    case SQLiteParser.OR_:
                    case SQLiteParser.ORDER_:
                    case SQLiteParser.OUTER_:
                    case SQLiteParser.PLAN_:
                    case SQLiteParser.PRAGMA_:
                    case SQLiteParser.PRIMARY_:
                    case SQLiteParser.QUERY_:
                    case SQLiteParser.RAISE_:
                    case SQLiteParser.RECURSIVE_:
                    case SQLiteParser.REFERENCES_:
                    case SQLiteParser.REGEXP_:
                    case SQLiteParser.REINDEX_:
                    case SQLiteParser.RELEASE_:
                    case SQLiteParser.RENAME_:
                    case SQLiteParser.REPLACE_:
                    case SQLiteParser.RESTRICT_:
                    case SQLiteParser.RIGHT_:
                    case SQLiteParser.ROLLBACK_:
                    case SQLiteParser.ROW_:
                    case SQLiteParser.ROWS_:
                    case SQLiteParser.SAVEPOINT_:
                    case SQLiteParser.SELECT_:
                    case SQLiteParser.SET_:
                    case SQLiteParser.TABLE_:
                    case SQLiteParser.TEMP_:
                    case SQLiteParser.TEMPORARY_:
                    case SQLiteParser.THEN_:
                    case SQLiteParser.TO_:
                    case SQLiteParser.TRANSACTION_:
                    case SQLiteParser.TRIGGER_:
                    case SQLiteParser.UNION_:
                    case SQLiteParser.UNIQUE_:
                    case SQLiteParser.UPDATE_:
                    case SQLiteParser.USING_:
                    case SQLiteParser.VACUUM_:
                    case SQLiteParser.VALUES_:
                    case SQLiteParser.VIEW_:
                    case SQLiteParser.VIRTUAL_:
                    case SQLiteParser.WHEN_:
                    case SQLiteParser.WHERE_:
                    case SQLiteParser.WITH_:
                    case SQLiteParser.WITHOUT_:
                    case SQLiteParser.FIRST_VALUE_:
                    case SQLiteParser.OVER_:
                    case SQLiteParser.PARTITION_:
                    case SQLiteParser.RANGE_:
                    case SQLiteParser.PRECEDING_:
                    case SQLiteParser.UNBOUNDED_:
                    case SQLiteParser.CURRENT_:
                    case SQLiteParser.FOLLOWING_:
                    case SQLiteParser.CUME_DIST_:
                    case SQLiteParser.DENSE_RANK_:
                    case SQLiteParser.LAG_:
                    case SQLiteParser.LAST_VALUE_:
                    case SQLiteParser.LEAD_:
                    case SQLiteParser.NTH_VALUE_:
                    case SQLiteParser.NTILE_:
                    case SQLiteParser.PERCENT_RANK_:
                    case SQLiteParser.RANK_:
                    case SQLiteParser.ROW_NUMBER_:
                    case SQLiteParser.GENERATED_:
                    case SQLiteParser.ALWAYS_:
                    case SQLiteParser.STORED_:
                    case SQLiteParser.TRUE_:
                    case SQLiteParser.FALSE_:
                    case SQLiteParser.WINDOW_:
                    case SQLiteParser.NULLS_:
                    case SQLiteParser.FIRST_:
                    case SQLiteParser.LAST_:
                    case SQLiteParser.FILTER_:
                    case SQLiteParser.GROUPS_:
                    case SQLiteParser.EXCLUDE_:
                    case SQLiteParser.IDENTIFIER:
                    case SQLiteParser.NUMERIC_LITERAL:
                    case SQLiteParser.BIND_PARAMETER:
                    case SQLiteParser.STRING_LITERAL:
                    case SQLiteParser.BLOB_LITERAL:
                        {
                            this.state = 1715;
                            this.expr(0);
                            this.state = 1720;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 5) {
                                {
                                    {
                                        this.state = 1716;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 1717;
                                        this.expr(0);
                                    }
                                }
                                this.state = 1722;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                        }
                        break;
                    case SQLiteParser.STAR:
                        {
                            this.state = 1723;
                            this.match(SQLiteParser.STAR);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this.state = 1726;
                this.match(SQLiteParser.CLOSE_PAR);
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
    aggregate_function_invocation() {
        let localContext = new Aggregate_function_invocationContext(this.context, this.state);
        this.enterRule(localContext, 130, SQLiteParser.RULE_aggregate_function_invocation);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1728;
                this.aggregate_func();
                this.state = 1729;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1742;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.OPEN_PAR:
                    case SQLiteParser.PLUS:
                    case SQLiteParser.MINUS:
                    case SQLiteParser.TILDE:
                    case SQLiteParser.ABORT_:
                    case SQLiteParser.ACTION_:
                    case SQLiteParser.ADD_:
                    case SQLiteParser.AFTER_:
                    case SQLiteParser.ALL_:
                    case SQLiteParser.ALTER_:
                    case SQLiteParser.ANALYZE_:
                    case SQLiteParser.AND_:
                    case SQLiteParser.AS_:
                    case SQLiteParser.ASC_:
                    case SQLiteParser.ATTACH_:
                    case SQLiteParser.AUTOINCREMENT_:
                    case SQLiteParser.BEFORE_:
                    case SQLiteParser.BEGIN_:
                    case SQLiteParser.BETWEEN_:
                    case SQLiteParser.BY_:
                    case SQLiteParser.CASCADE_:
                    case SQLiteParser.CASE_:
                    case SQLiteParser.CAST_:
                    case SQLiteParser.CHECK_:
                    case SQLiteParser.COLLATE_:
                    case SQLiteParser.COLUMN_:
                    case SQLiteParser.COMMIT_:
                    case SQLiteParser.CONFLICT_:
                    case SQLiteParser.CONSTRAINT_:
                    case SQLiteParser.CREATE_:
                    case SQLiteParser.CROSS_:
                    case SQLiteParser.CURRENT_DATE_:
                    case SQLiteParser.CURRENT_TIME_:
                    case SQLiteParser.CURRENT_TIMESTAMP_:
                    case SQLiteParser.DATABASE_:
                    case SQLiteParser.DEFAULT_:
                    case SQLiteParser.DEFERRABLE_:
                    case SQLiteParser.DEFERRED_:
                    case SQLiteParser.DELETE_:
                    case SQLiteParser.DESC_:
                    case SQLiteParser.DETACH_:
                    case SQLiteParser.DISTINCT_:
                    case SQLiteParser.DROP_:
                    case SQLiteParser.EACH_:
                    case SQLiteParser.ELSE_:
                    case SQLiteParser.END_:
                    case SQLiteParser.ESCAPE_:
                    case SQLiteParser.EXCEPT_:
                    case SQLiteParser.EXCLUSIVE_:
                    case SQLiteParser.EXISTS_:
                    case SQLiteParser.EXPLAIN_:
                    case SQLiteParser.FAIL_:
                    case SQLiteParser.FOR_:
                    case SQLiteParser.FOREIGN_:
                    case SQLiteParser.FROM_:
                    case SQLiteParser.FULL_:
                    case SQLiteParser.GLOB_:
                    case SQLiteParser.GROUP_:
                    case SQLiteParser.HAVING_:
                    case SQLiteParser.IF_:
                    case SQLiteParser.IGNORE_:
                    case SQLiteParser.IMMEDIATE_:
                    case SQLiteParser.IN_:
                    case SQLiteParser.INDEX_:
                    case SQLiteParser.INDEXED_:
                    case SQLiteParser.INITIALLY_:
                    case SQLiteParser.INNER_:
                    case SQLiteParser.INSERT_:
                    case SQLiteParser.INSTEAD_:
                    case SQLiteParser.INTERSECT_:
                    case SQLiteParser.INTO_:
                    case SQLiteParser.IS_:
                    case SQLiteParser.ISNULL_:
                    case SQLiteParser.JOIN_:
                    case SQLiteParser.KEY_:
                    case SQLiteParser.LEFT_:
                    case SQLiteParser.LIKE_:
                    case SQLiteParser.LIMIT_:
                    case SQLiteParser.MATCH_:
                    case SQLiteParser.NATURAL_:
                    case SQLiteParser.NO_:
                    case SQLiteParser.NOT_:
                    case SQLiteParser.NOTNULL_:
                    case SQLiteParser.NULL_:
                    case SQLiteParser.OF_:
                    case SQLiteParser.OFFSET_:
                    case SQLiteParser.ON_:
                    case SQLiteParser.OR_:
                    case SQLiteParser.ORDER_:
                    case SQLiteParser.OUTER_:
                    case SQLiteParser.PLAN_:
                    case SQLiteParser.PRAGMA_:
                    case SQLiteParser.PRIMARY_:
                    case SQLiteParser.QUERY_:
                    case SQLiteParser.RAISE_:
                    case SQLiteParser.RECURSIVE_:
                    case SQLiteParser.REFERENCES_:
                    case SQLiteParser.REGEXP_:
                    case SQLiteParser.REINDEX_:
                    case SQLiteParser.RELEASE_:
                    case SQLiteParser.RENAME_:
                    case SQLiteParser.REPLACE_:
                    case SQLiteParser.RESTRICT_:
                    case SQLiteParser.RIGHT_:
                    case SQLiteParser.ROLLBACK_:
                    case SQLiteParser.ROW_:
                    case SQLiteParser.ROWS_:
                    case SQLiteParser.SAVEPOINT_:
                    case SQLiteParser.SELECT_:
                    case SQLiteParser.SET_:
                    case SQLiteParser.TABLE_:
                    case SQLiteParser.TEMP_:
                    case SQLiteParser.TEMPORARY_:
                    case SQLiteParser.THEN_:
                    case SQLiteParser.TO_:
                    case SQLiteParser.TRANSACTION_:
                    case SQLiteParser.TRIGGER_:
                    case SQLiteParser.UNION_:
                    case SQLiteParser.UNIQUE_:
                    case SQLiteParser.UPDATE_:
                    case SQLiteParser.USING_:
                    case SQLiteParser.VACUUM_:
                    case SQLiteParser.VALUES_:
                    case SQLiteParser.VIEW_:
                    case SQLiteParser.VIRTUAL_:
                    case SQLiteParser.WHEN_:
                    case SQLiteParser.WHERE_:
                    case SQLiteParser.WITH_:
                    case SQLiteParser.WITHOUT_:
                    case SQLiteParser.FIRST_VALUE_:
                    case SQLiteParser.OVER_:
                    case SQLiteParser.PARTITION_:
                    case SQLiteParser.RANGE_:
                    case SQLiteParser.PRECEDING_:
                    case SQLiteParser.UNBOUNDED_:
                    case SQLiteParser.CURRENT_:
                    case SQLiteParser.FOLLOWING_:
                    case SQLiteParser.CUME_DIST_:
                    case SQLiteParser.DENSE_RANK_:
                    case SQLiteParser.LAG_:
                    case SQLiteParser.LAST_VALUE_:
                    case SQLiteParser.LEAD_:
                    case SQLiteParser.NTH_VALUE_:
                    case SQLiteParser.NTILE_:
                    case SQLiteParser.PERCENT_RANK_:
                    case SQLiteParser.RANK_:
                    case SQLiteParser.ROW_NUMBER_:
                    case SQLiteParser.GENERATED_:
                    case SQLiteParser.ALWAYS_:
                    case SQLiteParser.STORED_:
                    case SQLiteParser.TRUE_:
                    case SQLiteParser.FALSE_:
                    case SQLiteParser.WINDOW_:
                    case SQLiteParser.NULLS_:
                    case SQLiteParser.FIRST_:
                    case SQLiteParser.LAST_:
                    case SQLiteParser.FILTER_:
                    case SQLiteParser.GROUPS_:
                    case SQLiteParser.EXCLUDE_:
                    case SQLiteParser.IDENTIFIER:
                    case SQLiteParser.NUMERIC_LITERAL:
                    case SQLiteParser.BIND_PARAMETER:
                    case SQLiteParser.STRING_LITERAL:
                    case SQLiteParser.BLOB_LITERAL:
                        {
                            this.state = 1731;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 257, this.context)) {
                                case 1:
                                    {
                                        this.state = 1730;
                                        this.match(SQLiteParser.DISTINCT_);
                                    }
                                    break;
                            }
                            this.state = 1733;
                            this.expr(0);
                            this.state = 1738;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 5) {
                                {
                                    {
                                        this.state = 1734;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 1735;
                                        this.expr(0);
                                    }
                                }
                                this.state = 1740;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                        }
                        break;
                    case SQLiteParser.STAR:
                        {
                            this.state = 1741;
                            this.match(SQLiteParser.STAR);
                        }
                        break;
                    case SQLiteParser.CLOSE_PAR:
                        break;
                    default:
                        break;
                }
                this.state = 1744;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1746;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 178) {
                    {
                        this.state = 1745;
                        this.filter_clause();
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
    window_function_invocation() {
        let localContext = new Window_function_invocationContext(this.context, this.state);
        this.enterRule(localContext, 132, SQLiteParser.RULE_window_function_invocation);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1748;
                this.window_function();
                this.state = 1749;
                this.match(SQLiteParser.OPEN_PAR);
                this.state = 1759;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                    case SQLiteParser.OPEN_PAR:
                    case SQLiteParser.PLUS:
                    case SQLiteParser.MINUS:
                    case SQLiteParser.TILDE:
                    case SQLiteParser.ABORT_:
                    case SQLiteParser.ACTION_:
                    case SQLiteParser.ADD_:
                    case SQLiteParser.AFTER_:
                    case SQLiteParser.ALL_:
                    case SQLiteParser.ALTER_:
                    case SQLiteParser.ANALYZE_:
                    case SQLiteParser.AND_:
                    case SQLiteParser.AS_:
                    case SQLiteParser.ASC_:
                    case SQLiteParser.ATTACH_:
                    case SQLiteParser.AUTOINCREMENT_:
                    case SQLiteParser.BEFORE_:
                    case SQLiteParser.BEGIN_:
                    case SQLiteParser.BETWEEN_:
                    case SQLiteParser.BY_:
                    case SQLiteParser.CASCADE_:
                    case SQLiteParser.CASE_:
                    case SQLiteParser.CAST_:
                    case SQLiteParser.CHECK_:
                    case SQLiteParser.COLLATE_:
                    case SQLiteParser.COLUMN_:
                    case SQLiteParser.COMMIT_:
                    case SQLiteParser.CONFLICT_:
                    case SQLiteParser.CONSTRAINT_:
                    case SQLiteParser.CREATE_:
                    case SQLiteParser.CROSS_:
                    case SQLiteParser.CURRENT_DATE_:
                    case SQLiteParser.CURRENT_TIME_:
                    case SQLiteParser.CURRENT_TIMESTAMP_:
                    case SQLiteParser.DATABASE_:
                    case SQLiteParser.DEFAULT_:
                    case SQLiteParser.DEFERRABLE_:
                    case SQLiteParser.DEFERRED_:
                    case SQLiteParser.DELETE_:
                    case SQLiteParser.DESC_:
                    case SQLiteParser.DETACH_:
                    case SQLiteParser.DISTINCT_:
                    case SQLiteParser.DROP_:
                    case SQLiteParser.EACH_:
                    case SQLiteParser.ELSE_:
                    case SQLiteParser.END_:
                    case SQLiteParser.ESCAPE_:
                    case SQLiteParser.EXCEPT_:
                    case SQLiteParser.EXCLUSIVE_:
                    case SQLiteParser.EXISTS_:
                    case SQLiteParser.EXPLAIN_:
                    case SQLiteParser.FAIL_:
                    case SQLiteParser.FOR_:
                    case SQLiteParser.FOREIGN_:
                    case SQLiteParser.FROM_:
                    case SQLiteParser.FULL_:
                    case SQLiteParser.GLOB_:
                    case SQLiteParser.GROUP_:
                    case SQLiteParser.HAVING_:
                    case SQLiteParser.IF_:
                    case SQLiteParser.IGNORE_:
                    case SQLiteParser.IMMEDIATE_:
                    case SQLiteParser.IN_:
                    case SQLiteParser.INDEX_:
                    case SQLiteParser.INDEXED_:
                    case SQLiteParser.INITIALLY_:
                    case SQLiteParser.INNER_:
                    case SQLiteParser.INSERT_:
                    case SQLiteParser.INSTEAD_:
                    case SQLiteParser.INTERSECT_:
                    case SQLiteParser.INTO_:
                    case SQLiteParser.IS_:
                    case SQLiteParser.ISNULL_:
                    case SQLiteParser.JOIN_:
                    case SQLiteParser.KEY_:
                    case SQLiteParser.LEFT_:
                    case SQLiteParser.LIKE_:
                    case SQLiteParser.LIMIT_:
                    case SQLiteParser.MATCH_:
                    case SQLiteParser.NATURAL_:
                    case SQLiteParser.NO_:
                    case SQLiteParser.NOT_:
                    case SQLiteParser.NOTNULL_:
                    case SQLiteParser.NULL_:
                    case SQLiteParser.OF_:
                    case SQLiteParser.OFFSET_:
                    case SQLiteParser.ON_:
                    case SQLiteParser.OR_:
                    case SQLiteParser.ORDER_:
                    case SQLiteParser.OUTER_:
                    case SQLiteParser.PLAN_:
                    case SQLiteParser.PRAGMA_:
                    case SQLiteParser.PRIMARY_:
                    case SQLiteParser.QUERY_:
                    case SQLiteParser.RAISE_:
                    case SQLiteParser.RECURSIVE_:
                    case SQLiteParser.REFERENCES_:
                    case SQLiteParser.REGEXP_:
                    case SQLiteParser.REINDEX_:
                    case SQLiteParser.RELEASE_:
                    case SQLiteParser.RENAME_:
                    case SQLiteParser.REPLACE_:
                    case SQLiteParser.RESTRICT_:
                    case SQLiteParser.RIGHT_:
                    case SQLiteParser.ROLLBACK_:
                    case SQLiteParser.ROW_:
                    case SQLiteParser.ROWS_:
                    case SQLiteParser.SAVEPOINT_:
                    case SQLiteParser.SELECT_:
                    case SQLiteParser.SET_:
                    case SQLiteParser.TABLE_:
                    case SQLiteParser.TEMP_:
                    case SQLiteParser.TEMPORARY_:
                    case SQLiteParser.THEN_:
                    case SQLiteParser.TO_:
                    case SQLiteParser.TRANSACTION_:
                    case SQLiteParser.TRIGGER_:
                    case SQLiteParser.UNION_:
                    case SQLiteParser.UNIQUE_:
                    case SQLiteParser.UPDATE_:
                    case SQLiteParser.USING_:
                    case SQLiteParser.VACUUM_:
                    case SQLiteParser.VALUES_:
                    case SQLiteParser.VIEW_:
                    case SQLiteParser.VIRTUAL_:
                    case SQLiteParser.WHEN_:
                    case SQLiteParser.WHERE_:
                    case SQLiteParser.WITH_:
                    case SQLiteParser.WITHOUT_:
                    case SQLiteParser.FIRST_VALUE_:
                    case SQLiteParser.OVER_:
                    case SQLiteParser.PARTITION_:
                    case SQLiteParser.RANGE_:
                    case SQLiteParser.PRECEDING_:
                    case SQLiteParser.UNBOUNDED_:
                    case SQLiteParser.CURRENT_:
                    case SQLiteParser.FOLLOWING_:
                    case SQLiteParser.CUME_DIST_:
                    case SQLiteParser.DENSE_RANK_:
                    case SQLiteParser.LAG_:
                    case SQLiteParser.LAST_VALUE_:
                    case SQLiteParser.LEAD_:
                    case SQLiteParser.NTH_VALUE_:
                    case SQLiteParser.NTILE_:
                    case SQLiteParser.PERCENT_RANK_:
                    case SQLiteParser.RANK_:
                    case SQLiteParser.ROW_NUMBER_:
                    case SQLiteParser.GENERATED_:
                    case SQLiteParser.ALWAYS_:
                    case SQLiteParser.STORED_:
                    case SQLiteParser.TRUE_:
                    case SQLiteParser.FALSE_:
                    case SQLiteParser.WINDOW_:
                    case SQLiteParser.NULLS_:
                    case SQLiteParser.FIRST_:
                    case SQLiteParser.LAST_:
                    case SQLiteParser.FILTER_:
                    case SQLiteParser.GROUPS_:
                    case SQLiteParser.EXCLUDE_:
                    case SQLiteParser.IDENTIFIER:
                    case SQLiteParser.NUMERIC_LITERAL:
                    case SQLiteParser.BIND_PARAMETER:
                    case SQLiteParser.STRING_LITERAL:
                    case SQLiteParser.BLOB_LITERAL:
                        {
                            this.state = 1750;
                            this.expr(0);
                            this.state = 1755;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 5) {
                                {
                                    {
                                        this.state = 1751;
                                        this.match(SQLiteParser.COMMA);
                                        this.state = 1752;
                                        this.expr(0);
                                    }
                                }
                                this.state = 1757;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                        }
                        break;
                    case SQLiteParser.STAR:
                        {
                            this.state = 1758;
                            this.match(SQLiteParser.STAR);
                        }
                        break;
                    case SQLiteParser.CLOSE_PAR:
                        break;
                    default:
                        break;
                }
                this.state = 1761;
                this.match(SQLiteParser.CLOSE_PAR);
                this.state = 1763;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 178) {
                    {
                        this.state = 1762;
                        this.filter_clause();
                    }
                }
                this.state = 1765;
                this.match(SQLiteParser.OVER_);
                this.state = 1768;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 264, this.context)) {
                    case 1:
                        {
                            this.state = 1766;
                            this.window_defn();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1767;
                            this.window_name();
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
    common_table_stmt() {
        let localContext = new Common_table_stmtContext(this.context, this.state);
        this.enterRule(localContext, 134, SQLiteParser.RULE_common_table_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1770;
                this.match(SQLiteParser.WITH_);
                this.state = 1772;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 265, this.context)) {
                    case 1:
                        {
                            this.state = 1771;
                            this.match(SQLiteParser.RECURSIVE_);
                        }
                        break;
                }
                this.state = 1774;
                this.common_table_expression();
                this.state = 1779;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                        {
                            this.state = 1775;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1776;
                            this.common_table_expression();
                        }
                    }
                    this.state = 1781;
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
    order_by_stmt() {
        let localContext = new Order_by_stmtContext(this.context, this.state);
        this.enterRule(localContext, 136, SQLiteParser.RULE_order_by_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1782;
                this.match(SQLiteParser.ORDER_);
                this.state = 1783;
                this.match(SQLiteParser.BY_);
                this.state = 1784;
                this.ordering_term();
                this.state = 1789;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                        {
                            this.state = 1785;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1786;
                            this.ordering_term();
                        }
                    }
                    this.state = 1791;
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
    limit_stmt() {
        let localContext = new Limit_stmtContext(this.context, this.state);
        this.enterRule(localContext, 138, SQLiteParser.RULE_limit_stmt);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1792;
                this.match(SQLiteParser.LIMIT_);
                this.state = 1793;
                this.expr(0);
                this.state = 1796;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5 || _la === 106) {
                    {
                        this.state = 1794;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 5 || _la === 106)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1795;
                        this.expr(0);
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
    ordering_term() {
        let localContext = new Ordering_termContext(this.context, this.state);
        this.enterRule(localContext, 140, SQLiteParser.RULE_ordering_term);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1798;
                this.expr(0);
                this.state = 1801;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 45) {
                    {
                        this.state = 1799;
                        this.match(SQLiteParser.COLLATE_);
                        this.state = 1800;
                        this.collation_name();
                    }
                }
                this.state = 1804;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34 || _la === 60) {
                    {
                        this.state = 1803;
                        this.asc_desc();
                    }
                }
                this.state = 1808;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 175) {
                    {
                        this.state = 1806;
                        this.match(SQLiteParser.NULLS_);
                        this.state = 1807;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 176 || _la === 177)) {
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
    asc_desc() {
        let localContext = new Asc_descContext(this.context, this.state);
        this.enterRule(localContext, 142, SQLiteParser.RULE_asc_desc);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1810;
                _la = this.tokenStream.LA(1);
                if (!(_la === 34 || _la === 60)) {
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
    frame_left() {
        let localContext = new Frame_leftContext(this.context, this.state);
        this.enterRule(localContext, 144, SQLiteParser.RULE_frame_left);
        try {
            this.state = 1822;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 272, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1812;
                        this.expr(0);
                        this.state = 1813;
                        this.match(SQLiteParser.PRECEDING_);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1815;
                        this.expr(0);
                        this.state = 1816;
                        this.match(SQLiteParser.FOLLOWING_);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1818;
                        this.match(SQLiteParser.CURRENT_);
                        this.state = 1819;
                        this.match(SQLiteParser.ROW_);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1820;
                        this.match(SQLiteParser.UNBOUNDED_);
                        this.state = 1821;
                        this.match(SQLiteParser.PRECEDING_);
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
    frame_right() {
        let localContext = new Frame_rightContext(this.context, this.state);
        this.enterRule(localContext, 146, SQLiteParser.RULE_frame_right);
        try {
            this.state = 1834;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 273, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1824;
                        this.expr(0);
                        this.state = 1825;
                        this.match(SQLiteParser.PRECEDING_);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1827;
                        this.expr(0);
                        this.state = 1828;
                        this.match(SQLiteParser.FOLLOWING_);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1830;
                        this.match(SQLiteParser.CURRENT_);
                        this.state = 1831;
                        this.match(SQLiteParser.ROW_);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1832;
                        this.match(SQLiteParser.UNBOUNDED_);
                        this.state = 1833;
                        this.match(SQLiteParser.FOLLOWING_);
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
    frame_single() {
        let localContext = new Frame_singleContext(this.context, this.state);
        this.enterRule(localContext, 148, SQLiteParser.RULE_frame_single);
        try {
            this.state = 1843;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 274, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1836;
                        this.expr(0);
                        this.state = 1837;
                        this.match(SQLiteParser.PRECEDING_);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1839;
                        this.match(SQLiteParser.UNBOUNDED_);
                        this.state = 1840;
                        this.match(SQLiteParser.PRECEDING_);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1841;
                        this.match(SQLiteParser.CURRENT_);
                        this.state = 1842;
                        this.match(SQLiteParser.ROW_);
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
    window_function() {
        let localContext = new Window_functionContext(this.context, this.state);
        this.enterRule(localContext, 150, SQLiteParser.RULE_window_function);
        let _la;
        try {
            this.state = 1930;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SQLiteParser.FIRST_VALUE_:
                case SQLiteParser.LAST_VALUE_:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1845;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 151 || _la === 162)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1846;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1847;
                        this.expr(0);
                        this.state = 1848;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1849;
                        this.match(SQLiteParser.OVER_);
                        this.state = 1850;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1852;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 153) {
                            {
                                this.state = 1851;
                                this.partition_by();
                            }
                        }
                        this.state = 1854;
                        this.order_by_expr_asc_desc();
                        this.state = 1856;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 128 || _la === 154 || _la === 179) {
                            {
                                this.state = 1855;
                                this.frame_clause();
                            }
                        }
                        this.state = 1858;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                case SQLiteParser.CUME_DIST_:
                case SQLiteParser.PERCENT_RANK_:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1860;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 159 || _la === 166)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1861;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1862;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1863;
                        this.match(SQLiteParser.OVER_);
                        this.state = 1864;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1866;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 153) {
                            {
                                this.state = 1865;
                                this.partition_by();
                            }
                        }
                        this.state = 1869;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 109) {
                            {
                                this.state = 1868;
                                this.order_by_expr();
                            }
                        }
                        this.state = 1871;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                case SQLiteParser.DENSE_RANK_:
                case SQLiteParser.RANK_:
                case SQLiteParser.ROW_NUMBER_:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1872;
                        _la = this.tokenStream.LA(1);
                        if (!(((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 385) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1873;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1874;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1875;
                        this.match(SQLiteParser.OVER_);
                        this.state = 1876;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1878;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 153) {
                            {
                                this.state = 1877;
                                this.partition_by();
                            }
                        }
                        this.state = 1880;
                        this.order_by_expr_asc_desc();
                        this.state = 1881;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                case SQLiteParser.LAG_:
                case SQLiteParser.LEAD_:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1883;
                        _la = this.tokenStream.LA(1);
                        if (!(_la === 161 || _la === 163)) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1884;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1885;
                        this.expr(0);
                        this.state = 1887;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 280, this.context)) {
                            case 1:
                                {
                                    this.state = 1886;
                                    this.offset();
                                }
                                break;
                        }
                        this.state = 1890;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 5) {
                            {
                                this.state = 1889;
                                this.default_value();
                            }
                        }
                        this.state = 1892;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1893;
                        this.match(SQLiteParser.OVER_);
                        this.state = 1894;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1896;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 153) {
                            {
                                this.state = 1895;
                                this.partition_by();
                            }
                        }
                        this.state = 1898;
                        this.order_by_expr_asc_desc();
                        this.state = 1899;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                case SQLiteParser.NTH_VALUE_:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1901;
                        this.match(SQLiteParser.NTH_VALUE_);
                        this.state = 1902;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1903;
                        this.expr(0);
                        this.state = 1904;
                        this.match(SQLiteParser.COMMA);
                        this.state = 1905;
                        this.signed_number();
                        this.state = 1906;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1907;
                        this.match(SQLiteParser.OVER_);
                        this.state = 1908;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1910;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 153) {
                            {
                                this.state = 1909;
                                this.partition_by();
                            }
                        }
                        this.state = 1912;
                        this.order_by_expr_asc_desc();
                        this.state = 1914;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 128 || _la === 154 || _la === 179) {
                            {
                                this.state = 1913;
                                this.frame_clause();
                            }
                        }
                        this.state = 1916;
                        this.match(SQLiteParser.CLOSE_PAR);
                    }
                    break;
                case SQLiteParser.NTILE_:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1918;
                        this.match(SQLiteParser.NTILE_);
                        this.state = 1919;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1920;
                        this.expr(0);
                        this.state = 1921;
                        this.match(SQLiteParser.CLOSE_PAR);
                        this.state = 1922;
                        this.match(SQLiteParser.OVER_);
                        this.state = 1923;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 1925;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 153) {
                            {
                                this.state = 1924;
                                this.partition_by();
                            }
                        }
                        this.state = 1927;
                        this.order_by_expr_asc_desc();
                        this.state = 1928;
                        this.match(SQLiteParser.CLOSE_PAR);
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
    offset() {
        let localContext = new OffsetContext(this.context, this.state);
        this.enterRule(localContext, 152, SQLiteParser.RULE_offset);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1932;
                this.match(SQLiteParser.COMMA);
                this.state = 1933;
                this.signed_number();
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
    default_value() {
        let localContext = new Default_valueContext(this.context, this.state);
        this.enterRule(localContext, 154, SQLiteParser.RULE_default_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1935;
                this.match(SQLiteParser.COMMA);
                this.state = 1936;
                this.signed_number();
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
    partition_by() {
        let localContext = new Partition_byContext(this.context, this.state);
        this.enterRule(localContext, 156, SQLiteParser.RULE_partition_by);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1938;
                this.match(SQLiteParser.PARTITION_);
                this.state = 1939;
                this.match(SQLiteParser.BY_);
                this.state = 1941;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 1940;
                                    this.expr(0);
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1943;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 287, this.context);
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
    order_by_expr() {
        let localContext = new Order_by_exprContext(this.context, this.state);
        this.enterRule(localContext, 158, SQLiteParser.RULE_order_by_expr);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1945;
                this.match(SQLiteParser.ORDER_);
                this.state = 1946;
                this.match(SQLiteParser.BY_);
                this.state = 1948;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 1947;
                            this.expr(0);
                        }
                    }
                    this.state = 1950;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4261414664) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4026531839) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 1042284543) !== 0));
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
    order_by_expr_asc_desc() {
        let localContext = new Order_by_expr_asc_descContext(this.context, this.state);
        this.enterRule(localContext, 160, SQLiteParser.RULE_order_by_expr_asc_desc);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1952;
                this.match(SQLiteParser.ORDER_);
                this.state = 1953;
                this.match(SQLiteParser.BY_);
                this.state = 1954;
                this.expr_asc_desc();
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
    expr_asc_desc() {
        let localContext = new Expr_asc_descContext(this.context, this.state);
        this.enterRule(localContext, 162, SQLiteParser.RULE_expr_asc_desc);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1956;
                this.expr(0);
                this.state = 1958;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 34 || _la === 60) {
                    {
                        this.state = 1957;
                        this.asc_desc();
                    }
                }
                this.state = 1967;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 5) {
                    {
                        {
                            this.state = 1960;
                            this.match(SQLiteParser.COMMA);
                            this.state = 1961;
                            this.expr(0);
                            this.state = 1963;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 34 || _la === 60) {
                                {
                                    this.state = 1962;
                                    this.asc_desc();
                                }
                            }
                        }
                    }
                    this.state = 1969;
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
    initial_select() {
        let localContext = new Initial_selectContext(this.context, this.state);
        this.enterRule(localContext, 164, SQLiteParser.RULE_initial_select);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1970;
                this.select_stmt();
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
    recursive_select() {
        let localContext = new Recursive_selectContext(this.context, this.state);
        this.enterRule(localContext, 166, SQLiteParser.RULE_recursive_select);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1972;
                this.select_stmt();
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
    unary_operator() {
        let localContext = new Unary_operatorContext(this.context, this.state);
        this.enterRule(localContext, 168, SQLiteParser.RULE_unary_operator);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1974;
                _la = this.tokenStream.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1792) !== 0) || _la === 102)) {
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
    error_message() {
        let localContext = new Error_messageContext(this.context, this.state);
        this.enterRule(localContext, 170, SQLiteParser.RULE_error_message);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1976;
                this.match(SQLiteParser.STRING_LITERAL);
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
    module_argument() {
        let localContext = new Module_argumentContext(this.context, this.state);
        this.enterRule(localContext, 172, SQLiteParser.RULE_module_argument);
        try {
            this.state = 1980;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 292, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1978;
                        this.expr(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1979;
                        this.column_def();
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
    column_alias() {
        let localContext = new Column_aliasContext(this.context, this.state);
        this.enterRule(localContext, 174, SQLiteParser.RULE_column_alias);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1982;
                _la = this.tokenStream.LA(1);
                if (!(_la === 185 || _la === 188)) {
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
    keyword() {
        let localContext = new KeywordContext(this.context, this.state);
        this.enterRule(localContext, 176, SQLiteParser.RULE_keyword);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1984;
                _la = this.tokenStream.LA(1);
                if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 4294967295) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 4294967295) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & 4294967295) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 4294967287) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 268435455) !== 0))) {
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
    name() {
        let localContext = new NameContext(this.context, this.state);
        this.enterRule(localContext, 178, SQLiteParser.RULE_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1986;
                this.any_name();
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
    function_name() {
        let localContext = new Function_nameContext(this.context, this.state);
        this.enterRule(localContext, 180, SQLiteParser.RULE_function_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1988;
                this.any_name();
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
    schema_name() {
        let localContext = new Schema_nameContext(this.context, this.state);
        this.enterRule(localContext, 182, SQLiteParser.RULE_schema_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1990;
                this.any_name();
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
    table_name() {
        let localContext = new Table_nameContext(this.context, this.state);
        this.enterRule(localContext, 184, SQLiteParser.RULE_table_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1992;
                this.any_name();
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
    table_or_index_name() {
        let localContext = new Table_or_index_nameContext(this.context, this.state);
        this.enterRule(localContext, 186, SQLiteParser.RULE_table_or_index_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1994;
                this.any_name();
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
    column_name() {
        let localContext = new Column_nameContext(this.context, this.state);
        this.enterRule(localContext, 188, SQLiteParser.RULE_column_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1996;
                this.any_name();
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
    collation_name() {
        let localContext = new Collation_nameContext(this.context, this.state);
        this.enterRule(localContext, 190, SQLiteParser.RULE_collation_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1998;
                this.any_name();
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
    foreign_table() {
        let localContext = new Foreign_tableContext(this.context, this.state);
        this.enterRule(localContext, 192, SQLiteParser.RULE_foreign_table);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2000;
                this.any_name();
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
    index_name() {
        let localContext = new Index_nameContext(this.context, this.state);
        this.enterRule(localContext, 194, SQLiteParser.RULE_index_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2002;
                this.any_name();
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
    trigger_name() {
        let localContext = new Trigger_nameContext(this.context, this.state);
        this.enterRule(localContext, 196, SQLiteParser.RULE_trigger_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2004;
                this.any_name();
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
    view_name() {
        let localContext = new View_nameContext(this.context, this.state);
        this.enterRule(localContext, 198, SQLiteParser.RULE_view_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2006;
                this.any_name();
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
    module_name() {
        let localContext = new Module_nameContext(this.context, this.state);
        this.enterRule(localContext, 200, SQLiteParser.RULE_module_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2008;
                this.any_name();
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
    pragma_name() {
        let localContext = new Pragma_nameContext(this.context, this.state);
        this.enterRule(localContext, 202, SQLiteParser.RULE_pragma_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2010;
                this.any_name();
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
    savepoint_name() {
        let localContext = new Savepoint_nameContext(this.context, this.state);
        this.enterRule(localContext, 204, SQLiteParser.RULE_savepoint_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2012;
                this.any_name();
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
    table_alias() {
        let localContext = new Table_aliasContext(this.context, this.state);
        this.enterRule(localContext, 206, SQLiteParser.RULE_table_alias);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2014;
                this.any_name();
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
    transaction_name() {
        let localContext = new Transaction_nameContext(this.context, this.state);
        this.enterRule(localContext, 208, SQLiteParser.RULE_transaction_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2016;
                this.any_name();
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
    window_name() {
        let localContext = new Window_nameContext(this.context, this.state);
        this.enterRule(localContext, 210, SQLiteParser.RULE_window_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2018;
                this.any_name();
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
    alias() {
        let localContext = new AliasContext(this.context, this.state);
        this.enterRule(localContext, 212, SQLiteParser.RULE_alias);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2020;
                this.any_name();
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
    filename() {
        let localContext = new FilenameContext(this.context, this.state);
        this.enterRule(localContext, 214, SQLiteParser.RULE_filename);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2022;
                this.any_name();
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
    base_window_name() {
        let localContext = new Base_window_nameContext(this.context, this.state);
        this.enterRule(localContext, 216, SQLiteParser.RULE_base_window_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2024;
                this.any_name();
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
    simple_func() {
        let localContext = new Simple_funcContext(this.context, this.state);
        this.enterRule(localContext, 218, SQLiteParser.RULE_simple_func);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2026;
                this.any_name();
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
    aggregate_func() {
        let localContext = new Aggregate_funcContext(this.context, this.state);
        this.enterRule(localContext, 220, SQLiteParser.RULE_aggregate_func);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2028;
                this.any_name();
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
    table_function_name() {
        let localContext = new Table_function_nameContext(this.context, this.state);
        this.enterRule(localContext, 222, SQLiteParser.RULE_table_function_name);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2030;
                this.any_name();
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
    any_name() {
        let localContext = new Any_nameContext(this.context, this.state);
        this.enterRule(localContext, 224, SQLiteParser.RULE_any_name);
        try {
            this.state = 2039;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case SQLiteParser.IDENTIFIER:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2032;
                        this.match(SQLiteParser.IDENTIFIER);
                    }
                    break;
                case SQLiteParser.ABORT_:
                case SQLiteParser.ACTION_:
                case SQLiteParser.ADD_:
                case SQLiteParser.AFTER_:
                case SQLiteParser.ALL_:
                case SQLiteParser.ALTER_:
                case SQLiteParser.ANALYZE_:
                case SQLiteParser.AND_:
                case SQLiteParser.AS_:
                case SQLiteParser.ASC_:
                case SQLiteParser.ATTACH_:
                case SQLiteParser.AUTOINCREMENT_:
                case SQLiteParser.BEFORE_:
                case SQLiteParser.BEGIN_:
                case SQLiteParser.BETWEEN_:
                case SQLiteParser.BY_:
                case SQLiteParser.CASCADE_:
                case SQLiteParser.CASE_:
                case SQLiteParser.CAST_:
                case SQLiteParser.CHECK_:
                case SQLiteParser.COLLATE_:
                case SQLiteParser.COLUMN_:
                case SQLiteParser.COMMIT_:
                case SQLiteParser.CONFLICT_:
                case SQLiteParser.CONSTRAINT_:
                case SQLiteParser.CREATE_:
                case SQLiteParser.CROSS_:
                case SQLiteParser.CURRENT_DATE_:
                case SQLiteParser.CURRENT_TIME_:
                case SQLiteParser.CURRENT_TIMESTAMP_:
                case SQLiteParser.DATABASE_:
                case SQLiteParser.DEFAULT_:
                case SQLiteParser.DEFERRABLE_:
                case SQLiteParser.DEFERRED_:
                case SQLiteParser.DELETE_:
                case SQLiteParser.DESC_:
                case SQLiteParser.DETACH_:
                case SQLiteParser.DISTINCT_:
                case SQLiteParser.DROP_:
                case SQLiteParser.EACH_:
                case SQLiteParser.ELSE_:
                case SQLiteParser.END_:
                case SQLiteParser.ESCAPE_:
                case SQLiteParser.EXCEPT_:
                case SQLiteParser.EXCLUSIVE_:
                case SQLiteParser.EXISTS_:
                case SQLiteParser.EXPLAIN_:
                case SQLiteParser.FAIL_:
                case SQLiteParser.FOR_:
                case SQLiteParser.FOREIGN_:
                case SQLiteParser.FROM_:
                case SQLiteParser.FULL_:
                case SQLiteParser.GLOB_:
                case SQLiteParser.GROUP_:
                case SQLiteParser.HAVING_:
                case SQLiteParser.IF_:
                case SQLiteParser.IGNORE_:
                case SQLiteParser.IMMEDIATE_:
                case SQLiteParser.IN_:
                case SQLiteParser.INDEX_:
                case SQLiteParser.INDEXED_:
                case SQLiteParser.INITIALLY_:
                case SQLiteParser.INNER_:
                case SQLiteParser.INSERT_:
                case SQLiteParser.INSTEAD_:
                case SQLiteParser.INTERSECT_:
                case SQLiteParser.INTO_:
                case SQLiteParser.IS_:
                case SQLiteParser.ISNULL_:
                case SQLiteParser.JOIN_:
                case SQLiteParser.KEY_:
                case SQLiteParser.LEFT_:
                case SQLiteParser.LIKE_:
                case SQLiteParser.LIMIT_:
                case SQLiteParser.MATCH_:
                case SQLiteParser.NATURAL_:
                case SQLiteParser.NO_:
                case SQLiteParser.NOT_:
                case SQLiteParser.NOTNULL_:
                case SQLiteParser.NULL_:
                case SQLiteParser.OF_:
                case SQLiteParser.OFFSET_:
                case SQLiteParser.ON_:
                case SQLiteParser.OR_:
                case SQLiteParser.ORDER_:
                case SQLiteParser.OUTER_:
                case SQLiteParser.PLAN_:
                case SQLiteParser.PRAGMA_:
                case SQLiteParser.PRIMARY_:
                case SQLiteParser.QUERY_:
                case SQLiteParser.RAISE_:
                case SQLiteParser.RECURSIVE_:
                case SQLiteParser.REFERENCES_:
                case SQLiteParser.REGEXP_:
                case SQLiteParser.REINDEX_:
                case SQLiteParser.RELEASE_:
                case SQLiteParser.RENAME_:
                case SQLiteParser.REPLACE_:
                case SQLiteParser.RESTRICT_:
                case SQLiteParser.RIGHT_:
                case SQLiteParser.ROLLBACK_:
                case SQLiteParser.ROW_:
                case SQLiteParser.ROWS_:
                case SQLiteParser.SAVEPOINT_:
                case SQLiteParser.SELECT_:
                case SQLiteParser.SET_:
                case SQLiteParser.TABLE_:
                case SQLiteParser.TEMP_:
                case SQLiteParser.TEMPORARY_:
                case SQLiteParser.THEN_:
                case SQLiteParser.TO_:
                case SQLiteParser.TRANSACTION_:
                case SQLiteParser.TRIGGER_:
                case SQLiteParser.UNION_:
                case SQLiteParser.UNIQUE_:
                case SQLiteParser.UPDATE_:
                case SQLiteParser.USING_:
                case SQLiteParser.VACUUM_:
                case SQLiteParser.VALUES_:
                case SQLiteParser.VIEW_:
                case SQLiteParser.VIRTUAL_:
                case SQLiteParser.WHEN_:
                case SQLiteParser.WHERE_:
                case SQLiteParser.WITH_:
                case SQLiteParser.WITHOUT_:
                case SQLiteParser.FIRST_VALUE_:
                case SQLiteParser.OVER_:
                case SQLiteParser.PARTITION_:
                case SQLiteParser.RANGE_:
                case SQLiteParser.PRECEDING_:
                case SQLiteParser.UNBOUNDED_:
                case SQLiteParser.CURRENT_:
                case SQLiteParser.FOLLOWING_:
                case SQLiteParser.CUME_DIST_:
                case SQLiteParser.DENSE_RANK_:
                case SQLiteParser.LAG_:
                case SQLiteParser.LAST_VALUE_:
                case SQLiteParser.LEAD_:
                case SQLiteParser.NTH_VALUE_:
                case SQLiteParser.NTILE_:
                case SQLiteParser.PERCENT_RANK_:
                case SQLiteParser.RANK_:
                case SQLiteParser.ROW_NUMBER_:
                case SQLiteParser.GENERATED_:
                case SQLiteParser.ALWAYS_:
                case SQLiteParser.STORED_:
                case SQLiteParser.TRUE_:
                case SQLiteParser.FALSE_:
                case SQLiteParser.WINDOW_:
                case SQLiteParser.NULLS_:
                case SQLiteParser.FIRST_:
                case SQLiteParser.LAST_:
                case SQLiteParser.FILTER_:
                case SQLiteParser.GROUPS_:
                case SQLiteParser.EXCLUDE_:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2033;
                        this.keyword();
                    }
                    break;
                case SQLiteParser.STRING_LITERAL:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2034;
                        this.match(SQLiteParser.STRING_LITERAL);
                    }
                    break;
                case SQLiteParser.OPEN_PAR:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2035;
                        this.match(SQLiteParser.OPEN_PAR);
                        this.state = 2036;
                        this.any_name();
                        this.state = 2037;
                        this.match(SQLiteParser.CLOSE_PAR);
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
    sempred(localContext, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 32:
                return this.expr_sempred(localContext, predIndex);
        }
        return true;
    }
    expr_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this.context, 20);
            case 1:
                return this.precpred(this.context, 19);
            case 2:
                return this.precpred(this.context, 18);
            case 3:
                return this.precpred(this.context, 17);
            case 4:
                return this.precpred(this.context, 16);
            case 5:
                return this.precpred(this.context, 15);
            case 6:
                return this.precpred(this.context, 14);
            case 7:
                return this.precpred(this.context, 13);
            case 8:
                return this.precpred(this.context, 6);
            case 9:
                return this.precpred(this.context, 5);
            case 10:
                return this.precpred(this.context, 9);
            case 11:
                return this.precpred(this.context, 8);
            case 12:
                return this.precpred(this.context, 7);
            case 13:
                return this.precpred(this.context, 4);
        }
        return true;
    }
    static get _ATN() {
        if (!SQLiteParser.__ATN) {
            SQLiteParser.__ATN = new antlr.ATNDeserializer().deserialize(SQLiteParser._serializedATN);
        }
        return SQLiteParser.__ATN;
    }
    get vocabulary() {
        return SQLiteParser.vocabulary;
    }
}
SQLiteParser.SCOL = 1;
SQLiteParser.DOT = 2;
SQLiteParser.OPEN_PAR = 3;
SQLiteParser.CLOSE_PAR = 4;
SQLiteParser.COMMA = 5;
SQLiteParser.ASSIGN = 6;
SQLiteParser.STAR = 7;
SQLiteParser.PLUS = 8;
SQLiteParser.MINUS = 9;
SQLiteParser.TILDE = 10;
SQLiteParser.PIPE2 = 11;
SQLiteParser.DIV = 12;
SQLiteParser.MOD = 13;
SQLiteParser.LT2 = 14;
SQLiteParser.GT2 = 15;
SQLiteParser.AMP = 16;
SQLiteParser.PIPE = 17;
SQLiteParser.LT = 18;
SQLiteParser.LT_EQ = 19;
SQLiteParser.GT = 20;
SQLiteParser.GT_EQ = 21;
SQLiteParser.EQ = 22;
SQLiteParser.NOT_EQ1 = 23;
SQLiteParser.NOT_EQ2 = 24;
SQLiteParser.ABORT_ = 25;
SQLiteParser.ACTION_ = 26;
SQLiteParser.ADD_ = 27;
SQLiteParser.AFTER_ = 28;
SQLiteParser.ALL_ = 29;
SQLiteParser.ALTER_ = 30;
SQLiteParser.ANALYZE_ = 31;
SQLiteParser.AND_ = 32;
SQLiteParser.AS_ = 33;
SQLiteParser.ASC_ = 34;
SQLiteParser.ATTACH_ = 35;
SQLiteParser.AUTOINCREMENT_ = 36;
SQLiteParser.BEFORE_ = 37;
SQLiteParser.BEGIN_ = 38;
SQLiteParser.BETWEEN_ = 39;
SQLiteParser.BY_ = 40;
SQLiteParser.CASCADE_ = 41;
SQLiteParser.CASE_ = 42;
SQLiteParser.CAST_ = 43;
SQLiteParser.CHECK_ = 44;
SQLiteParser.COLLATE_ = 45;
SQLiteParser.COLUMN_ = 46;
SQLiteParser.COMMIT_ = 47;
SQLiteParser.CONFLICT_ = 48;
SQLiteParser.CONSTRAINT_ = 49;
SQLiteParser.CREATE_ = 50;
SQLiteParser.CROSS_ = 51;
SQLiteParser.CURRENT_DATE_ = 52;
SQLiteParser.CURRENT_TIME_ = 53;
SQLiteParser.CURRENT_TIMESTAMP_ = 54;
SQLiteParser.DATABASE_ = 55;
SQLiteParser.DEFAULT_ = 56;
SQLiteParser.DEFERRABLE_ = 57;
SQLiteParser.DEFERRED_ = 58;
SQLiteParser.DELETE_ = 59;
SQLiteParser.DESC_ = 60;
SQLiteParser.DETACH_ = 61;
SQLiteParser.DISTINCT_ = 62;
SQLiteParser.DROP_ = 63;
SQLiteParser.EACH_ = 64;
SQLiteParser.ELSE_ = 65;
SQLiteParser.END_ = 66;
SQLiteParser.ESCAPE_ = 67;
SQLiteParser.EXCEPT_ = 68;
SQLiteParser.EXCLUSIVE_ = 69;
SQLiteParser.EXISTS_ = 70;
SQLiteParser.EXPLAIN_ = 71;
SQLiteParser.FAIL_ = 72;
SQLiteParser.FOR_ = 73;
SQLiteParser.FOREIGN_ = 74;
SQLiteParser.FROM_ = 75;
SQLiteParser.FULL_ = 76;
SQLiteParser.GLOB_ = 77;
SQLiteParser.GROUP_ = 78;
SQLiteParser.HAVING_ = 79;
SQLiteParser.IF_ = 80;
SQLiteParser.IGNORE_ = 81;
SQLiteParser.IMMEDIATE_ = 82;
SQLiteParser.IN_ = 83;
SQLiteParser.INDEX_ = 84;
SQLiteParser.INDEXED_ = 85;
SQLiteParser.INITIALLY_ = 86;
SQLiteParser.INNER_ = 87;
SQLiteParser.INSERT_ = 88;
SQLiteParser.INSTEAD_ = 89;
SQLiteParser.INTERSECT_ = 90;
SQLiteParser.INTO_ = 91;
SQLiteParser.IS_ = 92;
SQLiteParser.ISNULL_ = 93;
SQLiteParser.JOIN_ = 94;
SQLiteParser.KEY_ = 95;
SQLiteParser.LEFT_ = 96;
SQLiteParser.LIKE_ = 97;
SQLiteParser.LIMIT_ = 98;
SQLiteParser.MATCH_ = 99;
SQLiteParser.NATURAL_ = 100;
SQLiteParser.NO_ = 101;
SQLiteParser.NOT_ = 102;
SQLiteParser.NOTNULL_ = 103;
SQLiteParser.NULL_ = 104;
SQLiteParser.OF_ = 105;
SQLiteParser.OFFSET_ = 106;
SQLiteParser.ON_ = 107;
SQLiteParser.OR_ = 108;
SQLiteParser.ORDER_ = 109;
SQLiteParser.OUTER_ = 110;
SQLiteParser.PLAN_ = 111;
SQLiteParser.PRAGMA_ = 112;
SQLiteParser.PRIMARY_ = 113;
SQLiteParser.QUERY_ = 114;
SQLiteParser.RAISE_ = 115;
SQLiteParser.RECURSIVE_ = 116;
SQLiteParser.REFERENCES_ = 117;
SQLiteParser.REGEXP_ = 118;
SQLiteParser.REINDEX_ = 119;
SQLiteParser.RELEASE_ = 120;
SQLiteParser.RENAME_ = 121;
SQLiteParser.REPLACE_ = 122;
SQLiteParser.RESTRICT_ = 123;
SQLiteParser.RETURNING_ = 124;
SQLiteParser.RIGHT_ = 125;
SQLiteParser.ROLLBACK_ = 126;
SQLiteParser.ROW_ = 127;
SQLiteParser.ROWS_ = 128;
SQLiteParser.SAVEPOINT_ = 129;
SQLiteParser.SELECT_ = 130;
SQLiteParser.SET_ = 131;
SQLiteParser.TABLE_ = 132;
SQLiteParser.TEMP_ = 133;
SQLiteParser.TEMPORARY_ = 134;
SQLiteParser.THEN_ = 135;
SQLiteParser.TO_ = 136;
SQLiteParser.TRANSACTION_ = 137;
SQLiteParser.TRIGGER_ = 138;
SQLiteParser.UNION_ = 139;
SQLiteParser.UNIQUE_ = 140;
SQLiteParser.UPDATE_ = 141;
SQLiteParser.USING_ = 142;
SQLiteParser.VACUUM_ = 143;
SQLiteParser.VALUES_ = 144;
SQLiteParser.VIEW_ = 145;
SQLiteParser.VIRTUAL_ = 146;
SQLiteParser.WHEN_ = 147;
SQLiteParser.WHERE_ = 148;
SQLiteParser.WITH_ = 149;
SQLiteParser.WITHOUT_ = 150;
SQLiteParser.FIRST_VALUE_ = 151;
SQLiteParser.OVER_ = 152;
SQLiteParser.PARTITION_ = 153;
SQLiteParser.RANGE_ = 154;
SQLiteParser.PRECEDING_ = 155;
SQLiteParser.UNBOUNDED_ = 156;
SQLiteParser.CURRENT_ = 157;
SQLiteParser.FOLLOWING_ = 158;
SQLiteParser.CUME_DIST_ = 159;
SQLiteParser.DENSE_RANK_ = 160;
SQLiteParser.LAG_ = 161;
SQLiteParser.LAST_VALUE_ = 162;
SQLiteParser.LEAD_ = 163;
SQLiteParser.NTH_VALUE_ = 164;
SQLiteParser.NTILE_ = 165;
SQLiteParser.PERCENT_RANK_ = 166;
SQLiteParser.RANK_ = 167;
SQLiteParser.ROW_NUMBER_ = 168;
SQLiteParser.GENERATED_ = 169;
SQLiteParser.ALWAYS_ = 170;
SQLiteParser.STORED_ = 171;
SQLiteParser.TRUE_ = 172;
SQLiteParser.FALSE_ = 173;
SQLiteParser.WINDOW_ = 174;
SQLiteParser.NULLS_ = 175;
SQLiteParser.FIRST_ = 176;
SQLiteParser.LAST_ = 177;
SQLiteParser.FILTER_ = 178;
SQLiteParser.GROUPS_ = 179;
SQLiteParser.EXCLUDE_ = 180;
SQLiteParser.TIES_ = 181;
SQLiteParser.OTHERS_ = 182;
SQLiteParser.DO_ = 183;
SQLiteParser.NOTHING_ = 184;
SQLiteParser.IDENTIFIER = 185;
SQLiteParser.NUMERIC_LITERAL = 186;
SQLiteParser.BIND_PARAMETER = 187;
SQLiteParser.STRING_LITERAL = 188;
SQLiteParser.BLOB_LITERAL = 189;
SQLiteParser.SINGLE_LINE_COMMENT = 190;
SQLiteParser.MULTILINE_COMMENT = 191;
SQLiteParser.SPACES = 192;
SQLiteParser.UNEXPECTED_CHAR = 193;
SQLiteParser.RULE_program = 0;
SQLiteParser.RULE_singleStmt = 1;
SQLiteParser.RULE_sql_stmt = 2;
SQLiteParser.RULE_alter_table_stmt = 3;
SQLiteParser.RULE_analyze_stmt = 4;
SQLiteParser.RULE_attach_stmt = 5;
SQLiteParser.RULE_begin_stmt = 6;
SQLiteParser.RULE_commit_stmt = 7;
SQLiteParser.RULE_rollback_stmt = 8;
SQLiteParser.RULE_savepoint_stmt = 9;
SQLiteParser.RULE_release_stmt = 10;
SQLiteParser.RULE_create_index_stmt = 11;
SQLiteParser.RULE_indexed_column = 12;
SQLiteParser.RULE_create_table_stmt = 13;
SQLiteParser.RULE_column_def = 14;
SQLiteParser.RULE_type_name = 15;
SQLiteParser.RULE_column_constraint = 16;
SQLiteParser.RULE_signed_number = 17;
SQLiteParser.RULE_table_constraint = 18;
SQLiteParser.RULE_foreign_key_clause = 19;
SQLiteParser.RULE_conflict_clause = 20;
SQLiteParser.RULE_create_trigger_stmt = 21;
SQLiteParser.RULE_create_view_stmt = 22;
SQLiteParser.RULE_create_virtual_table_stmt = 23;
SQLiteParser.RULE_with_clause = 24;
SQLiteParser.RULE_cte_table_name = 25;
SQLiteParser.RULE_recursive_cte = 26;
SQLiteParser.RULE_common_table_expression = 27;
SQLiteParser.RULE_delete_stmt = 28;
SQLiteParser.RULE_delete_stmt_limited = 29;
SQLiteParser.RULE_detach_stmt = 30;
SQLiteParser.RULE_drop_stmt = 31;
SQLiteParser.RULE_expr = 32;
SQLiteParser.RULE_raise_function = 33;
SQLiteParser.RULE_literal_value = 34;
SQLiteParser.RULE_value_row = 35;
SQLiteParser.RULE_values_clause = 36;
SQLiteParser.RULE_insert_stmt = 37;
SQLiteParser.RULE_returning_clause = 38;
SQLiteParser.RULE_upsert_clause = 39;
SQLiteParser.RULE_pragma_stmt = 40;
SQLiteParser.RULE_pragma_value = 41;
SQLiteParser.RULE_reindex_stmt = 42;
SQLiteParser.RULE_select_stmt = 43;
SQLiteParser.RULE_join_clause = 44;
SQLiteParser.RULE_select_core = 45;
SQLiteParser.RULE_factored_select_stmt = 46;
SQLiteParser.RULE_simple_select_stmt = 47;
SQLiteParser.RULE_compound_select_stmt = 48;
SQLiteParser.RULE_table_or_subquery = 49;
SQLiteParser.RULE_result_column = 50;
SQLiteParser.RULE_join_operator = 51;
SQLiteParser.RULE_join_constraint = 52;
SQLiteParser.RULE_compound_operator = 53;
SQLiteParser.RULE_update_stmt = 54;
SQLiteParser.RULE_column_name_list = 55;
SQLiteParser.RULE_update_stmt_limited = 56;
SQLiteParser.RULE_qualified_table_name = 57;
SQLiteParser.RULE_vacuum_stmt = 58;
SQLiteParser.RULE_filter_clause = 59;
SQLiteParser.RULE_window_defn = 60;
SQLiteParser.RULE_over_clause = 61;
SQLiteParser.RULE_frame_spec = 62;
SQLiteParser.RULE_frame_clause = 63;
SQLiteParser.RULE_simple_function_invocation = 64;
SQLiteParser.RULE_aggregate_function_invocation = 65;
SQLiteParser.RULE_window_function_invocation = 66;
SQLiteParser.RULE_common_table_stmt = 67;
SQLiteParser.RULE_order_by_stmt = 68;
SQLiteParser.RULE_limit_stmt = 69;
SQLiteParser.RULE_ordering_term = 70;
SQLiteParser.RULE_asc_desc = 71;
SQLiteParser.RULE_frame_left = 72;
SQLiteParser.RULE_frame_right = 73;
SQLiteParser.RULE_frame_single = 74;
SQLiteParser.RULE_window_function = 75;
SQLiteParser.RULE_offset = 76;
SQLiteParser.RULE_default_value = 77;
SQLiteParser.RULE_partition_by = 78;
SQLiteParser.RULE_order_by_expr = 79;
SQLiteParser.RULE_order_by_expr_asc_desc = 80;
SQLiteParser.RULE_expr_asc_desc = 81;
SQLiteParser.RULE_initial_select = 82;
SQLiteParser.RULE_recursive_select = 83;
SQLiteParser.RULE_unary_operator = 84;
SQLiteParser.RULE_error_message = 85;
SQLiteParser.RULE_module_argument = 86;
SQLiteParser.RULE_column_alias = 87;
SQLiteParser.RULE_keyword = 88;
SQLiteParser.RULE_name = 89;
SQLiteParser.RULE_function_name = 90;
SQLiteParser.RULE_schema_name = 91;
SQLiteParser.RULE_table_name = 92;
SQLiteParser.RULE_table_or_index_name = 93;
SQLiteParser.RULE_column_name = 94;
SQLiteParser.RULE_collation_name = 95;
SQLiteParser.RULE_foreign_table = 96;
SQLiteParser.RULE_index_name = 97;
SQLiteParser.RULE_trigger_name = 98;
SQLiteParser.RULE_view_name = 99;
SQLiteParser.RULE_module_name = 100;
SQLiteParser.RULE_pragma_name = 101;
SQLiteParser.RULE_savepoint_name = 102;
SQLiteParser.RULE_table_alias = 103;
SQLiteParser.RULE_transaction_name = 104;
SQLiteParser.RULE_window_name = 105;
SQLiteParser.RULE_alias = 106;
SQLiteParser.RULE_filename = 107;
SQLiteParser.RULE_base_window_name = 108;
SQLiteParser.RULE_simple_func = 109;
SQLiteParser.RULE_aggregate_func = 110;
SQLiteParser.RULE_table_function_name = 111;
SQLiteParser.RULE_any_name = 112;
SQLiteParser.literalNames = [
    null, "';'", "'.'", "'('", "')'", "','", "'='", "'*'", "'+'", "'-'",
    "'~'", "'||'", "'/'", "'%'", "'<<'", "'>>'", "'&'", "'|'", "'<'",
    "'<='", "'>'", "'>='", "'=='", "'!='", "'<>'", "'ABORT'", "'ACTION'",
    "'ADD'", "'AFTER'", "'ALL'", "'ALTER'", "'ANALYZE'", "'AND'", "'AS'",
    "'ASC'", "'ATTACH'", "'AUTOINCREMENT'", "'BEFORE'", "'BEGIN'", "'BETWEEN'",
    "'BY'", "'CASCADE'", "'CASE'", "'CAST'", "'CHECK'", "'COLLATE'",
    "'COLUMN'", "'COMMIT'", "'CONFLICT'", "'CONSTRAINT'", "'CREATE'",
    "'CROSS'", "'CURRENT_DATE'", "'CURRENT_TIME'", "'CURRENT_TIMESTAMP'",
    "'DATABASE'", "'DEFAULT'", "'DEFERRABLE'", "'DEFERRED'", "'DELETE'",
    "'DESC'", "'DETACH'", "'DISTINCT'", "'DROP'", "'EACH'", "'ELSE'",
    "'END'", "'ESCAPE'", "'EXCEPT'", "'EXCLUSIVE'", "'EXISTS'", "'EXPLAIN'",
    "'FAIL'", "'FOR'", "'FOREIGN'", "'FROM'", "'FULL'", "'GLOB'", "'GROUP'",
    "'HAVING'", "'IF'", "'IGNORE'", "'IMMEDIATE'", "'IN'", "'INDEX'",
    "'INDEXED'", "'INITIALLY'", "'INNER'", "'INSERT'", "'INSTEAD'",
    "'INTERSECT'", "'INTO'", "'IS'", "'ISNULL'", "'JOIN'", "'KEY'",
    "'LEFT'", "'LIKE'", "'LIMIT'", "'MATCH'", "'NATURAL'", "'NO'", "'NOT'",
    "'NOTNULL'", "'NULL'", "'OF'", "'OFFSET'", "'ON'", "'OR'", "'ORDER'",
    "'OUTER'", "'PLAN'", "'PRAGMA'", "'PRIMARY'", "'QUERY'", "'RAISE'",
    "'RECURSIVE'", "'REFERENCES'", "'REGEXP'", "'REINDEX'", "'RELEASE'",
    "'RENAME'", "'REPLACE'", "'RESTRICT'", "'RETURNING'", "'RIGHT'",
    "'ROLLBACK'", "'ROW'", "'ROWS'", "'SAVEPOINT'", "'SELECT'", "'SET'",
    "'TABLE'", "'TEMP'", "'TEMPORARY'", "'THEN'", "'TO'", "'TRANSACTION'",
    "'TRIGGER'", "'UNION'", "'UNIQUE'", "'UPDATE'", "'USING'", "'VACUUM'",
    "'VALUES'", "'VIEW'", "'VIRTUAL'", "'WHEN'", "'WHERE'", "'WITH'",
    "'WITHOUT'", "'FIRST_VALUE'", "'OVER'", "'PARTITION'", "'RANGE'",
    "'PRECEDING'", "'UNBOUNDED'", "'CURRENT'", "'FOLLOWING'", "'CUME_DIST'",
    "'DENSE_RANK'", "'LAG'", "'LAST_VALUE'", "'LEAD'", "'NTH_VALUE'",
    "'NTILE'", "'PERCENT_RANK'", "'RANK'", "'ROW_NUMBER'", "'GENERATED'",
    "'ALWAYS'", "'STORED'", "'TRUE'", "'FALSE'", "'WINDOW'", "'NULLS'",
    "'FIRST'", "'LAST'", "'FILTER'", "'GROUPS'", "'EXCLUDE'", "'TIES'",
    "'OTHERS'", "'DO'", "'NOTHING'"
];
SQLiteParser.symbolicNames = [
    null, "SCOL", "DOT", "OPEN_PAR", "CLOSE_PAR", "COMMA", "ASSIGN",
    "STAR", "PLUS", "MINUS", "TILDE", "PIPE2", "DIV", "MOD", "LT2",
    "GT2", "AMP", "PIPE", "LT", "LT_EQ", "GT", "GT_EQ", "EQ", "NOT_EQ1",
    "NOT_EQ2", "ABORT_", "ACTION_", "ADD_", "AFTER_", "ALL_", "ALTER_",
    "ANALYZE_", "AND_", "AS_", "ASC_", "ATTACH_", "AUTOINCREMENT_",
    "BEFORE_", "BEGIN_", "BETWEEN_", "BY_", "CASCADE_", "CASE_", "CAST_",
    "CHECK_", "COLLATE_", "COLUMN_", "COMMIT_", "CONFLICT_", "CONSTRAINT_",
    "CREATE_", "CROSS_", "CURRENT_DATE_", "CURRENT_TIME_", "CURRENT_TIMESTAMP_",
    "DATABASE_", "DEFAULT_", "DEFERRABLE_", "DEFERRED_", "DELETE_",
    "DESC_", "DETACH_", "DISTINCT_", "DROP_", "EACH_", "ELSE_", "END_",
    "ESCAPE_", "EXCEPT_", "EXCLUSIVE_", "EXISTS_", "EXPLAIN_", "FAIL_",
    "FOR_", "FOREIGN_", "FROM_", "FULL_", "GLOB_", "GROUP_", "HAVING_",
    "IF_", "IGNORE_", "IMMEDIATE_", "IN_", "INDEX_", "INDEXED_", "INITIALLY_",
    "INNER_", "INSERT_", "INSTEAD_", "INTERSECT_", "INTO_", "IS_", "ISNULL_",
    "JOIN_", "KEY_", "LEFT_", "LIKE_", "LIMIT_", "MATCH_", "NATURAL_",
    "NO_", "NOT_", "NOTNULL_", "NULL_", "OF_", "OFFSET_", "ON_", "OR_",
    "ORDER_", "OUTER_", "PLAN_", "PRAGMA_", "PRIMARY_", "QUERY_", "RAISE_",
    "RECURSIVE_", "REFERENCES_", "REGEXP_", "REINDEX_", "RELEASE_",
    "RENAME_", "REPLACE_", "RESTRICT_", "RETURNING_", "RIGHT_", "ROLLBACK_",
    "ROW_", "ROWS_", "SAVEPOINT_", "SELECT_", "SET_", "TABLE_", "TEMP_",
    "TEMPORARY_", "THEN_", "TO_", "TRANSACTION_", "TRIGGER_", "UNION_",
    "UNIQUE_", "UPDATE_", "USING_", "VACUUM_", "VALUES_", "VIEW_", "VIRTUAL_",
    "WHEN_", "WHERE_", "WITH_", "WITHOUT_", "FIRST_VALUE_", "OVER_",
    "PARTITION_", "RANGE_", "PRECEDING_", "UNBOUNDED_", "CURRENT_",
    "FOLLOWING_", "CUME_DIST_", "DENSE_RANK_", "LAG_", "LAST_VALUE_",
    "LEAD_", "NTH_VALUE_", "NTILE_", "PERCENT_RANK_", "RANK_", "ROW_NUMBER_",
    "GENERATED_", "ALWAYS_", "STORED_", "TRUE_", "FALSE_", "WINDOW_",
    "NULLS_", "FIRST_", "LAST_", "FILTER_", "GROUPS_", "EXCLUDE_", "TIES_",
    "OTHERS_", "DO_", "NOTHING_", "IDENTIFIER", "NUMERIC_LITERAL", "BIND_PARAMETER",
    "STRING_LITERAL", "BLOB_LITERAL", "SINGLE_LINE_COMMENT", "MULTILINE_COMMENT",
    "SPACES", "UNEXPECTED_CHAR"
];
SQLiteParser.ruleNames = [
    "program", "singleStmt", "sql_stmt", "alter_table_stmt", "analyze_stmt",
    "attach_stmt", "begin_stmt", "commit_stmt", "rollback_stmt", "savepoint_stmt",
    "release_stmt", "create_index_stmt", "indexed_column", "create_table_stmt",
    "column_def", "type_name", "column_constraint", "signed_number",
    "table_constraint", "foreign_key_clause", "conflict_clause", "create_trigger_stmt",
    "create_view_stmt", "create_virtual_table_stmt", "with_clause",
    "cte_table_name", "recursive_cte", "common_table_expression", "delete_stmt",
    "delete_stmt_limited", "detach_stmt", "drop_stmt", "expr", "raise_function",
    "literal_value", "value_row", "values_clause", "insert_stmt", "returning_clause",
    "upsert_clause", "pragma_stmt", "pragma_value", "reindex_stmt",
    "select_stmt", "join_clause", "select_core", "factored_select_stmt",
    "simple_select_stmt", "compound_select_stmt", "table_or_subquery",
    "result_column", "join_operator", "join_constraint", "compound_operator",
    "update_stmt", "column_name_list", "update_stmt_limited", "qualified_table_name",
    "vacuum_stmt", "filter_clause", "window_defn", "over_clause", "frame_spec",
    "frame_clause", "simple_function_invocation", "aggregate_function_invocation",
    "window_function_invocation", "common_table_stmt", "order_by_stmt",
    "limit_stmt", "ordering_term", "asc_desc", "frame_left", "frame_right",
    "frame_single", "window_function", "offset", "default_value", "partition_by",
    "order_by_expr", "order_by_expr_asc_desc", "expr_asc_desc", "initial_select",
    "recursive_select", "unary_operator", "error_message", "module_argument",
    "column_alias", "keyword", "name", "function_name", "schema_name",
    "table_name", "table_or_index_name", "column_name", "collation_name",
    "foreign_table", "index_name", "trigger_name", "view_name", "module_name",
    "pragma_name", "savepoint_name", "table_alias", "transaction_name",
    "window_name", "alias", "filename", "base_window_name", "simple_func",
    "aggregate_func", "table_function_name", "any_name",
];
SQLiteParser._serializedATN = [
    4, 1, 193, 2042, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6,
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
    7, 109, 2, 110, 7, 110, 2, 111, 7, 111, 2, 112, 7, 112, 1, 0, 5, 0, 228, 8, 0, 10, 0, 12,
    0, 231, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 3, 1, 237, 8, 1, 1, 2, 1, 2, 1, 2, 3, 2, 242, 8, 2, 3,
    2, 244, 8, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
    2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 270, 8, 2, 1, 3, 1, 3, 1,
    3, 1, 3, 1, 3, 3, 3, 277, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 3, 3, 284, 8, 3, 1, 3, 1, 3, 1,
    3, 1, 3, 3, 3, 290, 8, 3, 1, 3, 1, 3, 3, 3, 294, 8, 3, 1, 3, 1, 3, 1, 3, 3, 3, 299, 8, 3, 1,
    3, 3, 3, 302, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 3, 4, 309, 8, 4, 1, 4, 3, 4, 312, 8, 4, 1,
    5, 1, 5, 3, 5, 316, 8, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 6, 1, 6, 3, 6, 324, 8, 6, 1, 6, 1, 6, 3,
    6, 328, 8, 6, 3, 6, 330, 8, 6, 1, 7, 1, 7, 3, 7, 334, 8, 7, 1, 8, 1, 8, 3, 8, 338, 8, 8, 1,
    8, 1, 8, 3, 8, 342, 8, 8, 1, 8, 3, 8, 345, 8, 8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 3, 10, 352,
    8, 10, 1, 10, 1, 10, 1, 11, 1, 11, 3, 11, 358, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11,
    364, 8, 11, 1, 11, 1, 11, 1, 11, 3, 11, 369, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
    11, 1, 11, 5, 11, 378, 8, 11, 10, 11, 12, 11, 381, 9, 11, 1, 11, 1, 11, 1, 11, 3, 11, 386,
    8, 11, 1, 12, 1, 12, 3, 12, 390, 8, 12, 1, 12, 1, 12, 3, 12, 394, 8, 12, 1, 12, 3, 12, 397,
    8, 12, 1, 13, 1, 13, 3, 13, 401, 8, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 407, 8, 13, 1,
    13, 1, 13, 1, 13, 3, 13, 412, 8, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 5, 13, 419, 8, 13,
    10, 13, 12, 13, 422, 9, 13, 1, 13, 1, 13, 5, 13, 426, 8, 13, 10, 13, 12, 13, 429, 9, 13,
    1, 13, 1, 13, 1, 13, 3, 13, 434, 8, 13, 1, 13, 1, 13, 3, 13, 438, 8, 13, 1, 14, 1, 14, 3,
    14, 442, 8, 14, 1, 14, 5, 14, 445, 8, 14, 10, 14, 12, 14, 448, 9, 14, 1, 15, 4, 15, 451,
    8, 15, 11, 15, 12, 15, 452, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15,
    1, 15, 3, 15, 465, 8, 15, 1, 16, 1, 16, 3, 16, 469, 8, 16, 1, 16, 1, 16, 1, 16, 3, 16, 474,
    8, 16, 1, 16, 3, 16, 477, 8, 16, 1, 16, 3, 16, 480, 8, 16, 1, 16, 3, 16, 483, 8, 16, 1,
    16, 1, 16, 3, 16, 487, 8, 16, 1, 16, 3, 16, 490, 8, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16,
    1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 504, 8, 16, 1, 16, 1, 16, 1, 16,
    1, 16, 1, 16, 3, 16, 511, 8, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 3, 16, 518, 8, 16, 3,
    16, 520, 8, 16, 1, 17, 3, 17, 523, 8, 17, 1, 17, 1, 17, 1, 18, 1, 18, 3, 18, 529, 8, 18,
    1, 18, 1, 18, 1, 18, 3, 18, 534, 8, 18, 1, 18, 1, 18, 1, 18, 1, 18, 5, 18, 540, 8, 18, 10,
    18, 12, 18, 543, 9, 18, 1, 18, 1, 18, 3, 18, 547, 8, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1,
    18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 5, 18, 560, 8, 18, 10, 18, 12, 18, 563, 9,
    18, 1, 18, 1, 18, 1, 18, 3, 18, 568, 8, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 5,
    19, 576, 8, 19, 10, 19, 12, 19, 579, 9, 19, 1, 19, 1, 19, 3, 19, 583, 8, 19, 1, 19, 1,
    19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 3, 19, 593, 8, 19, 1, 19, 1, 19, 5, 19, 597,
    8, 19, 10, 19, 12, 19, 600, 9, 19, 1, 19, 3, 19, 603, 8, 19, 1, 19, 1, 19, 1, 19, 3, 19,
    608, 8, 19, 3, 19, 610, 8, 19, 1, 20, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 3, 21, 618, 8,
    21, 1, 21, 1, 21, 1, 21, 1, 21, 3, 21, 624, 8, 21, 1, 21, 1, 21, 1, 21, 3, 21, 629, 8, 21,
    1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 3, 21, 636, 8, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21,
    1, 21, 1, 21, 5, 21, 645, 8, 21, 10, 21, 12, 21, 648, 9, 21, 3, 21, 650, 8, 21, 3, 21,
    652, 8, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 3, 21, 659, 8, 21, 1, 21, 1, 21, 3, 21, 663,
    8, 21, 1, 21, 1, 21, 1, 21, 1, 21, 1, 21, 3, 21, 670, 8, 21, 1, 21, 1, 21, 4, 21, 674, 8,
    21, 11, 21, 12, 21, 675, 1, 21, 1, 21, 1, 22, 1, 22, 3, 22, 682, 8, 22, 1, 22, 1, 22, 1,
    22, 1, 22, 3, 22, 688, 8, 22, 1, 22, 1, 22, 1, 22, 3, 22, 693, 8, 22, 1, 22, 1, 22, 1, 22,
    1, 22, 1, 22, 5, 22, 700, 8, 22, 10, 22, 12, 22, 703, 9, 22, 1, 22, 1, 22, 3, 22, 707,
    8, 22, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 3, 23, 718, 8, 23,
    1, 23, 1, 23, 1, 23, 3, 23, 723, 8, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23,
    5, 23, 732, 8, 23, 10, 23, 12, 23, 735, 9, 23, 1, 23, 1, 23, 3, 23, 739, 8, 23, 1, 24,
    1, 24, 3, 24, 743, 8, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24,
    1, 24, 1, 24, 1, 24, 5, 24, 757, 8, 24, 10, 24, 12, 24, 760, 9, 24, 1, 25, 1, 25, 1, 25,
    1, 25, 1, 25, 5, 25, 767, 8, 25, 10, 25, 12, 25, 770, 9, 25, 1, 25, 1, 25, 3, 25, 774,
    8, 25, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 3, 26, 782, 8, 26, 1, 26, 1, 26, 1, 26,
    1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 5, 27, 792, 8, 27, 10, 27, 12, 27, 795, 9, 27, 1, 27,
    1, 27, 3, 27, 799, 8, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 28, 3, 28, 807, 8, 28, 1,
    28, 1, 28, 1, 28, 1, 28, 1, 28, 3, 28, 814, 8, 28, 1, 28, 3, 28, 817, 8, 28, 1, 29, 3, 29,
    820, 8, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 3, 29, 827, 8, 29, 1, 29, 3, 29, 830, 8,
    29, 1, 29, 3, 29, 833, 8, 29, 1, 29, 3, 29, 836, 8, 29, 1, 30, 1, 30, 3, 30, 840, 8, 30,
    1, 30, 1, 30, 1, 31, 1, 31, 1, 31, 1, 31, 3, 31, 848, 8, 31, 1, 31, 1, 31, 1, 31, 3, 31,
    853, 8, 31, 1, 31, 1, 31, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 3, 32, 863, 8, 32, 1,
    32, 1, 32, 1, 32, 3, 32, 868, 8, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 3,
    32, 877, 8, 32, 1, 32, 1, 32, 1, 32, 5, 32, 882, 8, 32, 10, 32, 12, 32, 885, 9, 32, 1,
    32, 3, 32, 888, 8, 32, 1, 32, 1, 32, 3, 32, 892, 8, 32, 1, 32, 3, 32, 895, 8, 32, 1, 32,
    1, 32, 1, 32, 1, 32, 5, 32, 901, 8, 32, 10, 32, 12, 32, 904, 9, 32, 1, 32, 1, 32, 1, 32,
    1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 3, 32, 916, 8, 32, 1, 32, 3, 32, 919, 8,
    32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 3, 32, 927, 8, 32, 1, 32, 1, 32, 1, 32, 1,
    32, 1, 32, 4, 32, 934, 8, 32, 11, 32, 12, 32, 935, 1, 32, 1, 32, 3, 32, 940, 8, 32, 1,
    32, 1, 32, 1, 32, 3, 32, 945, 8, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1,
    32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1,
    32, 1, 32, 1, 32, 1, 32, 1, 32, 3, 32, 972, 8, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1,
    32, 1, 32, 3, 32, 981, 8, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1,
    32, 1, 32, 3, 32, 993, 8, 32, 1, 32, 1, 32, 1, 32, 3, 32, 998, 8, 32, 1, 32, 1, 32, 1, 32,
    1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 3, 32, 1010, 8, 32, 1, 32, 1, 32, 1, 32,
    1, 32, 3, 32, 1016, 8, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 3, 32, 1023, 8, 32, 1, 32,
    1, 32, 3, 32, 1027, 8, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 5, 32, 1035, 8, 32,
    10, 32, 12, 32, 1038, 9, 32, 3, 32, 1040, 8, 32, 1, 32, 1, 32, 1, 32, 1, 32, 3, 32, 1046,
    8, 32, 1, 32, 1, 32, 1, 32, 1, 32, 3, 32, 1052, 8, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32,
    5, 32, 1059, 8, 32, 10, 32, 12, 32, 1062, 9, 32, 3, 32, 1064, 8, 32, 1, 32, 1, 32, 3,
    32, 1068, 8, 32, 5, 32, 1070, 8, 32, 10, 32, 12, 32, 1073, 9, 32, 1, 33, 1, 33, 1, 33,
    1, 33, 1, 33, 1, 33, 3, 33, 1081, 8, 33, 1, 33, 1, 33, 1, 34, 1, 34, 1, 35, 1, 35, 1, 35,
    1, 35, 5, 35, 1091, 8, 35, 10, 35, 12, 35, 1094, 9, 35, 1, 35, 1, 35, 1, 36, 1, 36, 1,
    36, 1, 36, 5, 36, 1102, 8, 36, 10, 36, 12, 36, 1105, 9, 36, 1, 37, 3, 37, 1108, 8, 37,
    1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 3, 37, 1115, 8, 37, 1, 37, 1, 37, 1, 37, 1, 37, 3, 37,
    1121, 8, 37, 1, 37, 1, 37, 1, 37, 3, 37, 1126, 8, 37, 1, 37, 1, 37, 1, 37, 1, 37, 5, 37,
    1132, 8, 37, 10, 37, 12, 37, 1135, 9, 37, 1, 37, 1, 37, 3, 37, 1139, 8, 37, 1, 37, 1,
    37, 3, 37, 1143, 8, 37, 1, 37, 3, 37, 1146, 8, 37, 1, 37, 1, 37, 3, 37, 1150, 8, 37, 1,
    37, 3, 37, 1153, 8, 37, 1, 38, 1, 38, 1, 38, 1, 38, 5, 38, 1159, 8, 38, 10, 38, 12, 38,
    1162, 9, 38, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 5, 39, 1170, 8, 39, 10, 39, 12,
    39, 1173, 9, 39, 1, 39, 1, 39, 1, 39, 3, 39, 1178, 8, 39, 3, 39, 1180, 8, 39, 1, 39, 1,
    39, 1, 39, 1, 39, 1, 39, 1, 39, 3, 39, 1188, 8, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 3,
    39, 1195, 8, 39, 1, 39, 1, 39, 1, 39, 5, 39, 1200, 8, 39, 10, 39, 12, 39, 1203, 9, 39,
    1, 39, 1, 39, 3, 39, 1207, 8, 39, 3, 39, 1209, 8, 39, 1, 40, 1, 40, 1, 40, 1, 40, 3, 40,
    1215, 8, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 3, 40, 1224, 8, 40, 1, 41,
    1, 41, 1, 41, 3, 41, 1229, 8, 41, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 3, 42, 1236, 8, 42,
    1, 42, 1, 42, 3, 42, 1240, 8, 42, 3, 42, 1242, 8, 42, 1, 43, 3, 43, 1245, 8, 43, 1, 43,
    1, 43, 1, 43, 1, 43, 5, 43, 1251, 8, 43, 10, 43, 12, 43, 1254, 9, 43, 1, 43, 3, 43, 1257,
    8, 43, 1, 43, 3, 43, 1260, 8, 43, 1, 44, 1, 44, 1, 44, 1, 44, 3, 44, 1266, 8, 44, 5, 44,
    1268, 8, 44, 10, 44, 12, 44, 1271, 9, 44, 1, 45, 1, 45, 3, 45, 1275, 8, 45, 1, 45, 1,
    45, 1, 45, 5, 45, 1280, 8, 45, 10, 45, 12, 45, 1283, 9, 45, 1, 45, 1, 45, 1, 45, 1, 45,
    5, 45, 1289, 8, 45, 10, 45, 12, 45, 1292, 9, 45, 1, 45, 3, 45, 1295, 8, 45, 3, 45, 1297,
    8, 45, 1, 45, 1, 45, 3, 45, 1301, 8, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 5, 45, 1308,
    8, 45, 10, 45, 12, 45, 1311, 9, 45, 1, 45, 1, 45, 3, 45, 1315, 8, 45, 3, 45, 1317, 8,
    45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 1, 45, 5, 45, 1328, 8, 45, 10,
    45, 12, 45, 1331, 9, 45, 3, 45, 1333, 8, 45, 1, 45, 3, 45, 1336, 8, 45, 1, 46, 1, 46,
    1, 47, 3, 47, 1341, 8, 47, 1, 47, 1, 47, 3, 47, 1345, 8, 47, 1, 47, 3, 47, 1348, 8, 47,
    1, 48, 3, 48, 1351, 8, 48, 1, 48, 1, 48, 1, 48, 3, 48, 1356, 8, 48, 1, 48, 1, 48, 3, 48,
    1360, 8, 48, 1, 48, 4, 48, 1363, 8, 48, 11, 48, 12, 48, 1364, 1, 48, 3, 48, 1368, 8,
    48, 1, 48, 3, 48, 1371, 8, 48, 1, 49, 1, 49, 1, 49, 3, 49, 1376, 8, 49, 1, 49, 1, 49, 3,
    49, 1380, 8, 49, 1, 49, 3, 49, 1383, 8, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 3, 49, 1390,
    8, 49, 1, 49, 1, 49, 1, 49, 3, 49, 1395, 8, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 5, 49,
    1402, 8, 49, 10, 49, 12, 49, 1405, 9, 49, 1, 49, 1, 49, 3, 49, 1409, 8, 49, 1, 49, 3,
    49, 1412, 8, 49, 1, 49, 1, 49, 1, 49, 1, 49, 5, 49, 1418, 8, 49, 10, 49, 12, 49, 1421,
    9, 49, 1, 49, 3, 49, 1424, 8, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 3, 49, 1432,
    8, 49, 1, 49, 3, 49, 1435, 8, 49, 3, 49, 1437, 8, 49, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50,
    1, 50, 1, 50, 3, 50, 1446, 8, 50, 1, 50, 3, 50, 1449, 8, 50, 3, 50, 1451, 8, 50, 1, 51,
    1, 51, 3, 51, 1455, 8, 51, 1, 51, 1, 51, 3, 51, 1459, 8, 51, 1, 51, 1, 51, 3, 51, 1463,
    8, 51, 1, 51, 3, 51, 1466, 8, 51, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 5, 52,
    1475, 8, 52, 10, 52, 12, 52, 1478, 9, 52, 1, 52, 1, 52, 3, 52, 1482, 8, 52, 1, 53, 1,
    53, 3, 53, 1486, 8, 53, 1, 53, 1, 53, 3, 53, 1490, 8, 53, 1, 54, 3, 54, 1493, 8, 54, 1,
    54, 1, 54, 1, 54, 3, 54, 1498, 8, 54, 1, 54, 1, 54, 1, 54, 1, 54, 3, 54, 1504, 8, 54, 1,
    54, 1, 54, 1, 54, 1, 54, 1, 54, 3, 54, 1511, 8, 54, 1, 54, 1, 54, 1, 54, 5, 54, 1516, 8,
    54, 10, 54, 12, 54, 1519, 9, 54, 1, 54, 1, 54, 1, 54, 1, 54, 5, 54, 1525, 8, 54, 10, 54,
    12, 54, 1528, 9, 54, 1, 54, 3, 54, 1531, 8, 54, 3, 54, 1533, 8, 54, 1, 54, 1, 54, 3, 54,
    1537, 8, 54, 1, 54, 3, 54, 1540, 8, 54, 1, 55, 1, 55, 1, 55, 1, 55, 5, 55, 1546, 8, 55,
    10, 55, 12, 55, 1549, 9, 55, 1, 55, 1, 55, 1, 56, 3, 56, 1554, 8, 56, 1, 56, 1, 56, 1,
    56, 3, 56, 1559, 8, 56, 1, 56, 1, 56, 1, 56, 1, 56, 3, 56, 1565, 8, 56, 1, 56, 1, 56, 1,
    56, 1, 56, 1, 56, 3, 56, 1572, 8, 56, 1, 56, 1, 56, 1, 56, 5, 56, 1577, 8, 56, 10, 56,
    12, 56, 1580, 9, 56, 1, 56, 1, 56, 3, 56, 1584, 8, 56, 1, 56, 3, 56, 1587, 8, 56, 1, 56,
    3, 56, 1590, 8, 56, 1, 56, 3, 56, 1593, 8, 56, 1, 57, 1, 57, 1, 57, 3, 57, 1598, 8, 57,
    1, 57, 1, 57, 1, 57, 3, 57, 1603, 8, 57, 1, 57, 1, 57, 1, 57, 1, 57, 1, 57, 3, 57, 1610,
    8, 57, 1, 58, 1, 58, 3, 58, 1614, 8, 58, 1, 58, 1, 58, 3, 58, 1618, 8, 58, 1, 59, 1, 59,
    1, 59, 1, 59, 1, 59, 1, 59, 1, 60, 1, 60, 3, 60, 1628, 8, 60, 1, 60, 1, 60, 1, 60, 1, 60,
    1, 60, 5, 60, 1635, 8, 60, 10, 60, 12, 60, 1638, 9, 60, 3, 60, 1640, 8, 60, 1, 60, 1,
    60, 1, 60, 1, 60, 1, 60, 5, 60, 1647, 8, 60, 10, 60, 12, 60, 1650, 9, 60, 1, 60, 3, 60,
    1653, 8, 60, 1, 60, 1, 60, 1, 61, 1, 61, 1, 61, 1, 61, 3, 61, 1661, 8, 61, 1, 61, 1, 61,
    1, 61, 1, 61, 1, 61, 5, 61, 1668, 8, 61, 10, 61, 12, 61, 1671, 9, 61, 3, 61, 1673, 8,
    61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 61, 5, 61, 1680, 8, 61, 10, 61, 12, 61, 1683, 9, 61,
    3, 61, 1685, 8, 61, 1, 61, 3, 61, 1688, 8, 61, 1, 61, 3, 61, 1691, 8, 61, 1, 62, 1, 62,
    1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 1, 62, 3, 62, 1701, 8, 62, 3, 62, 1703, 8, 62, 1, 63,
    1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 3, 63, 1712, 8, 63, 1, 64, 1, 64, 1, 64, 1, 64,
    1, 64, 5, 64, 1719, 8, 64, 10, 64, 12, 64, 1722, 9, 64, 1, 64, 3, 64, 1725, 8, 64, 1,
    64, 1, 64, 1, 65, 1, 65, 1, 65, 3, 65, 1732, 8, 65, 1, 65, 1, 65, 1, 65, 5, 65, 1737, 8,
    65, 10, 65, 12, 65, 1740, 9, 65, 1, 65, 3, 65, 1743, 8, 65, 1, 65, 1, 65, 3, 65, 1747,
    8, 65, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 5, 66, 1754, 8, 66, 10, 66, 12, 66, 1757, 9,
    66, 1, 66, 3, 66, 1760, 8, 66, 1, 66, 1, 66, 3, 66, 1764, 8, 66, 1, 66, 1, 66, 1, 66, 3,
    66, 1769, 8, 66, 1, 67, 1, 67, 3, 67, 1773, 8, 67, 1, 67, 1, 67, 1, 67, 5, 67, 1778, 8,
    67, 10, 67, 12, 67, 1781, 9, 67, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 5, 68, 1788, 8, 68,
    10, 68, 12, 68, 1791, 9, 68, 1, 69, 1, 69, 1, 69, 1, 69, 3, 69, 1797, 8, 69, 1, 70, 1,
    70, 1, 70, 3, 70, 1802, 8, 70, 1, 70, 3, 70, 1805, 8, 70, 1, 70, 1, 70, 3, 70, 1809, 8,
    70, 1, 71, 1, 71, 1, 72, 1, 72, 1, 72, 1, 72, 1, 72, 1, 72, 1, 72, 1, 72, 1, 72, 1, 72, 3,
    72, 1823, 8, 72, 1, 73, 1, 73, 1, 73, 1, 73, 1, 73, 1, 73, 1, 73, 1, 73, 1, 73, 1, 73, 3,
    73, 1835, 8, 73, 1, 74, 1, 74, 1, 74, 1, 74, 1, 74, 1, 74, 1, 74, 3, 74, 1844, 8, 74, 1,
    75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 3, 75, 1853, 8, 75, 1, 75, 1, 75, 3, 75, 1857,
    8, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 3, 75, 1867, 8, 75, 1, 75,
    3, 75, 1870, 8, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 3, 75, 1879, 8, 75,
    1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 3, 75, 1888, 8, 75, 1, 75, 3, 75, 1891,
    8, 75, 1, 75, 1, 75, 1, 75, 1, 75, 3, 75, 1897, 8, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75,
    1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 3, 75, 1911, 8, 75, 1, 75, 1, 75, 3, 75,
    1915, 8, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 3, 75, 1926,
    8, 75, 1, 75, 1, 75, 1, 75, 3, 75, 1931, 8, 75, 1, 76, 1, 76, 1, 76, 1, 77, 1, 77, 1, 77,
    1, 78, 1, 78, 1, 78, 4, 78, 1942, 8, 78, 11, 78, 12, 78, 1943, 1, 79, 1, 79, 1, 79, 4,
    79, 1949, 8, 79, 11, 79, 12, 79, 1950, 1, 80, 1, 80, 1, 80, 1, 80, 1, 81, 1, 81, 3, 81,
    1959, 8, 81, 1, 81, 1, 81, 1, 81, 3, 81, 1964, 8, 81, 5, 81, 1966, 8, 81, 10, 81, 12,
    81, 1969, 9, 81, 1, 82, 1, 82, 1, 83, 1, 83, 1, 84, 1, 84, 1, 85, 1, 85, 1, 86, 1, 86, 3,
    86, 1981, 8, 86, 1, 87, 1, 87, 1, 88, 1, 88, 1, 89, 1, 89, 1, 90, 1, 90, 1, 91, 1, 91, 1,
    92, 1, 92, 1, 93, 1, 93, 1, 94, 1, 94, 1, 95, 1, 95, 1, 96, 1, 96, 1, 97, 1, 97, 1, 98, 1,
    98, 1, 99, 1, 99, 1, 100, 1, 100, 1, 101, 1, 101, 1, 102, 1, 102, 1, 103, 1, 103, 1, 104,
    1, 104, 1, 105, 1, 105, 1, 106, 1, 106, 1, 107, 1, 107, 1, 108, 1, 108, 1, 109, 1, 109,
    1, 110, 1, 110, 1, 111, 1, 111, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112,
    3, 112, 2040, 8, 112, 1, 112, 2, 420, 452, 1, 64, 113, 0, 2, 4, 6, 8, 10, 12, 14, 16,
    18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60,
    62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102,
    104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134,
    136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166,
    168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198,
    200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 0, 29, 3, 0, 58,
    58, 69, 69, 82, 82, 2, 0, 47, 47, 66, 66, 1, 0, 133, 134, 2, 0, 146, 146, 171, 171, 1,
    0, 8, 9, 2, 0, 59, 59, 141, 141, 2, 0, 56, 56, 104, 104, 2, 0, 58, 58, 82, 82, 5, 0, 25,
    25, 72, 72, 81, 81, 122, 122, 126, 126, 4, 0, 84, 84, 132, 132, 138, 138, 145, 145,
    2, 0, 7, 7, 12, 13, 1, 0, 14, 17, 1, 0, 18, 21, 4, 0, 77, 77, 97, 97, 99, 99, 118, 118,
    3, 0, 25, 25, 72, 72, 126, 126, 5, 0, 52, 54, 104, 104, 172, 173, 186, 186, 188, 189,
    2, 0, 29, 29, 62, 62, 3, 0, 76, 76, 96, 96, 125, 125, 3, 0, 128, 128, 154, 154, 179,
    179, 2, 0, 5, 5, 106, 106, 1, 0, 176, 177, 2, 0, 34, 34, 60, 60, 2, 0, 151, 151, 162,
    162, 2, 0, 159, 159, 166, 166, 2, 0, 160, 160, 167, 168, 2, 0, 161, 161, 163, 163,
    2, 0, 8, 10, 102, 102, 2, 0, 185, 185, 188, 188, 2, 0, 25, 123, 125, 180, 2323, 0, 229,
    1, 0, 0, 0, 2, 234, 1, 0, 0, 0, 4, 243, 1, 0, 0, 0, 6, 271, 1, 0, 0, 0, 8, 303, 1, 0, 0, 0,
    10, 313, 1, 0, 0, 0, 12, 321, 1, 0, 0, 0, 14, 331, 1, 0, 0, 0, 16, 335, 1, 0, 0, 0, 18, 346,
    1, 0, 0, 0, 20, 349, 1, 0, 0, 0, 22, 355, 1, 0, 0, 0, 24, 389, 1, 0, 0, 0, 26, 398, 1, 0,
    0, 0, 28, 439, 1, 0, 0, 0, 30, 450, 1, 0, 0, 0, 32, 468, 1, 0, 0, 0, 34, 522, 1, 0, 0, 0,
    36, 528, 1, 0, 0, 0, 38, 569, 1, 0, 0, 0, 40, 611, 1, 0, 0, 0, 42, 615, 1, 0, 0, 0, 44, 679,
    1, 0, 0, 0, 46, 711, 1, 0, 0, 0, 48, 740, 1, 0, 0, 0, 50, 761, 1, 0, 0, 0, 52, 775, 1, 0,
    0, 0, 54, 786, 1, 0, 0, 0, 56, 806, 1, 0, 0, 0, 58, 819, 1, 0, 0, 0, 60, 837, 1, 0, 0, 0,
    62, 843, 1, 0, 0, 0, 64, 944, 1, 0, 0, 0, 66, 1074, 1, 0, 0, 0, 68, 1084, 1, 0, 0, 0, 70,
    1086, 1, 0, 0, 0, 72, 1097, 1, 0, 0, 0, 74, 1107, 1, 0, 0, 0, 76, 1154, 1, 0, 0, 0, 78,
    1163, 1, 0, 0, 0, 80, 1210, 1, 0, 0, 0, 82, 1228, 1, 0, 0, 0, 84, 1230, 1, 0, 0, 0, 86,
    1244, 1, 0, 0, 0, 88, 1261, 1, 0, 0, 0, 90, 1335, 1, 0, 0, 0, 92, 1337, 1, 0, 0, 0, 94,
    1340, 1, 0, 0, 0, 96, 1350, 1, 0, 0, 0, 98, 1436, 1, 0, 0, 0, 100, 1450, 1, 0, 0, 0, 102,
    1465, 1, 0, 0, 0, 104, 1481, 1, 0, 0, 0, 106, 1489, 1, 0, 0, 0, 108, 1492, 1, 0, 0, 0,
    110, 1541, 1, 0, 0, 0, 112, 1553, 1, 0, 0, 0, 114, 1597, 1, 0, 0, 0, 116, 1611, 1, 0,
    0, 0, 118, 1619, 1, 0, 0, 0, 120, 1625, 1, 0, 0, 0, 122, 1656, 1, 0, 0, 0, 124, 1692,
    1, 0, 0, 0, 126, 1704, 1, 0, 0, 0, 128, 1713, 1, 0, 0, 0, 130, 1728, 1, 0, 0, 0, 132, 1748,
    1, 0, 0, 0, 134, 1770, 1, 0, 0, 0, 136, 1782, 1, 0, 0, 0, 138, 1792, 1, 0, 0, 0, 140, 1798,
    1, 0, 0, 0, 142, 1810, 1, 0, 0, 0, 144, 1822, 1, 0, 0, 0, 146, 1834, 1, 0, 0, 0, 148, 1843,
    1, 0, 0, 0, 150, 1930, 1, 0, 0, 0, 152, 1932, 1, 0, 0, 0, 154, 1935, 1, 0, 0, 0, 156, 1938,
    1, 0, 0, 0, 158, 1945, 1, 0, 0, 0, 160, 1952, 1, 0, 0, 0, 162, 1956, 1, 0, 0, 0, 164, 1970,
    1, 0, 0, 0, 166, 1972, 1, 0, 0, 0, 168, 1974, 1, 0, 0, 0, 170, 1976, 1, 0, 0, 0, 172, 1980,
    1, 0, 0, 0, 174, 1982, 1, 0, 0, 0, 176, 1984, 1, 0, 0, 0, 178, 1986, 1, 0, 0, 0, 180, 1988,
    1, 0, 0, 0, 182, 1990, 1, 0, 0, 0, 184, 1992, 1, 0, 0, 0, 186, 1994, 1, 0, 0, 0, 188, 1996,
    1, 0, 0, 0, 190, 1998, 1, 0, 0, 0, 192, 2000, 1, 0, 0, 0, 194, 2002, 1, 0, 0, 0, 196, 2004,
    1, 0, 0, 0, 198, 2006, 1, 0, 0, 0, 200, 2008, 1, 0, 0, 0, 202, 2010, 1, 0, 0, 0, 204, 2012,
    1, 0, 0, 0, 206, 2014, 1, 0, 0, 0, 208, 2016, 1, 0, 0, 0, 210, 2018, 1, 0, 0, 0, 212, 2020,
    1, 0, 0, 0, 214, 2022, 1, 0, 0, 0, 216, 2024, 1, 0, 0, 0, 218, 2026, 1, 0, 0, 0, 220, 2028,
    1, 0, 0, 0, 222, 2030, 1, 0, 0, 0, 224, 2039, 1, 0, 0, 0, 226, 228, 3, 2, 1, 0, 227, 226,
    1, 0, 0, 0, 228, 231, 1, 0, 0, 0, 229, 227, 1, 0, 0, 0, 229, 230, 1, 0, 0, 0, 230, 232,
    1, 0, 0, 0, 231, 229, 1, 0, 0, 0, 232, 233, 5, 0, 0, 1, 233, 1, 1, 0, 0, 0, 234, 236, 3,
    4, 2, 0, 235, 237, 5, 1, 0, 0, 236, 235, 1, 0, 0, 0, 236, 237, 1, 0, 0, 0, 237, 3, 1, 0,
    0, 0, 238, 241, 5, 71, 0, 0, 239, 240, 5, 114, 0, 0, 240, 242, 5, 111, 0, 0, 241, 239,
    1, 0, 0, 0, 241, 242, 1, 0, 0, 0, 242, 244, 1, 0, 0, 0, 243, 238, 1, 0, 0, 0, 243, 244,
    1, 0, 0, 0, 244, 269, 1, 0, 0, 0, 245, 270, 3, 6, 3, 0, 246, 270, 3, 8, 4, 0, 247, 270,
    3, 10, 5, 0, 248, 270, 3, 12, 6, 0, 249, 270, 3, 14, 7, 0, 250, 270, 3, 22, 11, 0, 251,
    270, 3, 26, 13, 0, 252, 270, 3, 42, 21, 0, 253, 270, 3, 44, 22, 0, 254, 270, 3, 46, 23,
    0, 255, 270, 3, 56, 28, 0, 256, 270, 3, 58, 29, 0, 257, 270, 3, 60, 30, 0, 258, 270,
    3, 62, 31, 0, 259, 270, 3, 74, 37, 0, 260, 270, 3, 84, 42, 0, 261, 270, 3, 20, 10, 0,
    262, 270, 3, 16, 8, 0, 263, 270, 3, 18, 9, 0, 264, 270, 3, 86, 43, 0, 265, 270, 3, 108,
    54, 0, 266, 270, 3, 112, 56, 0, 267, 270, 3, 116, 58, 0, 268, 270, 3, 80, 40, 0, 269,
    245, 1, 0, 0, 0, 269, 246, 1, 0, 0, 0, 269, 247, 1, 0, 0, 0, 269, 248, 1, 0, 0, 0, 269,
    249, 1, 0, 0, 0, 269, 250, 1, 0, 0, 0, 269, 251, 1, 0, 0, 0, 269, 252, 1, 0, 0, 0, 269,
    253, 1, 0, 0, 0, 269, 254, 1, 0, 0, 0, 269, 255, 1, 0, 0, 0, 269, 256, 1, 0, 0, 0, 269,
    257, 1, 0, 0, 0, 269, 258, 1, 0, 0, 0, 269, 259, 1, 0, 0, 0, 269, 260, 1, 0, 0, 0, 269,
    261, 1, 0, 0, 0, 269, 262, 1, 0, 0, 0, 269, 263, 1, 0, 0, 0, 269, 264, 1, 0, 0, 0, 269,
    265, 1, 0, 0, 0, 269, 266, 1, 0, 0, 0, 269, 267, 1, 0, 0, 0, 269, 268, 1, 0, 0, 0, 270,
    5, 1, 0, 0, 0, 271, 272, 5, 30, 0, 0, 272, 276, 5, 132, 0, 0, 273, 274, 3, 182, 91, 0,
    274, 275, 5, 2, 0, 0, 275, 277, 1, 0, 0, 0, 276, 273, 1, 0, 0, 0, 276, 277, 1, 0, 0, 0,
    277, 278, 1, 0, 0, 0, 278, 301, 3, 184, 92, 0, 279, 289, 5, 121, 0, 0, 280, 281, 5, 136,
    0, 0, 281, 290, 3, 184, 92, 0, 282, 284, 5, 46, 0, 0, 283, 282, 1, 0, 0, 0, 283, 284,
    1, 0, 0, 0, 284, 285, 1, 0, 0, 0, 285, 286, 3, 188, 94, 0, 286, 287, 5, 136, 0, 0, 287,
    288, 3, 188, 94, 0, 288, 290, 1, 0, 0, 0, 289, 280, 1, 0, 0, 0, 289, 283, 1, 0, 0, 0, 290,
    302, 1, 0, 0, 0, 291, 293, 5, 27, 0, 0, 292, 294, 5, 46, 0, 0, 293, 292, 1, 0, 0, 0, 293,
    294, 1, 0, 0, 0, 294, 295, 1, 0, 0, 0, 295, 302, 3, 28, 14, 0, 296, 298, 5, 63, 0, 0, 297,
    299, 5, 46, 0, 0, 298, 297, 1, 0, 0, 0, 298, 299, 1, 0, 0, 0, 299, 300, 1, 0, 0, 0, 300,
    302, 3, 188, 94, 0, 301, 279, 1, 0, 0, 0, 301, 291, 1, 0, 0, 0, 301, 296, 1, 0, 0, 0, 302,
    7, 1, 0, 0, 0, 303, 311, 5, 31, 0, 0, 304, 312, 3, 182, 91, 0, 305, 306, 3, 182, 91, 0,
    306, 307, 5, 2, 0, 0, 307, 309, 1, 0, 0, 0, 308, 305, 1, 0, 0, 0, 308, 309, 1, 0, 0, 0,
    309, 310, 1, 0, 0, 0, 310, 312, 3, 186, 93, 0, 311, 304, 1, 0, 0, 0, 311, 308, 1, 0, 0,
    0, 311, 312, 1, 0, 0, 0, 312, 9, 1, 0, 0, 0, 313, 315, 5, 35, 0, 0, 314, 316, 5, 55, 0,
    0, 315, 314, 1, 0, 0, 0, 315, 316, 1, 0, 0, 0, 316, 317, 1, 0, 0, 0, 317, 318, 3, 64, 32,
    0, 318, 319, 5, 33, 0, 0, 319, 320, 3, 182, 91, 0, 320, 11, 1, 0, 0, 0, 321, 323, 5, 38,
    0, 0, 322, 324, 7, 0, 0, 0, 323, 322, 1, 0, 0, 0, 323, 324, 1, 0, 0, 0, 324, 329, 1, 0,
    0, 0, 325, 327, 5, 137, 0, 0, 326, 328, 3, 208, 104, 0, 327, 326, 1, 0, 0, 0, 327, 328,
    1, 0, 0, 0, 328, 330, 1, 0, 0, 0, 329, 325, 1, 0, 0, 0, 329, 330, 1, 0, 0, 0, 330, 13, 1,
    0, 0, 0, 331, 333, 7, 1, 0, 0, 332, 334, 5, 137, 0, 0, 333, 332, 1, 0, 0, 0, 333, 334,
    1, 0, 0, 0, 334, 15, 1, 0, 0, 0, 335, 337, 5, 126, 0, 0, 336, 338, 5, 137, 0, 0, 337, 336,
    1, 0, 0, 0, 337, 338, 1, 0, 0, 0, 338, 344, 1, 0, 0, 0, 339, 341, 5, 136, 0, 0, 340, 342,
    5, 129, 0, 0, 341, 340, 1, 0, 0, 0, 341, 342, 1, 0, 0, 0, 342, 343, 1, 0, 0, 0, 343, 345,
    3, 204, 102, 0, 344, 339, 1, 0, 0, 0, 344, 345, 1, 0, 0, 0, 345, 17, 1, 0, 0, 0, 346, 347,
    5, 129, 0, 0, 347, 348, 3, 204, 102, 0, 348, 19, 1, 0, 0, 0, 349, 351, 5, 120, 0, 0, 350,
    352, 5, 129, 0, 0, 351, 350, 1, 0, 0, 0, 351, 352, 1, 0, 0, 0, 352, 353, 1, 0, 0, 0, 353,
    354, 3, 204, 102, 0, 354, 21, 1, 0, 0, 0, 355, 357, 5, 50, 0, 0, 356, 358, 5, 140, 0,
    0, 357, 356, 1, 0, 0, 0, 357, 358, 1, 0, 0, 0, 358, 359, 1, 0, 0, 0, 359, 363, 5, 84, 0,
    0, 360, 361, 5, 80, 0, 0, 361, 362, 5, 102, 0, 0, 362, 364, 5, 70, 0, 0, 363, 360, 1,
    0, 0, 0, 363, 364, 1, 0, 0, 0, 364, 368, 1, 0, 0, 0, 365, 366, 3, 182, 91, 0, 366, 367,
    5, 2, 0, 0, 367, 369, 1, 0, 0, 0, 368, 365, 1, 0, 0, 0, 368, 369, 1, 0, 0, 0, 369, 370,
    1, 0, 0, 0, 370, 371, 3, 194, 97, 0, 371, 372, 5, 107, 0, 0, 372, 373, 3, 184, 92, 0,
    373, 374, 5, 3, 0, 0, 374, 379, 3, 24, 12, 0, 375, 376, 5, 5, 0, 0, 376, 378, 3, 24, 12,
    0, 377, 375, 1, 0, 0, 0, 378, 381, 1, 0, 0, 0, 379, 377, 1, 0, 0, 0, 379, 380, 1, 0, 0,
    0, 380, 382, 1, 0, 0, 0, 381, 379, 1, 0, 0, 0, 382, 385, 5, 4, 0, 0, 383, 384, 5, 148,
    0, 0, 384, 386, 3, 64, 32, 0, 385, 383, 1, 0, 0, 0, 385, 386, 1, 0, 0, 0, 386, 23, 1, 0,
    0, 0, 387, 390, 3, 188, 94, 0, 388, 390, 3, 64, 32, 0, 389, 387, 1, 0, 0, 0, 389, 388,
    1, 0, 0, 0, 390, 393, 1, 0, 0, 0, 391, 392, 5, 45, 0, 0, 392, 394, 3, 190, 95, 0, 393,
    391, 1, 0, 0, 0, 393, 394, 1, 0, 0, 0, 394, 396, 1, 0, 0, 0, 395, 397, 3, 142, 71, 0, 396,
    395, 1, 0, 0, 0, 396, 397, 1, 0, 0, 0, 397, 25, 1, 0, 0, 0, 398, 400, 5, 50, 0, 0, 399,
    401, 7, 2, 0, 0, 400, 399, 1, 0, 0, 0, 400, 401, 1, 0, 0, 0, 401, 402, 1, 0, 0, 0, 402,
    406, 5, 132, 0, 0, 403, 404, 5, 80, 0, 0, 404, 405, 5, 102, 0, 0, 405, 407, 5, 70, 0,
    0, 406, 403, 1, 0, 0, 0, 406, 407, 1, 0, 0, 0, 407, 411, 1, 0, 0, 0, 408, 409, 3, 182,
    91, 0, 409, 410, 5, 2, 0, 0, 410, 412, 1, 0, 0, 0, 411, 408, 1, 0, 0, 0, 411, 412, 1, 0,
    0, 0, 412, 413, 1, 0, 0, 0, 413, 437, 3, 184, 92, 0, 414, 415, 5, 3, 0, 0, 415, 420, 3,
    28, 14, 0, 416, 417, 5, 5, 0, 0, 417, 419, 3, 28, 14, 0, 418, 416, 1, 0, 0, 0, 419, 422,
    1, 0, 0, 0, 420, 421, 1, 0, 0, 0, 420, 418, 1, 0, 0, 0, 421, 427, 1, 0, 0, 0, 422, 420,
    1, 0, 0, 0, 423, 424, 5, 5, 0, 0, 424, 426, 3, 36, 18, 0, 425, 423, 1, 0, 0, 0, 426, 429,
    1, 0, 0, 0, 427, 425, 1, 0, 0, 0, 427, 428, 1, 0, 0, 0, 428, 430, 1, 0, 0, 0, 429, 427,
    1, 0, 0, 0, 430, 433, 5, 4, 0, 0, 431, 432, 5, 150, 0, 0, 432, 434, 5, 185, 0, 0, 433,
    431, 1, 0, 0, 0, 433, 434, 1, 0, 0, 0, 434, 438, 1, 0, 0, 0, 435, 436, 5, 33, 0, 0, 436,
    438, 3, 86, 43, 0, 437, 414, 1, 0, 0, 0, 437, 435, 1, 0, 0, 0, 438, 27, 1, 0, 0, 0, 439,
    441, 3, 188, 94, 0, 440, 442, 3, 30, 15, 0, 441, 440, 1, 0, 0, 0, 441, 442, 1, 0, 0, 0,
    442, 446, 1, 0, 0, 0, 443, 445, 3, 32, 16, 0, 444, 443, 1, 0, 0, 0, 445, 448, 1, 0, 0,
    0, 446, 444, 1, 0, 0, 0, 446, 447, 1, 0, 0, 0, 447, 29, 1, 0, 0, 0, 448, 446, 1, 0, 0, 0,
    449, 451, 3, 178, 89, 0, 450, 449, 1, 0, 0, 0, 451, 452, 1, 0, 0, 0, 452, 453, 1, 0, 0,
    0, 452, 450, 1, 0, 0, 0, 453, 464, 1, 0, 0, 0, 454, 455, 5, 3, 0, 0, 455, 456, 3, 34, 17,
    0, 456, 457, 5, 4, 0, 0, 457, 465, 1, 0, 0, 0, 458, 459, 5, 3, 0, 0, 459, 460, 3, 34, 17,
    0, 460, 461, 5, 5, 0, 0, 461, 462, 3, 34, 17, 0, 462, 463, 5, 4, 0, 0, 463, 465, 1, 0,
    0, 0, 464, 454, 1, 0, 0, 0, 464, 458, 1, 0, 0, 0, 464, 465, 1, 0, 0, 0, 465, 31, 1, 0, 0,
    0, 466, 467, 5, 49, 0, 0, 467, 469, 3, 178, 89, 0, 468, 466, 1, 0, 0, 0, 468, 469, 1,
    0, 0, 0, 469, 519, 1, 0, 0, 0, 470, 471, 5, 113, 0, 0, 471, 473, 5, 95, 0, 0, 472, 474,
    3, 142, 71, 0, 473, 472, 1, 0, 0, 0, 473, 474, 1, 0, 0, 0, 474, 476, 1, 0, 0, 0, 475, 477,
    3, 40, 20, 0, 476, 475, 1, 0, 0, 0, 476, 477, 1, 0, 0, 0, 477, 479, 1, 0, 0, 0, 478, 480,
    5, 36, 0, 0, 479, 478, 1, 0, 0, 0, 479, 480, 1, 0, 0, 0, 480, 520, 1, 0, 0, 0, 481, 483,
    5, 102, 0, 0, 482, 481, 1, 0, 0, 0, 482, 483, 1, 0, 0, 0, 483, 484, 1, 0, 0, 0, 484, 487,
    5, 104, 0, 0, 485, 487, 5, 140, 0, 0, 486, 482, 1, 0, 0, 0, 486, 485, 1, 0, 0, 0, 487,
    489, 1, 0, 0, 0, 488, 490, 3, 40, 20, 0, 489, 488, 1, 0, 0, 0, 489, 490, 1, 0, 0, 0, 490,
    520, 1, 0, 0, 0, 491, 492, 5, 44, 0, 0, 492, 493, 5, 3, 0, 0, 493, 494, 3, 64, 32, 0, 494,
    495, 5, 4, 0, 0, 495, 520, 1, 0, 0, 0, 496, 503, 5, 56, 0, 0, 497, 504, 3, 34, 17, 0, 498,
    504, 3, 68, 34, 0, 499, 500, 5, 3, 0, 0, 500, 501, 3, 64, 32, 0, 501, 502, 5, 4, 0, 0,
    502, 504, 1, 0, 0, 0, 503, 497, 1, 0, 0, 0, 503, 498, 1, 0, 0, 0, 503, 499, 1, 0, 0, 0,
    504, 520, 1, 0, 0, 0, 505, 506, 5, 45, 0, 0, 506, 520, 3, 190, 95, 0, 507, 520, 3, 38,
    19, 0, 508, 509, 5, 169, 0, 0, 509, 511, 5, 170, 0, 0, 510, 508, 1, 0, 0, 0, 510, 511,
    1, 0, 0, 0, 511, 512, 1, 0, 0, 0, 512, 513, 5, 33, 0, 0, 513, 514, 5, 3, 0, 0, 514, 515,
    3, 64, 32, 0, 515, 517, 5, 4, 0, 0, 516, 518, 7, 3, 0, 0, 517, 516, 1, 0, 0, 0, 517, 518,
    1, 0, 0, 0, 518, 520, 1, 0, 0, 0, 519, 470, 1, 0, 0, 0, 519, 486, 1, 0, 0, 0, 519, 491,
    1, 0, 0, 0, 519, 496, 1, 0, 0, 0, 519, 505, 1, 0, 0, 0, 519, 507, 1, 0, 0, 0, 519, 510,
    1, 0, 0, 0, 520, 33, 1, 0, 0, 0, 521, 523, 7, 4, 0, 0, 522, 521, 1, 0, 0, 0, 522, 523, 1,
    0, 0, 0, 523, 524, 1, 0, 0, 0, 524, 525, 5, 186, 0, 0, 525, 35, 1, 0, 0, 0, 526, 527, 5,
    49, 0, 0, 527, 529, 3, 178, 89, 0, 528, 526, 1, 0, 0, 0, 528, 529, 1, 0, 0, 0, 529, 567,
    1, 0, 0, 0, 530, 531, 5, 113, 0, 0, 531, 534, 5, 95, 0, 0, 532, 534, 5, 140, 0, 0, 533,
    530, 1, 0, 0, 0, 533, 532, 1, 0, 0, 0, 534, 535, 1, 0, 0, 0, 535, 536, 5, 3, 0, 0, 536,
    541, 3, 24, 12, 0, 537, 538, 5, 5, 0, 0, 538, 540, 3, 24, 12, 0, 539, 537, 1, 0, 0, 0,
    540, 543, 1, 0, 0, 0, 541, 539, 1, 0, 0, 0, 541, 542, 1, 0, 0, 0, 542, 544, 1, 0, 0, 0,
    543, 541, 1, 0, 0, 0, 544, 546, 5, 4, 0, 0, 545, 547, 3, 40, 20, 0, 546, 545, 1, 0, 0,
    0, 546, 547, 1, 0, 0, 0, 547, 568, 1, 0, 0, 0, 548, 549, 5, 44, 0, 0, 549, 550, 5, 3, 0,
    0, 550, 551, 3, 64, 32, 0, 551, 552, 5, 4, 0, 0, 552, 568, 1, 0, 0, 0, 553, 554, 5, 74,
    0, 0, 554, 555, 5, 95, 0, 0, 555, 556, 5, 3, 0, 0, 556, 561, 3, 188, 94, 0, 557, 558,
    5, 5, 0, 0, 558, 560, 3, 188, 94, 0, 559, 557, 1, 0, 0, 0, 560, 563, 1, 0, 0, 0, 561, 559,
    1, 0, 0, 0, 561, 562, 1, 0, 0, 0, 562, 564, 1, 0, 0, 0, 563, 561, 1, 0, 0, 0, 564, 565,
    5, 4, 0, 0, 565, 566, 3, 38, 19, 0, 566, 568, 1, 0, 0, 0, 567, 533, 1, 0, 0, 0, 567, 548,
    1, 0, 0, 0, 567, 553, 1, 0, 0, 0, 568, 37, 1, 0, 0, 0, 569, 570, 5, 117, 0, 0, 570, 582,
    3, 192, 96, 0, 571, 572, 5, 3, 0, 0, 572, 577, 3, 188, 94, 0, 573, 574, 5, 5, 0, 0, 574,
    576, 3, 188, 94, 0, 575, 573, 1, 0, 0, 0, 576, 579, 1, 0, 0, 0, 577, 575, 1, 0, 0, 0, 577,
    578, 1, 0, 0, 0, 578, 580, 1, 0, 0, 0, 579, 577, 1, 0, 0, 0, 580, 581, 5, 4, 0, 0, 581,
    583, 1, 0, 0, 0, 582, 571, 1, 0, 0, 0, 582, 583, 1, 0, 0, 0, 583, 598, 1, 0, 0, 0, 584,
    585, 5, 107, 0, 0, 585, 592, 7, 5, 0, 0, 586, 587, 5, 131, 0, 0, 587, 593, 7, 6, 0, 0,
    588, 593, 5, 41, 0, 0, 589, 593, 5, 123, 0, 0, 590, 591, 5, 101, 0, 0, 591, 593, 5, 26,
    0, 0, 592, 586, 1, 0, 0, 0, 592, 588, 1, 0, 0, 0, 592, 589, 1, 0, 0, 0, 592, 590, 1, 0,
    0, 0, 593, 597, 1, 0, 0, 0, 594, 595, 5, 99, 0, 0, 595, 597, 3, 178, 89, 0, 596, 584,
    1, 0, 0, 0, 596, 594, 1, 0, 0, 0, 597, 600, 1, 0, 0, 0, 598, 596, 1, 0, 0, 0, 598, 599,
    1, 0, 0, 0, 599, 609, 1, 0, 0, 0, 600, 598, 1, 0, 0, 0, 601, 603, 5, 102, 0, 0, 602, 601,
    1, 0, 0, 0, 602, 603, 1, 0, 0, 0, 603, 604, 1, 0, 0, 0, 604, 607, 5, 57, 0, 0, 605, 606,
    5, 86, 0, 0, 606, 608, 7, 7, 0, 0, 607, 605, 1, 0, 0, 0, 607, 608, 1, 0, 0, 0, 608, 610,
    1, 0, 0, 0, 609, 602, 1, 0, 0, 0, 609, 610, 1, 0, 0, 0, 610, 39, 1, 0, 0, 0, 611, 612, 5,
    107, 0, 0, 612, 613, 5, 48, 0, 0, 613, 614, 7, 8, 0, 0, 614, 41, 1, 0, 0, 0, 615, 617,
    5, 50, 0, 0, 616, 618, 7, 2, 0, 0, 617, 616, 1, 0, 0, 0, 617, 618, 1, 0, 0, 0, 618, 619,
    1, 0, 0, 0, 619, 623, 5, 138, 0, 0, 620, 621, 5, 80, 0, 0, 621, 622, 5, 102, 0, 0, 622,
    624, 5, 70, 0, 0, 623, 620, 1, 0, 0, 0, 623, 624, 1, 0, 0, 0, 624, 628, 1, 0, 0, 0, 625,
    626, 3, 182, 91, 0, 626, 627, 5, 2, 0, 0, 627, 629, 1, 0, 0, 0, 628, 625, 1, 0, 0, 0, 628,
    629, 1, 0, 0, 0, 629, 630, 1, 0, 0, 0, 630, 635, 3, 196, 98, 0, 631, 636, 5, 37, 0, 0,
    632, 636, 5, 28, 0, 0, 633, 634, 5, 89, 0, 0, 634, 636, 5, 105, 0, 0, 635, 631, 1, 0,
    0, 0, 635, 632, 1, 0, 0, 0, 635, 633, 1, 0, 0, 0, 635, 636, 1, 0, 0, 0, 636, 651, 1, 0,
    0, 0, 637, 652, 5, 59, 0, 0, 638, 652, 5, 88, 0, 0, 639, 649, 5, 141, 0, 0, 640, 641,
    5, 105, 0, 0, 641, 646, 3, 188, 94, 0, 642, 643, 5, 5, 0, 0, 643, 645, 3, 188, 94, 0,
    644, 642, 1, 0, 0, 0, 645, 648, 1, 0, 0, 0, 646, 644, 1, 0, 0, 0, 646, 647, 1, 0, 0, 0,
    647, 650, 1, 0, 0, 0, 648, 646, 1, 0, 0, 0, 649, 640, 1, 0, 0, 0, 649, 650, 1, 0, 0, 0,
    650, 652, 1, 0, 0, 0, 651, 637, 1, 0, 0, 0, 651, 638, 1, 0, 0, 0, 651, 639, 1, 0, 0, 0,
    652, 653, 1, 0, 0, 0, 653, 654, 5, 107, 0, 0, 654, 658, 3, 184, 92, 0, 655, 656, 5, 73,
    0, 0, 656, 657, 5, 64, 0, 0, 657, 659, 5, 127, 0, 0, 658, 655, 1, 0, 0, 0, 658, 659, 1,
    0, 0, 0, 659, 662, 1, 0, 0, 0, 660, 661, 5, 147, 0, 0, 661, 663, 3, 64, 32, 0, 662, 660,
    1, 0, 0, 0, 662, 663, 1, 0, 0, 0, 663, 664, 1, 0, 0, 0, 664, 673, 5, 38, 0, 0, 665, 670,
    3, 108, 54, 0, 666, 670, 3, 74, 37, 0, 667, 670, 3, 56, 28, 0, 668, 670, 3, 86, 43, 0,
    669, 665, 1, 0, 0, 0, 669, 666, 1, 0, 0, 0, 669, 667, 1, 0, 0, 0, 669, 668, 1, 0, 0, 0,
    670, 671, 1, 0, 0, 0, 671, 672, 5, 1, 0, 0, 672, 674, 1, 0, 0, 0, 673, 669, 1, 0, 0, 0,
    674, 675, 1, 0, 0, 0, 675, 673, 1, 0, 0, 0, 675, 676, 1, 0, 0, 0, 676, 677, 1, 0, 0, 0,
    677, 678, 5, 66, 0, 0, 678, 43, 1, 0, 0, 0, 679, 681, 5, 50, 0, 0, 680, 682, 7, 2, 0, 0,
    681, 680, 1, 0, 0, 0, 681, 682, 1, 0, 0, 0, 682, 683, 1, 0, 0, 0, 683, 687, 5, 145, 0,
    0, 684, 685, 5, 80, 0, 0, 685, 686, 5, 102, 0, 0, 686, 688, 5, 70, 0, 0, 687, 684, 1,
    0, 0, 0, 687, 688, 1, 0, 0, 0, 688, 692, 1, 0, 0, 0, 689, 690, 3, 182, 91, 0, 690, 691,
    5, 2, 0, 0, 691, 693, 1, 0, 0, 0, 692, 689, 1, 0, 0, 0, 692, 693, 1, 0, 0, 0, 693, 694,
    1, 0, 0, 0, 694, 706, 3, 198, 99, 0, 695, 696, 5, 3, 0, 0, 696, 701, 3, 188, 94, 0, 697,
    698, 5, 5, 0, 0, 698, 700, 3, 188, 94, 0, 699, 697, 1, 0, 0, 0, 700, 703, 1, 0, 0, 0, 701,
    699, 1, 0, 0, 0, 701, 702, 1, 0, 0, 0, 702, 704, 1, 0, 0, 0, 703, 701, 1, 0, 0, 0, 704,
    705, 5, 4, 0, 0, 705, 707, 1, 0, 0, 0, 706, 695, 1, 0, 0, 0, 706, 707, 1, 0, 0, 0, 707,
    708, 1, 0, 0, 0, 708, 709, 5, 33, 0, 0, 709, 710, 3, 86, 43, 0, 710, 45, 1, 0, 0, 0, 711,
    712, 5, 50, 0, 0, 712, 713, 5, 146, 0, 0, 713, 717, 5, 132, 0, 0, 714, 715, 5, 80, 0,
    0, 715, 716, 5, 102, 0, 0, 716, 718, 5, 70, 0, 0, 717, 714, 1, 0, 0, 0, 717, 718, 1, 0,
    0, 0, 718, 722, 1, 0, 0, 0, 719, 720, 3, 182, 91, 0, 720, 721, 5, 2, 0, 0, 721, 723, 1,
    0, 0, 0, 722, 719, 1, 0, 0, 0, 722, 723, 1, 0, 0, 0, 723, 724, 1, 0, 0, 0, 724, 725, 3,
    184, 92, 0, 725, 726, 5, 142, 0, 0, 726, 738, 3, 200, 100, 0, 727, 728, 5, 3, 0, 0, 728,
    733, 3, 172, 86, 0, 729, 730, 5, 5, 0, 0, 730, 732, 3, 172, 86, 0, 731, 729, 1, 0, 0,
    0, 732, 735, 1, 0, 0, 0, 733, 731, 1, 0, 0, 0, 733, 734, 1, 0, 0, 0, 734, 736, 1, 0, 0,
    0, 735, 733, 1, 0, 0, 0, 736, 737, 5, 4, 0, 0, 737, 739, 1, 0, 0, 0, 738, 727, 1, 0, 0,
    0, 738, 739, 1, 0, 0, 0, 739, 47, 1, 0, 0, 0, 740, 742, 5, 149, 0, 0, 741, 743, 5, 116,
    0, 0, 742, 741, 1, 0, 0, 0, 742, 743, 1, 0, 0, 0, 743, 744, 1, 0, 0, 0, 744, 745, 3, 50,
    25, 0, 745, 746, 5, 33, 0, 0, 746, 747, 5, 3, 0, 0, 747, 748, 3, 86, 43, 0, 748, 758,
    5, 4, 0, 0, 749, 750, 5, 5, 0, 0, 750, 751, 3, 50, 25, 0, 751, 752, 5, 33, 0, 0, 752, 753,
    5, 3, 0, 0, 753, 754, 3, 86, 43, 0, 754, 755, 5, 4, 0, 0, 755, 757, 1, 0, 0, 0, 756, 749,
    1, 0, 0, 0, 757, 760, 1, 0, 0, 0, 758, 756, 1, 0, 0, 0, 758, 759, 1, 0, 0, 0, 759, 49, 1,
    0, 0, 0, 760, 758, 1, 0, 0, 0, 761, 773, 3, 184, 92, 0, 762, 763, 5, 3, 0, 0, 763, 768,
    3, 188, 94, 0, 764, 765, 5, 5, 0, 0, 765, 767, 3, 188, 94, 0, 766, 764, 1, 0, 0, 0, 767,
    770, 1, 0, 0, 0, 768, 766, 1, 0, 0, 0, 768, 769, 1, 0, 0, 0, 769, 771, 1, 0, 0, 0, 770,
    768, 1, 0, 0, 0, 771, 772, 5, 4, 0, 0, 772, 774, 1, 0, 0, 0, 773, 762, 1, 0, 0, 0, 773,
    774, 1, 0, 0, 0, 774, 51, 1, 0, 0, 0, 775, 776, 3, 50, 25, 0, 776, 777, 5, 33, 0, 0, 777,
    778, 5, 3, 0, 0, 778, 779, 3, 164, 82, 0, 779, 781, 5, 139, 0, 0, 780, 782, 5, 29, 0,
    0, 781, 780, 1, 0, 0, 0, 781, 782, 1, 0, 0, 0, 782, 783, 1, 0, 0, 0, 783, 784, 3, 166,
    83, 0, 784, 785, 5, 4, 0, 0, 785, 53, 1, 0, 0, 0, 786, 798, 3, 184, 92, 0, 787, 788, 5,
    3, 0, 0, 788, 793, 3, 188, 94, 0, 789, 790, 5, 5, 0, 0, 790, 792, 3, 188, 94, 0, 791,
    789, 1, 0, 0, 0, 792, 795, 1, 0, 0, 0, 793, 791, 1, 0, 0, 0, 793, 794, 1, 0, 0, 0, 794,
    796, 1, 0, 0, 0, 795, 793, 1, 0, 0, 0, 796, 797, 5, 4, 0, 0, 797, 799, 1, 0, 0, 0, 798,
    787, 1, 0, 0, 0, 798, 799, 1, 0, 0, 0, 799, 800, 1, 0, 0, 0, 800, 801, 5, 33, 0, 0, 801,
    802, 5, 3, 0, 0, 802, 803, 3, 86, 43, 0, 803, 804, 5, 4, 0, 0, 804, 55, 1, 0, 0, 0, 805,
    807, 3, 48, 24, 0, 806, 805, 1, 0, 0, 0, 806, 807, 1, 0, 0, 0, 807, 808, 1, 0, 0, 0, 808,
    809, 5, 59, 0, 0, 809, 810, 5, 75, 0, 0, 810, 813, 3, 114, 57, 0, 811, 812, 5, 148, 0,
    0, 812, 814, 3, 64, 32, 0, 813, 811, 1, 0, 0, 0, 813, 814, 1, 0, 0, 0, 814, 816, 1, 0,
    0, 0, 815, 817, 3, 76, 38, 0, 816, 815, 1, 0, 0, 0, 816, 817, 1, 0, 0, 0, 817, 57, 1, 0,
    0, 0, 818, 820, 3, 48, 24, 0, 819, 818, 1, 0, 0, 0, 819, 820, 1, 0, 0, 0, 820, 821, 1,
    0, 0, 0, 821, 822, 5, 59, 0, 0, 822, 823, 5, 75, 0, 0, 823, 826, 3, 114, 57, 0, 824, 825,
    5, 148, 0, 0, 825, 827, 3, 64, 32, 0, 826, 824, 1, 0, 0, 0, 826, 827, 1, 0, 0, 0, 827,
    829, 1, 0, 0, 0, 828, 830, 3, 76, 38, 0, 829, 828, 1, 0, 0, 0, 829, 830, 1, 0, 0, 0, 830,
    835, 1, 0, 0, 0, 831, 833, 3, 136, 68, 0, 832, 831, 1, 0, 0, 0, 832, 833, 1, 0, 0, 0, 833,
    834, 1, 0, 0, 0, 834, 836, 3, 138, 69, 0, 835, 832, 1, 0, 0, 0, 835, 836, 1, 0, 0, 0, 836,
    59, 1, 0, 0, 0, 837, 839, 5, 61, 0, 0, 838, 840, 5, 55, 0, 0, 839, 838, 1, 0, 0, 0, 839,
    840, 1, 0, 0, 0, 840, 841, 1, 0, 0, 0, 841, 842, 3, 182, 91, 0, 842, 61, 1, 0, 0, 0, 843,
    844, 5, 63, 0, 0, 844, 847, 7, 9, 0, 0, 845, 846, 5, 80, 0, 0, 846, 848, 5, 70, 0, 0, 847,
    845, 1, 0, 0, 0, 847, 848, 1, 0, 0, 0, 848, 852, 1, 0, 0, 0, 849, 850, 3, 182, 91, 0, 850,
    851, 5, 2, 0, 0, 851, 853, 1, 0, 0, 0, 852, 849, 1, 0, 0, 0, 852, 853, 1, 0, 0, 0, 853,
    854, 1, 0, 0, 0, 854, 855, 3, 224, 112, 0, 855, 63, 1, 0, 0, 0, 856, 857, 6, 32, -1, 0,
    857, 945, 3, 68, 34, 0, 858, 945, 5, 187, 0, 0, 859, 860, 3, 182, 91, 0, 860, 861, 5,
    2, 0, 0, 861, 863, 1, 0, 0, 0, 862, 859, 1, 0, 0, 0, 862, 863, 1, 0, 0, 0, 863, 864, 1,
    0, 0, 0, 864, 865, 3, 184, 92, 0, 865, 866, 5, 2, 0, 0, 866, 868, 1, 0, 0, 0, 867, 862,
    1, 0, 0, 0, 867, 868, 1, 0, 0, 0, 868, 869, 1, 0, 0, 0, 869, 945, 3, 188, 94, 0, 870, 871,
    3, 168, 84, 0, 871, 872, 3, 64, 32, 21, 872, 945, 1, 0, 0, 0, 873, 874, 3, 180, 90, 0,
    874, 887, 5, 3, 0, 0, 875, 877, 5, 62, 0, 0, 876, 875, 1, 0, 0, 0, 876, 877, 1, 0, 0, 0,
    877, 878, 1, 0, 0, 0, 878, 883, 3, 64, 32, 0, 879, 880, 5, 5, 0, 0, 880, 882, 3, 64, 32,
    0, 881, 879, 1, 0, 0, 0, 882, 885, 1, 0, 0, 0, 883, 881, 1, 0, 0, 0, 883, 884, 1, 0, 0,
    0, 884, 888, 1, 0, 0, 0, 885, 883, 1, 0, 0, 0, 886, 888, 5, 7, 0, 0, 887, 876, 1, 0, 0,
    0, 887, 886, 1, 0, 0, 0, 887, 888, 1, 0, 0, 0, 888, 889, 1, 0, 0, 0, 889, 891, 5, 4, 0,
    0, 890, 892, 3, 118, 59, 0, 891, 890, 1, 0, 0, 0, 891, 892, 1, 0, 0, 0, 892, 894, 1, 0,
    0, 0, 893, 895, 3, 122, 61, 0, 894, 893, 1, 0, 0, 0, 894, 895, 1, 0, 0, 0, 895, 945, 1,
    0, 0, 0, 896, 897, 5, 3, 0, 0, 897, 902, 3, 64, 32, 0, 898, 899, 5, 5, 0, 0, 899, 901,
    3, 64, 32, 0, 900, 898, 1, 0, 0, 0, 901, 904, 1, 0, 0, 0, 902, 900, 1, 0, 0, 0, 902, 903,
    1, 0, 0, 0, 903, 905, 1, 0, 0, 0, 904, 902, 1, 0, 0, 0, 905, 906, 5, 4, 0, 0, 906, 945,
    1, 0, 0, 0, 907, 908, 5, 43, 0, 0, 908, 909, 5, 3, 0, 0, 909, 910, 3, 64, 32, 0, 910, 911,
    5, 33, 0, 0, 911, 912, 3, 30, 15, 0, 912, 913, 5, 4, 0, 0, 913, 945, 1, 0, 0, 0, 914, 916,
    5, 102, 0, 0, 915, 914, 1, 0, 0, 0, 915, 916, 1, 0, 0, 0, 916, 917, 1, 0, 0, 0, 917, 919,
    5, 70, 0, 0, 918, 915, 1, 0, 0, 0, 918, 919, 1, 0, 0, 0, 919, 920, 1, 0, 0, 0, 920, 921,
    5, 3, 0, 0, 921, 922, 3, 86, 43, 0, 922, 923, 5, 4, 0, 0, 923, 945, 1, 0, 0, 0, 924, 926,
    5, 42, 0, 0, 925, 927, 3, 64, 32, 0, 926, 925, 1, 0, 0, 0, 926, 927, 1, 0, 0, 0, 927, 933,
    1, 0, 0, 0, 928, 929, 5, 147, 0, 0, 929, 930, 3, 64, 32, 0, 930, 931, 5, 135, 0, 0, 931,
    932, 3, 64, 32, 0, 932, 934, 1, 0, 0, 0, 933, 928, 1, 0, 0, 0, 934, 935, 1, 0, 0, 0, 935,
    933, 1, 0, 0, 0, 935, 936, 1, 0, 0, 0, 936, 939, 1, 0, 0, 0, 937, 938, 5, 65, 0, 0, 938,
    940, 3, 64, 32, 0, 939, 937, 1, 0, 0, 0, 939, 940, 1, 0, 0, 0, 940, 941, 1, 0, 0, 0, 941,
    942, 5, 66, 0, 0, 942, 945, 1, 0, 0, 0, 943, 945, 3, 66, 33, 0, 944, 856, 1, 0, 0, 0, 944,
    858, 1, 0, 0, 0, 944, 867, 1, 0, 0, 0, 944, 870, 1, 0, 0, 0, 944, 873, 1, 0, 0, 0, 944,
    896, 1, 0, 0, 0, 944, 907, 1, 0, 0, 0, 944, 918, 1, 0, 0, 0, 944, 924, 1, 0, 0, 0, 944,
    943, 1, 0, 0, 0, 945, 1071, 1, 0, 0, 0, 946, 947, 10, 20, 0, 0, 947, 948, 5, 11, 0, 0,
    948, 1070, 3, 64, 32, 21, 949, 950, 10, 19, 0, 0, 950, 951, 7, 10, 0, 0, 951, 1070,
    3, 64, 32, 20, 952, 953, 10, 18, 0, 0, 953, 954, 7, 4, 0, 0, 954, 1070, 3, 64, 32, 19,
    955, 956, 10, 17, 0, 0, 956, 957, 7, 11, 0, 0, 957, 1070, 3, 64, 32, 18, 958, 959, 10,
    16, 0, 0, 959, 960, 7, 12, 0, 0, 960, 1070, 3, 64, 32, 17, 961, 980, 10, 15, 0, 0, 962,
    981, 5, 6, 0, 0, 963, 981, 5, 22, 0, 0, 964, 981, 5, 23, 0, 0, 965, 981, 5, 24, 0, 0, 966,
    981, 5, 92, 0, 0, 967, 968, 5, 92, 0, 0, 968, 981, 5, 102, 0, 0, 969, 971, 5, 92, 0, 0,
    970, 972, 5, 102, 0, 0, 971, 970, 1, 0, 0, 0, 971, 972, 1, 0, 0, 0, 972, 973, 1, 0, 0,
    0, 973, 974, 5, 62, 0, 0, 974, 981, 5, 75, 0, 0, 975, 981, 5, 83, 0, 0, 976, 981, 5, 97,
    0, 0, 977, 981, 5, 77, 0, 0, 978, 981, 5, 99, 0, 0, 979, 981, 5, 118, 0, 0, 980, 962,
    1, 0, 0, 0, 980, 963, 1, 0, 0, 0, 980, 964, 1, 0, 0, 0, 980, 965, 1, 0, 0, 0, 980, 966,
    1, 0, 0, 0, 980, 967, 1, 0, 0, 0, 980, 969, 1, 0, 0, 0, 980, 975, 1, 0, 0, 0, 980, 976,
    1, 0, 0, 0, 980, 977, 1, 0, 0, 0, 980, 978, 1, 0, 0, 0, 980, 979, 1, 0, 0, 0, 981, 982,
    1, 0, 0, 0, 982, 1070, 3, 64, 32, 16, 983, 984, 10, 14, 0, 0, 984, 985, 5, 32, 0, 0, 985,
    1070, 3, 64, 32, 15, 986, 987, 10, 13, 0, 0, 987, 988, 5, 108, 0, 0, 988, 1070, 3, 64,
    32, 14, 989, 990, 10, 6, 0, 0, 990, 992, 5, 92, 0, 0, 991, 993, 5, 102, 0, 0, 992, 991,
    1, 0, 0, 0, 992, 993, 1, 0, 0, 0, 993, 994, 1, 0, 0, 0, 994, 1070, 3, 64, 32, 7, 995, 997,
    10, 5, 0, 0, 996, 998, 5, 102, 0, 0, 997, 996, 1, 0, 0, 0, 997, 998, 1, 0, 0, 0, 998, 999,
    1, 0, 0, 0, 999, 1000, 5, 39, 0, 0, 1000, 1001, 3, 64, 32, 0, 1001, 1002, 5, 32, 0, 0,
    1002, 1003, 3, 64, 32, 6, 1003, 1070, 1, 0, 0, 0, 1004, 1005, 10, 9, 0, 0, 1005, 1006,
    5, 45, 0, 0, 1006, 1070, 3, 190, 95, 0, 1007, 1009, 10, 8, 0, 0, 1008, 1010, 5, 102,
    0, 0, 1009, 1008, 1, 0, 0, 0, 1009, 1010, 1, 0, 0, 0, 1010, 1011, 1, 0, 0, 0, 1011, 1012,
    7, 13, 0, 0, 1012, 1015, 3, 64, 32, 0, 1013, 1014, 5, 67, 0, 0, 1014, 1016, 3, 64, 32,
    0, 1015, 1013, 1, 0, 0, 0, 1015, 1016, 1, 0, 0, 0, 1016, 1070, 1, 0, 0, 0, 1017, 1022,
    10, 7, 0, 0, 1018, 1023, 5, 93, 0, 0, 1019, 1023, 5, 103, 0, 0, 1020, 1021, 5, 102,
    0, 0, 1021, 1023, 5, 104, 0, 0, 1022, 1018, 1, 0, 0, 0, 1022, 1019, 1, 0, 0, 0, 1022,
    1020, 1, 0, 0, 0, 1023, 1070, 1, 0, 0, 0, 1024, 1026, 10, 4, 0, 0, 1025, 1027, 5, 102,
    0, 0, 1026, 1025, 1, 0, 0, 0, 1026, 1027, 1, 0, 0, 0, 1027, 1028, 1, 0, 0, 0, 1028, 1067,
    5, 83, 0, 0, 1029, 1039, 5, 3, 0, 0, 1030, 1040, 3, 86, 43, 0, 1031, 1036, 3, 64, 32,
    0, 1032, 1033, 5, 5, 0, 0, 1033, 1035, 3, 64, 32, 0, 1034, 1032, 1, 0, 0, 0, 1035, 1038,
    1, 0, 0, 0, 1036, 1034, 1, 0, 0, 0, 1036, 1037, 1, 0, 0, 0, 1037, 1040, 1, 0, 0, 0, 1038,
    1036, 1, 0, 0, 0, 1039, 1030, 1, 0, 0, 0, 1039, 1031, 1, 0, 0, 0, 1039, 1040, 1, 0, 0,
    0, 1040, 1041, 1, 0, 0, 0, 1041, 1068, 5, 4, 0, 0, 1042, 1043, 3, 182, 91, 0, 1043,
    1044, 5, 2, 0, 0, 1044, 1046, 1, 0, 0, 0, 1045, 1042, 1, 0, 0, 0, 1045, 1046, 1, 0, 0,
    0, 1046, 1047, 1, 0, 0, 0, 1047, 1068, 3, 184, 92, 0, 1048, 1049, 3, 182, 91, 0, 1049,
    1050, 5, 2, 0, 0, 1050, 1052, 1, 0, 0, 0, 1051, 1048, 1, 0, 0, 0, 1051, 1052, 1, 0, 0,
    0, 1052, 1053, 1, 0, 0, 0, 1053, 1054, 3, 222, 111, 0, 1054, 1063, 5, 3, 0, 0, 1055,
    1060, 3, 64, 32, 0, 1056, 1057, 5, 5, 0, 0, 1057, 1059, 3, 64, 32, 0, 1058, 1056, 1,
    0, 0, 0, 1059, 1062, 1, 0, 0, 0, 1060, 1058, 1, 0, 0, 0, 1060, 1061, 1, 0, 0, 0, 1061,
    1064, 1, 0, 0, 0, 1062, 1060, 1, 0, 0, 0, 1063, 1055, 1, 0, 0, 0, 1063, 1064, 1, 0, 0,
    0, 1064, 1065, 1, 0, 0, 0, 1065, 1066, 5, 4, 0, 0, 1066, 1068, 1, 0, 0, 0, 1067, 1029,
    1, 0, 0, 0, 1067, 1045, 1, 0, 0, 0, 1067, 1051, 1, 0, 0, 0, 1068, 1070, 1, 0, 0, 0, 1069,
    946, 1, 0, 0, 0, 1069, 949, 1, 0, 0, 0, 1069, 952, 1, 0, 0, 0, 1069, 955, 1, 0, 0, 0, 1069,
    958, 1, 0, 0, 0, 1069, 961, 1, 0, 0, 0, 1069, 983, 1, 0, 0, 0, 1069, 986, 1, 0, 0, 0, 1069,
    989, 1, 0, 0, 0, 1069, 995, 1, 0, 0, 0, 1069, 1004, 1, 0, 0, 0, 1069, 1007, 1, 0, 0, 0,
    1069, 1017, 1, 0, 0, 0, 1069, 1024, 1, 0, 0, 0, 1070, 1073, 1, 0, 0, 0, 1071, 1069,
    1, 0, 0, 0, 1071, 1072, 1, 0, 0, 0, 1072, 65, 1, 0, 0, 0, 1073, 1071, 1, 0, 0, 0, 1074,
    1075, 5, 115, 0, 0, 1075, 1080, 5, 3, 0, 0, 1076, 1081, 5, 81, 0, 0, 1077, 1078, 7,
    14, 0, 0, 1078, 1079, 5, 5, 0, 0, 1079, 1081, 3, 170, 85, 0, 1080, 1076, 1, 0, 0, 0,
    1080, 1077, 1, 0, 0, 0, 1081, 1082, 1, 0, 0, 0, 1082, 1083, 5, 4, 0, 0, 1083, 67, 1,
    0, 0, 0, 1084, 1085, 7, 15, 0, 0, 1085, 69, 1, 0, 0, 0, 1086, 1087, 5, 3, 0, 0, 1087,
    1092, 3, 64, 32, 0, 1088, 1089, 5, 5, 0, 0, 1089, 1091, 3, 64, 32, 0, 1090, 1088, 1,
    0, 0, 0, 1091, 1094, 1, 0, 0, 0, 1092, 1090, 1, 0, 0, 0, 1092, 1093, 1, 0, 0, 0, 1093,
    1095, 1, 0, 0, 0, 1094, 1092, 1, 0, 0, 0, 1095, 1096, 5, 4, 0, 0, 1096, 71, 1, 0, 0, 0,
    1097, 1098, 5, 144, 0, 0, 1098, 1103, 3, 70, 35, 0, 1099, 1100, 5, 5, 0, 0, 1100, 1102,
    3, 70, 35, 0, 1101, 1099, 1, 0, 0, 0, 1102, 1105, 1, 0, 0, 0, 1103, 1101, 1, 0, 0, 0,
    1103, 1104, 1, 0, 0, 0, 1104, 73, 1, 0, 0, 0, 1105, 1103, 1, 0, 0, 0, 1106, 1108, 3,
    48, 24, 0, 1107, 1106, 1, 0, 0, 0, 1107, 1108, 1, 0, 0, 0, 1108, 1114, 1, 0, 0, 0, 1109,
    1115, 5, 88, 0, 0, 1110, 1115, 5, 122, 0, 0, 1111, 1112, 5, 88, 0, 0, 1112, 1113, 5,
    108, 0, 0, 1113, 1115, 7, 8, 0, 0, 1114, 1109, 1, 0, 0, 0, 1114, 1110, 1, 0, 0, 0, 1114,
    1111, 1, 0, 0, 0, 1115, 1116, 1, 0, 0, 0, 1116, 1120, 5, 91, 0, 0, 1117, 1118, 3, 182,
    91, 0, 1118, 1119, 5, 2, 0, 0, 1119, 1121, 1, 0, 0, 0, 1120, 1117, 1, 0, 0, 0, 1120,
    1121, 1, 0, 0, 0, 1121, 1122, 1, 0, 0, 0, 1122, 1125, 3, 184, 92, 0, 1123, 1124, 5,
    33, 0, 0, 1124, 1126, 3, 206, 103, 0, 1125, 1123, 1, 0, 0, 0, 1125, 1126, 1, 0, 0, 0,
    1126, 1138, 1, 0, 0, 0, 1127, 1128, 5, 3, 0, 0, 1128, 1133, 3, 188, 94, 0, 1129, 1130,
    5, 5, 0, 0, 1130, 1132, 3, 188, 94, 0, 1131, 1129, 1, 0, 0, 0, 1132, 1135, 1, 0, 0, 0,
    1133, 1131, 1, 0, 0, 0, 1133, 1134, 1, 0, 0, 0, 1134, 1136, 1, 0, 0, 0, 1135, 1133,
    1, 0, 0, 0, 1136, 1137, 5, 4, 0, 0, 1137, 1139, 1, 0, 0, 0, 1138, 1127, 1, 0, 0, 0, 1138,
    1139, 1, 0, 0, 0, 1139, 1149, 1, 0, 0, 0, 1140, 1143, 3, 72, 36, 0, 1141, 1143, 3, 86,
    43, 0, 1142, 1140, 1, 0, 0, 0, 1142, 1141, 1, 0, 0, 0, 1143, 1145, 1, 0, 0, 0, 1144,
    1146, 3, 78, 39, 0, 1145, 1144, 1, 0, 0, 0, 1145, 1146, 1, 0, 0, 0, 1146, 1150, 1, 0,
    0, 0, 1147, 1148, 5, 56, 0, 0, 1148, 1150, 5, 144, 0, 0, 1149, 1142, 1, 0, 0, 0, 1149,
    1147, 1, 0, 0, 0, 1150, 1152, 1, 0, 0, 0, 1151, 1153, 3, 76, 38, 0, 1152, 1151, 1, 0,
    0, 0, 1152, 1153, 1, 0, 0, 0, 1153, 75, 1, 0, 0, 0, 1154, 1155, 5, 124, 0, 0, 1155, 1160,
    3, 100, 50, 0, 1156, 1157, 5, 5, 0, 0, 1157, 1159, 3, 100, 50, 0, 1158, 1156, 1, 0,
    0, 0, 1159, 1162, 1, 0, 0, 0, 1160, 1158, 1, 0, 0, 0, 1160, 1161, 1, 0, 0, 0, 1161, 77,
    1, 0, 0, 0, 1162, 1160, 1, 0, 0, 0, 1163, 1164, 5, 107, 0, 0, 1164, 1179, 5, 48, 0, 0,
    1165, 1166, 5, 3, 0, 0, 1166, 1171, 3, 24, 12, 0, 1167, 1168, 5, 5, 0, 0, 1168, 1170,
    3, 24, 12, 0, 1169, 1167, 1, 0, 0, 0, 1170, 1173, 1, 0, 0, 0, 1171, 1169, 1, 0, 0, 0,
    1171, 1172, 1, 0, 0, 0, 1172, 1174, 1, 0, 0, 0, 1173, 1171, 1, 0, 0, 0, 1174, 1177,
    5, 4, 0, 0, 1175, 1176, 5, 148, 0, 0, 1176, 1178, 3, 64, 32, 0, 1177, 1175, 1, 0, 0,
    0, 1177, 1178, 1, 0, 0, 0, 1178, 1180, 1, 0, 0, 0, 1179, 1165, 1, 0, 0, 0, 1179, 1180,
    1, 0, 0, 0, 1180, 1181, 1, 0, 0, 0, 1181, 1208, 5, 183, 0, 0, 1182, 1209, 5, 184, 0,
    0, 1183, 1184, 5, 141, 0, 0, 1184, 1187, 5, 131, 0, 0, 1185, 1188, 3, 188, 94, 0, 1186,
    1188, 3, 110, 55, 0, 1187, 1185, 1, 0, 0, 0, 1187, 1186, 1, 0, 0, 0, 1188, 1189, 1,
    0, 0, 0, 1189, 1190, 5, 6, 0, 0, 1190, 1201, 3, 64, 32, 0, 1191, 1194, 5, 5, 0, 0, 1192,
    1195, 3, 188, 94, 0, 1193, 1195, 3, 110, 55, 0, 1194, 1192, 1, 0, 0, 0, 1194, 1193,
    1, 0, 0, 0, 1195, 1196, 1, 0, 0, 0, 1196, 1197, 5, 6, 0, 0, 1197, 1198, 3, 64, 32, 0,
    1198, 1200, 1, 0, 0, 0, 1199, 1191, 1, 0, 0, 0, 1200, 1203, 1, 0, 0, 0, 1201, 1199,
    1, 0, 0, 0, 1201, 1202, 1, 0, 0, 0, 1202, 1206, 1, 0, 0, 0, 1203, 1201, 1, 0, 0, 0, 1204,
    1205, 5, 148, 0, 0, 1205, 1207, 3, 64, 32, 0, 1206, 1204, 1, 0, 0, 0, 1206, 1207, 1,
    0, 0, 0, 1207, 1209, 1, 0, 0, 0, 1208, 1182, 1, 0, 0, 0, 1208, 1183, 1, 0, 0, 0, 1209,
    79, 1, 0, 0, 0, 1210, 1214, 5, 112, 0, 0, 1211, 1212, 3, 182, 91, 0, 1212, 1213, 5,
    2, 0, 0, 1213, 1215, 1, 0, 0, 0, 1214, 1211, 1, 0, 0, 0, 1214, 1215, 1, 0, 0, 0, 1215,
    1216, 1, 0, 0, 0, 1216, 1223, 3, 202, 101, 0, 1217, 1218, 5, 6, 0, 0, 1218, 1224, 3,
    82, 41, 0, 1219, 1220, 5, 3, 0, 0, 1220, 1221, 3, 82, 41, 0, 1221, 1222, 5, 4, 0, 0,
    1222, 1224, 1, 0, 0, 0, 1223, 1217, 1, 0, 0, 0, 1223, 1219, 1, 0, 0, 0, 1223, 1224,
    1, 0, 0, 0, 1224, 81, 1, 0, 0, 0, 1225, 1229, 3, 34, 17, 0, 1226, 1229, 3, 178, 89, 0,
    1227, 1229, 5, 188, 0, 0, 1228, 1225, 1, 0, 0, 0, 1228, 1226, 1, 0, 0, 0, 1228, 1227,
    1, 0, 0, 0, 1229, 83, 1, 0, 0, 0, 1230, 1241, 5, 119, 0, 0, 1231, 1242, 3, 190, 95, 0,
    1232, 1233, 3, 182, 91, 0, 1233, 1234, 5, 2, 0, 0, 1234, 1236, 1, 0, 0, 0, 1235, 1232,
    1, 0, 0, 0, 1235, 1236, 1, 0, 0, 0, 1236, 1239, 1, 0, 0, 0, 1237, 1240, 3, 184, 92, 0,
    1238, 1240, 3, 194, 97, 0, 1239, 1237, 1, 0, 0, 0, 1239, 1238, 1, 0, 0, 0, 1240, 1242,
    1, 0, 0, 0, 1241, 1231, 1, 0, 0, 0, 1241, 1235, 1, 0, 0, 0, 1241, 1242, 1, 0, 0, 0, 1242,
    85, 1, 0, 0, 0, 1243, 1245, 3, 134, 67, 0, 1244, 1243, 1, 0, 0, 0, 1244, 1245, 1, 0,
    0, 0, 1245, 1246, 1, 0, 0, 0, 1246, 1252, 3, 90, 45, 0, 1247, 1248, 3, 106, 53, 0, 1248,
    1249, 3, 90, 45, 0, 1249, 1251, 1, 0, 0, 0, 1250, 1247, 1, 0, 0, 0, 1251, 1254, 1, 0,
    0, 0, 1252, 1250, 1, 0, 0, 0, 1252, 1253, 1, 0, 0, 0, 1253, 1256, 1, 0, 0, 0, 1254, 1252,
    1, 0, 0, 0, 1255, 1257, 3, 136, 68, 0, 1256, 1255, 1, 0, 0, 0, 1256, 1257, 1, 0, 0, 0,
    1257, 1259, 1, 0, 0, 0, 1258, 1260, 3, 138, 69, 0, 1259, 1258, 1, 0, 0, 0, 1259, 1260,
    1, 0, 0, 0, 1260, 87, 1, 0, 0, 0, 1261, 1269, 3, 98, 49, 0, 1262, 1263, 3, 102, 51, 0,
    1263, 1265, 3, 98, 49, 0, 1264, 1266, 3, 104, 52, 0, 1265, 1264, 1, 0, 0, 0, 1265,
    1266, 1, 0, 0, 0, 1266, 1268, 1, 0, 0, 0, 1267, 1262, 1, 0, 0, 0, 1268, 1271, 1, 0, 0,
    0, 1269, 1267, 1, 0, 0, 0, 1269, 1270, 1, 0, 0, 0, 1270, 89, 1, 0, 0, 0, 1271, 1269,
    1, 0, 0, 0, 1272, 1274, 5, 130, 0, 0, 1273, 1275, 7, 16, 0, 0, 1274, 1273, 1, 0, 0, 0,
    1274, 1275, 1, 0, 0, 0, 1275, 1276, 1, 0, 0, 0, 1276, 1281, 3, 100, 50, 0, 1277, 1278,
    5, 5, 0, 0, 1278, 1280, 3, 100, 50, 0, 1279, 1277, 1, 0, 0, 0, 1280, 1283, 1, 0, 0, 0,
    1281, 1279, 1, 0, 0, 0, 1281, 1282, 1, 0, 0, 0, 1282, 1296, 1, 0, 0, 0, 1283, 1281,
    1, 0, 0, 0, 1284, 1294, 5, 75, 0, 0, 1285, 1290, 3, 98, 49, 0, 1286, 1287, 5, 5, 0, 0,
    1287, 1289, 3, 98, 49, 0, 1288, 1286, 1, 0, 0, 0, 1289, 1292, 1, 0, 0, 0, 1290, 1288,
    1, 0, 0, 0, 1290, 1291, 1, 0, 0, 0, 1291, 1295, 1, 0, 0, 0, 1292, 1290, 1, 0, 0, 0, 1293,
    1295, 3, 88, 44, 0, 1294, 1285, 1, 0, 0, 0, 1294, 1293, 1, 0, 0, 0, 1295, 1297, 1, 0,
    0, 0, 1296, 1284, 1, 0, 0, 0, 1296, 1297, 1, 0, 0, 0, 1297, 1300, 1, 0, 0, 0, 1298, 1299,
    5, 148, 0, 0, 1299, 1301, 3, 64, 32, 0, 1300, 1298, 1, 0, 0, 0, 1300, 1301, 1, 0, 0,
    0, 1301, 1316, 1, 0, 0, 0, 1302, 1303, 5, 78, 0, 0, 1303, 1304, 5, 40, 0, 0, 1304, 1309,
    3, 64, 32, 0, 1305, 1306, 5, 5, 0, 0, 1306, 1308, 3, 64, 32, 0, 1307, 1305, 1, 0, 0,
    0, 1308, 1311, 1, 0, 0, 0, 1309, 1307, 1, 0, 0, 0, 1309, 1310, 1, 0, 0, 0, 1310, 1314,
    1, 0, 0, 0, 1311, 1309, 1, 0, 0, 0, 1312, 1313, 5, 79, 0, 0, 1313, 1315, 3, 64, 32, 0,
    1314, 1312, 1, 0, 0, 0, 1314, 1315, 1, 0, 0, 0, 1315, 1317, 1, 0, 0, 0, 1316, 1302,
    1, 0, 0, 0, 1316, 1317, 1, 0, 0, 0, 1317, 1332, 1, 0, 0, 0, 1318, 1319, 5, 174, 0, 0,
    1319, 1320, 3, 210, 105, 0, 1320, 1321, 5, 33, 0, 0, 1321, 1329, 3, 120, 60, 0, 1322,
    1323, 5, 5, 0, 0, 1323, 1324, 3, 210, 105, 0, 1324, 1325, 5, 33, 0, 0, 1325, 1326,
    3, 120, 60, 0, 1326, 1328, 1, 0, 0, 0, 1327, 1322, 1, 0, 0, 0, 1328, 1331, 1, 0, 0, 0,
    1329, 1327, 1, 0, 0, 0, 1329, 1330, 1, 0, 0, 0, 1330, 1333, 1, 0, 0, 0, 1331, 1329,
    1, 0, 0, 0, 1332, 1318, 1, 0, 0, 0, 1332, 1333, 1, 0, 0, 0, 1333, 1336, 1, 0, 0, 0, 1334,
    1336, 3, 72, 36, 0, 1335, 1272, 1, 0, 0, 0, 1335, 1334, 1, 0, 0, 0, 1336, 91, 1, 0, 0,
    0, 1337, 1338, 3, 86, 43, 0, 1338, 93, 1, 0, 0, 0, 1339, 1341, 3, 134, 67, 0, 1340,
    1339, 1, 0, 0, 0, 1340, 1341, 1, 0, 0, 0, 1341, 1342, 1, 0, 0, 0, 1342, 1344, 3, 90,
    45, 0, 1343, 1345, 3, 136, 68, 0, 1344, 1343, 1, 0, 0, 0, 1344, 1345, 1, 0, 0, 0, 1345,
    1347, 1, 0, 0, 0, 1346, 1348, 3, 138, 69, 0, 1347, 1346, 1, 0, 0, 0, 1347, 1348, 1,
    0, 0, 0, 1348, 95, 1, 0, 0, 0, 1349, 1351, 3, 134, 67, 0, 1350, 1349, 1, 0, 0, 0, 1350,
    1351, 1, 0, 0, 0, 1351, 1352, 1, 0, 0, 0, 1352, 1362, 3, 90, 45, 0, 1353, 1355, 5, 139,
    0, 0, 1354, 1356, 5, 29, 0, 0, 1355, 1354, 1, 0, 0, 0, 1355, 1356, 1, 0, 0, 0, 1356,
    1360, 1, 0, 0, 0, 1357, 1360, 5, 90, 0, 0, 1358, 1360, 5, 68, 0, 0, 1359, 1353, 1, 0,
    0, 0, 1359, 1357, 1, 0, 0, 0, 1359, 1358, 1, 0, 0, 0, 1360, 1361, 1, 0, 0, 0, 1361, 1363,
    3, 90, 45, 0, 1362, 1359, 1, 0, 0, 0, 1363, 1364, 1, 0, 0, 0, 1364, 1362, 1, 0, 0, 0,
    1364, 1365, 1, 0, 0, 0, 1365, 1367, 1, 0, 0, 0, 1366, 1368, 3, 136, 68, 0, 1367, 1366,
    1, 0, 0, 0, 1367, 1368, 1, 0, 0, 0, 1368, 1370, 1, 0, 0, 0, 1369, 1371, 3, 138, 69, 0,
    1370, 1369, 1, 0, 0, 0, 1370, 1371, 1, 0, 0, 0, 1371, 97, 1, 0, 0, 0, 1372, 1373, 3,
    182, 91, 0, 1373, 1374, 5, 2, 0, 0, 1374, 1376, 1, 0, 0, 0, 1375, 1372, 1, 0, 0, 0, 1375,
    1376, 1, 0, 0, 0, 1376, 1377, 1, 0, 0, 0, 1377, 1382, 3, 184, 92, 0, 1378, 1380, 5,
    33, 0, 0, 1379, 1378, 1, 0, 0, 0, 1379, 1380, 1, 0, 0, 0, 1380, 1381, 1, 0, 0, 0, 1381,
    1383, 3, 206, 103, 0, 1382, 1379, 1, 0, 0, 0, 1382, 1383, 1, 0, 0, 0, 1383, 1389, 1,
    0, 0, 0, 1384, 1385, 5, 85, 0, 0, 1385, 1386, 5, 40, 0, 0, 1386, 1390, 3, 194, 97, 0,
    1387, 1388, 5, 102, 0, 0, 1388, 1390, 5, 85, 0, 0, 1389, 1384, 1, 0, 0, 0, 1389, 1387,
    1, 0, 0, 0, 1389, 1390, 1, 0, 0, 0, 1390, 1437, 1, 0, 0, 0, 1391, 1392, 3, 182, 91, 0,
    1392, 1393, 5, 2, 0, 0, 1393, 1395, 1, 0, 0, 0, 1394, 1391, 1, 0, 0, 0, 1394, 1395,
    1, 0, 0, 0, 1395, 1396, 1, 0, 0, 0, 1396, 1397, 3, 222, 111, 0, 1397, 1398, 5, 3, 0,
    0, 1398, 1403, 3, 64, 32, 0, 1399, 1400, 5, 5, 0, 0, 1400, 1402, 3, 64, 32, 0, 1401,
    1399, 1, 0, 0, 0, 1402, 1405, 1, 0, 0, 0, 1403, 1401, 1, 0, 0, 0, 1403, 1404, 1, 0, 0,
    0, 1404, 1406, 1, 0, 0, 0, 1405, 1403, 1, 0, 0, 0, 1406, 1411, 5, 4, 0, 0, 1407, 1409,
    5, 33, 0, 0, 1408, 1407, 1, 0, 0, 0, 1408, 1409, 1, 0, 0, 0, 1409, 1410, 1, 0, 0, 0, 1410,
    1412, 3, 206, 103, 0, 1411, 1408, 1, 0, 0, 0, 1411, 1412, 1, 0, 0, 0, 1412, 1437, 1,
    0, 0, 0, 1413, 1423, 5, 3, 0, 0, 1414, 1419, 3, 98, 49, 0, 1415, 1416, 5, 5, 0, 0, 1416,
    1418, 3, 98, 49, 0, 1417, 1415, 1, 0, 0, 0, 1418, 1421, 1, 0, 0, 0, 1419, 1417, 1, 0,
    0, 0, 1419, 1420, 1, 0, 0, 0, 1420, 1424, 1, 0, 0, 0, 1421, 1419, 1, 0, 0, 0, 1422, 1424,
    3, 88, 44, 0, 1423, 1414, 1, 0, 0, 0, 1423, 1422, 1, 0, 0, 0, 1424, 1425, 1, 0, 0, 0,
    1425, 1426, 5, 4, 0, 0, 1426, 1437, 1, 0, 0, 0, 1427, 1428, 5, 3, 0, 0, 1428, 1429,
    3, 86, 43, 0, 1429, 1434, 5, 4, 0, 0, 1430, 1432, 5, 33, 0, 0, 1431, 1430, 1, 0, 0, 0,
    1431, 1432, 1, 0, 0, 0, 1432, 1433, 1, 0, 0, 0, 1433, 1435, 3, 206, 103, 0, 1434, 1431,
    1, 0, 0, 0, 1434, 1435, 1, 0, 0, 0, 1435, 1437, 1, 0, 0, 0, 1436, 1375, 1, 0, 0, 0, 1436,
    1394, 1, 0, 0, 0, 1436, 1413, 1, 0, 0, 0, 1436, 1427, 1, 0, 0, 0, 1437, 99, 1, 0, 0, 0,
    1438, 1451, 5, 7, 0, 0, 1439, 1440, 3, 184, 92, 0, 1440, 1441, 5, 2, 0, 0, 1441, 1442,
    5, 7, 0, 0, 1442, 1451, 1, 0, 0, 0, 1443, 1448, 3, 64, 32, 0, 1444, 1446, 5, 33, 0, 0,
    1445, 1444, 1, 0, 0, 0, 1445, 1446, 1, 0, 0, 0, 1446, 1447, 1, 0, 0, 0, 1447, 1449,
    3, 174, 87, 0, 1448, 1445, 1, 0, 0, 0, 1448, 1449, 1, 0, 0, 0, 1449, 1451, 1, 0, 0, 0,
    1450, 1438, 1, 0, 0, 0, 1450, 1439, 1, 0, 0, 0, 1450, 1443, 1, 0, 0, 0, 1451, 101, 1,
    0, 0, 0, 1452, 1466, 5, 5, 0, 0, 1453, 1455, 5, 100, 0, 0, 1454, 1453, 1, 0, 0, 0, 1454,
    1455, 1, 0, 0, 0, 1455, 1462, 1, 0, 0, 0, 1456, 1458, 7, 17, 0, 0, 1457, 1459, 5, 110,
    0, 0, 1458, 1457, 1, 0, 0, 0, 1458, 1459, 1, 0, 0, 0, 1459, 1463, 1, 0, 0, 0, 1460, 1463,
    5, 87, 0, 0, 1461, 1463, 5, 51, 0, 0, 1462, 1456, 1, 0, 0, 0, 1462, 1460, 1, 0, 0, 0,
    1462, 1461, 1, 0, 0, 0, 1462, 1463, 1, 0, 0, 0, 1463, 1464, 1, 0, 0, 0, 1464, 1466,
    5, 94, 0, 0, 1465, 1452, 1, 0, 0, 0, 1465, 1454, 1, 0, 0, 0, 1466, 103, 1, 0, 0, 0, 1467,
    1468, 5, 107, 0, 0, 1468, 1482, 3, 64, 32, 0, 1469, 1470, 5, 142, 0, 0, 1470, 1471,
    5, 3, 0, 0, 1471, 1476, 3, 188, 94, 0, 1472, 1473, 5, 5, 0, 0, 1473, 1475, 3, 188, 94,
    0, 1474, 1472, 1, 0, 0, 0, 1475, 1478, 1, 0, 0, 0, 1476, 1474, 1, 0, 0, 0, 1476, 1477,
    1, 0, 0, 0, 1477, 1479, 1, 0, 0, 0, 1478, 1476, 1, 0, 0, 0, 1479, 1480, 5, 4, 0, 0, 1480,
    1482, 1, 0, 0, 0, 1481, 1467, 1, 0, 0, 0, 1481, 1469, 1, 0, 0, 0, 1482, 105, 1, 0, 0,
    0, 1483, 1485, 5, 139, 0, 0, 1484, 1486, 5, 29, 0, 0, 1485, 1484, 1, 0, 0, 0, 1485,
    1486, 1, 0, 0, 0, 1486, 1490, 1, 0, 0, 0, 1487, 1490, 5, 90, 0, 0, 1488, 1490, 5, 68,
    0, 0, 1489, 1483, 1, 0, 0, 0, 1489, 1487, 1, 0, 0, 0, 1489, 1488, 1, 0, 0, 0, 1490, 107,
    1, 0, 0, 0, 1491, 1493, 3, 48, 24, 0, 1492, 1491, 1, 0, 0, 0, 1492, 1493, 1, 0, 0, 0,
    1493, 1494, 1, 0, 0, 0, 1494, 1497, 5, 141, 0, 0, 1495, 1496, 5, 108, 0, 0, 1496, 1498,
    7, 8, 0, 0, 1497, 1495, 1, 0, 0, 0, 1497, 1498, 1, 0, 0, 0, 1498, 1499, 1, 0, 0, 0, 1499,
    1500, 3, 114, 57, 0, 1500, 1503, 5, 131, 0, 0, 1501, 1504, 3, 188, 94, 0, 1502, 1504,
    3, 110, 55, 0, 1503, 1501, 1, 0, 0, 0, 1503, 1502, 1, 0, 0, 0, 1504, 1505, 1, 0, 0, 0,
    1505, 1506, 5, 6, 0, 0, 1506, 1517, 3, 64, 32, 0, 1507, 1510, 5, 5, 0, 0, 1508, 1511,
    3, 188, 94, 0, 1509, 1511, 3, 110, 55, 0, 1510, 1508, 1, 0, 0, 0, 1510, 1509, 1, 0,
    0, 0, 1511, 1512, 1, 0, 0, 0, 1512, 1513, 5, 6, 0, 0, 1513, 1514, 3, 64, 32, 0, 1514,
    1516, 1, 0, 0, 0, 1515, 1507, 1, 0, 0, 0, 1516, 1519, 1, 0, 0, 0, 1517, 1515, 1, 0, 0,
    0, 1517, 1518, 1, 0, 0, 0, 1518, 1532, 1, 0, 0, 0, 1519, 1517, 1, 0, 0, 0, 1520, 1530,
    5, 75, 0, 0, 1521, 1526, 3, 98, 49, 0, 1522, 1523, 5, 5, 0, 0, 1523, 1525, 3, 98, 49,
    0, 1524, 1522, 1, 0, 0, 0, 1525, 1528, 1, 0, 0, 0, 1526, 1524, 1, 0, 0, 0, 1526, 1527,
    1, 0, 0, 0, 1527, 1531, 1, 0, 0, 0, 1528, 1526, 1, 0, 0, 0, 1529, 1531, 3, 88, 44, 0,
    1530, 1521, 1, 0, 0, 0, 1530, 1529, 1, 0, 0, 0, 1531, 1533, 1, 0, 0, 0, 1532, 1520,
    1, 0, 0, 0, 1532, 1533, 1, 0, 0, 0, 1533, 1536, 1, 0, 0, 0, 1534, 1535, 5, 148, 0, 0,
    1535, 1537, 3, 64, 32, 0, 1536, 1534, 1, 0, 0, 0, 1536, 1537, 1, 0, 0, 0, 1537, 1539,
    1, 0, 0, 0, 1538, 1540, 3, 76, 38, 0, 1539, 1538, 1, 0, 0, 0, 1539, 1540, 1, 0, 0, 0,
    1540, 109, 1, 0, 0, 0, 1541, 1542, 5, 3, 0, 0, 1542, 1547, 3, 188, 94, 0, 1543, 1544,
    5, 5, 0, 0, 1544, 1546, 3, 188, 94, 0, 1545, 1543, 1, 0, 0, 0, 1546, 1549, 1, 0, 0, 0,
    1547, 1545, 1, 0, 0, 0, 1547, 1548, 1, 0, 0, 0, 1548, 1550, 1, 0, 0, 0, 1549, 1547,
    1, 0, 0, 0, 1550, 1551, 5, 4, 0, 0, 1551, 111, 1, 0, 0, 0, 1552, 1554, 3, 48, 24, 0, 1553,
    1552, 1, 0, 0, 0, 1553, 1554, 1, 0, 0, 0, 1554, 1555, 1, 0, 0, 0, 1555, 1558, 5, 141,
    0, 0, 1556, 1557, 5, 108, 0, 0, 1557, 1559, 7, 8, 0, 0, 1558, 1556, 1, 0, 0, 0, 1558,
    1559, 1, 0, 0, 0, 1559, 1560, 1, 0, 0, 0, 1560, 1561, 3, 114, 57, 0, 1561, 1564, 5,
    131, 0, 0, 1562, 1565, 3, 188, 94, 0, 1563, 1565, 3, 110, 55, 0, 1564, 1562, 1, 0,
    0, 0, 1564, 1563, 1, 0, 0, 0, 1565, 1566, 1, 0, 0, 0, 1566, 1567, 5, 6, 0, 0, 1567, 1578,
    3, 64, 32, 0, 1568, 1571, 5, 5, 0, 0, 1569, 1572, 3, 188, 94, 0, 1570, 1572, 3, 110,
    55, 0, 1571, 1569, 1, 0, 0, 0, 1571, 1570, 1, 0, 0, 0, 1572, 1573, 1, 0, 0, 0, 1573,
    1574, 5, 6, 0, 0, 1574, 1575, 3, 64, 32, 0, 1575, 1577, 1, 0, 0, 0, 1576, 1568, 1, 0,
    0, 0, 1577, 1580, 1, 0, 0, 0, 1578, 1576, 1, 0, 0, 0, 1578, 1579, 1, 0, 0, 0, 1579, 1583,
    1, 0, 0, 0, 1580, 1578, 1, 0, 0, 0, 1581, 1582, 5, 148, 0, 0, 1582, 1584, 3, 64, 32,
    0, 1583, 1581, 1, 0, 0, 0, 1583, 1584, 1, 0, 0, 0, 1584, 1586, 1, 0, 0, 0, 1585, 1587,
    3, 76, 38, 0, 1586, 1585, 1, 0, 0, 0, 1586, 1587, 1, 0, 0, 0, 1587, 1592, 1, 0, 0, 0,
    1588, 1590, 3, 136, 68, 0, 1589, 1588, 1, 0, 0, 0, 1589, 1590, 1, 0, 0, 0, 1590, 1591,
    1, 0, 0, 0, 1591, 1593, 3, 138, 69, 0, 1592, 1589, 1, 0, 0, 0, 1592, 1593, 1, 0, 0, 0,
    1593, 113, 1, 0, 0, 0, 1594, 1595, 3, 182, 91, 0, 1595, 1596, 5, 2, 0, 0, 1596, 1598,
    1, 0, 0, 0, 1597, 1594, 1, 0, 0, 0, 1597, 1598, 1, 0, 0, 0, 1598, 1599, 1, 0, 0, 0, 1599,
    1602, 3, 184, 92, 0, 1600, 1601, 5, 33, 0, 0, 1601, 1603, 3, 212, 106, 0, 1602, 1600,
    1, 0, 0, 0, 1602, 1603, 1, 0, 0, 0, 1603, 1609, 1, 0, 0, 0, 1604, 1605, 5, 85, 0, 0, 1605,
    1606, 5, 40, 0, 0, 1606, 1610, 3, 194, 97, 0, 1607, 1608, 5, 102, 0, 0, 1608, 1610,
    5, 85, 0, 0, 1609, 1604, 1, 0, 0, 0, 1609, 1607, 1, 0, 0, 0, 1609, 1610, 1, 0, 0, 0, 1610,
    115, 1, 0, 0, 0, 1611, 1613, 5, 143, 0, 0, 1612, 1614, 3, 182, 91, 0, 1613, 1612, 1,
    0, 0, 0, 1613, 1614, 1, 0, 0, 0, 1614, 1617, 1, 0, 0, 0, 1615, 1616, 5, 91, 0, 0, 1616,
    1618, 3, 214, 107, 0, 1617, 1615, 1, 0, 0, 0, 1617, 1618, 1, 0, 0, 0, 1618, 117, 1,
    0, 0, 0, 1619, 1620, 5, 178, 0, 0, 1620, 1621, 5, 3, 0, 0, 1621, 1622, 5, 148, 0, 0,
    1622, 1623, 3, 64, 32, 0, 1623, 1624, 5, 4, 0, 0, 1624, 119, 1, 0, 0, 0, 1625, 1627,
    5, 3, 0, 0, 1626, 1628, 3, 216, 108, 0, 1627, 1626, 1, 0, 0, 0, 1627, 1628, 1, 0, 0,
    0, 1628, 1639, 1, 0, 0, 0, 1629, 1630, 5, 153, 0, 0, 1630, 1631, 5, 40, 0, 0, 1631,
    1636, 3, 64, 32, 0, 1632, 1633, 5, 5, 0, 0, 1633, 1635, 3, 64, 32, 0, 1634, 1632, 1,
    0, 0, 0, 1635, 1638, 1, 0, 0, 0, 1636, 1634, 1, 0, 0, 0, 1636, 1637, 1, 0, 0, 0, 1637,
    1640, 1, 0, 0, 0, 1638, 1636, 1, 0, 0, 0, 1639, 1629, 1, 0, 0, 0, 1639, 1640, 1, 0, 0,
    0, 1640, 1641, 1, 0, 0, 0, 1641, 1642, 5, 109, 0, 0, 1642, 1643, 5, 40, 0, 0, 1643,
    1648, 3, 140, 70, 0, 1644, 1645, 5, 5, 0, 0, 1645, 1647, 3, 140, 70, 0, 1646, 1644,
    1, 0, 0, 0, 1647, 1650, 1, 0, 0, 0, 1648, 1646, 1, 0, 0, 0, 1648, 1649, 1, 0, 0, 0, 1649,
    1652, 1, 0, 0, 0, 1650, 1648, 1, 0, 0, 0, 1651, 1653, 3, 124, 62, 0, 1652, 1651, 1,
    0, 0, 0, 1652, 1653, 1, 0, 0, 0, 1653, 1654, 1, 0, 0, 0, 1654, 1655, 5, 4, 0, 0, 1655,
    121, 1, 0, 0, 0, 1656, 1690, 5, 152, 0, 0, 1657, 1691, 3, 210, 105, 0, 1658, 1660,
    5, 3, 0, 0, 1659, 1661, 3, 216, 108, 0, 1660, 1659, 1, 0, 0, 0, 1660, 1661, 1, 0, 0,
    0, 1661, 1672, 1, 0, 0, 0, 1662, 1663, 5, 153, 0, 0, 1663, 1664, 5, 40, 0, 0, 1664,
    1669, 3, 64, 32, 0, 1665, 1666, 5, 5, 0, 0, 1666, 1668, 3, 64, 32, 0, 1667, 1665, 1,
    0, 0, 0, 1668, 1671, 1, 0, 0, 0, 1669, 1667, 1, 0, 0, 0, 1669, 1670, 1, 0, 0, 0, 1670,
    1673, 1, 0, 0, 0, 1671, 1669, 1, 0, 0, 0, 1672, 1662, 1, 0, 0, 0, 1672, 1673, 1, 0, 0,
    0, 1673, 1684, 1, 0, 0, 0, 1674, 1675, 5, 109, 0, 0, 1675, 1676, 5, 40, 0, 0, 1676,
    1681, 3, 140, 70, 0, 1677, 1678, 5, 5, 0, 0, 1678, 1680, 3, 140, 70, 0, 1679, 1677,
    1, 0, 0, 0, 1680, 1683, 1, 0, 0, 0, 1681, 1679, 1, 0, 0, 0, 1681, 1682, 1, 0, 0, 0, 1682,
    1685, 1, 0, 0, 0, 1683, 1681, 1, 0, 0, 0, 1684, 1674, 1, 0, 0, 0, 1684, 1685, 1, 0, 0,
    0, 1685, 1687, 1, 0, 0, 0, 1686, 1688, 3, 124, 62, 0, 1687, 1686, 1, 0, 0, 0, 1687,
    1688, 1, 0, 0, 0, 1688, 1689, 1, 0, 0, 0, 1689, 1691, 5, 4, 0, 0, 1690, 1657, 1, 0, 0,
    0, 1690, 1658, 1, 0, 0, 0, 1691, 123, 1, 0, 0, 0, 1692, 1702, 3, 126, 63, 0, 1693, 1700,
    5, 180, 0, 0, 1694, 1695, 5, 101, 0, 0, 1695, 1701, 5, 182, 0, 0, 1696, 1697, 5, 157,
    0, 0, 1697, 1701, 5, 127, 0, 0, 1698, 1701, 5, 78, 0, 0, 1699, 1701, 5, 181, 0, 0, 1700,
    1694, 1, 0, 0, 0, 1700, 1696, 1, 0, 0, 0, 1700, 1698, 1, 0, 0, 0, 1700, 1699, 1, 0, 0,
    0, 1701, 1703, 1, 0, 0, 0, 1702, 1693, 1, 0, 0, 0, 1702, 1703, 1, 0, 0, 0, 1703, 125,
    1, 0, 0, 0, 1704, 1711, 7, 18, 0, 0, 1705, 1712, 3, 148, 74, 0, 1706, 1707, 5, 39, 0,
    0, 1707, 1708, 3, 144, 72, 0, 1708, 1709, 5, 32, 0, 0, 1709, 1710, 3, 146, 73, 0, 1710,
    1712, 1, 0, 0, 0, 1711, 1705, 1, 0, 0, 0, 1711, 1706, 1, 0, 0, 0, 1712, 127, 1, 0, 0,
    0, 1713, 1714, 3, 218, 109, 0, 1714, 1724, 5, 3, 0, 0, 1715, 1720, 3, 64, 32, 0, 1716,
    1717, 5, 5, 0, 0, 1717, 1719, 3, 64, 32, 0, 1718, 1716, 1, 0, 0, 0, 1719, 1722, 1, 0,
    0, 0, 1720, 1718, 1, 0, 0, 0, 1720, 1721, 1, 0, 0, 0, 1721, 1725, 1, 0, 0, 0, 1722, 1720,
    1, 0, 0, 0, 1723, 1725, 5, 7, 0, 0, 1724, 1715, 1, 0, 0, 0, 1724, 1723, 1, 0, 0, 0, 1725,
    1726, 1, 0, 0, 0, 1726, 1727, 5, 4, 0, 0, 1727, 129, 1, 0, 0, 0, 1728, 1729, 3, 220,
    110, 0, 1729, 1742, 5, 3, 0, 0, 1730, 1732, 5, 62, 0, 0, 1731, 1730, 1, 0, 0, 0, 1731,
    1732, 1, 0, 0, 0, 1732, 1733, 1, 0, 0, 0, 1733, 1738, 3, 64, 32, 0, 1734, 1735, 5, 5,
    0, 0, 1735, 1737, 3, 64, 32, 0, 1736, 1734, 1, 0, 0, 0, 1737, 1740, 1, 0, 0, 0, 1738,
    1736, 1, 0, 0, 0, 1738, 1739, 1, 0, 0, 0, 1739, 1743, 1, 0, 0, 0, 1740, 1738, 1, 0, 0,
    0, 1741, 1743, 5, 7, 0, 0, 1742, 1731, 1, 0, 0, 0, 1742, 1741, 1, 0, 0, 0, 1742, 1743,
    1, 0, 0, 0, 1743, 1744, 1, 0, 0, 0, 1744, 1746, 5, 4, 0, 0, 1745, 1747, 3, 118, 59, 0,
    1746, 1745, 1, 0, 0, 0, 1746, 1747, 1, 0, 0, 0, 1747, 131, 1, 0, 0, 0, 1748, 1749, 3,
    150, 75, 0, 1749, 1759, 5, 3, 0, 0, 1750, 1755, 3, 64, 32, 0, 1751, 1752, 5, 5, 0, 0,
    1752, 1754, 3, 64, 32, 0, 1753, 1751, 1, 0, 0, 0, 1754, 1757, 1, 0, 0, 0, 1755, 1753,
    1, 0, 0, 0, 1755, 1756, 1, 0, 0, 0, 1756, 1760, 1, 0, 0, 0, 1757, 1755, 1, 0, 0, 0, 1758,
    1760, 5, 7, 0, 0, 1759, 1750, 1, 0, 0, 0, 1759, 1758, 1, 0, 0, 0, 1759, 1760, 1, 0, 0,
    0, 1760, 1761, 1, 0, 0, 0, 1761, 1763, 5, 4, 0, 0, 1762, 1764, 3, 118, 59, 0, 1763,
    1762, 1, 0, 0, 0, 1763, 1764, 1, 0, 0, 0, 1764, 1765, 1, 0, 0, 0, 1765, 1768, 5, 152,
    0, 0, 1766, 1769, 3, 120, 60, 0, 1767, 1769, 3, 210, 105, 0, 1768, 1766, 1, 0, 0, 0,
    1768, 1767, 1, 0, 0, 0, 1769, 133, 1, 0, 0, 0, 1770, 1772, 5, 149, 0, 0, 1771, 1773,
    5, 116, 0, 0, 1772, 1771, 1, 0, 0, 0, 1772, 1773, 1, 0, 0, 0, 1773, 1774, 1, 0, 0, 0,
    1774, 1779, 3, 54, 27, 0, 1775, 1776, 5, 5, 0, 0, 1776, 1778, 3, 54, 27, 0, 1777, 1775,
    1, 0, 0, 0, 1778, 1781, 1, 0, 0, 0, 1779, 1777, 1, 0, 0, 0, 1779, 1780, 1, 0, 0, 0, 1780,
    135, 1, 0, 0, 0, 1781, 1779, 1, 0, 0, 0, 1782, 1783, 5, 109, 0, 0, 1783, 1784, 5, 40,
    0, 0, 1784, 1789, 3, 140, 70, 0, 1785, 1786, 5, 5, 0, 0, 1786, 1788, 3, 140, 70, 0,
    1787, 1785, 1, 0, 0, 0, 1788, 1791, 1, 0, 0, 0, 1789, 1787, 1, 0, 0, 0, 1789, 1790,
    1, 0, 0, 0, 1790, 137, 1, 0, 0, 0, 1791, 1789, 1, 0, 0, 0, 1792, 1793, 5, 98, 0, 0, 1793,
    1796, 3, 64, 32, 0, 1794, 1795, 7, 19, 0, 0, 1795, 1797, 3, 64, 32, 0, 1796, 1794,
    1, 0, 0, 0, 1796, 1797, 1, 0, 0, 0, 1797, 139, 1, 0, 0, 0, 1798, 1801, 3, 64, 32, 0, 1799,
    1800, 5, 45, 0, 0, 1800, 1802, 3, 190, 95, 0, 1801, 1799, 1, 0, 0, 0, 1801, 1802, 1,
    0, 0, 0, 1802, 1804, 1, 0, 0, 0, 1803, 1805, 3, 142, 71, 0, 1804, 1803, 1, 0, 0, 0, 1804,
    1805, 1, 0, 0, 0, 1805, 1808, 1, 0, 0, 0, 1806, 1807, 5, 175, 0, 0, 1807, 1809, 7, 20,
    0, 0, 1808, 1806, 1, 0, 0, 0, 1808, 1809, 1, 0, 0, 0, 1809, 141, 1, 0, 0, 0, 1810, 1811,
    7, 21, 0, 0, 1811, 143, 1, 0, 0, 0, 1812, 1813, 3, 64, 32, 0, 1813, 1814, 5, 155, 0,
    0, 1814, 1823, 1, 0, 0, 0, 1815, 1816, 3, 64, 32, 0, 1816, 1817, 5, 158, 0, 0, 1817,
    1823, 1, 0, 0, 0, 1818, 1819, 5, 157, 0, 0, 1819, 1823, 5, 127, 0, 0, 1820, 1821, 5,
    156, 0, 0, 1821, 1823, 5, 155, 0, 0, 1822, 1812, 1, 0, 0, 0, 1822, 1815, 1, 0, 0, 0,
    1822, 1818, 1, 0, 0, 0, 1822, 1820, 1, 0, 0, 0, 1823, 145, 1, 0, 0, 0, 1824, 1825, 3,
    64, 32, 0, 1825, 1826, 5, 155, 0, 0, 1826, 1835, 1, 0, 0, 0, 1827, 1828, 3, 64, 32,
    0, 1828, 1829, 5, 158, 0, 0, 1829, 1835, 1, 0, 0, 0, 1830, 1831, 5, 157, 0, 0, 1831,
    1835, 5, 127, 0, 0, 1832, 1833, 5, 156, 0, 0, 1833, 1835, 5, 158, 0, 0, 1834, 1824,
    1, 0, 0, 0, 1834, 1827, 1, 0, 0, 0, 1834, 1830, 1, 0, 0, 0, 1834, 1832, 1, 0, 0, 0, 1835,
    147, 1, 0, 0, 0, 1836, 1837, 3, 64, 32, 0, 1837, 1838, 5, 155, 0, 0, 1838, 1844, 1,
    0, 0, 0, 1839, 1840, 5, 156, 0, 0, 1840, 1844, 5, 155, 0, 0, 1841, 1842, 5, 157, 0,
    0, 1842, 1844, 5, 127, 0, 0, 1843, 1836, 1, 0, 0, 0, 1843, 1839, 1, 0, 0, 0, 1843, 1841,
    1, 0, 0, 0, 1844, 149, 1, 0, 0, 0, 1845, 1846, 7, 22, 0, 0, 1846, 1847, 5, 3, 0, 0, 1847,
    1848, 3, 64, 32, 0, 1848, 1849, 5, 4, 0, 0, 1849, 1850, 5, 152, 0, 0, 1850, 1852, 5,
    3, 0, 0, 1851, 1853, 3, 156, 78, 0, 1852, 1851, 1, 0, 0, 0, 1852, 1853, 1, 0, 0, 0, 1853,
    1854, 1, 0, 0, 0, 1854, 1856, 3, 160, 80, 0, 1855, 1857, 3, 126, 63, 0, 1856, 1855,
    1, 0, 0, 0, 1856, 1857, 1, 0, 0, 0, 1857, 1858, 1, 0, 0, 0, 1858, 1859, 5, 4, 0, 0, 1859,
    1931, 1, 0, 0, 0, 1860, 1861, 7, 23, 0, 0, 1861, 1862, 5, 3, 0, 0, 1862, 1863, 5, 4,
    0, 0, 1863, 1864, 5, 152, 0, 0, 1864, 1866, 5, 3, 0, 0, 1865, 1867, 3, 156, 78, 0, 1866,
    1865, 1, 0, 0, 0, 1866, 1867, 1, 0, 0, 0, 1867, 1869, 1, 0, 0, 0, 1868, 1870, 3, 158,
    79, 0, 1869, 1868, 1, 0, 0, 0, 1869, 1870, 1, 0, 0, 0, 1870, 1871, 1, 0, 0, 0, 1871,
    1931, 5, 4, 0, 0, 1872, 1873, 7, 24, 0, 0, 1873, 1874, 5, 3, 0, 0, 1874, 1875, 5, 4,
    0, 0, 1875, 1876, 5, 152, 0, 0, 1876, 1878, 5, 3, 0, 0, 1877, 1879, 3, 156, 78, 0, 1878,
    1877, 1, 0, 0, 0, 1878, 1879, 1, 0, 0, 0, 1879, 1880, 1, 0, 0, 0, 1880, 1881, 3, 160,
    80, 0, 1881, 1882, 5, 4, 0, 0, 1882, 1931, 1, 0, 0, 0, 1883, 1884, 7, 25, 0, 0, 1884,
    1885, 5, 3, 0, 0, 1885, 1887, 3, 64, 32, 0, 1886, 1888, 3, 152, 76, 0, 1887, 1886,
    1, 0, 0, 0, 1887, 1888, 1, 0, 0, 0, 1888, 1890, 1, 0, 0, 0, 1889, 1891, 3, 154, 77, 0,
    1890, 1889, 1, 0, 0, 0, 1890, 1891, 1, 0, 0, 0, 1891, 1892, 1, 0, 0, 0, 1892, 1893,
    5, 4, 0, 0, 1893, 1894, 5, 152, 0, 0, 1894, 1896, 5, 3, 0, 0, 1895, 1897, 3, 156, 78,
    0, 1896, 1895, 1, 0, 0, 0, 1896, 1897, 1, 0, 0, 0, 1897, 1898, 1, 0, 0, 0, 1898, 1899,
    3, 160, 80, 0, 1899, 1900, 5, 4, 0, 0, 1900, 1931, 1, 0, 0, 0, 1901, 1902, 5, 164, 0,
    0, 1902, 1903, 5, 3, 0, 0, 1903, 1904, 3, 64, 32, 0, 1904, 1905, 5, 5, 0, 0, 1905, 1906,
    3, 34, 17, 0, 1906, 1907, 5, 4, 0, 0, 1907, 1908, 5, 152, 0, 0, 1908, 1910, 5, 3, 0,
    0, 1909, 1911, 3, 156, 78, 0, 1910, 1909, 1, 0, 0, 0, 1910, 1911, 1, 0, 0, 0, 1911,
    1912, 1, 0, 0, 0, 1912, 1914, 3, 160, 80, 0, 1913, 1915, 3, 126, 63, 0, 1914, 1913,
    1, 0, 0, 0, 1914, 1915, 1, 0, 0, 0, 1915, 1916, 1, 0, 0, 0, 1916, 1917, 5, 4, 0, 0, 1917,
    1931, 1, 0, 0, 0, 1918, 1919, 5, 165, 0, 0, 1919, 1920, 5, 3, 0, 0, 1920, 1921, 3, 64,
    32, 0, 1921, 1922, 5, 4, 0, 0, 1922, 1923, 5, 152, 0, 0, 1923, 1925, 5, 3, 0, 0, 1924,
    1926, 3, 156, 78, 0, 1925, 1924, 1, 0, 0, 0, 1925, 1926, 1, 0, 0, 0, 1926, 1927, 1,
    0, 0, 0, 1927, 1928, 3, 160, 80, 0, 1928, 1929, 5, 4, 0, 0, 1929, 1931, 1, 0, 0, 0, 1930,
    1845, 1, 0, 0, 0, 1930, 1860, 1, 0, 0, 0, 1930, 1872, 1, 0, 0, 0, 1930, 1883, 1, 0, 0,
    0, 1930, 1901, 1, 0, 0, 0, 1930, 1918, 1, 0, 0, 0, 1931, 151, 1, 0, 0, 0, 1932, 1933,
    5, 5, 0, 0, 1933, 1934, 3, 34, 17, 0, 1934, 153, 1, 0, 0, 0, 1935, 1936, 5, 5, 0, 0, 1936,
    1937, 3, 34, 17, 0, 1937, 155, 1, 0, 0, 0, 1938, 1939, 5, 153, 0, 0, 1939, 1941, 5,
    40, 0, 0, 1940, 1942, 3, 64, 32, 0, 1941, 1940, 1, 0, 0, 0, 1942, 1943, 1, 0, 0, 0, 1943,
    1941, 1, 0, 0, 0, 1943, 1944, 1, 0, 0, 0, 1944, 157, 1, 0, 0, 0, 1945, 1946, 5, 109,
    0, 0, 1946, 1948, 5, 40, 0, 0, 1947, 1949, 3, 64, 32, 0, 1948, 1947, 1, 0, 0, 0, 1949,
    1950, 1, 0, 0, 0, 1950, 1948, 1, 0, 0, 0, 1950, 1951, 1, 0, 0, 0, 1951, 159, 1, 0, 0,
    0, 1952, 1953, 5, 109, 0, 0, 1953, 1954, 5, 40, 0, 0, 1954, 1955, 3, 162, 81, 0, 1955,
    161, 1, 0, 0, 0, 1956, 1958, 3, 64, 32, 0, 1957, 1959, 3, 142, 71, 0, 1958, 1957, 1,
    0, 0, 0, 1958, 1959, 1, 0, 0, 0, 1959, 1967, 1, 0, 0, 0, 1960, 1961, 5, 5, 0, 0, 1961,
    1963, 3, 64, 32, 0, 1962, 1964, 3, 142, 71, 0, 1963, 1962, 1, 0, 0, 0, 1963, 1964,
    1, 0, 0, 0, 1964, 1966, 1, 0, 0, 0, 1965, 1960, 1, 0, 0, 0, 1966, 1969, 1, 0, 0, 0, 1967,
    1965, 1, 0, 0, 0, 1967, 1968, 1, 0, 0, 0, 1968, 163, 1, 0, 0, 0, 1969, 1967, 1, 0, 0,
    0, 1970, 1971, 3, 86, 43, 0, 1971, 165, 1, 0, 0, 0, 1972, 1973, 3, 86, 43, 0, 1973,
    167, 1, 0, 0, 0, 1974, 1975, 7, 26, 0, 0, 1975, 169, 1, 0, 0, 0, 1976, 1977, 5, 188,
    0, 0, 1977, 171, 1, 0, 0, 0, 1978, 1981, 3, 64, 32, 0, 1979, 1981, 3, 28, 14, 0, 1980,
    1978, 1, 0, 0, 0, 1980, 1979, 1, 0, 0, 0, 1981, 173, 1, 0, 0, 0, 1982, 1983, 7, 27, 0,
    0, 1983, 175, 1, 0, 0, 0, 1984, 1985, 7, 28, 0, 0, 1985, 177, 1, 0, 0, 0, 1986, 1987,
    3, 224, 112, 0, 1987, 179, 1, 0, 0, 0, 1988, 1989, 3, 224, 112, 0, 1989, 181, 1, 0,
    0, 0, 1990, 1991, 3, 224, 112, 0, 1991, 183, 1, 0, 0, 0, 1992, 1993, 3, 224, 112, 0,
    1993, 185, 1, 0, 0, 0, 1994, 1995, 3, 224, 112, 0, 1995, 187, 1, 0, 0, 0, 1996, 1997,
    3, 224, 112, 0, 1997, 189, 1, 0, 0, 0, 1998, 1999, 3, 224, 112, 0, 1999, 191, 1, 0,
    0, 0, 2000, 2001, 3, 224, 112, 0, 2001, 193, 1, 0, 0, 0, 2002, 2003, 3, 224, 112, 0,
    2003, 195, 1, 0, 0, 0, 2004, 2005, 3, 224, 112, 0, 2005, 197, 1, 0, 0, 0, 2006, 2007,
    3, 224, 112, 0, 2007, 199, 1, 0, 0, 0, 2008, 2009, 3, 224, 112, 0, 2009, 201, 1, 0,
    0, 0, 2010, 2011, 3, 224, 112, 0, 2011, 203, 1, 0, 0, 0, 2012, 2013, 3, 224, 112, 0,
    2013, 205, 1, 0, 0, 0, 2014, 2015, 3, 224, 112, 0, 2015, 207, 1, 0, 0, 0, 2016, 2017,
    3, 224, 112, 0, 2017, 209, 1, 0, 0, 0, 2018, 2019, 3, 224, 112, 0, 2019, 211, 1, 0,
    0, 0, 2020, 2021, 3, 224, 112, 0, 2021, 213, 1, 0, 0, 0, 2022, 2023, 3, 224, 112, 0,
    2023, 215, 1, 0, 0, 0, 2024, 2025, 3, 224, 112, 0, 2025, 217, 1, 0, 0, 0, 2026, 2027,
    3, 224, 112, 0, 2027, 219, 1, 0, 0, 0, 2028, 2029, 3, 224, 112, 0, 2029, 221, 1, 0,
    0, 0, 2030, 2031, 3, 224, 112, 0, 2031, 223, 1, 0, 0, 0, 2032, 2040, 5, 185, 0, 0, 2033,
    2040, 3, 176, 88, 0, 2034, 2040, 5, 188, 0, 0, 2035, 2036, 5, 3, 0, 0, 2036, 2037,
    3, 224, 112, 0, 2037, 2038, 5, 4, 0, 0, 2038, 2040, 1, 0, 0, 0, 2039, 2032, 1, 0, 0,
    0, 2039, 2033, 1, 0, 0, 0, 2039, 2034, 1, 0, 0, 0, 2039, 2035, 1, 0, 0, 0, 2040, 225,
    1, 0, 0, 0, 294, 229, 236, 241, 243, 269, 276, 283, 289, 293, 298, 301, 308, 311,
    315, 323, 327, 329, 333, 337, 341, 344, 351, 357, 363, 368, 379, 385, 389, 393,
    396, 400, 406, 411, 420, 427, 433, 437, 441, 446, 452, 464, 468, 473, 476, 479,
    482, 486, 489, 503, 510, 517, 519, 522, 528, 533, 541, 546, 561, 567, 577, 582,
    592, 596, 598, 602, 607, 609, 617, 623, 628, 635, 646, 649, 651, 658, 662, 669,
    675, 681, 687, 692, 701, 706, 717, 722, 733, 738, 742, 758, 768, 773, 781, 793,
    798, 806, 813, 816, 819, 826, 829, 832, 835, 839, 847, 852, 862, 867, 876, 883,
    887, 891, 894, 902, 915, 918, 926, 935, 939, 944, 971, 980, 992, 997, 1009, 1015,
    1022, 1026, 1036, 1039, 1045, 1051, 1060, 1063, 1067, 1069, 1071, 1080, 1092,
    1103, 1107, 1114, 1120, 1125, 1133, 1138, 1142, 1145, 1149, 1152, 1160, 1171,
    1177, 1179, 1187, 1194, 1201, 1206, 1208, 1214, 1223, 1228, 1235, 1239, 1241,
    1244, 1252, 1256, 1259, 1265, 1269, 1274, 1281, 1290, 1294, 1296, 1300, 1309,
    1314, 1316, 1329, 1332, 1335, 1340, 1344, 1347, 1350, 1355, 1359, 1364, 1367,
    1370, 1375, 1379, 1382, 1389, 1394, 1403, 1408, 1411, 1419, 1423, 1431, 1434,
    1436, 1445, 1448, 1450, 1454, 1458, 1462, 1465, 1476, 1481, 1485, 1489, 1492,
    1497, 1503, 1510, 1517, 1526, 1530, 1532, 1536, 1539, 1547, 1553, 1558, 1564,
    1571, 1578, 1583, 1586, 1589, 1592, 1597, 1602, 1609, 1613, 1617, 1627, 1636,
    1639, 1648, 1652, 1660, 1669, 1672, 1681, 1684, 1687, 1690, 1700, 1702, 1711,
    1720, 1724, 1731, 1738, 1742, 1746, 1755, 1759, 1763, 1768, 1772, 1779, 1789,
    1796, 1801, 1804, 1808, 1822, 1834, 1843, 1852, 1856, 1866, 1869, 1878, 1887,
    1890, 1896, 1910, 1914, 1925, 1930, 1943, 1950, 1958, 1963, 1967, 1980, 2039
];
SQLiteParser.vocabulary = new antlr.Vocabulary(SQLiteParser.literalNames, SQLiteParser.symbolicNames, []);
SQLiteParser.decisionsToDFA = SQLiteParser._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
export { SQLiteParser };
export class ProgramContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() {
        return this.getToken(SQLiteParser.EOF, 0);
    }
    singleStmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(SingleStmtContext);
        }
        return this.getRuleContext(i, SingleStmtContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_program;
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
export class SingleStmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    sql_stmt() {
        return this.getRuleContext(0, Sql_stmtContext);
    }
    SCOL() {
        return this.getToken(SQLiteParser.SCOL, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_singleStmt;
    }
    enterRule(listener) {
        if (listener.enterSingleStmt) {
            listener.enterSingleStmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSingleStmt) {
            listener.exitSingleStmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSingleStmt) {
            return visitor.visitSingleStmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Sql_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    alter_table_stmt() {
        return this.getRuleContext(0, Alter_table_stmtContext);
    }
    analyze_stmt() {
        return this.getRuleContext(0, Analyze_stmtContext);
    }
    attach_stmt() {
        return this.getRuleContext(0, Attach_stmtContext);
    }
    begin_stmt() {
        return this.getRuleContext(0, Begin_stmtContext);
    }
    commit_stmt() {
        return this.getRuleContext(0, Commit_stmtContext);
    }
    create_index_stmt() {
        return this.getRuleContext(0, Create_index_stmtContext);
    }
    create_table_stmt() {
        return this.getRuleContext(0, Create_table_stmtContext);
    }
    create_trigger_stmt() {
        return this.getRuleContext(0, Create_trigger_stmtContext);
    }
    create_view_stmt() {
        return this.getRuleContext(0, Create_view_stmtContext);
    }
    create_virtual_table_stmt() {
        return this.getRuleContext(0, Create_virtual_table_stmtContext);
    }
    delete_stmt() {
        return this.getRuleContext(0, Delete_stmtContext);
    }
    delete_stmt_limited() {
        return this.getRuleContext(0, Delete_stmt_limitedContext);
    }
    detach_stmt() {
        return this.getRuleContext(0, Detach_stmtContext);
    }
    drop_stmt() {
        return this.getRuleContext(0, Drop_stmtContext);
    }
    insert_stmt() {
        return this.getRuleContext(0, Insert_stmtContext);
    }
    reindex_stmt() {
        return this.getRuleContext(0, Reindex_stmtContext);
    }
    release_stmt() {
        return this.getRuleContext(0, Release_stmtContext);
    }
    rollback_stmt() {
        return this.getRuleContext(0, Rollback_stmtContext);
    }
    savepoint_stmt() {
        return this.getRuleContext(0, Savepoint_stmtContext);
    }
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    update_stmt() {
        return this.getRuleContext(0, Update_stmtContext);
    }
    update_stmt_limited() {
        return this.getRuleContext(0, Update_stmt_limitedContext);
    }
    vacuum_stmt() {
        return this.getRuleContext(0, Vacuum_stmtContext);
    }
    pragma_stmt() {
        return this.getRuleContext(0, Pragma_stmtContext);
    }
    EXPLAIN_() {
        return this.getToken(SQLiteParser.EXPLAIN_, 0);
    }
    QUERY_() {
        return this.getToken(SQLiteParser.QUERY_, 0);
    }
    PLAN_() {
        return this.getToken(SQLiteParser.PLAN_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_sql_stmt;
    }
    enterRule(listener) {
        if (listener.enterSql_stmt) {
            listener.enterSql_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSql_stmt) {
            listener.exitSql_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSql_stmt) {
            return visitor.visitSql_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Alter_table_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ALTER_() {
        return this.getToken(SQLiteParser.ALTER_, 0);
    }
    TABLE_() {
        return this.getToken(SQLiteParser.TABLE_, 0);
    }
    table_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_nameContext);
        }
        return this.getRuleContext(i, Table_nameContext);
    }
    RENAME_() {
        return this.getToken(SQLiteParser.RENAME_, 0);
    }
    ADD_() {
        return this.getToken(SQLiteParser.ADD_, 0);
    }
    column_def() {
        return this.getRuleContext(0, Column_defContext);
    }
    DROP_() {
        return this.getToken(SQLiteParser.DROP_, 0);
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        return this.getRuleContext(i, Column_nameContext);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    TO_() {
        return this.getToken(SQLiteParser.TO_, 0);
    }
    COLUMN_() {
        return this.getToken(SQLiteParser.COLUMN_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_alter_table_stmt;
    }
    enterRule(listener) {
        if (listener.enterAlter_table_stmt) {
            listener.enterAlter_table_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlter_table_stmt) {
            listener.exitAlter_table_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlter_table_stmt) {
            return visitor.visitAlter_table_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Analyze_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ANALYZE_() {
        return this.getToken(SQLiteParser.ANALYZE_, 0);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    table_or_index_name() {
        return this.getRuleContext(0, Table_or_index_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_analyze_stmt;
    }
    enterRule(listener) {
        if (listener.enterAnalyze_stmt) {
            listener.enterAnalyze_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAnalyze_stmt) {
            listener.exitAnalyze_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAnalyze_stmt) {
            return visitor.visitAnalyze_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Attach_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ATTACH_() {
        return this.getToken(SQLiteParser.ATTACH_, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    AS_() {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DATABASE_() {
        return this.getToken(SQLiteParser.DATABASE_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_attach_stmt;
    }
    enterRule(listener) {
        if (listener.enterAttach_stmt) {
            listener.enterAttach_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAttach_stmt) {
            listener.exitAttach_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAttach_stmt) {
            return visitor.visitAttach_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Begin_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BEGIN_() {
        return this.getToken(SQLiteParser.BEGIN_, 0);
    }
    TRANSACTION_() {
        return this.getToken(SQLiteParser.TRANSACTION_, 0);
    }
    DEFERRED_() {
        return this.getToken(SQLiteParser.DEFERRED_, 0);
    }
    IMMEDIATE_() {
        return this.getToken(SQLiteParser.IMMEDIATE_, 0);
    }
    EXCLUSIVE_() {
        return this.getToken(SQLiteParser.EXCLUSIVE_, 0);
    }
    transaction_name() {
        return this.getRuleContext(0, Transaction_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_begin_stmt;
    }
    enterRule(listener) {
        if (listener.enterBegin_stmt) {
            listener.enterBegin_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBegin_stmt) {
            listener.exitBegin_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBegin_stmt) {
            return visitor.visitBegin_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Commit_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COMMIT_() {
        return this.getToken(SQLiteParser.COMMIT_, 0);
    }
    END_() {
        return this.getToken(SQLiteParser.END_, 0);
    }
    TRANSACTION_() {
        return this.getToken(SQLiteParser.TRANSACTION_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_commit_stmt;
    }
    enterRule(listener) {
        if (listener.enterCommit_stmt) {
            listener.enterCommit_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCommit_stmt) {
            listener.exitCommit_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCommit_stmt) {
            return visitor.visitCommit_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Rollback_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ROLLBACK_() {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    TRANSACTION_() {
        return this.getToken(SQLiteParser.TRANSACTION_, 0);
    }
    TO_() {
        return this.getToken(SQLiteParser.TO_, 0);
    }
    savepoint_name() {
        return this.getRuleContext(0, Savepoint_nameContext);
    }
    SAVEPOINT_() {
        return this.getToken(SQLiteParser.SAVEPOINT_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_rollback_stmt;
    }
    enterRule(listener) {
        if (listener.enterRollback_stmt) {
            listener.enterRollback_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRollback_stmt) {
            listener.exitRollback_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRollback_stmt) {
            return visitor.visitRollback_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Savepoint_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SAVEPOINT_() {
        return this.getToken(SQLiteParser.SAVEPOINT_, 0);
    }
    savepoint_name() {
        return this.getRuleContext(0, Savepoint_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_savepoint_stmt;
    }
    enterRule(listener) {
        if (listener.enterSavepoint_stmt) {
            listener.enterSavepoint_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSavepoint_stmt) {
            listener.exitSavepoint_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSavepoint_stmt) {
            return visitor.visitSavepoint_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Release_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    RELEASE_() {
        return this.getToken(SQLiteParser.RELEASE_, 0);
    }
    savepoint_name() {
        return this.getRuleContext(0, Savepoint_nameContext);
    }
    SAVEPOINT_() {
        return this.getToken(SQLiteParser.SAVEPOINT_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_release_stmt;
    }
    enterRule(listener) {
        if (listener.enterRelease_stmt) {
            listener.enterRelease_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelease_stmt) {
            listener.exitRelease_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRelease_stmt) {
            return visitor.visitRelease_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Create_index_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CREATE_() {
        return this.getToken(SQLiteParser.CREATE_, 0);
    }
    INDEX_() {
        return this.getToken(SQLiteParser.INDEX_, 0);
    }
    index_name() {
        return this.getRuleContext(0, Index_nameContext);
    }
    ON_() {
        return this.getToken(SQLiteParser.ON_, 0);
    }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    indexed_column(i) {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }
        return this.getRuleContext(i, Indexed_columnContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    UNIQUE_() {
        return this.getToken(SQLiteParser.UNIQUE_, 0);
    }
    IF_() {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    NOT_() {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    EXISTS_() {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    WHERE_() {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_create_index_stmt;
    }
    enterRule(listener) {
        if (listener.enterCreate_index_stmt) {
            listener.enterCreate_index_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreate_index_stmt) {
            listener.exitCreate_index_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreate_index_stmt) {
            return visitor.visitCreate_index_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Indexed_columnContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    column_name() {
        return this.getRuleContext(0, Column_nameContext);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    COLLATE_() {
        return this.getToken(SQLiteParser.COLLATE_, 0);
    }
    collation_name() {
        return this.getRuleContext(0, Collation_nameContext);
    }
    asc_desc() {
        return this.getRuleContext(0, Asc_descContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_indexed_column;
    }
    enterRule(listener) {
        if (listener.enterIndexed_column) {
            listener.enterIndexed_column(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIndexed_column) {
            listener.exitIndexed_column(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIndexed_column) {
            return visitor.visitIndexed_column(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Create_table_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CREATE_() {
        return this.getToken(SQLiteParser.CREATE_, 0);
    }
    TABLE_() {
        return this.getToken(SQLiteParser.TABLE_, 0);
    }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    column_def(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_defContext);
        }
        return this.getRuleContext(i, Column_defContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    AS_() {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    IF_() {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    NOT_() {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    EXISTS_() {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    TEMP_() {
        return this.getToken(SQLiteParser.TEMP_, 0);
    }
    TEMPORARY_() {
        return this.getToken(SQLiteParser.TEMPORARY_, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    table_constraint(i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_constraintContext);
        }
        return this.getRuleContext(i, Table_constraintContext);
    }
    WITHOUT_() {
        return this.getToken(SQLiteParser.WITHOUT_, 0);
    }
    IDENTIFIER() {
        return this.getToken(SQLiteParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_create_table_stmt;
    }
    enterRule(listener) {
        if (listener.enterCreate_table_stmt) {
            listener.enterCreate_table_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreate_table_stmt) {
            listener.exitCreate_table_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreate_table_stmt) {
            return visitor.visitCreate_table_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Column_defContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    column_name() {
        return this.getRuleContext(0, Column_nameContext);
    }
    type_name() {
        return this.getRuleContext(0, Type_nameContext);
    }
    column_constraint(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_constraintContext);
        }
        return this.getRuleContext(i, Column_constraintContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_column_def;
    }
    enterRule(listener) {
        if (listener.enterColumn_def) {
            listener.enterColumn_def(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumn_def) {
            listener.exitColumn_def(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumn_def) {
            return visitor.visitColumn_def(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Type_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    name(i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        return this.getRuleContext(i, NameContext);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    signed_number(i) {
        if (i === undefined) {
            return this.getRuleContexts(Signed_numberContext);
        }
        return this.getRuleContext(i, Signed_numberContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    COMMA() {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_type_name;
    }
    enterRule(listener) {
        if (listener.enterType_name) {
            listener.enterType_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitType_name) {
            listener.exitType_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitType_name) {
            return visitor.visitType_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Column_constraintContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CHECK_() {
        return this.getToken(SQLiteParser.CHECK_, 0);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    DEFAULT_() {
        return this.getToken(SQLiteParser.DEFAULT_, 0);
    }
    COLLATE_() {
        return this.getToken(SQLiteParser.COLLATE_, 0);
    }
    collation_name() {
        return this.getRuleContext(0, Collation_nameContext);
    }
    foreign_key_clause() {
        return this.getRuleContext(0, Foreign_key_clauseContext);
    }
    AS_() {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    CONSTRAINT_() {
        return this.getToken(SQLiteParser.CONSTRAINT_, 0);
    }
    name() {
        return this.getRuleContext(0, NameContext);
    }
    PRIMARY_() {
        return this.getToken(SQLiteParser.PRIMARY_, 0);
    }
    KEY_() {
        return this.getToken(SQLiteParser.KEY_, 0);
    }
    NULL_() {
        return this.getToken(SQLiteParser.NULL_, 0);
    }
    UNIQUE_() {
        return this.getToken(SQLiteParser.UNIQUE_, 0);
    }
    signed_number() {
        return this.getRuleContext(0, Signed_numberContext);
    }
    literal_value() {
        return this.getRuleContext(0, Literal_valueContext);
    }
    conflict_clause() {
        return this.getRuleContext(0, Conflict_clauseContext);
    }
    GENERATED_() {
        return this.getToken(SQLiteParser.GENERATED_, 0);
    }
    ALWAYS_() {
        return this.getToken(SQLiteParser.ALWAYS_, 0);
    }
    STORED_() {
        return this.getToken(SQLiteParser.STORED_, 0);
    }
    VIRTUAL_() {
        return this.getToken(SQLiteParser.VIRTUAL_, 0);
    }
    asc_desc() {
        return this.getRuleContext(0, Asc_descContext);
    }
    AUTOINCREMENT_() {
        return this.getToken(SQLiteParser.AUTOINCREMENT_, 0);
    }
    NOT_() {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_column_constraint;
    }
    enterRule(listener) {
        if (listener.enterColumn_constraint) {
            listener.enterColumn_constraint(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumn_constraint) {
            listener.exitColumn_constraint(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumn_constraint) {
            return visitor.visitColumn_constraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Signed_numberContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMERIC_LITERAL() {
        return this.getToken(SQLiteParser.NUMERIC_LITERAL, 0);
    }
    PLUS() {
        return this.getToken(SQLiteParser.PLUS, 0);
    }
    MINUS() {
        return this.getToken(SQLiteParser.MINUS, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_signed_number;
    }
    enterRule(listener) {
        if (listener.enterSigned_number) {
            listener.enterSigned_number(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSigned_number) {
            listener.exitSigned_number(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSigned_number) {
            return visitor.visitSigned_number(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Table_constraintContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    indexed_column(i) {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }
        return this.getRuleContext(i, Indexed_columnContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    CHECK_() {
        return this.getToken(SQLiteParser.CHECK_, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    FOREIGN_() {
        return this.getToken(SQLiteParser.FOREIGN_, 0);
    }
    KEY_() {
        return this.getToken(SQLiteParser.KEY_, 0);
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        return this.getRuleContext(i, Column_nameContext);
    }
    foreign_key_clause() {
        return this.getRuleContext(0, Foreign_key_clauseContext);
    }
    CONSTRAINT_() {
        return this.getToken(SQLiteParser.CONSTRAINT_, 0);
    }
    name() {
        return this.getRuleContext(0, NameContext);
    }
    PRIMARY_() {
        return this.getToken(SQLiteParser.PRIMARY_, 0);
    }
    UNIQUE_() {
        return this.getToken(SQLiteParser.UNIQUE_, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    conflict_clause() {
        return this.getRuleContext(0, Conflict_clauseContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_table_constraint;
    }
    enterRule(listener) {
        if (listener.enterTable_constraint) {
            listener.enterTable_constraint(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTable_constraint) {
            listener.exitTable_constraint(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTable_constraint) {
            return visitor.visitTable_constraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Foreign_key_clauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    REFERENCES_() {
        return this.getToken(SQLiteParser.REFERENCES_, 0);
    }
    foreign_table() {
        return this.getRuleContext(0, Foreign_tableContext);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        return this.getRuleContext(i, Column_nameContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    ON_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ON_);
        }
        else {
            return this.getToken(SQLiteParser.ON_, i);
        }
    }
    MATCH_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.MATCH_);
        }
        else {
            return this.getToken(SQLiteParser.MATCH_, i);
        }
    }
    name(i) {
        if (i === undefined) {
            return this.getRuleContexts(NameContext);
        }
        return this.getRuleContext(i, NameContext);
    }
    DEFERRABLE_() {
        return this.getToken(SQLiteParser.DEFERRABLE_, 0);
    }
    DELETE_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.DELETE_);
        }
        else {
            return this.getToken(SQLiteParser.DELETE_, i);
        }
    }
    UPDATE_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.UPDATE_);
        }
        else {
            return this.getToken(SQLiteParser.UPDATE_, i);
        }
    }
    SET_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.SET_);
        }
        else {
            return this.getToken(SQLiteParser.SET_, i);
        }
    }
    CASCADE_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.CASCADE_);
        }
        else {
            return this.getToken(SQLiteParser.CASCADE_, i);
        }
    }
    RESTRICT_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.RESTRICT_);
        }
        else {
            return this.getToken(SQLiteParser.RESTRICT_, i);
        }
    }
    NO_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.NO_);
        }
        else {
            return this.getToken(SQLiteParser.NO_, i);
        }
    }
    ACTION_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ACTION_);
        }
        else {
            return this.getToken(SQLiteParser.ACTION_, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    NULL_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.NULL_);
        }
        else {
            return this.getToken(SQLiteParser.NULL_, i);
        }
    }
    DEFAULT_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.DEFAULT_);
        }
        else {
            return this.getToken(SQLiteParser.DEFAULT_, i);
        }
    }
    NOT_() {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    INITIALLY_() {
        return this.getToken(SQLiteParser.INITIALLY_, 0);
    }
    DEFERRED_() {
        return this.getToken(SQLiteParser.DEFERRED_, 0);
    }
    IMMEDIATE_() {
        return this.getToken(SQLiteParser.IMMEDIATE_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_foreign_key_clause;
    }
    enterRule(listener) {
        if (listener.enterForeign_key_clause) {
            listener.enterForeign_key_clause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitForeign_key_clause) {
            listener.exitForeign_key_clause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitForeign_key_clause) {
            return visitor.visitForeign_key_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Conflict_clauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ON_() {
        return this.getToken(SQLiteParser.ON_, 0);
    }
    CONFLICT_() {
        return this.getToken(SQLiteParser.CONFLICT_, 0);
    }
    ROLLBACK_() {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    ABORT_() {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    FAIL_() {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    IGNORE_() {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    REPLACE_() {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_conflict_clause;
    }
    enterRule(listener) {
        if (listener.enterConflict_clause) {
            listener.enterConflict_clause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConflict_clause) {
            listener.exitConflict_clause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitConflict_clause) {
            return visitor.visitConflict_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Create_trigger_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CREATE_() {
        return this.getToken(SQLiteParser.CREATE_, 0);
    }
    TRIGGER_() {
        return this.getToken(SQLiteParser.TRIGGER_, 0);
    }
    trigger_name() {
        return this.getRuleContext(0, Trigger_nameContext);
    }
    ON_() {
        return this.getToken(SQLiteParser.ON_, 0);
    }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    BEGIN_() {
        return this.getToken(SQLiteParser.BEGIN_, 0);
    }
    END_() {
        return this.getToken(SQLiteParser.END_, 0);
    }
    DELETE_() {
        return this.getToken(SQLiteParser.DELETE_, 0);
    }
    INSERT_() {
        return this.getToken(SQLiteParser.INSERT_, 0);
    }
    UPDATE_() {
        return this.getToken(SQLiteParser.UPDATE_, 0);
    }
    IF_() {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    NOT_() {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    EXISTS_() {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    BEFORE_() {
        return this.getToken(SQLiteParser.BEFORE_, 0);
    }
    AFTER_() {
        return this.getToken(SQLiteParser.AFTER_, 0);
    }
    INSTEAD_() {
        return this.getToken(SQLiteParser.INSTEAD_, 0);
    }
    OF_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.OF_);
        }
        else {
            return this.getToken(SQLiteParser.OF_, i);
        }
    }
    FOR_() {
        return this.getToken(SQLiteParser.FOR_, 0);
    }
    EACH_() {
        return this.getToken(SQLiteParser.EACH_, 0);
    }
    ROW_() {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    WHEN_() {
        return this.getToken(SQLiteParser.WHEN_, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    SCOL(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.SCOL);
        }
        else {
            return this.getToken(SQLiteParser.SCOL, i);
        }
    }
    TEMP_() {
        return this.getToken(SQLiteParser.TEMP_, 0);
    }
    TEMPORARY_() {
        return this.getToken(SQLiteParser.TEMPORARY_, 0);
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        return this.getRuleContext(i, Column_nameContext);
    }
    update_stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(Update_stmtContext);
        }
        return this.getRuleContext(i, Update_stmtContext);
    }
    insert_stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(Insert_stmtContext);
        }
        return this.getRuleContext(i, Insert_stmtContext);
    }
    delete_stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(Delete_stmtContext);
        }
        return this.getRuleContext(i, Delete_stmtContext);
    }
    select_stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_stmtContext);
        }
        return this.getRuleContext(i, Select_stmtContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_create_trigger_stmt;
    }
    enterRule(listener) {
        if (listener.enterCreate_trigger_stmt) {
            listener.enterCreate_trigger_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreate_trigger_stmt) {
            listener.exitCreate_trigger_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreate_trigger_stmt) {
            return visitor.visitCreate_trigger_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Create_view_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CREATE_() {
        return this.getToken(SQLiteParser.CREATE_, 0);
    }
    VIEW_() {
        return this.getToken(SQLiteParser.VIEW_, 0);
    }
    view_name() {
        return this.getRuleContext(0, View_nameContext);
    }
    AS_() {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    IF_() {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    NOT_() {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    EXISTS_() {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        return this.getRuleContext(i, Column_nameContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    TEMP_() {
        return this.getToken(SQLiteParser.TEMP_, 0);
    }
    TEMPORARY_() {
        return this.getToken(SQLiteParser.TEMPORARY_, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_create_view_stmt;
    }
    enterRule(listener) {
        if (listener.enterCreate_view_stmt) {
            listener.enterCreate_view_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreate_view_stmt) {
            listener.exitCreate_view_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreate_view_stmt) {
            return visitor.visitCreate_view_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Create_virtual_table_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CREATE_() {
        return this.getToken(SQLiteParser.CREATE_, 0);
    }
    VIRTUAL_() {
        return this.getToken(SQLiteParser.VIRTUAL_, 0);
    }
    TABLE_() {
        return this.getToken(SQLiteParser.TABLE_, 0);
    }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    USING_() {
        return this.getToken(SQLiteParser.USING_, 0);
    }
    module_name() {
        return this.getRuleContext(0, Module_nameContext);
    }
    IF_() {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    NOT_() {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    EXISTS_() {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    module_argument(i) {
        if (i === undefined) {
            return this.getRuleContexts(Module_argumentContext);
        }
        return this.getRuleContext(i, Module_argumentContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_create_virtual_table_stmt;
    }
    enterRule(listener) {
        if (listener.enterCreate_virtual_table_stmt) {
            listener.enterCreate_virtual_table_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCreate_virtual_table_stmt) {
            listener.exitCreate_virtual_table_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCreate_virtual_table_stmt) {
            return visitor.visitCreate_virtual_table_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class With_clauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    WITH_() {
        return this.getToken(SQLiteParser.WITH_, 0);
    }
    cte_table_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Cte_table_nameContext);
        }
        return this.getRuleContext(i, Cte_table_nameContext);
    }
    AS_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.AS_);
        }
        else {
            return this.getToken(SQLiteParser.AS_, i);
        }
    }
    OPEN_PAR(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.OPEN_PAR);
        }
        else {
            return this.getToken(SQLiteParser.OPEN_PAR, i);
        }
    }
    select_stmt(i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_stmtContext);
        }
        return this.getRuleContext(i, Select_stmtContext);
    }
    CLOSE_PAR(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.CLOSE_PAR);
        }
        else {
            return this.getToken(SQLiteParser.CLOSE_PAR, i);
        }
    }
    RECURSIVE_() {
        return this.getToken(SQLiteParser.RECURSIVE_, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_with_clause;
    }
    enterRule(listener) {
        if (listener.enterWith_clause) {
            listener.enterWith_clause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWith_clause) {
            listener.exitWith_clause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWith_clause) {
            return visitor.visitWith_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Cte_table_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        return this.getRuleContext(i, Column_nameContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_cte_table_name;
    }
    enterRule(listener) {
        if (listener.enterCte_table_name) {
            listener.enterCte_table_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCte_table_name) {
            listener.exitCte_table_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCte_table_name) {
            return visitor.visitCte_table_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Recursive_cteContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    cte_table_name() {
        return this.getRuleContext(0, Cte_table_nameContext);
    }
    AS_() {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    initial_select() {
        return this.getRuleContext(0, Initial_selectContext);
    }
    UNION_() {
        return this.getToken(SQLiteParser.UNION_, 0);
    }
    recursive_select() {
        return this.getRuleContext(0, Recursive_selectContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    ALL_() {
        return this.getToken(SQLiteParser.ALL_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_recursive_cte;
    }
    enterRule(listener) {
        if (listener.enterRecursive_cte) {
            listener.enterRecursive_cte(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRecursive_cte) {
            listener.exitRecursive_cte(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRecursive_cte) {
            return visitor.visitRecursive_cte(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Common_table_expressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    AS_() {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    OPEN_PAR(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.OPEN_PAR);
        }
        else {
            return this.getToken(SQLiteParser.OPEN_PAR, i);
        }
    }
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    CLOSE_PAR(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.CLOSE_PAR);
        }
        else {
            return this.getToken(SQLiteParser.CLOSE_PAR, i);
        }
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        return this.getRuleContext(i, Column_nameContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_common_table_expression;
    }
    enterRule(listener) {
        if (listener.enterCommon_table_expression) {
            listener.enterCommon_table_expression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCommon_table_expression) {
            listener.exitCommon_table_expression(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCommon_table_expression) {
            return visitor.visitCommon_table_expression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Delete_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DELETE_() {
        return this.getToken(SQLiteParser.DELETE_, 0);
    }
    FROM_() {
        return this.getToken(SQLiteParser.FROM_, 0);
    }
    qualified_table_name() {
        return this.getRuleContext(0, Qualified_table_nameContext);
    }
    with_clause() {
        return this.getRuleContext(0, With_clauseContext);
    }
    WHERE_() {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    returning_clause() {
        return this.getRuleContext(0, Returning_clauseContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_delete_stmt;
    }
    enterRule(listener) {
        if (listener.enterDelete_stmt) {
            listener.enterDelete_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDelete_stmt) {
            listener.exitDelete_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDelete_stmt) {
            return visitor.visitDelete_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Delete_stmt_limitedContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DELETE_() {
        return this.getToken(SQLiteParser.DELETE_, 0);
    }
    FROM_() {
        return this.getToken(SQLiteParser.FROM_, 0);
    }
    qualified_table_name() {
        return this.getRuleContext(0, Qualified_table_nameContext);
    }
    with_clause() {
        return this.getRuleContext(0, With_clauseContext);
    }
    WHERE_() {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    returning_clause() {
        return this.getRuleContext(0, Returning_clauseContext);
    }
    limit_stmt() {
        return this.getRuleContext(0, Limit_stmtContext);
    }
    order_by_stmt() {
        return this.getRuleContext(0, Order_by_stmtContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_delete_stmt_limited;
    }
    enterRule(listener) {
        if (listener.enterDelete_stmt_limited) {
            listener.enterDelete_stmt_limited(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDelete_stmt_limited) {
            listener.exitDelete_stmt_limited(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDelete_stmt_limited) {
            return visitor.visitDelete_stmt_limited(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Detach_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DETACH_() {
        return this.getToken(SQLiteParser.DETACH_, 0);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DATABASE_() {
        return this.getToken(SQLiteParser.DATABASE_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_detach_stmt;
    }
    enterRule(listener) {
        if (listener.enterDetach_stmt) {
            listener.enterDetach_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDetach_stmt) {
            listener.exitDetach_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDetach_stmt) {
            return visitor.visitDetach_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Drop_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DROP_() {
        return this.getToken(SQLiteParser.DROP_, 0);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    INDEX_() {
        return this.getToken(SQLiteParser.INDEX_, 0);
    }
    TABLE_() {
        return this.getToken(SQLiteParser.TABLE_, 0);
    }
    TRIGGER_() {
        return this.getToken(SQLiteParser.TRIGGER_, 0);
    }
    VIEW_() {
        return this.getToken(SQLiteParser.VIEW_, 0);
    }
    IF_() {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    EXISTS_() {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_drop_stmt;
    }
    enterRule(listener) {
        if (listener.enterDrop_stmt) {
            listener.enterDrop_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDrop_stmt) {
            listener.exitDrop_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDrop_stmt) {
            return visitor.visitDrop_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    literal_value() {
        return this.getRuleContext(0, Literal_valueContext);
    }
    BIND_PARAMETER() {
        return this.getToken(SQLiteParser.BIND_PARAMETER, 0);
    }
    column_name() {
        return this.getRuleContext(0, Column_nameContext);
    }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.DOT);
        }
        else {
            return this.getToken(SQLiteParser.DOT, i);
        }
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    unary_operator() {
        return this.getRuleContext(0, Unary_operatorContext);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    function_name() {
        return this.getRuleContext(0, Function_nameContext);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    STAR() {
        return this.getToken(SQLiteParser.STAR, 0);
    }
    filter_clause() {
        return this.getRuleContext(0, Filter_clauseContext);
    }
    over_clause() {
        return this.getRuleContext(0, Over_clauseContext);
    }
    DISTINCT_() {
        return this.getToken(SQLiteParser.DISTINCT_, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    CAST_() {
        return this.getToken(SQLiteParser.CAST_, 0);
    }
    AS_() {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    type_name() {
        return this.getRuleContext(0, Type_nameContext);
    }
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    EXISTS_() {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    NOT_() {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    CASE_() {
        return this.getToken(SQLiteParser.CASE_, 0);
    }
    END_() {
        return this.getToken(SQLiteParser.END_, 0);
    }
    WHEN_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.WHEN_);
        }
        else {
            return this.getToken(SQLiteParser.WHEN_, i);
        }
    }
    THEN_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.THEN_);
        }
        else {
            return this.getToken(SQLiteParser.THEN_, i);
        }
    }
    ELSE_() {
        return this.getToken(SQLiteParser.ELSE_, 0);
    }
    raise_function() {
        return this.getRuleContext(0, Raise_functionContext);
    }
    PIPE2() {
        return this.getToken(SQLiteParser.PIPE2, 0);
    }
    DIV() {
        return this.getToken(SQLiteParser.DIV, 0);
    }
    MOD() {
        return this.getToken(SQLiteParser.MOD, 0);
    }
    PLUS() {
        return this.getToken(SQLiteParser.PLUS, 0);
    }
    MINUS() {
        return this.getToken(SQLiteParser.MINUS, 0);
    }
    LT2() {
        return this.getToken(SQLiteParser.LT2, 0);
    }
    GT2() {
        return this.getToken(SQLiteParser.GT2, 0);
    }
    AMP() {
        return this.getToken(SQLiteParser.AMP, 0);
    }
    PIPE() {
        return this.getToken(SQLiteParser.PIPE, 0);
    }
    LT() {
        return this.getToken(SQLiteParser.LT, 0);
    }
    LT_EQ() {
        return this.getToken(SQLiteParser.LT_EQ, 0);
    }
    GT() {
        return this.getToken(SQLiteParser.GT, 0);
    }
    GT_EQ() {
        return this.getToken(SQLiteParser.GT_EQ, 0);
    }
    ASSIGN() {
        return this.getToken(SQLiteParser.ASSIGN, 0);
    }
    EQ() {
        return this.getToken(SQLiteParser.EQ, 0);
    }
    NOT_EQ1() {
        return this.getToken(SQLiteParser.NOT_EQ1, 0);
    }
    NOT_EQ2() {
        return this.getToken(SQLiteParser.NOT_EQ2, 0);
    }
    IS_() {
        return this.getToken(SQLiteParser.IS_, 0);
    }
    FROM_() {
        return this.getToken(SQLiteParser.FROM_, 0);
    }
    IN_() {
        return this.getToken(SQLiteParser.IN_, 0);
    }
    LIKE_() {
        return this.getToken(SQLiteParser.LIKE_, 0);
    }
    GLOB_() {
        return this.getToken(SQLiteParser.GLOB_, 0);
    }
    MATCH_() {
        return this.getToken(SQLiteParser.MATCH_, 0);
    }
    REGEXP_() {
        return this.getToken(SQLiteParser.REGEXP_, 0);
    }
    AND_() {
        return this.getToken(SQLiteParser.AND_, 0);
    }
    OR_() {
        return this.getToken(SQLiteParser.OR_, 0);
    }
    BETWEEN_() {
        return this.getToken(SQLiteParser.BETWEEN_, 0);
    }
    COLLATE_() {
        return this.getToken(SQLiteParser.COLLATE_, 0);
    }
    collation_name() {
        return this.getRuleContext(0, Collation_nameContext);
    }
    ESCAPE_() {
        return this.getToken(SQLiteParser.ESCAPE_, 0);
    }
    ISNULL_() {
        return this.getToken(SQLiteParser.ISNULL_, 0);
    }
    NOTNULL_() {
        return this.getToken(SQLiteParser.NOTNULL_, 0);
    }
    NULL_() {
        return this.getToken(SQLiteParser.NULL_, 0);
    }
    table_function_name() {
        return this.getRuleContext(0, Table_function_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_expr;
    }
    enterRule(listener) {
        if (listener.enterExpr) {
            listener.enterExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpr) {
            listener.exitExpr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Raise_functionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    RAISE_() {
        return this.getToken(SQLiteParser.RAISE_, 0);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    IGNORE_() {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    COMMA() {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    error_message() {
        return this.getRuleContext(0, Error_messageContext);
    }
    ROLLBACK_() {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    ABORT_() {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    FAIL_() {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_raise_function;
    }
    enterRule(listener) {
        if (listener.enterRaise_function) {
            listener.enterRaise_function(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRaise_function) {
            listener.exitRaise_function(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRaise_function) {
            return visitor.visitRaise_function(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Literal_valueContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMERIC_LITERAL() {
        return this.getToken(SQLiteParser.NUMERIC_LITERAL, 0);
    }
    STRING_LITERAL() {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    BLOB_LITERAL() {
        return this.getToken(SQLiteParser.BLOB_LITERAL, 0);
    }
    NULL_() {
        return this.getToken(SQLiteParser.NULL_, 0);
    }
    TRUE_() {
        return this.getToken(SQLiteParser.TRUE_, 0);
    }
    FALSE_() {
        return this.getToken(SQLiteParser.FALSE_, 0);
    }
    CURRENT_TIME_() {
        return this.getToken(SQLiteParser.CURRENT_TIME_, 0);
    }
    CURRENT_DATE_() {
        return this.getToken(SQLiteParser.CURRENT_DATE_, 0);
    }
    CURRENT_TIMESTAMP_() {
        return this.getToken(SQLiteParser.CURRENT_TIMESTAMP_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_literal_value;
    }
    enterRule(listener) {
        if (listener.enterLiteral_value) {
            listener.enterLiteral_value(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLiteral_value) {
            listener.exitLiteral_value(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLiteral_value) {
            return visitor.visitLiteral_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Value_rowContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_value_row;
    }
    enterRule(listener) {
        if (listener.enterValue_row) {
            listener.enterValue_row(this);
        }
    }
    exitRule(listener) {
        if (listener.exitValue_row) {
            listener.exitValue_row(this);
        }
    }
    accept(visitor) {
        if (visitor.visitValue_row) {
            return visitor.visitValue_row(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Values_clauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    VALUES_() {
        return this.getToken(SQLiteParser.VALUES_, 0);
    }
    value_row(i) {
        if (i === undefined) {
            return this.getRuleContexts(Value_rowContext);
        }
        return this.getRuleContext(i, Value_rowContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_values_clause;
    }
    enterRule(listener) {
        if (listener.enterValues_clause) {
            listener.enterValues_clause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitValues_clause) {
            listener.exitValues_clause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitValues_clause) {
            return visitor.visitValues_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Insert_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INTO_() {
        return this.getToken(SQLiteParser.INTO_, 0);
    }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    INSERT_() {
        return this.getToken(SQLiteParser.INSERT_, 0);
    }
    REPLACE_() {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    OR_() {
        return this.getToken(SQLiteParser.OR_, 0);
    }
    DEFAULT_() {
        return this.getToken(SQLiteParser.DEFAULT_, 0);
    }
    VALUES_() {
        return this.getToken(SQLiteParser.VALUES_, 0);
    }
    with_clause() {
        return this.getRuleContext(0, With_clauseContext);
    }
    ROLLBACK_() {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    ABORT_() {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    FAIL_() {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    IGNORE_() {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    AS_() {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    table_alias() {
        return this.getRuleContext(0, Table_aliasContext);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        return this.getRuleContext(i, Column_nameContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    returning_clause() {
        return this.getRuleContext(0, Returning_clauseContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    values_clause() {
        return this.getRuleContext(0, Values_clauseContext);
    }
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    upsert_clause() {
        return this.getRuleContext(0, Upsert_clauseContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_insert_stmt;
    }
    enterRule(listener) {
        if (listener.enterInsert_stmt) {
            listener.enterInsert_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInsert_stmt) {
            listener.exitInsert_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInsert_stmt) {
            return visitor.visitInsert_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Returning_clauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    RETURNING_() {
        return this.getToken(SQLiteParser.RETURNING_, 0);
    }
    result_column(i) {
        if (i === undefined) {
            return this.getRuleContexts(Result_columnContext);
        }
        return this.getRuleContext(i, Result_columnContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_returning_clause;
    }
    enterRule(listener) {
        if (listener.enterReturning_clause) {
            listener.enterReturning_clause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReturning_clause) {
            listener.exitReturning_clause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReturning_clause) {
            return visitor.visitReturning_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Upsert_clauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ON_() {
        return this.getToken(SQLiteParser.ON_, 0);
    }
    CONFLICT_() {
        return this.getToken(SQLiteParser.CONFLICT_, 0);
    }
    DO_() {
        return this.getToken(SQLiteParser.DO_, 0);
    }
    NOTHING_() {
        return this.getToken(SQLiteParser.NOTHING_, 0);
    }
    UPDATE_() {
        return this.getToken(SQLiteParser.UPDATE_, 0);
    }
    SET_() {
        return this.getToken(SQLiteParser.SET_, 0);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    indexed_column(i) {
        if (i === undefined) {
            return this.getRuleContexts(Indexed_columnContext);
        }
        return this.getRuleContext(i, Indexed_columnContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    ASSIGN(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ASSIGN);
        }
        else {
            return this.getToken(SQLiteParser.ASSIGN, i);
        }
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    WHERE_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.WHERE_);
        }
        else {
            return this.getToken(SQLiteParser.WHERE_, i);
        }
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        return this.getRuleContext(i, Column_nameContext);
    }
    column_name_list(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_name_listContext);
        }
        return this.getRuleContext(i, Column_name_listContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_upsert_clause;
    }
    enterRule(listener) {
        if (listener.enterUpsert_clause) {
            listener.enterUpsert_clause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUpsert_clause) {
            listener.exitUpsert_clause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUpsert_clause) {
            return visitor.visitUpsert_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Pragma_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PRAGMA_() {
        return this.getToken(SQLiteParser.PRAGMA_, 0);
    }
    pragma_name() {
        return this.getRuleContext(0, Pragma_nameContext);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    ASSIGN() {
        return this.getToken(SQLiteParser.ASSIGN, 0);
    }
    pragma_value() {
        return this.getRuleContext(0, Pragma_valueContext);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_pragma_stmt;
    }
    enterRule(listener) {
        if (listener.enterPragma_stmt) {
            listener.enterPragma_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPragma_stmt) {
            listener.exitPragma_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPragma_stmt) {
            return visitor.visitPragma_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Pragma_valueContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    signed_number() {
        return this.getRuleContext(0, Signed_numberContext);
    }
    name() {
        return this.getRuleContext(0, NameContext);
    }
    STRING_LITERAL() {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_pragma_value;
    }
    enterRule(listener) {
        if (listener.enterPragma_value) {
            listener.enterPragma_value(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPragma_value) {
            listener.exitPragma_value(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPragma_value) {
            return visitor.visitPragma_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Reindex_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    REINDEX_() {
        return this.getToken(SQLiteParser.REINDEX_, 0);
    }
    collation_name() {
        return this.getRuleContext(0, Collation_nameContext);
    }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    index_name() {
        return this.getRuleContext(0, Index_nameContext);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_reindex_stmt;
    }
    enterRule(listener) {
        if (listener.enterReindex_stmt) {
            listener.enterReindex_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReindex_stmt) {
            listener.exitReindex_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitReindex_stmt) {
            return visitor.visitReindex_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Select_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    select_core(i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_coreContext);
        }
        return this.getRuleContext(i, Select_coreContext);
    }
    common_table_stmt() {
        return this.getRuleContext(0, Common_table_stmtContext);
    }
    compound_operator(i) {
        if (i === undefined) {
            return this.getRuleContexts(Compound_operatorContext);
        }
        return this.getRuleContext(i, Compound_operatorContext);
    }
    order_by_stmt() {
        return this.getRuleContext(0, Order_by_stmtContext);
    }
    limit_stmt() {
        return this.getRuleContext(0, Limit_stmtContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_select_stmt;
    }
    enterRule(listener) {
        if (listener.enterSelect_stmt) {
            listener.enterSelect_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelect_stmt) {
            listener.exitSelect_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSelect_stmt) {
            return visitor.visitSelect_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Join_clauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    table_or_subquery(i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }
        return this.getRuleContext(i, Table_or_subqueryContext);
    }
    join_operator(i) {
        if (i === undefined) {
            return this.getRuleContexts(Join_operatorContext);
        }
        return this.getRuleContext(i, Join_operatorContext);
    }
    join_constraint(i) {
        if (i === undefined) {
            return this.getRuleContexts(Join_constraintContext);
        }
        return this.getRuleContext(i, Join_constraintContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_join_clause;
    }
    enterRule(listener) {
        if (listener.enterJoin_clause) {
            listener.enterJoin_clause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitJoin_clause) {
            listener.exitJoin_clause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitJoin_clause) {
            return visitor.visitJoin_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Select_coreContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._groupByExpr = [];
    }
    SELECT_() {
        return this.getToken(SQLiteParser.SELECT_, 0);
    }
    result_column(i) {
        if (i === undefined) {
            return this.getRuleContexts(Result_columnContext);
        }
        return this.getRuleContext(i, Result_columnContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    FROM_() {
        return this.getToken(SQLiteParser.FROM_, 0);
    }
    WHERE_() {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    GROUP_() {
        return this.getToken(SQLiteParser.GROUP_, 0);
    }
    BY_() {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    WINDOW_() {
        return this.getToken(SQLiteParser.WINDOW_, 0);
    }
    window_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Window_nameContext);
        }
        return this.getRuleContext(i, Window_nameContext);
    }
    AS_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.AS_);
        }
        else {
            return this.getToken(SQLiteParser.AS_, i);
        }
    }
    window_defn(i) {
        if (i === undefined) {
            return this.getRuleContexts(Window_defnContext);
        }
        return this.getRuleContext(i, Window_defnContext);
    }
    DISTINCT_() {
        return this.getToken(SQLiteParser.DISTINCT_, 0);
    }
    ALL_() {
        return this.getToken(SQLiteParser.ALL_, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    table_or_subquery(i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }
        return this.getRuleContext(i, Table_or_subqueryContext);
    }
    join_clause() {
        return this.getRuleContext(0, Join_clauseContext);
    }
    HAVING_() {
        return this.getToken(SQLiteParser.HAVING_, 0);
    }
    values_clause() {
        return this.getRuleContext(0, Values_clauseContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_select_core;
    }
    enterRule(listener) {
        if (listener.enterSelect_core) {
            listener.enterSelect_core(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSelect_core) {
            listener.exitSelect_core(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSelect_core) {
            return visitor.visitSelect_core(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Factored_select_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_factored_select_stmt;
    }
    enterRule(listener) {
        if (listener.enterFactored_select_stmt) {
            listener.enterFactored_select_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFactored_select_stmt) {
            listener.exitFactored_select_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFactored_select_stmt) {
            return visitor.visitFactored_select_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Simple_select_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    select_core() {
        return this.getRuleContext(0, Select_coreContext);
    }
    common_table_stmt() {
        return this.getRuleContext(0, Common_table_stmtContext);
    }
    order_by_stmt() {
        return this.getRuleContext(0, Order_by_stmtContext);
    }
    limit_stmt() {
        return this.getRuleContext(0, Limit_stmtContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_simple_select_stmt;
    }
    enterRule(listener) {
        if (listener.enterSimple_select_stmt) {
            listener.enterSimple_select_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSimple_select_stmt) {
            listener.exitSimple_select_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSimple_select_stmt) {
            return visitor.visitSimple_select_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Compound_select_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    select_core(i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_coreContext);
        }
        return this.getRuleContext(i, Select_coreContext);
    }
    common_table_stmt() {
        return this.getRuleContext(0, Common_table_stmtContext);
    }
    order_by_stmt() {
        return this.getRuleContext(0, Order_by_stmtContext);
    }
    limit_stmt() {
        return this.getRuleContext(0, Limit_stmtContext);
    }
    UNION_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.UNION_);
        }
        else {
            return this.getToken(SQLiteParser.UNION_, i);
        }
    }
    INTERSECT_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.INTERSECT_);
        }
        else {
            return this.getToken(SQLiteParser.INTERSECT_, i);
        }
    }
    EXCEPT_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.EXCEPT_);
        }
        else {
            return this.getToken(SQLiteParser.EXCEPT_, i);
        }
    }
    ALL_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ALL_);
        }
        else {
            return this.getToken(SQLiteParser.ALL_, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_compound_select_stmt;
    }
    enterRule(listener) {
        if (listener.enterCompound_select_stmt) {
            listener.enterCompound_select_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCompound_select_stmt) {
            listener.exitCompound_select_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCompound_select_stmt) {
            return visitor.visitCompound_select_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Table_or_subqueryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    table_alias() {
        return this.getRuleContext(0, Table_aliasContext);
    }
    INDEXED_() {
        return this.getToken(SQLiteParser.INDEXED_, 0);
    }
    BY_() {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    index_name() {
        return this.getRuleContext(0, Index_nameContext);
    }
    NOT_() {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    AS_() {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    table_function_name() {
        return this.getRuleContext(0, Table_function_nameContext);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    table_or_subquery(i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }
        return this.getRuleContext(i, Table_or_subqueryContext);
    }
    join_clause() {
        return this.getRuleContext(0, Join_clauseContext);
    }
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_table_or_subquery;
    }
    enterRule(listener) {
        if (listener.enterTable_or_subquery) {
            listener.enterTable_or_subquery(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTable_or_subquery) {
            listener.exitTable_or_subquery(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTable_or_subquery) {
            return visitor.visitTable_or_subquery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Result_columnContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STAR() {
        return this.getToken(SQLiteParser.STAR, 0);
    }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    column_alias() {
        return this.getRuleContext(0, Column_aliasContext);
    }
    AS_() {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_result_column;
    }
    enterRule(listener) {
        if (listener.enterResult_column) {
            listener.enterResult_column(this);
        }
    }
    exitRule(listener) {
        if (listener.exitResult_column) {
            listener.exitResult_column(this);
        }
    }
    accept(visitor) {
        if (visitor.visitResult_column) {
            return visitor.visitResult_column(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Join_operatorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COMMA() {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    JOIN_() {
        return this.getToken(SQLiteParser.JOIN_, 0);
    }
    NATURAL_() {
        return this.getToken(SQLiteParser.NATURAL_, 0);
    }
    INNER_() {
        return this.getToken(SQLiteParser.INNER_, 0);
    }
    CROSS_() {
        return this.getToken(SQLiteParser.CROSS_, 0);
    }
    LEFT_() {
        return this.getToken(SQLiteParser.LEFT_, 0);
    }
    RIGHT_() {
        return this.getToken(SQLiteParser.RIGHT_, 0);
    }
    FULL_() {
        return this.getToken(SQLiteParser.FULL_, 0);
    }
    OUTER_() {
        return this.getToken(SQLiteParser.OUTER_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_join_operator;
    }
    enterRule(listener) {
        if (listener.enterJoin_operator) {
            listener.enterJoin_operator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitJoin_operator) {
            listener.exitJoin_operator(this);
        }
    }
    accept(visitor) {
        if (visitor.visitJoin_operator) {
            return visitor.visitJoin_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Join_constraintContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ON_() {
        return this.getToken(SQLiteParser.ON_, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    USING_() {
        return this.getToken(SQLiteParser.USING_, 0);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        return this.getRuleContext(i, Column_nameContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_join_constraint;
    }
    enterRule(listener) {
        if (listener.enterJoin_constraint) {
            listener.enterJoin_constraint(this);
        }
    }
    exitRule(listener) {
        if (listener.exitJoin_constraint) {
            listener.exitJoin_constraint(this);
        }
    }
    accept(visitor) {
        if (visitor.visitJoin_constraint) {
            return visitor.visitJoin_constraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Compound_operatorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    UNION_() {
        return this.getToken(SQLiteParser.UNION_, 0);
    }
    ALL_() {
        return this.getToken(SQLiteParser.ALL_, 0);
    }
    INTERSECT_() {
        return this.getToken(SQLiteParser.INTERSECT_, 0);
    }
    EXCEPT_() {
        return this.getToken(SQLiteParser.EXCEPT_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_compound_operator;
    }
    enterRule(listener) {
        if (listener.enterCompound_operator) {
            listener.enterCompound_operator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCompound_operator) {
            listener.exitCompound_operator(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCompound_operator) {
            return visitor.visitCompound_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Update_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    UPDATE_() {
        return this.getToken(SQLiteParser.UPDATE_, 0);
    }
    qualified_table_name() {
        return this.getRuleContext(0, Qualified_table_nameContext);
    }
    SET_() {
        return this.getToken(SQLiteParser.SET_, 0);
    }
    ASSIGN(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ASSIGN);
        }
        else {
            return this.getToken(SQLiteParser.ASSIGN, i);
        }
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        return this.getRuleContext(i, Column_nameContext);
    }
    column_name_list(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_name_listContext);
        }
        return this.getRuleContext(i, Column_name_listContext);
    }
    with_clause() {
        return this.getRuleContext(0, With_clauseContext);
    }
    OR_() {
        return this.getToken(SQLiteParser.OR_, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    FROM_() {
        return this.getToken(SQLiteParser.FROM_, 0);
    }
    WHERE_() {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    returning_clause() {
        return this.getRuleContext(0, Returning_clauseContext);
    }
    ROLLBACK_() {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    ABORT_() {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    REPLACE_() {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    FAIL_() {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    IGNORE_() {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    table_or_subquery(i) {
        if (i === undefined) {
            return this.getRuleContexts(Table_or_subqueryContext);
        }
        return this.getRuleContext(i, Table_or_subqueryContext);
    }
    join_clause() {
        return this.getRuleContext(0, Join_clauseContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_update_stmt;
    }
    enterRule(listener) {
        if (listener.enterUpdate_stmt) {
            listener.enterUpdate_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUpdate_stmt) {
            listener.exitUpdate_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUpdate_stmt) {
            return visitor.visitUpdate_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Column_name_listContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        return this.getRuleContext(i, Column_nameContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_column_name_list;
    }
    enterRule(listener) {
        if (listener.enterColumn_name_list) {
            listener.enterColumn_name_list(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumn_name_list) {
            listener.exitColumn_name_list(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumn_name_list) {
            return visitor.visitColumn_name_list(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Update_stmt_limitedContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    UPDATE_() {
        return this.getToken(SQLiteParser.UPDATE_, 0);
    }
    qualified_table_name() {
        return this.getRuleContext(0, Qualified_table_nameContext);
    }
    SET_() {
        return this.getToken(SQLiteParser.SET_, 0);
    }
    ASSIGN(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.ASSIGN);
        }
        else {
            return this.getToken(SQLiteParser.ASSIGN, i);
        }
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    column_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_nameContext);
        }
        return this.getRuleContext(i, Column_nameContext);
    }
    column_name_list(i) {
        if (i === undefined) {
            return this.getRuleContexts(Column_name_listContext);
        }
        return this.getRuleContext(i, Column_name_listContext);
    }
    with_clause() {
        return this.getRuleContext(0, With_clauseContext);
    }
    OR_() {
        return this.getToken(SQLiteParser.OR_, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    WHERE_() {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    returning_clause() {
        return this.getRuleContext(0, Returning_clauseContext);
    }
    limit_stmt() {
        return this.getRuleContext(0, Limit_stmtContext);
    }
    ROLLBACK_() {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    ABORT_() {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    REPLACE_() {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    FAIL_() {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    IGNORE_() {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    order_by_stmt() {
        return this.getRuleContext(0, Order_by_stmtContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_update_stmt_limited;
    }
    enterRule(listener) {
        if (listener.enterUpdate_stmt_limited) {
            listener.enterUpdate_stmt_limited(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUpdate_stmt_limited) {
            listener.exitUpdate_stmt_limited(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUpdate_stmt_limited) {
            return visitor.visitUpdate_stmt_limited(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Qualified_table_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    table_name() {
        return this.getRuleContext(0, Table_nameContext);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    DOT() {
        return this.getToken(SQLiteParser.DOT, 0);
    }
    AS_() {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    alias() {
        return this.getRuleContext(0, AliasContext);
    }
    INDEXED_() {
        return this.getToken(SQLiteParser.INDEXED_, 0);
    }
    BY_() {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    index_name() {
        return this.getRuleContext(0, Index_nameContext);
    }
    NOT_() {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_qualified_table_name;
    }
    enterRule(listener) {
        if (listener.enterQualified_table_name) {
            listener.enterQualified_table_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitQualified_table_name) {
            listener.exitQualified_table_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitQualified_table_name) {
            return visitor.visitQualified_table_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Vacuum_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    VACUUM_() {
        return this.getToken(SQLiteParser.VACUUM_, 0);
    }
    schema_name() {
        return this.getRuleContext(0, Schema_nameContext);
    }
    INTO_() {
        return this.getToken(SQLiteParser.INTO_, 0);
    }
    filename() {
        return this.getRuleContext(0, FilenameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_vacuum_stmt;
    }
    enterRule(listener) {
        if (listener.enterVacuum_stmt) {
            listener.enterVacuum_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVacuum_stmt) {
            listener.exitVacuum_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitVacuum_stmt) {
            return visitor.visitVacuum_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Filter_clauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FILTER_() {
        return this.getToken(SQLiteParser.FILTER_, 0);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    WHERE_() {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_filter_clause;
    }
    enterRule(listener) {
        if (listener.enterFilter_clause) {
            listener.enterFilter_clause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFilter_clause) {
            listener.exitFilter_clause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFilter_clause) {
            return visitor.visitFilter_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Window_defnContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    ORDER_() {
        return this.getToken(SQLiteParser.ORDER_, 0);
    }
    BY_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.BY_);
        }
        else {
            return this.getToken(SQLiteParser.BY_, i);
        }
    }
    ordering_term(i) {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }
        return this.getRuleContext(i, Ordering_termContext);
    }
    base_window_name() {
        return this.getRuleContext(0, Base_window_nameContext);
    }
    PARTITION_() {
        return this.getToken(SQLiteParser.PARTITION_, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    frame_spec() {
        return this.getRuleContext(0, Frame_specContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_window_defn;
    }
    enterRule(listener) {
        if (listener.enterWindow_defn) {
            listener.enterWindow_defn(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWindow_defn) {
            listener.exitWindow_defn(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWindow_defn) {
            return visitor.visitWindow_defn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Over_clauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    OVER_() {
        return this.getToken(SQLiteParser.OVER_, 0);
    }
    window_name() {
        return this.getRuleContext(0, Window_nameContext);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    base_window_name() {
        return this.getRuleContext(0, Base_window_nameContext);
    }
    PARTITION_() {
        return this.getToken(SQLiteParser.PARTITION_, 0);
    }
    BY_(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.BY_);
        }
        else {
            return this.getToken(SQLiteParser.BY_, i);
        }
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    ORDER_() {
        return this.getToken(SQLiteParser.ORDER_, 0);
    }
    ordering_term(i) {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }
        return this.getRuleContext(i, Ordering_termContext);
    }
    frame_spec() {
        return this.getRuleContext(0, Frame_specContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_over_clause;
    }
    enterRule(listener) {
        if (listener.enterOver_clause) {
            listener.enterOver_clause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOver_clause) {
            listener.exitOver_clause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOver_clause) {
            return visitor.visitOver_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Frame_specContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    frame_clause() {
        return this.getRuleContext(0, Frame_clauseContext);
    }
    EXCLUDE_() {
        return this.getToken(SQLiteParser.EXCLUDE_, 0);
    }
    NO_() {
        return this.getToken(SQLiteParser.NO_, 0);
    }
    OTHERS_() {
        return this.getToken(SQLiteParser.OTHERS_, 0);
    }
    CURRENT_() {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    ROW_() {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    GROUP_() {
        return this.getToken(SQLiteParser.GROUP_, 0);
    }
    TIES_() {
        return this.getToken(SQLiteParser.TIES_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_frame_spec;
    }
    enterRule(listener) {
        if (listener.enterFrame_spec) {
            listener.enterFrame_spec(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFrame_spec) {
            listener.exitFrame_spec(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFrame_spec) {
            return visitor.visitFrame_spec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Frame_clauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    RANGE_() {
        return this.getToken(SQLiteParser.RANGE_, 0);
    }
    ROWS_() {
        return this.getToken(SQLiteParser.ROWS_, 0);
    }
    GROUPS_() {
        return this.getToken(SQLiteParser.GROUPS_, 0);
    }
    frame_single() {
        return this.getRuleContext(0, Frame_singleContext);
    }
    BETWEEN_() {
        return this.getToken(SQLiteParser.BETWEEN_, 0);
    }
    frame_left() {
        return this.getRuleContext(0, Frame_leftContext);
    }
    AND_() {
        return this.getToken(SQLiteParser.AND_, 0);
    }
    frame_right() {
        return this.getRuleContext(0, Frame_rightContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_frame_clause;
    }
    enterRule(listener) {
        if (listener.enterFrame_clause) {
            listener.enterFrame_clause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFrame_clause) {
            listener.exitFrame_clause(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFrame_clause) {
            return visitor.visitFrame_clause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Simple_function_invocationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    simple_func() {
        return this.getRuleContext(0, Simple_funcContext);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    STAR() {
        return this.getToken(SQLiteParser.STAR, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_simple_function_invocation;
    }
    enterRule(listener) {
        if (listener.enterSimple_function_invocation) {
            listener.enterSimple_function_invocation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSimple_function_invocation) {
            listener.exitSimple_function_invocation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSimple_function_invocation) {
            return visitor.visitSimple_function_invocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Aggregate_function_invocationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    aggregate_func() {
        return this.getRuleContext(0, Aggregate_funcContext);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    STAR() {
        return this.getToken(SQLiteParser.STAR, 0);
    }
    filter_clause() {
        return this.getRuleContext(0, Filter_clauseContext);
    }
    DISTINCT_() {
        return this.getToken(SQLiteParser.DISTINCT_, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_aggregate_function_invocation;
    }
    enterRule(listener) {
        if (listener.enterAggregate_function_invocation) {
            listener.enterAggregate_function_invocation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAggregate_function_invocation) {
            listener.exitAggregate_function_invocation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAggregate_function_invocation) {
            return visitor.visitAggregate_function_invocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Window_function_invocationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    window_function() {
        return this.getRuleContext(0, Window_functionContext);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    OVER_() {
        return this.getToken(SQLiteParser.OVER_, 0);
    }
    window_defn() {
        return this.getRuleContext(0, Window_defnContext);
    }
    window_name() {
        return this.getRuleContext(0, Window_nameContext);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    STAR() {
        return this.getToken(SQLiteParser.STAR, 0);
    }
    filter_clause() {
        return this.getRuleContext(0, Filter_clauseContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_window_function_invocation;
    }
    enterRule(listener) {
        if (listener.enterWindow_function_invocation) {
            listener.enterWindow_function_invocation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWindow_function_invocation) {
            listener.exitWindow_function_invocation(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWindow_function_invocation) {
            return visitor.visitWindow_function_invocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Common_table_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    WITH_() {
        return this.getToken(SQLiteParser.WITH_, 0);
    }
    common_table_expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(Common_table_expressionContext);
        }
        return this.getRuleContext(i, Common_table_expressionContext);
    }
    RECURSIVE_() {
        return this.getToken(SQLiteParser.RECURSIVE_, 0);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_common_table_stmt;
    }
    enterRule(listener) {
        if (listener.enterCommon_table_stmt) {
            listener.enterCommon_table_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCommon_table_stmt) {
            listener.exitCommon_table_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCommon_table_stmt) {
            return visitor.visitCommon_table_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Order_by_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ORDER_() {
        return this.getToken(SQLiteParser.ORDER_, 0);
    }
    BY_() {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    ordering_term(i) {
        if (i === undefined) {
            return this.getRuleContexts(Ordering_termContext);
        }
        return this.getRuleContext(i, Ordering_termContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_order_by_stmt;
    }
    enterRule(listener) {
        if (listener.enterOrder_by_stmt) {
            listener.enterOrder_by_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOrder_by_stmt) {
            listener.exitOrder_by_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOrder_by_stmt) {
            return visitor.visitOrder_by_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Limit_stmtContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LIMIT_() {
        return this.getToken(SQLiteParser.LIMIT_, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    OFFSET_() {
        return this.getToken(SQLiteParser.OFFSET_, 0);
    }
    COMMA() {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_limit_stmt;
    }
    enterRule(listener) {
        if (listener.enterLimit_stmt) {
            listener.enterLimit_stmt(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLimit_stmt) {
            listener.exitLimit_stmt(this);
        }
    }
    accept(visitor) {
        if (visitor.visitLimit_stmt) {
            return visitor.visitLimit_stmt(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Ordering_termContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    COLLATE_() {
        return this.getToken(SQLiteParser.COLLATE_, 0);
    }
    collation_name() {
        return this.getRuleContext(0, Collation_nameContext);
    }
    asc_desc() {
        return this.getRuleContext(0, Asc_descContext);
    }
    NULLS_() {
        return this.getToken(SQLiteParser.NULLS_, 0);
    }
    FIRST_() {
        return this.getToken(SQLiteParser.FIRST_, 0);
    }
    LAST_() {
        return this.getToken(SQLiteParser.LAST_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_ordering_term;
    }
    enterRule(listener) {
        if (listener.enterOrdering_term) {
            listener.enterOrdering_term(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOrdering_term) {
            listener.exitOrdering_term(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOrdering_term) {
            return visitor.visitOrdering_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Asc_descContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ASC_() {
        return this.getToken(SQLiteParser.ASC_, 0);
    }
    DESC_() {
        return this.getToken(SQLiteParser.DESC_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_asc_desc;
    }
    enterRule(listener) {
        if (listener.enterAsc_desc) {
            listener.enterAsc_desc(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAsc_desc) {
            listener.exitAsc_desc(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAsc_desc) {
            return visitor.visitAsc_desc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Frame_leftContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    PRECEDING_() {
        return this.getToken(SQLiteParser.PRECEDING_, 0);
    }
    FOLLOWING_() {
        return this.getToken(SQLiteParser.FOLLOWING_, 0);
    }
    CURRENT_() {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    ROW_() {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    UNBOUNDED_() {
        return this.getToken(SQLiteParser.UNBOUNDED_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_frame_left;
    }
    enterRule(listener) {
        if (listener.enterFrame_left) {
            listener.enterFrame_left(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFrame_left) {
            listener.exitFrame_left(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFrame_left) {
            return visitor.visitFrame_left(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Frame_rightContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    PRECEDING_() {
        return this.getToken(SQLiteParser.PRECEDING_, 0);
    }
    FOLLOWING_() {
        return this.getToken(SQLiteParser.FOLLOWING_, 0);
    }
    CURRENT_() {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    ROW_() {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    UNBOUNDED_() {
        return this.getToken(SQLiteParser.UNBOUNDED_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_frame_right;
    }
    enterRule(listener) {
        if (listener.enterFrame_right) {
            listener.enterFrame_right(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFrame_right) {
            listener.exitFrame_right(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFrame_right) {
            return visitor.visitFrame_right(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Frame_singleContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    PRECEDING_() {
        return this.getToken(SQLiteParser.PRECEDING_, 0);
    }
    UNBOUNDED_() {
        return this.getToken(SQLiteParser.UNBOUNDED_, 0);
    }
    CURRENT_() {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    ROW_() {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_frame_single;
    }
    enterRule(listener) {
        if (listener.enterFrame_single) {
            listener.enterFrame_single(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFrame_single) {
            listener.exitFrame_single(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFrame_single) {
            return visitor.visitFrame_single(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Window_functionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    OPEN_PAR(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.OPEN_PAR);
        }
        else {
            return this.getToken(SQLiteParser.OPEN_PAR, i);
        }
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    CLOSE_PAR(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.CLOSE_PAR);
        }
        else {
            return this.getToken(SQLiteParser.CLOSE_PAR, i);
        }
    }
    OVER_() {
        return this.getToken(SQLiteParser.OVER_, 0);
    }
    order_by_expr_asc_desc() {
        return this.getRuleContext(0, Order_by_expr_asc_descContext);
    }
    FIRST_VALUE_() {
        return this.getToken(SQLiteParser.FIRST_VALUE_, 0);
    }
    LAST_VALUE_() {
        return this.getToken(SQLiteParser.LAST_VALUE_, 0);
    }
    partition_by() {
        return this.getRuleContext(0, Partition_byContext);
    }
    frame_clause() {
        return this.getRuleContext(0, Frame_clauseContext);
    }
    CUME_DIST_() {
        return this.getToken(SQLiteParser.CUME_DIST_, 0);
    }
    PERCENT_RANK_() {
        return this.getToken(SQLiteParser.PERCENT_RANK_, 0);
    }
    order_by_expr() {
        return this.getRuleContext(0, Order_by_exprContext);
    }
    DENSE_RANK_() {
        return this.getToken(SQLiteParser.DENSE_RANK_, 0);
    }
    RANK_() {
        return this.getToken(SQLiteParser.RANK_, 0);
    }
    ROW_NUMBER_() {
        return this.getToken(SQLiteParser.ROW_NUMBER_, 0);
    }
    LAG_() {
        return this.getToken(SQLiteParser.LAG_, 0);
    }
    LEAD_() {
        return this.getToken(SQLiteParser.LEAD_, 0);
    }
    offset() {
        return this.getRuleContext(0, OffsetContext);
    }
    default_value() {
        return this.getRuleContext(0, Default_valueContext);
    }
    NTH_VALUE_() {
        return this.getToken(SQLiteParser.NTH_VALUE_, 0);
    }
    COMMA() {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    signed_number() {
        return this.getRuleContext(0, Signed_numberContext);
    }
    NTILE_() {
        return this.getToken(SQLiteParser.NTILE_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_window_function;
    }
    enterRule(listener) {
        if (listener.enterWindow_function) {
            listener.enterWindow_function(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWindow_function) {
            listener.exitWindow_function(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWindow_function) {
            return visitor.visitWindow_function(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class OffsetContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COMMA() {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    signed_number() {
        return this.getRuleContext(0, Signed_numberContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_offset;
    }
    enterRule(listener) {
        if (listener.enterOffset) {
            listener.enterOffset(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOffset) {
            listener.exitOffset(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOffset) {
            return visitor.visitOffset(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Default_valueContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COMMA() {
        return this.getToken(SQLiteParser.COMMA, 0);
    }
    signed_number() {
        return this.getRuleContext(0, Signed_numberContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_default_value;
    }
    enterRule(listener) {
        if (listener.enterDefault_value) {
            listener.enterDefault_value(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDefault_value) {
            listener.exitDefault_value(this);
        }
    }
    accept(visitor) {
        if (visitor.visitDefault_value) {
            return visitor.visitDefault_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Partition_byContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PARTITION_() {
        return this.getToken(SQLiteParser.PARTITION_, 0);
    }
    BY_() {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_partition_by;
    }
    enterRule(listener) {
        if (listener.enterPartition_by) {
            listener.enterPartition_by(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPartition_by) {
            listener.exitPartition_by(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPartition_by) {
            return visitor.visitPartition_by(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Order_by_exprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ORDER_() {
        return this.getToken(SQLiteParser.ORDER_, 0);
    }
    BY_() {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_order_by_expr;
    }
    enterRule(listener) {
        if (listener.enterOrder_by_expr) {
            listener.enterOrder_by_expr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOrder_by_expr) {
            listener.exitOrder_by_expr(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOrder_by_expr) {
            return visitor.visitOrder_by_expr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Order_by_expr_asc_descContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ORDER_() {
        return this.getToken(SQLiteParser.ORDER_, 0);
    }
    BY_() {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    expr_asc_desc() {
        return this.getRuleContext(0, Expr_asc_descContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_order_by_expr_asc_desc;
    }
    enterRule(listener) {
        if (listener.enterOrder_by_expr_asc_desc) {
            listener.enterOrder_by_expr_asc_desc(this);
        }
    }
    exitRule(listener) {
        if (listener.exitOrder_by_expr_asc_desc) {
            listener.exitOrder_by_expr_asc_desc(this);
        }
    }
    accept(visitor) {
        if (visitor.visitOrder_by_expr_asc_desc) {
            return visitor.visitOrder_by_expr_asc_desc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Expr_asc_descContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }
        return this.getRuleContext(i, ExprContext);
    }
    asc_desc(i) {
        if (i === undefined) {
            return this.getRuleContexts(Asc_descContext);
        }
        return this.getRuleContext(i, Asc_descContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SQLiteParser.COMMA);
        }
        else {
            return this.getToken(SQLiteParser.COMMA, i);
        }
    }
    get ruleIndex() {
        return SQLiteParser.RULE_expr_asc_desc;
    }
    enterRule(listener) {
        if (listener.enterExpr_asc_desc) {
            listener.enterExpr_asc_desc(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpr_asc_desc) {
            listener.exitExpr_asc_desc(this);
        }
    }
    accept(visitor) {
        if (visitor.visitExpr_asc_desc) {
            return visitor.visitExpr_asc_desc(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Initial_selectContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_initial_select;
    }
    enterRule(listener) {
        if (listener.enterInitial_select) {
            listener.enterInitial_select(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInitial_select) {
            listener.exitInitial_select(this);
        }
    }
    accept(visitor) {
        if (visitor.visitInitial_select) {
            return visitor.visitInitial_select(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Recursive_selectContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    select_stmt() {
        return this.getRuleContext(0, Select_stmtContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_recursive_select;
    }
    enterRule(listener) {
        if (listener.enterRecursive_select) {
            listener.enterRecursive_select(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRecursive_select) {
            listener.exitRecursive_select(this);
        }
    }
    accept(visitor) {
        if (visitor.visitRecursive_select) {
            return visitor.visitRecursive_select(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Unary_operatorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    MINUS() {
        return this.getToken(SQLiteParser.MINUS, 0);
    }
    PLUS() {
        return this.getToken(SQLiteParser.PLUS, 0);
    }
    TILDE() {
        return this.getToken(SQLiteParser.TILDE, 0);
    }
    NOT_() {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_unary_operator;
    }
    enterRule(listener) {
        if (listener.enterUnary_operator) {
            listener.enterUnary_operator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnary_operator) {
            listener.exitUnary_operator(this);
        }
    }
    accept(visitor) {
        if (visitor.visitUnary_operator) {
            return visitor.visitUnary_operator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Error_messageContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING_LITERAL() {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_error_message;
    }
    enterRule(listener) {
        if (listener.enterError_message) {
            listener.enterError_message(this);
        }
    }
    exitRule(listener) {
        if (listener.exitError_message) {
            listener.exitError_message(this);
        }
    }
    accept(visitor) {
        if (visitor.visitError_message) {
            return visitor.visitError_message(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Module_argumentContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expr() {
        return this.getRuleContext(0, ExprContext);
    }
    column_def() {
        return this.getRuleContext(0, Column_defContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_module_argument;
    }
    enterRule(listener) {
        if (listener.enterModule_argument) {
            listener.enterModule_argument(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModule_argument) {
            listener.exitModule_argument(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModule_argument) {
            return visitor.visitModule_argument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Column_aliasContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(SQLiteParser.IDENTIFIER, 0);
    }
    STRING_LITERAL() {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_column_alias;
    }
    enterRule(listener) {
        if (listener.enterColumn_alias) {
            listener.enterColumn_alias(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumn_alias) {
            listener.exitColumn_alias(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumn_alias) {
            return visitor.visitColumn_alias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class KeywordContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ABORT_() {
        return this.getToken(SQLiteParser.ABORT_, 0);
    }
    ACTION_() {
        return this.getToken(SQLiteParser.ACTION_, 0);
    }
    ADD_() {
        return this.getToken(SQLiteParser.ADD_, 0);
    }
    AFTER_() {
        return this.getToken(SQLiteParser.AFTER_, 0);
    }
    ALL_() {
        return this.getToken(SQLiteParser.ALL_, 0);
    }
    ALTER_() {
        return this.getToken(SQLiteParser.ALTER_, 0);
    }
    ANALYZE_() {
        return this.getToken(SQLiteParser.ANALYZE_, 0);
    }
    AND_() {
        return this.getToken(SQLiteParser.AND_, 0);
    }
    AS_() {
        return this.getToken(SQLiteParser.AS_, 0);
    }
    ASC_() {
        return this.getToken(SQLiteParser.ASC_, 0);
    }
    ATTACH_() {
        return this.getToken(SQLiteParser.ATTACH_, 0);
    }
    AUTOINCREMENT_() {
        return this.getToken(SQLiteParser.AUTOINCREMENT_, 0);
    }
    BEFORE_() {
        return this.getToken(SQLiteParser.BEFORE_, 0);
    }
    BEGIN_() {
        return this.getToken(SQLiteParser.BEGIN_, 0);
    }
    BETWEEN_() {
        return this.getToken(SQLiteParser.BETWEEN_, 0);
    }
    BY_() {
        return this.getToken(SQLiteParser.BY_, 0);
    }
    CASCADE_() {
        return this.getToken(SQLiteParser.CASCADE_, 0);
    }
    CASE_() {
        return this.getToken(SQLiteParser.CASE_, 0);
    }
    CAST_() {
        return this.getToken(SQLiteParser.CAST_, 0);
    }
    CHECK_() {
        return this.getToken(SQLiteParser.CHECK_, 0);
    }
    COLLATE_() {
        return this.getToken(SQLiteParser.COLLATE_, 0);
    }
    COLUMN_() {
        return this.getToken(SQLiteParser.COLUMN_, 0);
    }
    COMMIT_() {
        return this.getToken(SQLiteParser.COMMIT_, 0);
    }
    CONFLICT_() {
        return this.getToken(SQLiteParser.CONFLICT_, 0);
    }
    CONSTRAINT_() {
        return this.getToken(SQLiteParser.CONSTRAINT_, 0);
    }
    CREATE_() {
        return this.getToken(SQLiteParser.CREATE_, 0);
    }
    CROSS_() {
        return this.getToken(SQLiteParser.CROSS_, 0);
    }
    CURRENT_DATE_() {
        return this.getToken(SQLiteParser.CURRENT_DATE_, 0);
    }
    CURRENT_TIME_() {
        return this.getToken(SQLiteParser.CURRENT_TIME_, 0);
    }
    CURRENT_TIMESTAMP_() {
        return this.getToken(SQLiteParser.CURRENT_TIMESTAMP_, 0);
    }
    DATABASE_() {
        return this.getToken(SQLiteParser.DATABASE_, 0);
    }
    DEFAULT_() {
        return this.getToken(SQLiteParser.DEFAULT_, 0);
    }
    DEFERRABLE_() {
        return this.getToken(SQLiteParser.DEFERRABLE_, 0);
    }
    DEFERRED_() {
        return this.getToken(SQLiteParser.DEFERRED_, 0);
    }
    DELETE_() {
        return this.getToken(SQLiteParser.DELETE_, 0);
    }
    DESC_() {
        return this.getToken(SQLiteParser.DESC_, 0);
    }
    DETACH_() {
        return this.getToken(SQLiteParser.DETACH_, 0);
    }
    DISTINCT_() {
        return this.getToken(SQLiteParser.DISTINCT_, 0);
    }
    DROP_() {
        return this.getToken(SQLiteParser.DROP_, 0);
    }
    EACH_() {
        return this.getToken(SQLiteParser.EACH_, 0);
    }
    ELSE_() {
        return this.getToken(SQLiteParser.ELSE_, 0);
    }
    END_() {
        return this.getToken(SQLiteParser.END_, 0);
    }
    ESCAPE_() {
        return this.getToken(SQLiteParser.ESCAPE_, 0);
    }
    EXCEPT_() {
        return this.getToken(SQLiteParser.EXCEPT_, 0);
    }
    EXCLUSIVE_() {
        return this.getToken(SQLiteParser.EXCLUSIVE_, 0);
    }
    EXISTS_() {
        return this.getToken(SQLiteParser.EXISTS_, 0);
    }
    EXPLAIN_() {
        return this.getToken(SQLiteParser.EXPLAIN_, 0);
    }
    FAIL_() {
        return this.getToken(SQLiteParser.FAIL_, 0);
    }
    FOR_() {
        return this.getToken(SQLiteParser.FOR_, 0);
    }
    FOREIGN_() {
        return this.getToken(SQLiteParser.FOREIGN_, 0);
    }
    FROM_() {
        return this.getToken(SQLiteParser.FROM_, 0);
    }
    FULL_() {
        return this.getToken(SQLiteParser.FULL_, 0);
    }
    GLOB_() {
        return this.getToken(SQLiteParser.GLOB_, 0);
    }
    GROUP_() {
        return this.getToken(SQLiteParser.GROUP_, 0);
    }
    HAVING_() {
        return this.getToken(SQLiteParser.HAVING_, 0);
    }
    IF_() {
        return this.getToken(SQLiteParser.IF_, 0);
    }
    IGNORE_() {
        return this.getToken(SQLiteParser.IGNORE_, 0);
    }
    IMMEDIATE_() {
        return this.getToken(SQLiteParser.IMMEDIATE_, 0);
    }
    IN_() {
        return this.getToken(SQLiteParser.IN_, 0);
    }
    INDEX_() {
        return this.getToken(SQLiteParser.INDEX_, 0);
    }
    INDEXED_() {
        return this.getToken(SQLiteParser.INDEXED_, 0);
    }
    INITIALLY_() {
        return this.getToken(SQLiteParser.INITIALLY_, 0);
    }
    INNER_() {
        return this.getToken(SQLiteParser.INNER_, 0);
    }
    INSERT_() {
        return this.getToken(SQLiteParser.INSERT_, 0);
    }
    INSTEAD_() {
        return this.getToken(SQLiteParser.INSTEAD_, 0);
    }
    INTERSECT_() {
        return this.getToken(SQLiteParser.INTERSECT_, 0);
    }
    INTO_() {
        return this.getToken(SQLiteParser.INTO_, 0);
    }
    IS_() {
        return this.getToken(SQLiteParser.IS_, 0);
    }
    ISNULL_() {
        return this.getToken(SQLiteParser.ISNULL_, 0);
    }
    JOIN_() {
        return this.getToken(SQLiteParser.JOIN_, 0);
    }
    KEY_() {
        return this.getToken(SQLiteParser.KEY_, 0);
    }
    LEFT_() {
        return this.getToken(SQLiteParser.LEFT_, 0);
    }
    LIKE_() {
        return this.getToken(SQLiteParser.LIKE_, 0);
    }
    LIMIT_() {
        return this.getToken(SQLiteParser.LIMIT_, 0);
    }
    MATCH_() {
        return this.getToken(SQLiteParser.MATCH_, 0);
    }
    NATURAL_() {
        return this.getToken(SQLiteParser.NATURAL_, 0);
    }
    NO_() {
        return this.getToken(SQLiteParser.NO_, 0);
    }
    NOT_() {
        return this.getToken(SQLiteParser.NOT_, 0);
    }
    NOTNULL_() {
        return this.getToken(SQLiteParser.NOTNULL_, 0);
    }
    NULL_() {
        return this.getToken(SQLiteParser.NULL_, 0);
    }
    OF_() {
        return this.getToken(SQLiteParser.OF_, 0);
    }
    OFFSET_() {
        return this.getToken(SQLiteParser.OFFSET_, 0);
    }
    ON_() {
        return this.getToken(SQLiteParser.ON_, 0);
    }
    OR_() {
        return this.getToken(SQLiteParser.OR_, 0);
    }
    ORDER_() {
        return this.getToken(SQLiteParser.ORDER_, 0);
    }
    OUTER_() {
        return this.getToken(SQLiteParser.OUTER_, 0);
    }
    PLAN_() {
        return this.getToken(SQLiteParser.PLAN_, 0);
    }
    PRAGMA_() {
        return this.getToken(SQLiteParser.PRAGMA_, 0);
    }
    PRIMARY_() {
        return this.getToken(SQLiteParser.PRIMARY_, 0);
    }
    QUERY_() {
        return this.getToken(SQLiteParser.QUERY_, 0);
    }
    RAISE_() {
        return this.getToken(SQLiteParser.RAISE_, 0);
    }
    RECURSIVE_() {
        return this.getToken(SQLiteParser.RECURSIVE_, 0);
    }
    REFERENCES_() {
        return this.getToken(SQLiteParser.REFERENCES_, 0);
    }
    REGEXP_() {
        return this.getToken(SQLiteParser.REGEXP_, 0);
    }
    REINDEX_() {
        return this.getToken(SQLiteParser.REINDEX_, 0);
    }
    RELEASE_() {
        return this.getToken(SQLiteParser.RELEASE_, 0);
    }
    RENAME_() {
        return this.getToken(SQLiteParser.RENAME_, 0);
    }
    REPLACE_() {
        return this.getToken(SQLiteParser.REPLACE_, 0);
    }
    RESTRICT_() {
        return this.getToken(SQLiteParser.RESTRICT_, 0);
    }
    RIGHT_() {
        return this.getToken(SQLiteParser.RIGHT_, 0);
    }
    ROLLBACK_() {
        return this.getToken(SQLiteParser.ROLLBACK_, 0);
    }
    ROW_() {
        return this.getToken(SQLiteParser.ROW_, 0);
    }
    ROWS_() {
        return this.getToken(SQLiteParser.ROWS_, 0);
    }
    SAVEPOINT_() {
        return this.getToken(SQLiteParser.SAVEPOINT_, 0);
    }
    SELECT_() {
        return this.getToken(SQLiteParser.SELECT_, 0);
    }
    SET_() {
        return this.getToken(SQLiteParser.SET_, 0);
    }
    TABLE_() {
        return this.getToken(SQLiteParser.TABLE_, 0);
    }
    TEMP_() {
        return this.getToken(SQLiteParser.TEMP_, 0);
    }
    TEMPORARY_() {
        return this.getToken(SQLiteParser.TEMPORARY_, 0);
    }
    THEN_() {
        return this.getToken(SQLiteParser.THEN_, 0);
    }
    TO_() {
        return this.getToken(SQLiteParser.TO_, 0);
    }
    TRANSACTION_() {
        return this.getToken(SQLiteParser.TRANSACTION_, 0);
    }
    TRIGGER_() {
        return this.getToken(SQLiteParser.TRIGGER_, 0);
    }
    UNION_() {
        return this.getToken(SQLiteParser.UNION_, 0);
    }
    UNIQUE_() {
        return this.getToken(SQLiteParser.UNIQUE_, 0);
    }
    UPDATE_() {
        return this.getToken(SQLiteParser.UPDATE_, 0);
    }
    USING_() {
        return this.getToken(SQLiteParser.USING_, 0);
    }
    VACUUM_() {
        return this.getToken(SQLiteParser.VACUUM_, 0);
    }
    VALUES_() {
        return this.getToken(SQLiteParser.VALUES_, 0);
    }
    VIEW_() {
        return this.getToken(SQLiteParser.VIEW_, 0);
    }
    VIRTUAL_() {
        return this.getToken(SQLiteParser.VIRTUAL_, 0);
    }
    WHEN_() {
        return this.getToken(SQLiteParser.WHEN_, 0);
    }
    WHERE_() {
        return this.getToken(SQLiteParser.WHERE_, 0);
    }
    WITH_() {
        return this.getToken(SQLiteParser.WITH_, 0);
    }
    WITHOUT_() {
        return this.getToken(SQLiteParser.WITHOUT_, 0);
    }
    FIRST_VALUE_() {
        return this.getToken(SQLiteParser.FIRST_VALUE_, 0);
    }
    OVER_() {
        return this.getToken(SQLiteParser.OVER_, 0);
    }
    PARTITION_() {
        return this.getToken(SQLiteParser.PARTITION_, 0);
    }
    RANGE_() {
        return this.getToken(SQLiteParser.RANGE_, 0);
    }
    PRECEDING_() {
        return this.getToken(SQLiteParser.PRECEDING_, 0);
    }
    UNBOUNDED_() {
        return this.getToken(SQLiteParser.UNBOUNDED_, 0);
    }
    CURRENT_() {
        return this.getToken(SQLiteParser.CURRENT_, 0);
    }
    FOLLOWING_() {
        return this.getToken(SQLiteParser.FOLLOWING_, 0);
    }
    CUME_DIST_() {
        return this.getToken(SQLiteParser.CUME_DIST_, 0);
    }
    DENSE_RANK_() {
        return this.getToken(SQLiteParser.DENSE_RANK_, 0);
    }
    LAG_() {
        return this.getToken(SQLiteParser.LAG_, 0);
    }
    LAST_VALUE_() {
        return this.getToken(SQLiteParser.LAST_VALUE_, 0);
    }
    LEAD_() {
        return this.getToken(SQLiteParser.LEAD_, 0);
    }
    NTH_VALUE_() {
        return this.getToken(SQLiteParser.NTH_VALUE_, 0);
    }
    NTILE_() {
        return this.getToken(SQLiteParser.NTILE_, 0);
    }
    PERCENT_RANK_() {
        return this.getToken(SQLiteParser.PERCENT_RANK_, 0);
    }
    RANK_() {
        return this.getToken(SQLiteParser.RANK_, 0);
    }
    ROW_NUMBER_() {
        return this.getToken(SQLiteParser.ROW_NUMBER_, 0);
    }
    GENERATED_() {
        return this.getToken(SQLiteParser.GENERATED_, 0);
    }
    ALWAYS_() {
        return this.getToken(SQLiteParser.ALWAYS_, 0);
    }
    STORED_() {
        return this.getToken(SQLiteParser.STORED_, 0);
    }
    TRUE_() {
        return this.getToken(SQLiteParser.TRUE_, 0);
    }
    FALSE_() {
        return this.getToken(SQLiteParser.FALSE_, 0);
    }
    WINDOW_() {
        return this.getToken(SQLiteParser.WINDOW_, 0);
    }
    NULLS_() {
        return this.getToken(SQLiteParser.NULLS_, 0);
    }
    FIRST_() {
        return this.getToken(SQLiteParser.FIRST_, 0);
    }
    LAST_() {
        return this.getToken(SQLiteParser.LAST_, 0);
    }
    FILTER_() {
        return this.getToken(SQLiteParser.FILTER_, 0);
    }
    GROUPS_() {
        return this.getToken(SQLiteParser.GROUPS_, 0);
    }
    EXCLUDE_() {
        return this.getToken(SQLiteParser.EXCLUDE_, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_keyword;
    }
    enterRule(listener) {
        if (listener.enterKeyword) {
            listener.enterKeyword(this);
        }
    }
    exitRule(listener) {
        if (listener.exitKeyword) {
            listener.exitKeyword(this);
        }
    }
    accept(visitor) {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_name;
    }
    enterRule(listener) {
        if (listener.enterName) {
            listener.enterName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitName) {
            listener.exitName(this);
        }
    }
    accept(visitor) {
        if (visitor.visitName) {
            return visitor.visitName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Function_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_function_name;
    }
    enterRule(listener) {
        if (listener.enterFunction_name) {
            listener.enterFunction_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunction_name) {
            listener.exitFunction_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFunction_name) {
            return visitor.visitFunction_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Schema_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_schema_name;
    }
    enterRule(listener) {
        if (listener.enterSchema_name) {
            listener.enterSchema_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSchema_name) {
            listener.exitSchema_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSchema_name) {
            return visitor.visitSchema_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Table_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_table_name;
    }
    enterRule(listener) {
        if (listener.enterTable_name) {
            listener.enterTable_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTable_name) {
            listener.exitTable_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTable_name) {
            return visitor.visitTable_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Table_or_index_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_table_or_index_name;
    }
    enterRule(listener) {
        if (listener.enterTable_or_index_name) {
            listener.enterTable_or_index_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTable_or_index_name) {
            listener.exitTable_or_index_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTable_or_index_name) {
            return visitor.visitTable_or_index_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Column_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_column_name;
    }
    enterRule(listener) {
        if (listener.enterColumn_name) {
            listener.enterColumn_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitColumn_name) {
            listener.exitColumn_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitColumn_name) {
            return visitor.visitColumn_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Collation_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_collation_name;
    }
    enterRule(listener) {
        if (listener.enterCollation_name) {
            listener.enterCollation_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCollation_name) {
            listener.exitCollation_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitCollation_name) {
            return visitor.visitCollation_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Foreign_tableContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_foreign_table;
    }
    enterRule(listener) {
        if (listener.enterForeign_table) {
            listener.enterForeign_table(this);
        }
    }
    exitRule(listener) {
        if (listener.exitForeign_table) {
            listener.exitForeign_table(this);
        }
    }
    accept(visitor) {
        if (visitor.visitForeign_table) {
            return visitor.visitForeign_table(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Index_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_index_name;
    }
    enterRule(listener) {
        if (listener.enterIndex_name) {
            listener.enterIndex_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIndex_name) {
            listener.exitIndex_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitIndex_name) {
            return visitor.visitIndex_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Trigger_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_trigger_name;
    }
    enterRule(listener) {
        if (listener.enterTrigger_name) {
            listener.enterTrigger_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTrigger_name) {
            listener.exitTrigger_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTrigger_name) {
            return visitor.visitTrigger_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class View_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_view_name;
    }
    enterRule(listener) {
        if (listener.enterView_name) {
            listener.enterView_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitView_name) {
            listener.exitView_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitView_name) {
            return visitor.visitView_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Module_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_module_name;
    }
    enterRule(listener) {
        if (listener.enterModule_name) {
            listener.enterModule_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitModule_name) {
            listener.exitModule_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitModule_name) {
            return visitor.visitModule_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Pragma_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_pragma_name;
    }
    enterRule(listener) {
        if (listener.enterPragma_name) {
            listener.enterPragma_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPragma_name) {
            listener.exitPragma_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitPragma_name) {
            return visitor.visitPragma_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Savepoint_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_savepoint_name;
    }
    enterRule(listener) {
        if (listener.enterSavepoint_name) {
            listener.enterSavepoint_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSavepoint_name) {
            listener.exitSavepoint_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSavepoint_name) {
            return visitor.visitSavepoint_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Table_aliasContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_table_alias;
    }
    enterRule(listener) {
        if (listener.enterTable_alias) {
            listener.enterTable_alias(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTable_alias) {
            listener.exitTable_alias(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTable_alias) {
            return visitor.visitTable_alias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Transaction_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_transaction_name;
    }
    enterRule(listener) {
        if (listener.enterTransaction_name) {
            listener.enterTransaction_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTransaction_name) {
            listener.exitTransaction_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTransaction_name) {
            return visitor.visitTransaction_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Window_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_window_name;
    }
    enterRule(listener) {
        if (listener.enterWindow_name) {
            listener.enterWindow_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWindow_name) {
            listener.exitWindow_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitWindow_name) {
            return visitor.visitWindow_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AliasContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_alias;
    }
    enterRule(listener) {
        if (listener.enterAlias) {
            listener.enterAlias(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAlias) {
            listener.exitAlias(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAlias) {
            return visitor.visitAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FilenameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_filename;
    }
    enterRule(listener) {
        if (listener.enterFilename) {
            listener.enterFilename(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFilename) {
            listener.exitFilename(this);
        }
    }
    accept(visitor) {
        if (visitor.visitFilename) {
            return visitor.visitFilename(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Base_window_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_base_window_name;
    }
    enterRule(listener) {
        if (listener.enterBase_window_name) {
            listener.enterBase_window_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBase_window_name) {
            listener.exitBase_window_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitBase_window_name) {
            return visitor.visitBase_window_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Simple_funcContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_simple_func;
    }
    enterRule(listener) {
        if (listener.enterSimple_func) {
            listener.enterSimple_func(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSimple_func) {
            listener.exitSimple_func(this);
        }
    }
    accept(visitor) {
        if (visitor.visitSimple_func) {
            return visitor.visitSimple_func(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Aggregate_funcContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_aggregate_func;
    }
    enterRule(listener) {
        if (listener.enterAggregate_func) {
            listener.enterAggregate_func(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAggregate_func) {
            listener.exitAggregate_func(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAggregate_func) {
            return visitor.visitAggregate_func(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Table_function_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_table_function_name;
    }
    enterRule(listener) {
        if (listener.enterTable_function_name) {
            listener.enterTable_function_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTable_function_name) {
            listener.exitTable_function_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitTable_function_name) {
            return visitor.visitTable_function_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class Any_nameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IDENTIFIER() {
        return this.getToken(SQLiteParser.IDENTIFIER, 0);
    }
    keyword() {
        return this.getRuleContext(0, KeywordContext);
    }
    STRING_LITERAL() {
        return this.getToken(SQLiteParser.STRING_LITERAL, 0);
    }
    OPEN_PAR() {
        return this.getToken(SQLiteParser.OPEN_PAR, 0);
    }
    any_name() {
        return this.getRuleContext(0, Any_nameContext);
    }
    CLOSE_PAR() {
        return this.getToken(SQLiteParser.CLOSE_PAR, 0);
    }
    get ruleIndex() {
        return SQLiteParser.RULE_any_name;
    }
    enterRule(listener) {
        if (listener.enterAny_name) {
            listener.enterAny_name(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAny_name) {
            listener.exitAny_name(this);
        }
    }
    accept(visitor) {
        if (visitor.visitAny_name) {
            return visitor.visitAny_name(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
