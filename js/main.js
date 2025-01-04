

(function () {
  'use strict';

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

  const MAX_RETRY = 2;

  function getNow() {
    let t = new Date();
    return `${t.getFullYear()}-${(t.getMonth() + 1)}-${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
  }

  let now = 0, len = 0;
  const KD = {
    get_info: async function () {
      const path = window.location.pathname.split('/');
      const source = path[1];
      const uid = path[3];
      const pid = path[5];
      const r = await fetch(`https://kemono.su/api/v1/${source}/user/${uid}/post/${pid}`);
      this.info = await r.json();
      this.info.source = source;
      const r1 = await fetch(`https://kemono.su/api/v1/${source}/user/${uid}/profile`);
      this.info.author = await r1.json();
    },
    init: async function () {
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.log) console.log(...request.log);
        if (request.task) {
          this.downloader.complete(request.task);
        }
        sendResponse();
      });

      const style = document.createElement("style");
      style.innerHTML = css;
      document.body.appendChild(style);

      const download = document.createElement("div");
      download.classList.add("download");
      const process = document.createElement("div");
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

      await this.get_info();
      download.onclick = () => {
        now = 0;
        chrome.storage.sync.get('format', (res) => {
          const format = res.format || '{author}/{date} {title}/{index}.{ext}';
          const down = (url, i) => {
            const arr = url.split('.')
            const ext = arr.slice(-1);
            const datetime = this.info.post.published.split('T');
            const date = datetime[0];
            const time = datetime[1];
            const name = format
              .replaceAll('{author}', trim(this.info.author.name))
              .replaceAll('{title}', trim(this.info.post.title))
              .replaceAll('{userid}', this.info.author.id)
              .replaceAll('{postid}', this.info.post.id)
              .replaceAll('{source}', this.info.source)
              .replaceAll('{date}', date)
              .replaceAll('{time}', trim(time))
              .replaceAll('{index}', i)
              .replaceAll('{index+1}', i + 1)
              .replaceAll('{ext}', ext);
            // console.log(name);
            this.downloader.add({
              url: url,
              name: name,
            });
          }

          if (this.info.post.file.path) {
            len = 1;
            down(window.location.origin + this.info.post.file.path, 0);
          }
          if (this.info.post.attachments.length > 0) {
            len += this.info.post.attachments.length;
            for (let i = 0; i < this.info.post.attachments.length; i++) {
              down(window.location.origin + this.info.post.attachments[i].path, i + 1);
            }
          }
          if (len == 0) {
            process.style.left = 'unset';
            process.innerText = '无内容可下载';
          } else {
            process.style.left = '0';
          }
        })
      };

      let pathname = window.location.pathname;
      setInterval(() => {
        if (window.location.pathname != pathname) {
          pathname = window.location.pathname;
          const path = pathname.split('/');
          if (path.length < 6) {
            download.style.display = 'none';
          } else {
            this.get_info().then(() => {
              download.style.display = 'block';
              process.innerText = '';
            });
          }
        }
      }, 100);
    },
    downloader: (function () {
      let thread = 0;
      let max_thread = 2;
      let failed = 0;
      return {
        tasks: [],
        add: function (task) {
          this.tasks.push(task);
          if (thread < max_thread) {
            thread += 1;
            this.next();
          } else this.update();
        },
        next: async function () {
          const task = this.tasks.shift();
          this.start(task);
        },
        start: function (task) {
          this.update();
          chrome.runtime.sendMessage({ task: task });
        },
        complete: function (task) {
          if (task.status == 1 || task.error.error == "USER_CANCELED") {
            now++;
            this.update();
            thread--;
            this.next();
          } else {
            console.warn(`[${getNow()}] ${task.name} (${task.id}) 下载失败: ${task.error.error}`);
            chrome.runtime.sendMessage({ s: 'task_retry', task_id: task.id });
            this.retry(task);
          }
        },
        retry: function (task) {
          max_thread = 1;
          if (task.retry && task.retry >= MAX_RETRY) {
            failed += 1;
            console.error('下载失败', task);
          } else {
            if (max_thread == 1) task.retry = (task.retry || 0) + 1;
            this.add(task);
          }
        },
        update: function () {
          document.querySelector('.process').innerText = now + "/" + len;
        }
      };
    })(),

  };
  KD.init();
})();