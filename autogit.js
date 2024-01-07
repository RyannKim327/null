class Node {
  constructor(position, parent = null, g = 0, h = 0) {
    this.position = position;
    this.parent = parent;
    this.g = g;
    this.h = h;
  }
  
  // Calculate the total cost (f)
  get f() {
    return this.g + this.h;
  }
}
function AStarSearch(graph, start, goal) {
  // Create open and closed lists
  const open = [];
  const closed = [];

  // Add the start node to the open list
  open.push(new Node(start));

  // Iterate until the open list is empty
  while (open.length > 0) {
    // Find the node with the lowest f value in the open list
    let currentNode = open[0];
    let currentIndex = 0;
    for (let i = 1; i < open.length; i++) {
      if (open[i].f < currentNode.f) {
        currentNode = open[i];
        currentIndex = i;
      }
    }

    // Move the current node from the open list to the closed list
    open.splice(currentIndex, 1);
    closed.push(currentNode);

    // Check if the current node is the goal
    if (currentNode.position === goal) {
      // Goal reached, construct the path
      const path = [];
      let current = currentNode;
      while (current.parent) {
        path.push(current.position);
        current = current.parent;
      }
      path.push(start);
      path.reverse();
      return path;
    }

    // Get neighboring nodes
    const neighbors = graph[currentNode.position];

    // Iterate over each neighbor
    for (let neighbor of neighbors) {
      // Create a new node for the neighbor
      const newNode = new Node(neighbor, currentNode);

      // Check if the neighbor is already in the closed list
      if (closed.find(node => node.position === newNode.position)) {
        continue;
      }

      // Calculate the g and h values for the neighbor
      newNode.g = currentNode.g + 1; // Assuming each edge has a cost of 1
      newNode.h = heuristic(newNode.position, goal);

      // Check if the neighbor is already in the open list and has a lower f value
      const openNode = open.find(node => node.position === newNode.position);
      if (openNode && newNode.f >= openNode.f) {
        continue;
      }

      // Add the neighbor to the open list
      open.push(newNode);
    }
  }

  // No path found
  return [];
}
function heuristic(position, goal) {
  const [x1, y1] = position;
  const [x2, y2] = goal;
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A', 'D'],
  'D': ['B', 'C', 'E'],
  'E': ['D']
};
const start = 'A';
const goal = 'E';
const path = AStarSearch(graph, start, goal);
console.log(path);
