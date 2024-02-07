function createGraph() {
  // Your code to define the graph representation
}
function bidirectionalSearch(graph, source, target) {
  // Create queues for forward and backward search
  let forwardQueue = [source];
  let backwardQueue = [target];

  // Create visited sets for forward and backward search
  let forwardVisited = new Set();
  let backwardVisited = new Set();

  // Add source and target nodes to visited sets
  forwardVisited.add(source);
  backwardVisited.add(target);

  // Continue the search until both queues are empty
  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Perform forward search
    let forwardNode = forwardQueue.shift();
    let forwardNeighbors = graph(forwardNode);

    for (let neighbor of forwardNeighbors) {
      if (!forwardVisited.has(neighbor)) {
        forwardVisited.add(neighbor);
        forwardQueue.push(neighbor);

        // Check if the neighbor is visited by backward search
        if (backwardVisited.has(neighbor)) {
          // Path found!
          return true;
        }
      }
    }

    // Perform backward search
    let backwardNode = backwardQueue.shift();
    let backwardNeighbors = graph(backwardNode);

    for (let neighbor of backwardNeighbors) {
      if (!backwardVisited.has(neighbor)) {
        backwardVisited.add(neighbor);
        backwardQueue.push(neighbor);

        // Check if the neighbor is visited by forward search
        if (forwardVisited.has(neighbor)) {
          // Path found!
          return true;
        }
      }
    }
  }

  // No path found
  return false;
}
function createGraph() {
  // Define the graph representation
  let graph = {
    node1: ['node2', 'node3'],
    node2: ['node1', 'node4'],
    node3: ['node1'],
    node4: ['node2'],
  };

  // Return a function to get the neighbors of a node
  return function (node) {
    return graph[node] || [];
  };
}
let graph = createGraph();
let source = 'node1';
let target = 'node4';

let pathExists = bidirectionalSearch(graph, source, target);

console.log(pathExists);
