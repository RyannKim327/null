#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 10

typedef struct {
    int data[MAX_SIZE];
    int top;
} Stack;

void initStack(Stack* stack) {
    stack->top = -1;
}

int isEmpty(Stack* stack) {
    return stack->top == -1;
}

int isFull(Stack* stack) {
    return stack->top == MAX_SIZE - 1;
}

void push(Stack* stack, int element) {
    if (isFull(stack)) {
        printf("Stack is full!\n");
        return;
    }
    stack->data[++stack->top] = element;
}

int pop(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty!\n");
        return -1;
    }
    return stack->data[stack->top--];
}

int main() {
    Stack stack;
    initStack(&stack);

    push(&stack, 1);
    push(&stack, 2);
    push(&stack, 3);

    printf("Popped element: %d\n", pop(&stack));
    printf("Popped element: %d\n", pop(&stack));
    printf("Popped element: %d\n", pop(&stack));

    return 0;
}
#include <iostream>
#include <vector>

class Stack {
private:
    std::vector<int> data;
    int top;

public:
    Stack() : top(-1) {}

    bool isEmpty() {
        return top == -1;
    }

    bool isFull() {
        return top == data.size() - 1;
    }

    void push(int element) {
        if (isFull()) {
            std::cout << "Stack is full!" << std::endl;
            return;
        }
        data[++top] = element;
    }

    int pop() {
        if (isEmpty()) {
            std::cout << "Stack is empty!" << std::endl;
            return -1;
        }
        return data[top--];
    }
};

int main() {
    Stack stack;

    stack.push(1);
    stack.push(2);
    stack.push(3);

    std::cout << "Popped element: " << stack.pop() << std::endl;
    std::cout << "Popped element: " << stack.pop() << std::endl;
    std::cout << "Popped element: " << stack.pop() << std::endl;

    return 0;
}
public class Stack {
    private int[] data;
    private int top;

    public Stack(int size) {
        data = new int[size];
        top = -1;
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public boolean isFull() {
        return top == data.length - 1;
    }

    public void push(int element) {
        if (isFull()) {
            System.out.println("Stack is full!");
            return;
        }
        data[++top] = element;
    }

    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack is empty!");
            return -1;
        }
        return data[top--];
    }

    public static void main(String[] args) {
        Stack stack = new Stack(10);

        stack.push(1);
        stack.push(2);
        stack.push(3);

        System.out.println("Popped element: " + stack.pop());
        System.out.println("Popped element: " + stack.pop());
        System.out.println("Popped element: " + stack.pop());
    }
}
class Stack:
    def __init__(self, size):
        self.data = [None] * size
        self.top = -1

    def is_empty(self):
        return self.top == -1

    def is_full(self):
        return self.top == len(self.data) - 1

    def push(self, element):
        if self.is_full():
            print("Stack is full!")
            return
        self.data[self.top + 1] = element
        self.top += 1

    def pop(self):
        if self.is_empty():
            print("Stack is empty!")
            return -1
        element = self.data[self.top]
        self.data[self.top] = None
        self.top -= 1
        return element

stack = Stack(10)

stack.push(1)
stack.push(2)
stack.push(3)

print("Popped element:", stack.pop())
print("Popped element:", stack.pop())
print("Popped element:", stack.pop())
class Stack {
    constructor(size) {
        this.data = new Array(size).fill(null
