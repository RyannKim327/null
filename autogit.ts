interface Node {
  x: number;
  y: number;
  cost: number;
  heuristic: number;
  parent: Node | null;
}

class AStarSearch {
  private openList: Node[] = [];
  private closedList: Node[] = [];
  private grid: number[][]; // 2D grid representing the search space
  private startNode: Node;
  private endNode: Node;

  constructor(grid: number[][], start: [number, number], end: [number, number]) {
    this.grid = grid;
    this.startNode = { x: start[0], y: start[1], cost: 0, heuristic: this.heuristic(start, end), parent: null };
    this.endNode = { x: end[0], y: end[1], cost: Infinity, heuristic: 0, parent: null };
  }

  private heuristic(node: [number, number], end: [number, number]): number {
    return Math.abs(node[0] - end[0]) + Math.abs(node[1] - end[1]);
  }

  private getNeighbors(node: Node): Node[] {
    const neighbors: Node[] = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (x === 0 && y === 0) continue; // skip self
        const neighborX = node.x + x;
        const neighborY = node.y + y;
        if (neighborX >= 0 && neighborX < this.grid.length && neighborY >= 0 && neighborY < this.grid[0].length) {
          const cost = this.grid[neighborX][neighborY];
          const heuristic = this.heuristic([neighborX, neighborY], [this.endNode.x, this.endNode.y]);
          const neighbor = { x: neighborX, y: neighborY, cost, heuristic, parent: node };
          neighbors.push(neighbor);
        }
      }
    }
    return neighbors;
  }

  private sortOpenList(): void {
    this.openList.sort((a, b) => a.cost + a.heuristic - (b.cost + b.heuristic));
  }

  public search(): Node[] | null {
    this.openList.push(this.startNode);
    while (this.openList.length > 0) {
      this.sortOpenList();
      const currentNode = this.openList.shift()!;
      this.closedList.push(currentNode);
      if (currentNode.x === this.endNode.x && currentNode.y === this.endNode.y) {
        return this.reconstructPath(currentNode);
      }
      const neighbors = this.getNeighbors(currentNode);
      for (const neighbor of neighbors) {
        if (!this.closedList.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
          neighbor.cost += currentNode.cost;
          this.openList.push(neighbor);
        }
      }
    }
    return null;
  }

  private reconstructPath(node: Node): Node[] {
    const path: Node[] = [node];
    while (node.parent !== null) {
      node = node.parent;
      path.unshift(node);
    }
    return path;
  }
}
