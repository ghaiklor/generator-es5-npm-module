var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('app', function () {
  before(function (done) {
    helpers
      .run(path.join(__dirname, '../generators/app'))
      .withOptions({skipInstall: true})
      .on('end', done);
  });

  it('Should create root files', function () {
    assert.file([
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      '.npmignore',
      '.travis.yml',
      'index.js',
      'package.json',
      'README.md'
    ]);
  });
});
