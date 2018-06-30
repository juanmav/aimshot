const test = require('tape');
const { calculateLineParams, calculateLineCirclePhysicIntersection } = require('./helpers');


test('Calculate line params', function (t) {
    let line = { x: 10, y: 10, shootAngle: 23};
    let params = calculateLineParams(line);

    t.equal('0.424', parseFloat(params.m).toFixed(3));
    t.equal('5.755', parseFloat(params.c).toFixed(3));

    t.end();
});

test('Calculate Intersection line and a Circle', function (t) {

    let targets = [
        { x: 100, y: 50, diameter: 10, prizePoints: 100 },
        { x: 300, y: 300, diameter: 25, prizePoints: 200 },
        { x: 500, y: 300, diameter: 25, prizePoints: 200 }
    ];

    let line = { x: 10, y: 10, angle: 23 };
    let hits = targets.map( t=> calculateLineCirclePhysicIntersection(line, t));
    t.equal(hits.length, 3);

    t.end();

});
