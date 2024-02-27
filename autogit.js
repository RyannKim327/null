function Node(data) {
    this.data = data;
    this.children = [];
}

function breadthLimitedSearch(root, limit) {
    if (!root) {
        return null;
    }

    let queue = [[root, 0]];

    while (queue.length > 0) {
        let [node, depth] = queue.shift();

        if (depth <= limit) {
            console.log(node.data);

            for (let child of node.children) {
                queue.push([child, depth + 1]);
            }
        }
    }
}

// Example usage
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

root.children.push(node2, node3);
node2.children.push(node4);
node3.children.push(node5);

breadthLimitedSearch(root, 2);
