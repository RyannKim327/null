class HashTable:
    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(size)]

    def _hash_function(self, key):
        return hash(key) % self.size

    def insert(self, key, value):
        index = self._hash_function(key)
        for entry in self.table[index]:
            if entry[0] == key:
                entry[1] = value
                return
        self.table[index].append([key, value])

    def get(self, key):
        index = self._hash_function(key)
        for entry in self.table[index]:
            if entry[0] == key:
                return entry[1]
        raise KeyError(f"Key not found: {key}")

    def delete(self, key):
        index = self._hash_function(key)
        for i, entry in enumerate(self.table[index]):
            if entry[0] == key:
                del self.table[index][i]
                return
        raise KeyError(f"Key not found: {key}")

# Example usage
ht = HashTable(10)
ht.insert('name', 'Alice')
print(ht.get('name'))  # Output: Alice
ht.insert('name', 'Bob')
print(ht.get('name'))  # Output: Bob
ht.delete('name')
print(ht.get('name'))  # Raises KeyError
