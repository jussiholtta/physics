var physicsApp = physicsApp || {}

/**
 * Generally used constants
 */

physicsApp.FULL_CIRCLE = 2.0*Math.PI;
physicsApp.HALF_CIRCLE = Math.PI;
physicsApp.QUARTER_CIRCLE = Math.PI/2.0;

// Observer related
// how much the observer turns when pitch or yaw is changed,
// divisor%8 must be 0 and <=8
physicsApp.ANGLE_STEP = physicsApp.FULL_CIRCLE/32.0;
// defined min and max angles
physicsApp.ANGLE_MAX = physicsApp.HALF_CIRCLE-physicsApp.ANGLE_STEP;
physicsApp.ANGLE_MIN = -physicsApp.HALF_CIRCLE;
physicsApp.OBSERVER_DEFAULT_SPEED = 10;

// Physical
physicsApp.GRAVITATIONAL_CONSTANT = 0.00000000006673848;
