# Implement the suffix tree data structure in Python
class Node:
    def __init__(self):
        self.children = {}
        self.start = None
        self.end = None

def build_suffix_tree(s):
    root = Node()
    for i in range(len(s)):
        current = root
        for j in range(i, len(s)):
            if s[j] not in current.children:
                current.children[s[j]] = Node()
            current = current.children[s[j]]
    return root

# Example usage
suffix_tree = build_suffix_tree("banana")
// Implement the suffix tree data structure in C++
#include <iostream>
#include <unordered_map>
#include <string>

struct Node {
    std::unordered_map<char, Node*> children;
    int start;
    int *end;
};

Node* build_suffix_tree(std::string s) {
    Node* root = new Node();
    for (int i = 0; i < s.size(); i++) {
        Node* current = root;
        for (int j = i; j < s.size(); j++) {
            if (current->children.find(s[j]) == current->children.end()) {
                current->children[s[j]] = new Node();
            }
            current = current->children[s[j]];
        }
    }
    return root;
}

// Example usage
Node* suffix_tree = build_suffix_tree("banana");
