var physicsApp = physicsApp || {}

describe("physicsApp.Gravity", function() {
    var gravity = new physicsApp.Gravity();
    var point = new physicsApp.Point(0,0,0);
    var point2 = new physicsApp.Point(0,0,2);

    beforeEach(function(){
      });

    afterEach(function() {
      gravity.reset();
      });

    it("initializes to 0 vector", function() {
      expect(gravity.length()).toEqual(0);
    });
  
    it("can calculate force", function() {
      gravity.add(point,1,point2,4);
      expect(gravity.length()).toEqual(1);
    });

    it("is 0 if one item is massless", function() {
      gravity.add(point,1,point2,0);
      expect(gravity.length()).toEqual(0);
    });

    it("can add multiple force sources", function() {
      gravity.add(point,1,point2,4);
      gravity.add(point,1,point2,6);
      expect(gravity.length()).toEqual(2.5);
    });

    it("resets to 0", function() {
      gravity.add(point,1,point2,4);
      gravity.add(point,1,point2,6);
      expect(gravity.length()).toEqual(2.5);
      gravity.reset(); 
      expect(gravity.length()).toEqual(0);
    });

});
