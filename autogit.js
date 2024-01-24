class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
    
    for (let i = 0; i < vertices.length; i++) {
      this.adjList.set(vertices[i], []);
    }
  }
  
  addEdge(u, v) {
    this.adjList.get(u).push(v);
  }
  
  // ... other methods (if required)
}
function tarjanSCC(graph) {
  let index = 0; // Global index for new vertices
  const stack = []; // Stack to keep track of visited vertices
  const lowlink = new Map(); // The smallest index vertex visited
  const onStack = new Set(); // Whether a vertex is on stack
  const result = []; // List to store strongly connected components

  function strongconnect(v) {
    // Set the depth index for the current vertex to the smallest possible value
    lowlink.set(v, index);
    index++;
    stack.push(v);
    onStack.add(v);

    const neighbors = graph.adjList.get(v);

    for (const w of neighbors) {
      if (!lowlink.has(w)) {
        // Neighbor w has not yet been visited; recurse on it
        strongconnect(w);
        lowlink.set(v, Math.min(lowlink.get(v), lowlink.get(w)));
      } else if (onStack.has(w)) {
        // Neighbor w is in the current SCC
        lowlink.set(v, Math.min(lowlink.get(v), lowlink.get(w)));
      }
    }

    // If v is a root node, pop the stack and generate an SCC
    if (lowlink.get(v) === index - 1) {
      const component = [];
      let w;
      do {
        w = stack.pop();
        onStack.delete(w);
        component.push(w);
      } while (w !== v);
      
      // Add SCC to result
      result.push(component);
    }
  }

  graph.vertices.forEach((v) => {
    if (!lowlink.has(v)) {
      strongconnect(v);
    }
  });

  return result;
}
const vertices = ['A', 'B', 'C', 'D', 'E'];
const graph = new Graph(vertices);

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
graph.addEdge('E', 'D');
graph.addEdge('C', 'E');
graph.addEdge('E', 'A');
const stronglyConnectedComponents = tarjanSCC(graph);
console.log(stronglyConnectedComponents);
[ [ 'A', 'C', 'E' ], [ 'D' ], [ 'B' ] ]
