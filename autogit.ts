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

        return stack.reverse(); // Return in reverse order
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

const sortedOrder = graph.topologicalSort();
console.log(sortedOrder); // Output: A valid topological order
class GraphKahn {
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
        const inDegree: Map<number, number> = new Map();
        const queue: number[] = [];
        const sortedOrder: number[] = [];

        // Initialize in-degree of each node
        for (const [node, neighbors] of this.adjList.entries()) {
            if (!inDegree.has(node)) {
                inDegree.set(node, 0);
            }
            for (const neighbor of neighbors) {
                inDegree.set(neighbor, (inDegree.get(neighbor) || 0) + 1);
            }
        }

        // Collect nodes with in-degree of 0
        for (const [node, degree] of inDegree.entries()) {
            if (degree === 0) {
                queue.push(node);
            }
        }

        while (queue.length > 0) {
            const current = queue.shift()!;
            sortedOrder.push(current);

            const neighbors = this.adjList.get(current) || [];
            for (const neighbor of neighbors) {
                inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
                if (inDegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // Check for cycles
        if (sortedOrder.length !== inDegree.size) {
            throw new Error("Graph has at least one cycle, topological sort not possible.");
        }

        return sortedOrder;
    }
}

// Example usage:
const graphKahn = new GraphKahn();
graphKahn.addEdge(5, 2);
graphKahn.addEdge(5, 0);
graphKahn.addEdge(4, 0);
graphKahn.addEdge(4, 1);
graphKahn.addEdge(2, 3);
graphKahn.addEdge(3, 1);

const sortedOrderKahn = graphKahn.topologicalSort();
console.log(sortedOrderKahn); // Output: A valid topological order
