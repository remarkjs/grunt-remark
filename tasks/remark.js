'use strict'

const remark = require('remark')
const engine = require('unified-engine')

module.exports = (grunt) => {
  grunt.registerMultiTask(
    'remark',
    'Process markdown with remark',
    function () {
      const done = this.async()
      const files = this.filesSrc
      const options = this.options({
        processor: remark,
        files: files,
        extensions: ['md', 'markdown', 'mkd', 'mkdn', 'mkdown'],
        pluginPrefix: 'remark',
        rcName: '.remarkrc',
        packageField: 'remarkConfig',
        ignoreName: '.remarkignore',
        color: true
      })

      engine(options, function (err, status) {
        if (err || status) grunt.fail.warn(err || 'Unsuccessful running')
        done()
      })
    }
  )
}
