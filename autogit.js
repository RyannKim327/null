function Node(value) {
    this.value = value;
    this.children = [];
}

function breadthLimitedSearch(root, limit) {
    if (!root) {
        return null;
    }

    let queue = [];
    queue.push(root);

    let currentLevel = 1;
    let nextLevel = 0;
    let depth = 0;

    while (queue.length > 0) {
        let currentNode = queue.shift();
        currentLevel--;

        if (currentNode) {
            console.log(currentNode.value);

            if (depth === limit) {
                continue;
            }

            for (let i = 0; i < currentNode.children.length; i++) {
                queue.push(currentNode.children[i]);
                nextLevel++;
            }
        }

        if (currentLevel === 0) {
            currentLevel = nextLevel;
            nextLevel = 0;
            depth++;
        }
    }
}

// Example usage:
let root = new Node(1);
let child1 = new Node(2);
let child2 = new Node(3);
let child3 = new Node(4);
root.children.push(child1, child2);
child1.children.push(new Node(5));
child2.children.push(new Node(6), new Node(7));
child3.children.push(new Node(8), new Node(9), new Node(10));

breadthLimitedSearch(root, 2);
