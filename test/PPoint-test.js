describe("pPoint", function() {
    var point = NS.PPoint;

    beforeEach(function(){
      spyOn(point, 'init').and.callThrough();
      });

    afterEach(function() {
      point.reset();
      });

    it("should be able to initialize", function() {
      expect(point.init).toBeDefined();
      point.init();
      expect(point.init).toHaveBeenCalled();
      });

});
