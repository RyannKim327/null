interface Node {
  id: string;
  x: number;
  y: number;
  cost: number;
  heuristic: number;
  parent: Node | null;
}

class AStarSearch {
  private openList: Node[];
  private closedList: Node[];

  constructor() {
    this.openList = [];
    this.closedList = [];
  }

  public search(startNode: Node, endNode: Node, graph: Node[][]): Node[] | null {
    this.openList.push(startNode);
    startNode.cost = 0;
    startNode.heuristic = this.heuristic(startNode, endNode);

    while (this.openList.length > 0) {
      const currentNode = this.openList[0];
      this.openList.shift();

      if (currentNode === endNode) {
        return this.reconstructPath(currentNode);
      }

      this.closedList.push(currentNode);

      for (const neighbor of this.getNeighbors(currentNode, graph)) {
        const tentativeCost = currentNode.cost + this.cost(neighbor, currentNode);
        if (tentativeCost < neighbor.cost) {
          neighbor.cost = tentativeCost;
          neighbor.parent = currentNode;
          neighbor.heuristic = this.heuristic(neighbor, endNode);
          if (!this.openList.includes(neighbor)) {
            this.openList.push(neighbor);
            this.openList.sort((a, b) => a.cost + a.heuristic - (b.cost + b.heuristic));
          }
        }
      }
    }

    return null;
  }

  private getNeighbors(node: Node, graph: Node[][]): Node[] {
    const neighbors: Node[] = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (x === 0 && y === 0) continue;
        const neighborX = node.x + x;
        const neighborY = node.y + y;
        if (neighborX >= 0 && neighborX < graph.length && neighborY >= 0 && neighborY < graph[0].length) {
          neighbors.push(graph[neighborX][neighborY]);
        }
      }
    }
    return neighbors;
  }

  private cost(nodeA: Node, nodeB: Node): number {
    // Implement the cost function here (e.g. Euclidean distance)
    return Math.sqrt(Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2));
  }

  private heuristic(node: Node, endNode: Node): number {
    // Implement the heuristic function here (e.g. Manhattan distance)
    return Math.abs(node.x - endNode.x) + Math.abs(node.y - endNode.y);
  }

  private reconstructPath(node: Node): Node[] {
    const path: Node[] = [node];
    while (node.parent !== null) {
      path.unshift(node.parent);
      node = node.parent;
    }
    return path;
  }
}
const graph: Node[][] = [
  [{ id: 'A', x: 0, y: 0, cost: Infinity }],
  [{ id: 'B', x: 1, y: 0, cost: Infinity }, { id: 'C', x: 1, y: 1, cost: Infinity }],
  [{ id: 'D', x: 2, y: 0, cost: Infinity }, { id: 'E', x: 2, y: 1, cost: Infinity }, { id: 'F', x: 2, y: 2, cost: Infinity }]
];

const startNode = graph
