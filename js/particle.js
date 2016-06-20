(function() {
  'use strict';
    var particles = {},
        particleIndex = 0,
        particleNum = 30;

    engine.particle = function(x, y) {
      this.x = x;
      this.y = y;
      this.vx = Math.random() * 14 - 7;
      this.vy = Math.random() * 20 - 10;
      this.gravity = 0.8;
      particleIndex += 1;
      particles[particleIndex] = this;
      this.id = particleIndex;
      //How long they exist
      this.life = 0;
      this.maxLife = 100;
      this.color = "hsl("+parseInt(Math.random()*255,10)+",50%,50%)";

      this.draw = function(context) {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.life += 1;
        if (this.life >= this.maxLife) {
          delete particles[this.id];
        }
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, 10, 10);
      };
    };

    for (var i = 0; i < particleNum; i+=1) {
      new engine.particle(0, 0);
    }


})();