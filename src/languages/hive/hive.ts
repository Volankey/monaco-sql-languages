/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type { languages } from '../../fillers/monaco-editor-core';
import { TokenClassConsts } from '../../common/constants';

export const conf: languages.LanguageConfiguration = {
	comments: {
		lineComment: '--',
		blockComment: ['/*', '*/']
	},
	brackets: [
		['{', '}'],
		['[', ']'],
		['(', ')']
	],
	autoClosingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" },
		{ open: '`', close: '`' }
	],
	surroundingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" },
		{ open: '`', close: '`' }
	]
};

export const language = <languages.IMonarchLanguage>{
	defaultToken: '',
	tokenPostfix: '.sql',
	ignoreCase: true,
	brackets: [
		{ open: '[', close: ']', token: TokenClassConsts.DELIMITER_SQUARE },
		{ open: '(', close: ')', token: TokenClassConsts.DELIMITER_PAREN },
		{ open: '{', close: '}', token: TokenClassConsts.DELIMITER_CURLY }
	],
	keywords: [
		'ALL',
		'ALTER',
		'AND',
		'ANTI',
		'ANY',
		'APPLICATION',
		'ARRAY',
		'AS',
		'AUTHORIZATION',
		'BETWEEN',
		'BIGINT',
		'BINARY',
		'BOOLEAN',
		'BOTH',
		'BY',
		'CASE',
		'CAST',
		'CHAR',
		'COLUMN',
		'COMMIT',
		'COMPACTIONID',
		'CONF',
		'CONSTRAINT',
		'CREATE',
		'CROSS',
		'CUBE',
		'CURRENT',
		'CURRENT_DATE',
		'CURRENT_TIMESTAMP',
		'CURSOR',
		'DATABASE',
		'CONNECTOR',
		'CONNECTORS',
		'DATE',
		'DDL',
		'DEC',
		'DECIMAL',
		'NUMERIC',
		'DELETE',
		'DESCRIBE',
		'DISTINCT',
		'DOUBLE',
		'DROP',
		'RECOVER',
		'ELSE',
		'END',
		'EXCEPT',
		'EXCHANGE',
		'EXISTS',
		'EXTENDED',
		'EXTERNAL',
		'EXTRACT',
		'FALSE',
		'FETCH',
		'FLOAT',
		'FLOOR',
		'FOLLOWING',
		'FOR',
		'FORCE',
		'FOREIGN',
		'FROM',
		'FULL',
		'FUNCTION',
		'GRANT',
		'GROUP',
		'GROUPING',
		'HAVING',
		'IF',
		'IMPORT',
		'IN',
		'INNER',
		'INSERT',
		'INT',
		'INTEGER',
		'INTERSECT',
		'INTERVAL',
		'INTO',
		'IS',
		'JOIN',
		'$KEY$',
		'LATERAL',
		'LEADING',
		'LEFT',
		'LESS',
		'LIKE',
		'LOCAL',
		'MACRO',
		'MAP',
		'MERGE',
		'MINUS',
		'MORE',
		'NONE',
		'NOT',
		'NULL',
		'OF',
		'ON',
		'ONLY',
		'OR',
		'ORDER',
		'OUT',
		'OUTER',
		'OVER',
		'PARTITION',
		'PERCENT',
		'PKFK_JOIN',
		'PRECEDING',
		'PRECISION',
		'PREPARE',
		'PRESERVE',
		'PRIMARY',
		'PROCEDURE',
		'QUALIFY',
		'RANGE',
		'READS',
		'REAL',
		'REDUCE',
		'REFERENCES',
		'REGEXP',
		'REVOKE',
		'RIGHT',
		'RLIKE',
		'ROLLBACK',
		'ROLLUP',
		'ROW',
		'ROWS',
		'SELECT',
		'SET',
		'SMALLINT',
		'SOME',
		'START',
		'SYNC',
		'TABLE',
		'TABLESAMPLE',
		'THEN',
		'TIME',
		'TIMESTAMP',
		'TIMESTAMPLOCALTZ',
		'TO',
		'TRAILING',
		'TRANSFORM',
		'TRIGGER',
		'TRUE',
		'TRUNCATE',
		'UNBOUNDED',
		'UNION',
		'UNIQUE',
		'UNIQUEJOIN',
		'UPDATE',
		'USER',
		'USING',
		'UTC_TMESTAMP',
		'VALUES',
		'VARCHAR',
		'WHEN',
		'WHERE',
		'WINDOW',
		'WITH',
		// part of non-reserved keywords which is common
		'ADD',
		'ANALYZE',
		'ASC',
		'AT',
		'CASCADE',
		'CHANGE',
		'COMMENT',
		'COMPUTE',
		'DEFAULT',
		'DESC',
		'DISABLE',
		'EVERY',
		'EXECUTE',
		'EXPLAIN',
		'FILE',
		'FILEFORMAT',
		'FORMAT',
		'FORMATTED',
		'INDEX',
		'KEY',
		'KEYS',
		'LIMIT',
		'LOAD',
		'LOCATION',
		'OFFSET',
		'OVERWRITE',
		'PARTITIONED',
		'PURGE',
		'RELOAD',
		'RENAME',
		'REPLACE',
		'REWRITE',
		'ROLE',
		'SCHEMA',
		'SHOW',
		'SORT',
		'SORTED',
		'STRING',
		'TOUCH',
		'USE',
		'UNLOCK',
		'VIEW'
	],
	operators: [
		// https://cwiki.apache.org/confluence/display/Hive/LanguageManual+UDF#LanguageManualUDF-Built-inOperators
		// Relational Operators
		'BETWEEN',
		'IS',
		'LIKE',
		'RLIKE',
		'REGEXP',
		// Arithmetic Operators
		'DIV',
		// Logical Operators
		'NOT',
		'AND',
		'OR',
		'NOT',
		'IN',
		'EXISTS',
		// join https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Joins#LanguageManualJoins-JoinSyntax
		'JOIN',
		'INNER',
		'OUTER',
		'LEFT',
		'RIGHT',
		'FULL',
		'CROSS',
		'SEMI',
		// Set
		'EXCEPT',
		'INTERSECT',
		'UNION',
		'MINUS'
	],
	builtinFunctions: [
		// https://cwiki.apache.org/confluence/display/Hive/LanguageManual+UDF#LanguageManualUDF-Built-inFunctions
		// Mathematical Functions
		'ROUND',
		'BROUND',
		'FLOOR',
		'CEIL',
		'RAND',
		'EXP',
		'LN',
		'LOG10',
		'LOG2',
		'LOG',
		'POW',
		'POWER',
		'SQRT',
		'BIN',
		'HEX',
		'UNHEX',
		'CONV',
		'ABS',
		'PMOD',
		'SIN',
		'ASIN',
		'COS',
		'ACOS',
		'TAN',
		'ATAN',
		'DEGREES',
		'RADIANS',
		'POSITIVE',
		'NEGATIVE',
		'SIGN',
		'E',
		'PI',
		'FACTORIAL',
		'CBRT',
		'SHIFTLEFT',
		'SHIFTRIGHT',
		'GREATEST',
		'LEAST',
		'WIDTH_BUCKET',
		// Collection Functions
		'SIZE',
		'MAP_KEYS',
		'MAP_VALUES',
		'ARRAY_CONTAINS',
		'SORT_ARRAY',
		// Type Conversion Functions
		'BINARY',
		'CAST',
		// Date Functions
		'FROM_UNIXTIME',
		'UNIX_TIMESTAMP',
		'TO_DATE',
		'YEAR',
		'QUARTER',
		'MONTH',
		'DAY',
		'HOUR',
		'MINUTE',
		'SECOND',
		'WEEKOFYEAR',
		'EXTRACT',
		'DATEDIFF',
		'DATE_ADD',
		'DATE_SUB',
		'FROM_UTC_TIMESTAMP',
		'TO_UTC_TIMESTAMP',
		'CURRENT_DATE',
		'CURRENT_TIMESTAMP',
		'ADD_MONTHS',
		'LAST_DAY',
		'NEXT_DAY',
		'TRUNC',
		'MONTHS_BETWEEN',
		'DATE_FORMAT',
		// Conditional Functions
		'ASSERT_TRUE',
		'COALESCE',
		'ISNOTNULL',
		'ISNULL',
		'NULLIF',
		'NVL',
		// String Functions
		'ASCII',
		'BASE64',
		'CHARACTER_LENGTH',
		'CHR',
		'CONCAT',
		'CONTEXT_NGRAMS',
		'CONCAT_WS',
		'DECODE',
		'ELT',
		'ENCODE',
		'FIELD',
		'FIND_IN_SET',
		'FORMAT_NUMBER',
		'GET_JSON_OBJECT',
		'IN_FILE',
		'INSTR',
		'LENGTH',
		'LOCATE',
		'LOWER',
		'LPAD',
		'LTRIM',
		'NGRAMS',
		'OCTET_LENGTH',
		'PARSE_URL',
		'PRINTF',
		'QUOTE',
		'REGEXP_EXTRACT',
		'REGEXP_REPLACE',
		'REPEAT',
		'REPLACE',
		'REVERSE',
		'RPAD',
		'RTRIM',
		'SENTENCES',
		'SPACE',
		'SPLIT',
		'STR_TO_MAP',
		'SUBSTR',
		'SUBSTRING',
		'SUBSTRING_INDEX',
		'TRANSLATE',
		'TRIM',
		'UNBASE64',
		'UPPER',
		'INITCAP',
		'LEVENSHTEIN',
		'SOUNDEX',
		// Data Masking Functions
		'MASK',
		'MASK_FIRST_N',
		'MASK_LAST_N',
		'MASK_SHOW_FIRST_N',
		'MASK_SHOW_LAST_N',
		'MASK_HASH',
		// Misc. Functions
		'JAVA_METHOD',
		'REFLECT',
		'HASH',
		'CURRENT_USER',
		'LOGGED_IN_USER',
		'CURRENT_DATABASE',
		'MD5',
		'SHA1',
		'SHA',
		'CRC32',
		'SHA2',
		'AES_ENCRYPT',
		'VERSION',
		'SURROGATE_KEY',
		// Built-in Aggregate Functions (UDAF)
		'COUNT',
		'SUM',
		'AVG',
		'MIN',
		'MAX',
		'VARIANCE',
		'VAR_POP',
		'VAR_SAMP',
		'STDDEV_POP',
		'STDDEV_SAMP',
		'COVAR_POP',
		'COVAR_SAMP',
		'CORR',
		'PERCENTILE',
		'PERCENTILE_APPROX',
		'REGR_AVGX',
		'REGR_AVGY',
		'REGR_COUNT',
		'REGR_INTERCEPT',
		'REGR_R2',
		'REGR_SLOPE',
		'REGR_SXX',
		'REGR_SXY',
		'REGR_SYY',
		'HISTOGRAM_NUMERIC',
		'COLLECT_SET',
		'COLLECT_LIST',
		'NTILE',
		// Built-in Table-Generating Functions (UDTF)
		'EXPLODE',
		'POSEXPLODE',
		'INLINE',
		'STACK',
		'JSON_TUPLE',
		'PARSE_URL_TUPLE'
	],
	builtinVariables: [
		// Not support
	],
	typeKeywords: [
		// https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Types#LanguageManualTypes
		// Numeric Types
		'TINYINT',
		'SMALLINT',
		'INT',
		'INTEGER',
		'BIGINT',
		'FLOAT',
		'DOUBLE',
		'DECIMAL',
		'NUMERIC',
		// Date/Time Types
		'TIMESTAMP',
		'DATE',
		'INTERVAL',
		// String Types
		'STRING',
		'VARCHAR',
		'CHAR',
		// Misc Types
		'BOOLEAN',
		'BINARY',
		// Complex Types
		'ARRAY',
		'MAP',
		'STRUCT',
		'UNIONTYPE'
	],
	scopeKeywords: ['CASE', 'END', 'WHEN', 'THEN', 'ELSE'],
	pseudoColumns: [
		// Not support
	],
	tokenizer: {
		root: [
			{ include: '@comments' },
			{ include: '@whitespace' },
			{ include: '@pseudoColumns' },
			{ include: '@customParams' },
			{ include: '@numbers' },
			{ include: '@strings' },
			{ include: '@complexIdentifiers' },
			{ include: '@scopes' },
			{ include: '@complexDataTypes' },
			[/[;,.]/, TokenClassConsts.DELIMITER],
			[/[\(\)\[\]\{\}]/, '@brackets'],
			[
				/[\w@#$]+/,
				{
					cases: {
						'@scopeKeywords': TokenClassConsts.KEYWORD_SCOPE,
						'@operators': TokenClassConsts.OPERATOR_KEYWORD,
						'@typeKeywords': TokenClassConsts.TYPE,
						'@builtinVariables': TokenClassConsts.VARIABLE,
						'@builtinFunctions': TokenClassConsts.PREDEFINED,
						'@keywords': TokenClassConsts.KEYWORD,
						'@default': TokenClassConsts.IDENTIFIER
					}
				}
			],
			[/[<>=!%&+\-*/|~^]/, TokenClassConsts.OPERATOR_SYMBOL]
		],
		whitespace: [[/[\s\t\r\n]+/, TokenClassConsts.WHITE]],
		comments: [
			[/--+.*/, TokenClassConsts.COMMENT],
			[/\/\*/, { token: TokenClassConsts.COMMENT_QUOTE, next: '@comment' }]
		],
		comment: [
			[/[^*/]+/, TokenClassConsts.COMMENT],
			// [/\/\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(
			[/\*\//, { token: TokenClassConsts.COMMENT_QUOTE, next: '@pop' }],
			[/./, TokenClassConsts.COMMENT]
		],
		pseudoColumns: [
			[
				/[$][A-Za-z_][\w@#$]*/,
				{
					cases: {
						'@pseudoColumns': TokenClassConsts.PREDEFINED,
						'@default': TokenClassConsts.IDENTIFIER
					}
				}
			]
		],
		customParams: [
			[/\${[A-Za-z0-9._-]*}/, TokenClassConsts.VARIABLE],
			[/\@\@{[A-Za-z0-9._-]*}/, TokenClassConsts.VARIABLE]
		],
		numbers: [
			[/0[xX][0-9a-fA-F]*/, TokenClassConsts.NUMBER_HEX],
			[/[$][+-]*\d*(\.\d*)?/, TokenClassConsts.NUMBER],
			[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, TokenClassConsts.NUMBER]
		],
		strings: [
			// https://cwiki.apache.org/confluence/display/Hive/Literals
			[/'/, { token: TokenClassConsts.STRING, next: '@string_single' }],
			[/"/, { token: TokenClassConsts.STRING, next: '@string_double' }]
		],
		string_single: [
			[/[^']+/, TokenClassConsts.STRING_ESCAPE],
			[/''/, TokenClassConsts.STRING],
			[/'/, { token: TokenClassConsts.STRING, next: '@pop' }]
		],
		string_double: [
			[/[^"]+/, TokenClassConsts.STRING_ESCAPE],
			[/""/, TokenClassConsts.STRING],
			[/"/, { token: TokenClassConsts.STRING, next: '@pop' }]
		],
		complexIdentifiers: [
			[/`/, { token: TokenClassConsts.IDENTIFIER_QUOTE, next: '@quotedIdentifier' }]
		],
		quotedIdentifier: [
			[/[^`]+/, TokenClassConsts.IDENTIFIER_QUOTE],
			[/``/, TokenClassConsts.IDENTIFIER_QUOTE],
			[/`/, { token: TokenClassConsts.IDENTIFIER_QUOTE, next: '@pop' }]
		],
		scopes: [
			// Not Support
		],
		complexDataTypes: [[/DOUBLE\s+PRECISION\b/i, { token: TokenClassConsts.TYPE }]]
	}
};
