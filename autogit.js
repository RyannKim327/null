#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

typedef struct Queue {
    Node* front;
    Node* rear;
} Queue;

void initQueue(Queue* q) {
    q->front = q->rear = NULL;
}

void enqueue(Queue* q, int data) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->data = data;
    node->next = NULL;
    if (q->rear == NULL) {
        q->front = q->rear = node;
    } else {
        q->rear->next = node;
        q->rear = node;
    }
}

int dequeue(Queue* q) {
    if (q->front == NULL) {
        printf("Queue is empty\n");
        return -1;
    }
    int data = q->front->data;
    Node* node = q->front;
    q->front = q->front->next;
    if (q->front == NULL) {
        q->rear = NULL;
    }
    free(node);
    return data;
}
#include <iostream>

using namespace std;

struct Node {
    int data;
    Node* next;
};

struct Queue {
    Node* front;
    Node* rear;
};

void initQueue(Queue& q) {
    q.front = q.rear = nullptr;
}

void enqueue(Queue& q, int data) {
    Node* node = new Node();
    node->data = data;
    node->next = nullptr;
    if (q.rear == nullptr) {
        q.front = q.rear = node;
    } else {
        q.rear->next = node;
        q.rear = node;
    }
}

int dequeue(Queue& q) {
    if (q.front == nullptr) {
        cout << "Queue is empty" << endl;
        return -1;
    }
    int data = q.front->data;
    Node* node = q.front;
    q.front = q.front->next;
    if (q.front == nullptr) {
        q.rear = nullptr;
    }
    delete node;
    return data;
}
public class Queue {
    private Node front;
    private Node rear;

    public Queue() {
        front = rear = null;
    }

    public void enqueue(int data) {
        Node node = new Node(data);
        if (rear == null) {
            front = rear = node;
        } else {
            rear.next = node;
            rear = node;
        }
    }

    public int dequeue() {
        if (front == null) {
            System.out.println("Queue is empty");
            return -1;
        }
        int data = front.data;
        Node node = front;
        front = front.next;
        if (front == null) {
            rear = null;
        }
        return data;
    }

    private static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }
}
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue:
    def __init__(self):
        self.front = self.rear = None

    def enqueue(self, data):
        node = Node(data)
        if self.rear is None:
            self.front = self.rear = node
        else:
            self.rear.next = node
            self.rear = node

    def dequeue(self):
        if self.front is None:
            print("Queue is empty")
            return -1
        data = self.front.data
        node = self.front
        self.front = self.front.next
        if self.front is None:
            self.rear = None
        return data
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = this.rear = null;
    }

    enqueue(data) {
        const node = new Node(data);
        if (this.rear === null) {
            this.front = this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue() {
        if (this.front === null) {
            console.log("Queue is empty");
            return -1;
        }
        const data = this.front.data;
        const node = this.front;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        return
