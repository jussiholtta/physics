var physicsApp = physicsApp || {}

describe("physicsApp.Point", function() {
    var point = new physicsApp.Point(1,2,3);
    var point2 = new physicsApp.Point(1,2,3);
    var vector = new physicsApp.Vector(1,2,3)

    beforeEach(function(){
      });

    afterEach(function() {
      point.x = 1;
      point.y = 2;
      point.z = 3;
      point2.x = 1;
      point2.y = 2;
      point2.z = 3;
      });

    it("should match equal points", function() {
      expect(point).toEqual(point2);
      });

    it("shouldn't match unequal points", function() {
        point2.x = 14;
        expect(point).not.toEqual(point2);
        });

    it("should know points in same spot have 0 distance between them", function() {
        expect(point.distance(point2)).toEqual(0);
        });

    it("should know how to calculate distance", function() {
        point2.x = 2
        point2.y = 3
        point2.z = 4
        expect(point.distance(point2)).toEqual(Math.sqrt(3));
        });

    it("should be able to move a point by adding a vector", function() {
        expect(point.plus(vector)).toEqual(new physicsApp.Point(2,4,6));
        });

    it("shouldn't allow adding points together", function() {
      expect( function(){ point.plus(point); } ).toThrow(new Error("No, no, no! Don't add points together!"));
      });

});


