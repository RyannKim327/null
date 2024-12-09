import numpy as np

def beam_search(start, max_width, get_next_states, score_fn):
    beams = [(start, 0)]
    
    for _ in range(max_width):
        next_beams = []
        for beam, score in beams:
            states = get_next_states(beam)
            for next_state in states:
                next_score = score_fn(next_state)
                next_beams.append((next_state, score + next_score))
        
        next_beams.sort(key=lambda x: x[1], reverse=True)
        beams = next_beams[:max_width]
    
    return beams

# Example usage
def get_next_states(state):
    return [state + 1, state + 2]

def score_fn(state):
    return state

start_state = 0
max_width = 3
best_beams = beam_search(start_state, max_width, get_next_states, score_fn)

print("Best beams:")
for state, score in best_beams:
    print(f"State: {state}, Score: {score}")
