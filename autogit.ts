interface Node {
  id: string;
  parent: Node | null;
  distance: number;
}

class BiDirectionalSearch<T> {
  private graph: { [id: string]: T };
  private initialNode: Node;
  private goalNode: Node;
  private forwardOpenSet: Set<Node>;
  private backwardOpenSet: Set<Node>;
  private forwardClosedSet: Set<Node>;
  private backwardClosedSet: Set<Node>;

  constructor(graph: { [id: string]: T }, initialNode: Node, goalNode: Node) {
    this.graph = graph;
    this.initialNode = initialNode;
    this.goalNode = goalNode;
    this.forwardOpenSet = new Set();
    this.backwardOpenSet = new Set();
    this.forwardClosedSet = new Set();
    this.backwardClosedSet = new Set();
  }

  search(): Node[] | null {
    this.forwardOpenSet.add(this.initialNode);
    this.backwardOpenSet.add(this.goalNode);

    while (this.forwardOpenSet.size > 0 && this.backwardOpenSet.size > 0) {
      const forwardNode = this.selectNode(this.forwardOpenSet);
      const backwardNode = this.selectNode(this.backwardOpenSet);

      if (forwardNode && backwardNode) {
        if (this.isGoalState(forwardNode, backwardNode)) {
          return this.reconstructPath(forwardNode, backwardNode);
        }

        this.expandNode(forwardNode, this.forwardOpenSet, this.forwardClosedSet);
        this.expandNode(backwardNode, this.backwardOpenSet, this.backwardClosedSet);
      } else {
        break;
      }
    }

    return null;
  }

  private selectNode(openSet: Set<Node>): Node | null {
    let node: Node | null = null;
    let minDistance = Infinity;

    for (const n of openSet) {
      if (n.distance < minDistance) {
        node = n;
        minDistance = n.distance;
      }
    }

    return node;
  }

  private isGoalState(forwardNode: Node, backwardNode: Node): boolean {
    return forwardNode.id === backwardNode.id;
  }

  private reconstructPath(forwardNode: Node, backwardNode: Node): Node[] {
    const path: Node[] = [];

    let currentNode = forwardNode;
    while (currentNode !== null) {
      path.unshift(currentNode);
      currentNode = currentNode.parent;
    }

    currentNode = backwardNode;
    while (currentNode !== null) {
      path.push(currentNode);
      currentNode = currentNode.parent;
    }

    return path;
  }

  private expandNode(node: Node, openSet: Set<Node>, closedSet: Set<Node>) {
    closedSet.add(node);

    for (const neighbor of this.getNeighbors(node)) {
      if (!closedSet.has(neighbor)) {
        neighbor.parent = node;
        neighbor.distance = node.distance + 1;
        openSet.add(neighbor);
      }
    }
  }

  private getNeighbors(node: Node): Node[] {
    // implement this method to return the neighbors of the given node
    // based on the graph structure
  }
}
