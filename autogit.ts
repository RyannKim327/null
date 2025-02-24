class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number): void {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(v1: number, v2: number): void {
        this.adjacencyList.get(v1)?.push(v2);
        this.adjacencyList.get(v2)?.push(v1); // For undirected graph
    }

    dfsRecursive(start: number, visited: Set<number> = new Set()): void {
        if (!this.adjacencyList.has(start) || visited.has(start)) return;
        
        visited.add(start);
        console.log(start); // Process the node

        for (const neighbor of this.adjacencyList.get(start) || []) {
            this.dfsRecursive(neighbor, visited);
        }
    }
}

// Example Usage:
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.dfsRecursive(1); // Output: 1 2 3 (order may vary)
class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number): void {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(v1: number, v2: number): void {
        this.adjacencyList.get(v1)?.push(v2);
        this.adjacencyList.get(v2)?.push(v1); // For undirected graph
    }

    dfsIterative(start: number): void {
        const stack = [start];
        const visited = new Set<number>();

        while (stack.length > 0) {
            const vertex = stack.pop()!;
            if (!visited.has(vertex)) {
                visited.add(vertex);
                console.log(vertex); // Process the node
                
                for (const neighbor of this.adjacencyList.get(vertex) || []) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example Usage:
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.dfsIterative(1); // Output: 1 3 2 (order may vary)
