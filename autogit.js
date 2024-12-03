class Node:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        self.children = {}

class SuffixTree:
    def __init__(self, text):
        self.root = Node(-1, -1)  # Dummy root node
        self.text = text
        self.build_suffix_tree()

    def build_suffix_tree(self):
        for i in range(len(self.text)):
            self.insert_suffix(i, self.text[i:])

    def insert_suffix(self, suffix_index, suffix):
        curr_node = self.root
        for i in range(len(suffix)):
            if suffix[i] not in curr_node.children:
                new_node = Node(suffix_index + i, len(self.text) - 1)
                curr_node.children[suffix[i]] = new_node
                return
            else:
                next_node = curr_node.children[suffix[i]]
                j = 0
                while j < len(next_node.end) - next_node.start + 1 and self.text[next_node.start + j] == suffix[i + j]:
                    j += 1
                if j == len(next_node.end) - next_node.start + 1:
                    curr_node = next_node
                else:
                    split_node = Node(next_node.start, next_node.start + j - 1)
                    split_node.children[self.text[next_node.start + j]] = next_node
                    next_node.start = next_node.start + j
                    split_node.children[suffix[i + j]] = Node(suffix_index + i + j, len(self.text) - 1)
                    curr_node.children[suffix[i]] = split_node
                    return
