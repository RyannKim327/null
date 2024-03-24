class TarjanSCC {
    constructor(graph) {
        this.graph = graph;
        this.index = 0;
        this.stack = [];
        this.lowLinks = new Map();
        this.indexes = new Map();
        this.sccs = [];
    }

    findSCCs() {
        for (let node of this.graph) {
            if (!this.indexes.has(node)) {
                this.strongConnect(node);
            }
        }
        return this.sccs;
    }

    strongConnect(node) {
        this.indexes.set(node, this.index);
        this.lowLinks.set(node, this.index);
        this.index++;
        this.stack.push(node);

        for (let neighbor of this.graph[node]) {
            if (!this.indexes.has(neighbor)) {
                this.strongConnect(neighbor);
                this.lowLinks.set(node, Math.min(this.lowLinks.get(node), this.lowLinks.get(neighbor)));
            } else if (this.stack.includes(neighbor)) {
                this.lowLinks.set(node, Math.min(this.lowLinks.get(node), this.indexes.get(neighbor)));
            }
        }

        if (this.lowLinks.get(node) === this.indexes.get(node)) {
            let scc = [];
            let top;
            do {
                top = this.stack.pop();
                scc.push(top);
            } while (top !== node);
            this.sccs.push(scc);
        }
    }
}

// Example graph representation (adjacency list)
const graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5, 7],
    5: [6],
    6: [4],
    7: [5, 8],
    8: [7]
};

const tarjan = new TarjanSCC(graph);
const sccs = tarjan.findSCCs();
console.log(sccs);
