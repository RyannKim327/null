class TarjanSCC {
    constructor(graph) {
        this.graph = graph;
        this.index = 0;
        this.stack = [];
        this.inStack = new Set();
        this.lowlink = {};
        this.indexMap = {};
        this.sccs = [];
    }

    findSCCs() {
        for (let node of this.graph) {
            if (!(node in this.indexMap)) {
                this.tarjan(node);
            }
        }

        return this.sccs;
    }

    tarjan(node) {
        this.indexMap[node] = this.index;
        this.lowlink[node] = this.index;
        this.index++;
        this.stack.push(node);
        this.inStack.add(node);

        for (let neighbor of this.graph[node]) {
            if (!(neighbor in this.indexMap)) {
                this.tarjan(neighbor);
                this.lowlink[node] = Math.min(this.lowlink[node], this.lowlink[neighbor]);
            } else if (this.inStack.has(neighbor)) {
                this.lowlink[node] = Math.min(this.lowlink[node], this.indexMap[neighbor]);
            }
        }

        if (this.lowlink[node] === this.indexMap[node]) {
            let scc = [];
            let top = '';
            do {
                top = this.stack.pop();
                this.inStack.delete(top);
                scc.push(top);
            } while (top !== node);

            this.sccs.push(scc);
        }
    }
}

// Example Usage
const graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5, 6],
    5: [3],
    6: [7],
    7: [4, 6]
};

const tarjanSCC = new TarjanSCC(graph);
const sccs = tarjanSCC.findSCCs();
console.log(sccs);
