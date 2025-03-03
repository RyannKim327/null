type Graph = {
    [key: string]: string[]; // Each node is a key, and its edges are the values (array of strings)
};

function depthFirstSearch(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    // Mark the current node as visited
    visited.add(start);
    console.log(start); // Process the current node (e.g., print it)

    // Recur for all the vertices adjacent to this vertex
    const neighbors = graph[start] || [];
    for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
            depthFirstSearch(graph, neighbor, visited);
        }
    }
}

// Example of usage:
const graph: Graph = {
    a: ['b', 'c'],
    b: ['d', 'e'],
    c: ['f'],
    d: [],
    e: [],
    f: []
};

depthFirstSearch(graph, 'a'); // Output: a, b, d, e, c, f
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

function depthFirstSearchTree(node: TreeNode | null): void {
    if (node === null) {
        return;
    }
    
    console.log(node.value); // Process the current node (e.g., print it)

    // Traverse the left subtree
    depthFirstSearchTree(node.left);
    
    // Traverse the right subtree
    depthFirstSearchTree(node.right);
}

// Example of using DFS on a binary tree:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

depthFirstSearchTree(root); // Output: 1, 2, 4, 5, 3
