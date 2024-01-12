function breadthLimitedSearch(startNode, depthLimit) {
  const queue = [];
  let depth = 0;

  queue.push({ node: startNode, depth: depth });

  while (queue.length > 0) {
    const { node, depth } = queue.shift();

    if (depth > depthLimit) {
      // Ignore nodes beyond the depth limit
      continue;
    }

    // Perform your desired action or check for the search criteria here
    console.log(node);

    // Enqueue unvisited children
    if (depth < depthLimit) {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        queue.push({ node: child, depth: depth + 1 });
      }
    }
  }
}
breadthLimitedSearch(startNode, 3);
