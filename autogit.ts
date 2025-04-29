interface Node {
    x: number;
    y: number;
    gScore: number;
    fScore: number;
    cameFrom?: Node;
}

function aStar(start: Node, goal: Node, getNeighbors: (node: Node) => Node[], heuristic: (a: Node, b: Node) => number): Node[] | null {
    const openSet = new PriorityQueue<Node>((a, b) => a.fScore - b.fScore);
    start.gScore = 0;
    start.fScore = heuristic(start, goal);
    openSet.enqueue(start);

    const closedSet = new Set<string>();

    while (!openSet.isEmpty()) {
        const current = openSet.dequeue()!;
        if (current.x === goal.x && current.y === goal.y) {
            // reconstruct path
            return reconstructPath(current);
        }

        closedSet.add(`${current.x},${current.y}`);

        for (const neighbor of getNeighbors(current)) {
            const neighborKey = `${neighbor.x},${neighbor.y}`;
            if (closedSet.has(neighborKey)) continue;

            const tentativeGScore = current.gScore + distance(current, neighbor);

            let seenNeighbor = // find in openSet or create if no
            // For simplicity, assuming neighbor obj pre-created and mutable

            if (tentativeGScore < neighbor.gScore) {
                neighbor.cameFrom = current;
                neighbor.gScore = tentativeGScore;
                neighbor.fScore = tentativeGScore + heuristic(neighbor, goal);
                if (!openSet.has(neighbor)) {
                    openSet.enqueue(neighbor);
                }
            }
        }
    }

    return null; // no path found

    function reconstructPath(node: Node): Node[] {
        const path: Node[] = [];
        let current = node;
        while (current) {
            path.push(current);
            current = current.cameFrom!;
        }
        return path.reverse();
    }
}

function distance(a: Node, b: Node): number {
    // Assuming uniform grid
    return Math.hypot(b.x - a.x, b.y - a.y);
}

// Example heuristics: Euclidean distance
function heuristic(a: Node, b: Node): number {
    return Math.hypot(b.x - a.x, b.y - a.y);
}

// PriorityQueue implementation (https://stackoverflow.com/questions/59460961/how-to-implement-a-priority-queue-in-typescript)
class PriorityQueue<T> {
    private heap: T[];
    private comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.heap = [];
        this.comparator = comparator;
    }

    enqueue(item: T) {
        this.heap.push(item);
        this.bubbleUp();
    }

    dequeue(): T | undefined {
        if (this.heap.length === 0) return undefined;
        const top = this.heap[0];
        const bottom = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = bottom;
            this.bubbleDown();
        }
        return top;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    has(item: T): boolean {
        return this.heap.includes(item);
    }

    private bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            const parentIdx = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIdx];

            if (this.comparator(element, parent) >= 0) break;

            this.heap[index] = parent;
            index = parentIdx;
        }
        this.heap[index] = element;
    }

    private bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftIdx = 2 * index + 1;
            let rightIdx = 2 * index + 2;
            let swapIdx = -1;

            if (leftIdx < length) {
                if (this.comparator(this.heap[leftIdx], element) < 0) {
                    swapIdx = leftIdx;
                }
            }

            if (rightIdx < length) {
                if (
                    (swapIdx === -1 && this.comparator(this.heap[rightIdx], element) < 0) ||
                    (swapIdx !== -1 && this.comparator(this.heap[rightIdx], this.heap[swapIdx]) < 0)
                ) {
                    swapIdx = rightIdx;
                }
            }

            if (swapIdx === -1) break;

            this.heap[index] = this.heap[swapIdx];
            index = swapIdx;
        }
        this.heap[index] = element;
    }
}
