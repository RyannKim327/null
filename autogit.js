class Node:
    def __init__(self, leaf=True):
        self.keys = []
        self.children = []
        self.leaf = leaf

class BTree:
    def __init__(self, t):
        self.root = Node()
        self.t = t

    def split_child(self, x, i):
        t = self.t
        y = x.children[i]
        z = Node(leaf=y.leaf)

        x.children.insert(i + 1, z)
        x.keys.insert(i, y.keys[t - 1])

        z.keys = y.keys[t:2*t - 1]
        y.keys = y.keys[0:t-1]

        if not y.leaf:
            z.children = y.children[t:2*t]
            y.children = y.children[0:t-1]

    def insert(self, k):
        root = self.root
        t = self.t

        if len(root.keys) == (2*t) - 1:
            new_root = Node(leaf=False)
            new_root.children.append(root)
            self.root = new_root
            self.split_child(new_root, 0)
            self.insert_non_full(new_root, k)
        else:
            self.insert_non_full(root, k)

    def insert_non_full(self, x, k):
        i = len(x.keys) - 1

        if x.leaf:
            x.keys.append(0)
            while i >= 0 and k < x.keys[i]:
                x.keys[i + 1] = x.keys[i]
                i -= 1

            x.keys[i + 1] = k
        else:
            while i >= 0 and k < x.keys[i]:
                i -= 1

            i += 1
            if len(x.children[i].keys) == (2*self.t) - 1:
                self.split_child(x, i)

                if k > x.keys[i]:
                    i += 1

            self.insert_non_full(x.children[i], k)

    def search(self, x, k):
        i = 0
        while i < len(x.keys) and k > x.keys[i]:
            i += 1

        if i < len(x.keys) and k == x.keys[i]:
            return (x, i)

        if x.leaf:
            return None
        else:
            return self.search(x.children[i], k)

    def display(self, node, level=0):
        if node:
            print("Level ", level, ":", " ".join(str(node.keys)))

            level += 1
            for child in node.children:
                self.display(child, level)
