'use strict';

var test = require('tape');
var bbox = require('../index.js');

test('Polygon with 3 points (triangle)', function(assert) {
    var points = [
        {x: 0, y: 0},
        {x: 0, y: 120},
        {x: 30, y: 25}
    ];

    var aabb = bbox(points);
    assert.equal(aabb.x, 0);
    assert.equal(aabb.y, 0);
    assert.equal(aabb.width, 30);
    assert.equal(aabb.height, 120);
    assert.end();
});

test('Polygon with 4 points', function(assert) {
    var points = [
        {x: 20, y: 0},
        {x: 0, y: 120},
        {x: 50, y: 90},
        {x: 20, y: 90}
    ];

    var aabb = bbox(points);
    assert.equal(aabb.x, 0);
    assert.equal(aabb.y, 0);
    assert.equal(aabb.width, 50);
    assert.equal(aabb.height, 120);
    assert.end();
});