type Node = {
    value: string;
    children: Node[];
};

function depthLimitedSearch(root: Node, goal: string, depthLimit: number): Node | null {
    const stack: { node: Node; depth: number }[] = [];
    stack.push({ node: root, depth: 0 });

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!;

        // Check if the current node is the goal
        if (node.value === goal) {
            return node; // Goal found
        }

        // If the current depth is less than the depth limit, explore children
        if (depth < depthLimit) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }

    return null; // Goal not found within depth limit
}

// Example usage
const rootNode: Node = {
    value: 'A',
    children: [
        {
            value: 'B',
            children: [
                { value: 'D', children: [] },
                { value: 'E', children: [] }
            ]
        },
        {
            value: 'C',
            children: [
                { value: 'F', children: [] },
                { value: 'G', children: [] }
            ]
        }
    ]
};

const goalNodeValue = 'E';
const depthLimit = 2;

const result = depthLimitedSearch(rootNode, goalNodeValue, depthLimit);
if (result) {
    console.log(`Goal node found: ${result.value}`);
} else {
    console.log('Goal node not found within depth limit.');
}
