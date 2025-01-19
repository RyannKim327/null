class HashTable<K, V> {
  private table: { [key: string]: V } = {};

  constructor(private size: number = 128) {}

  private hash(key: K): string {
    let hash = 0;
    for (let i = 0; i < key.toString().length; i++) {
      hash += key.toString().charCodeAt(i);
    }
    return (hash % this.size).toString();
  }

  put(key: K, value: V): void {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key: K): void {
    const index = this.hash(key);
    delete this.table[index];
  }

  size(): number {
    return Object.keys(this.table).length;
  }

  keys(): K[] {
    return Object.keys(this.table).map((key) => {
      return key as K;
    });
  }

  values(): V[] {
    return Object.values(this.table);
  }
}
const hashTable = new HashTable<string, number>();

hashTable.put('apple', 5);
hashTable.put('banana', 10);
hashTable.put('orange', 15);

console.log(hashTable.get('apple')); // 5
console.log(hashTable.size()); // 3

hashTable.remove('banana');
console.log(hashTable.size()); // 2

console.log(hashTable.keys()); // ['apple', 'orange']
console.log(hashTable.values()); // [5, 15]
