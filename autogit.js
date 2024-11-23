import heapq

def beam_search(initial_state, beam_width, max_steps):
    beam = [(0, [initial_state])]
    
    for _ in range(max_steps):
        new_beam = []
        for score, sequence in beam:
            if is_terminal(sequence):
                continue

            next_states = generate_next_states(sequence)
            for state, state_score in next_states:
                new_seq = sequence + [state]
                new_score = score + state_score
                heapq.heappush(new_beam, (new_score, new_seq))

        beam = heapq.nlargest(beam_width, new_beam)

    return beam

# Example helper functions
def is_terminal(sequence):
    return False

def generate_next_states(sequence):
    return [(1, 1), (2, 2)]

initial_state = 0
beam_width = 2
max_steps = 3

result = beam_search(initial_state, beam_width, max_steps)
for score, sequence in result:
    print(score, sequence)
