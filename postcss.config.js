module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--xs': '(min-width: 0)' }
        },
        {
          customMedia: { '--sm': '(min-width: 576px)' }
        },
        {
          customMedia: { '--md': '(min-width: 768px)' }
        },
        {
          customMedia: { '--lg': '(min-width: 992px)' }
        },
        {
          customMedia: { '--xl': '(min-width: 1200px)' }
        },
        {
          customMedia: { '--xxl': '(min-width: 1400px)' }
        }
      ]
    }
  }
}
