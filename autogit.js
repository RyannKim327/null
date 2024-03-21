class Node {
  constructor(x, y, parent = null) {
    this.x = x;
    this.y = y;
    this.parent = parent;
    this.g = 0;
    this.h = 0;
    this.f = 0;
  }

  isEqual(node) {
    return this.x === node.x && this.y === node.y;
  }
}

function euclideanDistance(node1, node2) {
  return Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2));
}

function aStar(grid, start, goal) {
  const openList = [];
  const closedList = [];

  openList.push(start);

  while (openList.length > 0) {
    let currentNode = openList[0];
    let currentIndex = 0;

    openList.forEach((node, index) => {
      if (node.f < currentNode.f) {
        currentNode = node;
        currentIndex = index;
      }
    });

    openList.splice(currentIndex, 1);
    closedList.push(currentNode);

    if (currentNode.isEqual(goal)) {
      const path = [];
      let current = currentNode;
      while (current !== null) {
        path.push([current.x, current.y]);
        current = current.parent;
      }
      return path.reverse();
    }

    const neighbors = [];
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]; // Up, Down, Left, Right

    directions.forEach(([dx, dy]) => {
      const neighborX = currentNode.x + dx;
      const neighborY = currentNode.y + dy;

      if (neighborX < 0 || neighborX >= grid.length || neighborY < 0 || neighborY >= grid[0].length) {
        return;
      }

      if (grid[neighborX][neighborY] === 1) {
        return;
      }

      const neighbor = new Node(neighborX, neighborY, currentNode);

      if (closedList.some(node => node.isEqual(neighbor))) {
        return;
      }

      neighbor.g = currentNode.g + 1;
      neighbor.h = euclideanDistance(neighbor, goal);
      neighbor.f = neighbor.g + neighbor.h;

      if (openList.some(node => node.isEqual(neighbor) && node.g <= neighbor.g)) {
        return;
      }

      openList.push(neighbor);
    });
  }

  return null; // No path found
}
