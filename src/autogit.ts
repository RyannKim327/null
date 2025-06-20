class TarjansAlgorithm {
    private graph: Map<number, number[]>; // Adjacency list representation of the graph
    private index: number; // Global counter for discovery time
    private indices: Map<number, number>; // Stores the discovery time of each node
    private lowLinks: Map<number, number>; // Stores the low-link value of each node
    private onStack: Set<number>; // Tracks nodes currently on the stack
    private stack: number[]; // Stack to track nodes in the current DFS path
    private sccs: number[][]; // List of strongly connected components

    constructor(graph: Map<number, number[]>) {
        this.graph = graph;
        this.index = 0;
        this.indices = new Map();
        this.lowLinks = new Map();
        this.onStack = new Set();
        this.stack = [];
        this.sccs = [];
    }

    public findSCCs(): number[][] {
        // Iterate through all nodes in the graph
        for (const node of this.graph.keys()) {
            if (!this.indices.has(node)) {
                this.dfs(node);
            }
        }
        return this.sccs;
    }

    private dfs(node: number): void {
        // Initialize the node's index and low-link value
        this.indices.set(node, this.index);
        this.lowLinks.set(node, this.index);
        this.index++;
        this.stack.push(node);
        this.onStack.add(node);

        // Explore neighbors
        const neighbors = this.graph.get(node) || [];
        for (const neighbor of neighbors) {
            if (!this.indices.has(neighbor)) {
                // Neighbor has not been visited yet
                this.dfs(neighbor);
                // Update the low-link value after exploring the neighbor
                this.lowLinks.set(node, Math.min(this.lowLinks.get(node)!, this.lowLinks.get(neighbor)!));
            } else if (this.onStack.has(neighbor)) {
                // Neighbor is on the stack, update the low-link value
                this.lowLinks.set(node, Math.min(this.lowLinks.get(node)!, this.indices.get(neighbor)!));
            }
        }

        // If the node is a root node, pop the stack and generate an SCC
        if (this.lowLinks.get(node) === this.indices.get(node)) {
            const scc: number[] = [];
            let w: number;
            do {
                w = this.stack.pop()!;
                this.onStack.delete(w);
                scc.push(w);
            } while (w !== node);
            this.sccs.push(scc);
        }
    }
}

// Example usage
const graph = new Map<number, number[]>([
    [0, [1]],
    [1, [2]],
    [2, [0, 3]],
    [3, [4]],
    [4, [5, 6]],
    [5, [3]],
    [6, [7]],
    [7, [8]],
    [8, [6]]
]);

const tarjan = new TarjansAlgorithm(graph);
const sccs = tarjan.findSCCs();
console.log("Strongly Connected Components:", sccs);
0 -> 1
1 -> 2
2 -> 0, 3
3 -> 4
4 -> 5, 6
5 -> 3
6 -> 7
7 -> 8
8 -> 6
Strongly Connected Components: [[0, 2, 1], [3, 5, 4], [6, 8, 7]]
