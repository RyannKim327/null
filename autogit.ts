class Node {
    constructor(public value: number, public children: Node[] = []) {}
}

function depthLimitedSearch(node: Node, target: number, limit: number): boolean {
    if (limit < 0) {
        return false; // Limit reached, return false
    }

    if (node.value === target) {
        return true; // Target found
    }

    // Iterate through the children of the current node
    for (let child of node.children) {
        // Recursive call to the children with a decreased limit
        if (depthLimitedSearch(child, target, limit - 1)) {
            return true; // Target found in child
        }
    }

    return false; // Target not found in this branch
}

// Example Usage:
const root = new Node(1, [
    new Node(2, [new Node(5), new Node(6)]),
    new Node(3),
    new Node(4, [new Node(7)])
]);

const target = 5;
const limit = 2;

const found = depthLimitedSearch(root, target, limit);
console.log(`Target ${target} found within limit: ${found}`);
