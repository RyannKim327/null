// Node structure
typedef struct Node {
    int data;
    struct Node* next;
} Node;

// Queue structure
typedef struct Queue {
    Node* front;
    Node* rear;
} Queue;

// Function to create a new queue
Queue* createQueue() {
    Queue* q = (Queue*)malloc(sizeof(Queue));
    q->front = q->rear = NULL;
    return q;
}

// Function to enqueue an element
void enqueue(Queue* q, int data) {
    Node* temp = (Node*)malloc(sizeof(Node));
    temp->data = data;
    temp->next = NULL;
    if (q->rear == NULL) {
        q->front = q->rear = temp;
    } else {
        q->rear->next = temp;
        q->rear = temp;
    }
}

// Function to dequeue an element
int dequeue(Queue* q) {
    if (q->front == NULL) {
        printf("Queue is empty\n");
        return -1;
    }
    Node* temp = q->front;
    int data = temp->data;
    q->front = q->front->next;
    if (q->front == NULL) {
        q->rear = NULL;
    }
    free(temp);
    return data;
}

// Example usage
int main() {
    Queue* q = createQueue();
    enqueue(q, 1);
    enqueue(q, 2);
    enqueue(q, 3);
    printf("%d ", dequeue(q)); // Output: 1
    printf("%d ", dequeue(q)); // Output: 2
    printf("%d ", dequeue(q)); // Output: 3
    return 0;
}
#include <iostream>

using namespace std;

// Node structure
struct Node {
    int data;
    Node* next;
};

// Queue class
class Queue {
private:
    Node* front;
    Node* rear;

public:
    Queue() : front(NULL), rear(NULL) {}

    void enqueue(int data) {
        Node* temp = new Node();
        temp->data = data;
        temp->next = NULL;
        if (rear == NULL) {
            front = rear = temp;
        } else {
            rear->next = temp;
            rear = temp;
        }
    }

    int dequeue() {
        if (front == NULL) {
            cout << "Queue is empty" << endl;
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
};

int main() {
    Queue q;
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    cout << q.dequeue() << " "; // Output: 1
    cout << q.dequeue() << " "; // Output: 2
    cout << q.dequeue() << " "; // Output: 3
    return 0;
}
public class Queue {
    private Node front;
    private Node rear;

    public Queue() {
        front = rear = null;
    }

    public void enqueue(int data) {
        Node temp = new Node(data);
        if (rear == null) {
            front = rear = temp;
        } else {
            rear.next = temp;
            rear = temp;
        }
    }

    public int dequeue() {
        if (front == null) {
            System.out.println("Queue is empty");
            return -1;
        }
        Node temp = front;
        int data = temp.data;
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

    public static void main(String[] args) {
        Queue q = new Queue();
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        System.out.print(q.dequeue() + " "); // Output: 1
        System.out.print(q.dequeue() + " "); // Output: 2
        System.out.print(q.dequeue() + " "); // Output: 3
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
        temp = Node(data)
        if self.rear is None:
            self.front = self.rear = temp

