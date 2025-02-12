class Graph {
    private adjList: Map<number, number[]>;

    constructor() {
        this.adjList = new Map<number, number[]>();
    }

    // Add a vertex to the graph
    addVertex(vertex: number): void {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    // Add an edge to the graph
    addEdge(source: number, destination: number): void {
        this.addVertex(source);
        this.addVertex(destination);
        this.adjList.get(source)?.push(destination);
        this.adjList.get(destination)?.push(source); // For undirected graph
    }

    // Perform BFS algorithm
    bfs(startVertex: number): number[] {
        const visited: Set<number> = new Set<number>();
        const queue: number[] = [];
        const result: number[] = [];

        // Start with the initial vertex
        visited.add(startVertex);
        queue.push(startVertex);

        while (queue.length > 0) {
            // Dequeue a vertex from the queue and process it
            const currentVertex = queue.shift()!;
            result.push(currentVertex);
            
            // Get all adjacent vertices of the dequeued vertex
            const neighbors = this.adjList.get(currentVertex) || [];
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

// Example Usage:
const graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 5);

console.log(graph.bfs(0)); // Output: [0, 1, 2, 3, 4, 5]
