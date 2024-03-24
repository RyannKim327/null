class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

function depthLimitedSearch(node, target, depthLimit, currentDepth = 0) {
    if (currentDepth > depthLimit) {
        return false; // return false if the current depth exceeds the limit
    }

    if (node.value === target) {
        return true; // return true if the target value is found
    }

    if (node.children.length === 0) {
        return false; // return false if there are no children to explore
    }

    for (let child of node.children) {
        if (depthLimitedSearch(child, target, depthLimit, currentDepth + 1)) {
            return true; // return true if the target value is found in any child node
        }
    }

    return false; // return false if the target value is not found at this level or in any of the child nodes
}

// Example usage
const rootNode = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

rootNode.addChild(node2);
rootNode.addChild(node3);
node2.addChild(node4);
node2.addChild(node5);

const target = 5;
const depthLimit = 2;

const result = depthLimitedSearch(rootNode, target, depthLimit);

if (result) {
    console.log(`Target ${target} found within depth limit of ${depthLimit}.`);
} else {
    console.log(`Target ${target} not found within depth limit of ${depthLimit}.`);
}
