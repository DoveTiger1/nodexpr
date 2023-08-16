const secret = 'do not share';

// share
const john = 'john';
const peter = 'peter';
module.exports = {john, peter};

console.log(module);

const _ = require('lodash');
const nestedArr = [1, [2, [3, [4]]]];
console.log(_.flattenDeep(nestedArr));
