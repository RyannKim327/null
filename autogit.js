function depthLimitedSearch(root, goal, depthLimit) {
    if (root === goal) {
        return [root];
    }

    let stack = [{ node: root, depth: 0, path: [root] }];

    while (stack.length > 0) {
        let current = stack.pop();

        if (current.node === goal) {
            return current.path;
        }

        if (current.depth < depthLimit) {
            let children = getChildren(current.node);
            for (let child of children) {
                stack.push({ node: child, depth: current.depth + 1, path: current.path.concat(child) });
            }
        }
    }

    return "Goal not found within depth limit";
}

// Helper function to get children of a node (can be implemented based on your specific problem)
function getChildren(node) {
    // Implement this function based on your problem
    return [];
}

// Example usage
let root = /* Your root node */;
let goal = /* Your goal node */;
let depthLimit = 3;

let result = depthLimitedSearch(root, goal, depthLimit);
console.log(result);
