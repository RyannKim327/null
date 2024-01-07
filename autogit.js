class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
function breadthFirstSearch(startNode, graph) {
  // Create a visited array to keep track of visited nodes
  const visited = [];
  
  // Create a queue and enqueue the start node
  const queue = new Queue();
  queue.enqueue(startNode);
  
  // Mark the start node as visited
  visited[startNode] = true;
  
  // Iterate through the queue until it's empty
  while (!queue.isEmpty()) {
    // Dequeue a vertex/node from the queue
    const currentNode = queue.dequeue();
    
    // Process the current node
    console.log(currentNode);
    
    // Get all adjacent nodes of the current node
    const adjacentNodes = graph[currentNode];
    
    // Iterate through each adjacent node
    for (let i = 0; i < adjacentNodes.length; i++) {
      const adjacentNode = adjacentNodes[i];
      
      // If the adjacent node hasn't been visited, mark it as visited and enqueue it
      if (!visited[adjacentNode]) {
        visited[adjacentNode] = true;
        queue.enqueue(adjacentNode);
      }
    }
  }
}
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};
breadthFirstSearch('A', graph);
