function breadthLimitedSearch(root, target, limit) {
  const queue = [];
  const visited = new Set();

  queue.push({ node: root, level: 0 });

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    if (node === target) {
      return node; // Or perform any desired action when target is found
    }

    if (level < limit) {
      for (const child of node.children) {
        if (!visited.has(child)) {
          queue.push({ node: child, level: level + 1 });
          visited.add(child);
        }
      }
    }
  }

  return null; // Or any suitable value to indicate target not found within limit
}
