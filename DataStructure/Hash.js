//🔑 Hash-Based Structures

// Hash-based structures use hash functions to map keys to specific memory locations for fast access, insertion, and deletion.

// 1. Hash Table (Hash Map)

// Stores key-value pairs.

// Uses a hash function to compute an index for storing values.

// Handles collisions using chaining (linked lists) or open addressing.

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let char of key) {
      total += char.charCodeAt(0);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      for (let [k, v] of bucket) {
        if (k === key) return v;
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      this.table[index] = bucket.filter(([k]) => k !== key);
    }
  }
}

const table = new HashTable(10);
table.set("name", "Borhan");
table.set("age", 25);
console.log(table.get("name")); // Borhan

// 2. Set (HashSet)

// Stores unique values (no duplicates).

// Order is not guaranteed.

// ✅ Example:

const set = new Set();
set.add(10);
set.add(20);
set.add(10); // duplicate ignored

console.log(set.has(20)); // true
console.log(set.size); // 2
set.delete(10);
console.log(set); // Set { 20 }

// 3. Map (HashMap in JS)

// Similar to objects, but keys can be of any type (objects, functions, primitives).

// Maintains insertion order.

// ✅ Example:

const map = new Map();
map.set("name", "Borhan");
map.set(10, "Age key");
map.set({ x: 1 }, "Object key");

console.log(map.get("name")); // Borhan
console.log(map.has(10)); // true
map.delete("name");
console.log(map.size); // 2

// 4. WeakMap & WeakSet

// WeakMap: Keys must be objects, and they are garbage-collected if not referenced elsewhere.

// WeakSet: Stores objects only, also garbage-collected.

// ✅ Example:

let obj = { id: 1 };
const weakMap = new WeakMap();
weakMap.set(obj, "Hello");
console.log(weakMap.get(obj)); // Hello
obj = null; // Object removed -> weakMap entry cleared
