class Graph {
    private adjList: Map<string, string[]>;

    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex: string) {
        this.adjList.set(vertex, []);
    }

    addEdge(vertex1: string, vertex2: string) {
        this.adjList.get(vertex1)?.push(vertex2);
        this.adjList.get(vertex2)?.push(vertex1); // for undirected graph
    }

    dfsRecursive(start: string, visited: Set<string> = new Set()): void {
        if (visited.has(start)) {
            return;
        }
        
        console.log(start); // visit the node
        visited.add(start); // mark the node as visited

        const neighbors = this.adjList.get(start);
        if (neighbors) {
            for (const neighbor of neighbors) {
                this.dfsRecursive(neighbor, visited);
            }
        }
    }
}

// Example Usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

graph.dfsRecursive("A"); // Output could be A B D C or similar
class Graph {
    private adjList: Map<string, string[]>;

    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex: string) {
        this.adjList.set(vertex, []);
    }

    addEdge(vertex1: string, vertex2: string) {
        this.adjList.get(vertex1)?.push(vertex2);
        this.adjList.get(vertex2)?.push(vertex1); // for undirected graph
    }

    dfsIterative(start: string): void {
        const stack: string[] = [start];
        const visited: Set<string> = new Set();

        while (stack.length > 0) {
            const vertex = stack.pop()!;
            if (!visited.has(vertex)) {
                console.log(vertex); // visit the node
                visited.add(vertex);

                const neighbors = this.adjList.get(vertex);
                if (neighbors) {
                    for (const neighbor of neighbors) {
                        stack.push(neighbor);
                    }
                }
            }
        }
    }
}

// Example Usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

graph.dfsIterative("A"); // Output could be A C B D or similar
