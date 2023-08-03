// Адаптер (Adapter) — це патерн програмування, який дозволяє об'єктам з інтерфейсом несумісним з іншими об'єктами працювати разом,
// перетворюючи інтерфейс одного об'єкта на інтерфейс, очікуваний іншим об'єктом.
console.clear();
class BankTransfer {
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFree(amount);
    console.log(`Ініціюємо банківський переказ: $${calculatedAmount}`);
  }

  calculateFree(amount) {
    return amount * 1.02;
  }
}

// Клас WalletTransfer представляє собою систему для здійснення переказів з гаманця
class WalletTransfer {
  processTransfer(amount) {
    console.log(`Здійснюємо переказ з гаманця: $${amount}`);
  }
}

// Клас TransferAdapter виступає адаптером, який дозволяє нам користуватися
// методами WalletTransfer так, ніби це BankTransfer.
class TransferAdapter {
  constructor(transferSystem) {
    this.transferSystem = transferSystem;
  }
  // Робимо конструктор, що приймає об'єкт transferSystem типу WalletTransfer
  // Зберігаємо посилання на об'єкт WalletTransfer у властивості transferSystem
  // Робимо метод initiateTransfer, який адаптує API WalletTransfer до API BankTransfer.
  initiateTransfer(amount) {
    const calculatedAmount = this.calculateFree(amount);
    this.transferSystem.processTransfer(calculatedAmount);
    // this.transferSystem.processTransfer(calculatedAmount);
    // Викликаємо метод processTransfer об'єкту WalletTransfer з calculatedAmount.
    // В результаті повертаємо результат виконання переказу.
  }
  // Створюємо метод calculateFee, що приймає amount та обчислює суму комісії за переказ amount * 1.2, засновуючись на вхідній сумі.
  calculateFree(amount) {
    return amount * 1.2;
  }
  // Повертаємо amount * 1.2
}
console.log("Завдання 5 ====================================");
// Після виконання розкоментуйте код нижче

const purchase1 = new BankTransfer();
purchase1.initiateTransfer(1000);

const purchase2 = new BankTransfer();
purchase2.initiateTransfer(10);

// Створимо екземпляри BankTransfer
// const purchase1 = new BankTransfer();
// purchase1.initiateTransfer(1000);

// const purchase2 = new TransferAdapter(new WalletTransfer());
// purchase2.initiateTransfer(10()
