class Graph {
    private vertices: number;
    private adj: number[][];
    private index: number;
    private stack: number[];
    private indices: number[];
    private lowLink: number[];
    private onStack: boolean[];
    private sccs: number[][];

    constructor(vertices: number) {
        this.vertices = vertices;
        this.adj = Array.from({ length: vertices }, () => []);
        this.index = 0;
        this.stack = [];
        this.indices = Array(vertices).fill(-1);
        this.lowLink = Array(vertices).fill(-1);
        this.onStack = Array(vertices).fill(false);
        this.sccs = [];
    }

    addEdge(from: number, to: number) {
        this.adj[from].push(to);
    }

    private strongConnect(v: number) {
        this.indices[v] = this.index;
        this.lowLink[v] = this.index;
        this.index++;
        this.stack.push(v);
        this.onStack[v] = true;

        for (const w of this.adj[v]) {
            if (this.indices[w] === -1) {
                this.strongConnect(w);
                this.lowLink[v] = Math.min(this.lowLink[v], this.lowLink[w]);
            } else if (this.onStack[w]) {
                this.lowLink[v] = Math.min(this.lowLink[v], this.indices[w]);
            }
        }

        if (this.lowLink[v] === this.indices[v]) {
            const component: number[] = [];
            let w: number;
            do {
                w = this.stack.pop()!;
                this.onStack[w] = false;
                component.push(w);
            } while (w !== v);
            this.sccs.push(component);
        }
    }

    findSCCs() {
        for (let i = 0; i < this.vertices; i++) {
            if (this.indices[i] === -1) {
                this.strongConnect(i);
            }
        }
        return this.sccs;
    }
}

// Example usage:
const g = new Graph(5);
g.addEdge(0, 2);
g.addEdge(2, 1);
g.addEdge(1, 0);
g.addEdge(0, 3);
g.addEdge(3, 4);

const sccs = g.findSCCs();
console.log('Strongly Connected Components:', sccs);
