class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map<number, number[]>();
    }

    addEdge(v: number, w: number) {
        if (!this.adjacencyList.has(v)) {
            this.adjacencyList.set(v, []);
        }
        this.adjacencyList.get(v)!.push(w);
    }

    tarjan(): number[][] {
        const lowLink: Map<number, number> = new Map();
        const indices: Map<number, number> = new Map();
        const onStack: Set<number> = new Set();
        const stack: number[] = [];
        const result: number[][] = [];
        let index = 0;

        const strongconnect = (v: number) => {
            indices.set(v, index);
            lowLink.set(v, index);
            index += 1;
            stack.push(v);
            onStack.add(v);

            const neighbors = this.adjacencyList.get(v) || [];
            for (const w of neighbors) {
                if (!indices.has(w)) {
                    strongconnect(w);
                    lowLink.set(v, Math.min(lowLink.get(v)!, lowLink.get(w)!));
                } else if (onStack.has(w)) {
                    lowLink.set(v, Math.min(lowLink.get(v)!, indices.get(w)!));
                }
            }

            // If v is a root node, pop the stack and generate an SCC
            if (lowLink.get(v) === indices.get(v)) {
                const scc: number[] = [];
                let w: number;
                do {
                    w = stack.pop()!;
                    onStack.delete(w);
                    scc.push(w);
                } while (w !== v);
                result.push(scc);
            }
        };

        for (const v of this.adjacencyList.keys()) {
            if (!indices.has(v)) {
                strongconnect(v);
            }
        }

        return result;
    }
}

// Usage
const graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 3);

const sccs = graph.tarjan();
console.log(sccs);  // Output SCCs found in the graph
