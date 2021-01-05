module.exports = {
  presets: [
    [
      '@babel/env', {
        'modules': false
      }
      // { loader: 'less-loader', options: { javascriptEnabled: true }}
    ]
    // [
    //   'import',
    //   { 'libraryName': 'ant-design-vue', 'libraryDirectory': 'es', 'style': false }
    // ]
  ]
}
