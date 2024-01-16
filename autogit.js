function tarjanSCC(graph) {
  const scc = [];
  const stack = [];
  const indexMap = {};
  const lowLinkMap = {};
  let index = 0;

  function strongConnect(node) {
    indexMap[node] = index;
    lowLinkMap[node] = index;
    index++;
    stack.push(node);

    for (const neighbor of graph[node]) {
      if (indexMap[neighbor] === undefined) {
        strongConnect(neighbor);
        lowLinkMap[node] = Math.min(lowLinkMap[node], lowLinkMap[neighbor]);
      } else if (stack.includes(neighbor)) {
        lowLinkMap[node] = Math.min(lowLinkMap[node], indexMap[neighbor]);
      }
    }

    if (lowLinkMap[node] === indexMap[node]) {
      const component = [];
      let element;
      do {
        element = stack.pop();
        component.push(element);
        lowLinkMap[element] = indexMap[node];
      } while (element !== node);
      scc.push(component);
    }
  }

  for (const node in graph) {
    if (indexMap[node] === undefined) {
      strongConnect(node);
    }
  }

  return scc;
}
const graph = {
  0: [1],
  1: [2],
  2: [0, 3],
  3: [4],
  4: [5, 7],
  5: [6],
  6: [4],
  7: [3, 6],
};
const stronglyConnectedComponents = tarjanSCC(graph);
console.log(stronglyConnectedComponents);
[ [ '4', '6', '5' ], [ '3', '7' ], [ '2', '0', '1' ] ]
