// Using a JavaScript object as a hash table
const hashTable = {};

// Using an array as a hash table
const hashTable = [];
function hashCode(key, size) {
  let hashCode = 0;
  for (let i = 0; i < key.length; i++) {
    hashCode += key.charCodeAt(i);
  }
  return hashCode % size;
}
function insert(hashTable, key, value) {
  const index = hashCode(key, hashTable.length);

  // If the bucket is empty, create it with an array to store key-value pairs
  if (!hashTable[index]) {
    hashTable[index] = [];
  }

  // Insert the key-value pair to the bucket
  hashTable[index].push({ key, value });
}
function retrieve(hashTable, key) {
  const index = hashCode(key, hashTable.length);

  // If the bucket exists, search for the key
  if (hashTable[index]) {
    for (const entry of hashTable[index]) {
      if (entry.key === key) {
        return entry.value;
      }
    }
  }

  // Return undefined if the key is not found
  return undefined;
}
function remove(hashTable, key) {
  const index = hashCode(key, hashTable.length);

  // If the bucket exists, search for the key and remove it
  if (hashTable[index]) {
    const bucket = hashTable[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }
}
