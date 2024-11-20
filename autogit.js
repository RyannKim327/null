import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []

    def push(self, item, priority):
        heapq.heappush(self.heap, (priority, item))

    def pop(self):
        priority, item = heapq.heappop(self.heap)
        return item

# Example Usage
pq = PriorityQueue()
pq.push('task1', 5)
pq.push('task2', 1)
pq.push('task3', 3)

print(pq.pop())  # Output: task2
print(pq.pop())  # Output: task3
print(pq.pop())  # Output: task1
