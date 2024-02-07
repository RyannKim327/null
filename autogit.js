function aStarSearch(startNode, goalNode) {
  let openSet = new PriorityQueue();
  openSet.enqueue(startNode);

  let cameFrom = new Map();
  let gScore = new Map();
  let fScore = new Map();
  gScore.set(startNode, 0);
  fScore.set(startNode, heuristic(startNode, goalNode));

  while (!openSet.isEmpty()) {
    let currentNode = openSet.dequeue();

    if (currentNode === goalNode) {
      return reconstructPath(cameFrom, currentNode);
    }

    for (let neighbor of getNeighbors(currentNode)) {
      let tentativeGScore = gScore.get(currentNode) + 1;

      if (!gScore.has(neighbor) || tentativeGScore < gScore.get(neighbor)) {
        cameFrom.set(neighbor, currentNode);
        gScore.set(neighbor, tentativeGScore);
        fScore.set(
          neighbor,
          gScore.get(neighbor) + heuristic(neighbor, goalNode)
        );

        if (!openSet.includes(neighbor)) {
          openSet.enqueue(neighbor);
        }
      }
    }
  }

  return null; // No path found
}
