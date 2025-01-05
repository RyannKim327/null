#include <iostream>

using namespace std;

// Define the structure for a node
struct Node {
    int data;
    Node* next;
    
    Node(int value) : data(value), next(nullptr) {}
};

// Define the Linked List class
class LinkedList {
private:
    Node* head;
    
public:
    LinkedList() : head(nullptr) {}
    
    void insert(int value) {
        Node* newNode = new Node(value);
        
        if (head == nullptr) {
            head = newNode;
        } else {
            Node* current = head;
            while (current->next != nullptr) {
                current = current->next;
            }
            current->next = newNode;
        }
    }
    
    void display() {
        Node* current = head;
        
        while (current != nullptr) {
            cout << current->data << " -> ";
            current = current->next;
        }
        cout << "nullptr" << endl;
    }
};

int main() {
    LinkedList ll;
    
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    
    ll.display();
    
    return 0;
}
