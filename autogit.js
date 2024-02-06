class Node {
  constructor(x, y, walkable) {
    this.x = x; // x-coordinate of the node
    this.y = y; // y-coordinate of the node
    this.walkable = walkable; // boolean indicating walkability
    
    this.g = 0; // g-score
    this.h = 0; // h-score (heuristic)
    this.f = 0; // f-score (total cost)
    
    this.parent = null; // reference to the previous node
  }
}
function astarSearch(startNode, endNode, grid) {
  const openSet = []; // set of nodes to be evaluated
  const closedSet = []; // set of nodes already evaluated
  
  openSet.push(startNode); // add the start node to the open set
  
  while (openSet.length > 0) {
    // Find the node with the lowest f-score in the open set
    let lowestFScoreNode = openSet[0];
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].f < lowestFScoreNode.f) {
        lowestFScoreNode = openSet[i];
      }
    }
    
    // Remove the lowest f-score node from the open set
    openSet.splice(openSet.indexOf(lowestFScoreNode), 1);
    
    // Add the lowest f-score node to the closed set
    closedSet.push(lowestFScoreNode);
    
    // If the lowest f-score node is the goal, reconstruct the path and return it
    if (lowestFScoreNode === endNode) {
      return reconstructPath(lowestFScoreNode);
    }
    
    // Generate neighbors of the current node
    const neighbors = getNeighbors(lowestFScoreNode, grid);
    
    // Loop through each neighbor
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      
      // Skip this neighbor if it is already in the closed set or not walkable
      if (closedSet.includes(neighbor) || !neighbor.walkable) {
        continue;
      }
      
      // Calculate the tentative g-score
      const tentativeGScore = lowestFScoreNode.g + distance(lowestFScoreNode, neighbor);
      
      // If the neighbor is not in the open set, or the tentative g-score is lower
      if (!openSet.includes(neighbor) || tentativeGScore < neighbor.g) {
        neighbor.parent = lowestFScoreNode;
        neighbor.g = tentativeGScore;
        neighbor.h = heuristic(neighbor, endNode);
        neighbor.f = neighbor.g + neighbor.h;
        
        // Add the neighbor to the open set if it's not already there
        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }
  }
  
  // Return empty array if no path is found
  return [];
}
function distance(nodeA, nodeB) {
  // Euclidean distance between two nodes
  const dx = nodeA.x - nodeB.x;
  const dy = nodeA.y - nodeB.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function heuristic(nodeA, nodeB) {
  // Manhattan distance heuristic between two nodes
  const dx = Math.abs(nodeA.x - nodeB.x);
  const dy = Math.abs(nodeA.y - nodeB.y);
  return dx + dy;
}

function reconstructPath(node) {
  // Reconstruct the path from the end node to the start node
  const path = [node];
  while (node.parent !== null) {
    node = node.parent;
    path.unshift(node);
  }
  return path;
}

function getNeighbors(node, grid) {
  const neighbors = [];
  const { x, y } = node;
  
  // Check the four cardinal directions
  if (grid[x] && grid[x][y - 1]) neighbors.push(grid[x][y - 1]);
  if (grid[x] && grid[x][y + 1]) neighbors.push(grid[x][y + 1]);
  if (grid[x - 1] && grid[x - 1][y]) neighbors.push(grid[x - 1][y]);
  if (grid[x + 1] && grid[x + 1][y]) neighbors.push(grid[x + 1][y]);
  
  return neighbors;
}
// Create the grid
const grid = [];
const rows = 10;
const cols = 10;
for (let i = 0; i < rows; i++) {
  grid[i] = [];
  for (let j = 0; j < cols; j++) {
    // Assuming all nodes are walkable initially
    grid[i][j] = new Node(i, j, true);
  }
}

// Set some nodes as unwalkable
grid[2][2].walkable = false;
grid[3][2].walkable = false;
grid[4][2].walkable = false;
grid[5][2].walkable = false;

// Call A* search algorithm
const startNode = grid[0][0];
const endNode = grid[9][9];
const path = astarSearch(startNode, endNode, grid);

// Print the path
console.log("Path:", path);
