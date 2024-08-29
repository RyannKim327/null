class Node:
    def __init__(self):
        self.children = {}
        self.start = None
        self.end = None

class SuffixTree:
    def __init__(self, text):
        self.root = Node()
        self.text = text
        self.build_suffix_tree()

    def build_suffix_tree(self):
        for i in range(len(self.text)):
            self.add_suffix(self.text[i:], i)

    def add_suffix(self, suffix, start):
        current_node = self.root

        for i in range(len(suffix)):
            if suffix[i] not in current_node.children:
                current_node.children[suffix[i]] = Node()

            current_node = current_node.children[suffix[i]]

        current_node.start = start
        current_node.end = len(self.text) - 1

    def search(self, pattern):
        current_node = self.root

        for char in pattern:
            if char not in current_node.children:
                return False
            current_node = current_node.children[char]

        return True

# Usage
text = "banana"
tree = SuffixTree(text)
print(tree.search("ana"))  # Output: True
print(tree.search("app"))  # Output: False
