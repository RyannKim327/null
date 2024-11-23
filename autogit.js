#include <iostream>

using namespace std;

// Linked list node structure
struct Node {
    int data;
    Node* next;
    
    Node(int d) : data(d), next(nullptr) {}
};

class Queue {
private:
    Node* front;
    Node* rear;

public:
    Queue() : front(nullptr), rear(nullptr) {}

    // Function to add element to the queue
    void enqueue(int data) {
        Node* newNode = new Node(data);
        
        if (rear == nullptr) {
            front = newNode;
            rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }
        
        cout << data << " enqueued to queue" << endl;
    }

    // Function to remove element from the queue
    int dequeue() {
        if (front == nullptr) {
            cout << "Queue is empty" << endl;
            return -1;
        }

        int data = front->data;
        Node* temp = front;
        front = front->next;

        if (front == nullptr) {
            rear = nullptr;
        }

        delete temp;

        cout << data << " dequeued from queue" << endl;

        return data;
    }
};

int main() {
    Queue q;

    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    q.dequeue();
    q.dequeue();

    return 0;
}
