class Node {
    value: string;
    children: Node[]; // assume it's a tree structure
    
    constructor(value: string) {
        this.value = value;
        this.children = [];
    }

    addChild(child: Node) {
        this.children.push(child);
    }
}

function depthLimitedSearch(startNode: Node, depthLimit: number, target: string): Node | null {
    const stack: { node: Node, depth: number }[] = [];
    stack.push({ node: startNode, depth: 0 });

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!; // non-null assertion, stack is not empty

        // Check if we found the target
        if (node.value === target) {
            return node;
        }

        // If current depth is less than the limit, explore children
        if (depth < depthLimit) {
            for (let i = node.children.length - 1; i >= 0; i--) { // reverse to maintain order
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }

    return null; // target not found
}

// Example usage:
const rootNode = new Node("A");
const childB = new Node("B");
const childC = new Node("C");
const childD = new Node("D");
const childE = new Node("E");

rootNode.addChild(childB);
rootNode.addChild(childC);
childB.addChild(childD);
childB.addChild(childE);

const result = depthLimitedSearch(rootNode, 2, "E");

if (result) {
    console.log(`Found: ${result.value}`);
} else {
    console.log("Target not found.");
}
