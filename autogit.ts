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

function depthLimitedSearch(node: Node, depth: number, target: string): Node | null {
    if (depth === 0) {
        if (node.value === target) {
            return node;
        } else {
            return null;
        }
    } else if (depth > 0) {
        for (const child of node.children) {
            const result = depthLimitedSearch(child, depth - 1, target);
            if (result) {
                return result;
            }
        }
    }
    return null;
}

// Example usage:
const root = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

root.addChild(b);
root.addChild(c);
b.addChild(d);
c.addChild(e);

const target = 'E';
const depthLimit = 2;
const result = depthLimitedSearch(root, depthLimit, target);

if (result) {
    console.log(`Found target: ${result.value}`);
} else {
    console.log('Target not found within depth limit.');
}
