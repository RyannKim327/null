class Graph {
    private adjList: Map<number, number[]> = new Map();
    private index: number = 0;
    private stack: number[] = [];
    private indices: Map<number, number> = new Map();
    private lowLink: Map<number, number> = new Map();
    private onStack: Set<number> = new Set();
    private sccs: number[][] = [];

    constructor(vertices: number[]) {
        for (const vertex of vertices) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(v: number, w: number): void {
        if (this.adjList.has(v)) {
            this.adjList.get(v)!.push(w);
        }
    }

    private strongConnect(v: number): void {
        // Set the depth index for v to the smallest unused index
        this.indices.set(v, this.index);
        this.lowLink.set(v, this.index);
        this.index++;
        this.stack.push(v);
        this.onStack.add(v);

        // Consider successors of v
        for (const w of this.adjList.get(v) || []) {
            if (!this.indices.has(w)) {
                // Successor w has not yet been visited; recurse on it
                this.strongConnect(w);
                this.lowLink.set(v, Math.min(this.lowLink.get(v)!, this.lowLink.get(w)!));
            } else if (this.onStack.has(w)) {
                // Successor w is in stack and hence in the current SCC
                this.lowLink.set(v, Math.min(this.lowLink.get(v)!, this.indices.get(w)!));
            }
        }

        // If v is a root node, pop the stack and generate an SCC
        if (this.lowLink.get(v) === this.indices.get(v)) {
            const scc: number[] = [];
            let w: number;
            do {
                w = this.stack.pop()!;
                this.onStack.delete(w);
                scc.push(w);
            } while (w !== v);
            this.sccs.push(scc);
        }
    }

    findSCCs(): number[][] {
        for (const vertex of this.adjList.keys()) {
            if (!this.indices.has(vertex)) {
                this.strongConnect(vertex);
            }
        }
        return this.sccs;
    }
}

// Example usage:
const vertices = [0, 1, 2, 3, 4];
const graph = new Graph(vertices);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);
graph.addEdge(3, 4);

const sccs = graph.findSCCs();
console.log(sccs); // Output the strongly connected components
