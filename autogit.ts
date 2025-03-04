class Graph {
    private adjacencyList: number[][];
    private index: number;
    private stack: number[];
    private indices: number[];
    private lowLinks: number[];
    private onStack: boolean[];
    private sccs: number[][];

    constructor(vertexCount: number) {
        this.adjacencyList = Array.from({ length: vertexCount }, () => []);
        this.index = 0;
        this.stack = [];
        this.indices = new Array(vertexCount).fill(-1);
        this.lowLinks = new Array(vertexCount).fill(-1);
        this.onStack = new Array(vertexCount).fill(false);
        this.sccs = [];
    }

    addEdge(v: number, w: number) {
        this.adjacencyList[v].push(w);
    }

    private strongconnect(v: number) {
        this.indices[v] = this.index;
        this.lowLinks[v] = this.index;
        this.index++;
        this.stack.push(v);
        this.onStack[v] = true;

        for (const w of this.adjacencyList[v]) {
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
            this.sccs.push(scc);
        }
    }

    findSCCs(): number[][] {
        for (let i = 0; i < this.adjacencyList.length; i++) {
            if (this.indices[i] === -1) {
                this.strongconnect(i);
            }
        }
        return this.sccs;
    }
}

// Example Usage
const graph = new Graph(5);
graph.addEdge(0, 2);
graph.addEdge(2, 1);
graph.addEdge(1, 0);
graph.addEdge(0, 3);
graph.addEdge(3, 4);

const sccs = graph.findSCCs();
console.log(sccs); // Outputs the strongly connected components
