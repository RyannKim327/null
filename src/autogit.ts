class Graph {
    private adjacencyList: Map<number, number[]> = new Map();
    
    constructor() {}

    // Adds a directed edge from vertex u to vertex v
    addEdge(u: number, v: number): void {
        if (!this.adjacencyList.has(u)) {
            this.adjacencyList.set(u, []);
        }
        this.adjacencyList.get(u)!.push(v);
    }

    // Gets the list of vertices in the graph
    getVertices(): number[] {
        return Array.from(this.adjacencyList.keys());
    }

    // Tarjan's Algorithm for Strongly Connected Components
    tarjan(): number[][] {
        const index: Map<number, number> = new Map();
        const lowLink: Map<number, number> = new Map();
        const onStack: Set<number> = new Set();
        const stack: number[] = [];
        const sccs: number[][] = [];
        let currentIndex = 0;

        const strongConnect = (v: number) => {
            index.set(v, currentIndex);
            lowLink.set(v, currentIndex);
            currentIndex++;
            stack.push(v);
            onStack.add(v);

            // Explore neighbors
            const neighbors = this.adjacencyList.get(v) || [];
            for (const w of neighbors) {
                if (!index.has(w)) {
                    // Successor w has not yet been visited; recurse on it
                    strongConnect(w);
                    lowLink.set(v, Math.min(lowLink.get(v)!, lowLink.get(w)!));
                } else if (onStack.has(w)) {
                    // Successor w is in stack and hence in the current SCC
                    lowLink.set(v, Math.min(lowLink.get(v)!, index.get(w)!));
                }
            }

            // If v is a root node, pop the stack and generate an SCC
            if (lowLink.get(v) === index.get(v)) {
                const scc: number[] = [];
                let w: number;
                do {
                    w = stack.pop()!;
                    onStack.delete(w);
                    scc.push(w);
                } while (w !== v);
                sccs.push(scc);
            }
        };

        // Call the strongConnect function for each vertex
        for (const v of this.getVertices()) {
            if (!index.has(v)) {
                strongConnect(v);
            }
        }

        return sccs;
    }
}

// Example usage:
const graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 3);

const sccs = graph.tarjan();
console.log("Strongly Connected Components:", sccs);
