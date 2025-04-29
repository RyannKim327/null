type Graph = { [key: string]: string[] };

const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
};
function dfsRecursive(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    if (visited.has(start)) return;

    console.log(start);  // Process the node
    visited.add(start);

    for (const neighbor of graph[start]) {
        dfsRecursive(graph, neighbor, visited);
    }
}

// Call the function
dfsRecursive(graph, 'A');
function dfsIterative(graph: Graph, start: string): void {
    const stack: string[] = [start];
    const visited = new Set<string>();

    while (stack.length > 0) {
        const node = stack.pop()!;
        
        if (visited.has(node)) {
            continue;
        }

        console.log(node);  // Process the node
        visited.add(node);
        
        // Push all unvisited neighbors to the stack
        for (const neighbor of graph[node]) {
            stack.push(neighbor);
        }
    }
}

// Call the function
dfsIterative(graph, 'A');
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

// Example Tree Creation
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
function dfsTree(node: TreeNode | null): void {
    if (node === null) return;

    console.log(node.value);  // Process the node

    dfsTree(node.left);  // Visit left subtree
    dfsTree(node.right); // Visit right subtree
}

// Call the function
dfsTree(root);
function dfsIterativeTree(root: TreeNode | null): void {
    if (root === null) return;

    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
        const node = stack.pop()!;

        console.log(node.value);  // Process the node

        // Push right child first so that left child is processed first
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
}

// Call the function
dfsIterativeTree(root);
