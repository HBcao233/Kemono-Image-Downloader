// ==UserScript==
// @name         Fanbox to Kemono
// @namespace    https://viayoo.com/
// @version      0.1
// @description  fanbox添加一个按钮跳转到 Kemono
// @author       HBcao233
// @run-at       document-end
// @match        https://*.fanbox.cc/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  const css = `
.ke{
  position: fixed;
  width:30px;
  height:30px;
  top:26.5%;
  right:10px;
  padding:0;
  background-color: skyblue;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA4LTI0VDEwOjA1OjE3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wOC0yNFQxMDowOTo0MiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wOC0yNFQxMDowOTo0MiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMWRmMjE4OS1lMGRmLWFm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');
  background-size: 60% 60%;
  background-repeat:no-repeat;
  background-position:center;
  text-align: center;
}
`;
  const style = document.createElement("style");
  style.innerHTML = css;
  document.body.appendChild(style);

  let users = {};
  const main = async () => {
    let ke = document.getElementsByClassName("ke")[0];
    if (ke != null) document.body.removeChild(ke);

    let creatorId = window.location.href.match(/(?<=@)([^\/]*)|(?<=https:\/\/(?!www))([^.]*)/);
    creatorId = creatorId && creatorId[0];
    if (creatorId == null) return;

    let postId = window.location.href.match(/(?<=posts\/)([^\/]*)/);
    postId = postId && postId[0];
    if (!users[creatorId]) {
      const r = await fetch("https://api.fanbox.cc/creator.get?creatorId=" + creatorId);
      const res = await r.json();
      users[creatorId] = res.body.user;
    }
    const userId = users[creatorId].userId;
    ke = document.createElement("a");
    ke.classList.add("ke");
    let url = 'https://kemono.su/fanbox/user/' + userId
    if (postId != null) url += '/post/' + postId;
    ke.setAttribute('href', url);
    ke.setAttribute('target', '_blank')
    document.body.appendChild(ke);
  }
  main();
  window.addEventListener('popstate', main);
  let pathname = window.location.pathname;
  setInterval(() => {
    if (window.location.pathname != pathname) {
      pathname = window.location.pathname;
      main();
    }
  }, 100);
})();