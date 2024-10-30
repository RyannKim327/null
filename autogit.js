class PriorityQueue:
    def __init__(self):
        self.heap = []
    
    def parent(self, i):
        return (i - 1) // 2

    def left_child(self, i):
        return 2 * i + 1

    def right_child(self, i):
        return 2 * i + 2

    def insert(self, val):
        self.heap.append(val)
        self.heapify_up(len(self.heap) - 1)

    def pop(self):
        if len(self.heap) == 0:
            return None
        
        if len(self.heap) == 1:
            return self.heap.pop()

        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self.heapify_down(0)
        
        return root

    def heapify_up(self, i):
        while i != 0 and self.heap[self.parent(i)] > self.heap[i]:
            self.heap[i], self.heap[self.parent(i)] = self.heap[self.parent(i)], self.heap[i]
            i = self.parent(i)

    def heapify_down(self, i):
        smallest = i
        l = self.left_child(i)
        r = self.right_child(i)

        if l < len(self.heap) and self.heap[l] < self.heap[smallest]:
            smallest = l

        if r < len(self.heap) and self.heap[r] < self.heap[smallest]:
            smallest = r

        if smallest != i:
            self.heap[i], self.heap[smallest] = self.heap[smallest], self.heap[i]
            self.heapify_down(smallest)
