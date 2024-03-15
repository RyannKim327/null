class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(name, neighbors) {
    this.nodes[name] = neighbors;
  }

  biDirectionalSearch(startNode, goalNode) {
    let visitedFromStart = {};
    let visitedFromGoal = {};
    let queueFromStart = [startNode];
    let queueFromGoal = [goalNode];

    visitedFromStart[startNode] = true;
    visitedFromGoal[goalNode] = true;

    while (queueFromStart.length > 0 && queueFromGoal.length > 0) {
      const currentStart = queueFromStart.shift();
      const currentGoal = queueFromGoal.shift();

      if (currentStart in visitedFromGoal || currentStart === goalNode) {
        console.log("Path found!");
        return;
      }

      if (currentGoal in visitedFromStart || currentGoal === startNode) {
        console.log("Path found!");
        return;
      }

      for (let neighbor of this.nodes[currentStart]) {
        if (!visitedFromStart[neighbor]) {
          visitedFromStart[neighbor] = true;
          queueFromStart.push(neighbor);
        }
      }

      for (let neighbor of this.nodes[currentGoal]) {
        if (!visitedFromGoal[neighbor]) {
          visitedFromGoal[neighbor] = true;
          queueFromGoal.push(neighbor);
        }
      }
    }

    console.log("Path not found.");
  }
}

// Example usage
const graph = new Graph();
graph.addNode('A', ['B']);
graph.addNode('B', ['C', 'D']);
graph.addNode('C', ['E']);
graph.addNode('D', ['E']);
graph.addNode('E', ['F']);
graph.addNode('F', []);

graph.biDirectionalSearch('A', 'F');
