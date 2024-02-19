function depthLimitedSearchIterative(startNode, goalNode, depthLimit) {
    let stack = [{ node: startNode, depth: 0 }];

    while (stack.length > 0) {
        let current = stack.pop();
        let currentNode = current.node;
        let currentDepth = current.depth;

        if (currentNode === goalNode) {
            return currentNode;
        }

        if (currentDepth < depthLimit) {
            // Expand node (add child nodes to stack)
            let childNodes = expandNode(currentNode);
            for (let i = 0; i < childNodes.length; i++) {
                stack.push({ node: childNodes[i], depth: currentDepth + 1 });
            }
        }
    }

    return null; // Goal node not found within depth limit
}

// Function to expand a node (dummy function for illustration)
function expandNode(node) {
    // Dummy implementation, needs to be replaced with actual code to generate child nodes
    return [node + 'A', node + 'B', node + 'C'];
}

// Example usage
let result = depthLimitedSearchIterative('A', 'ABC', 3);
console.log(result);
