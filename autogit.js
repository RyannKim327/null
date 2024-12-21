#include <iostream>

// Define a node structure for the linked list
struct Node {
    int data;
    Node* next;
};

// Define a Queue class
class Queue {
private:
    Node *front, *rear;

public:
    Queue() {
        front = rear = NULL;
    }

    // Method to add an element to the queue
    void enqueue(int element) {
        Node* newNode = new Node;
        newNode->data = element;
        newNode->next = NULL;

        if (rear == NULL) {
            front = rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }

        std::cout << element << " enqueued to queue." << std::endl;
    }

    // Method to remove an element from the queue
    int dequeue() {
        if (front == NULL) {
            std::cout << "Queue is empty." << std::endl;
            return -1;
        }

        Node* temp = front;
        int data = temp->data;
        front = front->next;

        if (front == NULL) {
            rear = NULL;
        }

        delete temp;

        return data;
    }

    // Method to print the front element of the queue
    int peek() {
        if (front == NULL) {
            std::cout << "Queue is empty." << std::endl;
            return -1;
        }

        return front->data;
    }
};

int main() {
    Queue q;

    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    std::cout << "Front element: " << q.peek() << std::endl;

    std::cout << q.dequeue() << " dequeued from queue." << std::endl;

    std::cout << "Front element: " << q.peek() << std::endl;

    return 0;
}
