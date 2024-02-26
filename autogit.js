// Define a node structure with state and children
class Node {
    constructor(state, children) {
        this.state = state;
        this.children = children || [];
    }
}

// Depth-limited search function
function depthLimitedSearch(root, goal, limit) {
    let stack = [];
    stack.push({ node: root, depth: 0 });

    while (stack.length > 0) {
        let { node, depth } = stack.pop();

        if (node.state === goal) {
            return node;
        }

        if (depth < limit) {
            node.children.forEach(child => {
                stack.push({ node: child, depth: depth + 1 });
            });
        }
    }

    return null;
}

// Example usage
let node1 = new Node('A', [new Node('B', [new Node('D'), new Node('E')]), new Node('C', [new Node('F')])]);
let result = depthLimitedSearch(node1, 'F', 3);

console.log(result); // Output: Node { state: 'F', children: [] }
