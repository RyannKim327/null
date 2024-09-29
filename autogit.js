#include <iostream>

// Define the structure for a node in the linked list
struct Node {
    int data;
    Node* next;
};

// Define the structure for the queue
struct Queue {
    Node* front;
    Node* rear;
};

// Function to create a new node
Node* createNode(int data) {
    Node* newNode = new Node();
    newNode->data = data;
    newNode->next = nullptr;
    return newNode;
}

// Function to create an empty queue
Queue* createQueue() {
    Queue* queue = new Queue();
    queue->front = queue->rear = nullptr;
    return queue;
}

// Function to check if the queue is empty
bool isEmpty(Queue* queue) {
    return (queue->front == nullptr);
}

// Function to add an element to the queue
void enqueue(Queue* queue, int data) {
    Node* newNode = createNode(data);
    
    // If queue is empty, set both front and rear to the new node
    if (isEmpty(queue)) {
        queue->front = queue->rear = newNode;
        return;
    }
    
    // Add the new node at the end of the queue and update the rear pointer
    queue->rear->next = newNode;
    queue->rear = newNode;
}

// Function to remove an element from the queue
void dequeue(Queue* queue) {
    // If queue is empty, do nothing
    if (isEmpty(queue)) {
        return;
    }
    
    Node* temp = queue->front;
    
    // Update the front pointer
    queue->front = queue->front->next;
    
    // If front becomes NULL, set rear to NULL as well
    if (queue->front == nullptr) {
        queue->rear = nullptr;
    }
    
    delete temp;
}

// Function to display the elements of the queue
void displayQueue(Queue* queue) {
    Node* current = queue->front;
    
    if (isEmpty(queue)) {
        std::cout << "Queue is empty" << std::endl;
        return;
    }
    
    std::cout << "Queue elements: ";
    while (current != nullptr) {
        std::cout << current->data << " ";
        current = current->next;
    }
    std::cout << std::endl;
}

int main() {
    Queue* queue = createQueue();
    
    enqueue(queue, 10);
    enqueue(queue, 20);
    enqueue(queue, 30);
    
    displayQueue(queue);
    
    dequeue(queue);
    
    displayQueue(queue);
    
    dequeue(queue);
    dequeue(queue);
    
    displayQueue(queue);
    
    dequeue(queue); // Trying to dequeue from an empty queue
    
    return 0;
}
