//CREATING A FILE WITH ALL PRACTICE PROBLEMS
//Classes and Objects
//1. Create a class BankAccount with the following attributes:
class BankAccount {

    constructor(balance = 0, accountHolder, accountNumber) {
      this.balance = balance;
      this.accountHolder = accountHolder;
      this.accountNumber = accountNumber;
    }
      accountDetails(){
        console.log(`Account Holder: ${this.accountHolder}, Account Number: ${this.accountNumber}, Balance: $${this.balance}`);
    }
    deposit(amt) {
    if(amt < 0){
        console.log(`Can't deposit a negative amount!`);
      return;
    }
        console.log(`This amount have been deposited: $${amt}`);
        this.balance += amt;
    }
    withdraw(amt) {
    if(amt > this.balance){
      console.log(`Insufficient funds! You have $${this.balance} in your account.`);
      return;
    } else if ( amt < 0){
        console.log("Can't withdraw a negative amount!");
      return;
    }
        console.log(`This amount have been withdrawn: $${amt}`);
        this.balance -= amt;
    }
  }
  
  const aaleeyahsAcc = new BankAccount(1060, 'Aaleeyah', 11234);
  aaleeyahsAcc.accountDetails();
  aaleeyahsAcc.deposit(20000);
  aaleeyahsAcc.withdraw(1000);
  console.log('------------------FINAL BALANCE------------------');
  aaleeyahsAcc.accountDetails();
  