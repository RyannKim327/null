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

function depthLimitedSearch(root: Node, depthLimit: number, targetValue: string): Node | null {
    let stack: { node: Node, depth: number }[] = [{ node: root, depth: 0 }];
    
    while (stack.length > 0) {
        const { node, depth } = stack.pop()!;
        
        // Check if the current node is the target
        if (node.value === targetValue) {
            return node; // Found the target node
        }
        
        // If we haven't reached the depth limit, add children to the stack
        if (depth < depthLimit) {
            // Reverse the children for stack-like behavior (last child processed first)
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }
    
    return null; // Return null if the target node is not found
}

// Example usage
const root = new Node("root");
const child1 = new Node("child1");
const child2 = new Node("child2");
const grandchild1 = new Node("grandchild1");
const grandchild2 = new Node("grandchild2");

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandchild1);
child2.addChild(grandchild2);

const result = depthLimitedSearch(root, 2, "grandchild2");
if (result) {
    console.log(`Found: ${result.value}`);
} else {
    console.log("Not found");
}
