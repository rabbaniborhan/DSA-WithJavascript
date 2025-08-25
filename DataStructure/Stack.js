//A Stack is a linear data structure that follows the LIFO (Last In, First Out) principle.

class Stack {
  constructor() {
    this.items = [];
  }

  // Push element
  push(element) {
    this.items.push(element);
  }

  // Pop element
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  // Peek top element
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }

  // Check empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size
  size() {
    return this.items.length;
  }

  // Print stack
  print() {
    console.log(this.items.toString());
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // 30
stack.pop();
stack.print(); // 10,20
