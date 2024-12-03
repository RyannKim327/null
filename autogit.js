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

    void push(int val) {
        if (top >= MAX_SIZE - 1) {
            std::cout << "Stack overflow" << std::endl;
            return;
        }
        arr[++top] = val;
    }

    int pop() {
        if (top < 0) {
            std::cout << "Stack underflow" << std::endl;
            return -1;
        }
        return arr[top--];
    }

    int peek() {
        if (top < 0) {
            std::cout << "Stack is empty" << std::endl;
            return -1;
        }
        return arr[top];
    }

    bool isEmpty() {
        return top < 0;
    }
};

int main() {
    Stack stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);

    std::cout << stack.pop() << std::endl;
    std::cout << stack.pop() << std::endl;

    std::cout << "Is stack empty? " << (stack.isEmpty() ? "Yes" : "No") << std::endl;

    return 0;
}
