
(function() {
  'use strict';

  /*jslint unused: false*/
  window.engine = function() {

    this.canvas = null;
    this.context = null;

    this.key = {
      'up': false,
      'down': false,
      'left': false,
      'right': false
    };

    this.keydown = function(e) {
      if (e.keyCode == 37 || e.keyCode == 65) {
        this.key.left = true;
      }
      else if (e.keyCode == 38 || e.keyCode == 87) {
        this.key.up = true;
      }
      else if (e.keyCode == 39 || e.keyCode == 68) {
        this.key.right = true;
      }
      else if (e.keyCode == 40 || e.keyCode == 83) {
        this.key.down = true;
      }
    };

    this.keyup = function(e) {
      if (e.keyCode == 37 || e.keyCode == 65) {
        this.key.left = false;
      }
      else if (e.keyCode == 38 || e.keyCode == 87) {
        this.key.up = false;
      }
      else if (e.keyCode == 39 || e.keyCode == 68) {
        this.key.right = false;
      }
      else if (e.keyCode == 40 || e.keyCode == 83) {
        this.key.down = false;
      }
    };

    this.load = function(map) {

    };

    this.draw = function() {

    };

    this.update = function() {
      this.player.update();
      this.draw(this.context);

      window.requestAnimFrame(this.update);
    };

    window.onkeydown = this.keydown.bind(this);
    window.onkeyup = this.keyup.bind(this);

  };

})();
