function Node(value) {
    this.value = value;
    this.children = [];
}

function breadthLimitedSearch(root, targetValue, limit) {
    let queue = [root];
    
    while (queue.length > 0 && limit > 0) {
        let node = queue.shift();
        
        if (node.value === targetValue) {
            return node;
        }
        
        limit--;

        for (let i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
    
    return null;
}

// Example usage
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

root.children.push(node2, node3);
node2.children.push(node4, node5);

let targetValue = 4;
let limit = 3;

let resultNode = breadthLimitedSearch(root, targetValue, limit);

if (resultNode) {
    console.log(`Node with value ${targetValue} found within the limit.`);
} else {
    console.log(`Node with value ${targetValue} not found within the limit.`);
}
