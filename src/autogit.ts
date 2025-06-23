type State = {
  value: string; // Example: Represents the state (could be a string, array, etc.)
  score: number; // Heuristic score for the state
};

type SuccessorFunction = (state: State) => State[];
type TerminationCondition = (state: State) => boolean;

function beamSearch(
  initialState: State,
  beamWidth: number,
  successorFunction: SuccessorFunction,
  terminationCondition: TerminationCondition
): State | null {
  let beam: State[] = [initialState];

  while (beam.length > 0) {
    const allSuccessors: State[] = [];

    // Expand all states in the current beam
    for (const state of beam) {
      const successors = successorFunction(state);
      allSuccessors.push(...successors);
    }

    // Sort successors by their score in descending order
    allSuccessors.sort((a, b) => b.score - a.score);

    // Check if any successor meets the termination condition
    for (const successor of allSuccessors) {
      if (terminationCondition(successor)) {
        return successor; // Return the first solution found
      }
    }

    // Retain only the top `beamWidth` successors
    beam = allSuccessors.slice(0, beamWidth);
  }

  // No solution found
  return null;
}

// Example Usage
const initialState: State = { value: "start", score: 0 };

const successorFunction: SuccessorFunction = (state) => {
  // Example: Generate 3 random successors for demonstration
  return Array.from({ length: 3 }, (_, i) => ({
    value: `${state.value}->${i}`,
    score: Math.random(), // Random score for simplicity
  }));
};

const terminationCondition: TerminationCondition = (state) => {
  // Example: Terminate if the state value contains "goal"
  return state.value.includes("goal");
};

const result = beamSearch(initialState, 2, successorFunction, terminationCondition);

if (result) {
  console.log("Solution Found:", result);
} else {
  console.log("No solution found.");
}
