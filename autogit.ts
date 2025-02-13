class Graph {
    private adjacencyList: Map<string, string[]> = new Map();

    // Add a vertex to the graph
    addVertex(vertex: string): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }
    
    // Add an edge to the graph
    addEdge(vertex1: string, vertex2: string): void {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1); // For undirected graph
    }

    // Perform BFS
    bfs(startVertex: string): string[] {
        const visited: Set<string> = new Set();
        const queue: string[] = [];
        const result: string[] = [];

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

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

const bfsResult = graph.bfs('A');
console.log(bfsResult); // Output: [ 'A', 'B', 'C', 'D' ]
