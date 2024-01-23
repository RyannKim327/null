function tarjansSCC(graph) {
  let index = 0;
  const indexes = {};
  const lowlinks = {};
  const onStack = {};
  const stack = [];
  const components = [];

  function dfs(node) {
    indexes[node] = index;
    lowlinks[node] = index;
    index += 1;
    stack.push(node);
    onStack[node] = true;

    for (const neighbor of graph[node]) {
      if (typeof indexes[neighbor] === 'undefined') {
        dfs(neighbor);
        lowlinks[node] = Math.min(lowlinks[node], lowlinks[neighbor]);
      } else if (onStack[neighbor]) {
        lowlinks[node] = Math.min(lowlinks[node], indexes[neighbor]);
      }
    }

    if (lowlinks[node] === indexes[node]) {
      const component = [];
      let w;
      do {
        w = stack.pop();
        onStack[w] = false;
        component.push(w);
      } while (w !== node);
      components.push(component);
    }
  }

  for (const node in graph) {
    if (typeof indexes[node] === 'undefined') {
      dfs(node);
    }
  }

  return components;
}
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3, 4],
};

const components = tarjansSCC(graph);
console.log(components);
