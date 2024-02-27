class TarjansAlgorithm {
  constructor(graph) {
    this.graph = graph;
    this.index = 0;
    this.stack = [];
    this.lowLinks = {};
    this.indexes = {};
    this.stronglyConnectedComponents = [];
  }

  findStronglyConnectedComponents() {
    for(let node of Object.keys(this.graph)) {
      if(!this.indexes[node]) {
        this.strongConnect(node);
      }
    }
    return this.stronglyConnectedComponents;
  }

  strongConnect(node) {
    this.indexes[node] = this.index;
    this.lowLinks[node] = this.index;
    this.index++;
    this.stack.push(node);

    for(let neighbor of this.graph[node]) {
      if(!this.indexes[neighbor]) {
        this.strongConnect(neighbor);
        this.lowLinks[node] = Math.min(this.lowLinks[node], this.lowLinks[neighbor]);
      } else if(this.stack.includes(neighbor)) {
        this.lowLinks[node] = Math.min(this.lowLinks[node], this.indexes[neighbor]);
      }
    }

    if(this.lowLinks[node] === this.indexes[node]) {
      let component = [];
      let poppedNode;
      do {
        poppedNode = this.stack.pop();
        component.push(poppedNode);
      } while(poppedNode !== node);
      this.stronglyConnectedComponents.push(component);
    }
  }
}

// Example usage:
const graph = {
  1: [2],
  2: [3, 4],
  3: [1],
  4: [5],
  5: [6],
  6: [4, 7],
  7: [6, 8],
  8: [5, 7]
};

const tarjan = new TarjansAlgorithm(graph);
const stronglyConnectedComponents = tarjan.findStronglyConnectedComponents();
console.log(stronglyConnectedComponents);
