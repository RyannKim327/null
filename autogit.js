class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function breadthFirstSearch(root) {
    if (!root) {
        return;
    }

    const queue = [root];
    const visited = new Set();

    while (queue.length > 0) {
        const currentNode = queue.shift();

        if (!visited.has(currentNode)) {
            console.log(currentNode.value);
            visited.add(currentNode);

            for (let child of currentNode.children) {
                queue.push(child);
            }
        }
    }
}

// Example usage
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');

nodeA.children = [nodeB, nodeC];
nodeB.children = [nodeD, nodeE];
nodeC.children = [nodeF];

breadthFirstSearch(nodeA);
