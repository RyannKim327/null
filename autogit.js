function biDirectionalSearch(graph, start, target) {
  let forwardVisited = new Set();
  let backwardVisited = new Set();

  let forwardQueue = [];
  let backwardQueue = [];

  forwardQueue.push(start);
  backwardQueue.push(target);

  forwardVisited.add(start);
  backwardVisited.add(target);

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    let forwardNode = forwardQueue.shift();
    let backwardNode = backwardQueue.shift();

    if (backwardVisited.has(forwardNode)) {
      return "Path found"; // or return the path between start and target
    }

    for (let neighbor of graph[forwardNode]) {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push(neighbor);
        forwardVisited.add(neighbor);
      }
    }

    for (let neighbor of graph[backwardNode]) {
      if (!backwardVisited.has(neighbor)) {
        backwardQueue.push(neighbor);
        backwardVisited.add(neighbor);
      }
    }
  }

  return "No path found";
}

// Example usage
let graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: []
};

console.log(biDirectionalSearch(graph, "A", "F"));
