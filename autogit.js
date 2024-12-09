import heapq

class PriorityQueue:
    def __init__(self):
        self._queue = []
        self._index = 0

    def push(self, item, priority):
        heapq.heappush(self._queue, (-priority, self._index, item))
        self._index += 1

    def pop(self):
        return heapq.heappop(self._queue)[-1]

# Example Usage:
pq = PriorityQueue()
pq.push('Task 1', 5)
pq.push('Task 2', 3)
pq.push('Task 3', 7)

print(pq.pop())  # Task 3
print(pq.pop())  # Task 1
print(pq.pop())  # Task 2
