class BinaryHeapPriorityQueue:
    def __init__(self):
        self.heap = []

    def parent(self, i):
        return (i - 1) // 2

    def left_child(self, i):
        return 2 * i + 1

    def right_child(self, i):
        return 2 * i + 2

    def heapify_up(self, i):
        while i != 0 and self.heap[self.parent(i)] > self.heap[i]:
            self.heap[i], self.heap[self.parent(i)] = self.heap[self.parent(i)], self.heap[i]
            i = self.parent(i)

    def heapify_down(self, i):
        length = len(self.heap)
        while True:
            left = self.left_child(i)
            right = self.right_child(i)
            smallest = i
            if left < length and self.heap[left] < self.heap[smallest]:
                smallest = left
            if right < length and self.heap[right] < self.heap[smallest]:
                smallest = right
            if smallest == i:
                break
            self.heap[i], self.heap[smallest] = self.heap[smallest], self.heap[i]
            i = smallest

    def insert(self, item):
        self.heap.append(item)
        self.heapify_up(len(self.heap) - 1)

    def extract_min(self):
        if len(self.heap) == 0:
            return None
        if len(self.heap) == 1:
            return self.heap.pop()
        min_val = self.heap[0]
        self.heap[0] = self.heap.pop()
        self.heapify_down(0)
        return min_val

# Example Usage:
pq = BinaryHeapPriorityQueue()
pq.insert(5)
pq.insert(2)
pq.insert(10)
pq.insert(3)

print(pq.extract_min())  # Output: 2
print(pq.extract_min())  # Output: 3
