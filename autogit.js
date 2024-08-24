import heapq

def beam_search(start_state, get_next_states, evaluate_state, beam_width):
    beam = [(start_state, 0)]
    
    while True:
        next_beam = []
        
        for state, score in beam:
            for next_state in get_next_states(state):
                next_score = evaluate_state(next_state)
                heapq.heappush(next_beam, (next_state, score + next_score))
                
        beam = heapq.nlargest(beam_width, next_beam, key=lambda x: x[1])
        
        if all([evaluate_state(state) == 0 for state, _ in beam]) or len(beam) == 0:
            break
            
    return beam

# Example usage
start_state = ...
get_next_states = ...
evaluate_state = ...
beam_width = 3

result = beam_search(start_state, get_next_states, evaluate_state, beam_width)
print(result)
