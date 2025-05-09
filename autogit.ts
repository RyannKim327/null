class Node {
    value: string;
    children: Node[];

    constructor(value: string) {
        this.value = value;
        this.children = [];
    }

    addChild(child: Node): void {
        this.children.push(child);
    }
}

function depthLimitedSearch(root: Node, target: string, limit: number): boolean {
    if (limit < 0) {
        return false; // Limit exceeded
    }

    const stack: { node: Node, depth: number }[] = [];
    stack.push({ node: root, depth: 0 });

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!; // Get the last element

        // Check if we've found the target
        if (node.value === target) {
            return true;
        }

        // If current depth is less than the limit, expand the node
        if (depth < limit) {
            // Push children onto the stack
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }

    return false; // Target not found within the depth limit
}

// Example usage:
const root = new Node("A");
const childB = new Node("B");
const childC = new Node("C");
const childD = new Node("D");
const childE = new Node("E");

root.addChild(childB);
root.addChild(childC);
childB.addChild(childD);
childC.addChild(childE);

const target = "D";
const depthLimit = 2;

const found = depthLimitedSearch(root, target, depthLimit);
console.log(`Target ${target} ${found ? 'found' : 'not found'} within depth limit ${depthLimit}.`);
