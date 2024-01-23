// Function to perform a BFS from a given source node
function bfs(graph, source) {
  const queue = [source];
  const visited = new Set([source]);
  const paths = new Map([[source, null]]);

  while (queue.length > 0) {
    const current = queue.shift();

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        paths.set(neighbor, current);
      }
    }
  }

  return paths;
}

// Function to implement bidirectional search
function bidirectionalSearch(graph, source, target) {
  const sourcePaths = bfs(graph, source);
  const targetPaths = bfs(graph, target);

  // Find the common visited node
  for (const node of sourcePaths.keys()) {
    if (targetPaths.has(node)) {
      const path = getPath(sourcePaths, targetPaths, node);
      return path;
    }
  }

  return null; // No path found
}

// Function to reconstruct the shortest path
function getPath(sourcePaths, targetPaths, commonNode) {
  let path = [];
  let node = commonNode;

  // Create path from source to common node
  while (node !== null) {
    path.unshift(node);
    node = sourcePaths.get(node);
  }

  node = targetPaths.get(commonNode);

  // Create path from common node to target
  while (node !== null) {
    path.push(node);
    node = targetPaths.get(node);
  }

  return path;
}

// Example usage
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E'],
  D: ['B', 'F'],
  E: ['C', 'G'],
  F: ['D'],
  G: ['E'],
};

const source = 'A';
const target = 'F';

const path = bidirectionalSearch(graph, source, target);
console.log(path); // Output: [ 'A', 'B', 'D', 'F' ]
