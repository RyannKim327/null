#include <iostream>

class Node {
public:
    int data;
    Node* next;

    Node(int data) {
        this->data = data;
        next = nullptr;
    }
};

class Queue {
private:
    Node* front;
    Node* rear;

public:
    Queue() {
        front = rear = nullptr;
    }

    void enqueue(int data) {
        Node* newNode = new Node(data);

        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }

        std::cout << data << " enqueued to queue." << std::endl;
    }

    void dequeue() {
        if (isEmpty()) {
            std::cout << "Queue is empty." << std::endl;
            return;
        }

        Node* temp = front;
        front = front->next;

        if (front == nullptr) {
            rear = nullptr;
        }

        std::cout << temp->data << " dequeued from queue." << std::endl;
        delete temp;
    }

    bool isEmpty() {
        return front == nullptr;
    }

    int peek() {
        if (!isEmpty()) {
            return front->data;
        } else {
            std::cout << "Queue is empty." << std::endl;
            return -1;
        }
    }
};

int main() {
    Queue queue;
    
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    
    std::cout << "Front element: " << queue.peek() << std::endl;

    queue.dequeue();
    std::cout << "Front element after dequeue: " << queue.peek() << std::endl;

    return 0;
}
