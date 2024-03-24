class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function biDirectionalSearch(startNode, endNode) {
    let startQueue = [startNode];
    let endQueue = [endNode];
    let startVisited = new Set();
    let endVisited = new Set();
    
    startVisited.add(startNode);
    endVisited.add(endNode);
    
    while (startQueue.length > 0 && endQueue.length > 0) {
        let startCurr = startQueue.shift();
        let endCurr = endQueue.shift();
        
        if (endVisited.has(startCurr) || startVisited.has(endCurr)) {
            return true;
        }
        
        for (let child of startCurr.children) {
            if (!startVisited.has(child)) {
                startQueue.push(child);
                startVisited.add(child);
            }
        }
        
        for (let child of endCurr.children) {
            if (!endVisited.has(child)) {
                endQueue.push(child);
                endVisited.add(child);
            }
        }
    }
    
    return false;
}

// Example usage
let startNode = new Node(1);
let endNode = new Node(9);

startNode.children = [new Node(2), new Node(3)];
startNode.children[0].children = [new Node(4), new Node(5)];
startNode.children[1].children = [new Node(6), new Node(7)];

endNode.children = [new Node(8), new Node(3)];
endNode.children[0].children = [new Node(5), new Node(1)];
endNode.children[1].children = [new Node(7), new Node(9)];

console.log(biDirectionalSearch(startNode, endNode)); // Output: true
