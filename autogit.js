function depthLimitedSearch(node, target, depth) {
    if (depth === 0) {
        return null;
    }
    
    if (node.value === target) {
        return node;
    }
    
    for (let child of node.children) {
        let result = depthLimitedSearch(child, target, depth - 1);
        if (result) {
            return result;
        }
    }
    
    return null;
}
