class TarjanSCC {
    private index: number;
    private stack: number[];
    private indices: number[];
    private lowLinks: number[];
    private onStack: boolean[];
    private result: number[][];

    constructor(private graph: number[][]) {
        this.index = 0;
        this.stack = [];
        this.indices = new Array(graph.length).fill(-1);
        this.lowLinks = new Array(graph.length).fill(-1);
        this.onStack = new Array(graph.length).fill(false);
        this.result = [];
    }

    public findSCCs(): number[][] {
        for (let v = 0; v < this.graph.length; v++) {
            if (this.indices[v] === -1) {
                this.strongconnect(v);
            }
        }
        return this.result;
    }

    private strongconnect(v: number): void {
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
                this.strongconnect(w);
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

            // Add the current strongly connected component to the list of results
            this.result.push(scc);
        }
    }
}

// Example usage:
const graph = [
    [1],    // 0 -> 1
    [2],    // 1 -> 2
    [0],    // 2 -> 0 (SCC {0,1,2})
    [3],    // 3 -> 4
    [4],    // 4 -> 5
    [3],    // 5 -> 4 (SCC {3,4,5})
];

const tarjan = new TarjanSCC(graph);
const sccs = tarjan.findSCCs();
console.log(sccs);
