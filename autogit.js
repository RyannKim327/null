#include <iostream>

// Define the structure of a node
struct Node {
    int data;
    Node* next;
};

// Define the structure of a queue
class Queue {
private:
    Node* front;
    Node* rear;
public:
    Queue() {
        front = NULL;
        rear = NULL;
    }

    // Function to check if the queue is empty
    bool isEmpty() {
        return front == NULL;
    }

    // Function to add an element to the queue
    void enqueue(int data) {
        Node* newNode = new Node();
        newNode->data = data;
        newNode->next = NULL;
        if (isEmpty()) {
            front = newNode;
            rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }
    }

    // Function to remove an element from the queue
    void dequeue() {
        if (isEmpty()) {
            std::cout << "Queue is empty. Cannot dequeue.\n";
            return;
        }
        Node* temp = front;
        front = front->next;
        delete temp;
    }

    // Function to get the front element of the queue
    int peek() {
        if (isEmpty()) {
            std::cout << "Queue is empty.\n";
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

    q.dequeue();
    std::cout << "Front element after dequeue: " << q.peek() << std::endl;

    return 0;
}
