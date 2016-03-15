var ja_jp = require('../locales/ja_JP.json');
var en_us = require('../locales/en_US.json');

var locales = {
  'ja-jp': ja_jp,
  'en-us': en_us
}

export function t(kind: string, key: string, lang: string = localStorage.getItem('chatwork-config.lang')) {
  return locales[lang][kind][key];
}