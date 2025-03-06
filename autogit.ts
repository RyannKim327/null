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
    if (limit < 0) {
        return false; // Limit reached, stop searching
    }

    if (node.value === target) {
        return true; // Target found
    }

    for (const child of node.children) {
        if (depthLimitedSearch(child, target, limit - 1)) {
            return true; // Target found in child
        }
    }

    return false; // Target not found in this path
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
const limit = 2;

const found = depthLimitedSearch(root, target, limit);
console.log(`Target ${target} found: ${found}`);
