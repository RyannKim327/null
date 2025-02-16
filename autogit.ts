class Graph {
    private adjList: Map<number, number[]>;

    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex: number) {
        this.adjList.set(vertex, []);
    }

    addEdge(v1: number, v2: number) {
        this.adjList.get(v1)?.push(v2);
        this.adjList.get(v2)?.push(v1); // For an undirected graph
    }

    bfs(startVertex: number): number[] {
        const visited: Set<number> = new Set();
        const queue: number[] = [];
        const result: number[] = [];

        visited.add(startVertex);
        queue.push(startVertex);

        while (queue.length) {
            const vertex = queue.shift();
            if (vertex !== undefined) {
                result.push(vertex);

                const neighbors = this.adjList.get(vertex) || [];
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
        }

        return result;
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

const bfsResult = graph.bfs(1);
console.log(bfsResult); // Output: [1, 2, 3, 4]
