class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(name, neighbors) {
    this.nodes[name] = neighbors;
  }

  getNeighbors(node) {
    return this.nodes[node];
  }

  hasNode(node) {
    return node in this.nodes;
  }
}

function bidirectionalSearch(graph, source, target) {
  // Check if source and target nodes exist
  if (!graph.hasNode(source) || !graph.hasNode(target)) {
    return null;
  }

  // Initialize the forward and backward search queues
  const forwardQueue = [source];
  const backwardQueue = [target];

  // Keep track of visited nodes for forward and backward searches
  const forwardVisited = {};
  const backwardVisited = {};
  forwardVisited[source] = null;
  backwardVisited[target] = null;

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Perform forward search
    const forwardNode = forwardQueue.shift();
    const forwardNeighbors = graph.getNeighbors(forwardNode);

    for (let neighbor of forwardNeighbors) {
      if (!forwardVisited.hasOwnProperty(neighbor)) {
        forwardQueue.push(neighbor);
        forwardVisited[neighbor] = forwardNode;

        // Check if the node exists in the backward search
        if (backwardVisited.hasOwnProperty(neighbor)) {
          // Path found - merge paths
          const path = mergePaths(forwardVisited, backwardVisited, neighbor);
          return path;
        }
      }
    }

    // Perform backward search
    const backwardNode = backwardQueue.shift();
    const backwardNeighbors = graph.getNeighbors(backwardNode);

    for (let neighbor of backwardNeighbors) {
      if (!backwardVisited.hasOwnProperty(neighbor)) {
        backwardQueue.push(neighbor);
        backwardVisited[neighbor] = backwardNode;

        // Check if the node exists in the forward search
        if (forwardVisited.hasOwnProperty(neighbor)) {
          // Path found - merge paths
          const path = mergePaths(forwardVisited, backwardVisited, neighbor);
          return path;
        }
      }
    }
  }

  // No path found
  return null;
}

// Helper function to merge paths from forward and backward searches
function mergePaths(forwardVisited, backwardVisited, intersectionNode) {
  const forwardPath = getNodePath(forwardVisited, intersectionNode);
  const backwardPath = getNodePath(backwardVisited, intersectionNode).reverse();

  return forwardPath.concat(backwardPath);
}

// Helper function to retrieve the path from the visited nodes
function getNodePath(visited, node) {
  const path = [node];
  let curr = visited[node];

  while (curr !== null) {
    path.unshift(curr);
    curr = visited[curr];
  }

  return path;
}

// Example usage
const graph = new Graph();
graph.addNode("A", ["B", "C"]);
graph.addNode("B", ["A", "D"]);
graph.addNode("C", ["A", "E"]);
graph.addNode("D", ["B", "F"]);
graph.addNode("E", ["C", "G"]);
graph.addNode("F", ["D", "H"]);
graph.addNode("G", ["E", "H"]);
graph.addNode("H", ["F", "G"]);

const source = "A";
const target = "H";

const path = bidirectionalSearch(graph, source, target);
console.log("Path:", path);
