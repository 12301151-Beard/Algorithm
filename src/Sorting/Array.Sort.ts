
interface CompareFunction<T> {
  (a: T, b: T): number;
}

function sort<T>(data: T[], compareFunction: CompareFunction<T>): T[] {
  //TODO: complete it
}

const data = [1,4,2,6];

console.log(sort<number>(data, (a, b) => {
  return a - b;
}));