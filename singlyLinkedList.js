/* 
Singly Linked List
A data structure that is made up of nodes, each containing data and a pointer to the next node
Can only be traveresed from head to tail
*/

class Node {
    constructor(data) {
        this.data = data; // store the data value of the node
        this.next = null; // set the pointer (next) to null (no next node initially)
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; // initialize the head of the list as null (empty list)
    }

    // Method to add a node at the end of the list
    append(data) {
        const newNode = new Node(data); // create a new node with the given data
        if(this.head === null) { // check if the list is empty (no head node)
            this.head = newNode; // if empty, set the new node as the head
        } else {
            let current = this.head; // start traversal from the head of the list
            while(current.next !== null) { // keep moving to the next node until reaching the end of the list
                current = current.next; // move to the next node in the list
            }
            current.next = newNode; // set the last node's next pointer to the new node, appending it to the list
        }
    }

    // Method to remove a node with a specific value from the list
    remove(value) {
        if(this.head === null) return; // if the list is empty, do nothing
        // if the head node holds the value to be removed
        if (this.head.data === value) {
            this.head = this.head.next; // set the head to the next node, effectively removing the first node
            return; // exit after removing the node
        }
        // otherwise, traverse the list to find the node to remove
        let current = this.head; // start traversal from the head
        // move through the list until you find the node whose next node contains the value
        while(current.next !== null && current.next.data !== value) {
            current = current.next; // move to the next node
        } 
        // if the node with the value is found (current.next is not null)
        if(current.next !== null) {
            current.next = current.next.next; // bypass the node to remove it by pointing to the next-next node
        }
    }

    // Method to display all nodes in the list
    display() {
        let current = this.head; // start from the head node
        while(current !== null) { // keep traversing until the end of the list
            console.log(current.data); // output the data of the current node
            current = current.next; // move to the next node
        }
    }
}

const list = new SinglyLinkedList();

// Append some nodes to the list
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

// Display the list
list.display(); // This will print: 1 2 3 4 5

// Remove the node with the value 3
list.remove(3);

// Display the list again to confirm removal
list.display(); // This will print: 1 2 4 5

// Append a new node with the value 6
list.append(6);

// Display the list again to confirm the new node is added
list.display(); // This will print: 1 2 4 5 6

/*
Time Complexity: 
    - append(data): O(n)
    - remove(value): O(n)
    - display(): O(n)

Space Complexity:
    - append(data): O(1)
    - remove(value): O(1)
    - display(): O(1)
*/