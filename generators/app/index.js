var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var QUESTIONS = [];

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay('Welcome to the extraordinary ' + chalk.red('npm module') + ' generator!'));
    this.prompt(QUESTIONS, function (answers) {
      this.answers = answers;
      done();
    }.bind(this));
  },

  writing: function () {
    this.directory(this.sourcePath(), this.destinationPath());
  },

  install: function () {
    this.installDependencies();
  }
});
