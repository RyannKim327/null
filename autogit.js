function Node(value, children = []) {
    this.value = value;
    this.children = children;
}

function breadthLimitedSearch(root, limit) {
    let queue = [root];
    let currentLevel = 0;

    while (queue.length > 0 && currentLevel < limit) {
        let currentNode = queue.shift();

        console.log(currentNode.value); // Process the current node

        if (currentNode.children) {
            for (let child of currentNode.children) {
                queue.push(child);
            }
        }

        currentLevel++;
    }
}

// Example usage
let root = new Node(1, [new Node(2, [new Node(4), new Node(5)]), new Node(3)]);
breadthLimitedSearch(root, 2);
