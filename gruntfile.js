'use strict'

module.exports = grunt => {
  grunt.loadTasks('tasks')
  grunt.initConfig({
    remark: {
      src: ['*.md'],
      options: {
        output: true
      }
    }
  })
  grunt.registerTask('default', ['remark'])
}
