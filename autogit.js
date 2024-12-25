def find_intersection(list1, list2):
    set1 = set()
    set2 = set()
    
    # Store elements of list1 in set1
    current = list1.head
    while current:
        set1.add(current.data)
        current = current.next
    
    # Store elements of list2 in set2
    current = list2.head
    while current:
        set2.add(current.data)
        current = current.next
    
    intersection_list = LinkedList()
    
    # Traverse list1 and list2 to find intersection elements
    current = list1.head
    while current:
        if current.data in set2:
            intersection_list.append(current.data)
        current = current.next
    
    return intersection_list
