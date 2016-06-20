
(function() {
  'use strict';

  if (!String.format) {
    String.format = function(format) {
      var args = Array.prototype.slice.call(arguments, 1);
      return format.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
      });
    };
  }

  window.devicePixelRatio = window.devicePixelRatio || 1;
})();


// requestAnimationFrame polyfill
/*jslint plusplus: true*/
(function() {
  'use strict';

  var lastTime = 0,
    vendors = ['ms', 'moz', 'webkit', 'o'],
    x,
    length,
    currTime,
    timeToCall;

  for(x = 0, length = vendors.length; x < length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame =
      window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback) {
      currTime = new Date().getTime();
      timeToCall = Math.max(0, 16 - (currTime - lastTime));
      lastTime = currTime + timeToCall;
      return window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
}());
