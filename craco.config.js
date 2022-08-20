const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      options: {
        baseUrl: './src',
        debug: false,
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json'
      },
      plugin: CracoAlias
    }
  ]
}
