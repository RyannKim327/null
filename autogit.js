function breadthLimitedSearch(graph, startNode, goalNode, limit) {
  let queue = [startNode];
  let visited = new Set();

  for (let level = 0; level <= limit; level++) {
    let levelNodes = queue.length;

    for (let i = 0; i < levelNodes; i++) {
      let node = queue.shift();

      if (node === goalNode) {
        return node;
      }

      if (!visited.has(node)) {
        visited.add(node);
        queue.push(...graph[node]);
      }
    }
  }

  return null; // Goal node not found within the limit
}
