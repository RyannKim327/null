function tarjanSCC(graph) {
  let index = 0;
  const stack = [];
  const SCC = [];
}
function strongConnect(node, index, stack, SCC) {
  // Set the depth index for the current node
  node.index = index;
  node.lowlink = index;
  index++;
  stack.push(node);

  // Consider successors of the current node
  for (let neighbor of node.neighbors) {
    if (neighbor.index === undefined) {
      // Successor node has not yet been visited; recurse on it
      strongConnect(neighbor, index, stack, SCC);
      node.lowlink = Math.min(node.lowlink, neighbor.lowlink);
    } else if (stack.includes(neighbor)) {
      // Successor node is in the stack, meaning it is part of the current SCC
      node.lowlink = Math.min(node.lowlink, neighbor.index);
    }
  }

  // If node is a root node, pop the stack and generate an SCC
  if (node.lowlink === node.index) {
    let component = [];
    let w;
    do {
      w = stack.pop();
      component.push(w);
    } while (w !== node);
    SCC.push(component);
  }
}
for (let node of graph) {
  if (node.index === undefined) {
    strongConnect(node, index, stack, SCC);
  }
}
return SCC;
function tarjanSCC(graph) {
  let index = 0;
  const stack = [];
  const SCC = [];

  function strongConnect(node, index, stack, SCC) {
    node.index = index;
    node.lowlink = index;
    index++;
    stack.push(node);

    for (let neighbor of node.neighbors) {
      if (neighbor.index === undefined) {
        strongConnect(neighbor, index, stack, SCC);
        node.lowlink = Math.min(node.lowlink, neighbor.lowlink);
      } else if (stack.includes(neighbor)) {
        node.lowlink = Math.min(node.lowlink, neighbor.index);
      }
    }

    if (node.lowlink === node.index) {
      let component = [];
      let w;
      do {
        w = stack.pop();
        component.push(w);
      } while (w !== node);
      SCC.push(component);
    }
  }

  for (let node of graph) {
    if (node.index === undefined) {
      strongConnect(node, index, stack, SCC);
    }
  }

  return SCC;
}
