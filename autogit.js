class BTreeNode {
    vector<int> keys;
    vector<BTreeNode*> children;
    bool isLeaf;
    int numKeys;
};
void insert(int key) {
    // Insert the key into the B-tree
}

void splitChild(int childIndex, BTreeNode* parentNode) {
    // Split the child node at the given index
}
bool search(int key) {
    // Search for the key in the B-tree
    return false;
}
void balanceTree() {
    // Balance the B-tree after insertion or deletion
}

void mergeNodes(BTreeNode* node1, BTreeNode* node2) {
    // Merge two sibling nodes
}
void deleteKey(int key) {
    // Delete the key from the B-tree
}

void removeKey(int key) {
    // Remove the key from the node
}
