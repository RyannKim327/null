from queue import PriorityQueue

def beam_search(initial_state, branching_factor, beam_width, scoring_function):
    beam = PriorityQueue()
    beam.put((scoring_function(initial_state), initial_state))

    while not beam.empty():
        candidates = []
        for _ in range(branching_factor):
            if beam.empty():
                break
            _, state = beam.get()
            if is_goal(state):
                return state
            next_states = generate_next_states(state)
            for next_state in next_states:
                candidates.append((scoring_function(next_state), next_state))
        candidates.sort(key=lambda x: x[0], reverse=True)
        for i in range(min(beam_width, len(candidates))):
            beam.put(candidates[i])

    return None
