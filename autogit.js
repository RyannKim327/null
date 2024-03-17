class Node {
    constructor(keys, children) {
        this.keys = keys || [];
        this.children = children || [];
    }
}

class BTree {
    constructor(order) {
        this.root = new Node();
        this.order = order;
    }

    insert(key) {
        let rootNode = this.root;
        if (rootNode.keys.length === 2 * this.order - 1) {
            let newRootNode = new Node();
            newRootNode.children.push(rootNode);
            this.splitChild(newRootNode, 0);
            this.root = newRootNode;
            this.insertNonFull(newRootNode, key);
        } else {
            this.insertNonFull(rootNode, key);
        }
    }

    insertNonFull(node, key) {
        let i = node.keys.length - 1;
        if (node.children.length === 0) {
            while (i >= 0 && key < node.keys[i]) {
                node.keys[i + 1] = node.keys[i];
                i--;
            }
            node.keys[i + 1] = key;
        } else {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;
            if (node.children[i].keys.length === 2 * this.order - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }

    splitChild(node, i) {
        let child = node.children[i];
        let mid = Math.floor(child.keys.length / 2);

        let newNode = new Node(child.keys.splice(mid + 1), child.children.splice(mid + 1));
        
        node.keys.splice(i, 0, child.keys[mid]);
        node.children.splice(i + 1, 0, newNode);
    }
}

// Usage
let bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
