class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function depthLimitedSearch(node, target, depth) {
    if (node.value === target) {
        return node;
    }
    
    if (depth === 0) {
        return null;
    }
    
    for (let child of node.children) {
        let result = depthLimitedSearch(child, target, depth - 1);
        if (result) {
            return result;
        }
    }
    
    return null;
}

// Sample usage
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

root.children.push(node2, node3);
node2.children.push(node4);
node3.children.push(node5);

let targetValue = 5;
let maxDepth = 2;
let result = depthLimitedSearch(root, targetValue, maxDepth);

if (result) {
    console.log(`Target value ${targetValue} found at depth ${maxDepth}.`);
} else {
    console.log(`Target value ${targetValue} not found within depth ${maxDepth}.`);
}
