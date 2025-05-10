type State = any; // Replace with your actual state type

interface ScoredState {
  state: State;
  score: number;
}

function beamSearch(
  initialStates: State[],
  getSuccessors: (state: State) => State[],
  scoreState: (state: State) => number,
  beamWidth: number,
  maxSteps: number
): State[] {
  // Initialize beam with scored initial states
  let beam: ScoredState[] = initialStates.map(state => ({
    state,
    score: scoreState(state),
  }));

  for (let step = 0; step < maxSteps; step++) {
    // Expand each state in beam
    let successors: ScoredState[] = [];

    for (const scoredState of beam) {
      const nextStates = getSuccessors(scoredState.state);
      for (const nextState of nextStates) {
        successors.push({
          state: nextState,
          score: scoreState(nextState),
        });
      }
    }

    if (successors.length === 0) break;  // No more expansions possible

    // Sort successors by score descending (highest first)
    successors.sort((a, b) => b.score - a.score);

    // Keep top beamWidth states
    beam = successors.slice(0, beamWidth);
  }

  // Return the states with highest scores after search
  return beam.map(b => b.state);
}
function getSuccessors(state: number[]): number[][] {
  // Append digits 0-9 to the current sequence
  const successors: number[][] = [];
  for (let i = 0; i <= 9; i++) {
    successors.push([...state, i]);
  }
  return successors;
}

function scoreState(state: number[]): number {
  return state.reduce((sum, digit) => sum + digit, 0);  // sum of digits
}

const initial = [[]];  // Start with empty sequence

const bestSequences = beamSearch(initial, getSuccessors, scoreState, 3, 5);
console.log(bestSequences);
