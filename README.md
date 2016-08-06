# grunt-remark

> Process markdown with [remark](http://remark.js.org/)

## example

``` js
'use strict';

module.exports = grunt => {
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-remark');
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
