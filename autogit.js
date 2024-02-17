function biDirectionalSearch(startNode, endNode) {
    let visitedFromStart = new Set();
    let visitedFromEnd = new Set();
    let queueFromStart = [startNode];
    let queueFromEnd = [endNode];

    visitedFromStart.add(startNode);
    visitedFromEnd.add(endNode);

    while (queueFromStart.length > 0 && queueFromEnd.length > 0) {
        const currentNodeFromStart = queueFromStart.shift();
        const currentNodeFromEnd = queueFromEnd.shift();

        // Check if the nodes meet in the middle
        if (visitedFromStart.has(currentNodeFromEnd) || visitedFromEnd.has(currentNodeFromStart)) {
            console.log("Path found!");
            return true;
        }

        // Expand next nodes from start node
        for (let neighbor of currentNodeFromStart.neighbors) {
            if (!visitedFromStart.has(neighbor)) {
                visitedFromStart.add(neighbor);
                queueFromStart.push(neighbor);
            }
        }

        // Expand next nodes from end node
        for (let neighbor of currentNodeFromEnd.neighbors) {
            if (!visitedFromEnd.has(neighbor)) {
                visitedFromEnd.add(neighbor);
                queueFromEnd.push(neighbor);
            }
        }
    }

    console.log("No path found");
    return false;
}

// Example usage
class Node {
    constructor(value, neighbors) {
        this.value = value;
        this.neighbors = neighbors;
    }
}

const node1 = new Node(1, []);
const node2 = new Node(2, [node1]);
const node3 = new Node(3, [node1]);
const node4 = new Node(4, [node2]);
const node5 = new Node(5, [node2, node3]);
const node6 = new Node(6, [node4, node5]);
const node7 = new Node(7, [node5]);

biDirectionalSearch(node1, node7);
