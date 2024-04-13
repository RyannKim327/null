class Node {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.children = {};
    }
}
class SuffixTree {
    constructor(s) {
        this.root = new Node(-1, -1);
        this.suffixes = [];
        for (let i = 0; i < s.length; i++) {
            this.suffixes.push(s.substring(i));
        }
        for (let suffix of this.suffixes) {
            this.insertSuffix(suffix);
        }
    }

    insertSuffix(suffix) {
        let currentNode = this.root;
        for (let i = 0; i < suffix.length; i++) {
            if (!currentNode.children[suffix[i]]) {
                currentNode.children[suffix[i]] = new Node(i, this.suffixes.indexOf(suffix));
            } else {
                let childNode = currentNode.children[suffix[i]];
                let j = childNode.start;
                while (j <= childNode.end && suffix[j] === suffix[i]) {
                    j++;
                    i++;
                }
                if (j <= childNode.end) {
                    let splitNode = new Node(childNode.start, j - 1);
                    childNode.start = j;
                    splitNode.children[suffix[j]] = new Node(j, this.suffixes.indexOf(suffix));
                    splitNode.children[childNode.end] = childNode;
                    currentNode.children[suffix[i]] = splitNode;
                } else {
                    currentNode = childNode;
                    i = j;
                }
            }
        }
    }

    search(substring) {
                  let currentNode = this.root;
                  for (let i = 0; i < substring.length; i++) {
                      if (currentNode.children[substring[i]]) {
                          currentNode = currentNode.children[substring[i]];
                      } else {
                          return false;
                      }
                  }
                  return true;
              }
          }

// Example usage
          const suffixTree = new SuffixTree("banana");
          console.log(suffixTree.search("ana")); // Output: true
          console.log(suffixTree.search("bad")); // Output: false
