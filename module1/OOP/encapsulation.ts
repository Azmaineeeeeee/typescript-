//
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

   private getBalance(){
        return this._balance;
    }

    getHiddenMethod(){
        return this.getBalance
    }
    }

   

    const poorAccount = new BankAccount(111, "Mr.Poor", 20);
    poorAccount.addDeposit(1000);
    const myBalance = poorAccount.getHiddenMethod();

    console.log(myBalance);

    
}