interface Node {
    value: any;
    children?: Node[];
}

function breadthLimitedSearch(root: Node, target: any, maxDepth: number): boolean {
    if (maxDepth < 0) return false; // Return false if maximum depth is exceeded

    let queue: { node: Node; depth: number }[] = [{ node: root, depth: 0 }]; // Initialize queue

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // Get the next node and its depth

        // Check if the current node's value is the target
        if (node.value === target) {
            return true;
        }

        // If we haven't reached the maximum depth, add children to the queue
        if (depth < maxDepth && node.children) {
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return false; // Target not found within depth limit
}

// Example usage
const tree: Node = {
    value: 1,
    children: [
        { value: 2, children: [{ value: 4 }, { value: 5 }] },
        { value: 3, children: [{ value: 6 }, { value: 7 }] }
    ]
};

console.log(breadthLimitedSearch(tree, 5, 2)); // true
console.log(breadthLimitedSearch(tree, 6, 1)); // false
