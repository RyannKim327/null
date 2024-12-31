class KeyValuePair:
    def __init__(self, key, value):
        self.key = key
        self.value = value

class HashTable:
    def __init__(self, size):
        self.size = size
        self.table = [None] * size

    def _hash(self, key):
        return hash(key) % self.size

    def add(self, key, value):
        index = self._hash(key)
        if self.table[index] is None:
            self.table[index] = KeyValuePair(key, value)
        else:
            # Handle collision (e.g., using chaining)
            # You can use a linked list, array, or any other data structure to handle collisions
            # For simplicity, we will use a list here
            if not isinstance(self.table[index], list):
                self.table[index] = [self.table[index]]
            self.table[index].append(KeyValuePair(key, value))

    def get(self, key):
        index = self._hash(key)
        if self.table[index] is None:
            return None
        if isinstance(self.table[index], list):
            for item in self.table[index]:
                if item.key == key:
                    return item.value
            return None
        return self.table[index].value

    def remove(self, key):
        index = self._hash(key)
        if self.table[index] is None:
            return
        if isinstance(self.table[index], list):
            for i, item in enumerate(self.table[index]):
                if item.key == key:
                    del self.table[index][i]
                    break
        else:
            if self.table[index].key == key:
                self.table[index] = None

# Usage example
hash_table = HashTable(10)
hash_table.add('key1', 'value1')
hash_table.add('key2', 'value2')
print(hash_table.get('key1'))  # Output: value1
print(hash_table.get('non-existent'))  # Output: None
hash_table.remove('key1')
print(hash_table.get('key1'))  # Output: None
