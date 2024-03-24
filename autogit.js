function tarjan(graph) {
  let index = 0;
  let stack = [];
  let onStack = [];
  let indexMap = {};
  let lowLink = {};
  let result = [];

  function strongConnect(node) {
    indexMap[node] = index;
    lowLink[node] = index;
    index++;
    stack.push(node);
    onStack[node] = true;

    for (let neighbor of graph[node]) {
      if (indexMap[neighbor] === undefined) {
        strongConnect(neighbor);
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      } else if (onStack[neighbor]) {
        lowLink[node] = Math.min(lowLink[node], indexMap[neighbor]);
      }
    }

    if (lowLink[node] === indexMap[node]) {
      let component = [];
      let top;
      do {
        top = stack.pop();
        onStack[top] = false;
        component.push(top);
      } while (top !== node);
      result.push(component);
    }
  }

  for (let node in graph) {
    if (indexMap[node] === undefined) {
      strongConnect(node);
    }
  }

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
  7: [8],
  8: [7],
};

const SCCs = tarjan(graph);
console.log(SCCs);
