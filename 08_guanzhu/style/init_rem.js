(function (win) {
  var doc = win.document;
  var docEl = doc.documentElement;
  var tid;
  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    var rem = width / 37.5; // 将屏幕宽度分成10份， 1份为1rem  
    docEl.style.fontSize = rem + 'px';
  }

  win.resizeFn = function () {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }

  win.pageshowFn = function (e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }
  win.addEventListener('resize', win.resizeFn, false);
  win.addEventListener('pageshow', win.pageshowFn, false);
  refreshRem();
})(window);