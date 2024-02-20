class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function bidirectionalSearch(startNode, endNode) {
    let visitedFromStart = new Set();
    let visitedFromEnd = new Set();
    let queueStart = [startNode];
    let queueEnd = [endNode];

    while (queueStart.length > 0 && queueEnd.length > 0) {
        let currentStart = queueStart.shift();
        let currentEnd = queueEnd.shift();

        if (visitedFromStart.has(currentStart.value) || visitedFromEnd.has(currentEnd.value)) {
            // If nodes meet at some point, return true
            return true;
        }

        visitedFromStart.add(currentStart.value);
        visitedFromEnd.add(currentEnd.value);

        for (let child of currentStart.children) {
            if (!visitedFromStart.has(child.value)) {
                queueStart.push(child);
            }
        }

        for (let child of currentEnd.children) {
            if (!visitedFromEnd.has(child.value)) {
                queueEnd.push(child);
            }
        }
    }

    // If nodes do not meet, return false
    return false;
}

// Usage example
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.children = [node2];
node2.children = [node3];

console.log(bidirectionalSearch(node1, node3)); // Output: true
