module.exports = {
    presets: [['@babel/preset-env', { targets: { node: '14.17.0' } }]],
    plugins: [
        [
            'module-resolver',
            {
                // TODO: Read about absolute pathes in js and configure according to the your project
                root: ['./'],
                alias: { pages: './pages', test: './test', utils: './utils' },
            },
        ],
    ],
};
