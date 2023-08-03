class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

// Клас EmployeeGroup використовується для створення груп працівників. Він містить список працівників.
class EmployeeGroup {
  employees = [];
  // Задаємо властивість employees, яке призначене для зберігання працівників. Він ініціалізується як порожній масив.
  // Робимо метод addEmployee, який додає працівника до групи. Він приймає один параметр employee - об'єкт типу Employee.
  addEmployee(employee) {
    this.employees.push(employee);
  }
  // Цей метод додає об'єкт працівника до масиву employees, використовуючи метод push.
}

// Клас EmployeeIterator відповідає за ітерацію по групі працівників.
class EmployeeIterator {
  #employees = [];
  #currentIndex = 0;

  constructor(employeeGroup) {
    this.#employees = employeeGroup.employees;
  }

  #hasNext() {
    return this.#currentIndex < this.#employees.length;
  }

  // Створимо метод #hasNext, який перевіряє, чи є в масиві працівників наступний елемент для ітерації.
  // Він повертає true, якщо поточний індекс менший за довжину масиву, і false в протилежному випадку.

  // Робимо метод next, який повертає наступного працівника в масиві та збільшує #currentIndex на 1 якщо є наступний елемент, інакше повертає null.
  next() {
    if (!this.#hasNext()) return null;
    this.#currentIndex += 1;

    return this.#employees[this.#currentIndex - 1];
  }

  list() {
    return this.#employees.map((v) => v.name);
  }
  // Робимо метод list, який використовується для виведення імен всіх працівників в групі.
}

console.log("Завдання 7 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо нову групу працівників.
const employeeGroup = new EmployeeGroup();

// Додаємо нових працівників до групи, використовуючи метод addEmployee.
employeeGroup.addEmployee(new Employee("John Doe", "Manager", 5000));
employeeGroup.addEmployee(new Employee("Jane Smith", "Developer", 4000));

// Створюємо новий ітератор для групи працівників.
const employeeIterator = new EmployeeIterator(employeeGroup);

// Виводимо імена всіх працівників в групі, використовуючи метод list.
console.log(employeeIterator.list());
