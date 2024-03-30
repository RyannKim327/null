function depthLimitedSearch(node, goal, depthLimit) {
    if (node.state === goal) {
        return node;
    }

    if (depthLimit <= 0) {
        return null;
    }

    for (let child of expand(node)) {
        let result = depthLimitedSearch(child, goal, depthLimit - 1);
        if (result !== null) {
            return result;
        }
    }

    return null;
}

// Example Node class and expand function for demonstration purposes
class Node {
    constructor(state) {
        this.state = state;
    }
}

function expand(node) {
    // Expand the node (generate child nodes)
    // This is where you would typically generate child nodes based on the current node
    return [];
}

// Example Usage
let rootNode = new Node('A');
let goalNode = new Node('G');
let result = depthLimitedSearch(rootNode, goalNode, 3);

if (result !== null) {
    console.log('Goal node found!');
} else {
    console.log('Goal node not found within depth limit.');
}
