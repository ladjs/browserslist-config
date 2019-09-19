const test = require('ava');

const config = require('..');

test('equals', t => {
  t.deepEqual(config, ['last 2 versions', '> 1%', 'not dead']);
});
