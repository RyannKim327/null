const graph = {}; // Adjacency list representation of the graph
const stack = []; // Stack to keep track of visited vertices
const visited = {}; // Object to keep track of visited vertices
const lowLink = {}; // Object to store the low link values
const ids = {}; // Object to assign unique ids to each vertex
let id = 0; // Variable to assign a unique id to each vertex
const scc = []; // Array to store the strongly connected components
function tarjansAlgorithm(node) {
  visited[node] = true;
  lowLink[node] = ids[node] = id++;
  stack.push(node);

  const neighbors = graph[node];

  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i];

    if (!visited[neighbor]) {
      tarjansAlgorithm(neighbor);
      lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
    } else if (stack.includes(neighbor)) {
      lowLink[node] = Math.min(lowLink[node], ids[neighbor]);
    }
  }

  if (lowLink[node] === ids[node]) {
    const component = [];
    let currNode;

    do {
      currNode = stack.pop();
      component.push(currNode);
    } while (currNode !== node);

    scc.push(component);
  }
}
function findStronglyConnectedComponents() {
  for (const node in graph) {
    if (!visited[node]) {
      tarjansAlgorithm(node);
    }
  }
}
// Example graph
graph['A'] = ['B'];
graph['B'] = ['C', 'E', 'F'];
graph['C'] = ['D', 'G'];
graph['D'] = ['C', 'H'];
graph['E'] = ['A', 'F'];
graph['F'] = ['G'];
graph['G'] = ['F'];
graph['H'] = ['D', 'G'];

findStronglyConnectedComponents();

console.log(scc);
