function depthLimitedSearch(node, goal, depthLimit) {
    return recursiveDLS(node, goal, depthLimit, 0);
}

function recursiveDLS(node, goal, depthLimit, depth) {
    if (depth > depthLimit) {
        return false; // return false if depth limit is reached
    }
    
    if (node === goal) {
        return true; // return true if the goal is found
    }
    
    // Recursively search children nodes
    if (depth < depthLimit) {
        for (let child of node.children) {
            if (recursiveDLS(child, goal, depthLimit, depth + 1)) {
                return true;
            }
        }
    }
    
    return false; // return false if goal not found at this depth
}

// Example usage
class Node {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

// Create a tree
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.children.push(node2, node3);
node2.children.push(node4);

// Perform depth-limited search
const goalNode = node4;
const depthLimit = 2;
console.log(depthLimitedSearch(node1, goalNode, depthLimit));
