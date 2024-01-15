function tarjanSCC(graph) {
  let index = 0;
  let stack = [];
  let indices = {};
  let lowlinks = {};
  let isOnStack = {};
  let result = [];

  function strongConnect(node) {
    indices[node] = index;
    lowlinks[node] = index;
    index++;

    stack.push(node);
    isOnStack[node] = true;

    for (let neighbor of graph[node]) {
      if (typeof indices[neighbor] === 'undefined') {
        strongConnect(neighbor);
        lowlinks[node] = Math.min(lowlinks[node], lowlinks[neighbor]);
      } else if (isOnStack[neighbor]) {
        lowlinks[node] = Math.min(lowlinks[node], indices[neighbor]);
      }
    }

    if (lowlinks[node] === indices[node]) {
      let component = [];
      let currNode;
      do {
        currNode = stack.pop();
        isOnStack[currNode] = false;
        component.push(currNode);
      } while (currNode !== node);
      result.push(component);
    }
  }

  for (let node in graph) {
    if (typeof indices[node] === 'undefined') {
      strongConnect(node);
    }
  }

  return result;
}
