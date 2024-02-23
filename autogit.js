class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function biDirectionalSearch(startNode, goalNode) {
  let startQueue = [startNode];
  let goalQueue = [goalNode];
  let startVisited = new Set();
  let goalVisited = new Set();

  while (startQueue.length > 0 && goalQueue.length > 0) {
    const startCurr = startQueue.shift();
    const goalCurr = goalQueue.shift();

    if (startVisited.has(goalCurr.value)) {
      console.log("Node found!");
      return true;
    }

    if (goalVisited.has(startCurr.value)) {
      console.log("Node found!");
      return true;
    }

    startVisited.add(startCurr.value);
    goalVisited.add(goalCurr.value);

    for (let child of startCurr.children) {
      if (!startVisited.has(child.value)) {
        startQueue.push(child);
      }
    }

    for (let child of goalCurr.children) {
      if (!goalVisited.has(child.value)) {
        goalQueue.push(child);
      }
    }
  }

  console.log("Node not found!");
  return false;
}

// Example usage
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.children.push(b, c);
b.children.push(d);
c.children.push(d);

biDirectionalSearch(a, d);
