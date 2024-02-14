function tarjanSCC(graph) {
  const vertices = graph.length;
  
  let index = 0;
  const stack = [];
  const lowLink = new Array(vertices).fill(0);
  const indexMap = new Array(vertices).fill(-1);
  const onStack = new Array(vertices).fill(false);
  const result = [];

  function strongConnect(node) {
    indexMap[node] = index;
    lowLink[node] = index;
    index++;
    stack.push(node);
    onStack[node] = true;

    const neighbors = graph[node];

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      
      if (indexMap[neighbor] === -1) {
        strongConnect(neighbor);
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      } else if (onStack[neighbor]) {
        lowLink[node] = Math.min(lowLink[node], indexMap[neighbor]);
      }
    }

    if (lowLink[node] === indexMap[node]) {
      const component = [];
      let w;
      
      do {
        w = stack.pop();
        onStack[w] = false;
        component.push(w);
      } while (w !== node);

      result.push(component);
    }
  }

  for (let v = 0; v < vertices; v++) {
    if (indexMap[v] === -1) {
      strongConnect(v);
    }
  }

  return result;
}
const graph = [
  [1],
  [2],
  [3, 4],
  [0, 5],
  [2, 6],
  [0, 2, 3],
  [4, 7],
  [5, 6]
];
const stronglyConnectedComponents = tarjanSCC(graph);
console.log(stronglyConnectedComponents);
