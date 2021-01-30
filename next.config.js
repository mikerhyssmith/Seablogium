const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')()
const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withPlugins([
  [
    withMDX,
    {
      pageExtensions: ['js', 'tsx', 'mdx'],
    },
  ],
  [
    withReactSvg,
    {
      include: path.resolve(__dirname, 'src/assets/svg'),
      webpack(config, options) {
        return config
      },
    },
  ],
])
