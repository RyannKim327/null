class Node {
    value: string;
    children: Node[];

    constructor(value: string) {
        this.value = value;
        this.children = [];
    }

    addChild(child: Node) {
        this.children.push(child);
    }
}

function depthLimitedSearch(node: Node, target: string, limit: number): boolean {
    // If the current node's value is the target, return true
    if (node.value === target) {
        return true;
    }

    // If the limit has been reached, return false
    if (limit <= 0) {
        return false;
    }

    // Recursively search in child nodes with the decreased limit
    for (const child of node.children) {
        if (depthLimitedSearch(child, target, limit - 1)) {
            return true;
        }
    }

    // If the target was not found, return false
    return false;
}

// Example usage:
const root = new Node("A");
const child1 = new Node("B");
const child2 = new Node("C");
const grandchild1 = new Node("D");
const grandchild2 = new Node("E");

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandchild1);
child1.addChild(grandchild2);

const target = "E";
const limit = 2; // Search up to 2 levels deep
const found = depthLimitedSearch(root, target, limit);

console.log(`Target ${target} found: ${found}`);
