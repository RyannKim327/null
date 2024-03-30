function biDirectionalSearch(startNode, goalNode) {
    // Define the forward and backward search queues
    let forwardQueue = [startNode];
    let backwardQueue = [goalNode];

    // Keep track of visited nodes from both directions
    let forwardVisited = new Set();
    let backwardVisited = new Set();

    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        // Perform forward search
        let currentNodeForward = forwardQueue.shift();
        forwardVisited.add(currentNodeForward);

        // Perform backward search
        let currentNodeBackward = backwardQueue.shift();
        backwardVisited.add(currentNodeBackward);

        // Check if the two searches meet
        if (forwardVisited.has(currentNodeBackward)) {
            // Path found, combine the paths from both directions
            let path1 = getPath(currentNodeForward, startNode);
            let path2 = getPath(currentNodeBackward, goalNode).reverse();
            return path1.concat(path2);
        }

        // Expand neighbors for forward search
        let neighborsForward = getNeighbors(currentNodeForward);
        for (let neighbor of neighborsForward) {
            if (!forwardVisited.has(neighbor)) {
                forwardQueue.push(neighbor);
                forwardVisited.add(neighbor);
            }
        }

        // Expand neighbors for backward search
        let neighborsBackward = getNeighbors(currentNodeBackward);
        for (let neighbor of neighborsBackward) {
            if (!backwardVisited.has(neighbor)) {
                backwardQueue.push(neighbor);
                backwardVisited.add(neighbor);
            }
        }
    }

    // No path found
    return null;
}

// Helper function to get the path from start to current node
function getPath(currentNode, startNode) {
    let path = [];
    while (currentNode != startNode) {
        path.unshift(currentNode);
        currentNode = currentNode.parent;
    }
    path.unshift(startNode);
    return path;
}

// Helper function to get neighbors of a node (customize this to fit your graph)
function getNeighbors(node) {
    // Implement this function based on your graph structure
    return node.neighbors;
}

// Example usage
class Node {
    constructor(value, neighbors) {
        this.value = value;
        this.neighbors = neighbors;
    }
}

const node1 = new Node(1, []);
const node2 = new Node(2, []);
const node3 = new Node(3, []);
const node4 = new Node(4, []);
const node5 = new Node(5, []);

node1.neighbors = [node2];
node2.neighbors = [node3];
node3.neighbors = [node4, node5];
node4.neighbors = [node5];
node5.neighbors = [];

const path = biDirectionalSearch(node1, node5);
console.log(path);
