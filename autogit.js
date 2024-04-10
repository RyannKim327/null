function depthLimitedSearch(root, goal, depthLimit) {
    let stack = [{ node: root, depth: 0 }];
    
    while (stack.length > 0) {
        let current = stack.pop();
        let node = current.node;
        let depth = current.depth;
        
        if (node === goal) {
            return node;
        }
        
        if (depth < depthLimit) {
            let children = getChildren(node); // Function to get children of the current node
            for (let child of children) {
                stack.push({ node: child, depth: depth + 1 });
            }
        }
    }
    
    return null; // Goal not found within depth limit
}
