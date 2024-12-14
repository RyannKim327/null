#include <iostream>
#include <vector>

const int degree = 3; // B-tree degree

struct Node {
    bool leaf;
    int key_count;
    std::vector<int> keys;
    std::vector<Node*> children;
};

Node* createNode(bool leaf) {
    Node* node = new Node;
    node->leaf = leaf;
    node->key_count = 0;
    node->keys.resize(2*degree - 1);
    node->children.resize(2*degree);
    return node;
}

void insert(Node* root, int key) {
    // Implement insertion logic here
}

bool search(Node* root, int key) {
    // Implement search logic here
    return false;
}

int main() {
    Node* root = createNode(true);
    
    insert(root, 10);
    insert(root, 20);
    insert(root, 5);
    
    if (search(root, 20)) {
        std::cout << "Key found!" << std::endl;
    } else {
        std::cout << "Key not found!" << std::endl;
    }

    return 0;
}
