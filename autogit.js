class HashTable:
    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(size)]

    def _hash_function(self, key):
        return hash(key) % self.size

    def add(self, key, value):
        hash_key = self._hash_function(key)
        for pair in self.table[hash_key]:
            if pair[0] == key:
                pair[1] = value
                return
        self.table[hash_key].append([key, value])

    def get(self, key):
        hash_key = self._hash_function(key)
        for pair in self.table[hash_key]:
            if pair[0] == key:
                return pair[1]
        return None

    def remove(self, key):
        hash_key = self._hash_function(key)
        for i, pair in enumerate(self.table[hash_key]):
            if pair[0] == key:
                del self.table[hash_key][i]
                return

# Example usage
hash_table = HashTable(10)
hash_table.add('key1', 'value1')
hash_table.add('key2', 'value2')

print(hash_table.get('key1'))  # Output: value1

hash_table.remove('key1')
print(hash_table.get('key1'))  # Output: None
