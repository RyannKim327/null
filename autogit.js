function tarjanStronglyConnectedComponents(graph) {
  let index = 0;
  let stack = [];
  let indices = {};
  let lowLink = {};
  let onStack = {};

  let result = [];

  function strongConnect(node) {
    indices[node] = index;
    lowLink[node] = index;
    index++;
    stack.push(node);
    onStack[node] = true;

    graph[node].forEach(neighbor => {
      if (indices[neighbor] === undefined) {
        strongConnect(neighbor);
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      } else if (onStack[neighbor]) {
        lowLink[node] = Math.min(lowLink[node], indices[neighbor]);
      }
    });

    if (indices[node] === lowLink[node]) {
      let component = [];
      let tempNode = null;
      do {
        tempNode = stack.pop();
        onStack[tempNode] = false;
        component.push(tempNode);
      } while (tempNode !== node);

      result.push(component);
    }
  }

  Object.keys(graph).forEach(node => {
    if (indices[node] === undefined) {
      strongConnect(node);
    }
  });

  return result;
}

// Example usage
const graph = {
  0: [1],
  1: [2],
  2: [0, 3],
  3: [4],
  4: [5, 7],
  5: [6],
  6: [4],
  7: [3, 8],
  8: [7]
};

const stronglyConnectedComponents = tarjanStronglyConnectedComponents(graph);
console.log(stronglyConnectedComponents);
