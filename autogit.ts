class Graph {
    private adj: Map<number, number[]> = new Map();

    addEdge(v: number, w: number) {
        if (!this.adj.has(v)) {
            this.adj.set(v, []);
        }
        this.adj.get(v)?.push(w);
    }

    getAdjacencyList(v: number): number[] {
        return this.adj.get(v) || [];
    }

    getVertices(): number[] {
        return Array.from(this.adj.keys());
    }
}

class Tarjan {
    private index: number = 0;
    private stack: number[] = [];
    private inStack: Set<number> = new Set();
    private indices: Map<number, number> = new Map();
    private lowLinks: Map<number, number> = new Map();
    private stronglyConnectedComponents: number[][] = [];

    constructor(private graph: Graph) {}

    findSCCs(): number[][] {
        const vertices = this.graph.getVertices();
        for (const v of vertices) {
            if (!this.indices.has(v)) {
                this.strongconnect(v);
            }
        }
        return this.stronglyConnectedComponents;
    }

    private strongconnect(v: number) {
        this.indices.set(v, this.index);
        this.lowLinks.set(v, this.index);
        this.index++;
        this.stack.push(v);
        this.inStack.add(v);

        for (const w of this.graph.getAdjacencyList(v)) {
            if (!this.indices.has(w)) {
                // Successor w has not yet been visited; recurse on it
                this.strongconnect(w);
                this.lowLinks.set(v, Math.min(this.lowLinks.get(v)!, this.lowLinks.get(w)!));
            } else if (this.inStack.has(w)) {
                // Successor w is in stack and thus in the current SCC
                this.lowLinks.set(v, Math.min(this.lowLinks.get(v)!, this.indices.get(w)!));
            }
        }

        // If v is a root node, pop the stack and generate an SCC
        if (this.lowLinks.get(v) === this.indices.get(v)) {
            const scc: number[] = [];
            let w: number;
            do {
                w = this.stack.pop()!;
                this.inStack.delete(w);
                scc.push(w);
            } while (w !== v);
            this.stronglyConnectedComponents.push(scc);
        }
    }
}

// Example Usage
const graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 3);

const tarjan = new Tarjan(graph);
const result = tarjan.findSCCs();
console.log(result);  // Output: SCCs in the graph
