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

function depthLimitedSearch(node: Node, target: any, limit: number): boolean {
    // If the current node's value matches the target, return true
    if (node.value === target) {
        return true;
    }

    // If the limit is reached, return false
    if (limit <= 0) {
        return false;
    }

    // Explore each child of the node
    for (const child of node.children) {
        // Recursively call DLS on children with decreased limit
        if (depthLimitedSearch(child, target, limit - 1)) {
            return true;
        }
    }

    // If none of the children matched the target, return false
    return false;
}

// Example usage
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child1_1 = new Node(4);
const child1_2 = new Node(5);

root.addChild(child1);
root.addChild(child2);
child1.addChild(child1_1);
child1.addChild(child1_2);

// Set a depth limit
const limit = 2;
const target = 4;

const found = depthLimitedSearch(root, target, limit);
console.log(`Target ${target} found: ${found}`);
