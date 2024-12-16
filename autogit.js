import heapq

class PriorityQueue:
    def __init__(self):
        self.heap = []

    def push(self, item, priority):
        heapq.heappush(self.heap, (priority, item))

    def pop(self):
        if self.heap:
            return heapq.heappop(self.heap)[1]
        else:
            raise IndexError("pop from an empty priority queue")

    def __len__(self):
        return len(self.heap)

# Example usage:
pq = PriorityQueue()
pq.push('task1', 5)
pq.push('task2', 1)
pq.push('task3', 3)

print(pq.pop())  # Output: 'task2'
print(pq.pop())  # Output: 'task3'
print(pq.pop())  # Output: 'task1'
