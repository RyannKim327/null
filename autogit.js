def beam_search(initial_state, beam_width, max_depth):
    beam = [initial_state]
    
    for _ in range(max_depth):
        new_beam = []
        for state in beam:
            actions = generate_actions(state)
            for action in actions:
                new_state = apply_action(state, action)
                new_beam.append(new_state)
        
        new_beam = sorted(new_beam, key=lambda x: heuristic_function(x))[:beam_width]
        beam = new_beam
        
    return beam
