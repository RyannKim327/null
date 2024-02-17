class TarjanSCC {
    constructor(graph) {
        this.graph = graph;
        this.index = 0;
        this.stack = [];
        this.groups = [];
        this.lowLink = [];
        this.indexes = [];
        this.onStack = [];
        
        for (let i = 0; i < this.graph.length; i++) {
            this.groups[i] = [];
            this.lowLink[i] = -1;
            this.indexes[i] = -1;
            this.onStack[i] = false;
        }
    }

    findSCC() {
        for (let i = 0; i < this.graph.length; i++) {
            if (this.indexes[i] === -1) {
                this.strongConnect(i);
            }
        }

        return this.groups;
    }

    strongConnect(node) {
        this.indexes[node] = this.index;
        this.lowLink[node] = this.index;
        this.index++;
        this.stack.push(node);
        this.onStack[node] = true;

        for (let neighbor of this.graph[node]) {
            if (this.indexes[neighbor] === -1) {
                this.strongConnect(neighbor);
                this.lowLink[node] = Math.min(this.lowLink[node], this.lowLink[neighbor]);
            } else if (this.onStack[neighbor]) {
                this.lowLink[node] = Math.min(this.lowLink[node], this.indexes[neighbor]);
            }
        }

        if (this.lowLink[node] === this.indexes[node]) {
            let group = [];
            let member = null;
            do {
                member = this.stack.pop();
                this.onStack[member] = false;
                group.push(member);
            } while (member !== node);
            this.groups.push(group);
        }
    }
}

// Example usage
const graph = [[1], [2], [0], [3, 4], [0, 2]];
const tarjan = new TarjanSCC(graph);
const sccGroups = tarjan.findSCC();
console.log(sccGroups);
