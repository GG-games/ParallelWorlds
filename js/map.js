
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
      var width = 900;
      var height = 600;

      context.clearRect(0, 0, width, height);

      if (this.current > 0) {

        context.fillStyle = 'white';
        this.test += speed;
        if (this.test > 1200) {
          this.test = 0;
        }
        context.fillRect(0, this.test - 600, width, height);
      }

    };
  };

})();
