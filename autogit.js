function tarjanSCC(graph) {
  const numNodes = graph.length;
  let index = 0;
  const stack = [];
  const scc = [];

  const lowlink = new Array(numNodes).fill(-1);
  const indexMap = new Array(numNodes).fill(-1);

  function strongConnect(v) {
    indexMap[v] = index;
    lowlink[v] = index;
    index++;
    stack.push(v);

    const neighbors = graph[v];
    neighbors.forEach((neighbor) => {
      if (indexMap[neighbor] === -1) {
        strongConnect(neighbor);
        lowlink[v] = Math.min(lowlink[v], lowlink[neighbor]);
      } else if (stack.includes(neighbor)) {
        lowlink[v] = Math.min(lowlink[v], indexMap[neighbor]);
      }
    });

    if (lowlink[v] === indexMap[v]) {
      const component = [];
      let node;
      do {
        node = stack.pop();
        component.push(node);
      } while (node !== v);
      scc.push(component);
    }
  }

  for (let v = 0; v < numNodes; v++) {
    if (indexMap[v] === -1) {
      strongConnect(v);
    }
  }

  return scc;
}
