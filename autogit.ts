class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addEdge(v: number, w: number): void {
        if (!this.adjacencyList.has(v)) {
            this.adjacencyList.set(v, []);
        }
        if (!this.adjacencyList.has(w)) {
            this.adjacencyList.set(w, []);
        }

        this.adjacencyList.get(v)!.push(w);
        this.adjacencyList.get(w)!.push(v); // For an undirected graph
    }

    bfs(start: number): number[] {
        const visited: Set<number> = new Set();
        const queue: number[] = [];
        const result: number[] = [];

        queue.push(start);
        visited.add(start);

        while (queue.length > 0) {
            const node = queue.shift()!;
            result.push(node);

            const neighbors = this.adjacencyList.get(node) || [];
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

// Example usage
const graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 6);

const bfsResult = graph.bfs(1);
console.log(bfsResult); // Output: [1, 2, 3, 4, 5, 6]
