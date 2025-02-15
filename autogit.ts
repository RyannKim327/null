class Graph {
    private adjacencyList: Map<number, number[]> = new Map();

    // Add a vertex to the graph
    addVertex(vertex: number): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an edge to the graph
    addEdge(vertex1: number, vertex2: number): void {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1); // For undirected graph
    }

    // BFS algorithm
    bfs(startVertex: number): number[] {
        const visited = new Set<number>();
        const queue: number[] = [];
        const result: number[] = [];

        visited.add(startVertex);
        queue.push(startVertex);

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

// Example usage
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

const traversal = graph.bfs(1);
console.log(traversal); // Output: [1, 2, 3, 4]
