function depthLimitedSearch(startNode, goalNode, depthLimit) {
  function recursiveDLS(node, goalNode, depth) {
    if (node === goalNode) {
      return true;
    }

    if (depth === depthLimit) {
      return false;
    }

    for (let child of node.children) {
      if (recursiveDLS(child, goalNode, depth + 1)) {
        return true;
      }
    }

    return false;
  }

  return recursiveDLS(startNode, goalNode, 0);
}

// Usage example:
const startNode = /* your start node */;
const goalNode = /* your goal node */;
const depthLimit = /* your depth limit */;

const result = depthLimitedSearch(startNode, goalNode, depthLimit);
console.log(result); // true if a solution is found, false otherwise
