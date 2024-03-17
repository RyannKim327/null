function breadthLimitedSearch(startNode, goalNode, limit) {
  let queue = [startNode];

  while (queue.length > 0 && limit > 0) {
    let currentNode = queue.shift();

    if (currentNode === goalNode) {
      return currentNode;
    }

    if (limit > 1) {
      let childNodes = expandNode(currentNode); // Function to generate child nodes
      queue.push(...childNodes);
    }

    limit--;
  }

  return "Goal node not found within the limit";
}

// Function to generate child nodes (replace this with actual implementation)
function expandNode(node) {
  // Code to generate child nodes from the current node
  return [];
}

// Example usage
const startNode = 1;
const goalNode = 6;
const limit = 3;

const result = breadthLimitedSearch(startNode, goalNode, limit);
console.log(result);
