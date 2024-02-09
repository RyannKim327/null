function Tarjan(graph) {
  const numVertices = graph.length;
  let index = 0; // Index counter for assigning discovery times

  // Step 1: Create an empty array to store strongly connected components
  const scc = [];

  // Step 2: Create an empty stack to serve as a helper data structure
  const stack = [];

  // Step 3: Initialize an empty visited array
  const visited = new Array(numVertices).fill(false);

  // Step 4: Run tarjanDFS on unvisited nodes
  for (let i = 0; i < numVertices; i++) {
    if (!visited[i]) {
      tarjanDFS(i);
    }
  }

  // Step 5: Define the tarjanDFS function
  function tarjanDFS(node) {
    // Set the depth index for the current node
    visited[node] = true;
    stack.push(node);
    node.lowLink = node.index = index;
    index++;

    // Recurse on the neighbors of the current node
    graph[node].forEach(neighbor => {
      if (!visited[neighbor]) {
        tarjanDFS(neighbor);
        node.lowLink = Math.min(node.lowLink, neighbor.lowLink);
      } else if (stack.includes(neighbor)) {
        node.lowLink = Math.min(node.lowLink, neighbor.index);
      }
    });

    // If the current node is a root node, pop the stack and form a new SCC
    if (node.lowLink === node.index) {
      const component = [];
      let w;
      do {
        w = stack.pop();
        component.push(w);
      } while (w !== node);
      scc.push(component);
    }
  }

  return scc;
}
