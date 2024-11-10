// Напишіть функцію, яка приймає:
// 1) Деякі дані умовного типу Т, але не з усіма полями
// 2) функцію-доповнювач, яка приймає такі штуки як із п.1,
//     а повертає повноцінний об'єкт типу Т
// ... як ви зрозуміли, саму функцію писати не треба:)
// нас цікавить лише її сигнатура.

const firstFunction = <T>(
  someData: Partial<T>,
  completer: (anotherData: Partial<T>) => T
): void => {};

// Більш складний варіант:
// Напишіть функцію, яка приймає:
// 1) Деякі дані умовного типу Т (у якого поле id: string),
//    але можливо без поля id
// 2) функцію-доповнювач, яка приймає такі штуки як із п.1,
//     а повертає повноцінний об'єкт типу Т
// ... як ви зрозуміли, саму функцію писати не треба:)
// нас цікавить лише її сигнатура.

const secondFunction = <T extends { id?: string }>(
  someData: Partial<T>,
  completer: (anotherData: Partial<T>) => T
): void => {};

// Останнє завдання:
// Напишіть сигнатуру функції, що приймає
// - якийсь клас
// - кількість
// ...а повертає масив екземплярів цього класу

class Rectangle {
  w!: number;
  h!: number;
}
class Circle {
  radius!: number;
}

// // Зробіть норм сигнатуру тут.
// // НІ, Rectangle | Circle це не варіант, треба зробити універсальну функцію
function stamp<T>(SOMECLASS: new () => T, count: number): T[] {
  let a = [];
  for (let i = 0; i < count; i++) a.push(new SOMECLASS());

  return a;
}

let a: Rectangle[] = stamp(Rectangle, 10);
let b: Circle[] = stamp(Circle, 20);
