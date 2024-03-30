class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

function depthLimitedSearch(node, goal, depthLimit, currentDepth = 0) {
    if (node.value === goal) {
        return true;
    }

    if (currentDepth === depthLimit) {
        return false;
    }

    for (let child of node.children) {
        if (depthLimitedSearch(child, goal, depthLimit, currentDepth + 1)) {
            return true;
        }
    }

    return false;
}

// Example usage
const rootNode = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');

rootNode.addChild(nodeB);
rootNode.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);
nodeC.addChild(nodeF);

const goalNode = 'F';
const depthLimit = 2;

console.log(depthLimitedSearch(rootNode, goalNode, depthLimit)); // Output: true
