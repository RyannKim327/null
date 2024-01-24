function bidirectionalSearch(start, goal) {
  const visitedStart = new Set();
  const visitedGoal = new Set();
  const queueStart = [];
  const queueGoal = [];

  visitedStart.add(start);
  queueStart.push([start]);
  visitedGoal.add(goal);
  queueGoal.push([goal]);

  while (queueStart.length > 0 && queueGoal.length > 0) {
    const pathStart = queueStart.shift();
    const currentStart = pathStart[pathStart.length - 1];

    if (currentStart === goal) {
      return pathStart;
    }

    const neighborsStart = getNeighbors(currentStart);
    for (const neighbor of neighborsStart) {
      if (!visitedStart.has(neighbor)) {
        queueStart.push([...pathStart, neighbor]);
        visitedStart.add(neighbor);
      }
    }

    const pathGoal = queueGoal.shift();
    const currentGoal = pathGoal[pathGoal.length - 1];

    if (currentGoal === start) {
      return pathGoal.reverse();
    }

    const neighborsGoal = getNeighbors(currentGoal);
    for (const neighbor of neighborsGoal) {
      if (!visitedGoal.has(neighbor)) {
        queueGoal.push([...pathGoal, neighbor]);
        visitedGoal.add(neighbor);
      }
    }

    const intersect = [...visitedStart].find(node => visitedGoal.has(node));
    if (intersect) {
      const pathIntersection = [...pathStart, intersect, ...pathGoal.reverse()];
      return pathIntersection;
    }
  }

  return "No path found";
}

// Example usage
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E'],
};

function getNeighbors(node) {
  return graph[node] || [];
}

console.log(bidirectionalSearch('A', 'F'));
