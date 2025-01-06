#include <iostream>

// Node class to represent each element in the linked list
class Node {
public:
    int data;
    Node* next;
    Node(int data) : data(data), next(nullptr) {}
};

// Queue class implemented using a linked list
class Queue {
private:
    Node* front;
    Node* rear;
public:
    Queue() : front(nullptr), rear(nullptr) {}

    // Enqueue operation to add an element to the queue
    void enqueue(int data) {
        Node* newNode = new Node(data);
        if (rear == nullptr) {
            front = newNode;
            rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }
        std::cout << data << " enqueued to queue" << std::endl;
    }

    // Dequeue operation to remove an element from the queue
    int dequeue() {
        if (front == nullptr) {
            std::cout << "Queue is empty" << std::endl;
            return -1;
        }
        int data = front->data;
        Node* temp = front;
        front = front->next;
        if (front == nullptr) {
            rear = nullptr;
        }
        delete temp;
        std::cout << data << " dequeued from queue" << std::endl;
        return data;
    }

    // Function to check if the queue is empty
    bool isEmpty() {
        return front == nullptr;
    }
};

int main() {
    Queue q;

    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    q.dequeue();
    q.dequeue();

    std::cout << "Is queue empty? " << (q.isEmpty() ? "Yes" : "No") << std::endl;

    q.dequeue();

    std::cout << "Is queue empty? " << (q.isEmpty() ? "Yes" : "No") << std::endl;

    return 0;
}
