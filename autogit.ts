class Graph {
    private adjList: Map<number, number[]>;

    constructor() {
        this.adjList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex: number): void {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    // Add an edge to the graph
    addEdge(v1: number, v2: number): void {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjList.get(v1)!.push(v2);
        this.adjList.get(v2)!.push(v1); // For undirected graph
    }

    // Perform BFS starting from a source vertex
    bfs(startVertex: number): number[] {
        const visited: Set<number> = new Set();
        const queue: number[] = [];
        const result: number[] = [];

        visited.add(startVertex);
        queue.push(startVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            if (currentVertex !== undefined) {
                result.push(currentVertex);

                const neighbors = this.adjList.get(currentVertex) || [];
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
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
graph.addEdge(3, 5);

const bfsResult = graph.bfs(1);
console.log(bfsResult); // Output: [1, 2, 3, 4, 5]
