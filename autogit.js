#include <iostream>

#define MAX_SIZE 100 // Maximum size of the stack

class Stack {
private:
    int top; // Index of the top element
    int stack[MAX_SIZE]; // Array to store elements

public:
    Stack() {
        top = -1; // Initialize top to -1
    }

    void push(int item) {
        if (top == MAX_SIZE - 1) {
            std::cout << "Stack overflow\n";
        } else {
            stack[++top] = item; // Increment top and add item to the stack
        }
    }

    void pop() {
        if (top == -1) {
            std::cout << "Stack underflow\n";
        } else {
            std::cout << "Popped element: " << stack[top--] << "\n"; // Decrement top after popping the element
        }
    }

    void display() {
        if (top == -1) {
            std::cout << "Stack is empty\n";
        } else {
            std::cout << "Stack elements: ";
            for (int i = 0; i <= top; i++) {
                std::cout << stack[i] << " ";
            }
            std::cout << "\n";
        }
    }
};

int main() {
    Stack stack;

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.display();

    stack.pop();
    stack.display();

    stack.pop();
    stack.pop();

    return 0;
}
