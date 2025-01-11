#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* left;
    struct Node* right;
} Node;

Node* createNode(int data) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->data = data;
    node->left = node->right = NULL;
    return node;
}

Node* insertNode(Node* root, int data) {
    if (root == NULL) {
        return createNode(data);
    }

    if (data < root->data) {
        root->left = insertNode(root->left, data);
    } else if (data > root->data) {
        root->right = insertNode(root->right, data);
    }

    return root;
}

void inorderTraversal(Node* root) {
    if (root == NULL) {
        return;
    }

    inorderTraversal(root->left);
    printf("%d ", root->data);
    inorderTraversal(root->right);
}

int main() {
    Node* root = NULL;
    root = insertNode(root, 5);
    root = insertNode(root, 3);
    root = insertNode(root, 7);
    root = insertNode(root, 2);
    root = insertNode(root, 4);
    root = insertNode(root, 6);
    root = insertNode(root, 8);

    printf("Inorder traversal: ");
    inorderTraversal(root);
    printf("\n");

    return 0;
}
#include <iostream>

using namespace std;

class Node {
public:
    int data;
    Node* left;
    Node* right;

    Node(int data) {
        this->data = data;
        this->left = nullptr;
        this->right = nullptr;
    }
};

class BinarySearchTree {
private:
    Node* root;

public:
    BinarySearchTree() {
        root = nullptr;
    }

    void insertNode(int data) {
        root = insertNodeRecursive(root, data);
    }

    Node* insertNodeRecursive(Node* node, int data) {
        if (node == nullptr) {
            return new Node(data);
        }

        if (data < node->data) {
            node->left = insertNodeRecursive(node->left, data);
        } else if (data > node->data) {
            node->right = insertNodeRecursive(node->right, data);
        }

        return node;
    }

    void inorderTraversal() {
        inorderTraversalRecursive(root);
    }

    void inorderTraversalRecursive(Node* node) {
        if (node == nullptr) {
            return;
        }

        inorderTraversalRecursive(node->left);
        cout << node->data << " ";
        inorderTraversalRecursive(node->right);
    }
};

int main() {
    BinarySearchTree bst;

    bst.insertNode(5);
    bst.insertNode(3);
    bst.insertNode(7);
    bst.insertNode(2);
    bst.insertNode(4);
    bst.insertNode(6);
    bst.insertNode(8);

    cout << "Inorder traversal: ";
    bst.inorderTraversal();
    cout << endl;

    return 0;
}
public class BinarySearchTree {
    private Node root;

    public BinarySearchTree() {
        root = null;
    }

    public void insertNode(int data) {
        root = insertNodeRecursive(root, data);
    }

    private Node insertNodeRecursive(Node node, int data) {
        if (node == null) {
            return new Node(data);
        }

        if (data < node.data) {
            node.left = insertNodeRecursive(node.left, data);
        } else if (data > node.data) {
            node.right = insertNodeRecursive(node.right, data);
        }

        return node;
    }

    public void inorderTraversal() {
        inorderTraversalRecursive(root);
    }

    private void inorderTraversalRecursive(Node node) {
        if (node == null) {
            return;
        }

        inorderTraversalRecursive(node.left);
        System.out.print(node.data + " ");
        inorderTraversalRecursive(node.right);
    }

    private static class Node {
        int data;
        Node left;
        Node right;

        Node(int data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    public static void main(String[] args) {
        BinarySearchTree bst = new BinarySearchTree();

        bst.insertNode(5);
        bst.insertNode(3);
        bst.insertNode(7);
        bst.insertNode(2);
        bst.insertNode(4);
        bst.insertNode(6);
        bst.insertNode(8);

        System.out.print("Inorder traversal: ");
        bst.inorderTraversal();
        System.out.println();
    }
}
