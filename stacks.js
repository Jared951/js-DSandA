// Stacks are a collection of elements in an array

/* 
    There are 2 main operations Push and Pop
    Push: adds an element to the top of the stack
    Pop: removes the top element from the stack
*/

class Stack {
    constructor() {
        this.items = [];
    }

    // Add element to the top 
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element
    pop() {
        if(this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop()
    }

    // Return top element without removing it
    peek() {
        if(this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }

    // Print the stack elements
    print() {
        console.log(this.items.toString())
    }
}

// Usage examples
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // removes 30
console.log(stack.peek()); // shows 20 sice 30 has been removed
console.log(stack.size()); // shows 2 because 10 and 20 are the only elements left

stack.print(); // 10, 20
stack.clear(); // empty
console.log(stack.isEmpty()) // returns True

// Time complexity for all operations is O(1) except print() which is O(n)
// Space complexity is O(n)