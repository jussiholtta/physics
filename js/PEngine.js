var physicsApp = physicsApp || {}

physicsApp.Engine = function(o) {
  this.objects = o;
};

physicsApp.Engine.prototype.calcGravity = function() {
  var i, j, len;
  for (i = 0, len = this.objects.length; i < len; ++i) {
    if(this.objects[i] instanceof physicsApp.SimpleMassObject) {
      for (j = i+1, len = this.objects.length; j < len; ++j) {
        //you can't touch without being touched, a single applyForce affects both objects involved
        this.objects[i].applyForce(this.objects[j]);
      }
    }
  }
}

physicsApp.Engine.prototype.tickForward = function(t) {
  this.calcGravity();
  var i, len;
  for (i = 0, len = this.objects.length; i < len; ++i) {
    this.objects[i].tickForward(t);
  }
}
