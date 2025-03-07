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

        const dfs = (node: number) => {
            visited.add(node);
            const neighbors = this.adjList.get(node) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
            stack.push(node);
        };

        for (const node of this.adjList.keys()) {
            if (!visited.has(node)) {
                dfs(node);
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

        // Update in-degree of the destination node
        this.inDegree.set(w, (this.inDegree.get(w) || 0) + 1);
        // Ensure the source node is in the in-degree map
        if (!this.inDegree.has(v)) {
            this.inDegree.set(v, 0);
        }
    }

    topologicalSort(): number[] {
        const queue: number[] = [];
        const result: number[] = [];

        // Initialize the queue with nodes having in-degree of 0
        for (const [node, degree] of this.inDegree.entries()) {
            if (degree === 0) {
                queue.push(node);
            }
        }

        while (queue.length > 0) {
            const current = queue.shift()!;
            result.push(current);

            const neighbors = this.adjList.get(current) || [];
            for (const neighbor of neighbors) {
                this.inDegree.set(neighbor, this.inDegree.get(neighbor)! - 1);
                if (this.inDegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // Check if there was a cycle
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
