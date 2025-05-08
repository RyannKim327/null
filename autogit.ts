class HashTable<K, V> {
  private buckets: Array<Array<[K, V]>>;
  private capacity: number;
  private size: number;

  constructor(capacity: number = 16) {
    this.capacity = capacity;
    this.buckets = new Array<Array<[K, V]>>(capacity);
    for (let i = 0; i < capacity; i++) {
      this.buckets[i] = [];
    }
    this.size = 0;
  }

  // A basic hash function for strings/numbers (you can enhance this)
  private hash(key: K): number {
    let hash = 0;
    const keyString = String(key);
    for (let i = 0; i < keyString.length; i++) {
      hash = (hash * 31 + keyString.charCodeAt(i)) % this.capacity;
    }
    return hash;
  }

  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    // Check if key already exists, update value
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    // Insert new key-value pair
    bucket.push([key, value]);
    this.size++;
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const [k, v] of bucket) {
      if (k === key) {
        return v;
      }
    }
    return undefined;
  }

  delete(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  getSize(): number {
    return this.size;
  }
}
const ht = new HashTable<string, number>();

ht.set('apple', 5);
ht.set('banana', 10);

console.log(ht.get('apple')); // 5
console.log(ht.get('banana')); // 10
console.log(ht.get('cherry')); // undefined

ht.delete('apple');
console.log(ht.get('apple')); // undefined
console.log(ht.has('banana')); // true

console.log('Size:', ht.getSize()); // 1
