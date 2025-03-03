class Graph {
    private adjacencyList: { [key: number]: number[] } = {};
    private visited: boolean[] = [];
    private stack: number[] = [];

    constructor(vertices: number) {
        for (let i = 0; i < vertices; i++) {
            this.adjacencyList[i] = [];
            this.visited[i] = false;
        }
    }

    public addEdge(v: number, w: number): void {
        this.adjacencyList[v].push(w);
    }

    private dfs(v: number): void {
        this.visited[v] = true;

        for (const neighbor of this.adjacencyList[v]) {
            if (!this.visited[neighbor]) {
                this.dfs(neighbor);
            }
        }
        
        this.stack.push(v);
    }

    public topologicalSort(): number[] {
        for (let i = 0; i < this.visited.length; i++) {
            if (!this.visited[i]) {
                this.dfs(i);
            }
        }

        return this.stack.reverse(); // Return in reverse order since we added them to the stack after finishing
    }
}

// Example usage
const graph = new Graph(6);
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

const order = graph.topologicalSort();
console.log("Topological Sort Order:", order);
class GraphKahn {
    private adjacencyList: { [key: number]: number[] } = {};
    private indegree: number[] = [];

    constructor(vertices: number) {
        for (let i = 0; i < vertices; i++) {
            this.adjacencyList[i] = [];
            this.indegree[i] = 0;
        }
    }

    public addEdge(v: number, w: number): void {
        this.adjacencyList[v].push(w);
        this.indegree[w]++;
    }

    public topologicalSort(): number[] {
        const queue: number[] = [];
        const result: number[] = [];
        
        // Enqueue all vertices with indegree of 0
        for (let i = 0; i < this.indegree.length; i++) {
            if (this.indegree[i] === 0) {
                queue.push(i);
            }
        }

        while (queue.length > 0) {
            const vertex = queue.shift()!;
            result.push(vertex);

            // Decrease the indegree of each neighboring vertex
            for (const neighbor of this.adjacencyList[vertex]) {
                this.indegree[neighbor]--;
                if (this.indegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // Check if we got a valid topological sort
        if (result.length !== this.indegree.length) {
            throw new Error("Graph has at least one cycle, topological sort not possible.");
        }

        return result;
    }
}

// Example usage
const graphKahn = new GraphKahn(6);
graphKahn.addEdge(5, 2);
graphKahn.addEdge(5, 0);
graphKahn.addEdge(4, 0);
graphKahn.addEdge(4, 1);
graphKahn.addEdge(2, 3);
graphKahn.addEdge(3, 1);

const orderKahn = graphKahn.topologicalSort();
console.log("Topological Sort Order (Kahn's):", orderKahn);
