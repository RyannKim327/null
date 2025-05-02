class Graph {
    private adjList: Map<number, number[]>;
    private index: number;
    private stack: number[];
    private indices: number[];
    private lowLink: number[];
    private onStack: boolean[];
    private sccs: number[][];

    constructor(vertices: number) {
        this.adjList = new Map();
        for (let i = 0; i < vertices; i++) {
            this.adjList.set(i, []);
        }
        this.index = 0;
        this.stack = [];
        this.indices = new Array(vertices).fill(-1);
        this.lowLink = new Array(vertices).fill(-1);
        this.onStack = new Array(vertices).fill(false);
        this.sccs = [];
    }

    addEdge(u: number, v: number): void {
        this.adjList.get(u)?.push(v);
    }

    strongConnect(v: number): void {
        this.indices[v] = this.index;
        this.lowLink[v] = this.index;
        this.index++;
        this.stack.push(v);
        this.onStack[v] = true;

        const neighbors = this.adjList.get(v) || [];
        for (const w of neighbors) {
            if (this.indices[w] === -1) {
                // Successor w has not yet been visited; recurse on it
                this.strongConnect(w);
                this.lowLink[v] = Math.min(this.lowLink[v], this.lowLink[w]);
            } else if (this.onStack[w]) {
                // Successor w is in stack and hence in the current SCC
                this.lowLink[v] = Math.min(this.lowLink[v], this.indices[w]);
            }
        }

        // If v is a root node, pop the stack and generate an SCC
        if (this.lowLink[v] === this.indices[v]) {
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

    findSCCs(): number[][] {
        for (let i = 0; i < this.adjList.size; i++) {
            if (this.indices[i] === -1) {
                this.strongConnect(i);
            }
        }
        return this.sccs;
    }
}

// Usage Example
const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);
graph.addEdge(3, 4);

const sccs = graph.findSCCs();
console.log('Strongly Connected Components:', sccs);
