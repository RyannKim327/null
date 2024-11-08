class Node:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        self.children = {}
class Node:
    def __init__(self, start, end):
        self.start = start
        self.end = end
        self.children = {}

def build_suffix_tree(text):
    root = Node(None, None)
    for i in range(len(text)):
        current = root
        for j in range(i, len(text)):
            if text[j] not in current.children:
                current.children[text[j]] = Node(j, len(text)-1)
                break
            else:
                child = current.children[text[j]]
                k = child.start
                while k <= child.end and text[k] == text[j]:
                    k += 1
                    j += 1
                if k <= child.end:
                    new_node = Node(child.start, k-1)
                    child.start = k
                    new_node.children[text[k]] = Node(k, child.end)
                    child.end = k - 1
                    child.children[text[k]] = new_node
                current = child
    return root

# Example usage
text = "banana"
suffix_tree = build_suffix_tree(text)
