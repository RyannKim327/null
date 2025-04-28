class Node {
    value: string;  // or any type you might be working with
    children: Node[];

    constructor(value: string) {
        this.value = value;
        this.children = [];
    }

    addChild(child: Node) {
        this.children.push(child);
    }
}

class DepthLimitedSearch {
    search(root: Node, goal: string, limit: number): Node | null {
        const stack: { node: Node; depth: number }[] = [];
        stack.push({ node: root, depth: 0 });

        while (stack.length > 0) {
            const { node, depth } = stack.pop()!;

            // Check if the node is the goal
            if (node.value === goal) {
                return node;
            }

            // If the current depth is less than the limit, continue searching
            if (depth < limit) {
                // Add children to the stack with incremented depth
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push({ node: node.children[i], depth: depth + 1 });
                }
            }
        }

        return null; // Goal not found within the depth limit
    }
}

// Example usage:
const root = new Node("A");
const childB = new Node("B");
const childC = new Node("C");
const childD = new Node("D");
const childE = new Node("E");
const childF = new Node("F");

root.addChild(childB);
root.addChild(childC);
childB.addChild(childD);
childB.addChild(childE);
childC.addChild(childF);

const dls = new DepthLimitedSearch();
const result = dls.search(root, "F", 2); // Searching for "F" with a depth limit of 2

if (result) {
    console.log(`Found node: ${result.value}`);
} else {
    console.log("Goal not found within the depth limit.");
}
