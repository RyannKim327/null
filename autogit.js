// Graph representation (you can modify this to fit your specific problem)
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E', 'G'],
  'G': ['F']
};

function bidirectionalSearch(start, goal) {
  // Initialize frontiers
  const forwardFrontier = [start];
  const backwardFrontier = [goal];
  
  // Initialize visited sets
  const forwardVisited = new Set([start]);
  const backwardVisited = new Set([goal]);

  // Initialize parent maps
  const forwardParents = {};
  const backwardParents = {};
  
  while (forwardFrontier.length > 0 && backwardFrontier.length > 0) {
    // Expand from forward frontier
    const forwardNode = forwardFrontier.shift();
    
    // Check if forward node is in the backward frontier
    if (backwardVisited.has(forwardNode)) {
      const meetingPoint = forwardNode;
      return buildPath(forwardParents, backwardParents, meetingPoint);
    }
    
    for (const neighbor of graph[forwardNode]) {
      if (!forwardVisited.has(neighbor)) {
        forwardVisited.add(neighbor);
        forwardFrontier.push(neighbor);
        forwardParents[neighbor] = forwardNode;
      }
    }
    
    // Expand from backward frontier
    const backwardNode = backwardFrontier.shift();
    
    // Check if backward node is in the forward frontier
    if (forwardVisited.has(backwardNode)) {
      const meetingPoint = backwardNode;
      return buildPath(forwardParents, backwardParents, meetingPoint);
    }
    
    for (const neighbor of graph[backwardNode]) {
      if (!backwardVisited.has(neighbor)) {
        backwardVisited.add(neighbor);
        backwardFrontier.push(neighbor);
        backwardParents[neighbor] = backwardNode;
      }
    }
  }
  
  // No path found
  return null;
}

function buildPath(forwardParents, backwardParents, meetingPoint) {
  const path = [];
  
  let current = meetingPoint;
  while (current) {
    path.unshift(current);
    current = forwardParents[current];
  }
  
  current = backwardParents[meetingPoint];
  while (current) {
    path.push(current);
    current = backwardParents[current];
  }
  
  return path;
}

// Usage example
const startNode = 'A';
const goalNode = 'G';
const path = bidirectionalSearch(startNode, goalNode);
console.log('Path:', path);
