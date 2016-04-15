var physicsApp = physicsApp || {}

describe("physicsApp.Observer", function() {
    var observer = new physicsApp.Observer(0,0,-10,0,0,0,0);
    var angledObserver = new physicsApp.Observer(0,0,-10.0,physicsApp.QUARTER_CIRCLE/2.0, physicsApp.QUARTER_CIRCLE/2.0);

    afterEach(function() {
      var observer = new physicsApp.Observer(0,0,-10,0,0,0,0);
      var angledObserver = new physicsApp.Observer(0,0,-10.0,physicsApp.QUARTER_CIRCLE/2.0, physicsApp.QUARTER_CIRCLE);
      });

    it("should initialize in simple case correctly", function() {
      expect(observer.forward).toEqual(new physicsApp.Vector(0,0,1).scale(physicsApp.OBSERVER_DEFAULT_SPEED));
      });

    it("should initialize angled correctly", function() {
      var expectedForward = new physicsApp.Vector(-Math.sqrt(0.5), 0.5, 0.5).scale(physicsApp.OBSERVER_DEFAULT_SPEED);
      expect(Math.abs(angledObserver.forward.a-expectedForward.a)).toBeLessThan(physicsApp.epsilon);
      expect(Math.abs(angledObserver.forward.b-expectedForward.b)).toBeLessThan(physicsApp.epsilon);
      expect(Math.abs(angledObserver.forward.c-expectedForward.c)).toBeLessThan(physicsApp.epsilon);
      });
});
