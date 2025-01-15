class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

function getIntersection(list1: Node<any>, list2: Node<any>): Node<any> | null {
  let current1 = list1;

  while (current1 !== null) {
    let current2 = list2;

    while (current2 !== null) {
      if (current1 === current2) {
        return current1;
      }
      current2 = current2.next;
    }
    current1 = current1.next;
  }

  return null;
}
class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

function getIntersection(list1: Node<any>, list2: Node<any>): Node<any> | null {
  const nodes = new Set<Node<any>>();

  let current = list1;
  while (current !== null) {
    nodes.add(current);
    current = current.next;
  }

  current = list2;
  while (current !== null) {
    if (nodes.has(current)) {
      return current;
    }
    current = current.next;
  }

  return null;
}
class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

function getIntersection(list1: Node<any>, list2: Node<any>): Node<any> | null {
  let len1 = 0;
  let len2 = 0;

  let current1 = list1;
  while (current1 !== null) {
    len1++;
    current1 = current1.next;
  }

  let current2 = list2;
  while (current2 !== null) {
    len2++;
    current2 = current2.next;
  }

  current1 = list1;
  current2 = list2;

  if (len1 > len2) {
    for (let i = 0; i < len1 - len2; i++) {
      current1 = current1.next;
    }
  } else if (len2 > len1) {
    for (let i = 0; i < len2 - len1; i++) {
      current2 = current2.next;
    }
  }

  while (current1 !== null && current2 !== null) {
    if (current1 === current2) {
      return current1;
    }
    current1 = current1.next;
    current2 = current2.next;
  }

  return null;
}
