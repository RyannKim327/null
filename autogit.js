class TarjanSCC {
    constructor(graph) {
        this.graph = graph;
        this.index = 0;
        this.stack = [];
        this.lowestLink = [];
        this.visited = [];
        this.onStack = [];
        this.components = [];
    }

    findSCC() {
        for (let i = 0; i < this.graph.length; i++) {
            if (!this.visited[i]) {
                this.tarjan(i);
            }
        }
        return this.components;
    }

    tarjan(node) {
        this.lowestLink[node] = this.index;
        this.visited[node] = this.index;
        this.index++;
        this.stack.push(node);
        this.onStack[node] = true;

        for (let neighbor of this.graph[node]) {
            if (!this.visited[neighbor]) {
                this.tarjan(neighbor);
                this.lowestLink[node] = Math.min(this.lowestLink[node], this.lowestLink[neighbor]);
            } else if (this.onStack[neighbor]) {
                this.lowestLink[node] = Math.min(this.lowestLink[node], this.visited[neighbor]);
            }
        }

        if (this.lowestLink[node] === this.visited[node]) {
            let component = [];
            let nextNode = null;
            do {
                nextNode = this.stack.pop();
                this.onStack[nextNode] = false;
                component.push(nextNode);
            } while (nextNode !== node);
            this.components.push(component);
        }
    }
}

// Example usage
const graph = [
    [1],      // Node 0 points to Node 1
    [2],      // Node 1 points to Node 2
    [0, 3],   // Node 2 points to Node 0 and Node 3
    [4, 5],   // Node 3 points to Node 4 and Node 5
    [5],      // Node 4 points to Node 5
    [3]       // Node 5 points to Node 3
];

const tarjanSCC = new TarjanSCC(graph);
const stronglyConnectedComponents = tarjanSCC.findSCC();
console.log(stronglyConnectedComponents);
