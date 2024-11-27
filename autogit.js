from queue import PriorityQueue

def beam_search(start_state, beam_width, max_steps, goal_state):
    agenda = PriorityQueue()
    agenda.put(start_state)
    
    for _ in range(max_steps):
        new_agenda = PriorityQueue()
        
        while not agenda.empty():
            state = agenda.get()
            
            if state == goal_state:
                return state
            
            successors = state.generate_successors()
            for successor in successors:
                new_agenda.put(successor)
            
        agenda = new_agenda
        
        # Keep only the top beam_width states
        top_states = []
        for _ in range(beam_width):
            if not agenda.empty():
                top_states.append(agenda.get())
            else:
                break
        for state in top_states:
            agenda.put(state)
    
    return None
