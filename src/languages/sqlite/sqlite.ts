import { TokenClassConsts } from '../../common/constants';
import type { languages } from '../../fillers/monaco-editor-core';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

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
		{ open: "'", close: "'" }
	],
	surroundingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" }
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

	// Only consider reserved keywords
	keywords: [
		'ABORT',
		'ACTION',
		'ADD',
		'AFTER',
		'ALL',
		'ALTER',
		'ANALYZE',
		'AND',
		'AS',
		'ASC',
		'ATTACH',
		'AUTOINCREMENT',
		'BEFORE',
		'BEGIN',
		'BETWEEN',
		'BY',
		'CASCADE',
		'CASE',
		'CAST',
		'CHECK',
		'COLLATE',
		'COLUMN',
		'COMMIT',
		'CONFLICT',
		'CONSTRAINT',
		'CREATE',
		'CROSS',
		'CURRENT_DATE',
		'CURRENT_TIME',
		'CURRENT_TIMESTAMP',
		'DATABASE',
		'DEFAULT',
		'DEFERRABLE',
		'DEFERRED',
		'DELETE',
		'DESC',
		'DETACH',
		'DISTINCT',
		'DROP',
		'EACH',
		'ELSE',
		'END',
		'ESCAPE',
		'EXCEPT',
		'EXCLUSIVE',
		'EXISTS',
		'EXPLAIN',
		'FAIL',
		'FOR',
		'FOREIGN',
		'FROM',
		'FULL',
		'GLOB',
		'GROUP',
		'HAVING',
		'IF',
		'IGNORE',
		'IMMEDIATE',
		'IN',
		'INDEX',
		'INDEXED',
		'INITIALLY',
		'INNER',
		'INSERT',
		'INSTEAD',
		'INTERSECT',
		'INTO',
		'IS',
		'ISNULL',
		'JOIN',
		'KEY',
		'LEFT',
		'LIKE',
		'MATCH',
		'NATURAL',
		'NO',
		'NOT',
		'NOTNULL',
		'NULL',
		'OF',
		'OFFSET',
		'ON',
		'OR',
		'ORDER',
		'OUTER',
		'PLAN',
		'PRAGMA',
		'PRIMARY',
		'QUERY',
		'RAISE',
		'RECURSIVE',
		'REFERENCES',
		'REGEXP',
		'REINDEX',
		'RELEASE',
		'RENAME',
		'REPLACE',
		'RESTRICT',
		'RIGHT',
		'ROLLBACK',
		'ROW',
		'SAVEPOINT',
		'SELECT',
		'SET',
		'TABLE',
		'TEMP',
		'TEMPORARY',
		'THEN',
		'TO',
		'TRANSACTION',
		'TRIGGER',
		'UNION',
		'UNIQUE',
		'UPDATE',
		'USING',
		'VACUUM',
		'VALUES',
		'VIEW',
		'VIRTUAL',
		'WHEN',
		'WHERE',
		'WITH',
		'WITHOUT'
	],

	operators: [
		'=',
		'>',
		'<',
		'<=',
		'>=',
		'<>',
		'!=',
		'IN',
		'LIKE',
		'GLOB',
		'IS',
		'NOT',
		'AND',
		'OR',
		'NOT',
		'BETWEEN',
		'EXISTS',
		'CASE',
		'WHEN',
		'THEN',
		'ELSE',
		'END'
	],

	// we include these common regular expressions
	symbols: /[=><!~?:&|+\-*\/\^%]+/,
	escapes: /''|""|'([^']|\\.)*'|"[^"]*"/,
	pseudoColumns: [
		// Not support
	],
	// The main tokenizer for our languages
	tokenizer: {
		root: [
			{ include: '@comments' },
			{ include: '@whitespace' },
			{ include: '@pseudoColumns' },
			{ include: '@strings' },
			{ include: '@complexOperators' },
			{ include: '@numbers' },

			[/[\(\)\[\]\{\}]/, '@brackets'],

			[/[;,.]/, TokenClassConsts.DELIMITER],
			// identifiers and keywords
			[
				/[\w@]+/,
				{
					cases: {
						'@operators': TokenClassConsts.OPERATOR_KEYWORD,
						'@keywords': TokenClassConsts.KEYWORD,
						'@default': TokenClassConsts.IDENTIFIER
					}
				}
			],
			[/[<>=!%&+\-*/|~^]/, TokenClassConsts.OPERATOR_SYMBOL],

			// numbers
			[/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
			[/\d+/, 'number'],

		],

		comments: [
			[/--+.*/, TokenClassConsts.COMMENT],
			[/#+.*/, TokenClassConsts.COMMENT],
			[/\/\*/, { token: TokenClassConsts.COMMENT_QUOTE, next: '@comment' }]
		],
		whitespace: [[/\s+/, TokenClassConsts.WHITE]],
		comment: [
			[/[^*/]+/, TokenClassConsts.COMMENT],
			// Not supporting nested comments, as nested comments seem to not be standard?
			// i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic
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
		numbers: [
			[/0[xX][0-9a-fA-F]*/, TokenClassConsts.NUMBER_HEX],
			[/[$][+-]*\d*(\.\d*)?/, TokenClassConsts.NUMBER],
			[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, TokenClassConsts.NUMBER]
		],
		strings: [
			[/'/, { token: TokenClassConsts.STRING, next: '@stringSingle' }],
			[/"/, { token: TokenClassConsts.STRING, next: '@stringDouble' }]
		],
		stringSingle: [
			[/\\'/, TokenClassConsts.STRING_ESCAPE],
			[/[^']+/, TokenClassConsts.STRING_ESCAPE],
			[/''/, TokenClassConsts.STRING],
			[/'/, { token: TokenClassConsts.STRING, next: '@pop' }]
		],
		stringDouble: [
			[/[^"]+/, TokenClassConsts.STRING_ESCAPE],
			[/""/, TokenClassConsts.STRING],
			[/"/, { token: TokenClassConsts.STRING, next: '@pop' }]
		],
		scopes: [
			// NOT SUPPORTED
		],
		complexOperators: [
			[/IS\s+NOT\s+(NULL)?\b/i, { token: TokenClassConsts.OPERATOR_KEYWORD }],
			[/IS\s+NULL\b/i, { token: TokenClassConsts.OPERATOR_KEYWORD }],
			[/NOT\s+(IN|LIKE|REGEXP)\b/i, { token: TokenClassConsts.OPERATOR_KEYWORD }],
			[/PROCEDURE\s+ANALYSE\b/i, { token: TokenClassConsts.OPERATOR_KEYWORD }],
			[/SOUNDS\s+LIKE\b/i, { token: TokenClassConsts.OPERATOR_KEYWORD }],
			[/MEMBER\s+OF\b/i, { token: TokenClassConsts.OPERATOR_KEYWORD }]
		]
	}
};
