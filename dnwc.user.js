// ==UserScript==
// @name disable-naver-webtoon-comment
// @namespace http://theeluwin.kr/dnwc
// @version 0.1.0
// @description disalbe naver webtoon comment
// @match http://comic.naver.com/webtoon/*
// @copyright 2018+, theeluwin
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
    if(typeof window == 'undefined') {
        module.exports = dnwc;
    } else {
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            dnwc();
        } else {
            window.addEventListener('DOMContentLoaded', dnwc, true);
        }
    }
})();
