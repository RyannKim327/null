class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(v1: number, v2: number) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencyList.get(v1)?.push(v2);
        this.adjacencyList.get(v2)?.push(v1); // For undirected graph
    }

    dfs(startVertex: number) {
        const visited = new Set<number>();
        this.dfsUtil(startVertex, visited);
    }

    private dfsUtil(vertex: number, visited: Set<number>) {
        visited.add(vertex);
        console.log(vertex); // Process the vertex (Here we simply log it)

        const neighbors = this.adjacencyList.get(vertex) || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                this.dfsUtil(neighbor, visited);
            }
        }
    }
}

// Example usage:
const graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

console.log("DFS starting from vertex 1:");
graph.dfs(1);
class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(v1: number, v2: number) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencyList.get(v1)?.push(v2);
        this.adjacencyList.get(v2)?.push(v1); // For undirected graph
    }

    dfs(startVertex: number) {
        const visited = new Set<number>();
        const stack: number[] = [startVertex];

        while (stack.length > 0) {
            const vertex = stack.pop()!;
            if (!visited.has(vertex)) {
                visited.add(vertex);
                console.log(vertex); // Process the vertex (Here we simply log it)

                const neighbors = this.adjacencyList.get(vertex) || [];
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
    }
}

// Example usage:
const graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

console.log("DFS starting from vertex 1:");
graph.dfs(1);
