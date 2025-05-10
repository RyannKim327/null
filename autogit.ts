class Tarjan {
    private index: number = 0;
    private stack: number[] = [];
    private onStack: boolean[] = [];
    private indices: number[] = [];
    private lowLinks: number[] = [];
    private sccs: number[][] = [];

    constructor(private graph: Map<number, number[]>) {}

    public findSCCs(): number[][] {
        const nodes = Array.from(this.graph.keys());
        
        nodes.forEach(node => {
            if (this.indices[node] === undefined) {
                this.strongConnect(node);
            }
        });

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
        const neighbors = this.graph.get(v) || [];
        for (const w of neighbors) {
            if (this.indices[w] === undefined) {
                // Successor w has not yet been visited; recurse on it
                this.strongConnect(w);
                this.lowLinks[v] = Math.min(this.lowLinks[v], this.lowLinks[w]);
            } else if (this.onStack[w]) {
                // Successor w is in stack and hence in the current SCC
                this.lowLinks[v] = Math.min(this.lowLinks[v], this.indices[w]);
            }
        }

        // After visiting all the neighbors, if v is a root node
        if (this.lowLinks[v] === this.indices[v]) {
            // Start a new strongly connected component
            const scc = [];
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
const graph = new Map<number, number[]>([
    [0, [1]],
    [1, [2]],
    [2, [0, 3]],
    [3, [4]],
    [4, [5]],
    [5, [3]],
]);

const tarjan = new Tarjan(graph);
const sccs = tarjan.findSCCs();
console.log(sccs);
