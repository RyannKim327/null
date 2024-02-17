class TarjanSCC {
    constructor(graph) {
        this.graph = graph;
        this.index = 0;
        this.stack = [];
        this.lowLink = new Map();
        this.onStack = new Set();
        this.scc = [];
        this.indexMap = new Map();
    }

    findSCC() {
        for (let node of this.graph) {
            if (!this.indexMap.has(node)) {
                this.strongConnect(node);
            }
        }
        return this.scc;
    }

    strongConnect(node) {
        this.indexMap.set(node, this.index);
        this.lowLink.set(node, this.index);
        this.index++;
        this.stack.push(node);
        this.onStack.add(node);
        
        for (let neighbor of this.graph[node]) {
            if (!this.indexMap.has(neighbor)) {
                this.strongConnect(neighbor);
                this.lowLink.set(node, Math.min(this.lowLink.get(node), this.lowLink.get(neighbor)));
            } else if (this.onStack.has(neighbor)) {
                this.lowLink.set(node, Math.min(this.lowLink.get(node), this.indexMap.get(neighbor)));
            }
        }
        
        if (this.lowLink.get(node) === this.indexMap.get(node)) {
            let sccComponent = [];
            let next;
            do {
                next = this.stack.pop();
                this.onStack.delete(next);
                sccComponent.push(next);
            } while (next !== node);
            
            this.scc.push(sccComponent);
        }
    }
}

// Example usage
const graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [3, 5],
    5: [6],
    6: [4, 7],
    7: [8],
    8: [5, 7]
};

const tarjan = new TarjanSCC(graph);
const scc = tarjan.findSCC();
console.log(scc);
