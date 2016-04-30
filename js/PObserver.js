var physicsApp = physicsApp || {}

physicsApp.Observer = function(x,y,z,pitch,yaw) {
  physicsApp.Entity.call(this, x, y, z, 0, 0, 1);
  
  //observer uses unit vectors for directions to simplify pitch&yaw, so speed is handled as a scalar instead of embedding to the forward vector
  this.speed = physicsApp.OBSERVER_DEFAULT_SPEED;

  //save originals for reset
  this.ORIGINAL_PITCH = physicsApp.epsilonCheck(pitch);
  this.ORIGINAL_YAW = physicsApp.epsilonCheck(yaw);
  this.ORIGINAL_POSITION = new physicsApp.Point(x,y,z);
  this.reset(); 

};

physicsApp.Observer.prototype = new physicsApp.Entity();
physicsApp.Observer.prototype.constructor = physicsApp.Observer;

physicsApp.Observer.prototype.moveForward = function() {
  this.position = this.position.plus(this.forward.scale(this.speed));
}

physicsApp.Observer.prototype.moveBackwards = function() {
  this.position = this.position.plus(this.forward.scale(-this.speed));
}


physicsApp.Observer.prototype.reset = function() {
  this.forward = new physicsApp.Vector(0,0,1);
  this.up = new physicsApp.Vector(0,1,0);
  this.right = new physicsApp.Vector(-1,0,0);
  this.pitch(this.ORIGINAL_PITCH);
  this.yaw(this.ORIGINAL_YAW);
};

physicsApp.Observer.prototype.pitch = function(angle) {
  var m = this.forward.scale(Math.cos(angle)).plus(this.up.scale(Math.sin(angle)));
  this.forward = m.unit();
  this.up = this.right.product(this.forward);
}

physicsApp.Observer.prototype.yaw = function(angle) {
  var m = this.forward.scale(Math.cos(angle)).plus(this.right.scale(Math.sin(angle)));
  this.forward = m.unit();
  this.right = this.forward.product(this.up);
}

physicsApp.Observer.prototype.pitchUp = function() {
  this.pitch(physicsApp.ANGLE_STEP);
}

physicsApp.Observer.prototype.pitchDown = function() {
  this.pitch(-physicsApp.ANGLE_STEP);
}

physicsApp.Observer.prototype.yawLeft = function() {
  this.yaw(-physicsApp.ANGLE_STEP);
}

physicsApp.Observer.prototype.yawRight = function() {
  this.yaw(physicsApp.ANGLE_STEP);
}
