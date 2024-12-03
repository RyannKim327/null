class PriorityQueue:
    def __init__(self):
        self.heap = []

    def insert(self, item):
        self.heap.append(item)
        self._heapify_up(len(self.heap) - 1)

    def extract_min(self):
        if len(self.heap) == 0:
            return None
        
        min_item = self.heap[0]
        last_item = self.heap.pop()
        if len(self.heap) > 0:
            self.heap[0] = last_item
            self._heapify_down(0)
        
        return min_item

    def _heapify_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] < self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break

    def _heapify_down(self, index):
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            min_index = index

            if left_child_index < len(self.heap) and self.heap[left_child_index] < self.heap[min_index]:
                min_index = left_child_index
            if right_child_index < len(self.heap) and self.heap[right_child_index] < self.heap[min_index]:
                min_index = right_child_index

            if min_index != index:
                self.heap[index], self.heap[min_index] = self.heap[min_index], self.heap[index]
                index = min_index
            else:
                break
