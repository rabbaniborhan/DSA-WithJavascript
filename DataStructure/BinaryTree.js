//A Binary Tree is a data structure where each node has at most two children:

// Left child

// Right child

//🏗 Structure of a Binary Tree Node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null; // left child
    this.right = null; // right child
  }
}

//Example: Binary Tree Creation

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Traversals
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.value);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }
}

// Usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);

console.log("Inorder Traversal:");
tree.inorder(tree.root); // 3, 5, 10, 15
