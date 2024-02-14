function tarjanSCC(graph) {
  const index = 0;
  const stack = [];
  const indexes = [];
  const lowLinks = [];
  const onStack = [];
  const result = [];

  function strongConnect(v) {
    indexes[v] = index;
    lowLinks[v] = index;
    index++;
    stack.push(v);
    onStack[v] = true;

    const neighbors = graph[v];
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (indexes[w] === -1) {
        strongConnect(w);
        lowLinks[v] = Math.min(lowLinks[v], lowLinks[w]);
      } else if (onStack[w]) {
        lowLinks[v] = Math.min(lowLinks[v], indexes[w]);
      }
    }

    if (lowLinks[v] === indexes[v]) {
      const component = [];
      let w;
      do {
        w = stack.pop();
        onStack[w] = false;
        component.push(w);
      } while (w !== v);
      result.push(component);
    }
  }

  for (let v = 0; v < graph.length; v++) {
    if (indexes[v] === undefined) {
      strongConnect(v);
    }
  }

  return result;
}
const graph = [[1, 2], [3], [4, 5], [0, 2, 6], [5], [0], [2, 4, 7], [5, 6]];
const scc = tarjanSCC(graph);
console.log(scc);
[ [ 0, 2, 6, 4, 5 ], [ 1, 3 ], [ 7 ] ]
