polygon-aabb
===

Get the Axis Aligned Bounding Box for a set of points (convex polygon).

## Installation

`npm i polygon-aabb --save`

## Usage

`bbox(points)`
Return a frame object containing the properties `x`, `y`, `width` and `height` of the bounding box.

## Example
```js
var bbox = require('polygon-aabb');

function debug(polygon) {
  var aabb = bbox(polygon);
  context.beginPath();
  context.fillRect(aabb.x, aabb.y);
  context.fill();
}

```