class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.neighbors = [];
    this.parent = null;
  }

  distanceTo(node) {
    return Math.sqrt((this.x - node.x) ** 2 + (this.y - node.y) ** 2);
  }
}

function astar(start, end) {
  let openSet = [start];
  let closedSet = [];

  while (openSet.length > 0) {
    let currentNode = openSet[0];
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].f < currentNode.f || (openSet[i].f === currentNode.f && openSet[i].h < currentNode.h)) {
        currentNode = openSet[i];
      }
    }

    if (currentNode === end) {
      let path = [];
      let current = currentNode;
      while (current !== null) {
        path.push(current);
        current = current.parent;
      }
      return path.reverse();
    }

    const index = openSet.indexOf(currentNode);
    openSet.splice(index, 1);
    closedSet.push(currentNode);

    for (let neighbor of currentNode.neighbors) {
      if (closedSet.includes(neighbor)) {
        continue;
      }

      let tempG = currentNode.g + currentNode.distanceTo(neighbor);

      if (tempG < neighbor.g || !openSet.includes(neighbor)) {
        neighbor.g = tempG;
        neighbor.h = neighbor.distanceTo(end);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = currentNode;

        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }
  }

  return [];
}

// Example usage
const startNode = new Node(0, 0);
const endNode = new Node(5, 5);

// Define neighbors for each node (this is just a simple example)
startNode.neighbors = [new Node(1, 1), new Node(1, 0)];
endNode.neighbors = [new Node(4, 4), new Node(4, 5)];

const path = astar(startNode, endNode);
console.log(path);
