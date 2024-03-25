function depthLimitedSearch(node, goal, depthLimit) {
    return depthLimitedSearchHelper(node, goal, depthLimit, 0);
}

function depthLimitedSearchHelper(node, goal, depthLimit, depth) {
    if (node.state === goal) {
        return node; // Goal state found
    }

    if (depth === depthLimit) {
        return "cutoff"; // Reached depth limit, stop searching this path
    }

    for (let child of node.children) {
        let result = depthLimitedSearchHelper(child, goal, depthLimit, depth + 1);
        
        if (result === "cutoff") {
            return "cutoff"; // Propagate cutoff
        } else if (result !== null) {
            return result; // Goal found by child
        }
    }

    return null; // Goal not found in this subtree
}
