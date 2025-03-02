class Graph {
    private adjacencyList: Map<number, number[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: number, vertex2: number) {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1); // Assuming undirected graph
    }

    dfs(start: number) {
        const visited = new Set<number>();
        this._dfsHelper(start, visited);
    }

    private _dfsHelper(vertex: number, visited: Set<number>) {
        if (visited.has(vertex)) return;

        visited.add(vertex);
        console.log(vertex); // Process the vertex

        for (const neighbor of this.adjacencyList.get(vertex) || []) {
            this._dfsHelper(neighbor, visited);
        }
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log("Depth-First Search starting from vertex 1:");
graph.dfs(1);
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

class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    dfs(node: TreeNode | null) {
        if (node === null) return;

        console.log(node.value); // Process the node
        this.dfs(node.left);
        this.dfs(node.right);
    }
}

// Example usage:
const tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log("Depth-First Search of the binary tree:");
tree.dfs(tree.root);
