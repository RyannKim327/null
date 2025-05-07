type Node = {
    value: any;  // You can customize this based on your node structure
    children: Node[];  // List of child nodes
};

// Depth-limited search function
function depthLimitedSearch(root: Node, target: any, depthLimit: number): Node | null {
    const stack: { node: Node; depth: number }[] = [];
    stack.push({ node: root, depth: 0 });

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!;  // Use non-null assertion since we check length

        // Check if we found the target
        if (node.value === target) {
            return node; // Return the found node
        }

        // If we haven't reached the depth limit, explore children
        if (depth < depthLimit) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                const child = node.children[i];
                stack.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return null; // Target not found
}

// Example usage:
const root: Node = {
    value: 1,
    children: [
        { value: 2, children: [] },
        { value: 3, children: [
            { value: 4, children: [] },
            { value: 5, children: [] }
        ] }
    ]
};

const target = 4;
const depthLimit = 2;
const result = depthLimitedSearch(root, target, depthLimit);

if (result) {
    console.log(`Found node with value: ${result.value}`);
} else {
    console.log('Target not found within the depth limit.');
}
