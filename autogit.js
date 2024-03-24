class BTreeNode {
    constructor(t, leaf = true) {
        this.keys = [];
        this.children = [];
        this.leaf = leaf;
        this.degree = t;
    }
}
