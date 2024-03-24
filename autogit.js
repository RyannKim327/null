class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    
    addChild(node) {
        this.children.push(node);
    }
}

function breadthFirstSearch(root) {
    let queue = [root];
    let visited = new Set();
    
    while (queue.length > 0) {
        let current = queue.shift();
        
        if (!visited.has(current)) {
            console.log(current.value);
            visited.add(current);
            
            current.children.forEach(child => {
                if (!visited.has(child)) {
                    queue.push(child);
                }
            });
        }
    }
}

// Example usage
let rootNode = new Node(1);
let childNode1 = new Node(2);
let childNode2 = new Node(3);
let childNode3 = new Node(4);

rootNode.addChild(childNode1);
rootNode.addChild(childNode2);
childNode1.addChild(childNode3);

breadthFirstSearch(rootNode);
