class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function depthLimitedSearch(root, target, depthLimit) {
    let stack = [{node: root, depth: 0}];
    
    while (stack.length > 0) {
        let { node, depth } = stack.pop();
        
        if (depth > depthLimit) {
            continue;
        }
        
        if (node.value === target) {
            return node;
        }
        
        for (let child of node.children) {
            stack.push({node: child, depth: depth + 1});
        }
    }
    
    return null;
}

// Example usage
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

root.children = [node2, node3];
node2.children = [node4];

let result = depthLimitedSearch(root, 4, 2);
if (result) {
    console.log("Node found with value:", result.value);
} else {
    console.log("Node not found within depth limit.");
}
