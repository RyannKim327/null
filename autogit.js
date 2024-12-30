class BinaryHeap:
    def __init__(self):
        self.heap = []

    def push(self, value):
        self.heap.append(value)
        self._bubble_up(len(self.heap) - 1)

    def pop(self):
        if len(self.heap) == 0:
            raise IndexError("pop from empty priority queue")
        if len(self.heap) == 1:
            return self.heap.pop()
        top = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._sink_down(0)
        return top

    def _bubble_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[parent_index] <= self.heap[index]:
                break
            self.heap[parent_index], self.heap[index] = self.heap[index], self.heap[parent_index]
            index = parent_index

    def _sink_down(self, index):
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            smallest = index
            if left_child_index < len(self.heap) and self.heap[left_child_index] < self.heap[smallest]:
                smallest = left_child_index
            if right_child_index < len(self.heap) and self.heap[right_child_index] < self.heap[smallest]:
                smallest = right_child_index
            if smallest == index:
                break
            self.heap[index], self.heap[smallest] = self.heap[smallest], self.heap[index]
            index = smallest

# Example usage
priority_queue = BinaryHeap()
priority_queue.push(3)
priority_queue.push(1)
priority_queue.push(4)
priority_queue.push(1)
print(priority_queue.pop())  # Output: 1
print(priority_queue.pop())  # Output: 1
print(priority_queue.pop())  # Output: 3
print(priority_queue.pop())  # Output: 4
