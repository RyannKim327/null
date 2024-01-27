function tarjanSCC(graph) {
  const indices = [];
  const lowLink = [];
}
function tarjanSCC(graph) {
  const indices = [];
  const lowLink = [];
  const stack = [];
}
function tarjanSCC(graph) {
  const indices = [];
  const lowLink = [];
  const stack = [];
  const result = [];
}
function tarjanSCC(graph) {
  const indices = [];
  const lowLink = [];
  const stack = [];
  const result = [];

  function strongConnect(node) {
    indices[node] = indices.length;
    lowLink[node] = indices[node];
    stack.push(node);

    for (const neighbor of graph[node]) {
      if (!indices[neighbor]) {
        strongConnect(neighbor);
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      } else if (stack.includes(neighbor)) {
        lowLink[node] = Math.min(lowLink[node], indices[neighbor]);
      }
    }

    if (lowLink[node] === indices[node]) {
      const component = [];
      let currentNode;
      do {
        currentNode = stack.pop();
        component.push(currentNode);
      } while (currentNode !== node);
      result.push(component);
    }
  }

  // Loop through all nodes in the graph
  for (let node = 0; node < graph.length; node++) {
    if (!indices[node]) {
      strongConnect(node);
    }
  }

  return result;
}
const graph = [
  [1],
  [2, 4],
  [0, 5],
  [6],
  [2, 10],
  [3, 7],
  [5],
  [6, 8],
  [7, 9],
  [8, 10],
  [9, 4],
];

const stronglyConnectedComponents = tarjanSCC(graph);
console.log(stronglyConnectedComponents);
