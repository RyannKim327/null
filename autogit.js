function breadthLimitedSearch(root, target, limit) {
  const queue = [root];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.value === target) {
      return node; // or return whatever information you need
    }

    if (visited.has(node)) {
      continue;
    }

    visited.add(node);

    if (node.depth < limit) {
      queue.push(...node.children.filter(child => !visited.has(child)));
    }
  }

  return null;
}
