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

        const dfs = (node: number) => {
            visited.add(node);
            const neighbors = this.adjList.get(node) || [];
            neighbors.forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            });
            stack.push(node); // Add node to stack after visiting all its neighbors
        };

        // Perform DFS from each vertex
        this.adjList.forEach((_, node) => {
            if (!visited.has(node)) {
                dfs(node);
            }
        });

        // Return the stack in reverse for topological order
        return stack.reverse();
    }
}

// Example usage
const g = new Graph();
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);

const sortedOrder = g.topologicalSort();
console.log('Topological Sort:', sortedOrder);
