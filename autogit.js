class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function depthLimitedSearch(root, goal, depthLimit) {
    let stack = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        let { node, depth } = stack.pop();

        if (node.value === goal) {
            return node;
        }

        if (depth < depthLimit) {
            for (let child of node.children) {
                stack.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return null;
}

// Usage example
// Create a sample tree
let rootNode = new Node(1);
let child1 = new Node(2);
let child2 = new Node(3);
let child3 = new Node(4);
rootNode.children = [child1, child2, child3];
let child4 = new Node(5);
let child5 = new Node(6);
child1.children = [child4, child5];

let result = depthLimitedSearch(rootNode, 5, 2);
if (result) {
    console.log("Goal node found: " + result.value);
} else {
    console.log("Goal node not found within the depth limit");
}
