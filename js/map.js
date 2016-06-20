
(function() {
  'use strict';

  engine.map = function(tileData, tiles) {

    this.gravity = 1.0;
    this.tileSize = 32;

    this.height = 15;
    this.width = 20;

    this.tileData = {};

    this.tiles = []; // Ground, spikes, victory point, etc.
    this.tiles = [ // debug map
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 2, 1, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    this.mobiles = []; // Enemies, etc.

    this.playerStart = {x: 0, y: 0};

    // TODO: These may all need to be moved to a new background.js entity
    this.background = {
      position: 0,
      reversed: false,
      pattern: 0,
      speed: 0
    };

    this.current = 5;
    this.bgPosition = 0;
    this.reverse = false;
    this.backgrounds = {
      0: {speed: 0, pattern: 0},
      1: {speed: 5, pattern: 1},
      2: {speed: 5, pattern: 2},
      3: {speed: 5, pattern: 3},
      4: {speed: 5, pattern: 4},
      5: {speed: 3, pattern: 5}
    };

    this.getTile = function(x, y) {
      return this.tiles[y][x];
    };

    this.getTileData = function(x, y) {
      if (!this.tiles[y]) {
        return null;
      }

      return this.tileData[this.tiles[y][x]];
    };

    this.drawBackground = function(context) {
      // TODO: Move background code here
      // Maybe backgrounds should even become their own entity..?
    };

    this.drawTiles = function(context) {
      for (var y = 0; y<this.tiles.length; y += 1) {
        for (var x = 0; x < this.tiles[y].length; x += 1) {
          if (this.tiles[y][x] !== 0) {
            context.fillStyle = this.getTileData(x, y).color;
            context.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
          }
        }
      }
    };

    this.drawMobiles = function(context) {

    };

    this.draw = function(context) {
      // TODO: Move background code out of here, and have it call drawBackground, drawObjects, drawMobiles

      var speed = this.backgrounds[this.current].speed;
      var width = this.width * this.tileSize;
      var height = this.height * this.tileSize;

      context.clearRect(0, 0, width, height);
      context.fillStyle = 'white';

      if (this.current === 1) {

        if (this.bgPosition > height) {
          this.reverse = true;
        }
        if (this.bgPosition <= 0) {
          this.reverse = false;
        }

        if (this.reverse) {
          this.bgPosition -= speed;
          context.fillRect(0, 0, width, this.bgPosition);
        }
        else {
          this.bgPosition += speed;
          context.fillRect(0, height - this.bgPosition, width, height);
        }
      }
      else if (this.current === 2) {
        if (this.bgPosition > width) {
          this.reverse = true;
        }
        if (this.bgPosition <= 0) {
          this.reverse = false;
        }

        if (this.reverse) {
          this.bgPosition -= speed;
          context.fillRect(width - this.bgPosition, 0, width, height/2);
          context.fillRect(0, height/2, this.bgPosition, height/2);
        }
        else {
          this.bgPosition += speed;
          context.fillRect(0, 0, this.bgPosition, height/2);
          context.fillRect(width - this.bgPosition, height/2, width, height/2);
        }
      }
      else if (this.current === 3) {

        context.fillStyle = 'white';

        if (this.bgPosition > width) {
          this.reverse = true;
        }
        if (this.bgPosition <= 0) {
          this.reverse = false;
        }

        if (this.reverse) {
          this.bgPosition -= speed;
          context.fillRect(0, 0, this.bgPosition, height);
        }
        else {
          this.bgPosition += speed;
          context.fillRect(width - this.bgPosition, 0 , width, height);
        }

      }
      else if (this.current === 4) {

        context.fillStyle = 'white';

        if (this.bgPosition > height) {
          this.reverse = true;
        }
        if (this.bgPosition <= 0) {
          this.reverse = false;
        }

        if (this.reverse) {
          this.bgPosition -= speed;
          context.fillRect(0, height - this.bgPosition, width/2, height);
          context.fillRect(width/2, 0, width/2, this.bgPosition);
        }
        else {
          this.bgPosition += speed;
          context.fillRect(0, 0, width/2, this.bgPosition);
          context.fillRect(width/2, height - this.bgPosition, width/2, height);
        }

      }
      else if (this.current === 5) {

        context.fillStyle = 'white';


        if (this.bgPosition > width/2) {
          this.reverse = true;
        }
        if (this.bgPosition <= 0) {
          this.reverse = false;
        }

        if (this.reverse) {
          this.bgPosition -= speed;
          context.fillRect(0 + this.bgPosition, 0, width/2, height/2);
          context.fillRect(width/2 - this.bgPosition, height/2, width/2, height/2);
        }
        else {
          this.bgPosition += speed;
          context.fillRect(0 + this.bgPosition, 0, width/2, height/2);
          context.fillRect(width/2 - this.bgPosition, height/2, width/2, height/2);
        }

      }

      this.drawTiles(context);

    };

    this.init = function(tileData, tiles) {
      this.tileData = tileData;
    };

    this.init(tileData);
  };

})();
