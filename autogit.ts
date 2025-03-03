class Tarjan {
    private graph: Map<number, number[]>;
    private index: number[];
    private lowLink: number[];
    private onStack: boolean[];
    private stack: number[];
    private indices: number;
    private stronglyConnectedComponents: number[][];

    constructor(graph: Map<number, number[]>) {
        this.graph = graph;
        const n = graph.size;
        this.index = Array(n).fill(-1);
        this.lowLink = Array(n).fill(0);
        this.onStack = Array(n).fill(false);
        this.stack = [];
        this.indices = 0;
        this.stronglyConnectedComponents = [];
    }

    public findSCC(): number[][] {
        for (let v = 0; v < this.graph.size; v++) {
            if (this.index[v] === -1) {
                this.strongConnect(v);
            }
        }
        return this.stronglyConnectedComponents;
    }

    private strongConnect(v: number): void {
        this.index[v] = this.indices;
        this.lowLink[v] = this.indices;
        this.indices += 1;
        this.stack.push(v);
        this.onStack[v] = true;

        for (const w of (this.graph.get(v) || [])) {
            if (this.index[w] === -1) {
                // Successor w has not yet been visited; recurse on it
                this.strongConnect(w);
                this.lowLink[v] = Math.min(this.lowLink[v], this.lowLink[w]);
            } else if (this.onStack[w]) {
                // Successor w is in stack and hence in the current SCC
                this.lowLink[v] = Math.min(this.lowLink[v], this.index[w]);
            }
        }

        // If v is a root node, pop the stack and generate an SCC
        if (this.lowLink[v] === this.index[v]) {
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
const graph = new Map<number, number[]>([
    [0, [1]],
    [1, [2]],
    [2, [0, 3]],
    [3, [4]],
    [4, [5]],
    [5, [3]]
]);

const tarjan = new Tarjan(graph);
const sccs = tarjan.findSCC();
console.log("Strongly Connected Components:", sccs);
