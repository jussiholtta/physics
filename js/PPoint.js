var physicsApp = physicsApp || {}

physicsApp.Point = function(x,y,z) {
  this.x = physicsApp.epsilonCheck(x);
  this.y = physicsApp.epsilonCheck(y);
  this.z = physicsApp.epsilonCheck(z);
};

physicsApp.Point.prototype.distance = function(p) {
  var dist = Math.sqrt(Math.pow(this.x-p.x,2) + Math.pow(this.y-p.y,2) + Math.pow(this.z-p.z,2))
  return physicsApp.epsilonCheck(dist);
}

physicsApp.Point.prototype.plus = function(v) {
  if( v instanceof physicsApp.Point)
    throw new Error("No, no, no! Don't add points together!");
  return new physicsApp.Point(this.x + v.a, this.y + v.b, this.z + v.c);
}

