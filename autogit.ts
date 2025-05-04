class Tarjan {
    private index: number = 0;
    private stack: number[] = [];
    private indexArray: number[];
    private lowLinkArray: number[];
    private onStack: boolean[];
    private sccs: number[][] = [];
    private graph: number[][];

    constructor(graph: number[][]) {
        this.graph = graph;
        const n = graph.length;
        this.indexArray = Array(n).fill(-1);
        this.lowLinkArray = Array(n).fill(-1);
        this.onStack = Array(n).fill(false);
    }

    public findSCCs(): number[][] {
        for (let v = 0; v < this.graph.length; v++) {
            if (this.indexArray[v] === -1) {
                this.strongconnect(v);
            }
        }
        return this.sccs;
    }

    private strongconnect(v: number) {
        // Set the depth index for v to the smallest unused index
        this.indexArray[v] = this.index;
        this.lowLinkArray[v] = this.index;
        this.index++;
        this.stack.push(v);
        this.onStack[v] = true;

        // Consider successors of v
        for (const w of this.graph[v]) {
            if (this.indexArray[w] === -1) {
                // Successor w has not yet been visited; recurse on it
                this.strongconnect(w);
                this.lowLinkArray[v] = Math.min(this.lowLinkArray[v], this.lowLinkArray[w]);
            } else if (this.onStack[w]) {
                // Successor w is in stack and hence in the current SCC
                this.lowLinkArray[v] = Math.min(this.lowLinkArray[v], this.indexArray[w]);
            }
        }

        // If v is a root node, pop the stack and generate an SCC
        if (this.lowLinkArray[v] === this.indexArray[v]) {
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
    [1],
    [2],
    [0, 3],
    [4],
    [5],
    [6],
    [4],
];
const tarjan = new Tarjan(graph);
const sccs = tarjan.findSCCs();
console.log("Strongly Connected Components:", sccs);
