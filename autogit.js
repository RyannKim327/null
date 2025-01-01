#include <iostream>

#define MAX_SIZE 100

class Stack {
private:
    int arr[MAX_SIZE];
    int top;

public:
    Stack() {
        top = -1;
    }

    bool isEmpty() {
        return top == -1;
    }

    bool isFull() {
        return top == MAX_SIZE - 1;
    }

    void push(int value) {
        if (isFull()) {
            std::cout << "Stack overflow\n";
            return;
        }
        arr[++top] = value;
        std::cout << value << " pushed to the stack\n";
    }

    void pop() {
        if (isEmpty()) {
            std::cout << "Stack underflow\n";
            return;
        }
        int value = arr[top--];
        std::cout << value << " popped from the stack\n";
    }

    int peek() {
        if (isEmpty()) {
            std::cout << "Stack is empty\n";
            return -1;
        }
        return arr[top];
    }
};

int main() {
    Stack stack;
    stack.push(5);
    stack.push(10);
    stack.push(15);

    std::cout << "Top element: " << stack.peek() << "\n";

    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();

    return 0;
}
