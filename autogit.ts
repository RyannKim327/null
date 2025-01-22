interface Node {
  id: string;
  neighbors: Node[];
}

class BiDirectionalSearch {
  private forwardQueue: Node[];
  private backwardQueue: Node[];
  private forwardVisited: Set<Node>;
  private backwardVisited: Set<Node>;

  constructor(startNode: Node, goalNode: Node) {
    this.forwardQueue = [startNode];
    this.backwardQueue = [goalNode];
    this.forwardVisited = new Set([startNode]);
    this.backwardVisited = new Set([goalNode]);
  }

  private forwardSearch(): Node[] | null {
    while (this.forwardQueue.length > 0) {
      const node = this.forwardQueue.shift()!;
      if (this.backwardVisited.has(node)) {
        return this.reconstructPath(node);
      }
      for (const neighbor of node.neighbors) {
        if (!this.forwardVisited.has(neighbor)) {
          this.forwardQueue.push(neighbor);
          this.forwardVisited.add(neighbor);
        }
      }
    }
    return null;
  }

  private backwardSearch(): Node[] | null {
    while (this.backwardQueue.length > 0) {
      const node = this.backwardQueue.shift()!;
      if (this.forwardVisited.has(node)) {
        return this.reconstructPath(node);
      }
      for (const neighbor of node.neighbors) {
        if (!this.backwardVisited.has(neighbor)) {
          this.backwardQueue.push(neighbor);
          this.backwardVisited.add(neighbor);
        }
      }
    }
    return null;
  }

  private reconstructPath(meetingPoint: Node): Node[] {
    const forwardPath = [];
    let node = meetingPoint;
    while (node !== this.startNode) {
      forwardPath.unshift(node);
      node = node.neighbors.find((n) => this.forwardVisited.has(n));
    }
    forwardPath.unshift(this.startNode);

    const backwardPath = [];
    node = meetingPoint;
    while (node !== this.goalNode) {
      backwardPath.push(node);
      node = node.neighbors.find((n) => this.backwardVisited.has(n));
    }
    backwardPath.push(this.goalNode);

    return forwardPath.concat(backwardPath.slice(1));
  }

  public search(): Node[] | null {
    while (this.forwardQueue.length > 0 && this.backwardQueue.length > 0) {
      const forwardResult = this.forwardSearch();
      const backwardResult = this.backwardSearch();
      if (forwardResult && backwardResult) {
        return forwardResult;
      }
    }
    return null;
  }
}

// Example usage:
const startNode: Node = { id: 'A', neighbors: [{ id: 'B', neighbors: [] }, { id: 'C', neighbors: [] }] };
const goalNode: Node = { id: 'G', neighbors: [] };
const biDirectionalSearch = new BiDirectionalSearch(startNode, goalNode);
const path = biDirectionalSearch.search();
console.log(path); // [A, B, E, G]
