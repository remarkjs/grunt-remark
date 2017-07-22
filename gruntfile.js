'use strict';

module.exports = (grunt) => {
  grunt.loadTasks('tasks');
  grunt.initConfig({
    remark: {
      src: ['*.md'],
    },
  });
  grunt.registerTask('default', ['remark']);
};
