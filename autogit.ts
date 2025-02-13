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

function depthLimitedSearch(root: Node, target: any, depthLimit: number): Node | null {
    // Stack for iterative DFS
    const stack: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];
    
    while (stack.length > 0) {
        const { node, depth } = stack.pop()!; // Get the last node added to the stack

        // Check if the current node is the target
        if (node.value === target) {
            return node;
        }

        // Only continue if the current depth is less than the depth limit
        if (depth < depthLimit) {
            // Push children to the stack with incremented depth
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }
    
    // If target was not found within the depth limit, return null
    return null;
}

// Example Usage
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);
const grandchild1 = new Node(5);
const grandchild2 = new Node(6);

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandchild1);
child2.addChild(grandchild2);
child2.addChild(child3);

const target = 5;
const depthLimit = 2;
const result = depthLimitedSearch(root, target, depthLimit);

if (result) {
    console.log(`Found node with value: ${result.value}`);
} else {
    console.log('Target not found within depth limit.');
}
