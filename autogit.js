#include <iostream>
using namespace std;

enum Color { RED, BLACK };

struct Node {
    int data;
    Color color;
    Node* left, *right, *parent;

    Node(int data) : data(data) {
        parent = left = right = nullptr;
        // By default, a newly created node is red
        color = RED;
    }
};

class RedBlackTree {
private:
    Node* root;

    void leftRotate(Node* x) {
        Node* y = x->right;
        x->right = y->left;
        if (y->left != nullptr) {
            y->left->parent = x;
        }
        y->parent = x->parent;
        if (x->parent == nullptr) {
            root = y;
        } else if (x == x->parent->left) {
            x->parent->left = y;
        } else {
            x->parent->right = y;
        }
        y->left = x;
        x->parent = y;
    }

    void rightRotate(Node* x) {
        Node* y = x->left;
        x->left = y->right;
        if (y->right != nullptr) {
            y->right->parent = x;
        }
        y->parent = x->parent;
        if (x->parent == nullptr) {
            root = y;
        } else if (x == x->parent->right) {
            x->parent->right = y;
        } else {
            x->parent->left = y;
        }
        y->right = x;
        x->parent = y;
    }

    void fixViolation(Node* x) {
        Node* parent = nullptr;
        Node* grandparent = nullptr;

        while ((x != root) && (x->color != BLACK) && (x->parent->color == RED)) {
            parent = x->parent;
            grandparent = x->parent->parent;

            /* Case : A
               Parent of x is left child of grandparent of x */
            if (parent == grandparent->left) {
                Node* uncle = grandparent->right;
                
                /* Case : 1
                   The uncle of x is also red
                   Only Recoloring required */
                if (uncle != nullptr && uncle->color == RED) {
                    grandparent->color = RED;
                    parent->color = BLACK;
                    uncle->color = BLACK;
                    x = grandparent;
                } else {
                    /* Case : 2
                       x is right child of its parent
                       Left-rotation required */
                    if (x == parent->right) {
                        leftRotate(parent);
                        x = parent;
                        parent = x->parent;
                    }

                    /* Case : 3
                       x is left child of its parent
                       Right-rotation required */
                    rightRotate(grandparent);
                    swap(parent->color, grandparent->color);
                    x = parent;
                }
            } else {
                /* Case : B
                   Parent of x is right child of grandparent of x */
                Node* uncle = grandparent->left;

                /* Case : 1
                   The uncle of x is also red
                   Only Recoloring required */
                if ((uncle != nullptr) && (uncle->color == RED)) {
                    grandparent->color = RED;
                    parent->color = BLACK;
                    uncle->color = BLACK;
                    x = grandparent;
                } else {
                    /* Case : 2
                       x is left child of its parent
                       Right-rotation required */
                    if (x == parent->left) {
                        rightRotate(parent);
                        x = parent;
                        parent = x->parent;
                    }

                    /* Case : 3
                       x is right child of its parent
                       Left-rotation required */
                    leftRotate(grandparent);
                    swap(parent->color, grandparent->color);
                    x = parent;
                }
            }
        }

        root->color = BLACK; // Ensure the root is always black
    }

public:
    RedBlackTree() : root(nullptr) {}

    void insert(int data) {
        Node* newNode = new Node(data);
        if (root == nullptr) {
            root = newNode;
            root->color = BLACK; // Root always needs to be black
        } else {
            Node* current = root;
            Node* parent = nullptr;

            while (current != nullptr) {
                parent = current;
                if (newNode->data < current->data) {
                    current = current->left;
                } else {
                    current = current->right;
                }
            }

            newNode->parent = parent;
            if (parent == nullptr) {
                root = newNode;
            } else if (newNode->data < parent->data) {
                parent->left = newNode;
            } else {
                parent->right = newNode;
            }

            fixViolation(newNode);
        }
        cout << "Node inserted: " << data << endl;
    }
};

int main() {
    RedBlackTree tree;

    tree.insert(7);
    tree.insert(3);
    tree.insert(18);
    tree.insert(10);
    tree.insert(22);
    tree.insert(8);
    tree.insert(11);

    return 0;
}
