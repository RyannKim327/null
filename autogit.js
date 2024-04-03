function Node(value) {
    this.value = value;
    this.children = [];
}

function breadthLimitedSearch(root, targetValue, limit) {
    if (!root) {
        return null;
    }

    let queue = [root];
    let depth = 0;

    while (queue.length > 0) {
        if (depth === limit) {
            return null;
        }

        let currentNode = queue.shift();

        if (currentNode.value === targetValue) {
            return currentNode;
        }

        for (let i = 0; i < currentNode.children.length; i++) {
            queue.push(currentNode.children[i]);
        }

        depth++;
    }

    return null;
}

// Example usage:
let rootNode = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

rootNode.children.push(node2, node3);
node2.children.push(node4);
node3.children.push(node5);

console.log(breadthLimitedSearch(rootNode, 5, 2)); // Outputs the node with value 5
console.log(breadthLimitedSearch(rootNode, 6, 2)); // Outputs null
