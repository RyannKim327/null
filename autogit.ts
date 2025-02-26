type Node = {
    value: any;
    children: Node[];
};

function depthLimitedSearch(root: Node, goal: any, limit: number): Node | null {
    const stack: { node: Node, depth: number }[] = [];
    stack.push({ node: root, depth: 0 });

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!;

        // Check if the current node is the goal
        if (node.value === goal) {
            return node;
        }

        // If we haven't reached the limit, continue to explore
        if (depth < limit) {
            // Push children to the stack with incremented depth
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }

    // Return null if the goal was not found within the depth limit
    return null;
}

// Example usage
const root: Node = {
    value: 'A',
    children: [
        { value: 'B', children: [] },
        { value: 'C', children: [
            { value: 'D', children: [] },
            { value: 'E', children: [] }
        ] }
    ]
};

const result = depthLimitedSearch(root, 'E', 2);
if (result) {
    console.log(`Found: ${result.value}`);
} else {
    console.log('Goal not found within the depth limit.');
}
