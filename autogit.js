class Node:
    def __init__(self, data):
        self.data = data
        self.children = []

    def add_child(self, child):
        self.children.append(child)

def depth_limited_search(root, goal, depth_limit):
    frontier = [(root, 0)]
    
    while frontier:
        node, depth = frontier.pop()
        
        if node.data == goal:
            return node
        
        if depth < depth_limit:
            for child in node.children:
                frontier.append((child, depth + 1))
    
    return None

# Creating a sample tree
root = Node(1)
child1 = Node(2)
child2 = Node(3)
child3 = Node(4)
root.add_child(child1)
root.add_child(child2)
child2.add_child(child3)

# Performing depth-limited search
result = depth_limited_search(root, 4, 2)

if result:
    print("Node found: ", result.data)
else:
    print("Node not found within depth limit")
