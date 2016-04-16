var physicsApp = physicsApp || {}

physicsApp.Vector = function(a,b,c) {
  this.a = physicsApp.epsilonCheck(a);
  this.b = physicsApp.epsilonCheck(b);
  this.c = physicsApp.epsilonCheck(c);
};

physicsApp.Vector.prototype.length = function() {
  var l = Math.sqrt(Math.pow(this.a,2) + Math.pow(this.b,2) + Math.pow(this.c,2));
  return physicsApp.epsilonCheck(l);
}

physicsApp.Vector.prototype.unit = function() {
  var l = this.length();
  if(l == 0) {
    return new physicsApp.Vector(0,0,0);
  }
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

