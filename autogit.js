function dijkstra(graph, sourceNode, destinationNode) {
  const distances = new Map();
  const previousNodes = new Map();
  const unvisitedNodes = new Set();

  // Initialize distances and unvisited nodes
  for (const node in graph) {
    distances.set(node, Infinity);
    unvisitedNodes.add(node);
  }
  distances.set(sourceNode, 0);

  while (unvisitedNodes.size > 0) {
    let currentNode = null;

    // Select the node with the smallest distance
    for (const node of unvisitedNodes) {
      if (currentNode === null || distances.get(node) < distances.get(currentNode)) {
        currentNode = node;
      }
    }

    // Exit the loop if the destination node is reached
    if (currentNode === destinationNode) {
      break;
    }

    unvisitedNodes.delete(currentNode);

    // Update distances and previous nodes
    for (const neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const totalDistance = distances.get(currentNode) + distance;

      if (totalDistance < distances.get(neighbor)) {
        distances.set(neighbor, totalDistance);
        previousNodes.set(neighbor, currentNode);
      }
    }
  }

  // Build the shortest path
  const shortestPath = [destinationNode];
  let node = destinationNode;

  while (node !== sourceNode) {
    node = previousNodes.get(node);
    shortestPath.unshift(node);
  }

  return shortestPath;
}
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 1 },
  D: { B: 3, C: 1, E: 4 },
  E: { D: 4 },
};

const sourceNode = 'A';
const destinationNode = 'E';

const shortestPath = dijkstra(graph, sourceNode, destinationNode);
console.log(shortestPath);
