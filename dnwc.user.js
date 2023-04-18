// ==UserScript==
// @name disable-naver-webtoon-comment
// @namespace https://github.com/theeluwin/dnwc
// @version 0.1.4
// @description disable naver webtoon comment
// @author theeluwin
// @match https://comic.naver.com/*
// @downloadURL https://rawgit.com/theeluwin/dnwc/main/dnwc.user.js
// @updateURL https://rawgit.com/theeluwin/dnwc/main/dnwc.user.js
// @copyright 2023+, theeluwin
// @run-at document-end
// @grant none
// ==/UserScript==

function dncw() {
  if(window.location.search.indexOf('dnwc=false') < 0 && window.location.hostname === 'comic.naver.com') {
    let box = document.getElementById("cbox_module")
    if(box !== null) {
      box.style.display = 'none'
    }
  }
}

(function(){
  'use strict'
  setTimeout(dncw, 1000)
})()
