type State = any;

interface Candidate {
  state: State;
  score: number;  // higher is better
}

function beamSearch(
  initialState: State,
  successorsFn: (state: State) => State[],
  scoreFn: (state: State) => number,
  beamWidth: number,
  maxDepth: number
): State[] {
  let beam: Candidate[] = [{ state: initialState, score: scoreFn(initialState) }];

  for (let depth = 0; depth < maxDepth; depth++) {
    let allSuccessors: Candidate[] = [];

    for (let candidate of beam) {
      const nextStates = successorsFn(candidate.state);

      for (let nextState of nextStates) {
        allSuccessors.push({
          state: nextState,
          score: scoreFn(nextState),
        });
      }
    }

    if (allSuccessors.length === 0) {
      // No more expansions available
      break;
    }

    // Sort all successors by score descending and keep top beamWidth
    allSuccessors.sort((a, b) => b.score - a.score);
    beam = allSuccessors.slice(0, beamWidth);
  }

  // Return the top states found
  return beam.map(c => c.state);
}
const target = 10;

// Initial state is an empty array
const initialState: number[] = [];

// Successor function: add a number between 1 and 3
const successorsFn = (state: number[]): number[][] => {
  return [1, 2, 3].map(x => [...state, x]);
}

// Score function: the closer the sum to target, the higher the score
const scoreFn = (state: number[]) => {
  const sum = state.reduce((a, b) => a + b, 0);
  // Negative absolute distance so higher score means closer sum to target
  return -Math.abs(target - sum);
}

const beamWidth = 2;
const maxDepth = 5;

const results = beamSearch(initialState, successorsFn, scoreFn, beamWidth, maxDepth);
console.log(results);
