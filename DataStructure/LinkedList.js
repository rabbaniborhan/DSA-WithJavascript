//A Linked List is a linear data structure where elements (nodes) are connected using pointers/references instead of being stored in consecutive memory like array

// 🔹 Types of Linked Lists

// Singly Linked List → Each node points to the next.

// Doubly Linked List → Each node points to both next and previous.

// Circular Linked List → The last node points back to the first node.

//🔹 Singly Linked List (Implementation in JS)
// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // points to next node
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null; // first node
    this.size = 0;
  }

  // Insert at end
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode; // first node
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; // go to last node
      }
      current.next = newNode; // attach new node
    }
    this.size++;
  }

  // Insert at beginning
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head; // new node points to old head
    this.head = newNode; // make new node the head
    this.size++;
  }

  // Print linked list
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// Example
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.print(); // 5 -> 10 -> 20 -> null

//🔹 Doubly Linked List (Short Example)
class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new DoublyNode(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " <-> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// Example
const dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.print(); // 1 <-> 2 <-> 3 <-> null
