class Node {
  constructor(position, parent = null, gScore = 0, hScore = 0) {
    this.position = position;
    this.parent = parent;
    this.gScore = gScore;
    this.hScore = hScore;
  }

  // Compute the total estimated cost (f-score) of a node
  get fScore() {
    return this.gScore + this.hScore;
  }
}
function astarSearch(start, goal) {
  // Define a priority queue (e.g., binary heap) for storing open nodes
  const openSet = new PriorityQueue();

  // Create the start node and add it to the open set
  const startNode = new Node(start);
  openSet.enqueue(startNode, startNode.fScore);

  // Create a map for storing the g-scores of nodes
  const gScores = new Map();
  gScores.set(start, 0);

  // Create a map for storing the parent nodes
  const parents = new Map();

  // A helper function to compute the distance between two positions (e.g., Euclidean distance)
  function distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // A helper function to compute the heuristic from a position to the goal position
  function heuristic(position) {
    return distance(position, goal);
  }

  while (!openSet.isEmpty()) {
    // Dequeue the node with the lowest f-score from the open set
    const current = openSet.dequeue();

    // Check if the current node is the goal node
    if (current.position === goal) {
      // Reconstruct the path
      const path = [];
      let node = current;
      while (node) {
        path.unshift(node.position);
        node = parents.get(node.position);
      }
      return path;
    }

    // Generate the neighboring positions
    const neighbors = generateNeighbors(current.position);

    for (const neighbor of neighbors) {
      // Compute the tentative g-score for the neighbor
      const neighborGScore = current.gScore + distance(current.position, neighbor);

      if (!gScores.has(neighbor) || neighborGScore < gScores.get(neighbor)) {
        // Update or insert the neighbor's g-score
        gScores.set(neighbor, neighborGScore);

        // Compute the estimated (heuristic) cost to the goal
        const hScore = heuristic(neighbor);

        // Create the neighbor node
        const neighborNode = new Node(neighbor, current, neighborGScore, hScore);

        // Add the neighbor node to the open set
        openSet.enqueue(neighborNode, neighborNode.fScore);

        // Update the parent node of the neighbor
        parents.set(neighbor, current);
      }
    }
  }

  // No path found
  return null;
}
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.sort();
  }

  dequeue() {
    return this.queue.shift().element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }
}
