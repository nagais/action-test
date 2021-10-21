module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    "max-len": ["warn", {
      "code": 100,
    }],
    "space-before-function-paren": ["error",{
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/comment-directive": "off"
  }
}
