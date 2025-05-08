class Tarjan {
    private index: number;
    private stack: number[];
    private indices: number[];
    private lowLinks: number[];
    private onStack: boolean[];
    private sccs: number[][];

    constructor(private graph: number[][]) {
        const size = graph.length;
        this.index = 0;
        this.stack = [];
        this.indices = new Array(size).fill(-1);
        this.lowLinks = new Array(size).fill(0);
        this.onStack = new Array(size).fill(false);
        this.sccs = [];
    }

    public findSCCs(): number[][] {
        for (let i = 0; i < this.graph.length; i++) {
            if (this.indices[i] === -1) {
                this.strongConnect(i);
            }
        }
        return this.sccs;
    }

    private strongConnect(v: number) {
        // Set the depth index for v to the smallest unused index
        this.indices[v] = this.index;
        this.lowLinks[v] = this.index;
        this.index++;
        this.stack.push(v);
        this.onStack[v] = true;

        // Consider successors of v
        for (const w of this.graph[v]) {
            if (this.indices[w] === -1) {
                // Successor w has not yet been visited; recurse on it
                this.strongConnect(w);
                this.lowLinks[v] = Math.min(this.lowLinks[v], this.lowLinks[w]);
            } else if (this.onStack[w]) {
                // Successor w is in stack and hence in the current SCC
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
const graph: number[][] = [
    [1],        // 0 -> 1
    [2],        // 1 -> 2
    [0],        // 2 -> 0
    [1, 4],     // 3 -> 1, 3
    [5],        // 4 -> 5
    [4, 6],     // 5 -> 4, 6
    [5],        // 6 -> 5
];

const tarjan = new Tarjan(graph);
const stronglyConnectedComponents = tarjan.findSCCs();
console.log(stronglyConnectedComponents);
