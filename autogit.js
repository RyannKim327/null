#include <iostream>
using namespace std;

// Define the node structure
struct Node {
    int data;
    Node* next;
};

// Define the queue structure
struct Queue {
    Node* front;
    Node* rear;
};

// Function to create a new node
Node* createNode(int value) {
    Node* newNode = new Node;
    newNode->data = value;
    newNode->next = nullptr;
    return newNode;
}

// Function to initialize the queue
Queue* initQueue() {
    Queue* queue = new Queue;
    queue->front = nullptr;
    queue->rear = nullptr;
    return queue;
}

// Function to add an element to the rear of the queue
void enqueue(Queue* queue, int value) {
    Node* newNode = createNode(value);
    if(queue->rear == nullptr) {
        queue->front = newNode;
        queue->rear = newNode;
    } else {
        queue->rear->next = newNode;
        queue->rear = newNode;
    }
}

// Function to remove an element from the front of the queue
int dequeue(Queue* queue) {
    if(queue->front == nullptr) {
        cout << "Queue is empty. Cannot dequeue.\n";
        return -1;
    }
    Node* temp = queue->front;
    int value = temp->data;
    queue->front = queue->front->next;
    if(queue->front == nullptr) {
        queue->rear = nullptr;
    }
    delete temp;
    return value;
}

// Function to check if the queue is empty
bool isEmpty(Queue* queue) {
    return (queue->front == nullptr);
}

int main() {
    Queue* queue = initQueue();

    enqueue(queue, 1);
    enqueue(queue, 2);
    enqueue(queue, 3);

    while(!isEmpty(queue)) {
        cout << dequeue(queue) << " ";
    }

    return 0;
}
