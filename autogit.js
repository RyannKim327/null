function beamSearch(initialState, k, generateSuccessors, scoreFunction) {
  // Initialization
  let beam = [initialState];
  
  // Beam expansion loop
  while (beam[0] && beam[0].score !== Infinity) {
    let newBeam = [];

    // Generate successors for each state in the current beam
    for (let state of beam) {
      let successors = generateSuccessors(state);

      // Calculate score for each successor state
      for (let successor of successors) {
        successor.score = scoreFunction(successor);
      }

      // Sort successors based on score
      successors.sort((a, b) => b.score - a.score);

      // Add top k successors to the new beam
      newBeam.push(...successors.slice(0, k));
    }
    
    // Sort new beam based on score
    newBeam.sort((a, b) => b.score - a.score);

    // Keep only the top k states from the new beam
    beam = newBeam.slice(0, k);
  }

  // Return the states in the final beam
  return beam;
}
// Example problem-specific functions
function generateSuccessors(state) {
  // Generate and return array of successor states based on the current state
  // ...
}

function scoreFunction(state) {
  // Calculate and return a numerical score for the state
  // ...
}

// Usage
const initialState = { /* Initial state object */ };
const beamWidth = 3;
const result = beamSearch(initialState, beamWidth, generateSuccessors, scoreFunction);

console.log(result);
