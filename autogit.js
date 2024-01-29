function biDirectionalSearch(graph, source, target) {
  // Perform the forward search from the source
  const forwardVisited = new Set();
  const forwardQueue = [[source, [source]]];

  // Perform the backward search from the target
  const backwardVisited = new Set();
  const backwardQueue = [[target, [target]]];

  while (forwardQueue.length && backwardQueue.length) {
    const [forwardNode, forwardPath] = forwardQueue.shift();
    const [backwardNode, backwardPath] = backwardQueue.shift();

    // Check if nodes meet in the middle
    if (backwardVisited.has(forwardNode)) {
      return forwardPath.concat(backwardPath.reverse().slice(1));
    }

    // Forward Search
    forwardVisited.add(forwardNode);
    for (const neighbor of graph[forwardNode]) {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push([neighbor, forwardPath.concat([neighbor])]);
      }
    }

    // Backward Search
    backwardVisited.add(backwardNode);
    for (const neighbor of graph[backwardNode]) {
      if (!backwardVisited.has(neighbor)) {
        backwardQueue.push([neighbor, backwardPath.concat([neighbor])]);
      }
    }
  }

  // Path not found
  return null;
}

// Example usage
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["C"],
  F: ["D", "G"],
  G: ["F"],
};

const source = "A";
const target = "G";

const path = biDirectionalSearch(graph, source, target);
console.log("Path:", path);
