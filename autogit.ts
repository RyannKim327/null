class Graph {
    private vertices: number;
    private adjList: number[][];

    constructor(vertices: number) {
        this.vertices = vertices;
        this.adjList = Array.from({ length: vertices }, () => []);
    }

    addEdge(v: number, w: number) {
        this.adjList[v].push(w);
    }

    tarjan(): number[][] {
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

            for (const w of this.adjList[v]) {
                if (index[w] === -1) {
                    // Successor w has not yet been visited; recurse on it
                    strongConnect(w);
                    lowlink[v] = Math.min(lowlink[v], lowlink[w]);
                } else if (onStack[w]) {
                    // Successor w is in stack and hence in the current SCC
                    lowlink[v] = Math.min(lowlink[v], index[w]);
                }
            }

            // If v is a root node, pop the stack and generate an SCC
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
const g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(1, 3);
g.addEdge(3, 4);

const sccs = g.tarjan();
console.log(sccs); // Output: [[2, 1, 0], [4], [3]]
