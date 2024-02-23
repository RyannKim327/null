function breadthLimitedSearch(root, goal, limit) {
    let queue = [{ node: root, depth: 0 }];
    
    while (queue.length > 0) {
        let current = queue.shift(); // Dequeue
        let node = current.node;
        let depth = current.depth;

        if (node === goal) {
            return node;
        }
        
        if (depth < limit) {
            node.children.forEach(child => {
                queue.push({ node: child, depth: depth + 1 });
            });
        }
    }

    return null; // Goal not found within the limit
}

// Example usage
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

root.children.push(node2, node3);
node2.children.push(node4);
node3.children.push(node5);

let goal = node5;

let result = breadthLimitedSearch(root, goal, 2);

if (result) {
    console.log(`Goal ${goal.value} found within the limit.`);
} else {
    console.log(`Goal ${goal.value} not found within the limit.`);
}
