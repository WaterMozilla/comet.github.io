const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Comet',
    description:
      '#### 保证：   - 每个UI组件都一个完整的模块，都有自己独立的目录结构，  - 每个组件都可以被独立引用  - 每个组件都要覆盖单元测试 jest enzyme',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/didi/Desktop/Luffy/cometUi/comet/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Comet',
        description:
          '#### 保证：   - 每个UI组件都一个完整的模块，都有自己独立的目录结构，  - 每个组件都可以被独立引用  - 每个组件都要覆盖单元测试 jest enzyme',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/didi/Desktop/Luffy/cometUi/comet',
          templates:
            '/Users/didi/Desktop/Luffy/cometUi/comet/node_modules/docz/node_modules/docz-core/dist/templates',
          docz: '/Users/didi/Desktop/Luffy/cometUi/comet/.docz',
          cache: '/Users/didi/Desktop/Luffy/cometUi/comet/.docz/.cache',
          app: '/Users/didi/Desktop/Luffy/cometUi/comet/.docz/app',
          appPackageJson:
            '/Users/didi/Desktop/Luffy/cometUi/comet/package.json',
          appTsConfig: '/Users/didi/Desktop/Luffy/cometUi/comet/tsconfig.json',
          gatsbyConfig:
            '/Users/didi/Desktop/Luffy/cometUi/comet/gatsby-config.js',
          gatsbyBrowser:
            '/Users/didi/Desktop/Luffy/cometUi/comet/gatsby-browser.js',
          gatsbyNode: '/Users/didi/Desktop/Luffy/cometUi/comet/gatsby-node.js',
          gatsbySSR: '/Users/didi/Desktop/Luffy/cometUi/comet/gatsby-ssr.js',
          importsJs:
            '/Users/didi/Desktop/Luffy/cometUi/comet/.docz/app/imports.js',
          rootJs: '/Users/didi/Desktop/Luffy/cometUi/comet/.docz/app/root.jsx',
          indexJs:
            '/Users/didi/Desktop/Luffy/cometUi/comet/.docz/app/index.jsx',
          indexHtml:
            '/Users/didi/Desktop/Luffy/cometUi/comet/.docz/app/index.html',
          db: '/Users/didi/Desktop/Luffy/cometUi/comet/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
