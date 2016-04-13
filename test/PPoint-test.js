describe("pPoint", function() {
    var point = new PPoint(0,0,0);
    var point2 = new PPoint(0,0,0);

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
});
