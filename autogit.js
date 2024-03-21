function tarjanSCC(graph) {
  let index = 0;
  let stack = [];
  let result = [];
  let onStack = new Set();
  let indexes = {};
  let lowLink = {};
  
  function strongconnect(node) {
    indexes[node] = index;
    lowLink[node] = index;
    index++;
    stack.push(node);
    onStack.add(node);
    
    graph[node].forEach(neighbor => {
      if (indexes[neighbor] === undefined) {
        strongconnect(neighbor);
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      } else if (onStack.has(neighbor)) {
        lowLink[node] = Math.min(lowLink[node], indexes[neighbor]);
      }
    });
    
    if (lowLink[node] === indexes[node]) {
      let component = [];
      let nextNode;
      
      do {
        nextNode = stack.pop();
        onStack.delete(nextNode);
        component.push(nextNode);
      } while (nextNode !== node);
      
      result.push(component);
    }
  }
  
  Object.keys(graph).forEach(node => {
    if (indexes[node] === undefined) {
      strongconnect(node);
    }
  });
  
  return result;
}

// Example graph represented as an adjacency list
let graph = {
  0: [1],
  1: [2],
  2: [0, 3],
  3: [4],
  4: [3, 5],
  5: [6],
  6: [4, 7],
  7: [6, 8],
  8: [5, 7]
};

console.log(tarjanSCC(graph));
