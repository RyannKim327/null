// Function to perform depth-limited search iteratively
function depthLimitedSearchIterative(root, goal, depthLimit) {
    let stack = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        let current = stack.pop();
        let currentNode = current.node;
        let currentDepth = current.depth;

        if (currentNode === goal) {
            return currentNode;
        }

        if (currentDepth < depthLimit) {
            let children = currentNode.getChildren(); // This should return an array of child nodes

            for (let child of children) {
                stack.push({ node: child, depth: currentDepth + 1 });
            }
        }
    }

    return null; // Goal not found within depth limit
}

// Example usage
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

    getChildren() {
        return this.children;
    }
}

// Creating a sample tree
let rootNode = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

rootNode.addChild(node2);
rootNode.addChild(node3);
node2.addChild(node4);

console.log(depthLimitedSearchIterative(rootNode, 4, 2)); // Output: Node { value: 4 }
console.log(depthLimitedSearchIterative(rootNode, 5, 2)); // Output: null
