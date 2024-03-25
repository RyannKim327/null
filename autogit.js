function depthLimitedSearch(node, goal, depthLimit) {
    return dls(node, goal, depthLimit, 0);
}

function dls(node, goal, depthLimit, currentDepth) {
    if (currentDepth > depthLimit) {
        return false;
    }

    if (node === goal) {
        return true;
    }

    if (currentDepth == depthLimit) {
        return false;
    }

    for (let child of expand(node)) {
        if (dls(child, goal, depthLimit, currentDepth + 1)) {
            return true;
        }
    }

    return false;
}

function expand(node) {
    // Implement your own function to generate child nodes based on the current node
    // This is just a placeholder function
    return [];
}

// Example usage
const startNode = 0;
const goalNode = 10;
const depthLimit = 4;

const result = depthLimitedSearch(startNode, goalNode, depthLimit);
console.log(result);
