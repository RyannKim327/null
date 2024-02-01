function tarjansSCC(graph) {
  let index = 0;
  const stack = [];
  const indexMap = {};
  const lowLinkMap = {};
  const onStack = {};
  const scc = [];

  function tarjan(currentNode) {
    indexMap[currentNode] = index;
    lowLinkMap[currentNode] = index;
    index++;
    stack.push(currentNode);
    onStack[currentNode] = true;

    const neighbors = graph[currentNode];

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
  
      if (!indexMap[neighbor]) {
        tarjan(neighbor);
        lowLinkMap[currentNode] = Math.min(lowLinkMap[currentNode], lowLinkMap[neighbor]);
      } else if (onStack[neighbor]) {
        lowLinkMap[currentNode] = Math.min(lowLinkMap[currentNode], indexMap[neighbor]);
      }
    }

    if (indexMap[currentNode] === lowLinkMap[currentNode]) {
      const component = [];
      let node;
      do {
        node = stack.pop();
        onStack[node] = false;
        component.push(node);
      } while (node !== currentNode);
      scc.push(component);
    }
  }

  for (let node in graph) {
    if (!indexMap[node]) {
      tarjan(node);
    }
  }

  return scc;
}
