class BinaryHeap:
    def __init__(self):
        self.heap = []
    
    def insert(self, value):
        self.heap.append(value)
        self.heapify_up(len(self.heap) - 1)
    
    def remove_max(self):
        if not self.heap:
            return None
        
        max_val = self.heap[0]
        last_val = self.heap.pop()
        if self.heap:
            self.heap[0] = last_val
            self.heapify_down(0)
        
        return max_val
    
    def heapify_up(self, index):
        parent_index = (index - 1) // 2
        if index > 0 and self.heap[index] > self.heap[parent_index]:
            self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
            self.heapify_up(parent_index)
    
    def heapify_down(self, index):
        left_index = 2 * index + 1
        right_index = 2 * index + 2
        largest = index
        
        if left_index < len(self.heap) and self.heap[left_index] > self.heap[index]:
            largest = left_index
        if right_index < len(self.heap) and self.heap[right_index] > self.heap[largest]:
            largest = right_index
        
        if largest != index:
            self.heap[index], self.heap[largest] = self.heap[largest], self.heap[index]
            self.heapify_down(largest)

# Example Usage
heap = BinaryHeap()
heap.insert(3)
heap.insert(5)
heap.insert(1)
heap.insert(7)
print(heap.remove_max())  # Output: 7
print(heap.remove_max())  # Output: 5
