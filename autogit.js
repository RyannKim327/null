let index = 0;              // Variable to track the index of each vertex
let stack = [];             // Stack to store the visited vertices
let result = [];            // Array to store the strongly connected components
let graph = {};             // Adjacency list representation of the graph
function addEdge(u, v) {
  if (graph[u]) {
    graph[u].push(v);
  } else {
    graph[u] = [v];
  }
}
function tarjansAlgorithm(u) {
  let lowLink = [];         // Tracker of the lowest index reachable vertex
  let onStack = [];         // Tracker of vertices on the current recursion stack

  index++;
  graph[u].index = index;
  graph[u].lowLink = index;
  stack.push(u);
  onStack[u] = true;

  for (let v of graph[u]) {
    if (!graph[v].index) {
      tarjansAlgorithm(v);
      graph[u].lowLink = Math.min(graph[u].lowLink, graph[v].lowLink);
    } else if (onStack[v]) {
      graph[u].lowLink = Math.min(graph[u].lowLink, graph[v].index);
    }
  }

  if (graph[u].lowLink === graph[u].index) {
    let component = [];
    let w;
    do {
      w = stack.pop();
      onStack[w] = false;
      component.push(w);
    } while (w !== u);
    result.push(component);
  }
}
function findStronglyConnectedComponents() {
  for (let u in graph) {
    if (!graph[u].index) {
      tarjansAlgorithm(u);
    }
  }
  return result;
}
addEdge(0, 1);
addEdge(1, 2);
addEdge(2, 0);
addEdge(2, 3);
addEdge(3, 4);
addEdge(4, 5);
addEdge(5, 3);

let stronglyConnectedComponents = findStronglyConnectedComponents();
console.log(stronglyConnectedComponents);
