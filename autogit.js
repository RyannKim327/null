function depthLimitedSearch(node, goal, depthLimit) {
    if (depthLimit === 0) {
        return null;  // Return null if depth limit reached
    }
    
    if (node.value === goal) {
        return node;  // Return the node if it matches the goal
    }
    
    for (let child of node.children) {
        let result = depthLimitedSearch(child, goal, depthLimit - 1);
        if (result !== null) {
            return result;  // Return the result if found in child nodes
        }
    }
    
    return null;  // Return null if goal not found within depth limit
}
