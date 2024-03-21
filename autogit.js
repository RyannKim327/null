// Node class to represent each node in the graph
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

// Breadth first search function
function breadthFirstSearch(root, target) {
    const queue = [root];
    
    while (queue.length > 0) {
        let current = queue.shift();
        if (current.value === target) {
            return true;
        }
        
        for (let child of current.children) {
            queue.push(child);
        }
    }
    
    return false;
}

// Create a graph
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.addChild(b);
a.addChild(c);
b.addChild(d);
c.addChild(e);

// Search for node 'E' starting from node 'A'
console.log(breadthFirstSearch(a, 'E')); // Output: true
