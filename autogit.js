// Depth-Limited Search Algorithm
function depthLimitedSearch(node, goal, depthLimit) {
    return depthLimitedSearchRecursive(node, goal, depthLimit, 0);
}

function depthLimitedSearchRecursive(node, goal, depthLimit, currentDepth) {
    if (currentDepth > depthLimit) {
        return null;
    }

    if (node === goal) {
        return node;
    }

    if (!node.children) {
        return null;
    }

    for (let child of node.children) {
        let result = depthLimitedSearchRecursive(child, goal, depthLimit, currentDepth + 1);
        if (result) {
            return result;
        }
    }

    return null;
}

// Example Usage
let nodeA = { value: 'A', children: [] };
let nodeB = { value: 'B', children: [] };
let nodeC = { value: 'C', children: [] };
let nodeD = { value: 'D', children: [] };
let nodeE = { value: 'E', children: [nodeB, nodeC] };
let nodeF = { value: 'F', children: [nodeD, nodeE] };

nodeA.children = [nodeF];

let goalNode = depthLimitedSearch(nodeA, nodeD, 3);

console.log(goalNode); // Output: { value: 'D', children: [] }
