class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(v1: number, v2: number) {
        this.adjacencyList.get(v1)?.push(v2);
        this.adjacencyList.get(v2)?.push(v1); // For undirected graph
    }

    dfsRecursive(start: number, visited: Set<number> = new Set()) {
        if (!visited.has(start)) {
            console.log(start); // Process the vertex
            visited.add(start);
            const neighbors = this.adjacencyList.get(start) || [];
            for (const neighbor of neighbors) {
                this.dfsRecursive(neighbor, visited);
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

console.log("DFS Recursive:");
graph.dfsRecursive(1);
class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(v1: number, v2: number) {
        this.adjacencyList.get(v1)?.push(v2);
        this.adjacencyList.get(v2)?.push(v1); // For undirected graph
    }

    dfsIterative(start: number) {
        const stack: number[] = [start];
        const visited: Set<number> = new Set();

        while (stack.length > 0) {
            const vertex = stack.pop()!;
            if (!visited.has(vertex)) {
                console.log(vertex); // Process the vertex
                visited.add(vertex);
                const neighbors = this.adjacencyList.get(vertex) || [];
                for (const neighbor of neighbors) {
                    stack.push(neighbor);
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

console.log("DFS Iterative:");
graph.dfsIterative(1);
