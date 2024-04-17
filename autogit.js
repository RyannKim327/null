class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

function depthLimitedSearch(node, goal, depth) {
    if (node.value === goal) {
        return node;
    }

    if (depth === 0) {
        return null;
    }

    for (let i = 0; i < node.children.length; i++) {
        let result = depthLimitedSearch(node.children[i], goal, depth - 1);
        if (result !== null) {
            return result;
        }
    }

    return null;
}

// Example usage
let root = new Node(1);
let child1 = new Node(2);
let child2 = new Node(3);
let child3 = new Node(4);
let grandchild1 = new Node(5);
let grandchild2 = new Node(6);

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandchild1);
child2.addChild(child3);
child3.addChild(grandchild2);

let goalNode = depthLimitedSearch(root, 6, 3);

if (goalNode !== null) {
    console.log("Goal node found: " + goalNode.value);
} else {
    console.log("Goal node not found within depth limit.");
}
