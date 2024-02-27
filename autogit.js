function depthLimitedSearch(node, goal, depthLimit) {
    if (node.state === goal) {
        return node;
    }

    if (depthLimit === 0) {
        return null;
    }

    if (!node.children) {
        return null;
    }

    for (let i = 0; i < node.children.length; i++) {
        const result = depthLimitedSearch(node.children[i], goal, depthLimit - 1);
        if (result) {
            return result;
        }
    }

    return null;
}

// Example usage
class Node {
    constructor(state, children) {
        this.state = state;
        this.children = children;
    }
}

const rootNode = new Node('A', [
    new Node('B', [
        new Node('D', []),
        new Node('E', []),
    ]),
    new Node('C', [
        new Node('F', []),
        new Node('G', []),
    ]),
]);

const goalNode = depthLimitedSearch(rootNode, 'G', 3);

if (goalNode) {
    console.log('Goal node found:', goalNode.state);
} else {
    console.log('Goal node not found within depth limit.');
}
