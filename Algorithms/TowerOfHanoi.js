function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  // Step 1: Move n-1 disks to helper rod
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);

  // Step 2: Move largest disk to destination rod
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

  // Step 3: Move n-1 disks from helper to destination rod
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

// Example: Solve for 3 disks
towerOfHanoi(3, "A", "C", "B");
