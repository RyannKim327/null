function tarjanSCC(graph) {
  let index = 0;
  let stack = [];
  let onStack = new Set();
  let indexes = {};
  let lowlink = {};
  let sccs = [];

  function strongConnect(node) {
    indexes[node] = index;
    lowlink[node] = index;
    index++;
    stack.push(node);
    onStack.add(node);

    graph[node].forEach(neighbor => {
      if (indexes[neighbor] === undefined) {
        strongConnect(neighbor);
        lowlink[node] = Math.min(lowlink[node], lowlink[neighbor]);
      } else if (onStack.has(neighbor)) {
        lowlink[node] = Math.min(lowlink[node], indexes[neighbor]);
      }
    });

    if (indexes[node] === lowlink[node]) {
      let scc = [];
      let poppedNode = null;
      do {
        poppedNode = stack.pop();
        onStack.delete(poppedNode);
        scc.push(poppedNode);
      } while (poppedNode !== node);
      sccs.push(scc);
    }
  }

  Object.keys(graph).forEach(node => {
    if (indexes[node] === undefined) {
      strongConnect(node);
    }
  });

  return sccs;
}

// Example usage
const graph = {
  0: [1],
  1: [2, 4],
  2: [0, 3],
  3: [2],
  4: [5],
  5: [0, 6],
  6: [4, 7],
  7: [6]
};

const sccs = tarjanSCC(graph);
console.log(sccs);
