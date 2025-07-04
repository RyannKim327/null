class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addEdge(u: number, v: number) {
        if (!this.adjacencyList.has(u)) {
            this.adjacencyList.set(u, []);
        }
        this.adjacencyList.get(u)?.push(v);
    }

    topologicalSortKahn(): number[] {
        const inDegree = new Map<number, number>();
        const zeroInDegreeQueue: number[] = [];
        const topologicalOrder: number[] = [];

        // Initialize in-degree of each vertex
        for (const [u, neighbors] of this.adjacencyList.entries()) {
            inDegree.set(u, 0); // Initialize in-degree
            for (const v of neighbors) {
                inDegree.set(v, (inDegree.get(v) || 0) + 1);
            }
        }

        // Add all vertices with in-degree 0 to the queue
        for (const [vertex, degree] of inDegree.entries()) {
            if (degree === 0) {
                zeroInDegreeQueue.push(vertex);
            }
        }

        while (zeroInDegreeQueue.length > 0) {
            const current = zeroInDegreeQueue.shift()!;
            topologicalOrder.push(current);

            // Decrease the in-degree of neighbors
            const neighbors = this.adjacencyList.get(current) || [];
            for (const neighbor of neighbors) {
                inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
                if (inDegree.get(neighbor) === 0) {
                    zeroInDegreeQueue.push(neighbor);
                }
            }
        }

        // Check for cycles
        if (topologicalOrder.length !== inDegree.size) {
            throw new Error("Graph has at least one cycle!");
        }

        return topologicalOrder;
    }
}

// Example usage
const graph = new Graph();
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

try {
    const order = graph.topologicalSortKahn();
    console.log("Topological Sort using Kahn's Algorithm:", order);
} catch (error) {
    console.error(error);
}
class GraphDFS {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addEdge(u: number, v: number) {
        if (!this.adjacencyList.has(u)) {
            this.adjacencyList.set(u, []);
        }
        this.adjacencyList.get(u)?.push(v);
    }

    topologicalSortDFS(): number[] {
        const visited = new Set<number>();
        const stack: number[] = [];
        const topologicalOrder: number[] = [];

        const dfs = (node: number) => {
            if (visited.has(node)) {
                return;
            }
            visited.add(node);

            const neighbors = this.adjacencyList.get(node) || [];
            for (const neighbor of neighbors) {
                dfs(neighbor);
            }
            stack.push(node);
        };

        // Perform DFS from each vertex
        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex)) {
                dfs(vertex);
            }
        }

        // The topological order is the reverse of the stack
        while (stack.length > 0) {
            topologicalOrder.push(stack.pop()!);
        }

        return topologicalOrder;
    }
}

// Example usage
const graphDFS = new GraphDFS();
graphDFS.addEdge(5, 2);
graphDFS.addEdge(5, 0);
graphDFS.addEdge(4, 0);
graphDFS.addEdge(4, 1);
graphDFS.addEdge(2, 3);
graphDFS.addEdge(3, 1);

const orderDFS = graphDFS.topologicalSortDFS();
console.log("Topological Sort using DFS:", orderDFS);
