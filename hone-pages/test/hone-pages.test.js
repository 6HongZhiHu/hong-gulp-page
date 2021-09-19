const test = require('ava')
const honePages = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => honePages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(honePages('w'), 'w@zce.me')
  t.is(honePages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
