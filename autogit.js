class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def getIntersectionNode(headA, headB):
    node_set = set()
    
    curr = headA
    while curr:
        node_set.add(curr)
        curr = curr.next
    
    curr = headB
    while curr:
        if curr in node_set:
            return curr
        curr = curr.next
    
    return None
