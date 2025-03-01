type Node = {
    value: any;
    children: Node[];
};

function depthLimitedSearch(node: Node, target: any, limit: number): boolean {
    // Base case: check if the current node is the target
    if (node.value === target) {
        return true;
    }

    // If the limit has been reached, return false
    if (limit <= 0) {
        return false;
    }

    // Recursively search in the children
    for (let child of node.children) {
        if (depthLimitedSearch(child, target, limit - 1)) {
            return true;
        }
    }

    // Target not found within the depth limit
    return false;
}

// Example usage
const tree: Node = {
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

const target = 5;
const limit = 2;

// Executing the Depth-Limited Search
const found = depthLimitedSearch(tree, target, limit);
console.log(`Target ${target} ${found ? 'found' : 'not found'} within limit ${limit}.`);
