function astar(start, goal, graph, heuristic) {
  let openSet = [start];
  let cameFrom = {};
  let gScore = {};
  let fScore = {};

  gScore[start] = 0;
  fScore[start] = heuristic(start, goal);

  while (openSet.length > 0) {
    openSet.sort((node1, node2) => fScore[node1] - fScore[node2]);
    let current = openSet.shift();

    if (current === goal) {
      return reconstructPath(cameFrom, current);
    }

    for (let neighbor of graph[current]) {
      let tentativeGScore = gScore[current] + 1;

      if (tentativeGScore < (gScore[neighbor] || Infinity)) {
        cameFrom[neighbor] = current;
        gScore[neighbor] = tentativeGScore;
        fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal);

        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }
  }

  return null;
}

function reconstructPath(cameFrom, current) {
  let totalPath = [current];

  while (cameFrom[current]) {
    current = cameFrom[current];
    totalPath.unshift(current);
  }

  return totalPath;
}

// Example usage
let graph = {
  A: ['B', 'C'],
  B: ['C', 'D'],
  C: ['D'],
  D: ['E'],
  E: []
};

function heuristic(node, goal) {
  // Simple heuristic function (Euclidean distance)
  let dx = Math.abs(node[0] - goal[0]);
  let dy = Math.abs(node[1] - goal[1]);
  return Math.sqrt(dx * dx + dy * dy);
}

let start = 'A';
let goal = 'E';
let path = astar(start, goal, graph, heuristic);
console.log(path);
