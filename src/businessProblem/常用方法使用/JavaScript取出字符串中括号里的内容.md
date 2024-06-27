---
title: JavaScript取出字符串中括号里的内容
icon: circle-info
---


```css

/**
 * 取出中括号内的内容
 * @param text
 * @returns {string}
 */
export function getBracketStr(text) {
    let result = ''
    if (isObjEmpty(text))
        return result
    let regex = /\[(.+?)\]/g;
    let options = text.match(regex)
    if (!isObjEmpty(options)) {
        let option = options[0]
        if (!isObjEmpty(option)) {
            result = option.substring(1, option.length - 1)
        }
    }
    return result
}

/**
 * 取出小括号内的内容
 * @param text
 * @returns {string}
 */
export function getParenthesesStr(text) {
    let result = ''
    if (isObjEmpty(text))
        return result
    let regex = /\((.+?)\)/g;
    let options = text.match(regex)
    if (!isObjEmpty(options)) {
        let option = options[0]
        if (!isObjEmpty(option)) {
            result = option.substring(1, option.length - 1)
        }
    }
    return result
}

```
