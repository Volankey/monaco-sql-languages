const fs = require('fs');
const symbols = [
    { symbol: '?.', token: 'QuestionMarkDot' },
    { symbol: '**', token: 'Power' },
    { symbol: '/', token: 'Divide' },
    { symbol: '%', token: 'Modulus' },
    { symbol: '??', token: 'NullCoalesce' },
    { symbol: '<<', token: 'LeftShiftArithmetic' },
    { symbol: '>>', token: 'RightShiftArithmetic' },
    { symbol: '>>>', token: 'RightShiftLogical' },
    { symbol: '<', token: 'LessThan' },
    { symbol: '>', token: 'MoreThan' },
    { symbol: '<=', token: 'LessThanEquals' },
    { symbol: '>=', token: 'GreaterThanEquals' },
    { symbol: '==', token: 'Equals_' },
    { symbol: '!=', token: 'NotEquals' },
    { symbol: '===', token: 'IdentityEquals' },
    { symbol: '!==', token: 'IdentityNotEquals' },
    { symbol: '&', token: 'BitAnd' },
    { symbol: '^', token: 'BitXOr' },
    { symbol: '|', token: 'BitOr' },
    { symbol: '&&', token: 'And' },
    { symbol: '||', token: 'Or' },
    { symbol: '?', token: 'QuestionMark' },
    { symbol: '=}', token: 'ARROW' },
    { symbol: '*=', token: 'MultiplyAssign' },
    { symbol: '/=', token: 'DivideAssign' },
    { symbol: '%=', token: 'ModulusAssign' },
    { symbol: '+=', token: 'PlusAssign' },
    { symbol: '-=', token: 'MinusAssign' },
    { symbol: '<<=', token: 'LeftShiftArithmeticAssign' },
    { symbol: '>>=', token: 'RightShiftArithmeticAssign' },
    { symbol: '>>>=', token: 'RightShiftLogicalAssign' },
    { symbol: '&=', token: 'BitAndAssign' },
    { symbol: '^=', token: 'BitXorAssign' },
    { symbol: '|=', token: 'BitOrAssign' },
    { symbol: '**=', token: 'PowerAssign' },
    { symbol: '??=', token: 'NullishCoalescingAssign' },
];
let content = fs.readFileSync('./MongoParser.g4', 'utf-8');
symbols.forEach(({ symbol, token }) => {
    content = content.replace(`'${symbol}'`, token);
});
fs.writeFileSync('./MongoParser__.g4', content);
