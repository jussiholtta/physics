var physicsApp = physicsApp || {}

physicsApp.Observer = function(x,y,z,pitch,yaw) {
  physicsApp.Entity.call(this, x, y, z, 0, 0, 1, physicsApp.OBSERVER_DEFAULT_SPEED)
  //save originals for reset
  this.ORIGINAL_PITCH = pitch;
  this.ORIGINAL_YAW = yaw;
  this.ORIGINAL_POSITION = new physicsApp.Point(x,y,z);
  this.reset(); 

};

physicsApp.Observer.prototype.reset = function() {
  var f = new physicsApp.Vector(0,0,1);
  var u = new physicsApp.Vector(0,1,0);
  var r = new physicsApp.Vector(-1,0,0);
  this.forward = f.scale(physicsApp.OBSERVER_DEFAULT_SPEED);
  this.up = u.scale(physicsApp.OBSERVER_DEFAULT_SPEED);
  this.right = r.scale(physicsApp.OBSERVER_DEFAULT_SPEED);
  this.pitch(this.ORIGINAL_PITCH);
  this.yaw(this.ORIGINAL_YAW);
};

physicsApp.Observer.prototype.pitch = function(angle) {
  this.forward = this.forward.scale(Math.cos(angle)).plus(this.up.scale(Math.sin(angle)));
  this.up = this.right.product(this.forward);
}

physicsApp.Observer.prototype.yaw = function(angle) {
  this.forward = this.forward.scale(Math.cos(angle)).plus(this.right.scale(Math.sin(angle))).unit().scale(physicsApp.OBSERVER_DEFAULT_SPEED);
  this.right = this.forward.product(this.up); 
}

