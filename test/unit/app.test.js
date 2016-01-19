"use strict";

const path = require('path');
const assert = require('yeoman-assert');
const test = require('yeoman-test');

describe('es5-npm-module', () => {
  before(done => {
    test
      .run(path.join(__dirname, '../../generators/app'))
      .withPrompts({'module:license': 'MIT'})
      .on('end', done);
  });

  it('Should create root files', () => {
    assert.file([
      'lib/index.js',
      'test/unit/index.test.js',
      'test/mocha.opts',
      '.editorconfig',
      '.gitignore',
      '.npmignore',
      '.travis.yml',
      'LICENSE',
      'package.json',
      'README.md'
    ]);
  });
});
