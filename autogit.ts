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

function breadthLimitedSearch(root: Node, target: any, maxDepth: number): Node | null {
    if (maxDepth < 0) {
        return null; // Return null if maxDepth is negative
    }

    const queue: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];
    
    while (queue.length > 0) {
        const { node, depth } = queue.shift()!;
        
        // Check if we've reached the target node
        if (node.value === target) {
            return node; // found the target
        }

        // Only explore children if we haven't reached the max depth
        if (depth < maxDepth) {
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return null; // Target not found within the given depth
}

// Example Usage:
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);
const grandchild1 = new Node(5);
const grandchild2 = new Node(6);
const grandchild3 = new Node(7);

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandchild1);
child1.addChild(grandchild2);
child2.addChild(grandchild3);

const result = breadthLimitedSearch(root, 6, 2);
if (result) {
    console.log(`Found: ${result.value}`);
} else {
    console.log('Not found within the specified depth.');
}
