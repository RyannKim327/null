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

function depthLimitedSearch(node: Node, target: string, depth: number): boolean {
    if (depth === 0 && node.value === target) return true;
    if (depth > 0) {
        for (const child of node.children) {
            if (depthLimitedSearch(child, target, depth - 1)) {
                return true;
            }
        }
    }
    return false;
}

function breadthLimitedSearch(root: Node, target: string, maxDepth: number): boolean {
    for (let depth = 0; depth <= maxDepth; depth++) {
        if (depthLimitedSearch(root, target, depth)) {
            return true;  // Target found within the depth limit
        }
    }
    return false;  // Target not found within the given depth
}

// Example usage:
const root = new Node("A");
const childB = new Node("B");
const childC = new Node("C");
const childD = new Node("D");

root.addChild(childB);
root.addChild(childC);
childB.addChild(childD);

const result = breadthLimitedSearch(root, "D", 2);
console.log(`Target found: ${result}`); // Output: Target found: true
