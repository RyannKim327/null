// Define a Node interface
interface Node {
    value: string;
    children: Node[];
}

// Depth-Limited Search Function
function depthLimitedSearch(root: Node, goal: string, depthLimit: number): Node | null {
    // Stack for the nodes to visit, initialized with the root node and its depth
    const stack: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        // Pop the last node from the stack
        const { node, depth } = stack.pop()!; // Using non-null assertion since we know stack is not empty

        // Check if the current node is the goal
        if (node.value === goal) {
            return node; // Goal found
        }

        // If the current depth is less than the depth limit, push children onto the stack
        if (depth < depthLimit) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                const child = node.children[i];
                stack.push({ node: child, depth: depth + 1 }); // Increment depth for child nodes
            }
        }
    }
    
    return null; // Goal not found within depth limit
}

// Example Usage
const rootNode: Node = {
    value: "A",
    children: [
        { value: "B", children: [] },
        { value: "C", children: [
            { value: "D", children: [] },
            { value: "E", children: [] }
        ] }
    ]
};

// Searching for a node
const goalNode = depthLimitedSearch(rootNode, "D", 2);
if (goalNode) {
    console.log(`Found node with value: ${goalNode.value}`);
} else {
    console.log("Node not found within the depth limit.");
}
