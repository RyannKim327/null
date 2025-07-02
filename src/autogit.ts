class Graph {
    private adjacencyList: Map<string, string[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1: string, vertex2: string) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1); // For undirected graph
    }
    
    bfs(start: string) {
        const visited = new Set<string>();
        const queue = [];
        const result = [];

        queue.push(start);
        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift()!;
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }
}
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

const bfsResult = graph.bfs("A");
console.log(bfsResult); // Output: [ 'A', 'B', 'C', 'D', 'E' ]
