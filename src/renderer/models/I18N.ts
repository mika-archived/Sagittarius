var ja_jp = require('../locales/ja_JP.json');
var en_us = require('../locales/en_US.json');

var locales = {
  'ja-jp': ja_jp,
  'en-us': en_us
}

export function t(kind: string, key: string, lang: string = 'no-np') {
  if(lang == 'no-np') {
    lang = localStorage.getItem('chatwork-config.lang') == null ? 'en-us' : localStorage.getItem('chatwork-config.lang');
  }
  console.log(lang);
  console.log(locales[lang]);
  return locales[lang][kind][key];
}