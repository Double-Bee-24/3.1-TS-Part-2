// Напишіть функцію mapObject, яка
// у чомусь схожа на функцію map для масивів.

// Ця функція повинна приймати об'єкт джаваскрипту
// і функцію transformer, яку потрібно застосувати до кожного з полів об'єкта,
// ...а з результату застосування функції transformer до кожного поля вхідного об'єкта
// зібрати новий об'єкт та повернути його.

// Так наприклад, можна буде замепити об'єкт типу
// { "roma" : 5, "vasya": 2 } оцінок студентів
// на функцію на кшталт (x) => x > 2
// щоб отримати об'єкт
// {"roma": true, "vasya": false} заліків студентів

// Зрозуміло для опису сигнатури mapObject треба буде юзать
// 1) дженерики з кількома параметрами-типами
// 2) таку штуку як Record (globalThis.Record, якщо бути точним ;) )

type objectType<T> = globalThis.Record<string, T>;

const mapObject = <U, V>(
  obj: objectType<U>,
  transformer: (mark: U) => V
): objectType<V> => {
  const resultObject: objectType<V> = {};

  Object.keys(obj).forEach((key) => {
    const newValue = transformer(obj[key]);

    resultObject[key] = newValue;
  });

  return resultObject;
};

const testObject = { jack: 5, john: 2 };

// Transforms mark to passed or not passed represented by boolean
const transformer = (value: number): boolean => {
  return value > 2;
};

console.log(mapObject(testObject, transformer));
