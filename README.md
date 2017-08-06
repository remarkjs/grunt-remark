# grunt-remark

[![Linux Build Status](https://travis-ci.org/ChristianMurphy/grunt-remark.svg?branch=master)](https://travis-ci.org/ChristianMurphy/grunt-remark)
[![Windows Build status](https://ci.appveyor.com/api/projects/status/dixo63g7304vuuin/branch/master?svg=true)](https://ci.appveyor.com/project/ChristianMurphy/grunt-remark/branch/master)
[![Greenkeeper badge](https://badges.greenkeeper.io/ChristianMurphy/grunt-remark.svg)](https://greenkeeper.io/)
[![dependencies Status](https://david-dm.org/ChristianMurphy/grunt-remark/status.svg)](https://david-dm.org/ChristianMurphy/grunt-remark)
[![devDependencies Status](https://david-dm.org/ChristianMurphy/grunt-remark/dev-status.svg)](https://david-dm.org/ChristianMurphy/grunt-remark?type=dev)

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
