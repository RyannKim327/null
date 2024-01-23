function biDirectionalSearch(graph, source, target) {
  const forwardQueue = [source];
  const backwardQueue = [target];
  const forwardVisited = new Set();
  const backwardVisited = new Set();
  const forwardParent = {};
  const backwardParent = {};

  while (forwardQueue.length && backwardQueue.length) {
    const currentForward = forwardQueue.shift();
    const currentBackward = backwardQueue.shift();

    forwardVisited.add(currentForward);
    backwardVisited.add(currentBackward);

    for (const neighbor of graph[currentForward]) {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push(neighbor);
        forwardVisited.add(neighbor);
        forwardParent[neighbor] = currentForward;
      }

      if (backwardVisited.has(neighbor)) {
        return reconstructPath(forwardParent, backwardParent, neighbor);
      }
    }

    for (const neighbor of graph[currentBackward]) {
      if (!backwardVisited.has(neighbor)) {
        backwardQueue.push(neighbor);
        backwardVisited.add(neighbor);
        backwardParent[neighbor] = currentBackward;
      }

      if (forwardVisited.has(neighbor)) {
        return reconstructPath(forwardParent, backwardParent, neighbor);
      }
    }
  }

  return null; // No path found
}

function reconstructPath(forwardParent, backwardParent, meetingNode) {
  const path = [];
  let node = meetingNode;

  while (node) {
    path.push(node);
    node = forwardParent[node];
  }

  path.reverse();
  node = backwardParent[meetingNode];

  while (node) {
    path.push(node);
    node = backwardParent[node];
  }

  return path;
}

// Example usage:
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D", "E"],
  D: ["B", "C", "F"],
  E: ["C", "G"],
  F: ["D"],
  G: ["E"]
};

const source = "A";
const target = "G";

const path = biDirectionalSearch(graph, source, target);
console.log(path); // Output: ["A", "C", "E", "G"]
