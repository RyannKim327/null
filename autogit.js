class ListNode {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null; // No intersection if any of the lists is empty
  }
  
  let lengthA = getLength(headA);
  let lengthB = getLength(headB);
  let diff = Math.abs(lengthA - lengthB);
  
  if (lengthA > lengthB) {
    while (diff > 0) {
      headA = headA.next;
      diff--;
    }
  } else {
    while (diff > 0) {
      headB = headB.next;
      diff--;
    }
  }
  
  while (headA && headB) {
    if (headA === headB) {
      return headA; // Intersection found
    }
    
    headA = headA.next;
    headB = headB.next;
  }
  
  return null; // No intersection found
  
}

function getLength(node) {
  let length = 0;
  
  while (node) {
    length++;
    node = node.next;
  }
  
  return length;
}
