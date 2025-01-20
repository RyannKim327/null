interface Node {
  id: string;
  x: number;
  y: number;
  distance: number;
  previous: Node | null;
  neighbors: Node[];
}

class PriorityQueue<T> {
  private heap: T[] = [];

  add(item: T, priority: number) {
    this.heap.push(item);
    this.heapifyUp(this.heap.length - 1);
  }

  remove(): T | null {
    if (this.heap.length === 0) return null;
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return item;
  }

  private heapifyUp(index: number) {
    if (index === 0) return;
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex].priority > this.heap[index].priority) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      this.heapifyUp(parentIndex);
    }
  }

  private heapifyDown(index: number) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallest = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex].priority < this.heap[smallest].priority
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].priority < this.heap[smallest].priority
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
      this.heapifyDown(smallest);
    }
  }
}

class AStarSearch {
  private nodes: Node[];
  private startingNode: Node;
  private goalNode: Node;
  private openSet: PriorityQueue<Node>;

  constructor(nodes: Node[], startingNode: Node, goalNode: Node) {
    this.nodes = nodes;
    this.startingNode = startingNode;
    this.goalNode = goalNode;
    this.openSet = new PriorityQueue<Node>((node) => node.distance);
  }

  search(): Node[] | null {
    this.openSet.add(this.startingNode, 0);

    while (this.openSet.heap.length > 0) {
      const currentNode = this.openSet.remove()!;
      if (currentNode === this.goalNode) {
        return this.reconstructPath(currentNode);
      }

      for (const neighbor of currentNode.neighbors) {
        const tentativeDistance = currentNode.distance + this.calculateDistance(currentNode, neighbor);
        if (neighbor.distance > tentativeDistance || neighbor.previous === null) {
          neighbor.distance = tentativeDistance;
          neighbor.previous = currentNode;
          this.openSet.add(neighbor, tentativeDistance + this.heuristic(neighbor, this.goalNode));
        }
      }
    }

    return null;
  }

  private calculateDistance(node1: Node, node2: Node): number {
    return Math.sqrt(Math.pow(node2.x - node1.x, 2) + Math
