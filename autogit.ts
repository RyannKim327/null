class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map<number, number[]>();
    }

    // Add a vertex to the graph
    addVertex(vertex: number): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an edge to the graph (undirected)
    addEdge(vertex1: number, vertex2: number): void {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList.get(vertex1)!.push(vertex2);
        this.adjacencyList.get(vertex2)!.push(vertex1);
    }

    // Implementing BFS
    bfs(start: number): number[] {
        const visited: Set<number> = new Set<number>();
        const queue: number[] = [];
        const result: number[] = [];

        // Start with the given starting vertex
        queue.push(start);
        visited.add(start);

        while (queue.length > 0) {
            const vertex = queue.shift()!;
            result.push(vertex);

            // Get all neighboring vertices
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

// Example usage:
const graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 6);

const bfsResult = graph.bfs(1);
console.log(bfsResult); // Output: [1, 2, 3, 4, 5, 6]
