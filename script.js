class BankAccount {
  constructor(balance, interestRate) {
    this.balance = balance;
    this.interestRate = interestRate;
  }
  addInterest() {
    this.balance = balance + this.balance * this.interestRate;
  }
}

const newBankAccount = new BankAccount(200, 0.06);
newBankAccount.addInterest();
console.log(newBankAccount);
