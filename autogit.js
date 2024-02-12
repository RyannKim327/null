function tarjanSCC(graph) {
  let index = 0;
  const stack = [];
  const indices = new Array(graph.length);
  const lowLinks = new Array(graph.length);
  const onStack = new Array(graph.length).fill(false);
  const components = [];

  function strongConnect(node) {
    indices[node] = index;
    lowLinks[node] = index;
    index++;
    stack.push(node);
    onStack[node] = true;

    graph[node].forEach(neighbor => {
      if (indices[neighbor] === undefined) {
        strongConnect(neighbor);
        lowLinks[node] = Math.min(lowLinks[node], lowLinks[neighbor]);
      } else if (onStack[neighbor]) {
        lowLinks[node] = Math.min(lowLinks[node], indices[neighbor]);
      }
    });

    if (lowLinks[node] === indices[node]) {
      const component = [];
      let curNode;
      do {
        curNode = stack.pop();
        onStack[curNode] = false;
        component.push(curNode);
      } while (curNode !== node);

      components.push(component);
    }
  }

  for (let i = 0; i < graph.length; i++) {
    if (indices[i] === undefined) {
      strongConnect(i);
    }
  }

  return components;
}
