function depthLimitedSearch(node, goal, depth) {
    if (depth === 0) {
        return null;
    }
    
    if (node === goal) {
        return node;
    }
    
    for (let child of node.children) {
        let result = depthLimitedSearch(child, goal, depth - 1);
        if (result !== null) {
            return result;
        }
    }
    
    return null;
}

// Define your node class
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    
    addChild(child) {
        this.children.push(child);
    }
}

// Create a sample node tree
let nodeA = new Node('A');
let nodeB = new Node('B');
let nodeC = new Node('C');
let nodeD = new Node('D');
let nodeE = new Node('E');

nodeA.addChild(nodeB);
nodeA.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);

// Use the depthLimitedSearch function
let result = depthLimitedSearch(nodeA, 'E', 3);
console.log(result ? `Node found: ${result.value}` : 'Node not found');
