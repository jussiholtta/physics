var testHelper = testHelper || {}

testHelper.epsilon = 1e-13 //temporarily changed to lower tolerance, need to fix drift

testHelper.expectVectorToAlmostEqual = function(f1, f2) { 
  expect(Math.abs(f1.a-f2.a)).toBeLessThan(testHelper.epsilon);
  expect(Math.abs(f1.b-f2.b)).toBeLessThan(testHelper.epsilon);
  expect(Math.abs(f1.c-f2.c)).toBeLessThan(testHelper.epsilon);
}

testHelper.expectPointToAlmostEqual = function(p1, p2) {
  expect(p1.distance(p2)).toBeLessThan(testHelper.epsilon);
}
