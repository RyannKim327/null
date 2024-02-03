class Graph {
  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.edges = [];
  }

  addEdge(src, dest, weight) {
    this.edges.push({ src, dest, weight });
  }

  bellmanFord(startVertex) {
    let distance = {};
    let predecessor = {};

    // Step 2: initialize distances and predecessors
    for (let i = 0; i < this.numOfVertices; i++) {
      distance[i] = Infinity;
      predecessor[i] = null;
    }
    distance[startVertex] = 0;

    // Step 3: relax edges repeatedly
    for (let i = 1; i < this.numOfVertices - 1; i++) {
      for (let j = 0; j < this.edges.length; j++) {
        let { src, dest, weight } = this.edges[j];
        if (distance[src] + weight < distance[dest]) {
          distance[dest] = distance[src] + weight;
          predecessor[dest] = src;
        }
      }
    }

    // Step 4: check for negative weight cycles
    for (let i = 0; i < this.edges.length; i++) {
      let { src, dest, weight } = this.edges[i];
      if (distance[src] + weight < distance[dest]) {
        console.log('Graph contains negative weight cycle');
        return;
      }
    }

    console.log('Distance:', distance);
    console.log('Predecessor:', predecessor);
  }
}

// Example usage:
const graph = new Graph(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

graph.bellmanFord(0);
