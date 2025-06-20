// Define a graph using an adjacency list
class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex: number): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1: number, vertex2: number): void {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1); // For undirected graph
    }

    // Perform BFS starting from a given source vertex
    bfs(startVertex: number): number[] {
        const visited: Set<number> = new Set(); // To track visited nodes
        const result: number[] = []; // To store the traversal order
        const queue: number[] = []; // Queue for BFS

        // Initialize the BFS
        visited.add(startVertex);
        queue.push(startVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift()!; // Dequeue the front node
            result.push(currentVertex);

            // Visit all neighbors of the current vertex
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

// Example Usage
const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log("BFS Traversal:", graph.bfs(0));
Vertices: 0, 1, 2, 3, 4
Edges: 0-1, 0-2, 1-3, 2-4
BFS Traversal: [0, 1, 2, 3, 4]
