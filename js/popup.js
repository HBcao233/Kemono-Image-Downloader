var area = document.querySelector("textarea");
chrome.storage.sync.get('format', (res) => {
  area.value = res.format;
})

document.querySelector(".btn").onclick = function () {
  chrome.storage.sync.set({
    format: area.value,
  }, function () {
    window.close();
  });
}

document.querySelectorAll(".tag").forEach(tag => {
  tag.onclick = function () {
    let insert = area.selectionStart;
    area.value = area.value.substr(0, insert) + tag.innerHTML + area.value.substr(insert);
  };
});