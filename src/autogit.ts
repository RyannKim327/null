class Graph {
    private adjList: Map<number, number[]>;

    constructor() {
        this.adjList = new Map();
    }

    addEdge(u: number, v: number): void {
        if (!this.adjList.has(u)) {
            this.adjList.set(u, []);
        }
        this.adjList.get(u)!.push(v);
    }

    topologicalSort(): number[] {
        const visited = new Set<number>();
        const stack: number[] = [];
        const result: number[] = [];

        const dfs = (node: number) => {
            visited.add(node);
            const neighbors = this.adjList.get(node) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
            stack.push(node);
        };

        // Perform DFS for each node
        for (const node of this.adjList.keys()) {
            if (!visited.has(node)) {
                dfs(node);
            }
        }

        // Reverse the stack to get the topological order
        while (stack.length > 0) {
            result.push(stack.pop()!);
        }

        return result;
    }
}

// Example usage:
const graph = new Graph();
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

const topologicalOrder = graph.topologicalSort();
console.log(topologicalOrder); // Output may vary based on the graph structure
