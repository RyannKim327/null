type State = any; // Replace `any` with the specific type of your state
type Score = number;

interface BeamSearchOptions {
  beamWidth: number; // Number of top candidates to keep
  maxSteps: number; // Maximum number of steps to run the search
}

/**
 * Beam Search Algorithm
 * @param initialState - The starting state(s) for the search.
 * @param expandFunction - A function that generates new states from a given state.
 * @param scoreFunction - A function that evaluates and scores a state.
 * @param isGoalFunction - A function that checks if a state is a goal state.
 * @param options - Configuration options for the beam search.
 * @returns The best state found, or null if no solution is found.
 */
function beamSearch(
  initialState: State[],
  expandFunction: (state: State) => State[],
  scoreFunction: (state: State) => Score,
  isGoalFunction: (state: State) => boolean,
  options: BeamSearchOptions
): State | null {
  let { beamWidth, maxSteps } = options;
  let beam: State[] = initialState;

  for (let step = 0; step < maxSteps; step++) {
    // Expand all states in the current beam
    let candidates: { state: State; score: Score }[] = [];
    for (const state of beam) {
      const newStates = expandFunction(state);
      for (const newState of newStates) {
        candidates.push({ state: newState, score: scoreFunction(newState) });
      }
    }

    // Sort candidates by score in descending order
    candidates.sort((a, b) => b.score - a.score);

    // Retain only the top-k candidates
    beam = candidates.slice(0, beamWidth).map(candidate => candidate.state);

    // Check if any of the current states are goal states
    for (const state of beam) {
      if (isGoalFunction(state)) {
        return state; // Return the first goal state found
      }
    }

    // If the beam is empty, terminate early
    if (beam.length === 0) {
      break;
    }
  }

  // Return the best state found after all steps
  return beam.length > 0 ? beam[0] : null;
}
type GridState = { x: number; y: number };

// Example: Find a path in a 2D grid from (0, 0) to (3, 3)
const initialState: GridState[] = [{ x: 0, y: 0 }];

const expandFunction = (state: GridState): GridState[] => {
  const moves = [
    { dx: 1, dy: 0 }, // Move right
    { dx: 0, dy: 1 }, // Move down
  ];
  return moves.map(({ dx, dy }) => ({ x: state.x + dx, y: state.y + dy }));
};

const scoreFunction = (state: GridState): number => {
  // Higher score for states closer to the goal (3, 3)
  return -(Math.abs(3 - state.x) + Math.abs(3 - state.y));
};

const isGoalFunction = (state: GridState): boolean => {
  return state.x === 3 && state.y === 3;
};

const options: BeamSearchOptions = {
  beamWidth: 2,
  maxSteps: 10,
};

const result = beamSearch(initialState, expandFunction, scoreFunction, isGoalFunction, options);

console.log("Best path found:", result);
