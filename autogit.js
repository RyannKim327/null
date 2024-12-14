def getIntersectionNode(headA, headB):
    if not headA or not headB:
        return None

    lenA = getLength(headA)
    lenB = getLength(headB)

    currA = headA
    currB = headB

    while lenA > lenB:
        currA = currA.next
        lenA -= 1

    while lenB > lenA:
        currB = currB.next
        lenB -= 1

    while currA != currB:
        currA = currA.next
        currB = currB.next

    return currA

def getLength(node):
    length = 0

    while node:
        length += 1
        node = node.next

    return length
