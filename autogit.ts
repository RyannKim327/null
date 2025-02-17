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

function depthLimitedSearch(node: Node, depth: number, target: string): Node | null {
    // Check if the current node is the target
    if (node.value === target) {
        return node;
    }

    // If the depth limit is reached, return null
    if (depth === 0) {
        return null;
    }

    // Explore each child node
    for (const child of node.children) {
        const result = depthLimitedSearch(child, depth - 1, target);
        if (result) {
            return result; // Return the found node
        }
    }

    return null; // Target not found in this path
}

// Example usage
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
const result = depthLimitedSearch(root, depthLimit, target);

if (result) {
    console.log(`Found node: ${result.value}`);
} else {
    console.log("Node not found within the depth limit.");
}
