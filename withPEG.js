var PEG = require('pegjs');

var parser = PEG.buildParser("      \
operation = andcheck or             \
or = 'v' andcheck or                \
andcheck = digitcheck and           \
and = '&and;' digitcheck and        \
digitcheck = '&not;'digit / digit   \
digit = '('operation')' / 1 / 0     \
");
parser.parse()