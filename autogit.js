class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = Array.from({ length: vertices }, () => []);
    }

    addEdge(u, v) {
        this.adjList[u].push(v);
    }

    tarjanSCC() {
        let index = 0;
        let stack = [];
        let onStack = new Array(this.vertices).fill(false);
        let lowlink = new Array(this.vertices).fill(0);
        let indexMap = new Array(this.vertices).fill(-1);
        let result = [];

        function strongConnect(v) {
            indexMap[v] = index;
            lowlink[v] = index;
            index++;
            stack.push(v);
            onStack[v] = true;

            for (let w of this.adjList[v]) {
                if (indexMap[w] === -1) {
                    strongConnect(w);
                    lowlink[v] = Math.min(lowlink[v], lowlink[w]);
                } else if (onStack[w]) {
                    lowlink[v] = Math.min(lowlink[v], indexMap[w]);
                }
            }

            if (lowlink[v] === indexMap[v]) {
                let scc = [];
                let w;
                do {
                    w = stack.pop();
                    onStack[w] = false;
                    scc.push(w);
                } while (w !== v);
                result.push(scc);
            }
        }

        for (let v = 0; v < this.vertices; v++) {
            if (indexMap[v] === -1) {
                strongConnect(v);
            }
        }

        return result;
    }
}

// Example usage
let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(1, 3);
g.addEdge(3, 4);
g.addEdge(4, 3);

let sccs = g.tarjanSCC();
console.log(sccs);
