chrome.storage.sync.get('format', (res) => {
  if (res.format == null) {
    chrome.storage.sync.set({
      format: '{author}/{date} {title}/{index}.{ext}',
    }, function () { });
  }
});

function getNow() {
  let t = new Date();
  return `${t.getFullYear()}/${(t.getMonth() + 1)}/${t.getDate()} ${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
}

function addTask(name, bgid) {
  chrome.storage.sync.get('tasks', (res) => {
    let tasks = res.tasks || [];
    tasks.push({
      name: name,
      bgid: bgid,
    });
    chrome.storage.sync.set({
      tasks: tasks,
    });
  });
}

function removeTask(bgid) {
  chrome.storage.sync.get('tasks', (res) => {
    let tasks = res.tasks || [];
    for (let i in tasks) {
      if (tasks[i].bgid == bgid) {
        tasks.splice(i, 1);
        break;
      }
    }
    chrome.storage.sync.set({
      tasks: tasks,
    });
  });
}

function download(url, filename, conflictAction = 'overwrite') {
  return new Promise(resolve => {
    chrome.downloads.download({
      url: url,
      filename: filename,
      conflictAction: conflictAction,
      saveAs: false,
    }, (id) => {
      addTask(filename, id);
      resolve(id);
    });
  });
}

function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response);
    });
  });
}
function log(...data) {
  sendMessageToContentScript({ log: data });
}

function wait_complete(bgid) {
  var _timer;
  return new Promise(resolve => {
    _timer = setInterval(() => {
      chrome.downloads.search({ id: bgid }, (res) => {
        if (res[0].state == 'complete') {
          clearInterval(_timer);
          resolve({
            status: 1,
            error: {},
          });
        } else if (res[0].state == 'interrupted') {
          clearInterval(_timer);
          resolve({
            status: 0,
            error: res[0],
          });
        }
      })
    }, 500);
  })
}

chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
  sendResponse();
  if (message.task) {
    var bgid = await download(message.task.url, message.task.name);
    log('[' + getNow() + ']', message.task.name, '(' + bgid + ')', '开始');

    var res = await wait_complete(bgid);
    removeTask(bgid);

    log('[' + getNow() + ']', message.task.name, '(' + bgid + ')', '完成');
    sendMessageToContentScript({ task: res });
  }
});
