
var engine = function() {
  'use strict';

  this.camera = '';

  this.key = {
    'up': false,
    'down': false,
    'left': false,
    'right': false
  }

  this.keydown = funciton() {
    if (e.keyCode == 37) {
      this.key.left = true;
    }
    else if (e.keyCode == 38) {
      this.key.up = true;
    }
    else if (e.keyCode == 39) {
      this.key.right = true;
    }
    else if (e.keyCode == 40) {
      this.key.down = true;
    }
  }

  this.keyup = function() {
    if (e.keyCode == 37) {
      this.key.left = false;
    }
    else if (e.keyCode == 38) {
      this.key.up = false;
    }
    else if (e.keyCode == 39) {
      this.key.right = false;
    }
    else if (e.keyCode == 40) {
      this.key.down = false;
    }
  }

   window.onkeydown = this.keydown.bind(this);
   window.onkeyup = this.keyup.bind(this);

}