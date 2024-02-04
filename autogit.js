function breadthLimitedSearch(startNode, goalNode, depthLimit) {
  let queue = [startNode];
  let visited = new Set();

  while (queue.length > 0) {
    let currentNode = queue.shift();

    if (currentNode === goalNode) {
      return currentNode; // Goal node found!
    }

    if (currentNode.depth < depthLimit) {
      currentNode.children.forEach(child => {
        if (!visited.has(child)) {
          queue.push(child);
          visited.add(child);
        }
      });
    }
  }

  return null; // Goal node not found within depth limit
}

// Usage example:
const startNode = { value: 'A', depth: 0, children: [] };
const goalNode = { value: 'G' };
const depthLimit = 3;

const result = breadthLimitedSearch(startNode, goalNode, depthLimit);
console.log(result); // null or the goal node if found
