/*
 * @Description: 
 * @Author: xiesantao
 * @Date: 2022-11-02 00:58:24
 * @LastEditTime: 2022-11-02 01:09:22
 * @LastEditors: xiesantao
 * @Reference: 
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "some-other-config-you-use",
        "prettier"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": "error"
    }
}
