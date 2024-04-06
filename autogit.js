function depthLimitedSearch(root, depthLimit) {
    let stack = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        let { node, depth } = stack.pop();

        if (depth > depthLimit) {
            continue;
        }

        // Perform your search logic on the current node here

        if (node.isGoalState()) {
            console.log("Goal node found!");
            return node;
        }

        node.getSuccessorNodes().forEach(successor => {
            stack.push({ node: successor, depth: depth + 1 });
        });
    }

    console.log(`Goal node not found within depth limit of ${depthLimit}`);
    return null;
}

// Usage example
// depthLimitedSearch(rootNode, 5); // Perform depth-limited search with depth limit of 5
