# grunt-remark [![Build Status](https://travis-ci.org/ChristianMurphy/grunt-remark.svg?branch=master)](https://travis-ci.org/ChristianMurphy/grunt-remark)

> Process markdown with [remark](http://remark.js.org/)

## example

``` js
'use strict';

module.exports = grunt => {
  grunt.loadNpmTasks('grunt-remark');
  grunt.loadTasks('tasks');
  grunt.initConfig({
    remark: {
      src: ['*.md']
    }
  });
  grunt.registerTask('default', ['remark']);
};
```

## options

See full list of options [here](https://github.com/wooorm/unified-engine-gulp#options).
