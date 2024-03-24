function depthLimitedSearch(node, goal, depthLimit) {
    return recursiveDLS(node, goal, depthLimit);
}

function recursiveDLS(node, goal, depthLimit) {
    if (node.state === goal) {
        return node;
    } else if (depthLimit == 0) {
        return "cutoff";
    } else {
        let cutoffOccurred = false;

        for (let child of node.children) {
            const result = recursiveDLS(child, goal, depthLimit - 1);
            if (result === "cutoff") {
                cutoffOccurred = true;
            } else if (result !== "failure") {
                return result;
            }
        }

        return cutoffOccurred ? "cutoff" : "failure";
    }
}

// Example usage
class Node {
    constructor(state, children) {
        this.state = state;
        this.children = children || [];
    }
}

// Define a tree structure
const nodeF = new Node("F");
const nodeE = new Node("E", [nodeF]);
const nodeD = new Node("D");
const nodeC = new Node("C", [nodeE]);
const nodeB = new Node("B", [nodeD]);
const nodeA = new Node("A", [nodeB, nodeC]);

const result = depthLimitedSearch(nodeA, "F", 2);
console.log(result);
