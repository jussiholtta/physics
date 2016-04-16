var testHelper = testHelper || {}

testHelper.epsilon = 1e-14

testHelper.expectVectorToAlmostEqual = function(f1, f2) { 
  expect(Math.abs(f1.a-f2.a)).toBeLessThan(testHelper.epsilon);
  expect(Math.abs(f1.b-f2.b)).toBeLessThan(testHelper.epsilon);
  expect(Math.abs(f1.c-f2.c)).toBeLessThan(testHelper.epsilon);
}
