class Node {
  constructor(x, y, cost, heuristic) {
    this.x = x;
    this.y = y;
    this.cost = cost;
    this.heuristic = heuristic;
    this.totalCost = cost + heuristic;
    this.parent = null;
  }
}

class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  enqueue(node) {
    this.nodes.push(node);
    this.nodes.sort((a, b) => a.totalCost - b.totalCost);
  }

  dequeue() {
    return this.nodes.shift();
  }

  isEmpty() {
    return this.nodes.length === 0;
  }
}

function astar(start, goal, grid) {
  let openSet = new PriorityQueue();
  let closedSet = new Set();
  
  openSet.enqueue(start);
  
  while (!openSet.isEmpty()) {
    let currentNode = openSet.dequeue();
    
    if (currentNode.x === goal.x && currentNode.y === goal.y) {
      let path = [];
      while (currentNode !== start) {
        path.unshift(currentNode);
        currentNode = currentNode.parent;
      }
      path.unshift(start);
      return path;
    }
    
    closedSet.add(currentNode);
    
    let neighbors = getNeighbors(currentNode, grid);
    for (let neighbor of neighbors) {
      if (!closedSet.has(neighbor)) {
        let newCost = currentNode.cost + 1;
        let inOpenSet = openSet.nodes.find(node => node.x === neighbor.x && node.y === neighbor.y);
        
        if (!inOpenSet || newCost < neighbor.cost) {
          neighbor.cost = newCost;
          neighbor.heuristic = heuristic(neighbor, goal);
          neighbor.totalCost = newCost + neighbor.heuristic;
          neighbor.parent = currentNode;
          
          if (!inOpenSet) {
            openSet.enqueue(neighbor);
          }
        }
      }
    }
  }
  
  return null; // No path found
}

function getNeighbors(node, grid) {
  const neighbors = [];
  const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]]; // Assuming 4-directional movement
  
  for (let dir of directions) {
    const x = node.x + dir[0];
    const y = node.y + dir[1];
    if (isValidCell(x, y, grid)) {
      neighbors.push(new Node(x, y, Infinity, 0));
    }
  }
  
  return neighbors;
}

function isValidCell(x, y, grid) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] !== 'obstacle';
}

function heuristic(node, goal) {
  return Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y); // Manhattan distance heuristic
}

// Example usage
const start = new Node(0, 0, 0, heuristic(new Node(0, 0), new Node(4, 4))); // Start node at (0, 0)
const goal = new Node(4, 4, Infinity, 0); // Goal node at (4, 4)

const grid = [
  ['empty', 'empty', 'empty', 'empty', 'empty'],
  ['empty', 'obstacle', 'obstacle', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty', 'empty'],
  ['empty', 'obstacle', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty', 'empty']
];

const path = astar(start, goal, grid);
console.log(path);
