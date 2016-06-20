
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

    };

    this.move = function(x, y) {
      var targetX = this.x + x;
      var targetY = this.y + y;
      console.log(targetY);

      // var currentTile = this.level.getTileData(x, y);
      // console.log(Math.floor(targetX/32), Math.floor(targetY/32));

      var below = this.level.getTileData(Math.ceil(targetX/32), Math.ceil(targetY/32));
      // console.log(below.passable);
      if (below.passable === false) {
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
