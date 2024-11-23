import heapq

class PriorityQueue:
    def __init__(self):
        self._data = []
        self._index = 0

    def push(self, item, priority):
        heapq.heappush(self._data, (priority, self._index, item))
        self._index += 1

    def pop(self):
        return heapq.heappop(self._data)[-1]

    def is_empty(self):
        return len(self._data) == 0

# Example usage
priority_queue = PriorityQueue()
priority_queue.push('task1', 5)
priority_queue.push('task2', 3)
priority_queue.push('task3', 7)

while not priority_queue.is_empty():
    print(priority_queue.pop())
