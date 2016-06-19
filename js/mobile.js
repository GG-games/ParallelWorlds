
(function() {
  'use strict';

  engine.mobile = function() {

    this.canJump = true;
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
      // TODO: Fire move event
      this.x += x;
      this.y += y;
    };

    this.jump = function() {

    };
  };

})();
