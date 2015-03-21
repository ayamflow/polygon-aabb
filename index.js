'use strict';

/**
 * Return the axis aligned bounding box
 * for a given set of points (convex polygon)
 * @param  {array}      points the points from the polygon
 * @return {object}     x, y, width and height property of the rectangle
 */
module.exports = function(points) {
  var start = {x: 0, y: 0};
  var end = {x: 0, y: 0};

  for(var i = 0; i < points.length; i++) {
    var p = points[i];
    start.x = p.x < start.x ? p.x : start.x;
    start.y = p.y < start.y ? p.y : start.y;

    end.x = p.x > end.x ? p.x : end.x;
    end.y = p.y > end.y ? p.y : end.y;
  }

  return {
    x: start.x,
    y: start.y,
    width: end.x - start.x,
    height: end.y - start.y
  };
}