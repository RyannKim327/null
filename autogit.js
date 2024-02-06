class Graph {
  constructor(numNodes) {
    this.numNodes = numNodes;
    this.adjList = new Array(numNodes).fill(null).map(() => []);
  }

  addEdge(node1, node2) {
    this.adjList[node1].push(node2);
  }

  topologicalSortUtil(node, visited, stack) {
    visited[node] = true;

    // Recur for all the adjacent nodes
    for (const adjacentNode of this.adjList[node]) {
      if (!visited[adjacentNode]) {
        this.topologicalSortUtil(adjacentNode, visited, stack);
      }
    }

    // After visiting all adjacent nodes, push the current node to stack
    stack.push(node);
  }

  topologicalSort() {
    const visited = new Array(this.numNodes).fill(false);
    const stack = [];

    for (let node = 0; node < this.numNodes; node++) {
      if (!visited[node]) {
        this.topologicalSortUtil(node, visited, stack);
      }
    }

    // Print the order of the nodes
    while (stack.length > 0) {
      console.log(stack.pop());
    }
  }
}

// Example usage
const graph = new Graph(6);
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

console.log("Topological Sort:");
graph.topologicalSort();
