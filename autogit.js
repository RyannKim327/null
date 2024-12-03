class SuffixTree:
    def __init__(self, string):
        self.root = {}
        self.end_char = '$'
        self.string = string + self.end_char
        self.build_suffix_tree()

    def build_suffix_tree(self):
        for i in range(len(self.string)):
            current = self.root
            for char in self.string[i:]:
                if char not in current:
                    current[char] = {}
                current = current[char]
    
    def search(self, pattern):
        current = self.root
        for char in pattern:
            if char not in current:
                return False
            current = current[char]
        return True
    
    def print_tree(self):
        def print_node(node, level):
            for key, value in node.items():
                print('  ' * level + key)
                print_node(value, level + 1)
        
        print_node(self.root, 0)
        
# Example Usage
suffix_tree = SuffixTree("banana")
suffix_tree.print_tree()
print(suffix_tree.search("nan"))
