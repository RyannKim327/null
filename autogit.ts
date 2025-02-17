class Graph {
    private vertices: number;
    private adjacencyList: Map<number, number[]>;

    constructor(vertices: number) {
        this.vertices = vertices;
        this.adjacencyList = new Map<number, number[]>();
    }

    addEdge(v: number, w: number) {
        if (!this.adjacencyList.has(v)) {
            this.adjacencyList.set(v, []);
        }
        this.adjacencyList.get(v)!.push(w);
    }

    tarjan() {
        const index: number[] = Array(this.vertices).fill(-1);
        const lowlink: number[] = Array(this.vertices).fill(-1);
        const onStack: boolean[] = Array(this.vertices).fill(false);
        const stack: number[] = [];
        const result: number[][] = [];
        let currentIndex = 0;

        const strongConnect = (v: number) => {
            index[v] = currentIndex;
            lowlink[v] = currentIndex;
            currentIndex++;
            stack.push(v);
            onStack[v] = true;

            const neighbors = this.adjacencyList.get(v) || [];

            for (const w of neighbors) {
                if (index[w] === -1) {
                    strongConnect(w);
                    lowlink[v] = Math.min(lowlink[v], lowlink[w]);
                } else if (onStack[w]) {
                    lowlink[v] = Math.min(lowlink[v], index[w]);
                }
            }

            if (lowlink[v] === index[v]) {
                const scc: number[] = [];
                let w: number;
                do {
                    w = stack.pop()!;
                    onStack[w] = false;
                    scc.push(w);
                } while (w !== v);
                result.push(scc);
            }
        };

        for (let v = 0; v < this.vertices; v++) {
            if (index[v] === -1) {
                strongConnect(v);
            }
        }

        return result;
    }
}

// Example usage:
const graph = new Graph(5);
graph.addEdge(0, 2);
graph.addEdge(1, 0);
graph.addEdge(2, 1);
graph.addEdge(0, 3);
graph.addEdge(3, 4);

const sccs = graph.tarjan();
console.log(sccs);  // Output: Strongly connected components
