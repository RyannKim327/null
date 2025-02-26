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
        this.adjacencyList.get(vertex2)?.push(vertex1); // for undirected graph
    }

    // Recursive DFS helper function
    private dfsHelper(vertex: number, visited: Set<number>): void {
        // Handle the current vertex
        console.log(vertex);
        visited.add(vertex);

        // Recur for all the vertices adjacent to this vertex
        const neighbors = this.adjacencyList.get(vertex) || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                this.dfsHelper(neighbor, visited);
            }
        }
    }

    // Initiate DFS
    dfs(startVertex: number): void {
        const visited = new Set<number>();
        this.dfsHelper(startVertex, visited);
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

console.log("DFS starting from vertex 1:");
graph.dfs(1);
