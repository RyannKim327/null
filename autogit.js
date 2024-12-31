#include <iostream>

// Node class to represent elements of the queue
class Node {
public:
    int data;
    Node* next;

    Node(int data) {
        this->data = data;
        this->next = nullptr;
    }
};

// Queue class implemented using a linked list
class Queue {
private:
    Node* front;
    Node* rear;

public:
    Queue() {
        front = nullptr;
        rear = nullptr;
    }

    // Function to enqueue an element in the queue
    void enqueue(int data) {
        Node* newNode = new Node(data);

        if (isEmpty()) {
            front = newNode;
            rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }

        std::cout << data << " enqueued to queue\n";
    }

    // Function to dequeue an element from the queue
    void dequeue() {
        if (isEmpty()) {
            std::cout << "Queue is empty, cannot dequeue\n";
        } else {
            Node* temp = front;
            front = front->next;

            std::cout << temp->data << " dequeued from queue\n";
            delete temp;
        }
    }

    // Function to check if the queue is empty
    bool isEmpty() {
        return front == nullptr;
    }

    // Function to display the queue
    void display() {
        Node* current = front;

        if (isEmpty()) {
            std::cout << "Queue is empty\n";
        } else {
            std::cout << "Queue: ";
            while (current != nullptr) {
                std::cout << current->data << " ";
                current = current->next;
            }
            std::cout << std::endl;
        }
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
