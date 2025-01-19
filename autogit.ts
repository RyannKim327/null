interface Graph {
  [vertex: string]: string[];
}

class Tarjan {
  private graph: Graph;
  private index: number;
  private stack: string[];
  private lowlinks: { [vertex: string]: number };
  private indices: { [vertex: string]: number };
  private sccs: string[][];

  constructor(graph: Graph) {
    this.graph = graph;
    this.index = 0;
    this.stack = [];
    this.lowlinks = {};
    this.indices = {};
    this.sccs = [];
  }

  private strongconnect(vertex: string) {
    this.indices[vertex] = this.index;
    this.lowlinks[vertex] = this.index;
    this.index++;
    this.stack.push(vertex);

    for (const neighbor of this.graph[vertex]) {
      if (!this.indices[neighbor]) {
        this.strongconnect(neighbor);
        this.lowlinks[vertex] = Math.min(this.lowlinks[vertex], this.lowlinks[neighbor]);
      } else if (this.stack.includes(neighbor)) {
        this.lowlinks[vertex] = Math.min(this.lowlinks[vertex], this.indices[neighbor]);
      }
    }

    if (this.lowlinks[vertex] === this.indices[vertex]) {
      const scc: string[] = [];
      let w: string;

      do {
        w = this.stack.pop()!;
        scc.push(w);
      } while (w !== vertex);

      this.sccs.push(scc);
    }
  }

  public getStronglyConnectedComponents(): string[][] {
    for (const vertex in this.graph) {
      if (!this.indices[vertex]) {
        this.strongconnect(vertex);
      }
    }

    return this.sccs;
  }
}

// Example usage
const graph: Graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

const tarjan = new Tarjan(graph);
const sccs = tarjan.getStronglyConnectedComponents();

console.log(sccs);
// Output:
// [
//   ["A", "B", "D", "E"],
//   ["C", "F"]
// ]
