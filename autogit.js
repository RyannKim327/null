function depthLimitedSearch(node, goal, depth) {
    if (depth === 0) {
        return null;
    }

    if (node === goal) {
        return node;
    }

    for (let childNode of node.children) {
        let result = depthLimitedSearch(childNode, goal, depth - 1);
        if (result) {
            return result;
        }
    }

    return null;
}

// Example usage:
class Node {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

// Create a tree
const rootNode = new Node('A', [
    new Node('B', [
        new Node('D'),
        new Node('E')
    ]),
    new Node('C', [
        new Node('F'),
        new Node('G')
    ])
]);

const goalNode = 'F';
const depth = 2;

const result = depthLimitedSearch(rootNode, goalNode, depth);

if (result) {
    console.log(`Goal node ${goalNode} found within depth limit ${depth}.`);
} else {
    console.log(`Goal node ${goalNode} not found within depth limit ${depth}.`);
}
