def depth_limited_searchInitialState, actions, goal_test, depth_limit):
    stack = [(initial_state, 0)]  # (state, depth)
    while stack:
        state, depth = stack.pop()
        if goal_test(state):
            return state
        if depth < depth_limit:
            for action in actions(state):
                stack.append((action(state), depth + 1))
    return None
public class DepthLimitedSearch {
    public static State search(State initialState, List<Action> actions, GoalTest goalTest, int depthLimit) {
        Stack<StateDepth> stack = new Stack<>();
        stack.push(new StateDepth(initialState, 0));
        while (!stack.isEmpty()) {
            StateDepth stateDepth = stack.pop();
            State state = stateDepth.state;
            int depth = stateDepth.depth;
            if (goalTest.test(state)) {
                return state;
            }
            if (depth < depthLimit) {
                for (Action action : actions.getActions(state)) {
                    stack.push(new StateDepth(action.apply(state), depth + 1));
                }
            }
        }
        return null;
    }
}

class StateDepth {
    State state;
    int depth;

    public StateDepth(State state, int depth) {
        this.state = state;
        this.depth = depth;
    }
}
#include <stack>

State depthLimitedSearch(State initialState, Actions actions, GoalTest goalTest, int depthLimit) {
    std::stack<std::pair<State, int>> stack;
    stack.push(std::make_pair(initialState, 0));
    while (!stack.empty()) {
        std::pair<State, int> stateDepth = stack.top();
        stack.pop();
        State state = stateDepth.first;
        int depth = stateDepth.second;
        if (goalTest.test(state)) {
            return state;
        }
        if (depth < depthLimit) {
            for (Action action : actions.getActions(state)) {
                stack.push(std::make_pair(action.apply(state), depth + 1));
            }
        }
    }
    return nullptr;
}
function depthLimitedSearch(initialState, actions, goalTest, depthLimit) {
    const stack = [{ state: initialState, depth: 0 }];
    while (stack.length > 0) {
        const { state, depth } = stack.pop();
        if (goalTest(state)) {
            return state;
        }
        if (depth < depthLimit) {
            for (const action of actions(state)) {
                stack.push({ state: action(state), depth: depth + 1 });
            }
        }
    }
    return null;
}
