function breadthLimitedSearch(root, goal, limit) {
    let queue = [{ node: root, depth: 0 }];
    
    while (queue.length > 0) {
        let current = queue.shift();
        let currentNode = current.node;
        let currentDepth = current.depth;
        
        if (currentNode === goal) {
            return currentNode;
        }
        
        if (currentDepth < limit) {
            for (let child of currentNode.children) {
                queue.push({ node: child, depth: currentDepth + 1 });
            }
        }
    }
    
    return null;
}

// Example usage
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

let nodeA = new Node('A');
let nodeB = new Node('B');
let nodeC = new Node('C');
let nodeD = new Node('D');
let nodeE = new Node('E');
let nodeF = new Node('F');
let nodeG = new Node('G');

nodeA.children = [nodeB, nodeC];
nodeB.children = [nodeD, nodeE];
nodeC.children = [nodeF, nodeG];

let result = breadthLimitedSearch(nodeA, 'G', 2);
console.log(result.value);  // Output: G
