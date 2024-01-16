class GraphNode {
  constructor(id) {
    this.id = id;
    this.adjacentNodes = [];
  }

  addAdjacentNode(node) {
    this.adjacentNodes.push(node);
  }
}

function biDirectionalSearch(startNode, endNode) {
  let startSet = new Set();
  let endSet = new Set();
  let visitedStart = {};
  let visitedEnd = {};

  startSet.add(startNode);
  visitedStart[startNode.id] = null;

  endSet.add(endNode);
  visitedEnd[endNode.id] = null;

  while (startSet.size > 0 && endSet.size > 0) {
    let commonNode = expandSearch(startSet, visitedStart, visitedEnd);
    if (commonNode != null) {
      return getPath(commonNode, visitedStart, visitedEnd);
    }

    commonNode = expandSearch(endSet, visitedEnd, visitedStart);
    if (commonNode != null) {
      return getPath(commonNode, visitedStart, visitedEnd);
    }
  }

  return null;
}

function expandSearch(set, visited, otherVisited) {
  let currentNode = set.values().next().value;
  set.delete(currentNode);

  for (let adjacentNode of currentNode.adjacentNodes) {
    if (!visited.hasOwnProperty(adjacentNode.id)) {
      set.add(adjacentNode);
      visited[adjacentNode.id] = currentNode;

      if (otherVisited.hasOwnProperty(adjacentNode.id)) {
        return adjacentNode;
      }
    }
  }

  return null;
}

function getPath(commonNode, visitedStart, visitedEnd) {
  let path = [];
  let currentNode = commonNode;

  while (currentNode != null) {
    path.push(currentNode.id);
    currentNode = visitedStart[currentNode.id];
  }
  path.reverse();

  currentNode = visitedEnd[commonNode.id];
  while (currentNode != null) {
    path.push(currentNode.id);
    currentNode = visitedEnd[currentNode.id];
  }

  return path;
}

// Example usage
let node1 = new GraphNode(1);
let node2 = new GraphNode(2);
let node3 = new GraphNode(3);
let node4 = new GraphNode(4);
let node5 = new GraphNode(5);

node1.addAdjacentNode(node2);
node2.addAdjacentNode(node1);
node2.addAdjacentNode(node3);
node3.addAdjacentNode(node2);
node3.addAdjacentNode(node4);
node4.addAdjacentNode(node3);
node4.addAdjacentNode(node5);
node5.addAdjacentNode(node4);

console.log(biDirectionalSearch(node1, node5));
