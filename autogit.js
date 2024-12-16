#include <iostream>

// Node class representing each element in the linked list
class Node {
public:
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = nullptr;
    }
};

// Queue class implementing the queue using a linked list
class Queue {
private:
    Node* front;
    Node* rear;

public:
    Queue() {
        front = nullptr;
        rear = nullptr;
    }

    // Function to add an element to the queue
    void enqueue(int value) {
        Node* newNode = new Node(value);

        if (rear == nullptr) {
            front = newNode;
            rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }

        std::cout << value << " enqueued to the queue." << std::endl;
    }

    // Function to remove an element from the queue
    void dequeue() {
        if (front == nullptr) {
            std::cout << "Queue is empty. Cannot dequeue." << std::endl;
            return;
        }

        int value = front->data;
        Node* temp = front;

        if (front == rear) {
            front = nullptr;
            rear = nullptr;
        } else {
            front = front->next;
        }

        delete temp;

        std::cout << value << " dequeued from the queue." << std::endl;
    }

    // Function to display the elements in the queue
    void display() {
        if (front == nullptr) {
            std::cout << "Queue is empty." << std::endl;
            return;
        }

        Node* current = front;

        std::cout << "Queue: ";
        while (current != nullptr) {
            std::cout << current->data << " ";
            current = current->next;
        }
        std::cout << std::endl;
    }
};

int main() {
    Queue queue;
    
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    
    queue.display();
    
    queue.dequeue();
    queue.dequeue();
    
    queue.display();
    
    return 0;
}
