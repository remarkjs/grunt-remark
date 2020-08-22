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

## Security

Use of [**remark**][remark] and its plugins could open you up to
[cross-site scripting (XSS)][xss] or other attacks.
Carefully assess each plugin and the risks involved in using them.

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

[build-badge]: https://img.shields.io/travis/remarkjs/grunt-remark.svg

[build]: https://travis-ci.org/remarkjs/grunt-remark

[downloads-badge]: https://img.shields.io/npm/dm/grunt-remark.svg

[downloads]: https://www.npmjs.com/package/grunt-remark

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/HEAD/contributing.md

[support]: https://github.com/remarkjs/.github/blob/HEAD/support.md

[coc]: https://github.com/remarkjs/.github/blob/HEAD/code-of-conduct.md

[license]: license

[remark]: https://github.com/remarkjs/remark

[grunt]: https://gruntjs.com

[options]: https://github.com/unifiedjs/unified-engine#options

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
