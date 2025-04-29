class BTreeNode<T> {
    keys: T[];
    children: BTreeNode<T>[];
    leaf: boolean;

    constructor(leaf: boolean) {
        this.keys = [];
        this.children = [];
        this.leaf = leaf;
    }
}

class BTree<T> {
    root: BTreeNode<T>;
    t: number;

    constructor(t: number) {
        this.root = new BTreeNode<T>(true);
        this.t = t; // min degree
    }

    search(key: T, node: BTreeNode<T> = this.root): { node: BTreeNode<T>, index: number } | null {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }

        if (i < node.keys.length && key === node.keys[i]) {
            return { node, index: i };
        } else if (node.leaf) {
            return null;
        } else {
            return this.search(key, node.children[i]);
        }
    }

    insert(key: T): void {
        let r = this.root;
        if (r.keys.length === 2 * this.t - 1) {
            const s = new BTreeNode<T>(false);
            s.children.push(r);
            this.splitChild(s, 0);
            this.insertNonFull(s, key);
            this.root = s;
        } else {
            this.insertNonFull(r, key);
        }
    }

    private insertNonFull(node: BTreeNode<T>, key: T): void {
        let i = node.keys.length - 1;
        if (node.leaf) {
            node.keys.push(key);
            while (i >= 0 && key < node.keys[i]) {
                [node.keys[i + 1], node.keys[i]] = [node.keys[i], node.keys[i + 1]];
                i--;
            }
            // shift logic, simplified here
            node.keys.splice(i + 1, 0, key);
        } else {
            while (i >= 0 && key < node.keys[i]) {
                i--;
            }
            i++;
            if (node.children[i].keys.length === 2 * this.t - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }

    private splitChild(parent: BTreeNode<T>, index: number): void {
        const node = parent.children[index];
        const newNode = new BTreeNode<T>(node.leaf);
        const t = this.t;

        // move second half keys to new node
        newNode.keys = node.keys.splice(t);
        if (!node.leaf) {
            newNode.children = node.children.splice(t);
        }

        parent.keys.splice(index, 0, node.keys.pop()!);
        parent.children.splice(index + 1, 0, newNode);
    }
}
