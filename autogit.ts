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
function depthLimitedSearch(node: Node | null, limit: number, target: string): boolean {
    // Check for invalid node
    if (node === null) {
        return false;
    }

    // If the current node is the target value, return true
    if (node.value === target) {
        return true;
    }

    // If the depth limit is reached, return false
    if (limit <= 0) {
        return false;
    }

    // Recur for each child of the current node
    for (const child of node.children) {
        if (depthLimitedSearch(child, limit - 1, target)) {
            return true;  // Target found in one of the children
        }
    }

    return false;  // Target not found in the current path
}
// Example tree structure
const root = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");

root.addChild(nodeB);
root.addChild(nodeC);
nodeB.addChild(nodeD);
nodeC.addChild(nodeE);

// Perform a depth-limited search
const targetValue = "D";
const limit = 2; // Set depth limit

const found = depthLimitedSearch(root, limit, targetValue);
console.log(`Target ${targetValue} found within depth limit ${limit}: ${found}`);
