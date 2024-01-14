class BiDirectionalSearch {
  constructor(graph) {
    this.graph = graph;
    this.forwardQueue = [];
    this.backwardQueue = [];
    this.exploredForward = new Set();
    this.exploredBackward = new Set();
    this.path = [];
  }

  search(startNode, goalNode) {
    this.forwardQueue.push(startNode);
    this.backwardQueue.push(goalNode);
    this.exploredForward.add(startNode);
    this.exploredBackward.add(goalNode);
    
    while (this.forwardQueue.length && this.backwardQueue.length) {
      const forwardNode = this.forwardQueue.shift();
      const backwardNode = this.backwardQueue.shift();

      if (this.exploredBackward.has(forwardNode)) {
        this.path.push(forwardNode);
        this.path.push(backwardNode);
        break;
      }

      if (this.exploredForward.has(backwardNode)) {
        this.path.push(forwardNode);
        this.path.push(backwardNode);
        break;
      }

      this.expandForward(forwardNode);
      this.expandBackward(backwardNode);
    }

    return this.path.reverse();
  }

  expandForward(node) {
    const neighbors = this.graph[node];
    for (let neighbor of neighbors) {
      if (!this.exploredForward.has(neighbor)) {
        this.exploredForward.add(neighbor);
        this.forwardQueue.push(neighbor);
      }
    }
  }

  expandBackward(node) {
    const neighbors = this.graph[node];
    for (let neighbor of neighbors) {
      if (!this.exploredBackward.has(neighbor)) {
        this.exploredBackward.add(neighbor);
        this.backwardQueue.push(neighbor);
      }
    }
  }
}

// Example usage
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'G'],
  F: ['C', 'H'],
  G: ['E', 'H'],
  H: ['F', 'G'],
};

const search = new BiDirectionalSearch(graph);
const path = search.search('A', 'H');
console.log(path);
