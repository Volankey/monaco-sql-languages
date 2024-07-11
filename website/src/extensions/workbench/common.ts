export const languages = [
	'FlinkSQL',
	'SparkSQL',
	'HiveSQL',
	'MySQL',
	'PGSQL',
	'TrinoSQL',
	'ImpalaSQL',
	'SQLITE',
	'Mongo'
];

export const defaultLanguage = 'Mongo';

export const defaultEditorTab = {
	id: `fixedTab`,
	name: defaultLanguage,
	data: {
		value: ``,
		language: defaultLanguage.toLowerCase()
	}
};

export const defaultLanguageStatusItem = {
	id: `fixedStatusItem`,
	name: defaultLanguage,
	sortIndex: 3
};
