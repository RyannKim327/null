function biDirectionalSearch(graph, source, target) {
  // Initialize forward and reverse queues
  const forwardQueue = [source];
  const reverseQueue = [target];

  // Initialize forward and reverse visited sets
  const forwardVisited = new Set([source]);
  const reverseVisited = new Set([target]);

  while (forwardQueue.length && reverseQueue.length) {
    // Forward Search
    const forwardNode = forwardQueue.shift();
    const forwardNeighbors = graph[forwardNode];

    for (let neighbor of forwardNeighbors) {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push(neighbor);
        forwardVisited.add(neighbor);

        // Check if a common node is found
        if (reverseVisited.has(neighbor)) {
          return true; // Path found
        }
      }
    }

    // Reverse Search
    const reverseNode = reverseQueue.shift();
    const reverseNeighbors = graph[reverseNode];

    for (let neighbor of reverseNeighbors) {
      if (!reverseVisited.has(neighbor)) {
        reverseQueue.push(neighbor);
        reverseVisited.add(neighbor);

        // Check if a common node is found
        if (forwardVisited.has(neighbor)) {
          return true; // Path found
        }
      }
    }
  }

  return false; // Path not found
}

// Usage example
const graph = {
  A: ["B", "E"],
  B: ["A", "C", "F"],
  C: ["B", "D"],
  D: ["C"],
  E: ["A", "F"],
  F: ["B", "E"],
};

console.log(biDirectionalSearch(graph, "A", "D")); // Output: true
console.log(biDirectionalSearch(graph, "A", "F")); // Output: false
