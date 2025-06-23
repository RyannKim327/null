type State = any; // Replace `any` with the specific type of your state
type Score = number;

interface BeamNode {
  state: State;
  score: Score;
}

function beamSearch(
  initialState: State,
  getSuccessors: (state: State) => BeamNode[],
  isGoal: (state: State) => boolean,
  beamWidth: number,
  maxDepth: number
): State | null {
  // Initialize the beam with the initial state
  let beam: BeamNode[] = [{ state: initialState, score: 0 }];

  for (let depth = 0; depth < maxDepth; depth++) {
    const allSuccessors: BeamNode[] = [];

    // Expand all states in the current beam
    for (const node of beam) {
      const successors = getSuccessors(node.state);
      for (const successor of successors) {
        // Accumulate the score from the parent node
        successor.score += node.score;
        allSuccessors.push(successor);
      }
    }

    // If no successors are generated, terminate early
    if (allSuccessors.length === 0) {
      break;
    }

    // Sort successors by score in descending order
    allSuccessors.sort((a, b) => b.score - a.score);

    // Select the top `beamWidth` successors to form the new beam
    beam = allSuccessors.slice(0, beamWidth);

    // Check if any state in the new beam satisfies the goal condition
    for (const node of beam) {
      if (isGoal(node.state)) {
        return node.state; // Return the goal state
      }
    }
  }

  // If no goal state is found within the depth limit, return null
  return null;
}
type GridState = { x: number; y: number };

// Define a simple grid world
const grid = [
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

const initialState: GridState = { x: 0, y: 0 };
const goalState: GridState = { x: 3, y: 3 };

// Function to get valid successors
function getSuccessors(state: GridState): BeamNode[] {
  const directions = [
    { dx: 1, dy: 0 }, // Right
    { dx: -1, dy: 0 }, // Left
    { dx: 0, dy: 1 }, // Down
    { dx: 0, dy: -1 }, // Up
  ];

  const successors: BeamNode[] = [];
  for (const { dx, dy } of directions) {
    const newX = state.x + dx;
    const newY = state.y + dy;

    if (
      newX >= 0 &&
      newX < grid.length &&
      newY >= 0 &&
      newY < grid[0].length &&
      grid[newX][newY] === 0
    ) {
      successors.push({ state: { x: newX, y: newY }, score: -1 }); // Penalize each move
    }
  }
  return successors;
}

// Function to check if the goal is reached
function isGoal(state: GridState): boolean {
  return state.x === goalState.x && state.y === goalState.y;
}

// Perform beam search
const result = beamSearch(initialState, getSuccessors, isGoal, 2, 10);
console.log(result); // Output: { x: 3, y: 3 } or null if no path is found
