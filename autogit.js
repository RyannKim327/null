class Graph {
    constructor(numNodes) {
        this.graph = Array(numNodes).fill().map(() => []);
    }

    addEdge(u, v) {
        this.graph[u].push(v);
    }

    tarjan() {
        let index = 0;
        let stack = [];
        let onStack = Array(this.graph.length).fill(false);
        let indexMap = Array(this.graph.length).fill(-1);
        let lowLink = Array(this.graph.length).fill(-1);
        let result = [];

        const strongConnect = (v) => {
            indexMap[v] = index;
            lowLink[v] = index;
            index++;
            stack.push(v);
            onStack[v] = true;

            for (const w of this.graph[v]) {
                if (indexMap[w] === -1) {
                    strongConnect(w);
                    lowLink[v] = Math.min(lowLink[v], lowLink[w]);
                } else if (onStack[w]) {
                    lowLink[v] = Math.min(lowLink[v], indexMap[w]);
                }
            }

            if (indexMap[v] === lowLink[v]) {
                let component = [];
                let w;
                do {
                    w = stack.pop();
                    onStack[w] = false;
                    component.push(w);
                } while (w !== v);

                result.push(component);
            }
        };

        for (let v = 0; v < this.graph.length; v++) {
            if (indexMap[v] === -1) {
                strongConnect(v);
            }
        }

        return result;
    }
}

// Example usage
const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);
graph.addEdge(3, 4);

const stronglyConnectedComponents = graph.tarjan();
console.log(stronglyConnectedComponents);
