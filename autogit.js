function depthLimitedSearch(node, goal, depthLimit) {
  if (node === goal) {
    return true; // Goal found
  }

  if (depthLimit <= 0) {
    return false; // Reached depth limit
  }

  for (let child of node.children) {
    if (depthLimitedSearch(child, goal, depthLimit - 1)) {
      return true; // Goal found in child subtree
    }
  }

  return false; // Goal not found in current subtree
}
const rootNode = /* initialize your root node */;
const goalNode = /* initialize your goal node */;
const depthLimit = 5; // Set your desired depth limit

const isGoalFound = depthLimitedSearch(rootNode, goalNode, depthLimit);
console.log(`Goal found? ${isGoalFound}`);
