class Node {
  constructor(x, y, g = 0, h = 0) {
    this.x = x; // x-coordinate
    this.y = y; // y-coordinate
    this.g = g; // cost from start node to current node
    this.h = h; // heuristic (estimated) cost from current node to goal node
    this.f = g + h; // total cost (f = g + h)
    this.parent = null; // parent node
  }
}
function aStar(start, goal, grid) {
  const openSet = [start];
  const closedSet = [];
  
  while (openSet.length > 0) {
    // Find the node with the lowest f value in the open set
    let lowestIndex = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[lowestIndex].f) {
        lowestIndex = i;
      }
    }
    const current = openSet[lowestIndex];
    
    // Check if goal node is reached
    if (current === goal) {
      const path = [];
      let temp = current;
      while (temp) {
        path.unshift(temp);
        temp = temp.parent;
      }
      return path;
    }
    
    // Move current node from open set to closed set
    openSet.splice(lowestIndex, 1);
    closedSet.push(current);
    
    // Generate neighboring nodes
    const neighbors = [];
    const {x, y} = current;
    
    if (x > 0) {
      neighbors.push(grid[x - 1][y]);
    }
    if (x < grid.length - 1) {
      neighbors.push(grid[x + 1][y]);
    }
    if (y > 0) {
      neighbors.push(grid[x][y - 1]);
    }
    if (y < grid[0].length - 1) {
      neighbors.push(grid[x][y + 1]);
    }
    
    // Process neighboring nodes
    for (const neighbor of neighbors) {
      if (!closedSet.includes(neighbor)) {
        const gScore = current.g + 1; // assuming the distance between two neighboring nodes is 1
        
        // Check if the neighbor is in the open set or if it has a lower g value
        if (openSet.includes(neighbor)) {
          if (gScore < neighbor.g) {
            neighbor.g = gScore;
            neighbor.f = gScore + neighbor.h;
            neighbor.parent = current;
          }
        } else {
          neighbor.g = gScore;
          neighbor.h = heuristic(neighbor, goal); // calculate heuristic cost
          neighbor.f = gScore + neighbor.h;
          neighbor.parent = current;
          openSet.push(neighbor);
        }
      }
    }
  }
  
  return null; // If no path is found
}
function heuristic(node, goal) {
  const dx = Math.abs(node.x - goal.x);
  const dy = Math.abs(node.y - goal.y);
  return Math.sqrt(dx * dx + dy * dy);
}
const grid = [
  // your grid representation here
];

const startNode = new Node(0, 0);
const goalNode = new Node(4, 4);

const path = aStar(startNode, goalNode, grid);

if (path) {
  // Path found, do something with the path
  console.log('Path found:', path);
} else {
  // Path not found
  console.log('No path found');
}
