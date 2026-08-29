{
    class BankAccount{
      readonly id: number;
       public name: string;
      protected _balance: number;

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    addDeposit(amount:number){
        this._balance = this._balance + amount
    }

    getBalance(){
        return this._balance;
    }
    }

   

    const poorAccount = new BankAccount(111, "Mr.Poor", 20);
    poorAccount.addDeposit(1000);
    const myBalance = poorAccount.getBalance();

    console.log(myBalance);
}