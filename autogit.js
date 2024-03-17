class TarjanSCC {
    constructor(graph) {
        this.graph = graph;
        this.index = 0;
        this.stack = [];
        this.ids = new Array(graph.length).fill(-1);
        this.low = new Array(graph.length).fill(-1);
        this.onStack = new Array(graph.length).fill(false);
        this.sccCount = 0;
        this.scc = [];
    }
    
    findSCC() {
        for (let i = 0; i < this.graph.length; i++) {
            if (this.ids[i] === -1) {
                this.dfs(i);
            }
        }
        
        return this.scc;
    }
    
    dfs(at) {
        this.stack.push(at);
        this.onStack[at] = true;
        this.ids[at] = this.low[at] = this.index++;
        
        for (let to of this.graph[at]) {
            if (this.ids[to] === -1) {
                this.dfs(to);
            }
            if (this.onStack[to]) {
                this.low[at] = Math.min(this.low[at], this.low[to]);
            }
        }
        
        if (this.ids[at] === this.low[at]) {
            let scc = [];
            let node = -1;
            while (node !== at) {
                node = this.stack.pop();
                this.onStack[node] = false;
                scc.push(node);
            }
            this.scc.push(scc);
            this.sccCount++;
        }
    }
}

// Example usage
let graph = [[1], [2], [0], [2, 4], [3], [6], [5, 7], [6]];
let tarjan = new TarjanSCC(graph);
console.log(tarjan.findSCC());
