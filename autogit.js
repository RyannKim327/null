function bidirectionalSearch(graph, startNode, goalNode) {
  let startQueue = [startNode];
  let goalQueue = [goalNode];
  let startVisited = new Set();
  let goalVisited = new Set();
  
  startVisited.add(startNode);
  goalVisited.add(goalNode);
  
  while (startQueue.length > 0 && goalQueue.length > 0) {
    const startCurr = startQueue.shift();
    const goalCurr = goalQueue.shift();
    
    if (goalVisited.has(startCurr)) {
      // Path found
      // Return path from startNode to goalNode
      return getPath(startCurr, goalNode);
    }
    
    if (startVisited.has(goalCurr)) {
      // Path found
      // Return path from startNode to goalNode
      return getPath(startNode, goalCurr);
    }
    
    for (const neighbor of graph[startCurr]) {
      if (!startVisited.has(neighbor)) {
        startQueue.push(neighbor);
        startVisited.add(neighbor);
      }
    }
    
    for (const neighbor of graph[goalCurr]) {
      if (!goalVisited.has(neighbor)) {
        goalQueue.push(neighbor);
        goalVisited.add(neighbor);
      }
    }
  }
  
  return null; // No path found
}

function getPath(startNode, goalNode) {
  // Implement function to backtrack and return path from startNode to goalNode
}

// Example usage
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};

const startNode = 'A';
const goalNode = 'F';

const path = bidirectionalSearch(graph, startNode, goalNode);
console.log(path);
