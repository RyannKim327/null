class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = [];
  }

  addEdge(node1, node2, cost) {
    this.edges[node1].push({ node: node2, cost });
    this.edges[node2].push({ node: node1, cost });
  }
}

class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    this.elements.push({ element, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.elements.shift().element;
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

function heuristic(node1, node2) {
  // Calculate the Euclidean distance between two nodes as the heuristic function
  return Math.sqrt((node1.x - node2.x) ** 2 + (node1.y - node2.y) ** 2);
}

function astar(graph, start, goal) {
  let cameFrom = {};
  let costSoFar = {};
  let frontier = new PriorityQueue();

  frontier.enqueue(start, 0);
  cameFrom[start] = null;
  costSoFar[start] = 0;

  while (!frontier.isEmpty()) {
    let current = frontier.dequeue();

    if (current === goal) {
      break;
    }

    for (let { node, cost } of graph.edges[current]) {
      let newCost = costSoFar[current] + cost;
      if (!(node in costSoFar) || newCost < costSoFar[node]) {
        costSoFar[node] = newCost;
        let priority = newCost + heuristic(goal, node);
        frontier.enqueue(node, priority);
        cameFrom[node] = current;
      }
    }
  }

  let path = [goal];
  while (path[path.length - 1] !== start) {
    path.push(cameFrom[path[path.length - 1]]);
  }
  
  return path.reverse();
}

// Usage example
let graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 3);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "D", 1);

let path = astar(graph, "A", "D");
console.log(path);
