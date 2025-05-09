type Node = {
  id: string;
  neighbors: { node: Node; cost: number }[];
};

type PriorityQueueItem = {
  node: Node;
  f: number; // g + h
};

class PriorityQueue {
  private elements: PriorityQueueItem[];

  constructor() {
    this.elements = [];
  }

  enqueue(node: Node, f: number) {
    this.elements.push({ node, f });
    this.elements.sort((a, b) => a.f - b.f); // Sort by f cost
  }

  dequeue(): Node | null {
    return this.elements.shift()?.node || null;
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

class AStar {
  private graph: { [id: string]: Node };
  
  constructor(graph: { [id: string]: Node }) {
    this.graph = graph;
  }

  heuristic(node: Node, goal: Node): number {
    // This is a placeholder for the actual heuristic function.
    // It could be Euclidean distance, Manhattan distance, etc.
    return 1; // This should be your heuristic estimation
  }

  search(startId: string, goalId: string): Node[] | null {
    const start = this.graph[startId];
    const goal = this.graph[goalId];

    const openSet = new PriorityQueue();
    const cameFrom: { [key: string]: Node | null } = {};

    const gScore: { [key: string]: number } = {};
    const fScore: { [key: string]: number } = {};

    // Initialize scores
    gScore[startId] = 0;
    fScore[startId] = this.heuristic(start, goal);
    openSet.enqueue(start, fScore[startId]);

    while (!openSet.isEmpty()) {
      const current = openSet.dequeue();
      if (!current) break;

      if (current.id === goalId) {
        return this.reconstructPath(cameFrom, current);
      }

      for (const neighbor of current.neighbors) {
        const tentativeGScore = gScore[current.id] + neighbor.cost;

        if (tentativeGScore < (gScore[neighbor.node.id] || Infinity)) {
          // This path to neighbor is better than any previous one
          cameFrom[neighbor.node.id] = current;
          gScore[neighbor.node.id] = tentativeGScore;
          fScore[neighbor.node.id] = tentativeGScore + this.heuristic(neighbor.node, goal);

          // Only add if it's not already in the queue
          openSet.enqueue(neighbor.node, fScore[neighbor.node.id]);
        }
      }
    }

    return null; // No path found
  }

  private reconstructPath(cameFrom: { [key: string]: Node | null }, current: Node): Node[] {
    const totalPath: Node[] = [current];
    while (cameFrom[current.id]) {
      current = cameFrom[current.id]!;
      totalPath.unshift(current);
    }
    return totalPath;
  }
}

// Example of creating a graph and executing the A* search
const graph: { [id: string]: Node } = {
  A: { id: "A", neighbors: [] },
  B: { id: "B", neighbors: [] },
  C: { id: "C", neighbors: [] },
};

// Adding edges with costs
graph["A"].neighbors.push({ node: graph["B"], cost: 1 });
graph["B"].neighbors.push({ node: graph["C"], cost: 2 });
graph["A"].neighbors.push({ node: graph["C"], cost: 4 });

const astar = new AStar(graph);
const path = astar.search("A", "C");
console.log(path?.map(node => node.id)); // Output will be the path from A to C
