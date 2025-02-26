class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex: number) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an edge to the graph
    addEdge(vertex1: number, vertex2: number) {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1); // For undirected graph
    }

    // Perform BFS
    bfs(startVertex: number) {
        const visited: Set<number> = new Set();
        const queue: number[] = [];
        
        visited.add(startVertex);
        queue.push(startVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift()!;
            console.log(currentVertex); // Process the current vertex

            const neighbors = this.adjacencyList.get(currentVertex);
            if (neighbors) {
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
        }
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

graph.bfs(1); // Output: 1, 2, 3, 4
