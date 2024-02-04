function bidirectionalSearch(graph, start, goal) {
  // Initialize frontier and visited sets for forward and backward searches
  let forwardFrontier = [start];
  let backwardFrontier = [goal];
  const forwardVisited = new Set([start]);
  const backwardVisited = new Set([goal]);
  const forwardParent = {};
  const backwardParent = {};
  
  while (forwardFrontier.length && backwardFrontier.length) {
    // Perform one step of the forward search
    const currentForward = forwardFrontier.shift();
    const neighborsForward = graph[currentForward];
    for (let neighbor of neighborsForward) {
      if (!forwardVisited.has(neighbor)) {
        forwardVisited.add(neighbor);
        forwardParent[neighbor] = currentForward;
        forwardFrontier.push(neighbor);

        if (backwardVisited.has(neighbor)) {
          // Path found
          return reconstructPath(neighbor, forwardParent, backwardParent);
        }
      }
    }

    // Perform one step of the backward search
    const currentBackward = backwardFrontier.shift();
    const neighborsBackward = graph[currentBackward];
    for (let neighbor of neighborsBackward) {
      if (!backwardVisited.has(neighbor)) {
        backwardVisited.add(neighbor);
        backwardParent[neighbor] = currentBackward;
        backwardFrontier.push(neighbor);

        if (forwardVisited.has(neighbor)) {
          // Path found
          return reconstructPath(neighbor, forwardParent, backwardParent);
        }
      }
    }
  }

  // No path found
  return null;
}

function reconstructPath(node, forwardParent, backwardParent) {
  const path = [node];
  let current = node;

  while (forwardParent[current]) {
    current = forwardParent[current];
    path.unshift(current);
  }

  current = node;

  while (backwardParent[current]) {
    current = backwardParent[current];
    path.push(current);
  }

  return path;
}

// Example usage
const adjacencyList = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E'],
  D: ['B', 'F'],
  E: ['C', 'F'],
  F: ['D', 'E', 'G'],
  G: ['F']
};

const path = bidirectionalSearch(adjacencyList, 'A', 'G');
console.log(path); // Output: ["A", "C", "E", "F", "G"]
