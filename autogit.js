function depthLimitedSearch(node, goal, depthLimit) {
  if (node === goal) {
    return [node]; // Return the goal node
  }

  if (depthLimit === 0) {
    return null; // Reached depth limit, return failure
  }

  for (let child of node.children) {
    const result = depthLimitedSearch(child, goal, depthLimit - 1);
    
    if (result !== null) {
      result.unshift(node); // Prepend the current node
      return result; // Return the path
    }
  }

  return null; // Return failure if no path found
}
// Example usage
const rootNode = /* define your root node */;
const goalNode = /* define your goal node */;
const depthLimit = 5; // Define the depth limit

const path = depthLimitedSearch(rootNode, goalNode, depthLimit);
if (path !== null) {
  console.log("Path found:", path);
} else {
  console.log("Path not found within depth limit.");
}
