class BTreeNode:
    def __init__(self, is_leaf=True):
        self.is_leaf = is_leaf
        self.keys = []
        self.children = []

class BTree:
    def __init__(self, degree):
        self.root = BTreeNode(is_leaf=True)
        self.degree = degree

    def insert(self, key):
        if len(self.root.keys) == (2 * self.degree) - 1:
            new_root = BTreeNode(is_leaf=False)
            new_root.children.append(self.root)
            self._split_child(new_root, 0)
            self.root = new_root
        self._insert_non_full(self.root, key)

    def _insert_non_full(self, node, key):
        i = len(node.keys) - 1
        if node.is_leaf:
            node.keys.append(None)
            while i >= 0 and key < node.keys[i]:
                node.keys[i + 1] = node.keys[i]
                i -= 1
            node.keys[i + 1] = key
        else:
            while i >= 0 and key < node.keys[i]:
                i -= 1
            i += 1
            if len(node.children[i].keys) == (2 * self.degree) - 1:
                self._split_child(node, i)
                if key > node.keys[i]:
                    i += 1
            self._insert_non_full(node.children[i], key)

    def _split_child(self, parent, index):
        child = parent.children[index]
        new_child = BTreeNode(is_leaf=child.is_leaf)
        mid = len(child.keys) // 2
        new_child.keys = child.keys[mid+1:]
        child.keys = child.keys[:mid]
        if not child.is_leaf:
            new_child.children = child.children[mid+1:]
            child.children = child.children[:mid+1]
        parent.keys.append(child.keys[mid])
        parent.children.insert(index + 1, new_child)

    def search(self, key):
        return self._search(self.root, key)

    def _search(self, node, key):
        i = 0
        while i < len(node.keys) and key > node.keys[i]:
            i += 1
        if i < len(node.keys) and key == node.keys[i]:
            return True
        if node.is_leaf:
            return False
        else:
            return self._search(node.children[i], key)
