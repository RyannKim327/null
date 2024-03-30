function depthLimitedSearch(startNode, goalNode, depthLimit) {
    let stack = [{ node: startNode, depth: 0 }];
    
    while (stack.length > 0) {
        let { node, depth } = stack.pop();
        
        if (node === goalNode) {
            return node;
        }
        
        if (depth < depthLimit) {
            let children = expandNode(node);
            
            for (let child of children) {
                stack.push({ node: child, depth: depth + 1 });
            }
        }
    }
    
    return null;
}

// Helper function to expand a node (dummy implementation)
function expandNode(node) {
    return [node + 1, node + 2]; // Dummy implementation: Returns children nodes
}

// Example usage
const start = 0;
const goal = 10;
const depthLimit = 3;

const result = depthLimitedSearch(start, goal, depthLimit);

if (result !== null) {
    console.log(`Goal node ${goal} found within depth limit ${depthLimit}`);
} else {
    console.log(`Goal node ${goal} not found within depth limit ${depthLimit}`);
}
