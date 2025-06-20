class Graph {
    private adjList: Map<number, number[]>;
    private index: number;
    private stack: number[];
    private indices: Map<number, number>;
    private lowLinks: Map<number, number>;
    private onStack: Set<number>;
    private sccs: number[][];

    constructor() {
        this.adjList = new Map<number, number[]>(); // Adjacency list representation of the graph
    }

    // Add a directed edge from node u to node v
    addEdge(u: number, v: number): void {
        if (!this.adjList.has(u)) {
            this.adjList.set(u, []);
        }
        this.adjList.get(u)?.push(v);
    }

    // Find all strongly connected components using Tarjan's algorithm
    findStronglyConnectedComponents(): number[][] {
        this.index = 0; // Global DFS index counter
        this.stack = []; // Stack to keep track of visited nodes during DFS
        this.indices = new Map<number, number>(); // Stores the DFS index of each node
        this.lowLinks = new Map<number, number>(); // Stores the low-link value of each node
        this.onStack = new Set<number>(); // Tracks whether a node is on the stack
        this.sccs = []; // List of strongly connected components

        // Iterate over all nodes in the graph
        for (const node of this.adjList.keys()) {
            if (!this.indices.has(node)) {
                this.tarjan(node);
            }
        }

        return this.sccs;
    }

    // Helper function implementing Tarjan's algorithm
    private tarjan(node: number): void {
        // Set the depth index for the current node
        this.indices.set(node, this.index);
        this.lowLinks.set(node, this.index);
        this.index++;

        // Push the current node onto the stack
        this.stack.push(node);
        this.onStack.add(node);

        // Explore all neighbors of the current node
        const neighbors = this.adjList.get(node) || [];
        for (const neighbor of neighbors) {
            if (!this.indices.has(neighbor)) {
                // Neighbor has not been visited yet
                this.tarjan(neighbor);
                // Update the low-link value of the current node
                this.lowLinks.set(
                    node,
                    Math.min(this.lowLinks.get(node)!, this.lowLinks.get(neighbor)!)
                );
            } else if (this.onStack.has(neighbor)) {
                // Neighbor is already on the stack, meaning it's part of the current SCC
                this.lowLinks.set(
                    node,
                    Math.min(this.lowLinks.get(node)!, this.indices.get(neighbor)!)
                );
            }
        }

        // If the current node is a root node, pop the stack and generate an SCC
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

// Example usage:
function main() {
    const graph = new Graph();

    // Add edges to the graph
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 1);
    graph.addEdge(4, 5);
    graph.addEdge(5, 6);
    graph.addEdge(6, 4);
    graph.addEdge(7, 6);
    graph.addEdge(7, 8);

    // Find strongly connected components
    const sccs = graph.findStronglyConnectedComponents();
    console.log("Strongly Connected Components:", sccs);
}

main();
Strongly Connected Components: [ [ 3, 2, 1 ], [ 6, 5, 4 ], [ 8 ], [ 7 ] ]
