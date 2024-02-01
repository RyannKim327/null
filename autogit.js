function tarjanSCC(graph) {
  const n = graph.length;
  const ids = Array(n).fill(-1);
  const lowLink = Array(n).fill(-1);
  const onStack = Array(n).fill(false);
  const stack = [];
  const result = [];
  let index = 0;

  function dfs(node) {
    ids[node] = index;
    lowLink[node] = index;
    index++;
    stack.push(node);
    onStack[node] = true;

    for (let i = 0; i < graph[node].length; i++) {
      const adjacent = graph[node][i];
      if (ids[adjacent] === -1) {
        dfs(adjacent);
      }
      if (onStack[adjacent]) {
        lowLink[node] = Math.min(lowLink[node], lowLink[adjacent]);
      }
    }

    if (lowLink[node] === ids[node]) {
      const component = [];
      let curr;
      do {
        curr = stack.pop();
        onStack[curr] = false;
        lowLink[curr] = ids[node];
        component.push(curr);
      } while (curr !== node);
      result.push(component);
    }
  }

  for (let i = 0; i < n; i++) {
    if (ids[i] === -1) {
      dfs(i);
    }
  }

  return result;
}
