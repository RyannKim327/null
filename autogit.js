class BinaryHeapPriorityQueue:
    def __init__(self):
        self.heap = []

    def size(self):
        return len(self.heap)

    def is_empty(self):
        return len(self.heap) == 0

    def push(self, priority, item):
        self.heap.append((priority, item))
        self._percolate_up(len(self.heap) - 1)

    def pop(self):
        if self.is_empty():
            raise IndexError("pop from an empty priority queue")
        if len(self.heap) == 1:
            return self.heap.pop()[1]

        top = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._percolate_down(0)
        return top[1]

    def _percolate_up(self, i):
        while i > 0:
            parent = (i - 1) // 2
            if self.heap[i][0] < self.heap[parent][0]:
                self.heap[i], self.heap[parent] = self.heap[parent], self.heap[i]
                i = parent
            else:
                break

    def _percolate_down(self, i):
        while 2 * i + 1 < len(self.heap):
            left = 2 * i + 1
            right = 2 * i + 2 if 2 * i + 2 < len(self.heap) and self.heap[2 * i + 2][0] < self.heap[left][0] else left
            if self.heap[right][0] < self.heap[i][0]:
                self.heap[i], self.heap[right] = self.heap[right], self.heap[i]
                i = right
            else:
                break
