class Tarjan {
    private index: number = 0;
    private stack: number[] = [];
    private lowLink: number[];
    private indexes: number[];
    private onStack: boolean[];
    private stronglyConnectedComponents: number[][];

    constructor(private graph: number[][]) {
        const n = graph.length;
        this.lowLink = new Array(n).fill(0);
        this.indexes = new Array(n).fill(-1);
        this.onStack = new Array(n).fill(false);
        this.stronglyConnectedComponents = [];
    }

    public findSCCs(): number[][] {
        for (let v = 0; v < this.graph.length; v++) {
            if (this.indexes[v] === -1) {
                this.strongConnect(v);
            }
        }
        return this.stronglyConnectedComponents;
    }

    private strongConnect(v: number): void {
        // Set the depth index for v to the smallest unused index
        this.indexes[v] = this.index;
        this.lowLink[v] = this.index;
        this.index++;
        this.stack.push(v);
        this.onStack[v] = true;

        // Consider successors of v
        for (const w of this.graph[v]) {
            if (this.indexes[w] === -1) {
                // Successor w has not yet been visited; recurse on it
                this.strongConnect(w);
                this.lowLink[v] = Math.min(this.lowLink[v], this.lowLink[w]);
            } else if (this.onStack[w]) {
                // Successor w is in the stack and hence in the current SCC
                this.lowLink[v] = Math.min(this.lowLink[v], this.indexes[w]);
            }
        }

        // If v is a root node, pop the stack and generate an SCC
        if (this.lowLink[v] === this.indexes[v]) {
            const scc: number[] = [];
            let w: number;
            do {
                w = this.stack.pop()!;
                this.onStack[w] = false;
                scc.push(w);
            } while (w !== v);
            this.stronglyConnectedComponents.push(scc);
        }
    }
}

// Example usage:
const graph = [
    [1],    // Node 0 points to Node 1
    [2],    // Node 1 points to Node 2
    [0],    // Node 2 points to Node 0 (forming a cycle)
    [1],    // Node 3 points to Node 1
    [5],    // Node 4 points to Node 5
    [4],    // Node 5 points to Node 4 (forming another cycle)
    [3],    // Node 6 points to Node 3
];

const tarjan = new Tarjan(graph);
const sccs = tarjan.findSCCs();
console.log(sccs); // Output the strongly connected components
