function breadthLimitedSearch(rootNode, targetValue, limit) {
  // ...
}
function breadthLimitedSearch(rootNode, targetValue, limit) {
  const queue = [];
  // ...
}
function breadthLimitedSearch(rootNode, targetValue, limit) {
  const queue = [];
  queue.push(rootNode);
  // ...
}
function breadthLimitedSearch(rootNode, targetValue, limit) {
  const queue = [];
  queue.push(rootNode);

  while (queue.length > 0 && limit >= 0) {
    // ...
  }
}
function breadthLimitedSearch(rootNode, targetValue, limit) {
  const queue = [];
  queue.push(rootNode);

  while (queue.length > 0 && limit >= 0) {
    const currentNode = queue.shift();
    limit--;

    if (currentNode.value === targetValue) {
      return currentNode; // Or perform any action
    }

    queue.push(...currentNode.children); // Assuming children is an array of child nodes
  }

  return null; // If targetValue is not found
}
