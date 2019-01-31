const path = require('path')

const sourceFolder = path.join(__dirname, './src')

module.exports = {
  modify: (config, { dev }) => {
    // so that we can require relative to the src/ folder
    // e.g
    // import FooComponent from 'components/FooComponent'
    // import FooPage Foo'
    config.resolve.modules = ['node_modules', sourceFolder]

    // when poll: false, it's not gonna catch the file changes if app is
    // running under a virtual env (docker, vm, etc)
    config.watchOptions = Object.assign({}, config.watchOptions, {
      poll: true,
    })

    return config
  },
}
