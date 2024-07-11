import { TokenClassConsts } from '../../common/constants';
import type { languages } from '../../fillers/monaco-editor-core';

// mongo db language configuration
export const conf: languages.LanguageConfiguration = {
	comments: {
		lineComment: '//',
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

// mongo db language definition
export const language = <languages.IMonarchLanguage>{
	defaultToken: '',
	tokenPost: '.mongo',
	ignoreCase: false,
	brackets: [
		{ open: '[', close: ']', token: TokenClassConsts.DELIMITER_SQUARE },
		{ open: '(', close: ')', token: TokenClassConsts.DELIMITER_PAREN },
		{ open: '{', close: '}', token: TokenClassConsts.DELIMITER_CURLY }
	],
	keywords: [
		'db',
		'aggregate',
		'find',
		'insert',
		'update',
		'delete',
		'create',
		'drop',
		'count',
		'limit',
		'skip',
		'sort',
		'group',
		'match',
		'project',
		'lookup',
		'unwind',
		'out',
		'index',
		'createIndex',
		'dropIndex',
		'createIndexes',
		'listIndexes',
		'createCollection',
		'dropCollection',
		'createUser',
		'updateUser',
		'dropUser',
		'createRole',
		'updateRole',
		'dropRole',
		'grantRolesToRole',
		'revokeRolesFromRole',
		'grantPrivilegesToRole',
		'revokePrivilegesFromRole',
	],
	operators: [
	  "_id",
	  "$_internalInhibitOptimization",
	  "$limit",
	  "$project",
	  "$match",
	  "$sample",
	  "size",
	  "$skip",
	  "$unionWith",
	  "coll",
	  "pipeline",
	  "$expr",
	  "$text",
	  "$where",
	  "$abs",
	  "$acos",
	  "$acosh",
	  "$add",
	  "$and",
	  "$asin",
	  "$asinh",
	  "$atan",
	  "$atan2",
	  "$atanh",
	  "$ceil",
	  "$cmp",
	  "$concat",
	  "$const",
	  "$convert",
	  "$cos",
	  "$cosh",
	  "$dateFromString",
	  "$dateToString",
	  "$degreesToRadians",
	  "$divide",
	  "$elemMatch",
	  "$eq",
	  "$exp",
	  "$floor",
	  "$gt",
	  "$gte",
	  "$indexOfBytes",
	  "$indexOfCP",
	  "$literal",
	  "$ln",
	  "$log",
	  "$log10",
	  "$lt",
	  "$lte",
	  "$ltrim",
	  "$meta",
	  "$mod",
	  "$multiply",
	  "$ne",
	  "$nor",
	  "$not",
	  "$or",
	  "$pow",
	  "$round",
	  "$slice",
	  "$sqrt",
	  "$subtract",
	  "$trunc",
	  "$concat",
	  "$dateFromString",
	  "$dateToString",
	  "$indexOfBytes",
	  "$indexOfCP",
	  "$ltrim",
	  "$meta",
	  "$radiansToDegrees",
	  "$regexFind",
	  "$regexFindAll",
	  "$regexMatch",
	  "$replaceAll",
	  "$replaceOne",
	  "$round",
	  "$rtrim",
	  "$sin",
	  "$sinh",
	  "$split",
	  "$sqrt",
	  "$strcasecmp",
	  "$strLenBytes",
	  "$strLenCP",
	  "$substr",
	  "$substrBytes",
	  "$substrCP",
	  "$subtract",
	  "$tan",
	  "$tanh",
	  "$toBool",
	  "$toDate",
	  "$toDecimal",
	  "$toDouble",
	  "$toInt",
	  "$toLong",
	  "$toLower",
	  "$toObjectId",
	  "$toString",
	  "$toUpper",
	  "$trim",
	  "$trunc",
	  "$type",
	  "chars",
	  "date",
	  "$comment",
	  "$exists",
	  "dateString",
	  "find",
	  "format",
	  "input",
	  "onError",
	  "onNull",
	  "options",
	  "find",
	  "regex",
	  "replacement",
	  "$allElementsTrue",
	  "$anyElementTrue",
	  "$setDifference",
	  "$setEquals",
	  "$setIntersection",
	  "$setIsSubset",
	  "$setUnion",
	  "timezone",
	  "to",
	  "minute",
	  "second",
	  "millisecond",
	  "day",
	  "isoDayOfWeek",
	  "isoWeek",
	  "isoWeekYear",
	  "iso8601",
	  "month",
	  "year",
	  "hour",
	  "$dateFromParts",
	  "$dateToParts",
	  "$dayOfMonth",
	  "$dayOfWeek",
	  "$dayOfYear",
	  "$hour",
	  "$isoDayOfWeek",
	  "$isoWeek",
	  "$isoWeekYear",
	  "$millisecond",
	  "$minute",
	  "$month",
	  "$second",
	  "$week",
	  "$year",
	  "$search",
	  "$language",
	  "$caseSensitive",
	  "$diacriticSensitive",
	  "$mod",
	  "$arrayElemAt",
	  "$arrayToObject",
	  "$concatArrays",
	  "$filter",
	  "$first",
	  "$in",
	  "$indexOfArray",
	  "$isArray",
	  "as",
	  "cond"
	],
	symbols: /[=><!~?:&|+\-*\/\^%]+/,
	escapes: /''|""|'([^']|\\.)*'|"[^"]*"/,
	pseudoColumns: [
		// Not support
	],
	tokenizer: {
		root: [
			{ include: '@comments' },
			{ include: '@whitespace' },
			{ include: '@pseudoColumns' },
			{ include: '@strings' },
			{ include: '@complexOperators' },
			{ include: '@numbers' },

			[/[{}()\[\]]/, '@brackets'],
			[/[<>=!%&+\-*/|~^]/, TokenClassConsts.OPERATOR_SYMBOL],
			[/[;,.]/, TokenClassConsts.DELIMITER],

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
		],
		comments:[
			[/\/\*/, 'comment', '@comment'],
			[/\/\/.*$/, 'comment'],
		],
		whitespace: [
			[/\s+/, TokenClassConsts.WHITE]
		],
		comment:[
			[/[^*/]+/, TokenClassConsts.COMMENT],
			[/\*\//, { token: TokenClassConsts.COMMENT_QUOTE, next: '@pop' }],
			[/[*/]/, TokenClassConsts.COMMENT]
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
			[/\d*\.\d+([eE][\-+]?\d+)?/, TokenClassConsts.NUMBER_FLOAT],
			[/\d+/, TokenClassConsts.NUMBER]
		],
		strings:[
			[/"/, { token: TokenClassConsts.STRING, next: '@stringSingle' }],
			[/'/, { token: TokenClassConsts.STRING, next: '@stringDouble' }]
		],
		stringDouble: [
			[/[^\\']+/, TokenClassConsts.STRING],
			[/\\./, TokenClassConsts.STRING],
			[/'/, TokenClassConsts.STRING, '@pop']
		],
		stringSingle: [
			[/[^\\"]+/, TokenClassConsts.STRING],
			[/\\./, TokenClassConsts.STRING],
			[/"/, TokenClassConsts.STRING, '@pop']
		],
		scopes: [
			[/\s*\{/, { token: 'delimiter.curly', next: '@root' }],
			[/\s*\[/, { token: 'delimiter.square', next: '@root' }],
			[/\s*\(/, { token: 'delimiter.parenthesis', next: '@root' }],
			[/\s+/, ''],
			[/[^{}()\[\]]+/, '']
		],
		complexOperators: [
			[
				/[$][A-Za-z_][\w@#$]*/,
				{
					cases: {
						'@operators': TokenClassConsts.OPERATOR_KEYWORD,
						'@default': TokenClassConsts.IDENTIFIER
					}
				}
			]
		],
	}
};



