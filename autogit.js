class BTreeNode {
    constructor(keys, children) {
        this.keys = keys || [];
        this.children = children || [];
    }
}

class BTree {
    constructor(order) {
        this.order = order;
        this.root = null;
    }

    search(key) {
        // Implement search algorithm here
    }

    insert(key) {
        // Implement insertion algorithm here
    }

    delete(key) {
        // Implement deletion algorithm here
    }

    splitNode(node, index) {
        // Implement split operation here
    }

    mergeNodes(node1, node2, parent) {
        // Implement merge operation here
    }
}

// Example usage
const btree = new BTree(3); // B-tree of order 3
btree.insert(5);
btree.insert(10);
btree.insert(3);
