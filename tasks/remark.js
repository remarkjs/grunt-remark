'use strict';

var remark = require('remark');
var engine = require('unified-engine');

module.exports = function(grunt) {
  grunt.registerMultiTask('remark', 'Process markdown with remark', function() {
    var done = this.async();
    var files = this.filesSrc;
    var options = this.options({
      processor: remark,
      files: files,
      extensions: ['md', 'markdown', 'mkd', 'mkdn', 'mkdown'],
      pluginPrefix: 'remark',
      rcName: '.remarkrc',
      packageField: 'remarkConfig',
      ignoreName: '.remarkignore',
      color: true
    });

    engine(options, function(err, status) {
      if (err || status) grunt.fail.warn(err || 'Unsuccessful running');
      done();
    });
  });
};
