function breadthLimitedSearch(root, target, depthLimit) {
    let queue = [{ node: root, depth: 0 }];

    while (queue.length > 0) {
        let current = queue.shift();

        if (current.node.value === target) {
            return current.node;
        }

        if (current.depth < depthLimit) {
            current.node.children.forEach(child => {
                queue.push({ node: child, depth: current.depth + 1 });
            });
        }
    }

    return null;
}

// Example Usage
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

let root = new TreeNode(1);
let child1 = new TreeNode(2);
let child2 = new TreeNode(3);
let child3 = new TreeNode(4);
let subchild1 = new TreeNode(5);

root.children.push(child1, child2, child3);
child1.children.push(subchild1);

console.log(breadthLimitedSearch(root, 5, 2));  // Output: TreeNode { value: 5, children: [] }
