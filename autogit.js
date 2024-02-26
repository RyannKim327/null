function depthLimitedSearchIterative(root, limit) {
    let stack = [{node: root, depth: 0}];
    
    while(stack.length > 0) {
        let current = stack.pop();
        let node = current.node;
        let depth = current.depth;
        
        if (node.value === target) {
            return node;
        }
        
        if (depth < limit) {
            let children = node.children;
            
            for (let i = 0; i < children.length; i++) {
                stack.push({node: children[i], depth: depth + 1});
            }
        }
    }
    
    return null;
}
