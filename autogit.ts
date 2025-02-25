class Node {
    value: any;
    children: Node[];

    constructor(value: any) {
        this.value = value;
        this.children = [];
    }

    addChild(child: Node) {
        this.children.push(child);
    }
}

function depthLimitedSearch(node: Node, target: any, depthLimit: number): boolean {
    // Check if we have reached the depth limit
    if (depthLimit < 0) {
        return false;
    }

    // Check if the current node is the target
    if (node.value === target) {
        return true;
    }

    // Explore each child node
    for (const child of node.children) {
        if (depthLimitedSearch(child, target, depthLimit - 1)) {
            return true;
        }
    }

    return false;
}

// Example Usage
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const grandchild1 = new Node(4);
const grandchild2 = new Node(5);

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandchild1);
child1.addChild(grandchild2);

const targetValue = 5;
const depthLimit = 2;

const found = depthLimitedSearch(root, targetValue, depthLimit);
console.log(`Target ${targetValue} found: ${found}`);
