/*
Queue and Dequeue

A queue is a data structure that follows first-in-first-out (FIFO), where the first element added is the first one to be removed 
*/

class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the back
    enqueue(element) {
        this.items.push(element);
    }

    // Remove an element from the front
    dequeue() {
        if(this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Check element at the front
    front() {
        if(this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Check element at the end
    rear() {
        if(this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Print the elements in the queue
    printQueue() {
        return this.items.join(" ");
    }

    // Find the middle of the queue
    middle() {
        if(this.isEmpty()) {
            return "Queue is empty";
        }
        const middleIndex = Math.floor((this.size()-1)/2);
        return this.items[middleIndex];
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.printQueue());
console.log(queue.front());
console.log(queue.rear());

queue.dequeue();
console.log(queue.printQueue());

queue.enqueue();
console.log(queue.printQueue());

console.log(queue.size());
console.log(queue.middle());

// Enqueue: Time Complexity - O(1), Space Complexity: O(n)
// Dequeue: Time Complexity - O(n), Space Complexity: O(n)