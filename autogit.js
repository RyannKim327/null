// Node class to represent each node in the search tree
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    
    addChild(childNode) {
        this.children.push(childNode);
    }
}

// Function to perform breadth-limited search
function breadthLimitedSearch(root, limit, target) {
    let queue = [root]; // Initialize a queue with the root node
    let depth = 0; // Initial depth is 0
    
    while (queue.length > 0 && depth <= limit) {
        let currentNode = queue.shift(); // Dequeue the front node
        console.log(currentNode.value); // Process the current node
        
        if (currentNode.value === target) {
            return currentNode; // Return the node if target found
        }
        
        if (depth < limit) {
            for (let child of currentNode.children) {
                queue.push(child); // Enqueue children of the current node
            }
        }
        
        if (queue[0] && queue[0].value === currentNode.value) {
            depth++; // Increase depth if the next node in the queue is at the same level
        }
    }
    
    return null; // Return null if target not found within the limit
}

// Example Usage
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

root.addChild(node2);
root.addChild(node3);
node2.addChild(node4);

let result = breadthLimitedSearch(root, 2, 4);
if (result) {
    console.log("Target found at node: ", result.value);
} else {
    console.log("Target not found within the depth limit.");
}
