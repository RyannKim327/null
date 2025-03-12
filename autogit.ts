class Graph {
    private vertices: number;
    private adjList: number[][];
    private index: number;
    private stack: number[];
    private indices: number[];
    private lowLink: number[];
    private onStack: boolean[];
    private sccs: number[][];

    constructor(vertices: number) {
        this.vertices = vertices;
        this.adjList = Array.from({ length: vertices }, () => []);
        this.index = 0;
        this.stack = [];
        this.indices = Array(vertices).fill(-1);
        this.lowLink = Array(vertices).fill(0);
        this.onStack = Array(vertices).fill(false);
        this.sccs = [];
    }

    addEdge(v: number, w: number) {
        this.adjList[v].push(w);
    }

    private strongConnect(v: number) {
        this.indices[v] = this.index;
        this.lowLink[v] = this.index;
        this.index++;
        this.stack.push(v);
        this.onStack[v] = true;

        for (const w of this.adjList[v]) {
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

    findSCCs() {
        for (let v = 0; v < this.vertices; v++) {
            if (this.indices[v] === -1) {
                this.strongConnect(v);
            }
        }
        return this.sccs;
    }
}

// Example usage:
const graph = new Graph(5);
graph.addEdge(0, 2);
graph.addEdge(2, 1);
graph.addEdge(1, 0);
graph.addEdge(0, 3);
graph.addEdge(3, 4);

const sccs = graph.findSCCs();
console.log(sccs); // Output: [[0, 1, 2], [3], [4]]
