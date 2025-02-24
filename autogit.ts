class Graph {
    private adjList: Map<number, number[]>;

    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex: number): void {
        this.adjList.set(vertex, []);
    }

    addEdge(v1: number, v2: number): void {
        this.adjList.get(v1)?.push(v2);
        this.adjList.get(v2)?.push(v1); // For undirected graphs
    }

    getAdjacencyList(): Map<number, number[]> {
        return this.adjList;
    }
}
class DFS {
    private visited: Set<number>;

    constructor() {
        this.visited = new Set();
    }

    dfsRecursive(graph: Graph, vertex: number): void {
        // Mark the node as visited
        this.visited.add(vertex);
        console.log(vertex); // Process the vertex

        // Recur for all the vertices adjacent to this vertex
        const neighbors = graph.getAdjacencyList().get(vertex) || [];
        for (const neighbor of neighbors) {
            if (!this.visited.has(neighbor)) {
                this.dfsRecursive(graph, neighbor);
            }
        }
    }
}
class DFS {
    dfsIterative(graph: Graph, start: number): void {
        const stack: number[] = [start];
        const visited = new Set<number>();

        while (stack.length) {
            const vertex = stack.pop()!;
            if (!visited.has(vertex)) {
                visited.add(vertex);
                console.log(vertex); // Process the vertex

                const neighbors = graph.getAdjacencyList().get(vertex) || [];
                for (const neighbor of neighbors) {
                    stack.push(neighbor);
                }
            }
        }
    }
}
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

const dfs = new DFS();
console.log("DFS Recursive:");
dfs.dfsRecursive(graph, 1);

console.log("DFS Iterative:");
dfs.dfsIterative(graph, 1);
