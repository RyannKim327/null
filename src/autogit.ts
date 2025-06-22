type Graph = Map<number, { node: number; weight: number }[]>;

class MinHeap {
    private heap: { node: number; distance: number }[] = [];

    // Insert a new element into the heap
    insert(node: number, distance: number): void {
        this.heap.push({ node, distance });
        this.bubbleUp(this.heap.length - 1);
    }

    // Extract the element with the smallest distance
    extractMin(): { node: number; distance: number } | null {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0 && last) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    // Bubble up to maintain the heap property
    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].distance <= this.heap[index].distance) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    // Bubble down to maintain the heap property
    private bubbleDown(index: number): void {
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex].distance < this.heap[smallest].distance) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex].distance < this.heap[smallest].distance) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }
}

function dijkstra(graph: Graph, startNode: number): Map<number, number> {
    const distances = new Map<number, number>();
    const visited = new Set<number>();
    const pq = new MinHeap();

    // Initialize distances
    for (const node of graph.keys()) {
        distances.set(node, Infinity);
    }
    distances.set(startNode, 0);

    // Insert the start node into the priority queue
    pq.insert(startNode, 0);

    // Process the priority queue
    while (!pq.isEmpty()) {
        const current = pq.extractMin();
        if (!current) break;

        const currentNode = current.node;
        const currentDistance = current.distance;

        // Skip if already visited
        if (visited.has(currentNode)) continue;
        visited.add(currentNode);

        // Update distances for neighbors
        const neighbors = graph.get(currentNode) || [];
        for (const { node: neighbor, weight } of neighbors) {
            if (visited.has(neighbor)) continue;

            const newDistance = currentDistance + weight;
            if (newDistance < (distances.get(neighbor) || Infinity)) {
                distances.set(neighbor, newDistance);
                pq.insert(neighbor, newDistance);
            }
        }
    }

    return distances;
}

// Example usage
const graph: Graph = new Map([
    [0, [{ node: 1, weight: 4 }, { node: 2, weight: 1 }]],
    [1, [{ node: 3, weight: 1 }]],
    [2, [{ node: 1, weight: 2 }, { node: 3, weight: 5 }]],
    [3, []],
]);

const startNode = 0;
const shortestDistances = dijkstra(graph, startNode);

console.log("Shortest distances from node", startNode, ":");
for (const [node, distance] of shortestDistances.entries()) {
    console.log(`Node ${node}: ${distance}`);
}
