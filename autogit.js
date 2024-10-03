#include <iostream>
#include <algorithm>

class Node {
public:
    int key;
    Node* left;
    Node* right;
    int height;
    
    Node(int k) {
        key = k;
        left = right = nullptr;
        height = 1;
    }
};

class AVLTree {
private:
    Node* root;
    
    int getHeight(Node* n) {
        if (n == nullptr) {
            return 0;
        }
        return n->height;
    }
    
    int getBalanceFactor(Node* n) {
        if (n == nullptr) {
            return 0;
        }
        return getHeight(n->left) - getHeight(n->right);
    }
    
    Node* rotateRight(Node* y) {
        Node* x = y->left;
        Node* T = x->right;
        
        x->right = y;
        y->left = T;
        
        y->height = std::max(getHeight(y->left), getHeight(y->right)) + 1;
        x->height = std::max(getHeight(x->left), getHeight(x->right)) + 1;
        
        return x;
    }
    
    Node* rotateLeft(Node* x) {
        Node* y = x->right;
        Node* T = y->left;
        
        y->left = x;
        x->right = T;
        
        x->height = std::max(getHeight(x->left), getHeight(x->right)) + 1;
        y->height = std::max(getHeight(y->left), getHeight(y->right)) + 1;
        
        return y;
    }
    
    Node* insertHelper(Node* root, int key) {
        if (root == nullptr) {
            return new Node(key);
        }
        
        if (key < root->key) {
            root->left = insertHelper(root->left, key);
        } else if (key > root->key) {
            root->right = insertHelper(root->right, key);
        } else {
            return root;
        }
        
        root->height = 1 + std::max(getHeight(root->left), getHeight(root->right));
        
        int balance = getBalanceFactor(root);
        
        if (balance > 1 && key < root->left->key) {
            return rotateRight(root);
        }
        
        if (balance < -1 && key > root->right->key) {
            return rotateLeft(root);
        }
        
        if (balance > 1 && key > root->left->key) {
            root->left = rotateLeft(root->left);
            return rotateRight(root);
        }
        
        if (balance < -1 && key < root->right->key) {
            root->right = rotateRight(root->right);
            return rotateLeft(root);
        }
        
        return root;
    }
    
    void inorderHelper(Node* root) {
        if (root == nullptr) {
            return;
        }
        
        inorderHelper(root->left);
        std::cout << root->key << " ";
        inorderHelper(root->right);
    }
    
public:
    AVLTree() {
        root = nullptr;
    }
    
    void insert(int key) {
        root = insertHelper(root, key);
    }
    
    void inorder() {
        inorderHelper(root);
        std::cout << std::endl;
    }
};

int main() {
    AVLTree avl;
    
    avl.insert(10);
    avl.insert(20);
    avl.insert(30);
    
    avl.inorder();
    
    return 0;
}
