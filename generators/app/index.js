var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var QUESTIONS = [{
  type: 'input',
  name: 'module:name',
  message: 'Module name'
}, {
  type: 'input',
  name: 'module:description',
  message: 'Module description'
}, {
  type: 'input',
  name: 'module:author',
  message: 'Your nickname'
}, {
  type: 'list',
  name: 'module:license',
  message: 'Choose a license',
  choices: [
    'Apache-2.0',
    'Artistic-2.0',
    'BSD-2-Clause',
    'BSD-3-Clause',
    'EPL-1.0',
    'GPL-2.0',
    'GPL-3.0',
    'ISC',
    'LGPL-2.1',
    'LGPL-3.0',
    'MIT',
    'MPL-2.0',
    'Unlicense'
  ]
}];

/**
 * Fetch license text from choosealicense.com
 * @param {String} license License ID
 * @param {Function} cb Callback function with license content as argument
 */
function fetchLicense(license, cb) {
  var username = 'github';
  var repository = 'choosealicense.com';
  var branch = 'gh-pages';
  var cacheRoot = this.cacheRoot();
  var sourceRoot = this.sourceRoot();

  this.remote(username, repository, branch, function (error, remote) {
    if (error) throw new Error(error);

    this.sourceRoot(path.join(cacheRoot, username, repository, branch));
    var content = this.read(['_licenses/', license.toLowerCase(), '.txt'].join('')).replace(/-+[\d\D]*?-+\n\n/, '');
    this.sourceRoot(sourceRoot);

    cb(content);
  }.bind(this));
}

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay('Welcome to the extraordinary ES5 npm module generator!'));
    this.prompt(QUESTIONS, function (answers) {
      this.answers = answers;

      fetchLicense.call(this, this.answers['module:license'], function (content) {
        this.answers['module:license-content'] = content;
        this.write('LICENSE', content);
        done();
      }.bind(this));
    }.bind(this));
  },

  writing: function () {
    this.directory(this.sourceRoot(), this.destinationPath());
  },

  install: function () {
    this.npmInstall();
  }
});
