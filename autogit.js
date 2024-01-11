function dijkstra(graph, startNode, endNode) {
  const distances = {};
  const visited = new Set();
  const queue = new PriorityQueue();

  // Step 2: Initialize distances
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;

  // Step 3: Enqueue start node
  queue.enqueue({ node: startNode, distance: 0 });

  while (!queue.isEmpty()) {
    const { node, distance } = queue.dequeue();

    if (node === endNode) {
      // Reached the destination, terminate the algorithm
      break;
    }

    if (visited.has(node)) {
      // Skip nodes that have already been visited
      continue;
    }

    visited.add(node);

    for (const [adjacentNode, weight] of graph[node]) {
      const newDistance = distances[node] + weight;

      if (newDistance < distances[adjacentNode]) {
        distances[adjacentNode] = newDistance;
        queue.enqueue({ node: adjacentNode, distance: newDistance });
      }
    }
  }

  // Step 6: Backtrack and construct the shortest path
  const shortestPath = [endNode];
  let currentNode = endNode;

  while (currentNode !== startNode) {
    for (const [adjacentNode, weight] of graph[currentNode]) {
      const distance = distances[currentNode] - weight;

      if (distance === distances[adjacentNode]) {
        shortestPath.unshift(adjacentNode);
        currentNode = adjacentNode;
        break;
      }
    }
  }

  return shortestPath;
}

// Helper class for priority queue
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
    this.sort();
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  sort() {
    this.queue.sort((a, b) => a.distance - b.distance);
  }
}
