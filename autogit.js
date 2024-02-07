function bidirectionalSearch(graph, source, target) {
  let forwardFrontier = [source];
  let backwardFrontier = [target];

  let forwardExplored = {};
  let backwardExplored = {};

  forwardExplored[source] = null;
  backwardExplored[target] = null;

  while (forwardFrontier.length > 0 && backwardFrontier.length > 0) {
    const forwardNode = forwardFrontier.shift();
    const backwardNode = backwardFrontier.shift();

    forwardExplored[forwardNode] = null;
    backwardExplored[backwardNode] = null;

    if (backwardNode in forwardExplored) {
      return getPath(forwardNode, backwardNode, forwardExplored, backwardExplored);
    }

    const forwardNeighbors = graph[forwardNode] || [];
    const backwardNeighbors = graph[backwardNode] || [];

    for (const neighbor of forwardNeighbors) {
      if (!(neighbor in forwardExplored) && !forwardFrontier.includes(neighbor)) {
        forwardFrontier.push(neighbor);
        forwardExplored[neighbor] = forwardNode;
      }
    }

    for (const neighbor of backwardNeighbors) {
      if (!(neighbor in backwardExplored) && !backwardFrontier.includes(neighbor)) {
        backwardFrontier.push(neighbor);
        backwardExplored[neighbor] = backwardNode;
      }
    }
  }

  return null; // No path found
}

function getPath(start, end, forwardExplored, backwardExplored) {
  const path = [];
  let currentNode = start;

  while (currentNode !== null) {
    path.push(currentNode);
    currentNode = forwardExplored[currentNode];
  }

  path.reverse();

  currentNode = backwardExplored[end];

  while (currentNode !== null) {
    path.push(currentNode);
    currentNode = backwardExplored[currentNode];
  }

  return path;
}

// Example usage:
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["C", "G"],
  F: ["D"],
  G: ["E"],
};
const source = "A";
const target = "G";

const path = bidirectionalSearch(graph, source, target);

console.log("Path:", path);
