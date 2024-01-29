class Tarjan {
  constructor(vertices) {
    this.vertices = vertices;
    this.index = 0;
    this.stack = [];
    this.ids = new Array(vertices.length).fill(-1);
    this.low = new Array(vertices.length);
    this.onStack = new Array(vertices.length).fill(false);
    this.scc = [];
  }
  
  findSCC() {
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.ids[i] === -1) {
        this.tarjanDFS(i);
      }
    }
    return this.scc;
  }
  
  tarjanDFS(vertex) {
    this.ids[vertex] = this.index;
    this.low[vertex] = this.index;
    this.index++;
    this.stack.push(vertex);
    this.onStack[vertex] = true;
    
    for (const adjacentVertex of this.vertices[vertex]) {
      if (this.ids[adjacentVertex] === -1) {
        this.tarjanDFS(adjacentVertex);
        this.low[vertex] = Math.min(this.low[vertex], this.low[adjacentVertex]);
      } else if (this.onStack[adjacentVertex]) {
        this.low[vertex] = Math.min(this.low[vertex], this.ids[adjacentVertex]);
      }
    }
    
    if (this.ids[vertex] === this.low[vertex]) {
      const component = [];
      let v;
      
      do {
        v = this.stack.pop();
        this.onStack[v] = false;
        component.push(v);
      } while (v !== vertex);
      
      this.scc.push(component);
    }
  }
}
const graph = [[1, 2], [0], [3], [4, 5], [3, 6], [5], [4]];
const tarjan = new Tarjan(graph);
const scc = tarjan.findSCC();
const graph = [[1, 2], [0], [3], [4, 5], [3, 6], [5], [4]];
const tarjan = new Tarjan(graph);
const scc = tarjan.findSCC();

console.log(scc);  // [[6, 4, 5], [0, 1, 2], [3]]
