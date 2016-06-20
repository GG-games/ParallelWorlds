(function() {
  'use strict';

  engine.tile = function(id, color, passable) {
    this.id = id;
    this.color = color;
    this.passable = passable;



    this.draw = function(context, size) {
      context.rect(x, y, size, size);
      context.fillStyle = this.color;
      context.fill();
    };
  };

})();