class SuffixTreeNode:
    def __init__(self):
        self.children = {}
        self.suffix_link = None
        self.start = -1
        self.end = -1

class SuffixTree:
    def __init__(self, text):
        self.root = SuffixTreeNode()
        self.root.suffix_link = self.root
        self.text = text
        self.active_node = self.root
        self.active_edge = 0
        self.active_length = 0
        self.remaining_suffix_count = 0
        self.split_end = None
        self.last_new_node = None
        self.active_edge = -1

    def extend_suffix_tree(self, pos):
        self.remaining_suffix_count += 1
        self.last_new_node = None
        self.split_end = None
        while self.remaining_suffix_count > 0:
            if self.active_length == 0:
                self.active_edge = pos

            if self.active_node.children.get(self.text[self.active_edge]) is None:
                self.active_node.children[self.text[self.active_edge]] = SuffixTreeNode()
                if self.last_new_node is not None:
                    self.last_new_node.suffix_link = self.active_node
                    self.last_new_node = None

            next_char = self.text[pos]
            next_node = self.active_node.children[self.text[self.active_edge]]
            edge_length = next_node.end - next_node.start

            if self.active_length >= edge_length:
                self.active_edge += edge_length
                self.active_length -= edge_length
                self.active_node = next_node
                continue

            if self.text[next_node.start + self.active_length] == next_char:
                self.active_length += 1
                if self.last_new_node is not None and self.active_node != self.root:
                    self.last_new_node.suffix_link = self.active_node
                    self.last_new_node = None
                break

            self.split_end = next_node.start + self.active_length - 1
            split_node = SuffixTreeNode()
            split_node.start = next_node.start
            split_node.end = self.split_end
            next_node.start += self.active_length
            split_node.children[next_char] = SuffixTreeNode()
            next_node.children[self.text[next_node.start]] = split_node

            if self.last_new_node is not None:
                self.last_new_node.suffix_link = split_node

            self.last_new_node = split_node

            if self.active_node == self.root:
                self.active_length -= 1
                self.active_edge = pos - self.remaining_suffix_count + 1
            else:
                self.active_node = self.active_node.suffix_link
            self.remaining_suffix_count -= 1

        if self.last_new_node is not None:
            self.last_new_node.suffix_link = self.active_node

    def build_suffix_tree(self):
        for i in range(len(self.text)):
            self.extend_suffix_tree(i)
