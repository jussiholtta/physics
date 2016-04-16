var physicsApp = physicsApp || {}

describe("physicsApp.Observer", function() {
    var observer = new physicsApp.Observer(0,0,-10,0,0,0,0);
    var angledObserver = new physicsApp.Observer(0,0,-10.0,physicsApp.QUARTER_CIRCLE/2.0, physicsApp.QUARTER_CIRCLE/2.0);

    afterEach(function() {
      observer = new physicsApp.Observer(0,0,-10,0,0,0,0);
      angledObserver = new physicsApp.Observer(0,0,-10.0,physicsApp.QUARTER_CIRCLE/2.0, physicsApp.QUARTER_CIRCLE/2.0);
      });

    it("initializes in simple case correctly", function() {
      expect(observer.forward).toEqual(new physicsApp.Vector(0,0,1));
      expect(observer.position).toEqual(new physicsApp.Point(0,0,-10));
      });

    it("initializes angled correctly", function() {
      var expectedForward = new physicsApp.Vector(-Math.sqrt(0.5), 0.5, 0.5);
      testHelper.expectVectorToAlmostEqual(angledObserver.forward,expectedForward);
      expect(angledObserver.position).toEqual(new physicsApp.Point(0,0,-10));
      });

    it("is able to fly forward", function () {
      observer.moveForward();
      expect(observer.position).toEqual(new physicsApp.Point(0,0,0));
      });

    it("is able to fly backwards", function () {
      observer.moveBackwards();
      expect(observer.position).toEqual(new physicsApp.Point(0,0,-20));
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
        testHelper.expectPointToAlmostEqual(observer.position,p);
        });

    it("is able to fly a loop at an angle and return to the same position", function() {
        var n = physicsApp.FULL_CIRCLE/physicsApp.ANGLE_STEP;
        var f = angledObserver.forward;
        var p = angledObserver.position;
        for (i = 0; i < n; i++) {
        angledObserver.moveForward();
        angledObserver.pitchDown();
        }
        testHelper.expectVectorToAlmostEqual(angledObserver.forward,f);
        testHelper.expectPointToAlmostEqual(angledObserver.position,p);
        });

    it("is able to fly a circle and return to the same position", function() {
        var n = physicsApp.FULL_CIRCLE/physicsApp.ANGLE_STEP;
        var f = observer.forward;
        var p = observer.position;
        for (i = 0; i < n; i++) {
        observer.moveBackwards();
        observer.yawLeft();
        }
        testHelper.expectVectorToAlmostEqual(observer.forward,f);  
        testHelper.expectPointToAlmostEqual(observer.position,p);
        });

    it("is able to fly a circle in an angle and return to the same position", function() {
        var n = physicsApp.FULL_CIRCLE/physicsApp.ANGLE_STEP;
        var f = angledObserver.forward;
        var p = angledObserver.position;
        for (i = 0; i < n; i++) {
        angledObserver.moveForward();
        angledObserver.yawRight();
        }
        testHelper.expectVectorToAlmostEqual(angledObserver.forward,f);  
        testHelper.expectPointToAlmostEqual(angledObserver.position,p);
        });

    it("is able to fly around and return to the same position", function() {
        var n = physicsApp.FULL_CIRCLE/physicsApp.ANGLE_STEP;
        var f = angledObserver.forward;
        var p = angledObserver.position;
        for (i = 0; i < n; i++) {
          angledObserver.moveForward();
          angledObserver.yawRight();
        }
        for (i = 0; i < n; i++) {
          angledObserver.moveBackwards();
          angledObserver.yawLeft();
        }
        for (i = 0; i < n; i++) {
          angledObserver.moveForward();
          angledObserver.pitchUp();
        }

        for (i = 0; i < n; i++) {
          angledObserver.moveForward();
          angledObserver.pitchDown();
        }

        testHelper.expectVectorToAlmostEqual(angledObserver.forward,f);  
        testHelper.expectPointToAlmostEqual(angledObserver.position,p);
      });
});
