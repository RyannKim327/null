import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []
        self.index = 0

    def push(self, priority, item):
        heapq.heappush(self.heap, (priority, self.index, item))
        self.index += 1

    def pop(self):
        return heapq.heappop(self.heap)[-1]

# Example usage
pq = PriorityQueue()
pq.push(3, 'task3')
pq.push(1, 'task1')
pq.push(2, 'task2')

print(pq.pop())  # Output: task1
print(pq.pop())  # Output: task2
print(pq.pop())  # Output: task3
