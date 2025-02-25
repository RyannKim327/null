class Tarjan {
    private index: number;
    private indices: number[];
    private lowLinks: number[];
    private onStack: boolean[];
    private stack: number[];
    private sccs: number[][];

    constructor(private graph: number[][]) {
        this.index = 0;
        this.indices = new Array(graph.length).fill(-1);
        this.lowLinks = new Array(graph.length).fill(0);
        this.onStack = new Array(graph.length).fill(false);
        this.stack = [];
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
        this.indices[v] = this.index;
        this.lowLinks[v] = this.index;
        this.index++;
        this.stack.push(v);
        this.onStack[v] = true;

        for (const w of this.graph[v]) {
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

// Example usage:
const graph = [
    [1], // 0 -> 1
    [2], // 1 -> 2
    [0], // 2 -> 0
    [1], // 3 -> 1
    [3]  // 4 -> 3
];

const tarjans = new Tarjan(graph);
const sccs = tarjans.findSCCs();
console.log(sccs);
