class Node {
  constructor(label) {
    this.label = label;
    this.children = [];
    // add any additional properties you need
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node("");
  }

  buildTree(text) {
    // implement the logic to build the suffix tree from the input text
  }

  search(substring) {
    // implement the logic to search for a substring in the suffix tree
  }
}
buildTree(text) {
  for (let i = 0; i < text.length; i++) {
    let suffix = text.substring(i);
    let currentNode = this.root;
    for (let j = 0; j < suffix.length; j++) {
      const foundChild = currentNode.children.find(
        (child) => child.label[0] === suffix[j]
      );
      if (foundChild) {
        const commonPrefix = this.getCommonPrefix(foundChild.label, suffix.slice(j));
        if (commonPrefix.length === foundChild.label.length) {
          currentNode = foundChild;
          j += commonPrefix.length - 1;
        } else {
          const newNode = new Node(commonPrefix);
          foundChild.label = foundChild.label.slice(commonPrefix.length);
          newNode.children.push(foundChild);
          const newSuffix = suffix.slice(j + commonPrefix.length);
          newNode.children.push(new Node(newSuffix));
          currentNode.children = currentNode.children.filter((child) => child !== foundChild);
          currentNode.children.push(newNode);
          break;
        }
      } else {
        currentNode.children.push(new Node(suffix.slice(j)));
        break;
      }
    }
  }
}

getCommonPrefix(a, b) {
  const minLength = Math.min(a.length, b.length);
  for (let i = 0; i < minLength; i++) {
    if (a[i] !== b[i]) {
      return a.slice(0, i);
    }
  }
  return a.slice(0, minLength);
}
search(substring) {
  let currentNode = this.root;
  let i = 0;
  while (i < substring.length) {
    const child = currentNode.children.find(
      (child) => child.label[0] === substring[i]
    );
    if (!child) {
      return false; // substring not found
    }
    const commonPrefix = this.getCommonPrefix(child.label, substring.slice(i));
    if (commonPrefix === child.label) {
      if (substring.slice(i).length === child.label.length) {
        return true; // entire substring found
      }
      currentNode = child;
      i += commonPrefix.length;
    } else {
      return false; // substring not found
    }
  }
  return false; // substring not found
}
