
(function() {
  'use strict';

  engine.map = function() {

    this.gravity = 1.0;
    this.tileSize = 32;

    this.height = 50;
    this.width = 50;

    this.current = 2;

    this.backgrounds = {
      0: {speed: 0, pattern: 0},
      1: {speed: 5, pattern: 1},
      2: {speed: 5, pattern: 2}
    };

    this.bgPosition = 0;
    this.reverse = false;

    this.draw = function(context) {
      var speed = this.backgrounds[this.current].speed;
      var width = 900;
      var height = 600;

      context.clearRect(0, 0, width, height);

      if (this.current === 1) {

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
      else if (this.current === 2) {

        context.fillStyle = 'white';

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

    };
  };

})();
