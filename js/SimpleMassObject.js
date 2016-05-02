var physicsApp = physicsApp || {}

physicsApp.SimpleMassObject = function(x,y,z,a,b,c,m) {
  physicsApp.Entity.call(this, x, y, z, a, b, c);
  this.mass = m;
  this.gravity = new physicsApp.Gravity();
};

physicsApp.SimpleMassObject.prototype = new physicsApp.Entity();
physicsApp.SimpleMassObject.prototype.constructor = physicsApp.SimpleMassObject;

physicsApp.SimpleMassObject.prototype.moveForward = function() {
  physicsApp.Entity.prototype.moveForward.call(this);
}

physicsApp.SimpleMassObject.prototype.moveBackwards = function() {
  physicsApp.Entity.prototype.moveBackwards.call(this);
}

physicsApp.SimpleMassObject.prototype.applyForce = function(o) {
  if( o instanceof physicsApp.SimpleMassObject) {
    var g = this.gravity.calculate(this.position,this.mass,o.position,o.mass);
    this.gravity.add(g);
    o.gravity.add(g.scale(-1));
    return;
  } else if(o instanceof physicsApp.Observer) {
      return;
  }
  throw new Error("Invalid object type");
}

physicsApp.SimpleMassObject.prototype.tickForward = function(t) {
  var acceleration = this.gravity.scale((1.0/this.mass));
  var dSpeed = acceleration.scale(t);
  var dPosition = this.forward.scale(t).plus(acceleration.scale(0.5*t*t));
  this.forward = this.forward.plus(dSpeed);
  this.position = this.position.plus(dPosition);
  this.gravity.reset();
}
