class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function depthLimitedSearch(node, goal, depth) {
    if (depth === 0) {
        return null; // If reached max depth, return null
    }

    if (node.value === goal) {
        return node; // If goal found, return the node
    }

    for (let child of node.children) {
        let result = depthLimitedSearch(child, goal, depth - 1);
        if (result !== null) {
            return result; // If goal found in child node, return the node
        }
    }

    return null; // Return null if goal not found within the given depth
}

// Example usage
// Create a tree
let rootNode = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

rootNode.children = [node2, node3];
node2.children = [node4];

// Perform depth-limited search starting from root node
let result = depthLimitedSearch(rootNode, 4, 3);
if (result !== null) {
    console.log("Goal found at node with value: " + result.value);
} else {
    console.log("Goal not found within the specified depth.");
}
