var physicsApp = physicsApp || {}

physicsApp.Point = function(x,y,z) {
  this.x = x;
  this.y = y;
  this.z = z;
};

physicsApp.Point.prototype.distance = function(p) {
  return Math.sqrt(Math.pow(this.x-p.x,2) + Math.pow(this.y-p.y,2) + Math.pow(this.z-p.z,2))
}

