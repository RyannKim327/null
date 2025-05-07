class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map<number, number[]>();
    }

    // Method to add a vertex
    addVertex(vertex: number) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Method to add an edge
    addEdge(v1: number, v2: number) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencyList.get(v1)!.push(v2);
        this.adjacencyList.get(v2)!.push(v1); // Undirected graph: add both edges
    }

    // BFS implementation
    breadthFirstSearch(startVertex: number): number[] {
        const queue: number[] = [startVertex]; // Use an array as a queue
        const visited: Set<number> = new Set(); // Keep track of visited nodes
        const result: number[] = []; // For storing the order of visited nodes

        visited.add(startVertex); // Mark the start vertex as visited

        while (queue.length > 0) {
            const currentVertex = queue.shift()!;
            result.push(currentVertex);

            const neighbors = this.adjacencyList.get(currentVertex) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor); // Add unvisited neighbor to the queue
                }
            }
        }

        return result; // Return the BFS traversal order
    }
}

// Example usage:
const graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 6);
graph.addEdge(4, 7);

const bfsResult = graph.breadthFirstSearch(1);
console.log(bfsResult); // Output will show the BFS traversal path
