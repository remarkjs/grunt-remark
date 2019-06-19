# grunt-remark

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[Grunt][] task for [**remark**][remark] — Markdown processor powered by plugins.

## Install

[npm][]:

```sh
npm install --save-dev grunt-remark
```

## Use

```js
'use strict'

module.exports = grunt => {
  grunt.loadNpmTasks('grunt-remark')
  grunt.loadTasks('tasks')
  grunt.initConfig({
    remark: {
      src: ['*.md']
    }
  })
  grunt.registerTask('default', ['remark'])
}
```

## Options

See full list of options at [`unified-engine`][options].

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © Christian Murphy

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/remarkjs/grunt-remark/master.svg

[build]: https://travis-ci.org/remarkjs/grunt-remark

[downloads-badge]: https://img.shields.io/npm/dm/grunt-remark.svg

[downloads]: https://www.npmjs.com/package/grunt-remark

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/remark

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/master/contributing.md

[support]: https://github.com/remarkjs/.github/blob/master/support.md

[coc]: https://github.com/remarkjs/.github/blob/master/code-of-conduct.md

[license]: license

[remark]: https://github.com/remarkjs/remark

[grunt]: https://gruntjs.com

[options]: https://github.com/unifiedjs/unified-engine#options
