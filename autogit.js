function Dijkstra(graph, startNode, targetNode) {
  const distance = {};
  const previous = {};
  const priorityQueue = new PriorityQueue();

  // Step 2: initialize
  for (let node in graph) {
    distance[node] = Infinity;
    previous[node] = null;
  }
  distance[startNode] = 0;

  for (let node in graph) {
    priorityQueue.enqueue(node, distance[node]);
  }

  // Step 3: run the algorithm
  while (!priorityQueue.isEmpty()) {
    const currentNode = priorityQueue.dequeue().element;

    if (currentNode === targetNode) {
      break; // Found shortest path, exit the loop
    }

    if (!graph[currentNode]) {
      continue;
    }

    for (let neighbor of graph[currentNode]) {
      const adjacentNode = neighbor.node;
      const weight = neighbor.weight;
      const currentDistance = distance[currentNode];
      const newDistance = currentDistance + weight;

      if (newDistance < distance[adjacentNode]) {
        distance[adjacentNode] = newDistance;
        previous[adjacentNode] = currentNode;
        priorityQueue.enqueue(adjacentNode, newDistance);
      }
    }
  }

  // Step 4: backtrack the shortest path
  const shortestPath = [];
  let currentNode = targetNode;

  while (currentNode !== null) {
    shortestPath.unshift(currentNode);
    currentNode = previous[currentNode];
  }

  return {
    distance: distance[targetNode],
    path: shortestPath,
  };
}

// Example usage:
const graph = {
  A: [{ node: 'B', weight: 4 }, { node: 'C', weight: 2 }],
  B: [{ node: 'A', weight: 4 }, { node: 'E', weight: 3 }],
  C: [{ node: 'A', weight: 2 }, { node: 'D', weight: 2 }],
  D: [{ node: 'C', weight: 2 }, { node: 'E', weight: 3 }],
  E: [{ node: 'B', weight: 3 }, { node: 'D', weight: 3 }],
};

const result = Dijkstra(graph, 'A', 'E');
console.log(result.distance); // Output: 7
console.log(result.path); // Output: ["A", "C", "D", "E"]
