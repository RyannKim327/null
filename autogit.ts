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

    // Add an edge to the graph (directed)
    addEdge(start: number, end: number): void {
        this.addVertex(start);
        this.addVertex(end);
        this.adjacencyList.get(start)?.push(end);
    }

    // Depth-First Search
    dfs(start: number, visited: Set<number> = new Set()): void {
        // Mark the current node as visited
        if (visited.has(start)) {
            return;
        }

        console.log(start); // or process the node in some way
        visited.add(start);

        // Recur for all the vertices adjacent to this vertex
        const neighbors = this.adjacencyList.get(start) || [];
        for (const neighbor of neighbors) {
            this.dfs(neighbor, visited);
        }
    }

    // A method to initiate DFS from a given start vertex
    initiateDFS(start: number): void {
        const visited = new Set<number>();
        this.dfs(start, visited);
    }
}

// Example usage:
const graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);
graph.addEdge(2, 5);

console.log("Depth-First Traversal starting from vertex 1:");
graph.initiateDFS(1);

// Output will be:
// Depth-First Traversal starting from vertex 1:
// 1
// 2
// 4
// 5
// 3
// 5 (may vary based on the ordering of edges)
