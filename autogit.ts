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

const dfsTree = (node: TreeNode | null): void => {
    if (node === null) {
        return;
    }

    console.log(node.value); // Pre-order: process the node
    dfsTree(node.left);      // Traverse left subtree
    dfsTree(node.right);     // Traverse right subtree
};

// Example Usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("DFS on Tree:");
dfsTree(root);
class Graph {
    adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number): void {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(v1: number, v2: number): void {
        this.adjacencyList.get(v1)?.push(v2);
        this.adjacencyList.get(v2)?.push(v1); // For undirected graph
    }

    dfs(vertex: number, visited: Set<number> = new Set()): void {
        if (visited.has(vertex)) {
            return;
        }

        visited.add(vertex);
        console.log(vertex); // Processing the vertex

        const neighbors = this.adjacencyList.get(vertex);
        if (neighbors) {
            for (const neighbor of neighbors) {
                this.dfs(neighbor, visited);
            }
        }
    }
}

// Example Usage
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log("DFS on Graph:");
graph.dfs(1); // Starting from vertex 1
