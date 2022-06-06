const test = require('ava');

const config = require('..');

test('equals', (t) => {
  t.deepEqual(config, ['defaults', 'not ie 11']);
});
