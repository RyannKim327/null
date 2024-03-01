class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function depthFirstSearch(node) {
    const stack = [];
    const visited = [];

    stack.push(node);

    while (stack.length > 0) {
        const currentNode = stack.pop();
        visited.push(currentNode.value);

        if (currentNode.right) {
            stack.push(currentNode.right);
        }

        if (currentNode.left) {
            stack.push(currentNode.left);
        }
    }

    return visited;
}

// Creating a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(depthFirstSearch(root)); // Output: [1, 3, 7, 6, 2, 5, 4]
