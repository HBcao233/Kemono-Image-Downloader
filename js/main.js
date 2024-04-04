const css = `
.download{
  position: fixed;
  width:30px;
  height:30px;
  top:21%;
  right:10px;
  padding:0;
  background-color: skyblue;
  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NjQ4LCAyMDIxLzAxLzEyLTE1OjUyOjI5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA4LTIzVDA4OjQ5OjQ3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wOC0yM1QwODo1MDozMSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wOC0yM1QwODo1MDozMSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplZjMzMGM0NS1kYWEwLTU5NGItOGFiNy02M2E3NDI1NTE3ZGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZWYzMzBjNDUtZGFhMC01OTRiLThhYjctNjNhNzQyNTUxN2RhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZWYzMzBjNDUtZGFhMC01OTRiLThhYjctNjNhNzQyNTUxN2RhIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplZjMzMGM0NS1kYWEwLTU5NGItOGFiNy02M2E3NDI1NTE3ZGEiIHN0RXZ0OndoZW49IjIwMjItMDgtMjNUMDg6NDk6NDcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4yIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz57hRO8AAABuUlEQVR4nO2bwRaCIBBFodP//7Kt7HgMvYA4M9K7qxZFvBsgypSXZUnimJd3B6IjQYAEARIEvNcXOefhjXdeAJaUUnNnRvd/7fsb3mfJUng9/ldrJMoUC7vXiCIoLBIESBAgQYAEARIESBAgQYAEARIESBAgQYAEARIESBAgQYAEARIESBAgQYAEARIESBAgQYAEARZHz/tT0xHHyXe0WeTuEVQ6Ur56zGx6TO01xXpDHn3uNmmea1BrKJcCB+9FujY0ve+xa1BNxym8m5yUbEbQlQCuclKym2J3BDGpPrNcg0YGMivNs16kRwQzrVv0uIpdCWhe1Ol1me8J6lLx6rkPagnsVg7svVGsCe5aK5031fBHew6LDob9bu8RtFIS4V5ln1KsvyKEELInyggKS42gsP+jGABm0wgCJAiQIGAr6OwqMuM6dJbp66JlBM0kqTqLphiwF0SbtRlGUdNj3J4R9GRJzX0v3WrkioaeLOmMnxl0NIJC3hfdTDHz2RT7J0mHWWkN+gdJpxlrFumZJWG22udBa0OzLM7VP3rrA7Ntw0+T1TUTrjxRnHnqfdGtBiBBgAQBEgR8AAsYMKUrJ00OAAAAAElFTkSuQmCC');
  background-size: 60% 60%;
  background-repeat:no-repeat;
  background-position:center;
  text-align: center;
}
.process{
  white-space: nowrap;
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;
}
`;

const KD = (function () {
  var now = 0, len = 0, info = [],
    $ = (s, o = document) => { return o.querySelector(s) };
  return {
    that: this,
    init: function () {
      var that = this;
      chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.log) console.log(...request.log);
        if (request.task) {
          that.downloader.complete(request.task);
        }
        sendResponse();
      });

      var style = document.createElement("style");
      style.innerHTML = css;
      document.body.appendChild(style);

      var download = document.createElement("div");
      download.classList.add("download");
      var process = document.createElement("div");
      process.classList.add("process");
      download.appendChild(process);
      document.body.appendChild(download);

      function trim(str) {
        return str.replaceAll(/(^\s*)|(\s*$)/g, "")
          .replaceAll('|', '｜')
          .replaceAll('?', '？')
          .replaceAll(':', '：')
          .replaceAll('"', "`")
          .replaceAll('*', '_')
          .replaceAll('/', '_')
          .replaceAll('\\', '_')
          .replaceAll('<', '_')
          .replaceAll('>', '_')
          .replaceAll('~', '_')
      }

      info['author'] = trim($('.post__user-name').innerText);

      let a = $('.post__title > span').style.textTransform;
      $('.post__title > span').style.textTransform = 'none';
      info['title'] = trim($('.post__title > span').innerText);
      $('.post__title > span').style.textTransform = a;

      info['source'] = trim($('.post__title > span:nth-child(2)').innerText);

      if ($('.post__published > .timestamp')) {
        var datetime = trim($('.post__published > .timestamp').innerText), arr = datetime.split(' ');
        info['date'] = arr[0];
        info['time'] = arr[1];
      } else {
        var datetime = trim($('.post__published').innerText.replaceAll('Published:', '')), arr = datetime.split(' ');
        info['date'] = arr[0];
        info['time'] = arr[1];
      }

      info['userid'] = $('meta[name=user]').getAttribute('content');
      info['postid'] = $('meta[name=id]').getAttribute('content');

      download.onclick = function () {
        now = 0;
        var imgs = document.querySelectorAll('.post__thumbnail .fileThumb');
        var downloads = document.querySelectorAll('.post__attachment-link');
        len = imgs.length + downloads.length;

        var format = '';
        chrome.storage.sync.get('format', (res) => {
          format = res.format;
          for (let i = 0; i < imgs.length; i++) {
            var url = imgs[i].href;
            // console.log(imgs[i].href);
            var arr = url.split('.')
            var ext = arr.slice(-1);
            var name = format.replaceAll('{author}', info['author'])
              .replaceAll('{author}', info['title'])
              .replaceAll('{title}', info['title'])
              .replaceAll('{userid}', info['userid'])
              .replaceAll('{postid}', info['postid'])
              .replaceAll('{source}', info['source'])
              .replaceAll('{date}', info['date'])
              .replaceAll('{time}', info['time'])
              .replaceAll('{index}', i)
              .replaceAll('{index+1}', i + 1)
              .replaceAll('{ext}', ext);
            // console.log(name);
            that.downloader.add({
              url: url,
              name: name,
            });
          }

          for (let i = 0; i < downloads.length; i++) {
            let url = downloads[i].href;
            var filename = downloads[i].innerText;
            filename = trim(filename.replace('Download', ''));
            var arr = filename.split('.');
            var ext = arr.slice(-1);
            let newArr = arr.slice(0, arr.length);
            newArr.pop();
            filename = newArr.join("");

            var name = format.replaceAll('{author}', info['author'])
              .replaceAll('{author}', info['title'])
              .replaceAll('{title}', info['title'])
              .replaceAll('{userid}', info['userid'])
              .replaceAll('{postid}', info['postid'])
              .replaceAll('{source}', info['source'])
              .replaceAll('{date}', info['date'])
              .replaceAll('{time}', info['time'])
              .replaceAll('{index}', filename)
              .replaceAll('{index+1}', filename)
              .replaceAll('{ext}', ext);

            that.downloader.add({
              url: url,
              name: name,
            });
          }
        })

      }
    },
    downloader: (function () {
      let tasks = [], thread = 0, max_thread = 2, retry = 0, max_retry = 2, failed = 0;
      return {
        add: function (task) {
          tasks.push(task);
          if (thread < max_thread) {
            thread += 1;
            this.next();
          } else this.update();
        },
        next: async function () {
          let task = tasks.shift();
          this.start(task);
        },
        start: function (task) {
          this.update();
          chrome.runtime.sendMessage({ task: task });
        },
        complete: function (task) {
          if (task.status == 1) {
            now++;
            this.update();
            thread--;
            this.next();
          } else {
            console.error(task.error);
          }
        },
        retry: function (task, result) {
          retry += 1;
          if (retry == 3) max_thread = 1;
          if (task.retry && task.retry >= max_retry ||
            result.details && result.details.current == 'USER_CANCELED') {
            task.onerror(result);
            failed += 1;
          } else {
            if (max_thread == 1) task.retry = (task.retry || 0) + 1;
            this.add(task);
          }
        },
        update: function () {
          $('.process').innerHTML = now + "/" + len;
        }
      };
    })(),

  };
})();

(function () {
  'use strict';
  KD.init();
  // new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(node => {
  //   let article = node.tagName == 'DIV' && (node.querySelector('article') || node.closest('article'));
  //   if (article && !article.dataset.injected) KD.inject(article);
  // }))).observe(document.body, { childList: true, subtree: true });
})();