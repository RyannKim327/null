class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Array(numVertices).fill().map(() => []);
  }

  addEdge(source, destination) {
    this.adjList[source].push(destination);
  }
}
function tarjanSCC(graph) {
  let id = 0;
  let stack = [];
  let ids = new Array(graph.numVertices).fill(-1);
  let lowLink = new Array(graph.numVertices);
  let onStack = new Array(graph.numVertices).fill(false);
  let result = [];

  function dfs(node) {
    stack.push(node);
    onStack[node] = true;
    ids[node] = id;
    lowLink[node] = id;
    id++;

    for (let neighbor of graph.adjList[node]) {
      if (ids[neighbor] === -1) {
        dfs(neighbor);
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      } else if (onStack[neighbor]) {
        lowLink[node] = Math.min(lowLink[node], ids[neighbor]);
      }
    }

    if (ids[node] === lowLink[node]) {
      let component = [];
      let currentNode;
      do {
        currentNode = stack.pop();
        onStack[currentNode] = false;
        component.push(currentNode);
      } while (currentNode !== node);
      result.push(component);
    }
  }

  for (let i = 0; i < graph.numVertices; i++) {
    if (ids[i] === -1) {
      dfs(i);
    }
  }

  return result;
}
// Create a graph with 6 vertices
const graph = new Graph(6);

// Add edges to the graph
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(0, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 3);

// Find strongly connected components
const stronglyConnectedComponents = tarjanSCC(graph);
console.log(stronglyConnectedComponents);
