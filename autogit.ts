class Tarjan {
    private index: number = 0;
    private stack: number[] = [];
    private indices: number[] = [];
    private lowLinks: number[] = [];
    private onStack: boolean[] = [];
    private sccs: number[][] = [];

    constructor(private graph: number[][]) {}

    // Main function to find strongly connected components
    public findSCCs(): number[][] {
        const numVertices = this.graph.length;
        this.indices = new Array(numVertices).fill(-1); // use -1 to indicate unvisited nodes
        this.lowLinks = new Array(numVertices).fill(0);
        this.onStack = new Array(numVertices).fill(false);

        for (let v = 0; v < numVertices; v++) {
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
        this.index += 1;
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
const graph = [
    [1],        // 0 -> 1
    [2],        // 1 -> 2
    [0],        // 2 -> 0
    [1, 4],     // 3 -> 1, 3 -> 4
    [5],        // 4 -> 5
    [3],        // 5 -> 3
];

const tarjan = new Tarjan(graph);
const sccs = tarjan.findSCCs();
console.log(sccs); // Output will show the strongly connected components
