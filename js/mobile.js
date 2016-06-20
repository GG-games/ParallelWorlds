
(function() {
  'use strict';

  engine.mobile = function() {

    this.level = null;

    this.jumping = false;
    this.walking = false;
    this.speed = 5;

    this.x = 0;
    this.y = 0;

    this.update = function() {
      var move = {x:0, y: 0};

      this.move.apply(this, move);
    };

    this.draw = function(context) {
      context.fillStyle = 'white';
      context.fillRect(this.x, this.y, 32, 32);
    };

    this.move = function(x, y) {
      var targetX = this.x + x;
      var targetY = this.y + y;

      // var currentTile = this.level.getTileData(x, y);
      // console.log(Math.floor(targetX/32), Math.floor(targetY/32));

      if (x < 1 && targetX <= 0) {
        targetX = this.x;
      }
      if (y < 1 && targetY <= 0) {
        targetX = this.y;
      }
      if (x > 0 && targetX >= this.level.width*32) {
        targetX = this.x;
      }
      if (y > 0 && targetY >= this.level.height*32) {
        targetX = this.y;
      }

      var below = this.level.getTileData(Math.ceil(targetX/32), Math.ceil(targetY/32));
      var above = this.level.getTileData(Math.floor(targetX/32), Math.floor(targetY/32));
      // console.log(below.passable);
      if (below && below.passable === false) {
        targetY = this.y;
      }

      // TODO: Fire move event
      this.x = targetX;
      this.y = targetY;
    };

    this.jump = function() {

    };
  };

})();
