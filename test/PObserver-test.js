var physicsApp = physicsApp || {}

describe("physicsApp.Observer", function() {
    var observer = new physicsApp.Observer(0,0,-10,0,0,0,0);
    var angledObserver = new physicsApp.Observer(0,0,-10.0,physicsApp.QUARTER_CIRCLE/2.0, physicsApp.QUARTER_CIRCLE/2.0);

    afterEach(function() {
      var observer = new physicsApp.Observer(0,0,-10,0,0,0,0);
      var angledObserver = new physicsApp.Observer(0,0,-10.0,physicsApp.QUARTER_CIRCLE/2.0, physicsApp.QUARTER_CIRCLE);
      });

    it("initializes in simple case correctly", function() {
      expect(observer.forward).toEqual(new physicsApp.Vector(0,0,1));
      });

    it("initializes angled correctly", function() {
      var expectedForward = new physicsApp.Vector(-Math.sqrt(0.5), 0.5, 0.5);
      testHelper.expectVectorToAlmostEqual(angledObserver.forward,expectedForward);
      });

    it("is able to fly a loop an return to the same position", function() {
      var n = physicsApp.FULL_CIRCLE/physicsApp.ANGLE_STEP;
      var f = observer.forward;
      var p = observer.position;
      for (i = 0; i < n; i++) {
        observer.moveForward();
        observer.pitchUp();
      }
      testHelper.expectVectorToAlmostEqual(observer.forward,f);  
      });
});
