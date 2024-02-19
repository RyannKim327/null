function tarjan(graph) {
  let index = 0;
  let stack = [];
  let indexes = new Map();
  let lowlink = new Map();
  let result = [];

  function strongConnect(node) {
    indexes.set(node, index);
    lowlink.set(node, index);
    index++;
    stack.push(node);

    graph[node].forEach(neighbor => {
      if (!indexes.has(neighbor)) {
        strongConnect(neighbor);
        lowlink.set(node, Math.min(lowlink.get(node), lowlink.get(neighbor)));
      } else if (stack.includes(neighbor)) {
        lowlink.set(node, Math.min(lowlink.get(node), indexes.get(neighbor)));
      }
    });

    if (indexes.get(node) === lowlink.get(node)) {
      let stronglyConnectedComponent = [];
      let neighbor = null;

      do {
        neighbor = stack.pop();
        stronglyConnectedComponent.push(neighbor);
      } while (neighbor !== node);

      result.push(stronglyConnectedComponent);
    }
  }

  Object.keys(graph).forEach(node => {
    if (!indexes.has(node)) {
      strongConnect(node);
    }
  });

  return result;
}

// Example graph representation:
const graph = {
  'A': ['B'],
  'B': ['C', 'D'],
  'C': ['A'],
  'D': ['E'],
  'E': ['F'],
  'F': ['D']
};

const stronglyConnectedComponents = tarjan(graph);
console.log(stronglyConnectedComponents);
