class Tarjan {
    private index: number = 0; // Index to assign to nodes
    private stack: number[] = []; // Stack to hold the nodes
    private onStack: boolean[]; // Tracks whether a node is in the stack
    private indices: number[]; // Stores the index of each node
    private lowLinks: number[]; // Stores the low link values
    private sccs: number[][]; // List of strongly connected components

    constructor(private graph: number[][]) {
        const n = graph.length;
        this.indices = Array(n).fill(-1);
        this.lowLinks = Array(n).fill(-1);
        this.onStack = Array(n).fill(false);
        this.sccs = [];
    }

    public findSCCs(): number[][] {
        for (let v = 0; v < this.graph.length; v++) {
            if (this.indices[v] === -1) {
                this.strongConnect(v);
            }
        }
        return this.sccs;
    }

    private strongConnect(v: number): void {
        // Set the depth index for v to the smallest unused index
        this.indices[v] = this.index;
        this.lowLinks[v] = this.index;
        this.index++;
        this.stack.push(v);
        this.onStack[v] = true;

        // Consider successors of v
        for (let w of this.graph[v]) {
            if (this.indices[w] === -1) {
                // Successor w has not yet been visited; recurse on it
                this.strongConnect(w);
                this.lowLinks[v] = Math.min(this.lowLinks[v], this.lowLinks[w]);
            } else if (this.onStack[w]) {
                // Successor w is in the stack and hence in the current SCC
                this.lowLinks[v] = Math.min(this.lowLinks[v], this.indices[w]);
            }
        }

        // If v is a root node, pop the stack and generate an SCC
        if (this.lowLinks[v] === this.indices[v]) {
            const scc: number[] = [];
            let w: number;
            do {
                w = this.stack.pop()!;
                this.onStack[w] = false;
                scc.push(w);
            } while (w !== v);
            this.sccs.push(scc);
        }
    }
}

// Example Usage:
const graph = [
    [1],    // Node 0 points to Node 1
    [2],    // Node 1 points to Node 2
    [0],    // Node 2 points to Node 0, forming a cycle (SCC)
    [1],    // Node 3 points to Node 1, separate from the first SCC
];

const tarjan = new Tarjan(graph);
const stronglyConnectedComponents = tarjan.findSCCs();
console.log(stronglyConnectedComponents);
