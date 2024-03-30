function findStronglyConnectedComponents(graph) {
  let index = 0;
  let stack = [];
  let onStack = {};
  let indices = {};
  let lowLink = {};
  let components = [];

  function strongConnect(node) {
    indices[node] = index;
    lowLink[node] = index;
    index++;
    stack.push(node);
    onStack[node] = true;

    for (let neighbor of graph[node]) {
      if (indices[neighbor] === undefined) {
        strongConnect(neighbor);
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      } else if (onStack[neighbor]) {
        lowLink[node] = Math.min(lowLink[node], indices[neighbor]);
      }
    }

    if (lowLink[node] === indices[node]) {
      let component = [];
      let compNode;
      do {
        compNode = stack.pop();
        onStack[compNode] = false;
        component.push(compNode);
      } while (compNode !== node);
      components.push(component);
    }
  }

  for (let node in graph) {
    if (indices[node] === undefined) {
      strongConnect(node);
    }
  }

  return components;
}

// Example graph representation (adjacency list)
const graph = {
  0: [1],
  1: [2],
  2: [0, 3],
  3: [4],
  4: [3, 5],
  5: [6],
  6: [5, 7],
  7: [8],
  8: [6, 9],
  9: [7, 10],
  10: [13],
  11: [9, 12],
  12: [10],
  13: [11]
};

const stronglyConnectedComponents = findStronglyConnectedComponents(graph);
console.log(stronglyConnectedComponents);
