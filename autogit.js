class Node:
    def __init__(self):
        self.outgoing_edges = {}  # Outgoing edges from this node
        self.suffix_link = None

class SuffixTree:
    def __init__(self, s):
        self.root = Node()
        self.active_node = self.root
        self.active_edge = 0
        self.active_length = 0
        self.remaining_suffixes = 0
        self.end = [-1]
        self.s = s
        self.build_suffix_tree()
    
    def build_suffix_tree(self):
        # Implement Ukkonen's algorithm to build the tree
        pass

    def search_substring(self, substr):
        # Implement a method to search for a substring in the suffix tree
        pass

# Example usage
s = "banana"
tree = SuffixTree(s)
tree.search_substring("ana")
