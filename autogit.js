function breadthLimitedSearch(root, depthLimit) {
  if (!root) return;
  
  const queue = [root];
  let currentDepth = 0;

  while (queue.length > 0) {
    const node = queue.shift();

    // Perform operations on the current node
    console.log(node.value);

    if (currentDepth < depthLimit) {
      if (node.children) {
        // Enqueue the node's children
        queue.push(...node.children);
      }
    }

    if (queue.length === 0) {
      // Reached the end of a level
      currentDepth++;
    }
  }
}
