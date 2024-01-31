class Graph {
  constructor() {
    this.nodes = new Map();
  }
  
  addNode(id) {
    if (!this.nodes.has(id)) {
      this.nodes.set(id, []);
    }
  }
  
  addEdge(source, destination, weight) {
    if (this.nodes.has(source) && this.nodes.has(destination)) {
      this.nodes.get(source).push({ destination, weight });
      this.nodes.get(destination).push({ destination: source, weight }); // if the graph is undirected
    }
  }
}
function dijkstra(graph, source) {
  const distances = new Map(); // distance from source to a node
  const visited = new Set(); // track visited nodes
  const queue = new PriorityQueue(); // min-heap to extract nodes with minimum distance
  
  // initialize distances and add the source node to the queue
  graph.nodes.forEach((_, node) => {
    distances.set(node, Infinity);
  });
  distances.set(source, 0);
  queue.enqueue(source, 0);
  
  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue().element;
    
    if (visited.has(currentNode)) {
      continue;
    }
    visited.add(currentNode);
    
    for (const { destination, weight } of graph.nodes.get(currentNode)) {
      const distance = distances.get(currentNode) + weight;
      
      if (distance < distances.get(destination)) {
        distances.set(destination, distance);
        queue.enqueue(destination, distance);
      }
    }
  }
  
  return distances;
}
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 1);

const source = 'A';
const distances = dijkstra(graph, source);

console.log(`Shortest distances from ${source}:`);
distances.forEach((distance, node) => {
  console.log(`Distance to node ${node}: ${distance}`);
});
Shortest distances from A:
Distance to node A: 0
Distance to node B: 4
Distance to node C: 2
Distance to node D: 3
