var physicsApp = physicsApp || {}

physicsApp.Entity = function(x,y,z,a,b,c,s) {
  if(arguments.length === 0) return;
  this.position = new physicsApp.Point(x,y,z);
  this.forward = new physicsApp.Vector(a,b,c).unit();
  this.speed = s;
};

physicsApp.Entity.prototype.moveForward = function() {
  this.position = this.position.plus(this.forward.scale(this.speed));
}

physicsApp.Entity.prototype.moveBackwards = function() {
  this.position = this.position.plus(this.forward.scale(-this.speed));
}
