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

function depthLimitedSearch(node: Node, depth: number, target: string): boolean {
    // Check if the current node is the target
    if (node.value === target) {
        return true;
    }

    // If the depth limit is reached, return false
    if (depth === 0) {
        return false;
    }

    // Recursively search in the children
    for (const child of node.children) {
        if (depthLimitedSearch(child, depth - 1, target)) {
            return true;
        }
    }

    // If the target is not found in this path, return false
    return false;
}

// Example usage:
const root = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

root.addChild(b);
root.addChild(c);
b.addChild(d);
b.addChild(e);

const target = "E";
const depthLimit = 2;

const found = depthLimitedSearch(root, depthLimit, target);
console.log(`Target ${target} found: ${found}`);
