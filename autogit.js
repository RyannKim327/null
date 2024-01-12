function beamSearch(initialState, expandFunction, evaluateFunction, beamWidth, maxLength) {
  let currentSet = [{ sequence: initialState, score: 0 }];
  let finishedSequences = [];

  for (let length = 0; length < maxLength; length++) {
    let newSet = [];

    for (let i = 0; i < currentSet.length; i++) {
      let { sequence, score } = currentSet[i];

      let expansions = expandFunction(sequence);
      expansions.forEach(expansion => {
        let newSequence = sequence.concat(expansion);
        let newScore = score + evaluateFunction(newSequence);

        newSet.push({
          sequence: newSequence,
          score: newScore
        });
      });
    }

    newSet.sort((a, b) => b.score - a.score);
    currentSet = newSet.slice(0, beamWidth);

    currentSet.forEach(sequenceObj => {
      if (sequenceObj.sequence.length === maxLength) {
        finishedSequences.push(sequenceObj);
      }
    });

    if (currentSet.length === 0) {
      break;
    }
  }

  finishedSequences.sort((a, b) => b.score - a.score);
  return finishedSequences[0].sequence;
}

// Example usage
const initialState = [];
const expandFunction = (sequence) => ['A', 'B', 'C'];
const evaluateFunction = (sequence) => Math.random(); // Replace with your evaluation function
const beamWidth = 3;
const maxLength = 5;

const result = beamSearch(initialState, expandFunction, evaluateFunction, beamWidth, maxLength);
console.log(result);
