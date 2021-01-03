module.exports = {
    extends: ['eslint-config-umi'],
    // extends: ['eslint-config-umi', 'prettier'],
    // plugins: ['prettier'],
    // todo 不添加有什么问题吗?
    env: {
        browser: true,
        node: true,
    },
    // parser: 'babel-eslint',
    overrides: [
        {
            files: ['*.ts?(x)'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                warnOnUnsupportedTypeScriptVersion: true,
            },
            plugins: ['@typescript-eslint'],
            rules: {},
        },
    ],
    rules: {
        semi: 1,
        'max-len': ['error', 140], // 增加了每一行的最大字符数
        indent: ['error', 4], // 统一缩进为4个空格。4个空格可以带来更明显的缩进效果，从而使代码更具层次，
        'no-plusplus': ['off'], // 允许使用++运算符
        'class-methods-use-this': ['off'], // 在class中，不必将没有使用this的方法转换成静态方法
        'func-names': ['off'], // 允许匿名函数
        'object-curly-newline': [
            'error',
            {
                // 允许对象属性， 写成单行或者多行
                ObjectPattern: { multiline: true },
            },
        ],

        'react/jsx-indent': ['error', 4], // 统一jsx标签的缩进
        'react/jsx-indent-props': ['error', 4], // 统一jsx属性的缩进
        'react/jsx-filename-extension': ['off'], // 不强制文件jsx后缀
        'react/jsx-props-no-spreading': ['off'], // 不禁止jsx上使用解构
        'react/static-property-placement': ['error', 'static public field'], // 统一静态属性的位置
        'react/destructuring-assignment': [
            'error',
            'always',
            { ignoreClassFields: true },
        ], // 使用解构语法， 类的属性除外
        'react/state-in-constructor': ['off'], // state不需要放到constructor
        'jsx-a11y/click-events-have-key-events': ['off'], // 取消点击事件必须加key事件
        'jsx-a11y/no-noninteractive-element-interactions': ['off'], // 取消非互动元素必须添加role属性
        'jsx-a11y/no-static-element-interactions': ['off'], // 取消必须添加role熟悉感
        'jsx-a11y/label-has-associated-control': ['off'],
        'jsx-a11y/control-has-associated-label': ['off'],
        'import/extensions': [
            'error',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        // 'camelcase': ['off'],
        'react/jsx-no-bind': ['off'],
        'no-unused-expressions': ['off'],
        'consistent-return': ['off'],
        'react/jsx-boolean-value': ['off'],
        // 'prettier/prettier': 'error',
    },
}