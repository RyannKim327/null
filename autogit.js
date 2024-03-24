function Node(x, y, parent) {
  this.x = x;
  this.y = y;
  this.parent = parent;
  
  this.g = 0; // Cost from start node to current node
  this.h = 0; // Heuristic cost from current node to goal node
  this.f = 0; // Total cost (g + h)
}

function astar(start, goal, grid) {
  var openSet = [];
  var closedSet = [];
  
  openSet.push(start);
  
  while (openSet.length > 0) {
    var currentNode = openSet[0];
    var currentIndex = 0;
    
    // Find the node with the lowest f value
    openSet.forEach(function(node, index) {
      if (node.f < currentNode.f) {
        currentNode = node;
        currentIndex = index;
      }
    });
    
    // Remove the current node from the open set and add it to the closed set
    openSet.splice(currentIndex, 1);
    closedSet.push(currentNode);
    
    // If we've reached the goal, construct the path and return it
    if (currentNode.x === goal.x && currentNode.y === goal.y) {
      var path = [];
      var current = currentNode;
      while (current != null) {
        path.push({ x: current.x, y: current.y });
        current = current.parent;
      }
      return path.reverse();
    }
    
    // Generate neighbors of the current node
    var neighbors = [];
    var directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (var i = 0; i < directions.length; i++) {
      var neighborX = currentNode.x + directions[i][0];
      var neighborY = currentNode.y + directions[i][1];
      
      if (neighborX < 0 || neighborX >= grid.length || neighborY < 0 || neighborY >= grid[0].length || grid[neighborX][neighborY] === 1) {
        continue;
      }
      
      var neighbor = new Node(neighborX, neighborY, currentNode);
      neighbors.push(neighbor);
    }
    
    // For each neighbor
    for (var j = 0; j < neighbors.length; j++) {
      var neighbor = neighbors[j];
      
      // If the neighbor is in the closed set, skip it
      if (closedSet.some(function(node) { return node.x === neighbor.x && node.y === neighbor.y })) {
        continue;
      }
      
      // Calculate the costs of the neighbor
      neighbor.g = currentNode.g + 1;
      neighbor.h = Math.abs(neighbor.x - goal.x) + Math.abs(neighbor.y - goal.y);
      neighbor.f = neighbor.g + neighbor.h;
      
      // If the neighbor is not in the open set, add it
      if (!openSet.some(function(node) { return node.x === neighbor.x && node.y === neighbor.y })) {
        openSet.push(neighbor);
      }
    }
  }
  
  // If no path is found, return empty array
  return [];
}

// Example usage
var start = new Node(0, 0, null);
var goal = { x: 4, y: 4 };
var grid = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0]
];

var path = astar(start, goal, grid);
console.log(path);
