(function() {
  'use strict';

  engine.playermobile = function() {

    engine.mobile.call(this);

    this.speed = 5;

    this.update = function(key) {
      var move = {x:0, y: 6};

      if (key.left) {
        move.x -= this.speed;
      }
      if (key.right) {
        move.x += this.speed;
      }
      if (key.up) {
        // move.y -= this.speed;
      }
      if (key.down) {
        move.y += this.speed;
      }
      console.log(move);

      this.move.apply(this, [move.x, move.y]);
    };

    this.draw = function(context) {
      context.fillStyle = 'green';
      context.fillRect(this.x, this.y, 32, 32);
    };
  };

})();
