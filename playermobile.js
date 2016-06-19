(function() {
  'use strict';

  /*global engine*/
  engine.playermobile = function() {

    this.canJump = true;
    this.speed = 5;

    this.x = 0;
    this.y = 0;

    this.update = function(key) {
      var move = {x:0, y: 0};

      if (key.left) {
        move.x -= this.speed;
      }
      if (key.right) {
        move.x += this.speed;
      }
      if (key.up) {

      }
      if (key.down) {

      }

      this.move.apply(this, move);
    };

    this.draw = function(context) {

    };

    this.move = function(x, y) {
      // TODO: Fire move event
      this.x += x;
      this.y += y;
    };

    this.jump = function() {

    };
  };

})();
