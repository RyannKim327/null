class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function breadthFirstSearch(root) {
    let queue = [root];
    let result = [];

    while (queue.length > 0) {
        let currentNode = queue.shift();
        result.push(currentNode.value);

        for (let child of currentNode.children) {
            queue.push(child);
        }
    }

    return result;
}

// Example usage:
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.children.push(node2, node3);
node2.children.push(node4, node5);

const rootNode = node1;

console.log(breadthFirstSearch(rootNode)); // Output: [1, 2, 3, 4, 5]
