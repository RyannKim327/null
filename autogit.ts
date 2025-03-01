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

    recursiveDFS(start: number, visited: Set<number> = new Set()) {
        if (visited.has(start)) {
            return;
        }

        // Visit the node
        visited.add(start);
        console.log(start);

        const neighbors = this.adjacencyList.get(start) || [];
        for (const neighbor of neighbors) {
            this.recursiveDFS(neighbor, visited);
        }
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);

console.log("DFS starting from vertex 1:");
graph.recursiveDFS(1);
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

    iterativeDFS(start: number) {
        const stack: number[] = [start];
        const visited: Set<number> = new Set();

        while (stack.length) {
            const vertex = stack.pop();
            if (vertex === undefined || visited.has(vertex)) {
                continue;
            }

            // Visit the node
            visited.add(vertex);
            console.log(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
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
graph.addVertex(5);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);

console.log("DFS starting from vertex 1:");
graph.iterativeDFS(1);
