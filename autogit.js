function findIntersection(list1, list2) {
    let nodeSet = new Set();
    let intersection = [];

    // Traverse the first linked list and store the nodes in a Set
    let current = list1;
    while (current) {
        nodeSet.add(current);
        current = current.next;
    }

    // Traverse the second linked list and check if each node is in the Set
    current = list2;
    while (current) {
        if (nodeSet.has(current)) {
            intersection.push(current);
        }
        current = current.next;
    }

    return intersection;
}
