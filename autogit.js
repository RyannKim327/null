import heapq

class PriorityQueue:
    def __init__(self):
        self._queue = []
        self._index = 0

    def push(self, item, priority):
        heapq.heappush(self._queue, (priority, self._index, item))
        self._index += 1

    def pop(self):
        return heapq.heappop(self._queue)[-1]
q = PriorityQueue()
q.push('task1', 3)
q.push('task2', 1)
q.push('task3', 2)

print(q.pop())  # Output: task2
print(q.pop())  # Output: task3
print(q.pop())  # Output: task1
