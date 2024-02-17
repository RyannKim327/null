function tarjanSCC(graph) {
  let index = 0;
  let stack = [];
  let indexMap = new Map();
  let lowLink = new Map();
  let onStack = new Set();
  let result = [];

  function strongConnect(node) {
    indexMap.set(node, index);
    lowLink.set(node, index);
    index++;
    stack.push(node);
    onStack.add(node);

    for (let neighbor of graph[node]) {
      if (!indexMap.has(neighbor)) {
        strongConnect(neighbor);
        lowLink.set(node, Math.min(lowLink.get(node), lowLink.get(neighbor)));
      } else if (onStack.has(neighbor)) {
        lowLink.set(node, Math.min(lowLink.get(node), indexMap.get(neighbor)));
      }
    }

    if (lowLink.get(node) === indexMap.get(node)) {
      let component = [];
      let popNode = stack.pop();
      onStack.delete(popNode);
      component.push(popNode);
      
      while (popNode !== node) {
        popNode = stack.pop();
        onStack.delete(popNode);
        component.push(popNode);
      }

      result.push(component);
    }
  }

  for (let node of Object.keys(graph)) {
    if (!indexMap.has(node)) {
      strongConnect(node);
    }
  }

  return result;
}

// Example usage
let graph = {
  'A': ['B'],
  'B': ['C', 'E'],
  'C': ['A', 'D'],
  'D': ['F'],
  'E': ['F'],
  'F': ['G'],
  'G': ['E', 'H'],
  'H': ['I'],
  'I': ['J'],
  'J': ['H']
};

let stronglyConnectedComponents = tarjanSCC(graph);
console.log(stronglyConnectedComponents);
