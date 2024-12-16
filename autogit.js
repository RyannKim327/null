class Node:
    def __init__(self, start_index, end_index):
        self.start_index = start_index
        self.end_index = end_index
        self.children = {}
class SuffixTree:
    def __init__(self, text):
        self.root = Node(None, None)
        self.text = text
        self.build_suffix_tree()

    def build_suffix_tree(self):
        n = len(self.text)
        for i in range(n):
            self.add_suffix(self.text[i:], i)

    def add_suffix(self, suffix, index):
        current_node = self.root
        for i in range(len(suffix)):
            c = suffix[i]
            if c not in current_node.children:
                current_node.children[c] = Node(index + i, len(self.text) - 1)
                return
            else:
                child = current_node.children[c]
                j = 0
                while j < child.end_index - child.start_index + 1 and suffix[i + j] == self.text[child.start_index + j]:
                    j += 1
                if j == child.end_index - child.start_index + 1:
                    current_node = child
                    i += j - 1
                else:
                    child_split = Node(child.start_index, child.start_index + j - 1)
                    child.start_index += j
                    current_node.children[c] = Node(index + i, len(self.text) - 1)
                    current_node.children[c].children[self.text[child.start_index]] = child_split
                    return
