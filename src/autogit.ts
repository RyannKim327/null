class Node {
    value: number;
    children: Node[];

    constructor(value: number) {
        this.value = value;
        this.children = [];
    }

    addChild(child: Node) {
        this.children.push(child);
    }
}

function breadthLimitedSearch(root: Node, target: number, limit: number): Node | null {
    if (limit < 0) {
        return null; // Limit reached, return null
    }

    const queue: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];
    
    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // Get the first node in the queue

        // Check if the current node is the target
        if (node.value === target) {
            return node; // Target found
        }

        // If we haven't reached the limit, add children to the queue
        if (depth < limit) {
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return null; // Target not found within the limit
}

// Example usage
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);
const child4 = new Node(5);

root.addChild(child1);
root.addChild(child2);
child1.addChild(child3);
child1.addChild(child4);

const targetNode = breadthLimitedSearch(root, 4, 2);
if (targetNode) {
    console.log(`Found node with value: ${targetNode.value}`);
} else {
    console.log("Node not found within the limit.");
}
