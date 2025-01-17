class HashTable<K, V> {
  private table: { [key: string]: V } = {};

  constructor(private hashFunction: (key: K) => string) {}

  put(key: K, value: V): void {
    const hashedKey = this.hashFunction(key);
    this.table[hashedKey] = value;
  }

  get(key: K): V | undefined {
    const hashedKey = this.hashFunction(key);
    return this.table[hashedKey];
  }

  remove(key: K): void {
    const hashedKey = this.hashFunction(key);
    delete this.table[hashedKey];
  }

  size(): number {
    return Object.keys(this.table).length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }
}
const stringHashFunction = (key: string): string => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = Math.imul(31, hash) + key.charCodeAt(i) | 0;
  }
  return hash.toString();
};

const hashTable = new HashTable<string, number>(stringHashFunction);

hashTable.put("apple", 1);
hashTable.put("banana", 2);
console.log(hashTable.get("apple")); // 1
console.log(hashTable.size()); // 2
hashTable.remove("banana");
console.log(hashTable.isEmpty()); // false
