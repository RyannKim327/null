class Node {
  constructor(position, cost, heuristic, parent) {
    this.position = position;
    this.cost = cost;
    this.heuristic = heuristic;
    this.parent = parent;
  }
}
function AStarSearch(start, goal, neighbors, heuristic) {
  // Create open and closed lists
  let open = [];
  let closed = new Set();

  // Add the start node to the open list
  open.push(new Node(start, 0, heuristic(start), null));

  while (open.length > 0) {
    // Get the node with the lowest cost in the open list
    open.sort((a, b) => a.cost + a.heuristic - b.cost - b.heuristic);
    let current = open.shift();

    // Check if we reached the goal
    if (current.position === goal) {
      return constructPath(current);
    }

    // Add the current node to the closed list
    closed.add(current.position);

    // Generate neighboring nodes
    let neighborsList = neighbors(current.position);

    // Process each neighbor
    for (let neighbor of neighborsList) {
      // Skip if neighbor is in the closed list
      if (closed.has(neighbor)) {
        continue;
      }

      // Calculate the cost to reach the neighbor from the current node
      let newCost = current.cost + 1;

      // Check if the neighbor is already in the open list
      let existingNode = open.find((node) => node.position === neighbor);

      // Add or update the neighbor in the open list
      if (!existingNode || newCost < existingNode.cost) {
        let heuristicValue = heuristic(neighbor);
        let newNode = new Node(
          neighbor,
          newCost,
          heuristicValue,
          current
        );

        if (!existingNode) {
          open.push(newNode);
        } else {
          existingNode.cost = newCost;
          existingNode.heuristic = heuristicValue;
          existingNode.parent = current;
        }
      }
    }
  }

  // No path found
  return null;
}
function constructPath(node) {
  let path = [];
  let current = node;

  while (current !== null) {
    path.push(current.position);
    current = current.parent;
  }

  // Reverse the path to get it from start to goal
  path.reverse();

  return path;
}
