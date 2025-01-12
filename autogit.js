int lengthOfList(struct Node* head) {
    int count = 0;
    struct Node* current = head;
    while (current != NULL) {
        count++;
        current = current->next;
    }
    return count;
}
int lengthOfList(Node* head) {
    int count = 0;
    Node* current = head;
    while (current != nullptr) {
        count++;
        current = current->next;
    }
    return count;
}
public int lengthOfList(Node head) {
    int count = 0;
    Node current = head;
    while (current != null) {
        count++;
        current = current.next;
    }
    return count;
}
def length_of_list(head):
    count = 0
    current = head
    while current is not None:
        count += 1
        current = current.next
    return count
function lengthOfList(head) {
    let count = 0;
    let current = head;
    while (current !== null) {
        count++;
        current = current.next;
    }
    return count;
}
def length_of_list(head)
  count = 0
  current = head
  while current != nil
    count += 1
    current = current.next
  end
  return count
end
