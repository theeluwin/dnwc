// ==UserScript==
// @name disable-naver-webtoon-comment
// @namespace https://theeluwin.github.io
// @version 0.1.2
// @description disable naver webtoon comment
// @author theeluwin
// @match https://comic.naver.com/webtoon/detail.nhn*
// @downloadURL https://rawgit.com/theeluwin/dnwc/master/dnwc.user.js
// @copyright 2018+, theeluwin
// @run-at document-end
// @grant none
// ==/UserScript==

function dnwc() {
    if(window.location.search.indexOf('dnwc=false') > -1) {
        return;
    }
    if(window.location.hostname === 'comic.naver.com') {
        document.getElementById("commentIframe").style.display = 'none';
        document.getElementsByClassName("new_comic")[0].style.border = 'none';
    }
}

(function(){
    'use strict';
    dnwc();
})();
