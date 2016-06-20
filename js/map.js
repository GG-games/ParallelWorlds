
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

    this.bgPosition = 0;
    this.reverse = false;

    this.draw = function(context) {
      var speed = this.backgrounds[this.current].speed;
      var width = 900;
      var height = 600;

      context.clearRect(0, 0, width, height);

      if (this.current > 0) {

        context.fillStyle = 'white';

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

    };
  };

})();
