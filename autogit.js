function depthLimitedSearch(node, goal, depthLimit) {
  if (node === goal) {
    // Goal found
    return true;
  }

  if (depthLimit === 0) {
    // Reached depth limit without finding the goal
    return false;
  }

  // Recursively explore child nodes
  for (let child of node.getChildren()) {
    if (depthLimitedSearch(child, goal, depthLimit - 1)) {
      // Goal found in child node
      return true;
    }
  }

  // Goal not found
  return false;
}
const rootNode = /* your starting node */;
const goalNode = /* your goal node */;
const depthLimit = /* your desired depth limit */;

const found = depthLimitedSearch(rootNode, goalNode, depthLimit);

if (found) {
  console.log('Goal found!');
} else {
  console.log('Goal not found within the depth limit.');
}
