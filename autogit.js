class Node:
    def __init__(self, start_index, end_index):
        self.start_index = start_index
        self.end_index = end_index
        self.children = {}
        self.suffix_link = None

def build_suffix_tree(s):
    root = Node(-1, -1)
    root.suffix_link = root
    last_new_node = root
    active_node = root
    active_edge = 0
    active_length = 0
    remaining_suffix_count = 0
    leaf_end = [-1]

    def extend_suffix_tree(pos):
        nonlocal last_new_node, active_node, active_edge, active_length, remaining_suffix_count
        leaf_end[0] = pos
        remaining_suffix_count += 1
        last_new_node = None

        while remaining_suffix_count > 0:
            if active_length == 0:
                active_edge = pos

            if active_node.children.get(s[active_edge]) is None:
                active_node.children[s[active_edge]] = Node(pos, float('inf'))
                if last_new_node is not None:
                    last_new_node.suffix_link = active_node
                    last_new_node = None

            next_node = active_node.children[s[active_edge]]
            edge_length = next_node.end_index - next_node.start_index
            if active_length >= edge_length:
                active_edge += edge_length
                active_length -= edge_length
                active_node = next_node
                continue

            if s[next_node.start_index + active_length] == s[pos]:
                active_length += 1
                if last_new_node is not None and active_node != root:
                    last_new_node.suffix_link = active_node
                    last_new_node = None
                break

            split_end = next_node.start_index + active_length - 1
            split_node = Node(next_node.start_index, split_end)
            active_node.children[s[active_edge]] = split_node
            split_node.children[s[pos]] = Node(pos, float('inf'))
            next_node.start_index += active_length
            split_node.children[s[next_node.start_index]] = next_node

            if last_new_node is not None:
                last_new_node.suffix_link = split_node

            last_new_node = split_node

        remaining_suffix_count -= 1

        if active_node == root and active_length > 0:
            active_length -= 1
            active_edge = pos - remaining_suffix_count + 1
        elif active_node != root:
            active_node = active_node.suffix_link

    for i in range(len(s)):
        extend_suffix_tree(i)

    return root
