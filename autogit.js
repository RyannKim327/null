#include <iostream>

struct Node {
    int key;
    Node* left;
    Node* right;
    
    Node(int k) : key(k), left(nullptr), right(nullptr) {}
};

class BinaryTree {
private:
    Node* root;

    Node* insertRec(Node* root, int key) {
        if (root == nullptr) {
            return new Node(key);
        }
        
        if (key < root->key) {
            root->left = insertRec(root->left, key);
        } else if (key > root->key) {
            root->right = insertRec(root->right, key);
        }
        
        return root;
    }

    Node* searchRec(Node* root, int key) {
        if (root == nullptr || root->key == key) {
            return root;
        }
        
        if (key < root->key) {
            return searchRec(root->left, key);
        }
        
        return searchRec(root->right, key);
    }

public:
    BinaryTree() : root(nullptr) {}

    void insert(int key) {
        root = insertRec(root, key);
    }

    Node* search(int key) {
        return searchRec(root, key);
    }
};

int main() {
    BinaryTree tree;

    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    
    // Search for a key
    Node* result = tree.search(3);
    if (result != nullptr) {
        std::cout << "Key found in the tree" << std::endl;
    } else {
        std::cout << "Key not found in the tree" << std::endl;
    }

    return 0;
}
