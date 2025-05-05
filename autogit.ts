const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = Array.from(new Set(array));

console.log(uniqueArray); // [1, 2, 3, 4, 5]
const uniqueArray = [...new Set(array)];
const uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);
type Item = { id: number; name: string };

const items: Item[] = [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 1, name: 'baz' },
];

const uniqueItems = Array.from(
  new Map(items.map(item => [item.id, item])).values()
);

console.log(uniqueItems);
// [{ id: 1, name: 'baz' }, { id: 2, name: 'bar' }]
