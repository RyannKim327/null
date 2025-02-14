class BTreeNode {
    keys: number[];
    children: BTreeNode[];
    isLeaf: boolean;
    degree: number;

    constructor(degree: number, isLeaf: boolean) {
        this.degree = degree;
        this.isLeaf = isLeaf;
        this.keys = [];
        this.children = [];
    }
}

class BTree {
    root: BTreeNode;
    degree: number;

    constructor(degree: number) {
        this.root = new BTreeNode(degree, true);
        this.degree = degree;
    }

    insert(key: number) {
        const root = this.root;
        if (root.keys.length === (2 * this.degree) - 1) {
            const newRoot = new BTreeNode(this.degree, false);
            newRoot.children.push(root);
            this.splitChild(newRoot, 0);
            this.root = newRoot;
            this.insertNonFull(newRoot, key);
        } else {
            this.insertNonFull(root, key);
        }
    }

    splitChild(parent: BTreeNode, index: number) {
        const degree = this.degree;
        const fullNode = parent.children[index];
        const newNode = new BTreeNode(degree, fullNode.isLeaf);

        for (let i = 0; i < degree - 1; i++) {
            newNode.keys.push(fullNode.keys[degree + i]);
        }

        if (!fullNode.isLeaf) {
            for (let i = 0; i < degree; i++) {
                newNode.children.push(fullNode.children[degree + i]);
            }
        }

        parent.keys.splice(index, 0, fullNode.keys[degree - 1]);
        parent.children.splice(index + 1, 0, newNode);
        fullNode.keys.splice(degree - 1, degree);
    }

    insertNonFull(node: BTreeNode, key: number) {
        let i = node.keys.length - 1;

        if (node.isLeaf) {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            node.keys.splice(i + 1, 0, key);
        } else {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;
            if (node.children[i].keys.length === (2 * this.degree) - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }

    search(key: number, node: BTreeNode = this.root): BTreeNode | null {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        if (i < node.keys.length && node.keys[i] === key) {
            return node;
        }

        if (node.isLeaf) {
            return null;
        }

        return this.search(key, node.children[i]);
    }

    printTree(node: BTreeNode = this.root, level: number = 0): void {
        if (node) {
            console.log("Level " + level + ":", node.keys);
            level++;
            for (const child of node.children) {
                this.printTree(child, level);
            }
        }
    }
}

// Usage example
const bTree = new BTree(3);
bTree.insert(10);
bTree.insert(20);
bTree.insert(5);
bTree.insert(6);
bTree.insert(12);
bTree.insert(30);
bTree.insert(7);
bTree.insert(17);

// Print the B-tree
bTree.printTree();
