function breadthLimitedSearch(root, maxDepth) {
  let queue = [root];
  let depth = 0;

  while (queue.length > 0 && depth <= maxDepth) {
    const current = queue.shift();

    // Perform your desired operations on the current node
    console.log(current);

    // Enqueue the children (or neighbors) of the current node
    for (const child of current.children) {
      queue.push(child);
    }

    // Increase the depth by 1
    if (queue[0].depth > current.depth) {
      depth++;
    }
  }
}
