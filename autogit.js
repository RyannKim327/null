function depthLimitedSearch(node, goal, depthLimit) {
    return recursiveDLS(node, goal, depthLimit, 0);
}

function recursiveDLS(node, goal, depthLimit, depth) {
    if (depth > depthLimit) {
        return null; // depth limit reached
    }

    if (node === goal) {
        return node; // goal found
    }

    if (depth === depthLimit) {
        return null; // depth limit reached at leaf node
    }

    for (let child of node.children) {
        let result = recursiveDLS(child, goal, depthLimit, depth + 1);
        if (result !== null) {
            return result;
        }
    }

    return null; // goal not found within depth limit
}
