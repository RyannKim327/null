class Node {
    public value: string;
    public children: Node[];

    constructor(value: string) {
        this.value = value;
        this.children = [];
    }

    // Method to add children to the node
    addChild(child: Node) {
        this.children.push(child);
    }
}

function depthLimitedSearch(node: Node, target: string, depthLimit: number): boolean {
    // Check for depth limit
    if (depthLimit < 0) {
        return false; // Exceeded depth limit
    }

    // Check if the current node's value is the target
    if (node.value === target) {
        return true; // Found the target
    }

    // If not found, search in children
    for (let child of node.children) {
        if (depthLimitedSearch(child, target, depthLimit - 1)) {
            return true; // Target found in child
        }
    }

    return false; // Target not found in this path
}

// Example usage:
const root = new Node('A');
const child1 = new Node('B');
const child2 = new Node('C');
const grandchild1 = new Node('D');
const grandchild2 = new Node('E');

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandchild1);
child1.addChild(grandchild2);

const targetValue = 'E';
const depthLimit = 2;

const found = depthLimitedSearch(root, targetValue, depthLimit);
console.log(`Target "${targetValue}" found: ${found}`);
