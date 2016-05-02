var physicsApp = physicsApp || {}

physicsApp.Entity = function(x,y,z,a,b,c) {
  if(arguments.length === 0) return;
  this.position = new physicsApp.Point(x,y,z);
  this.forward = new physicsApp.Vector(a,b,c);
};

physicsApp.Entity.prototype.tickForward = function() {
  //virtual void
}

physicsApp.Entity.prototype.moveForward = function() {
  this.position = this.position.plus(this.forward);
}

physicsApp.Entity.prototype.moveBackwards = function() {
  this.position = this.position.plus(this.forward.scale(-1));
}
