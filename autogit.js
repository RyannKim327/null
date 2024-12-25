struct BTreeNode {
    int *keys; // Array to store keys
    int t; // Minimum degree (defines the range for number of keys)
    BTreeNode **children; // Array of child pointers
    int n; // Current number of keys
    bool leaf; // Is true when node is leaf
};
void insertNonFull(BTreeNode *node, int key) {
    int i = node->n - 1;
    if (node->leaf) {
        while (i >= 0 && key < node->keys[i]) {
            node->keys[i + 1] = node->keys[i];
            i--;
        }
        node->keys[i + 1] = key;
        node->n++;
    } else {
        while (i >= 0 && key < node->keys[i]) {
            i--;
        }
        if (node->children[i + 1]->n == 2 * node->t - 1) {
            splitChild(node, i + 1, node->children[i + 1]);
            if (key > node->keys[i + 1]) {
                i++;
            }
        }
        insertNonFull(node->children[i + 1], key);
    }
}
void splitChild(BTreeNode *parent, int i, BTreeNode *child) {
    BTreeNode *newNode = new BTreeNode();
    newNode->t = child->t;
    newNode->leaf = child->leaf;
    newNode->n = node->t - 1;
  
    for (int j = 0; j < node->t - 1; j++) {
        newNode->keys[j] = child->keys[j + node->t];
    }
  
    if (!child->leaf) {
        for (int j = 0; j < node->t; j++) {
            newNode->children[j] = child->children[j + node->t];
        }
    }
  
    child->n = node->t - 1;
  
    for (int j = parent->n; j >= i + 1; j--) {
        parent->children[j + 1] = parent->children[j];
    }
  
    parent->children[i + 1] = newNode;
  
    for (int j = parent->n - 1; j >= i; j--) {
        parent->keys[j + 1] = parent->keys[j];
    }
  
    parent->keys[i] = child->keys[node->t - 1];
    parent->n++;
}
