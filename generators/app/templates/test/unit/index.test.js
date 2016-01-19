var assert = require('chai').assert;
var index = require('../../lib/index');

describe('Entry Point', function () {
  it('Should properly export', function () {
    assert.isObject(index);
  });
});
