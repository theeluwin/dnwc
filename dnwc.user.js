// ==UserScript==
// @name disable-naver-webtoon-comment
// @namespace http://theeluwin.kr/dnwc
// @version 0.1.1
// @description disalbe naver webtoon comment
// @author theeluwin
// @match http://comic.naver.com/webtoon/detail.nhn*
// @downloadURL https://rawgit.com/theeluwin/dnwc/master/dnwc.user.js
// @copyright 2018+, theeluwin
// @run-at document-end
// @grant none
// ==/UserScript==

function dnwc() {
    if (window.location.search.indexOf('dnwc=false') > -1) {
        return;
    }
    if(window.location.hostname == 'comic.naver.com') {
        document.getElementById("commentIframe").style.display = 'none';
    }
}

(function(){
    'use strict';
    dnwc();
})();
