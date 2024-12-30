class HashTable:
    def __init__(self):
        self.size = 10
        self.table = [None] * self.size

    def hash_function(self, key):
        return len(key) % self.size

    def put(self, key, value):
        index = self.hash_function(key)
        self.table[index] = value

    def get(self, key):
        index = self.hash_function(key)
        return self.table[index]

    def remove(self, key):
        index = self.hash_function(key)
        self.table[index] = None

# Example usage
hash_table = HashTable()
hash_table.put("key1", "value1")
print(hash_table.get("key1"))  # Output: "value1"
hash_table.remove("key1")
