var physicsApp = physicsApp || {}

physicsApp.Vector = function(a,b,c) {
  this.a = a;
  this.b = b;
  this.c = c;
};

physicsApp.Vector.prototype.length = function() {
  return Math.sqrt(Math.pow(this.a,2) + Math.pow(this.b,2) + Math.pow(this.b,2));
}

physicsApp.Vector.prototype.unit = function() {
  var l = this.length();
  return new physicsApp.Vector(this.a/l, this.b/l, this.c/l);
}

physicsApp.Vector.prototype.plus = function(v) {
  if( v instanceof physicsApp.Point)
    throw new Error("No, no, no! Don't add points to vectors!");
  return new physicsApp.Vector(this.a + v.a, this.b + v.b, this.c + v.c);
}

physicsApp.Vector.prototype.product = function(v) {
  var i = this.b*v.c - this.c*v.b;
  var j = this.c*v.a - this.a*v.c;
  var k = this.a*v.b - this.b*v.a;
  return new physicsApp.Vector(i,j,k);
}

physicsApp.Vector.prototype.scale = function(s) {
  return new physicsApp.Vector(this.a*s, this.b*s, this.c*s);
}

