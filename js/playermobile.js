(function() {
  'use strict';

  engine.playermobile = function() {

    engine.mobile.call(this);

    this.speed = 5;

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
  };

})();
