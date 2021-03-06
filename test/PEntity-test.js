var physicsApp = physicsApp || {}

describe("physicsApp.PEntity", function() {
    var entity = new physicsApp.Entity(0,0,-10,0,0,10);
    var angledEntity = new physicsApp.Entity(1/3,0,-10.0,-Math.sqrt(1/2)*10, 0.5*10, 0.5*10);

    afterEach(function() {
      entity = new physicsApp.Entity(0,0,-10,0,0,10);
      angledEntity = new physicsApp.Entity(1/3,0,-10.0,-Math.sqrt(1/2)*10, 0.5*10, 0.5*10);
      });

    it("matches equal entitys", function() {
        expect(entity).toEqual(new physicsApp.Entity(0,0,-10,0,0,10));
        });

    it("doesn't match unequal entitys", function() {
        expect(entity).not.toEqual(new physicsApp.Entity(1,2,3,4,5,6,7,8));
        });

    it("is able to move forward", function() {
      entity.moveForward();
      p = new physicsApp.Point(0,0,0);
      expect(entity.position).toEqual(p);
    });
    
    it("is able to move backwards", function() {
      entity.moveBackwards();
      p = new physicsApp.Point(0,0,-20);
      expect(entity.position).toEqual(p);
    });

    it("is able to calculate position with reasonable accuracy", function() {
      angledEntity.moveBackwards();
      angledEntity.moveForward();
      angledEntity.moveBackwards();
      angledEntity.moveBackwards();
      var x = 1/3 + 2*Math.sqrt(1/2)*10,
          y = -5*2,
          z = -10-5*2;
      p = new physicsApp.Point(x,y,z);
      expect(angledEntity.position.distance(p)).toBeLessThan(testHelper.epsilon);
      });
      
});
