var physicsApp = physicsApp || {}

describe("physicsApp.PEngine", function() {
    var objects = [
    new physicsApp.Observer(0,0,-10,0,0),
    new physicsApp.SimpleMassObject(0,1,0,0,0,0,1),
    new physicsApp.SimpleMassObject(0,0,0,0,0,0,1),
    new physicsApp.SimpleMassObject(0,-1,0,0,0,0,1),
    ];

    var engine = new physicsApp.Engine(objects);

    afterEach(function() {
      engine.objects = [
        new physicsApp.Observer(0,0,-10,0,0),
        new physicsApp.SimpleMassObject(0,1,0,0,0,0,1),
        new physicsApp.SimpleMassObject(0,0,0,0,0,0,1),
        new physicsApp.SimpleMassObject(0,-1,0,0,0,0,1),
                ];
      });

    it("can calculate gravity", function() {
        engine.calcGravity();
        var eg1 = new physicsApp.Gravity();
        eg1.b = -1.25;
        var eg2 = new physicsApp.Gravity();
        var eg3 = new physicsApp.Gravity();
        eg3.b = 1.25;
        expect(engine.objects[0].gravity).toEqual(undefined)
        expect(engine.objects[1].gravity).toEqual(eg1)
        expect(engine.objects[2].gravity).toEqual(eg2)
        expect(engine.objects[3].gravity).toEqual(eg3)
        });

    it("can simulate time", function() {
      engine.tickForward(1);
      expect(engine.objects[0].position).toEqual(new physicsApp.Point(0,0,-10));
      expect(engine.objects[1].position).toEqual(new physicsApp.Point(0,0.375,0));
      expect(engine.objects[2].position).toEqual(new physicsApp.Point(0,0.0,0));
      expect(engine.objects[3].position).toEqual(new physicsApp.Point(0,0.-0.375,0));
      expect(engine.objects[0].forward).toEqual(new physicsApp.Vector(0,0,1));
      expect(engine.objects[1].forward).toEqual(new physicsApp.Vector(0,-1.25,0));
      expect(engine.objects[2].forward).toEqual(new physicsApp.Vector(0,0.0,0));
      expect(engine.objects[3].forward).toEqual(new physicsApp.Vector(0,1.25,0));
    });

    it("can simulate 2 ticks", function() {
      engine.tickForward(1);
      engine.tickForward(1);
      expect(engine.objects[0].position).toEqual(new physicsApp.Point(0,0,-10));
      testHelper.expectPointToAlmostEqual(engine.objects[1].position, new physicsApp.Point(0,3/8-205/36,0));
      expect(engine.objects[2].position).toEqual(new physicsApp.Point(0,0.0,0));
      testHelper.expectPointToAlmostEqual(engine.objects[3].position, new physicsApp.Point(0,-3/8+205/36,0));
    });
});
