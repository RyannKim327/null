class Graph {
    private adjList: Map<number, number[]>;

    constructor() {
        this.adjList = new Map();
    }

    addEdge(v: number, w: number) {
        if (!this.adjList.has(v)) {
            this.adjList.set(v, []);
        }
        this.adjList.get(v)!.push(w);
    }

    topologicalSort(): number[] {
        const visited = new Set<number>();
        const stack: number[] = [];

        const dfs = (v: number) => {
            visited.add(v);
            const neighbors = this.adjList.get(v) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
            stack.push(v);
        };

        for (const vertex of this.adjList.keys()) {
            if (!visited.has(vertex)) {
                dfs(vertex);
            }
        }

        return stack.reverse(); // Reverse the stack to get the topological order
    }
}

// Example usage:
const graph = new Graph();
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

const order = graph.topologicalSort();
console.log(order); // Output: A valid topological order
class Graph {
    private adjList: Map<number, number[]>;
    private inDegree: Map<number, number>;

    constructor() {
        this.adjList = new Map();
        this.inDegree = new Map();
    }

    addEdge(v: number, w: number) {
        if (!this.adjList.has(v)) {
            this.adjList.set(v, []);
        }
        this.adjList.get(v)!.push(w);

        // Update in-degree of the destination vertex
        this.inDegree.set(w, (this.inDegree.get(w) || 0) + 1);
        // Ensure the source vertex is in the in-degree map
        if (!this.inDegree.has(v)) {
            this.inDegree.set(v, 0);
        }
    }

    topologicalSort(): number[] {
        const queue: number[] = [];
        const result: number[] = [];

        // Initialize the queue with all vertices of in-degree 0
        for (const [vertex, degree] of this.inDegree.entries()) {
            if (degree === 0) {
                queue.push(vertex);
            }
        }

        while (queue.length > 0) {
            const v = queue.shift()!;
            result.push(v);

            const neighbors = this.adjList.get(v) || [];
            for (const neighbor of neighbors) {
                this.inDegree.set(neighbor, this.inDegree.get(neighbor)! - 1);
                if (this.inDegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // Check for cycles (if result length is not equal to number of vertices)
        if (result.length !== this.inDegree.size) {
            throw new Error("Graph has at least one cycle, topological sort not possible.");
        }

        return result;
    }
}

// Example usage:
const graph = new Graph();
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

const order = graph.topologicalSort();
console.log(order); // Output: A valid topological order
