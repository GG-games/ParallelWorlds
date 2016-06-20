
(function() {
  'use strict';

  /*jslint unused: false*/
  window.engine = function(element) {

    this.canvas = null;
    this.context = null;

    this.performance = {
      lastTime: Date.now(),
      fps: 0,
      low: 0,
      high: 0
    };

    this.colors = {
      'red': '#ff0000',
      'green': '#00ff00',
      'blue': '#0000ff',
    };

    this.key = {
      'up': false,
      'down': false,
      'left': false,
      'right': false
    };

    this.keydown = function(e) {
      if (e.keyCode == 37 || e.keyCode == 65) {
        this.key.left = true;
      }
      else if (e.keyCode == 38 || e.keyCode == 87) {
        this.key.up = true;
      }
      else if (e.keyCode == 39 || e.keyCode == 68) {
        this.key.right = true;
      }
      else if (e.keyCode == 40 || e.keyCode == 83) {
        this.key.down = true;
      }
    };

    this.keyup = function(e) {
      if (e.keyCode == 37 || e.keyCode == 65) {
        this.key.left = false;
      }
      else if (e.keyCode == 38 || e.keyCode == 87) {
        this.key.up = false;
      }
      else if (e.keyCode == 39 || e.keyCode == 68) {
        this.key.right = false;
      }
      else if (e.keyCode == 40 || e.keyCode == 83) {
        this.key.down = false;
      }
    };

    /**
     *
     * @param  {object} map Loads a map JSON file
     * @return {object} Returns the map object
     */
    this.load = function(map) {
      var data = JSON.parse(map);


    };

    this.showFPS = function() {
      var delta;

      if (this.performance.lastTime) {
        delta = (Date.now() - this.performance.lastTime)/1000;
        this.performance.lastTime = Date.now();
        this.performance.fps = 1/delta;
      }

      if (this.performance.low === 0 || (this.performance.low > this.performance.fps && this.performance.fps > 1)) {
        this.performance.low = this.performance.fps;
      }
      else if (this.performance.fps > this.performance.high) {
        this.performance.high = this.performance.fps;
      }

      this.context.fillStyle = 'red';
      this.context.font = 'normal 16pt Helvetica';
      this.context.fillText('FPS: ' + Math.round(this.performance.fps), 10, 30);
      this.context.fillText('FPS lowest: ' + Math.round(this.performance.low), 10, 60);

    };

    this.draw = function(context) {
      this.level.draw(context);
      this.player.draw(context);
    };

    this.update = function() {

      this.player.update(this.key);
      this.draw(this.context);

      this.showFPS();

      window.requestAnimationFrame(this.update.bind(this));
    };

    this.init = function(element) {
      this.canvas = element;
      this.context = this.canvas.getContext('2d');
      this.player = new engine.playermobile();
      this.level = new engine.map();

      this.update();
    };

    window.onkeydown = this.keydown;
    window.onkeyup = this.keyup.bind(this);

    this.init(element);
  };

})();
