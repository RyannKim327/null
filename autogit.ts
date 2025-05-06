class Tarjan {
    private index = 0;
    private stack: number[] = [];
    private indices: number[];
    private lowLink: number[];
    private onStack: boolean[];
    private sccs: number[][];

    constructor(private graph: Map<number, number[]>) {
        const size = graph.size;
        this.indices = Array(size).fill(-1);
        this.lowLink = Array(size).fill(-1);
        this.onStack = Array(size).fill(false);
        this.sccs = [];
    }

    public findSCCs(): number[][] {
        for (let vertex of this.graph.keys()) {
            if (this.indices[vertex] === -1) {
                this.strongConnect(vertex);
            }
        }
        return this.sccs;
    }

    private strongConnect(vertex: number) {
        // Set the depth index for v to the smallest unused index
        this.indices[vertex] = this.index;
        this.lowLink[vertex] = this.index;
        this.index++;
        this.stack.push(vertex);
        this.onStack[vertex] = true;

        // Consider successors of v
        for (let neighbor of this.graph.get(vertex) || []) {
            if (this.indices[neighbor] === -1) {
                // Successor w has not yet been visited; recurse on it
                this.strongConnect(neighbor);
                this.lowLink[vertex] = Math.min(this.lowLink[vertex], this.lowLink[neighbor]);
            } else if (this.onStack[neighbor]) {
                // Successor w is in stack and hence in the current SCC
                this.lowLink[vertex] = Math.min(this.lowLink[vertex], this.indices[neighbor]);
            }
        }

        // If v is a root node, pop the stack and generate an SCC
        if (this.lowLink[vertex] === this.indices[vertex]) {
            const scc: number[] = [];
            let w: number;
            do {
                w = this.stack.pop()!;
                this.onStack[w] = false;
                scc.push(w);
            } while (w !== vertex);
            this.sccs.push(scc);
        }
    }
}

// Example of using the Tarjan's algorithm
const graph = new Map<number, number[]>([
    [0, [1]],
    [1, [2]],
    [2, [0, 3]],
    [3, []],
    [4, [5]],
    [5, [4]],
    [6, [5]]
]);

const tarjan = new Tarjan(graph);
const stronglyConnectedComponents = tarjan.findSCCs();
console.log(stronglyConnectedComponents);
