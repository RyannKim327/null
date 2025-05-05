type State = any; // Replace with the actual state type

interface ScoredState {
  state: State;
  score: number;
}

// Example signatures you need to provide:
type SuccessorFn = (state: State) => State[];
type ScorerFn = (state: State) => number;
type GoalFn = (state: State) => boolean;

function beamSearch(
  startStates: State[],         // multiple start points if you want, or one wrapped in array
  successorFn: SuccessorFn,
  scorerFn: ScorerFn,
  beamWidth: number,
  maxSteps: number,
  goalFn?: GoalFn
): State | null {
  // Initialize the beam with scored states from starting states
  let beam: ScoredState[] = startStates.map(state => ({
    state,
    score: scorerFn(state)
  }));

  for (let step = 0; step < maxSteps; step++) {
    const allCandidates: ScoredState[] = [];

    // Expand each state in the beam
    for (const scoredState of beam) {
      const nextStates = successorFn(scoredState.state);
      for (const nextState of nextStates) {
        const score = scorerFn(nextState);
        allCandidates.push({ state: nextState, score });
      }
    }

    // Sort all candidates by score descending
    allCandidates.sort((a, b) => b.score - a.score);

    // Keep only top beamWidth candidates
    beam = allCandidates.slice(0, beamWidth);

    // Check if any candidate satisfies the goal function
    if (goalFn) {
      const found = beam.find(({ state }) => goalFn(state));
      if (found) return found.state;
    }

    // If no successors or beam is empty, stop early
    if (beam.length === 0) break;
  }

  // Return best state if goal wasn't found
  if (beam.length > 0) {
    return beam[0].state;
  }

  return null;
}
const start = [''];

const successors = (state: string): string[] => [state + 'A', state + 'B'];

const scorer = (state: string): number =>
  state.split('').filter(ch => ch === 'A').length;

const goal = (state: string): boolean => state.length === 5 && state.endsWith('A');

const result = beamSearch(start, successors, scorer, 3, 10, goal);

console.log('Best found:', result);
