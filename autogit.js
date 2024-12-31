
#include <iostream>

class Node {
public:
    int data;
    Node* next;
    
    Node(int data) : data(data), next(nullptr) {}
};

class Queue {
private:
    Node* front;
    Node* rear;
    
public:
    Queue() : front(nullptr), rear(nullptr) {}
    
    void enqueue(int data) {
        Node* newNode = new Node(data);
        
        if (rear == nullptr) {
            front = newNode;
            rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }
        
        std::cout << data << " enqueued to queue." << std::endl;
    }
    
    void dequeue() {
        if (front == nullptr) {
            std::cout << "Queue is empty. Cannot dequeue." << std::endl;
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
    
    void display() {
        if (front == nullptr) {
            std::cout << "Queue is empty." << std::endl;
            return;
        }
        
        Node* current = front;
        std::cout << "Queue elements: ";
        
        while (current != nullptr) {
            std::cout << current->data << " ";
            current = current->next;
        }
        
        std::cout << std::endl;
    }
};

int main() {
    Queue q;
    
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    
    q.display();
    
    q.dequeue();
    
    q.display();
    
    q.dequeue();
    q.dequeue();
    q.dequeue();
    
    return 0;
}
