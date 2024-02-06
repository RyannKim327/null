class Graph {
  constructor() {
    this.vertices = new Map();
  }
  
  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }
  
  addEdge(u, v) {
    this.vertices.get(u).push(v);
  }
  
  dfs(vertex, index, stack, onStack, lowLink, ids, result) {
    lowLink[vertex] = index;
    ids[vertex] = index;
    stack.push(vertex);
    onStack[vertex] = true;
    
    for (const neighbor of this.vertices.get(vertex)) {
      if (ids[neighbor] === undefined) {
        this.dfs(neighbor, index + 1, stack, onStack, lowLink, ids, result);
        lowLink[vertex] = Math.min(lowLink[vertex], lowLink[neighbor]);
      } else if (onStack[neighbor]) {
        lowLink[vertex] = Math.min(lowLink[vertex], ids[neighbor]);
      }
    }
    
    if (lowLink[vertex] === ids[vertex]) {
      const component = [];
      let v = null;
      do {
        v = stack.pop();
        onStack[v] = false;
        component.push(v);
      } while (v !== vertex);
      
      result.push(component);
    }
  }
  
  findStronglyConnectedComponents() {
    const lowLink = {};
    const ids = {};
    const stack = [];
    const onStack = {};
    const result = [];

    let index = 0;
    for (const vertex of this.vertices.keys()) {
      if (ids[vertex] === undefined) {
        this.dfs(vertex, index, stack, onStack, lowLink, ids, result);
      }
    }

    return result;
  }
}
const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 3);
const stronglyConnectedComponents = graph.findStronglyConnectedComponents();
console.log(stronglyConnectedComponents);
