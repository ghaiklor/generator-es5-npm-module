var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('app', function () {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../generators/app'))
      .withOptions({skipInstall: true})
      .withPrompts({
        'module:license': 'MIT'
      })
      .on('end', done);
  });

  it('Should create root files', function () {
    assert.file([
      'lib/index.js',
      'test/unit/index.test.js',
      'test/bootstrap.test.js',
      'test/mocha.opts',
      'CHANGELOG.md',
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      '.npmignore',
      '.travis.yml',
      'index.js',
      'LICENSE',
      'package.json',
      'README.md'
    ]);
  });
});
