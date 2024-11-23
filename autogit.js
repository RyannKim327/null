import heapq

def beam_search(initial_state, beam_width, max_steps, get_next_states, evaluate):
    beam = [(initial_state, 0)]
    
    for _ in range(max_steps):
        next_beam = []
        for state, score in beam:
            for next_state in get_next_states(state):
                next_score = score + evaluate(next_state)
                heapq.heappush(next_beam, (next_state, next_score))
        
        beam = heapq.nlargest(beam_width, next_beam, key=lambda x: x[1])
    
    return beam

# Example usage
def get_next_states(state):
    return [state + 1, state - 1]

def evaluate(state):
    return -abs(state - 10)

initial_state = 5
beam_width = 2
max_steps = 3

result = beam_search(initial_state, beam_width, max_steps, get_next_states, evaluate)
print(result)
