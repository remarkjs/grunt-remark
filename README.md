# grunt-remark

<!-- current project status -->

[![npm](https://img.shields.io/npm/v/grunt-remark.svg)](https://www.npmjs.com/package/grunt-remark)
[![Linux Build Status](https://travis-ci.org/ChristianMurphy/grunt-remark.svg?branch=master)](https://travis-ci.org/ChristianMurphy/grunt-remark)
[![Windows Build status](https://ci.appveyor.com/api/projects/status/dixo63g7304vuuin/branch/master?svg=true)](https://ci.appveyor.com/project/ChristianMurphy/grunt-remark/branch/master)
[![Greenkeeper badge](https://badges.greenkeeper.io/ChristianMurphy/grunt-remark.svg)](https://greenkeeper.io/)
[![dependencies Status](https://david-dm.org/ChristianMurphy/grunt-remark/status.svg)](https://david-dm.org/ChristianMurphy/grunt-remark)
[![devDependencies Status](https://david-dm.org/ChristianMurphy/grunt-remark/dev-status.svg)](https://david-dm.org/ChristianMurphy/grunt-remark?type=dev)

<!-- standards and technologies used in project -->

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com/)
[![Semver](http://img.shields.io/SemVer/2.0.0.png)](http://semver.org/spec/v2.0.0.html)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Google code style](https://img.shields.io/badge/code_style-Google-brightgreen.svg?style=flat)](https://google.github.io/styleguide/jsguide.html)

> Process markdown with [remark](http://remark.js.org/)

## example

```js
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

See full list of options
[here](https://github.com/wooorm/unified-engine-gulp#options).
