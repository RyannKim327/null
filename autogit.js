function dijkstra(graph, startNode) {
    const distances = {};
    const priorityQueue = new MinHeap();

    distances[startNode] = 0;
    priorityQueue.push(0, startNode);

    while (!priorityQueue.isEmpty()) {
        const [currentDistance, currentNode] = priorityQueue.pop();

        if (currentDistance > distances[currentNode]) {
            continue;
        }

        for (const neighbor in graph[currentNode]) {
            const neighborDistance = currentDistance + graph[currentNode][neighbor];

            if (neighborDistance < (distances[neighbor] || Infinity)) {
                distances[neighbor] = neighborDistance;
                priorityQueue.push(neighborDistance, neighbor);
            }
        }
    }

    return distances;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(priority, value) {
        this.heap.push([priority, value]);
        this.heapifyUp();
    }

    pop() {
        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }

        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[currentIndex][0] >= this.heap[parentIndex][0]) {
                break;
            }

            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
        }
    }

    heapifyDown() {
        let currentIndex = 0;

        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let minIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex][0] < this.heap[minIndex][0]) {
                minIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][0] < this.heap[minIndex][0]) {
                minIndex = rightChildIndex;
            }

            if (minIndex === currentIndex) {
                break;
            }

            [this.heap[currentIndex], this.heap[minIndex]] = [this.heap[minIndex], this.heap[currentIndex]];
            currentIndex = minIndex;
        }
    }
}
