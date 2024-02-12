// Step 1: Define the Puzzle or Graph Representation

// Example representation of a grid-based maze
const maze = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

// Step 2: Create a Priority Queue

const PriorityQueue = () => {
  const queue = [];

  const enqueue = (item, priority) => {
    let i = 0;
    while (i < queue.length && queue[i].priority <= priority) {
      i++;
    }
    queue.splice(i, 0, { item, priority });
  };

  const dequeue = () => queue.shift().item;

  const isEmpty = () => queue.length === 0;

  return { enqueue, dequeue, isEmpty };
};

// Step 3: Define the Heuristic Function

const manhattanDistance = (pos, goal) =>
  Math.abs(pos[0] - goal[0]) + Math.abs(pos[1] - goal[1]);

// Step 4: Implement the A* Algorithm

const astar = (maze, start, goal) => {
  const queue = PriorityQueue();
  queue.enqueue(start, 0);

  const visited = new Set();
  visited.add(start.toString());

  const cost = {};
  cost[start.toString()] = 0;

  const parent = {};

  const getNeighbors = ([x, y]) => {
    const neighbors = [];
    if (x > 0 && maze[x - 1][y] === 0) neighbors.push([x - 1, y]);
    if (x < maze.length - 1 && maze[x + 1][y] === 0) neighbors.push([x + 1, y]);
    if (y > 0 && maze[x][y - 1] === 0) neighbors.push([x, y - 1]);
    if (y < maze[0].length - 1 && maze[x][y + 1] === 0) neighbors.push([x, y + 1]);
    return neighbors;
  };

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    if (current.toString() === goal.toString()) {
      // Step 5: Construct the Path
      const path = [goal];
      let node = goal.toString();
      while (parent[node]) {
        path.unshift(parent[node]);
        node = parent[node].toString();
      }
      return path;
    }

    const neighbors = getNeighbors(current);
    for (const neighbor of neighbors) {
      const newCost = cost[current.toString()] + 1;
      if (!visited.has(neighbor.toString()) || newCost < cost[neighbor.toString()]) {
        cost[neighbor.toString()] = newCost;
        const priority = newCost + manhattanDistance(neighbor, goal);
        queue.enqueue(neighbor, priority);
        parent[neighbor.toString()] = current;
        visited.add(neighbor.toString());
      }
    }
  }

  return null; // No path found
};

// Example Usage:
const start = [0, 0];
const goal = [4, 4];
const path = astar(maze, start, goal);
console.log(path); // [[0,0], [0,1], [0,2], [0,3], [0,4], ... , [4,4]]
