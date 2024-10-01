/* 
Binary Tree

A binary tree is a hierarchical data structure where each node has at most 2 children, referred to as the left and right child

Operation	Time Complexity (Best)	    Time Complexity (Worst)	    Space Complexity (Best)	    Space Complexity (Worst)
Insertion	O(log n)	                O(n)	                    O(1)	                    O(n)
Search	    O(log n)	                O(n)	                    O(1)	                    O(n)
Traversal	O(n)	                    O(n)	                    O(log n)	                O(n)

*/

class Node {
    constructor(value) {
        this.value = value; // value stored in the node
        this.left = null; // pointer to the left child
        this.right = null; // pointer to the right child
    }
}

class BinaryTree {
    constructor() {
        this.root = null; // set root node of the tree
    }

    // Method to insert new value
    insert(value) {
        const newNode = new Node(value); // create a new node
        if(this.root === null) { 
            this.root = newNode; 
            return; // if the tree is empty, set the root to the new node
        }
        let current = this.root; // start at the root node
        while(true) {
            if(value < current.value) { // if value is less than the current nodes value
                if(!current.left) { // if there is no left child
                    current.left = newNode; // insert the new node as the left child
                    return; 
                }
                current = current.left; // move to the left child and continue 
            } else { // if the value is greater than or equal to the current nodes value
                if(!current.right) { // if there is no right child
                    current.right = newNode; // insert new node as the right child
                    return; 
                }
                current = current.right; // move to the right child and continue
            }
        }
    }

    // Method to search for a value
    search(value) {
        let current = this.root; // start from the root node
        while(current && current.value !== value) { // if the vlaue is less than the currnet node's value, move to the left child
            current = value < current.value ? current.left : current.right; // otherwise move to the right child
        }
        return current ? current : null; // return if node is found, if not then null
    }

    // In-order traversal (left, root, right)
    inOrderTraversal(node = this.root) { // line called for recursion
        if(node !== null) { // check if the current node is null
            this.inOrderTraversal(node.left); // recursively traverse the left subtree
            console.log(node.value); // print root node
            this.inOrderTraversal(node.right); // recursively traverse right sub tree
        }
    }

    // Pre-order traversal (root, left, right)
    preOrderTraversal(node = this.root) { // line called for recursion
        if(node !== null) { // check if the current node is not null
            console.log(node.value); // print the root node 
            this.preOrderTraversal(node.left); // recursively traverse left
            this.preOrderTraversal(node.right); // recursively traverse right
        }
    }

    // Post-order traversal (left, right, root)
    postOrderTraversal(node = this.root) { // line called for recursion
        if(node !== null) { // check if the current node is not null
            this.preOrderTraversal(node.left); // recursively traverse left
            this.preOrderTraversal(node.right); // recursively traverse right
            console.log(node.value); // print the root node 
        }
    }
}

// Example Usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(20);

console.log("In-order Traversal: ");
tree.inOrderTraversal()

console.log("Pre-order Traversal: ");
tree.preOrderTraversal();

console.log("Post-order traversal");
tree.postOrderTraversal();

console.log("Searching for value 7: ");
console.log(tree.search(7) ? "Found" : "Not Found");