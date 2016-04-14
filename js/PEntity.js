var physicsApp = physicsApp || {}

physicsApp.Entity = function(x,y,z,a,b,c,s) {
  this.position = new physicsApp.Point(x,y,z);
  this.forward = new physicsApp.Vector(a,b,c).scale(s);
};

physicsApp.Entity.prototype.moveForward = function() {
  this.position = this.position.plus(this.forward);
}

physicsApp.Entity.prototype.moveBackwards = function() {
  this.position = this.position.plus(this.forward.scale(-1));
}
