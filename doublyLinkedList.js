/* 
Doubly Linked List 

This is a type of linked list where each node contains a reference to both the next node and the previous node in the sequence. 
This allows for traversal in both directions

Each node has three components 
    - Data: value or data held by the node
    - Next: a reference to the next node on the list
    - Prev: a reference to the previous node on the list

Head - a reference to the first node on the list
Tail - a reference to the last node on the list

Time Complexity: 
    - append: O(1)
    - prepend: O(1)
    - remove: O(n)
    - printForward: O(n)
    - printBackward: O(n)

Space Complexity: O(n)
*/

class Node {
    constructor(data) {
        this.data = data; // value held by the node
        this.next = null; // reference the next node
        this.prev = null; // reference the previous node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; // reference to the first node in the list
        this.tail = null; // reference to the last node in the list
    }

    // Method to append a new node to the end of the list
    append(data) {
        const newNode = new Node(data); // create a new node with the given data
        if (this.head === null) { // check if the list is empty
            this.head = newNode; // if empty, set head to the new node
            this.tail = newNode; // set tail to the new node since it's the only node
        } else {
            this.tail.next = newNode; // link the current tail's next to the new node
            newNode.prev = this.tail; // link the new node's previous to the current tail
            this.tail = newNode; // update the tail to be the new node
        }
    }

    // Method to add a new node to the beginning of the list
    prepend(data) {
        const newNode = new Node(data); // create a new node with the given data
        if (this.head === null) { // check if the list is empty
            this.head = newNode; // if empty, set head to the new node
            this.tail = newNode; // set tail to the new node since it's the only node
        } else {
            newNode.next = this.head; // link the new node's next to the current head
            this.head.prev = newNode; // link the current head's previous to the new node
            this.head = newNode; // update the head to be the new node
        }
    }

    // Method to remove the first node with the specified data
    remove(data) {
        let current = this.head; // start at the head of the list
        while (current) { // traverse the list until the end
            if (current.data === data) { // check if the current node contains the target data
                if (current.prev) { // if the node is not the head
                    current.prev.next = current.next; // bypass the current node
                } else {
                    this.head = current.next; // update head if the current node is the head
                }
                if (current.next) { // if the node is not the tail
                    current.next.prev = current.prev; // bypass the current node
                } else {
                    this.tail = current.prev; // update tail if the current node is the tail
                }
                return true; // return true indicating the node was found and removed
            }
            current = current.next; // move to the next node
        }
        return false; // return false if the node with the specified data was not found
    }

    // Method to print all nodes from head to tail
    printForward() {
        let current = this.head; // start at the head of the list
        while (current) { // traverse the list until the end
            console.log(current.data); // print data at the current node
            current = current.next; // move to the next node
        }
    }

    // Method to print all nodes from tail to head
    printBackward() {
        let current = this.tail; // start at the tail of the list
        while (current) { // traverse the list until the start
            console.log(current.data); // print data at the current node
            current = current.prev; // move to the previous node
        }
    }
}

// Example usage
const list = new DoublyLinkedList(); // create a new doubly linked list
list.append(1); // append node with data 1
list.append(2); // append node with data 2
list.prepend(0); // prepend node with data 0
console.log("Print forward:"); // print a message for clarity
list.printForward(); // print all nodes from head to tail
console.log("Print backward:"); // print a message for clarity
list.printBackward(); // print all nodes from tail to head
list.remove(1); // remove the node with data 1
console.log("After removing 1:"); // print a message for clarity
list.printForward(); // print all nodes from head to tail again