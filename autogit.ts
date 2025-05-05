// Define a graph using an adjacency list
class Graph {
    private adjacencyList: { [key: string]: string[] } = {};

    // Add a vertex to the graph
    addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1: string, vertex2: string) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }

    // Recursive DFS implementation
    dfsRecursive(start: string, visited: Set<string> = new Set()): void {
        if (!start || visited.has(start)) {
            return;
        }

        visited.add(start);
        console.log(start); // Process the vertex (here we are just logging it)

        const neighbors = this.adjacencyList[start];
        for (const neighbor of neighbors) {
            this.dfsRecursive(neighbor, visited);
        }
    }

    // Iterative DFS implementation
    dfsIterative(start: string): void {
        const stack: string[] = [start];
        const visited: Set<string> = new Set();

        while (stack.length > 0) {
            const vertex = stack.pop()!;
            if (!vertex || visited.has(vertex)) {
                continue;
            }

            visited.add(vertex);
            console.log(vertex); // Process the vertex

            const neighbors = this.adjacencyList[vertex];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }

    // Utility to display the graph
    displayGraph(): void {
        console.log(this.adjacencyList);
    }
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

// Display the graph
graph.displayGraph();

// Perform DFS
console.log("DFS Recursive starting from vertex A:");
graph.dfsRecursive('A');

console.log("DFS Iterative starting from vertex A:");
graph.dfsIterative('A');
