// Композит (Composite) — це патерн програмування, який дозволяє створювати структуру об'єктів у вигляді дерева, де кожен об'єкт може бути окремим елементом або групою об'єктів.
// Ця структура називається "деревоподібною" через ієрархію "один-багато".
console.clear();
// Клас ContentContainer використовується для управління списком вкладених елементів контенту
class ContentContainer {
  elements = [];

  addElement(element) {
    this.elements.push(element);
  }

  removeElement(element) {
    this.elements = this.elements.filter(v != element);
  }
}

// Клас Message, що є розширенням класу ContentContainer. Використовується для створення повідомлень з текстом.
class Message extends ContentContainer {
  constructor(content) {
    super();
    this.content = content;
  }
  // Створюємо конструктор класу, який приймає content як параметр та ініціалізує його
  // Створюємо метод display, який виводить ${this.content} для всіх елементів масиву

  display() {
    console.log(this.content);
    this.elements.forEach((v) => v.display());
  }
}

// Клас Article, що є розширенням класу ContentContainer. Використовується для створення статті з вкладеними елементами.
class Article extends ContentContainer {
  constructor(title) {
    super();
    this.title = title;
  }

  display() {
    console.log(`Стаття: ${this.title}`);
    this.elements.forEach((v) => v.display());
  }
  // Створюємо конструктор класу, який приймає title назву статті як параметр та ініціалізує об'єкт з нею
  // Створюємо метод display, який виводить Стаття: ${this.title} для всіх елементів масиву
}

console.log("Завдання 1 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо об'єкт Article з назвою "Навчальна стаття"
const article = new Article("Навчальна стаття");

// // Додаємо повідомлення до статті
article.addElement(new Message("Дуже корисна стаття"));
article.addElement(new Message("Дякую за чудовий матеріал!"));

// Додаємо вкладене повідомлення до першого повідомлення в статті
article.elements[0].addElement(new Message("Відповідь: Згоден!"));

// Виводимо інформацію про статтю та всі її вкладені елементи
article.display();

// Виводимо масив вкладених елементів статті
console.log(article.elements);
