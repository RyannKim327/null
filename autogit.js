class Node {
  constructor(name) {
    this.name = name;
    this.edges = [];
  }

  addEdge(node, weight) {
    this.edges.push({ node, weight });
  }
}

// Create nodes and add edges
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');

nodeA.addEdge(nodeB, 4);
nodeA.addEdge(nodeC, 2);
nodeB.addEdge(nodeC, 1);
function dijkstra(startNode) {
  // Set initial distances from startNode to all other nodes as Infinity
  const distances = {};
  for (const node of graph) {
    distances[node.name] = Infinity;
  }
  // Set distance from startNode to itself as 0
  distances[startNode.name] = 0;

  // Create a priority queue to store the nodes to be processed
  const queue = [startNode];

  while (queue.length > 0) {
    // Sort the nodes in the queue based on their distances
    queue.sort((a, b) => distances[a.name] - distances[b.name]);

    // Get the node with the shortest distance from the startNode
    const currentNode = queue.shift();

    // Visit all the neighbors of the current node
    for (const { node, weight } of currentNode.edges) {
      // Calculate the new distance from startNode to the neighbor node
      const distance = distances[currentNode.name] + weight;

      // Update the distance if the new distance is shorter
      if (distance < distances[node.name]) {
        distances[node.name] = distance;

        // Add the neighbor node to the queue for further processing
        queue.push(node);
      }
    }
  }

  return distances;
}

// Usage example
const graph = [nodeA, nodeB, nodeC];
const distances = dijkstra(nodeA);
console.log(distances);
