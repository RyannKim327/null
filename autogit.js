class Node:
    def __init__(self, leaf=True):
        self.leaf = leaf
        self.keys = []
        self.children = []

class BTree:
    def __init__(self, t):
        self.root = Node()
        self.t = t

    def insert(self, key):
        if len(self.root.keys) == (2 * self.t) - 1:
            new_root = Node(leaf=False)
            new_root.children.append(self.root)
            self._split_child(new_root, 0)
            self.root = new_root
        self._insert_non_full(self.root, key)

    def _split_child(self, parent, index):
        t = self.t
        child = parent.children[index]
        new_child = Node(leaf=child.leaf)
        parent.children.insert(index + 1, new_child)
        parent.keys.insert(index, child.keys[t - 1])
        new_child.keys = child.keys[t:2*t-1]
        child.keys = child.keys[0:t-1]

        if not child.leaf:
            new_child.children = child.children[t:2*t]
            child.children = child.children[0:t]

    def _insert_non_full(self, node, key):
        i = len(node.keys) - 1
        if node.leaf:
            node.keys.append(None)
            while i >= 0 and key < node.keys[i]:
                node.keys[i + 1] = node.keys[i]
                i -= 1
            node.keys[i + 1] = key
        else:
            while i >= 0 and key < node.keys[i]:
                i -= 1
            i += 1
            if len(node.children[i].keys) == (2 * self.t) - 1:
                self._split_child(node, i)
                if key > node.keys[i]:
                    i += 1
            self._insert_non_full(node.children[i], key)

    def search(self, key):
        return self._search(self.root, key)

    def _search(self, node, key):
        i = 0
        while i < len(node.keys) and key > node.keys[i]:
            i += 1
        if i < len(node.keys) and key == node.keys[i]:
            return True
        elif node.leaf:
            return False
        else:
            return self._search(node.children[i], key)

    def delete(self, key):
        self._delete(self.root, key)

    def _delete(self, node, key):
        t = self.t
        i = 0
        while i < len(node.keys) and key > node.keys[i]:
            i += 1

        if i < len(node.keys) and key == node.keys[i]:
            if node.leaf:
                del node.keys[i]
            else:
                # Implement deletion for internal nodes here
                pass
        else:
            if node.leaf:
                return
            if len(node.children[i].keys) < t:
                # Implement borrow or merge operation with siblings here
                pass
            self._delete(node.children[i], key)
