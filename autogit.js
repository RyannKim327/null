function depthLimitedSearch(node, goal, depthLimit) {
  if (depthLimit === 0) {
    return null;  // If depth limit is reached, return null (or any other appropriate value)
  }

  if (node === goal) {
    return node;  // If the goal is found, return the node
  }

  for (let child of node.children) {
    let result = depthLimitedSearch(child, goal, depthLimit - 1);  // Recursive call with reduced depth limit

    if (result !== null) {
      return result;  // If a non-null result is found, propagate it back up the recursion
    }
  }

  return null;  // If goal is not found in this branch, return null
}
let rootNode = /* create the root node */;
let goalNode = /* create the goal node */;
let depthLimit = 5;
let result = depthLimitedSearch(rootNode, goalNode, depthLimit);

if (result === null) {
  console.log("Goal not found within the depth limit");
} else {
  console.log("Goal found");
  // do something with the result
}
