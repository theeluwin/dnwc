// ==UserScript==
// @name disable-naver-webtoon-comment
// @namespace https://theeluwin.github.io
// @version 0.1.3
// @description disable naver webtoon comment
// @author theeluwin
// @match https://comic.naver.com/*
// @downloadURL https://rawgit.com/theeluwin/dnwc/master/dnwc.user.js
// @copyright 2018+, theeluwin
// @run-at document-end
// @grant none
// ==/UserScript==

function dnwc() {
  if(window.location.search.indexOf('dnwc=false') > -1) {
      return
  }
  if(window.location.hostname === 'comic.naver.com') {
    let iframe = document.getElementById("commentIframe")
    if(iframe !== null) {
        iframe.style.display = 'none'
    }
    let new_comics = document.getElementsByClassName("new_comic")
    for(let i = 0; i < new_comics.length; i++) {
      new_comics[i].style.border = 'none'
    }
  }
}

(function(){
  'use strict'
  dnwc()
})()
