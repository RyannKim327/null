class TarjanSCC {
    constructor(graph) {
        this.graph = graph;
        this.n = graph.length;
        this.index = 0;
        this.lowLink = new Array(this.n).fill(-1);
        this.ids = new Array(this.n).fill(-1);
        this.onStack = new Array(this.n).fill(false);
        this.stack = [];
        this.sccCount = 0;
        this.sccs = [];
    }

    findSCCs() {
        for (let i = 0; i < this.n; i++) {
            if (this.ids[i] === -1) {
                this.dfs(i);
            }
        }
        return this.sccs;
    }

    dfs(at) {
        this.lowLink[at] = this.index;
        this.ids[at] = this.index;
        this.index++;
        this.stack.push(at);
        this.onStack[at] = true;

        // Visit all neighbors
        for (let to of this.graph[at]) {
            if (this.ids[to] === -1) {
                this.dfs(to);
            }
            if (this.onStack[to]) {
                this.lowLink[at] = Math.min(this.lowLink[at], this.lowLink[to]);
            }
        }

        if (this.lowLink[at] === this.ids[at]) {
            // Start a new strongly connected component
            let component = [];
            let node = -1;
            while (node !== at) {
                node = this.stack.pop();
                this.onStack[node] = false;
                component.push(node);
            }
            this.sccs.push(component);
            this.sccCount++;
        }
    }
}

// Example Usage
const graph = [[1], [2], [0], [4], [3]];
const tarjan = new TarjanSCC(graph);
const sccs = tarjan.findSCCs();
console.log(sccs);
