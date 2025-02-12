class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number): void {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: number, vertex2: number): void {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1); // For undirected graph
    }

    bfs(startVertex: number): number[] {
        const visited: Set<number> = new Set();
        const queue: number[] = [];
        const result: number[] = [];

        visited.add(startVertex);
        queue.push(startVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift()!;
            result.push(currentVertex);

            const neighbors = this.adjacencyList.get(currentVertex) || [];
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

// Example usage:
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

const bfsResult = graph.bfs(1);
console.log(bfsResult); // Output: [1, 2, 3, 4, 5]
