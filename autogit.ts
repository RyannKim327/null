class Node {
  value: string;
  // Assuming each node can have children that are also of type Node
  constructor(value: string) {
    this.value = value;
  }
}

class Graph {
  adjacencyList: { [key: string]: Node[] } = {};

  addNode(value: string) {
    this.adjacencyList[value] = [];
  }

  addEdge(node1: string, node2: string) {
    this.adjacencyList[node1].push(new Node(node2));
    this.adjacencyList[node2].push(new Node(node1)); // Since this is undirected
  }
}
function biDirectionalSearch(graph: Graph, start: string, goal: string) {
  if (!graph.adjacencyList[start] || !graph.adjacencyList[goal]) {
    return null; // Return null if start or goal does not exist in graph
  }

  const forwardVisited: Set<string> = new Set();
  const backwardVisited: Set<string> = new Set();

  const forwardQueue: string[] = [start];
  const backwardQueue: string[] = [goal];

  while (forwardQueue.length && backwardQueue.length) {
    const forwardNode = forwardQueue.shift();
    const backwardNode = backwardQueue.shift();

    if (forwardNode && !forwardVisited.has(forwardNode)) {
      forwardVisited.add(forwardNode);
      
      if (backwardVisited.has(forwardNode)) {
        return `Path found involving node: ${forwardNode}`; // Path is found
      }

      for (const neighbor of graph.adjacencyList[forwardNode]) {
        forwardQueue.push(neighbor.value);
      }
    }

    if (backwardNode && !backwardVisited.has(backwardNode)) {
      backwardVisited.add(backwardNode);
      
      if (forwardVisited.has(backwardNode)) {
        return `Path found involving node: ${backwardNode}`; // Path is found
      }

      for (const neighbor of graph.adjacencyList[backwardNode]) {
        backwardQueue.push(neighbor.value);
      }
    }
  }

  return null; // Return null if no path is found
}
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

const result = biDirectionalSearch(graph, "A", "E");
console.log(result); // Output the result of the search
