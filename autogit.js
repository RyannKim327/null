function tarjanSCC(graph) {
  let index = 0; // Index counter
  let id = []; // Track vertex indices
  let lowLink = []; // Track vertex low-link values
  let stack = []; // Track visited vertices
  let result = []; // Store strongly connected components
}
function strongConnect(v) {
  // Set the index and low-link value of vertex 'v'
  id[v] = index;
  lowLink[v] = index;
  index++;

  stack.push(v); // Push 'v' to the stack
  // Iterate over each neighbor 'w' of 'v'
  for (let w of graph[v]) {
    if (id[w] === undefined) {
      // If 'w' has not been visited, recursively call strongConnect
      strongConnect(w);
      // Update the low-link value of 'v' after recursive call
      lowLink[v] = Math.min(lowLink[v], lowLink[w]);
    } else if (stack.includes(w)) {
      // If 'w' is in the stack, update the low-link value of 'v'
      lowLink[v] = Math.min(lowLink[v], id[w]);
    }
  }

  // If 'v' is a root node, pop the strongly connected component from the stack
  if (lowLink[v] === id[v]) {
    let component = [];
    let w;
    do {
      w = stack.pop();
      component.push(w);
    } while (w !== v);
    result.push(component);
  }
}
function tarjanSCC(graph) {
  // ...

  // Iterate over each vertex 'v' in the graph
  for (let v in graph) {
    if (id[v] === undefined) {
      strongConnect(v);
    }
  }

  return result; // Return the strongly connected components
}
// Create an example directed graph
const graph = {
  'A': ['B'],
  'B': ['C', 'E', 'F'],
  'C': ['D', 'G'],
  'D': ['C', 'H'],
  'E': ['A', 'F'],
  'F': ['G'],
  'G': ['F'],
  'H': ['D', 'G']
};

console.log(tarjanSCC(graph));
[['F', 'G'], ['D', 'H', 'C'], ['B', 'E', 'A']]
