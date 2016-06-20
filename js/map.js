
(function() {
  'use strict';

  engine.map = function() {

    this.gravity = 1.0;
    this.tileSize = 32;

    this.height = 50;
    this.width = 50;

    this.current = 1;

    this.backgrounds = {
      0: {speed: 0, pattern: 0},
      1: {speed: 5, pattern: 1}
    };

    this.test = 600;

    this.draw = function(context) {
      var speed = this.backgrounds[this.current].speed;

      context.fillStyle = 'black';
      context.fillRect(0, 0, 900, 600);

      if (this.current > 0) {

        context.fillStyle = 'white';
        this.test += speed;
        if (this.test > 1200) {
          this.test = 0;
        }
        context.fillRect(0, this.test-600, 900, 600);

      }

    };
  };

})();
