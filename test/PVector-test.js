var physicsApp = physicsApp || {}

describe("physicsApp.PVector", function() {
    var vector = new physicsApp.Vector(1,2,2);
    var vector2 = new physicsApp.Vector(1,2,2);
    var point = new physicsApp.Point(0,0,0);

    //unit vectors
    var iv = new physicsApp.Vector(1,0,0),
    jv = new physicsApp.Vector(0,1,0),
    kv = new physicsApp.Vector(0,0,1),
    ivn = new physicsApp.Vector(-1,0,0),
    jvn = new physicsApp.Vector(0,-1,0),
    kvn = new physicsApp.Vector(0,0,-1);


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

    it("should calculate length with reasonable accuracy", function() {
      var v = new physicsApp.Vector(2,2,0.5);
      expect(v.length()).toEqual(Math.sqrt(8.25));
    });

    it("should be able to sum 2 vectors", function() {
        var sumVector = vector.plus(vector2);
        expect(sumVector).toEqual(new physicsApp.Vector(2,4,4)); 
        });

    it("should be able to chain sum vectors", function() {
        var sumVector = iv.plus(jv).plus(kv).plus(ivn);
        expect(sumVector).toEqual(new physicsApp.Vector(0,1,1)); 
        });

    it("shouldn't allow adding a point to a vector", function() {
        expect( function(){ vector.plus(point); } ).toThrow(new Error("No, no, no! Don't add points to vectors!"));
        });

    it("should do vector products", function() {
        expect(iv.product(jv)).toEqual(kv);
        expect(jv.product(iv)).toEqual(kvn);

        expect(iv.product(kv)).toEqual(jvn);
        expect(kv.product(iv)).toEqual(jv);

        expect(jv.product(kv)).toEqual(iv);
        expect(kv.product(jv)).toEqual(ivn);
        });

    it("should be able to chain vector products", function() {
        expect(iv.product(kv).product(kvn)).toEqual(new physicsApp.Vector(1,0,0));
      });

    it("should get 0 vector for self product", function() {
        expect(iv.product(iv)).toEqual(new physicsApp.Vector(0,0,0));
      });

    it("should be able to calculate fractional products with reasonable accuracy", function() {
      var fv = new physicsApp.Vector(0.5,0.5,0.5);
      var fv2 = new physicsApp.Vector(-1/2,1/4,1/3);
      var expectedProduct = new physicsApp.Vector(1/24,-5/12,3/8);
      var product = fv.product(fv2);
      testHelper.expectVectorToAlmostEqual(product,expectedProduct);
      });

    it("should be able to get unit vector for longer vector", function() {
        var l = vector.length();
        expect(vector.unit()).toEqual(new physicsApp.Vector(1/l,2/l,2/l));
      });

    it("should be able to scale vectors", function() {
      expect(vector.scale(2)).toEqual(new physicsApp.Vector(2,4,4));
    });
    
});
