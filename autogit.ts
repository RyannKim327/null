class Graph {
    private vertices: number;
    private adjList: Map<number, number[]>;
    private index: number;
    private indices: number[];
    private lowlink: number[];
    private onStack: boolean[];
    private stack: number[];
    private sccs: number[][];

    constructor(vertices: number) {
        this.vertices = vertices;
        this.adjList = new Map<number, number[]>();
        this.index = 0;
        this.indices = Array(vertices).fill(-1);
        this.lowlink = Array(vertices).fill(-1);
        this.onStack = Array(vertices).fill(false);
        this.stack = [];
        this.sccs = [];
    }

    addEdge(v: number, w: number): void {
        if (!this.adjList.has(v)) {
            this.adjList.set(v, []);
        }
        this.adjList.get(v)!.push(w);
    }

    private strongConnect(v: number): void {
        this.indices[v] = this.index;
        this.lowlink[v] = this.index;
        this.index++;
        this.stack.push(v);
        this.onStack[v] = true;

        const neighbors = this.adjList.get(v) || [];
        for (let w of neighbors) {
            if (this.indices[w] === -1) {
                // Successor w has not yet been visited; recurse on it
                this.strongConnect(w);
                this.lowlink[v] = Math.min(this.lowlink[v], this.lowlink[w]);
            } else if (this.onStack[w]) {
                // Successor w is in the stack and hence in the current SCC
                this.lowlink[v] = Math.min(this.lowlink[v], this.indices[w]);
            }
        }

        // If v is a root node, pop the stack and generate an SCC
        if (this.lowlink[v] === this.indices[v]) {
            const component: number[] = [];
            let w: number;
            do {
                w = this.stack.pop()!;
                this.onStack[w] = false;
                component.push(w);
            } while (w !== v);
            this.sccs.push(component);
        }
    }

    findSCCs(): number[][] {
        for (let v = 0; v < this.vertices; v++) {
            if (this.indices[v] === -1) {
                this.strongConnect(v);
            }
        }
        return this.sccs;
    }
}

// Example usage
const graph = new Graph(5);
graph.addEdge(0, 2);
graph.addEdge(2, 1);
graph.addEdge(1, 0);
graph.addEdge(0, 3);
graph.addEdge(3, 4);

const sccs = graph.findSCCs();
console.log(sccs);
