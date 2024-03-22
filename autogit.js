// Node class representing a single node in the search tree
class Node {
    constructor(value, children) {
        this.value = value; // Node value
        this.children = children; // Array of child nodes
    }
}

// Perform a depth-limited search starting from the root node with a given depth limit
function depthLimitedSearch(root, depthLimit) {
    let stack = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        let { node, depth } = stack.pop();

        if (depth <= depthLimit) {
            // Process the node here
            console.log("Visiting node with value:", node.value);

            // Add children to stack for further exploration
            if (node.children) {
                for (let child of node.children) {
                    stack.push({ node: child, depth: depth + 1 });
                }
            }
        }
    }
}

// Example usage
// Create a sample tree
const rootNode = new Node(1, [
    new Node(2, [
        new Node(4, []),
        new Node(5, []),
    ]),
    new Node(3, [
        new Node(6, []),
    ]),
]);

// Perform depth-limited search with depth limit of 2
depthLimitedSearch(rootNode, 2);
