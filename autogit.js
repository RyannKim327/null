function tarjanSCC(graph) {
  const stack = [];
  const results = [];
  const ids = []; // Unique identifiers (ids) for each node
  const lowLink = []; // Low link values for each node
  const onStack = []; // Keeps track of nodes currently on stack
  let idCounter = 0;

  // Recursive function to find the strongly connected components
  function strongConnect(node) {
    ids[node] = idCounter;
    lowLink[node] = idCounter;
    idCounter++;

    stack.push(node);
    onStack[node] = true;

    for (const neighbor of graph[node]) {
      if (ids[neighbor] === undefined) {
        strongConnect(neighbor);
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      } else if (onStack[neighbor]) {
        lowLink[node] = Math.min(lowLink[node], ids[neighbor]);
      }
    }

    if (ids[node] === lowLink[node]) {
      const component = [];
      let currentNode;
      do {
        currentNode = stack.pop();
        onStack[currentNode] = false;
        component.push(currentNode);
      } while (currentNode !== node);
      results.push(component);
    }
  }

  for (const node in graph) {
    if (ids[node] === undefined) {
      strongConnect(node);
    }
  }

  return results;
}

// Example usage:
const graph = {
  0: [1],
  1: [2],
  2: [0, 3, 5],
  3: [4],
  4: [2, 3],
  5: [4, 6],
  6: []
};

const scc = tarjanSCC(graph);
console.log(scc);
