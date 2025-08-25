//A Queue is a linear data structure that follows the FIFO (First In, First Out) principle.

class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue (add element at rear)
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue (remove element from front)
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  // Peek (front element)
  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  // Check empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size
  size() {
    return this.items.length;
  }

  // Print queue
  print() {
    console.log(this.items.toString());
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.front()); // 10
queue.dequeue();
queue.print(); // 20,30
