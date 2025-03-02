type Graph = {
    [key: string]: string[];
};

function depthFirstSearch(graph: Graph, start: string): string[] {
    const visited: Set<string> = new Set();
    const result: string[] = [];

    function dfs(node: string) {
        if (!node || visited.has(node)) {
            return;
        }
        visited.add(node);
        result.push(node);

        for (const neighbor of graph[node]) {
            dfs(neighbor);
        }
    }

    dfs(start);
    return result;
}

// Example usage:

const graph: Graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: [],
    e: []
};

console.log(depthFirstSearch(graph, 'a')); // Output: ['a', 'b', 'd', 'c', 'e']
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
function depthFirstSearchTree(node: TreeNode | null, result: number[] = []): number[] {
    if (node === null) {
        return result;
    }

    // Pre-order: process the node value first.
    result.push(node.value);
    depthFirstSearchTree(node.left, result);
    depthFirstSearchTree(node.right, result);
    
    return result;
}

// Example usage:

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(depthFirstSearchTree(root)); // Output: [1, 2, 4, 5, 3]
