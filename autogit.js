function beamSearch(initialPath, beamWidth, scoreFn, generateNextStepsFn) {
  let beam = [initialPath];

  while (beam.length > 0) {
    const candidates = [];

    for (const path of beam) {
      const nextSteps = generateNextStepsFn(path);

      for (const step of nextSteps) {
        const candidatePath = path.concat([step]);
        const score = scoreFn(candidatePath);
        candidates.push({ path: candidatePath, score });
      }
    }

    candidates.sort((a, b) => b.score - a.score);
    beam = candidates.slice(0, beamWidth).map(candidate => candidate.path);
  }

  return beam[0]; // Return the best path
}
