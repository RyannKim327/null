function beamSearch(initialState, beamWidth, maxDepth, getNextStatesFn, heuristicFn) {
    let open = [{ state: initialState, score: 0 }];
    let closed = [];

    for (let depth = 0; depth < maxDepth; depth++) {
        let nextOpen = [];

        for (let i = 0; i < open.length; i++) {
            let current = open[i].state;
            let currentScore = open[i].score;

            let nextStates = getNextStatesFn(current);

            for (let j = 0; j < nextStates.length; j++) {
                let nextState = nextStates[j];
                let nextStateScore = currentScore + heuristicFn(nextState);

                nextOpen.push({ state: nextState, score: nextStateScore });
            }
        }

        nextOpen.sort((a, b) => b.score - a.score);
        open = nextOpen.slice(0, beamWidth);

        closed = closed.concat(open);
    }

    return closed;
}
