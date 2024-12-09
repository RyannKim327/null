def find_nth_from_end(head, n):
    p1 = head
    p2 = head

    # Move p2 n steps ahead
    for _ in range(n):
        if p2 is None:
            return None
        p2 = p2.next

    # Move p1 and p2 simultaneously until p2 reaches the end
    while p2 is not None:
        p1 = p1.next
        p2 = p2.next

    return p1
