  function returnInRange(num, min, max) {
    num  = num > max ? max : num;
    return num < min ? min : num;
  }

  function scrollInfo(elem) {
    const {scrollTop, scrollHeight, clientHeight} = elem;
    return {
      top:        scrollTop,
      bottom:     scrollTop + clientHeight,
      height:     clientHeight,
      atTop:      scrollTop === 0,
      atBottom:   scrollHeight - scrollTop <= clientHeight + 1,
      fullHeight: scrollHeight
    }
  }


function logtray(options, DB) {

  'use strict';

  // initiate
  let self = this;

  // Libraries
  const tracer  = require('../tools/tracer.js'),
        crel    = require('crel');

  // Global variables
  self.elements = {
    reload: document.querySelector('#mde-reload'),
    openTray: {},
    closeTray: {},
    tray: {},
    resizeTray: {},
    logs: {}
  };

  // Setup variables if not setup already
  DB.set('logtrayOpen', DB.get('logtrayOpen') || false);
  DB.set('logtrayHeight', DB.get('logtrayHeight') || window.innerHeight * 0.25);


  buildlogtrayButton();
  buildlogtray();

  window.console.log = (message) => {
    // Gather message trace information
    const trace = tracer(new Error());

    log(message, trace);
  };

  if (options.logErrors === true) {
    window.onerror = (message, filePath, lineNumber) => {
      const fileName = filePath.replace(/^.*[\\\/]/, '');
      log(message, {fileName, filePath, lineNumber, isError: true});
    }
  }

  function buildlogtrayButton() {
    crel(document.body,
      self.elements.openTray = crel('button', { 'id': 'mde-open-logtray', 'class': 'mde ' + status } )
    );

    self.elements.openTray.addEventListener('click', (e) => {
      open();
    }, false);
  }

  function buildlogtray() {
    crel(document.body,
      self.elements.tray = crel('div',
         { 'id': 'mde-logtray', 'class': `mde ${state()}`},
        self.elements.resizeTray = crel('button', {'id': 'mde-resize-logtray', 'class': 'mde'}),
        self.elements.closeTray = crel('button', {'id': 'mde-close-logtray', 'class': 'mde'}),
        self.elements.logs = crel('div', {'id': 'mde-logs'})
      )
    );

    setTrayHeight(height());

    window.addEventListener('resize', (e) => setTrayHeight(height()), false);
    self.elements.closeTray.addEventListener('click', (e) => close(), false);
    self.elements.resizeTray.addEventListener('touchstart', (e) => resizeLogTray(e), false);
    self.elements.resizeTray.addEventListener('mousedown', (e) => resizeLogTray(e), false);
  }

  // constants

  function state() {
    return DB.get('logtrayOpen');
  }

  function height() {
    return DB.get('logtrayHeight');
  }

  function minHeight() {
    return self.elements.resizeTray.offsetHeight;
  }

  function maxHeight() {
    return window.innerHeight - (options.reload ? self.elements.reload.offsetHeight + 20 : 10);
  }

  // modify global

  function setTrayHeight(height) {
    const min = minHeight()
    const max = maxHeight()
    height = returnInRange(height, min, max);
    DB.set('logtrayHeight', height);
    console.log(self.elements)
    self.elements.tray.style.height = height+'px';
  }

  // actions

  function open() {
    DB.set('logtrayOpen', true);
    self.elements.openTray.classList = true;
    self.elements.tray.classList = true;
  }

  function close() {
    DB.set('logtrayOpen', false);
    self.elements.openTray.classList = false;
    self.elements.tray.classList = false;
  }

  // Resize logtray by dragging up and down on the bar
  function resizeLogTray(e) {
    // starting y coordinate on screen (from touch input or mouse)
    const startY = e.type === 'touchstart' ? e.changedTouches[0].clientY : e.clientY;
    // starting height of logtray
    const startH = DB.get('logtrayHeight');
    // check if log tray is scrolled to bottom,
    const startScrolledBottom = self.elements.logs.scrollHeight - self.elements.logs.scrollTop <= self.elements.logs.clientHeight + 1;
    // check if log tray is scrolled to top
    const startScrolledTop = self.elements.logs.scrollTop === 0;

    const onMove = (e) => {
      // Get current y position on screen
      const currentY = e.type === 'touchmove' ? e.changedTouches[0].clientY : e.clientY;
      // Calculate distance between starting and current Y
      const dragDistance = startY - currentY;

      // Update tray height
      setTrayHeight(startH + dragDistance);

      // If logtray is scrolled to the bottom, ensure it remains that way
      if (startScrolledBottom) {
        self.elements.logs.scrollTop = self.elements.logs.scrollHeight;
      }
    };

    function onEnd(e) {
      // remove listeners to prevent stacking and conflictions
      e.target.removeEventListener('touchmove', onMove, false);
      e.target.removeEventListener('touchend', onEnd, false);
      document.removeEventListener('mousemove', onMove, false);
      document.removeEventListener('mouseup', onEnd, false);
    }

    // Handle input dragging logtray resize bar
    e.target.addEventListener('touchmove', onMove, false);
    e.target.addEventListener('touchend', onEnd, false);
    document.addEventListener('mousemove', onMove, false);
    document.addEventListener('mouseup', onEnd, false);
  }

  function log(message, trace) {
    const { filePath, fileName, lineNumber, isError } = trace;

    const initialScroll = scrollInfo(self.elements.logs);

    const logs = self.elements.logs;
    const lastLog = logs.lastChild || false;
    const lastMessage = typeof lastLog === 'object' ? lastLog.querySelector('.message').innerHTML : null;

    const id = 'log-'+logs.children.length;
    let type;

    // Get and handle var types
    if (type === 'error') {
      type = 'error';
    } else if (typeof message === "string") {
      type = 'string';
    } else if (typeof message === "number") {
      type = 'number';
    } else if (typeof message === "boolean") {
      type = 'boolean';
    } else if (typeof message === "object") {
      type = 'object';
    } else if (Array.isArray( message )) {
      type = 'array';
    } else if (message === null) {
      type = 'null';
    } else if (message == null) {
      type = 'undefined';
    }

    // manually set 'undefined' and 'null' messages which when left alone will display nothing at all
    if (type === 'null' || type === 'undefined') {
      message = type;
    // convert objects and arrays to string
    } else if (type === 'object' || type === 'array') {
      message = JSON.stringify(message, undefined, 2);
      // convert number and boolean values to string
    } else if (type === 'number' || type === 'boolean') {
      message = message.toString();
    }

    let submitted ;

    if (message !== lastMessage) {
      crel(logs,
      submitted =  crel('div',
          { 'id': 'mde-' + id, 'class': 'log ' + type },
          crel('div',
            {'class': 'preview'},
            crel('div', { 'class': 'stack' } ),
            crel('a', { 'class': 'trace', 'href': filePath, 'target': '_blank' }, fileName+':'+lineNumber),
            crel('div', { 'class': 'message' } )
          ),
          crel('div', {'class': 'full'})
        )
      );

      submitted.querySelector('.preview .message').innerText = message;
      submitted.querySelector('.full').innerText = message;

      submitted.querySelector('.preview').addEventListener('click', (e) => {
        if (!e.target.classList.contains('trace')) {
          const clickedLog = e.target.closest('.log');
          clickedLog.classList.toggle('expand');
        }
      });
    } else {
      const stackSize = parseInt(lastLog.querySelector('.stack').innerText) || 1;
      lastLog.querySelector('.stack').innerText = stackSize+1;
    }

    if (initialScroll.atBottom) {
      logs.scrollTop = logs.scrollHeight;
    }
  }
}

module.exports = logtray;