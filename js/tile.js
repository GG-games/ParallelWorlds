(function() {
  'use strict';

  engine.tile = function(id, color, passable, event) {
    this.id = id; // ID of tile type in tile map
    this.color = color; // Color to draw tile
    this.passable = passable || false; // Can pass through tile
    this.event = event || null; // Collision events
  };

})();