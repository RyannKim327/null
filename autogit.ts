class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function bfsBinaryTree(root: TreeNode | null): number[] {
    const result: number[] = [];
    if (!root) return result;

    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return result;
}
class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(v1: number, v2: number) {
        this.adjacencyList.get(v1)?.push(v2);
        this.adjacencyList.get(v2)?.push(v1); // For undirected graph
    }

    bfs(startVertex: number): number[] {
        const result: number[] = [];
        const queue: number[] = [startVertex];
        const visited = new Set<number>([startVertex]);

        while (queue.length > 0) {
            const vertex = queue.shift()!;
            result.push(vertex);
            const neighbors = this.adjacencyList.get(vertex) || [];

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }
}

// Example usage
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

const bfsResult = graph.bfs(1);
console.log(bfsResult); // Output will be the BFS traversal starting from vertex 1
