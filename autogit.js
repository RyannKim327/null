class PriorityQueue:
    def __init__(self):
        self.heap = []

    def parent(self, i):
        return (i-1) // 2

    def left_child(self, i):
        return 2*i + 1

    def right_child(self, i):
        return 2*i + 2

    def insert(self, priority):
        self.heap.append(priority)
        self.heapify_up(len(self.heap) - 1)

    def heapify_up(self, i):
        while i != 0 and self.heap[self.parent(i)] < self.heap[i]:
            self.heap[i], self.heap[self.parent(i)] = self.heap[self.parent(i)], self.heap[i]
            i = self.parent(i)

    def extract_max(self):
        max_priority = self.heap[0]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        self.heapify_down(0)
        return max_priority

    def heapify_down(self, i):
        max_index = i
        left = self.left_child(i)
        if left < len(self.heap) and self.heap[left] > self.heap[max_index]:
            max_index = left
        right = self.right_child(i)
        if right < len(self.heap) and self.heap[right] > self.heap[max_index]:
            max_index = right
        if i != max_index:
            self.heap[i], self.heap[max_index] = self.heap[max_index], self.heap[i]
            self.heapify_down(max_index)

# Example usage
pq = PriorityQueue()
pq.insert(5)
pq.insert(2)
pq.insert(10)
pq.insert(7)

print(pq.extract_max())  # Output: 10
print(pq.extract_max())  # Output: 7
