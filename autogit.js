class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.queue.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.queue.length; i++) {
        if (element.cost < this.queue[i].cost) {
          this.queue.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.queue.push(element);
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Underflow';
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

function heuristicCost(node, goal) {
  // Calculate the heuristic cost between a node and the goal
  // Examples: Euclidean distance, Manhattan distance, etc.
  return Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y);
}

function aStarSearch(graph, start, goal) {
  let openSet = new PriorityQueue();
  let cameFrom = {};
  let gScore = {};
  let fScore = {};

  gScore[start] = 0;
  fScore[start] = heuristicCost(start, goal);
  openSet.enqueue({ node: start, cost: fScore[start] });

  while (!openSet.isEmpty()) {
    let current = openSet.dequeue().node;

    if (current === goal) {
      // Reconstruct the path
      let path = [current];
      while (current in cameFrom) {
        current = cameFrom[current];
        path.unshift(current);
      }
      return path; // Found the goal, return the path
    }

    // Expand neighbor nodes
    for (let neighbor of graph[current]) {
      let tentativeGScore = gScore[current] + neighbor.cost;
      if (!(neighbor.node in gScore) || tentativeGScore < gScore[neighbor.node]) {
        // Update the gScore for this neighbor
        cameFrom[neighbor.node] = current;
        gScore[neighbor.node] = tentativeGScore;
        fScore[neighbor.node] = gScore[neighbor.node] + heuristicCost(neighbor.node, goal);
        openSet.enqueue({ node: neighbor.node, cost: fScore[neighbor.node] });
      }
    }
  }

  return null; // No path found
}

// Example usage

// Define your graph representation
const graph = {
  'A': [{ node: 'B', cost: 1 }, { node: 'C', cost: 3 }],
  'B': [{ node: 'A', cost: 1 }, { node: 'C', cost: 1 }],
  'C': [{ node: 'A', cost: 3 }, { node: 'B', cost: 1 }, { node: 'D', cost: 2 }],
  'D': [{ node: 'C', cost: 2 }],
};

// Start and goal nodes
const startNode = 'A';
const goalNode = 'D';

// Find the shortest path
const path = aStarSearch(graph, startNode, goalNode);

console.log(path); // Output: ["A", "B", "C", "D"]
