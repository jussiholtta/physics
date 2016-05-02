var physicsApp = physicsApp || {}

physicsApp.Vector = function(a,b,c) {
  if(arguments.length === 0) return;
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


/*
* Gravity
*/

physicsApp.Gravity = function() {
  physicsApp.Vector.call(this, 0, 0, 0); 
};

physicsApp.Gravity.prototype = new physicsApp.Vector();
physicsApp.Gravity.prototype.constructor = physicsApp.Gravity;

physicsApp.Gravity.prototype.length = function() {
  return physicsApp.Vector.prototype.length.call(this);
}

physicsApp.Gravity.prototype.reset = function() {
  this.a = 0;
  this.b = 0;
  this.c = 0;
}

physicsApp.Gravity.prototype.calculate = function(p1,m1,p2,m2) {
  var distance = p1.distance(p2);
  var magnitude = (m1*m2)/(distance*distance);
  var v = new physicsApp.Vector(p2.x-p1.x, p2.y-p1.y, p2.z-p1.z);
  var force = v.unit().scale(magnitude);
  return force;
}

physicsApp.Gravity.prototype.plus = function(v) {
  if( v instanceof physicsApp.Point)
    throw new Error("No, no, no! Don't add points to vectors!");
  return new physicsApp.Gravity(this.a + v.a, this.b + v.b, this.c + v.c);
}

//Not using GRAVITATIONAL_CONSTANT yet as it's irrelevant if no other forces exist
physicsApp.Gravity.prototype.add = function() {
  var i;
  for(i=0 ; i < arguments.length; ++i) {
    this.a = this.a + arguments[i].a;
    this.b = this.b + arguments[i].b;
    this.c = this.c + arguments[i].c;
    //why doesn't this work? this.plus(arguments[i]);
  }
}

