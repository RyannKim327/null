class TarjanSCC {
  constructor(numNodes) {
    this.adjList = new Array(numNodes).fill(null).map(() => []);
    this.index = 0;
    this.stack = [];
    this.onStack = new Array(numNodes).fill(false);
    this.lowLinkValues = new Array(numNodes).fill(-1);
    this.ids = new Array(numNodes).fill(-1);
    this.sccCount = 0;
  }

  addEdge(from, to) {
    this.adjList[from].push(to);
  }

  tarjan() {
    for (let node = 0; node < this.adjList.length; node++) {
      if (this.ids[node] === -1) {
        this.strongConnect(node);
      }
    }
  }

  strongConnect(node) {
    this.lowLinkValues[node] = this.index;
    this.ids[node] = this.index;
    this.index++;
    this.stack.push(node);
    this.onStack[node] = true;

    const neighbors = this.adjList[node];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (this.ids[neighbor] === -1) {
        this.strongConnect(neighbor);
        this.lowLinkValues[node] = Math.min(
          this.lowLinkValues[node],
          this.lowLinkValues[neighbor]
        );
      } else if (this.onStack[neighbor]) {
        this.lowLinkValues[node] = Math.min(
          this.lowLinkValues[node],
          this.ids[neighbor]
        );
      }
    }

    if (this.lowLinkValues[node] === this.ids[node]) {
      let component = [];
      let current;
      do {
        current = this.stack.pop();
        this.onStack[current] = false;
        component.push(current);
      } while (current !== node);

      // Print or use the strongly connected component here
      console.log(`Strongly Connected Component: ${component.join(", ")}`);
      this.sccCount++;
    }
  }

  stronglyConnectedComponents() {
    this.tarjan();
    console.log(`Total Strongly Connected Components: ${this.sccCount}`);
  }
}

// Example usage
const graph = new TarjanSCC(8);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 3);
graph.addEdge(6, 5);
graph.addEdge(6, 7);
graph.stronglyConnectedComponents();
