var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var QUESTIONS = [];

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay('Welcome to the extraordinary ES5 npm module generator!'));
    this.prompt(QUESTIONS, function (answers) {
      this.answers = answers;
      done();
    }.bind(this));
  },

  writing: function () {
    this.directory(this.sourceRoot(), this.destinationPath());
  },

  install: function () {
    this.installDependencies();
  }
});
