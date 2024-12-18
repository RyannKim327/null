BFS(graph, start_node):
    visited = {}  // A set to keep track of visited nodes
    queue = Queue()  // Initialize a queue data structure
    queue.enqueue(start_node)  // Enqueue the start node
    
    while queue is not empty:
        current_node = queue.dequeue()
        
        if current_node is not in visited:
            visited.add(current_node)
            
            // Process the node (e.g., print it)
            print(current_node)
            
            for each neighbor in graph.neighbors(current_node):
                if neighbor is not in visited:
                    queue.enqueue(neighbor)
