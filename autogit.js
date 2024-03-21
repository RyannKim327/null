function breadthLimitedSearch(graph, start, goal, limit) {
  let queue = [[start]];
  
  for (let i = 0; i < queue.length; i++) {
    if (queue[i].length > limit) {
      return "Goal node not found within the limit";
    }
    
    let currentNode = queue[i][queue[i].length - 1];
    
    if (currentNode === goal) {
      return queue[i];
    }
    
    let neighbors = graph[currentNode];
    
    for (let j = 0; j < neighbors.length; j++) {
      if (!queue[i].includes(neighbors[j])) {
        queue.push([...queue[i], neighbors[j]]);
      }
    }
  }
  
  return "Goal node not found within the limit";
}

// Example graph represented as an adjacency list
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
const limit = 4;

const path = breadthLimitedSearch(graph, startNode, goalNode, limit);
console.log(path);
