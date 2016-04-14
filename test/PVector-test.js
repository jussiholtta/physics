var physicsApp = physicsApp || {}

describe("physicsApp.PVector", function() {
    var vector = new physicsApp.Vector(1,2,2);
    var vector2 = new physicsApp.Vector(1,2,2);
    var point = new physicsApp.Point(0,0,0);

    beforeEach(function(){
      });

    afterEach(function() {
      vector.a = 1;
      vector.b = 2;
      vector.c = 2;
      vector2.a = 1;
      vector2.b = 2;
      vector2.c = 2;
      });

    it("should match equal vectors", function() {
      expect(vector).toEqual(vector2);
      });

    it("shouldn't match unequal vectors", function() {
      vector2.a = 14;
      expect(vector).not.toEqual(vector2);
      });

    it("should calculate length", function() {
        expect(vector.length()).toEqual(3);
        });

    //test double accuracy too, may need epsilon thingie
    //it("should calculate length with sufficient accuracy", function() {
    //  expect(vector
    //});

    it("should be able to sum vectors", function() {
        var sumVector = vector.plus(vector2);
        expect(sumVector).toEqual(new physicsApp.Vector(2,4,4)); 
        });

    it("shouldn't allow adding a point to a vector", function() {
      expect( function(){ vector.plus(point); } ).toThrow(new Error("No, no, no! Don't add points to vectors!"));
      });


//it("", function() {
    //});
});
