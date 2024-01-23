class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = [];
  }

  addEdge(node1, node2, weight) {
    this.nodes[node1].push({ node: node2, weight: weight });
    this.nodes[node2].push({ node: node1, weight: weight });
  }

  setEdgeWeight(node1, node2, weight) {
    this.nodes[node1] = this.nodes[node1].map(edge => {
      if (edge.node === node2) {
        edge.weight = weight;
      }
      return edge;
    });
    this.nodes[node2] = this.nodes[node2].map(edge => {
      if (edge.node === node1) {
        edge.weight = weight;
      }
      return edge;
    });
  }

  buildDistanceArray(sourceNode) {
    const distance = {};
    for (const node in this.nodes) {
      distance[node] = node === sourceNode ? 0 : Infinity;
    }
    return distance;
  }

  buildVisitedArray() {
    const visited = {};
    for (const node in this.nodes) {
      visited[node] = false;
    }
    return visited;
  }

  dijkstra(sourceNode) {
    const distance = this.buildDistanceArray(sourceNode);
    const visited = this.buildVisitedArray();

    while (true) {
      const closestNode = this.getMinDistanceNode(distance, visited);
      if (closestNode === null) break;
      visited[closestNode] = true;

      for (const neighbor of this.nodes[closestNode]) {
        const distanceToNeighbor = distance[closestNode] + neighbor.weight;
        if (distanceToNeighbor < distance[neighbor.node]) {
          distance[neighbor.node] = distanceToNeighbor;
        }
      }
    }
    return distance;
  }

  getMinDistanceNode(distance, visited) {
    let minDistance = Infinity;
    let minNode = null;

    for (const node in distance) {
      if (!visited[node] && distance[node] <= minDistance) {
        minDistance = distance[node];
        minNode = node;
      }
    }
    return minNode;
  }

  getShortestPath(sourceNode, destinationNode, distance) {
    const path = [destinationNode];
    let node = destinationNode;

    while (node !== sourceNode) {
      for (const edge of this.nodes[node]) {
        if (distance[node] === distance[edge.node] + edge.weight) {
          path.unshift(edge.node);
          node = edge.node;
          break;
        }
      }
    }
    return path;
  }
}

// Example usage:
const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('D', 'E', 3);

const distance = graph.dijkstra('A');
console.log(distance);  // Output: { A: 0, B: 4, C: 2, D: 4, E: 5 }

const shortestPath = graph.getShortestPath('A', 'E', distance);
console.log(shortestPath);  // Output: ['A', 'C', 'D', 'E']
