var physicsApp = physicsApp || {}

describe("physicsApp.SimpleMassObject", function() {
    var simpleMassObject = new physicsApp.SimpleMassObject(0,0,-10,0,0,0,1);

    afterEach(function() {
      simpleMassObject = new physicsApp.SimpleMassObject(0,0,-10,0,0,0,1);
      });

    it("initializes in simple case correctly", function() {
      expect(simpleMassObject.forward).toEqual(new physicsApp.Vector(0,0,0));
      expect(simpleMassObject.position).toEqual(new physicsApp.Point(0,0,-10));
      expect(simpleMassObject.mass).toEqual(1);
      expect(simpleMassObject.gravity).toEqual(new physicsApp.Gravity());
      });

    it("is affected by a second mass object", function() {
      var smo2 = new physicsApp.SimpleMassObject(0,0,0,0,0,1,1);
      simpleMassObject.applyForce(smo2);
      var expectedGravity = new physicsApp.Gravity();
      expectedGravity.a = 0;
      expectedGravity.b = 0;
      expectedGravity.c = 1/100;
      expect(simpleMassObject.gravity).toEqual(expectedGravity);
    });

    it("checks the type of the object use when applying force", function() {
      expect(function () {simpleMassObject.applyForce(234)}).toThrow(new Error("Invalid object type"));
    });

    it("is not affected by the Observer", function() {
      expect(function () {simpleMassObject.applyForce(new physicsApp.Observer)}).not.toThrow();
      expect(simpleMassObject.gravity).toEqual(new physicsApp.Gravity());
    });

    it("moves if affected by force when time ticks forward", function() {
      var smo2 = new physicsApp.SimpleMassObject(0,0,0,0,0,1,100);
      simpleMassObject.applyForce(smo2);
      simpleMassObject.tickForward(1);
      var expectedPosition = new physicsApp.Point(0,0,-9.5);
      var expectedForward = new physicsApp.Vector(0,0,1);
      expect(simpleMassObject.position).toEqual(expectedPosition);
      expect(simpleMassObject.forward).toEqual(expectedForward);
    });

});
