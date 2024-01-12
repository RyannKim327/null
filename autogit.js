function depthLimitedSearch(state, depthLimit, goalTest) {
    // ...
}
function recursiveDLS(state, depthLimit, goalTest) {
    // ...
}
function recursiveDLS(state, depthLimit, goalTest) {
    if (goalTest(state)) {
        return state;
    }
    // ...
}
function recursiveDLS(state, depthLimit, goalTest) {
    if (goalTest(state)) {
        return state;
    }
    if (depthLimit === 0) {
        return null;
    }
    // ...
}
function recursiveDLS(state, depthLimit, goalTest) {
    if (goalTest(state)) {
        return state;
    }
    if (depthLimit === 0) {
        return null;
    }
    
    const actions = getActions(state);
    for (let i = 0; i < actions.length; i++) {
        const resultingState = // apply action to current state;
        const result = recursiveDLS(resultingState, depthLimit - 1, goalTest);
        if (result !== null) {
            return result;
        }
    }
    
    return null;
}
function getActions(state) {
    // ...
}
const initial_state = // define initial state;
const depth_limit = // define depth limit;

const goalTest = (state) => {
    // define your own goal test logic
    // return true if the state is a goal state, else false
};

const result = depthLimitedSearch(initial_state, depth_limit, goalTest);
console.log(result);
