class Graph {
    private adjacencyList: Map<number, number[]>;
    private index: number;
    private stack: number[];
    private lowLink: number[];
    private indices: number[];
    private onStack: boolean[];
    private stronglyConnectedComponents: number[][];

    constructor() {
        this.adjacencyList = new Map();
        this.index = 0;
        this.stack = [];
        this.lowLink = [];
        this.indices = [];
        this.onStack = [];
        this.stronglyConnectedComponents = [];
    }

    addEdge(v: number, w: number) {
        if (!this.adjacencyList.has(v)) {
            this.adjacencyList.set(v, []);
        }
        this.adjacencyList.get(v)?.push(w);
    }

    private strongconnect(v: number) {
        // Set the depth Index for v to the smallest unused index
        this.indices[v] = this.index;
        this.lowLink[v] = this.index;
        this.index++;
        this.stack.push(v);
        this.onStack[v] = true;

        // Consider successors of v
        const neighbors = this.adjacencyList.get(v) || [];
        for (const w of neighbors) {
            if (this.indices[w] === undefined) {
                // Successor w has not yet been visited; recurse on it
                this.strongconnect(w);
                this.lowLink[v] = Math.min(this.lowLink[v], this.lowLink[w]);
            } else if (this.onStack[w]) {
                // Successor w is in stack and hence in the current SCC
                this.lowLink[v] = Math.min(this.lowLink[v], this.indices[w]);
            }
        }

        // If v is a root node, pop the stack and generate an SCC
        if (this.lowLink[v] === this.indices[v]) {
            const component: number[] = [];
            let w: number;

            do {
                w = this.stack.pop()!;
                this.onStack[w] = false;
                component.push(w);
            } while (w !== v);

            this.stronglyConnectedComponents.push(component);
        }
    }

    tarjan() {
        for (const v of this.adjacencyList.keys()) {
            if (this.indices[v] === undefined) {
                this.strongconnect(v);
            }
        }
        return this.stronglyConnectedComponents;
    }
}

// Example Usage
const graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);
graph.addEdge(4, 5);
graph.addEdge(5, 4);
graph.addEdge(6, 7);
graph.addEdge(7, 8);
graph.addEdge(8, 6);
graph.addEdge(7, 9);

const sccs = graph.tarjan();
console.log(sccs); // Output will show strongly connected components
