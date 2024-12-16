# Node class for the suffix tree
class Node:
    def __init__(self, start, end):
        self.start = start  # Start index of the edge
        self.end = end  # End index of the edge
        self.children = {}  # Dictionary to store child nodes

# Suffix tree class
class SuffixTree:
    def __init__(self, text):
        self.root = Node(None, None)  # Root node of the suffix tree
        self.text = text  # Text for which suffix tree is to be constructed
        self.build_suffix_tree()  # Build the suffix tree

    def build_suffix_tree(self):
        for i in range(len(self.text)):
            self.add_suffix(i, self.text[i:])

    def add_suffix(self, suffix_start, suffix):
        current = self.root
        for char in suffix:
            if char not in current.children:
                current.children[char] = Node(suffix_start, len(self.text))
                return
            else:
                child = current.children[char]
                edge_start = child.start
                edge_end = child.end
                text_index = suffix_start

                while edge_start < edge_end and self.text[edge_start] == char:
                    edge_start += 1
                    text_index += 1

                if edge_start == edge_end:
                    self.add_sibling(child, text_index, suffix)
                    return

                new_node = Node(edge_start, edge_end)

                child.start = edge_start
                child.end = edge_end

                current.children[char] = Node(suffix_start, len(self.text))

                new_node.children[self.text[edge_start]] = child
                new_node.children[char] = Node(suffix_start, len(self.text))

                return

    def add_sibling(self, node, start_index, suffix):
        char = self.text[start_index]
        node.children[char] = Node(start_index, len(self.text))

    def traverse_suffix_tree(self, node, depth):
        for child in node.children.values():
            print(' ' * depth, self.text[child.start:child.end])

            self.traverse_suffix_tree(child, depth + 1)

    def display_suffix_tree(self):
        self.traverse_suffix_tree(self.root, 0)

# Usage
text = "banana"

suffix_tree = SuffixTree(text)
suffix_tree.display_suffix_tree()
