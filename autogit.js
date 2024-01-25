function tarjanSCC(graph) {
  const stack = [];
  let index = 0;
  const components = [];

  function tarjanDFS(node) {
    node.index = index;
    node.lowLink = index;
    index++;
    stack.push(node);
    node.onStack = true;

    for (const neighbor of graph[node.id]) {
      if (neighbor.index === undefined) {
        tarjanDFS(neighbor);
        node.lowLink = Math.min(node.lowLink, neighbor.lowLink);
      } else if (neighbor.onStack) {
        node.lowLink = Math.min(node.lowLink, neighbor.index);
      }
    }

    if (node.lowLink === node.index) {
      const component = [];
      let neighbor;
      
      do {
        neighbor = stack.pop();
        neighbor.onStack = false;
        component.push(neighbor);
      } while (neighbor !== node);

      components.push(component);
    }
  }

  for (const node of Object.values(graph)) {
    if (node.index === undefined) {
      tarjanDFS(node);
    }
  }

  return components;
}

// Example usage:
const graph = {
  A: ['B'],
  B: ['C', 'E', 'F'],
  C: ['D', 'G'],
  D: ['C', 'H'],
  E: ['A', 'F'],
  F: ['G'],
  G: ['F'],
  H: ['D', 'G'],
};

const stronglyConnectedComponents = tarjanSCC(graph);
console.log(stronglyConnectedComponents);
