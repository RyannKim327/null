class Graph {
    private adjList: Map<number, number[]>; // Adjacency list representation

    constructor() {
        this.adjList = new Map();
    }

    addEdge(u: number, v: number) {
        if (!this.adjList.has(u)) {
            this.adjList.set(u, []);
        }
        this.adjList.get(u)!.push(v);
    }

    topologicalSortDFS(): number[] {
        const visited = new Set<number>();
        const stack: number[] = [];

        const dfs = (node: number) => {
            visited.add(node);
            const neighbors = this.adjList.get(node) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
            stack.push(node); // Push the current node on the stack at the end of recursion
        };

        for (const node of this.adjList.keys()) {
            if (!visited.has(node)) {
                dfs(node);
            }
        }

        return stack.reverse(); // Reverse the stack to get the topological order
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

const order = graph.topologicalSortDFS();
console.log('Topological Sort Order (DFS):', order);
class Graph {
    private adjList: Map<number, number[]>; // Adjacency list representation
    private inDegree: Map<number, number>; // In-degree of each vertex

    constructor() {
        this.adjList = new Map();
        this.inDegree = new Map();
    }

    addEdge(u: number, v: number) {
        if (!this.adjList.has(u)) {
            this.adjList.set(u, []);
        }
        this.adjList.get(u)!.push(v);
        this.inDegree.set(v, (this.inDegree.get(v) || 0) + 1);
        // Ensure that the nodes with no incoming edges are also in inDegree map
        if (!this.inDegree.has(u)) {
            this.inDegree.set(u, 0);
        }
    }

    topologicalSortKahn(): number[] {
        const queue: number[] = [];
        const result: number[] = [];

        // Find all vertices with in-degree 0
        for (const [node, degree] of this.inDegree.entries()) {
            if (degree === 0) {
                queue.push(node);
            }
        }

        while (queue.length > 0) {
            const current = queue.shift()!;
            result.push(current);

            const neighbors = this.adjList.get(current) || [];
            for (const neighbor of neighbors) {
                this.inDegree.set(neighbor, this.inDegree.get(neighbor)! - 1);
                if (this.inDegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // Check if there's a cycle (i.e., if result length is not equal to the number of nodes)
        if (result.length !== this.inDegree.size) {
            throw new Error("Graph has a cycle; topological sort not possible.");
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

const order = graph.topologicalSortKahn();
console.log('Topological Sort Order (Kahn):', order);
