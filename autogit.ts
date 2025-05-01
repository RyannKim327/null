type State = any; // Define your state type here
type ScoredState = { state: State; score: number };

function beamSearch(
  initialStates: State[],
  getSuccessors: (state: State) => State[],
  scoreState: (state: State) => number,
  beamWidth: number,
  isGoal: (state: State) => boolean,
  maxIterations: number = 100
): State | null {
  // Initialize beam with scored initial states
  let beam: ScoredState[] = initialStates.map(state => ({
    state,
    score: scoreState(state),
  }));

  for (let iteration = 0; iteration < maxIterations; iteration++) {
    // Check if any state meets goal
    const goalState = beam.find(({ state }) => isGoal(state));
    if (goalState) {
      return goalState.state;
    }

    // Generate successors of all states in the beam
    let candidates: ScoredState[] = [];
    for (const { state } of beam) {
      const successors = getSuccessors(state);
      for (const succ of successors) {
        candidates.push({ state: succ, score: scoreState(succ) });
      }
    }

    // If no candidates, search failed
    if (candidates.length === 0) {
      return null;
    }

    // Sort candidates by score (descending: higher = better)
    candidates.sort((a, b) => b.score - a.score);

    // Select top beamWidth candidates to form new beam
    beam = candidates.slice(0, beamWidth);
  }

  // Max iterations reached without finding goal
  return null;
}
const initialStates = [{ path: [0], sum: 0 }];

function getSuccessors(state: { path: number[]; sum: number }) {
  const lastIndex = state.path[state.path.length - 1];
  // Move to next index if possible
  const nextIndex = lastIndex + 1;
  if (nextIndex >= numbers.length) return [];
  return [
    { path: [...state.path, nextIndex], sum: state.sum + numbers[nextIndex] },
  ];
}

function scoreState(state: { sum: number }) {
  return state.sum;
}

function isGoal(state: { path: number[] }) {
  return state.path.length === numbers.length;
}

const numbers = [2, 5, 1, 3];
const result = beamSearch(
  initialStates,
  getSuccessors,
  scoreState,
  2, // beamWidth
  isGoal,
  10
);

console.log(result);
