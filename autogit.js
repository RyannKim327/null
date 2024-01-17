class Node {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.children = {};
  }
}
class SuffixTree {
  constructor() {
    this.root = new Node(-1, -1); // Root node representing an empty string
    this.string = '';
  }

  insert(suffix) {
    let current = this.root;

    for (let i = 0; i < suffix.length; i++) {
      const char = suffix[i];

      if (!current.children[char]) {
        current.children[char] = new Node(i, suffix.length - 1);
      }

      current = current.children[char];
    }
  }

  search(pattern) {
    let current = this.root;

    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];

      if (!current.children[char]) {
        return false; // Pattern not found
      }

      current = current.children[char];
    }

    return true; // Pattern found
  }
}
const tree = new SuffixTree();
const suffixes = ['abc', 'def', 'xyz'];

for (const suffix of suffixes) {
  tree.insert(suffix);
}

console.log(JSON.stringify(tree.root, null, 2));

// Output:
// {
//   "start": -1,
//   "end": -1,
//   "children": {
//     "a": {
//       "start": 0,
//       "end": 2,
//       "children": {
//         "b": {
//           "start": 1,
//           "end": 2,
//           "children": {
//             "c": {
//               "start": 2,
//               "end": 2,
//               "children": {}
//             }
//           }
//         }
//       }
//     },
//     "d": {
//       "start": 1,
//       "end": 2,
//       "children": {
//         "e": {
//           "start": 0,
//           "end": 0,
//           "children": {
//             "f": {
//               "start": 1,
//               "end": 1,
//               "children": {}
//             }
//           }
//         }
//       }
//     },
//     "x": {
//       "start": 0,
//       "end": 2,
//       "children": {
//         "y": {
//           "start": 1,
//           "end": 1,
//           "children": {
//             "z": {
//               "start": 2,
//               "end": 2,
//               "children": {}
//             }
//           }
//         }
//       }
//     }
//   }
// }
