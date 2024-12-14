class Node:
    def __init__(self, start, end, parent=None):
        self.start = start
        self.end = end
        self.parent = parent
        self.children = {}


def build_suffix_tree(text):
    root = Node(None, None)
    for i in range(len(text)):
        current = root
        for j in range(i, len(text)):
            if text[j] not in current.children:
                current.children[text[j]] = Node(j, None, parent=current)
            current = current.children[text[j]]
        current.end = i
    return root


def traverse(node, text):
    if node.start is not None:
        print(text[node.start:node.end+1])
    for child in node.children.values():
        traverse(child, text)


# Example usage
text = "banana"
tree = build_suffix_tree(text)
traverse(tree, text)
