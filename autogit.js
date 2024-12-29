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
        n = len(self.text)
        
        for i in range(n):
            cur = self.root
            for j in range(i, n):
                if self.text[j] not in cur.children:
                    cur.children[self.text[j]] = Node()
                cur = cur.children[self.text[j]]
                
                cur.start = i
                cur.end = j
        
    def search_pattern(self, pattern):
        cur = self.root
        for char in pattern:
            if char not in cur.children:
                return []
            cur = cur.children[char]
        
        result = []
        self.dfs(cur, result)
        return result
        
    def dfs(self, node, result):
        if node.start is not None:
            result.append(self.text[node.start:node.end+1])
        for child in node.children.values():
            self.dfs(child, result)
        
# Example Usage
text = "banana"
suffix_tree = SuffixTree(text)
print(suffix_tree.search_pattern("ana"))
