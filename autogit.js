class HashTable:
    def __init__(self, size):
        self.size = size
        self.table = [None] * size
        
    def hash_function(self, key):
        return len(key) % self.size
    
    def insert(self, key, value):
        index = self.hash_function(key)
        self.table[index] = value
        
    def search(self, key):
        index = self.hash_function(key)
        return self.table[index]

    def delete(self, key):
        index = self.hash_function(key)
        self.table[index] = None
