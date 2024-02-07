function tarjansAlgorithm(graph) {
  const ids = [];
  const low = [];
  const stack = [];
  let id = 0;
  const components = [];

  function dfs(node) {
    ids[node] = id;
    low[node] = id;
    id++;

    stack.push(node);

    for (const adjacent of graph[node]) {
      if (!ids[adjacent]) {
        dfs(adjacent);
      }
      if (stack.includes(adjacent)) {
        low[node] = Math.min(low[node], low[adjacent]);
      }
    }

    if (ids[node] === low[node]) {
      const component = [];
      let member;
      do {
        member = stack.pop();
        component.push(member);
      } while (member !== node);
      components.push(component);
    }
  }

  for (let node = 0; node < graph.length; node++) {
    if (!ids[node]) {
      dfs(node);
    }
  }

  return components;
}
