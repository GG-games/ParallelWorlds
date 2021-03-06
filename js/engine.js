
(function() {
  'use strict';

  /*jslint unused: false*/
  window.engine = function(element, tileData) {

    this.canvas = null;
    this.context = null;

    this.performance = {
      lastTime: Date.now(),
      fps: 0,
      low: 0,
      high: 0,
      average: 0
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
    this.loadMap = function(map) {
      var data = JSON.parse(map);

      // TODO: load map data
    };

    this.loadTiles = function(tileData) {
        // tileData = JSON.parse(tileData);

        this.tiles = tileData;


        // TODO: rethink this

        // this.tiles = [];
        // for (var i=0; i<tileData.tiles; i += 1) {
        //   var tile = tileData.tiles[i];

        //   tile = new engine.tile(tile.id, tile.color, tile.passable, tile.event);

        //   this.tiles.push(tile);
        // }
        // TODO: Fire tiles_loaded event

    };

    this.changeLevel = function(newLevel) {
      newLevel.player = this.player;
      this.player.level = newLevel;
    };

    this.showFPS = function() {
      var delta;

      if (this.performance.lastTime) {
        delta = (Date.now() - this.performance.lastTime)/1000;
        this.performance.lastTime = Date.now();
        this.performance.fps = 1/delta;
      }

      this.performance.average = (this.performance.fps + this.performance.average) >>> 1;
      if (this.performance.low === 0 || (this.performance.low > this.performance.average && this.performance.average > 1)) {
        this.performance.low = this.performance.average;
      }
      else if (this.performance.average > this.performance.high) {
        this.performance.high = this.performance.average;
      }

      this.context.fillStyle = 'red';
      this.context.font = 'normal 12pt Helvetica';
      this.context.fillText('FPS: ' + Math.round(this.performance.average), 10, 20);
      // this.context.fillText('FPS lowest: ' + Math.round(this.performance.low), 10, 4 0);
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

    this.init = function(element, tileData) {
      this.canvas = element;
      this.context = this.canvas.getContext('2d');

      this.canvas.height = 480;
      this.canvas.width = 640;

      this.loadTiles(tileData);

      this.player = new engine.playermobile();
      this.level = new engine.map(tileData);
      this.changeLevel(this.level);

      if (window.devicePixelRatio > 1) {
        var canvasWidth = this.canvas.width;
        var canvasHeight = this.canvas.height;

        this.canvas.width = canvasWidth * window.devicePixelRatio;
        this.canvas.height = canvasHeight * window.devicePixelRatio;

        this.canvas.style.width = canvasWidth + 'px';
        this.canvas.style.height = canvasHeight + 'px';

        this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
      }

      this.update();
    };

    window.onkeydown = this.keydown.bind(this);
    window.onkeyup = this.keyup.bind(this);

    this.init(element, tileData);
  };

})();
