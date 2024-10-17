class SuffixTree:
    def __init__(self):
        self.root = {}
    
    def insert_suffix(self, suffix):
        node = self.root
        for char in suffix:
            if char not in node:
                node[char] = {}
            node = node[char]
    
    def build_tree(self, text):
        for i in range(len(text)):
            self.insert_suffix(text[i:])
    
    def search(self, pattern):
        node = self.root
        for char in pattern:
            if char not in node:
                return False
            node = node[char]
        return True

# Example usage
text = "banana"
suffix_tree = SuffixTree()
suffix_tree.build_tree(text)

print(suffix_tree.search("an"))  # Output: True
print(suffix_tree.search("abc"))  # Output: False
