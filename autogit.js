Algorithm:
1. Initialize two pointers, slow_ptr and fast_ptr, to the start of the linked list.
2. Move slow_ptr by one step and fast_ptr by two steps in each iteration.
3. If there is a cycle in the linked list, the two pointers will meet at some point.
4. If they meet, it means that the linked list contains a cycle; otherwise, if fast_ptr reaches the end of the list, there is no cycle.

Pseudocode:
function has_cycle(head):
    slow_ptr = head
    fast_ptr = head

    while fast_ptr is not null and fast_ptr.next is not null:
        slow_ptr = slow_ptr.next
        fast_ptr = fast_ptr.next.next

        if slow_ptr is equal to fast_ptr:
            return true

    return false
