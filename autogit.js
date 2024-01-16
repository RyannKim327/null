class DirectedGraph {
  constructor(numNodes) {
    this.numNodes = numNodes;
    this.adjList = new Array(numNodes).fill(0).map(() => []);
  }

  addEdge(from, to) {
    this.adjList[from].push(to);
  }
}
function tarjansAlgorithm(graph) {
  const numNodes = graph.numNodes;
  const visited = new Array(numNodes).fill(false);
  const lowLink = new Array(numNodes).fill(0);
  const stack = [];
  let count = 0;
  function tarjanDFS(node) {
    visited[node] = true;
    lowLink[node] = count++;
    stack.push(node);

    for (const neighbor of graph.adjList[node]) {
      if (!visited[neighbor]) {
        tarjanDFS(neighbor);
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      } else if (stack.includes(neighbor)) {
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      }
    }

    if (lowLink[node] === visited[node]) {
      const component = [];
      let currNode;
      do {
        currNode = stack.pop();
        component.push(currNode);
      } while (currNode !== node);

      console.log("Strongly Connected Component:");
      console.log(component);
    }
  }
  for (let i = 0; i < numNodes; i++) {
    if (!visited[i]) {
      tarjanDFS(i);
    }
  }
}
// Create a directed graph with 5 nodes
const graph = new DirectedGraph(5);

// Add edges to the graph
graph.addEdge(0, 3);
graph.addEdge(0, 2);
graph.addEdge(1, 0);
graph.addEdge(2, 1);
graph.addEdge(3, 4);
graph.addEdge(4, 3);

// Find the strongly connected components
tarjansAlgorithm(graph);
