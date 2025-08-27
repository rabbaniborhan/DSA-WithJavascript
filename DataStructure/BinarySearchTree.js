// 🌳 Binary Search Tree (BST)

// A Binary Search Tree is a special type of binary tree where:
// Each node has at most 2 children (left and right).
// Left child contains values smaller than the parent.
// Right child contains values greater than the parent.
// No duplicate values are allowed (in standard BST).

// Node structure
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BST class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert value
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // Search value
  search(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  // Inorder traversal (sorted order)
  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }
}

// Usage
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("Search 40:", bst.search(40)); // true
console.log("Search 90:", bst.search(90)); // false

console.log("Inorder Traversal:");
bst.inorder(); // 20, 30, 40, 50, 60, 70, 80
