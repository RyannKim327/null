interface Node {
  id: string;
  distance: number;
  previous: Node | null;
}

class Graph {
  private nodes: { [id: string]: Node };
  private edges: { [id: string]: { [id: string]: number } };

  constructor() {
    this.nodes = {};
    this.edges = {};
  }

  addNode(id: string) {
    this.nodes[id] = { id, distance: Infinity, previous: null };
  }

  addEdge(from: string, to: string, weight: number) {
    if (!this.edges[from]) this.edges[from] = {};
    this.edges[from][to] = weight;
  }

  dijkstra(start: string): { [id: string]: number } {
    const queue: Node[] = [this.nodes[start]];
    const distances: { [id: string]: number } = {};

    for (const node in this.nodes) {
      distances[node] = Infinity;
    }

    distances[start] = 0;

    while (queue.length) {
      const currentNode = queue.shift()!;
      const currentDistance = distances[currentNode.id];

      for (const neighbor in this.edges[currentNode.id]) {
        const weight = this.edges[currentNode.id][neighbor];
        const distance = currentDistance + weight;

        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          this.nodes[neighbor].previous = currentNode;
          queue.push(this.nodes[neighbor]);
        }
      }
    }

    return distances;
  }
}

// Example usage:
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

graph.addEdge('A', 'B', 2);
graph.addEdge('A', 'C', 3);
graph.addEdge('B', 'D', 4);
graph.addEdge('C', 'D', 1);

const distances = graph.dijkstra('A');

console.log(distances); // Output: { A: 0, B: 2, C: 3, D: 4 }
