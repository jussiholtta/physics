var physicsApp = physicsApp || {}

physicsApp.Vector = function(a,b,c) {
  this.a = a;
  this.b = b;
  this.c = c;
};

physicsApp.Vector.prototype.length = function() {
  return Math.sqrt(Math.pow(this.a,2) + Math.pow(this.b,2) + Math.pow(this.b,2));
}

physicsApp.Vector.prototype.plus = function(v) {
  if( v instanceof physicsApp.Point)
    throw new Error("No, no, no! Don't add points to vectors!");
  return new physicsApp.Vector(this.a + v.a, this.b + v.b, this.c + v.c);
}

