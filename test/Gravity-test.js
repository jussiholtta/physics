var physicsApp = physicsApp || {}

describe("physicsApp.Gravity", function() {
    var gravity = new physicsApp.Gravity();
    var point = new physicsApp.Point(0,0,0);

    beforeEach(function(){
      });

    afterEach(function() {
      gravity.reset();
      });

    it("initializes to 0 vector", function() {
      expect(gravity.length()).toEqual(0);
    });
  
    //do massObject first, original impl silly
    //it("is 0 if one mass is 0", function() {
    //  expect(gravity.length()).toEqual(0);
    //});

});
