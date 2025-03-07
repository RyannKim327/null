// Define a Node interface to represent each node in the graph/tree
interface Node {
    value: any;
    children: Node[];
}

// Depth-Limited Search function
function depthLimitedSearch(node: Node, depthLimit: number, target: any): Node | null {
    // If the current node is null, return null
    if (node === null) {
        return null;
    }

    // If the target value is found, return the current node
    if (node.value === target) {
        return node;
    }

    // If the depth limit is reached, return null
    if (depthLimit <= 0) {
        return null;
    }

    // Explore each child node
    for (const child of node.children) {
        const result = depthLimitedSearch(child, depthLimit - 1, target);
        if (result !== null) {
            return result; // Return the found node
        }
    }

    // If the target is not found in this path, return null
    return null;
}

// Example usage
const rootNode: Node = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 4, children: [] },
                { value: 5, children: [] }
            ]
        },
        {
            value: 3,
            children: [
                { value: 6, children: [] },
                { value: 7, children: [] }
            ]
        }
    ]
};

const targetValue = 5;
const depthLimit = 2;
const result = depthLimitedSearch(rootNode, depthLimit, targetValue);

if (result) {
    console.log(`Found node with value: ${result.value}`);
} else {
    console.log('Target not found within depth limit.');
}
