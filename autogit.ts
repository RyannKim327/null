class Graph {
    private adjList: Map<number, number[]>;

    constructor() {
        this.adjList = new Map();
    }

    addEdge(u: number, v: number): void {
        if (!this.adjList.has(u)) {
            this.adjList.set(u, []);
        }
        this.adjList.get(u)!.push(v);
    }

    topologicalSortDFS(): number[] {
        const visited = new Set<number>();
        const stack: number[] = [];
        const result: number[] = [];

        const dfs = (node: number) => {
            visited.add(node);
            for (const neighbor of (this.adjList.get(node) || [])) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
            stack.push(node);
        };

        for (const vertex of this.adjList.keys()) {
            if (!visited.has(vertex)) {
                dfs(vertex);
            }
        }

        while (stack.length > 0) {
            result.push(stack.pop()!);
        }

        return result;
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

const topologicalOrder = graph.topologicalSortDFS();
console.log(topologicalOrder);
class GraphKahn {
    private adjList: Map<number, number[]>;
    private inDegree: Map<number, number>;

    constructor() {
        this.adjList = new Map();
        this.inDegree = new Map();
    }

    addEdge(u: number, v: number): void {
        if (!this.adjList.has(u)) {
            this.adjList.set(u, []);
        }
        this.adjList.get(u)!.push(v);

        this.inDegree.set(v, (this.inDegree.get(v) || 0) + 1);
        if (!this.inDegree.has(u)) {
            this.inDegree.set(u, 0);
        }
    }

    topologicalSortKahn(): number[] {
        const zeroInDegree: number[] = [];
        const result: number[] = [];

        // Initialize zero in-degree queue
        for (const [node, degree] of this.inDegree.entries()) {
            if (degree === 0) {
                zeroInDegree.push(node);
            }
        }

        while (zeroInDegree.length > 0) {
            const current = zeroInDegree.shift()!;
            result.push(current);

            for (const neighbor of (this.adjList.get(current) || [])) {
                this.inDegree.set(neighbor, this.inDegree.get(neighbor)! - 1);
                if (this.inDegree.get(neighbor) === 0) {
                    zeroInDegree.push(neighbor);
                }
            }
        }

        // Check if we had a cycle
        if (result.length !== this.inDegree.size) {
            throw new Error("Graph has at least one cycle");
        }

        return result;
    }
}

// Example usage
const graphKahn = new GraphKahn();
graphKahn.addEdge(5, 2);
graphKahn.addEdge(5, 0);
graphKahn.addEdge(4, 0);
graphKahn.addEdge(4, 1);
graphKahn.addEdge(2, 3);
graphKahn.addEdge(3, 1);

const topologicalOrderKahn = graphKahn.topologicalSortKahn();
console.log(topologicalOrderKahn);
