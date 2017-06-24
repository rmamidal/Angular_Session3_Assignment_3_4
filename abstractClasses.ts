/**
 * Department Abstract class
 *@class Department:Abstract
 *@constructor
**/
abstract class Department {
  public name: string; // Name property.

  constructor(depName:string) {
    this.name= depName;
  }

  // Method to print Department Name.
  printName(): void {
    console.log("Department Name is:" + this.name);
  }

  abstract printMeeting(): void; // This methode to be implented in derived class
}

/**
 * Account Department class Derived from Department abstract class.
 *@class AccountDepartment
 *@constructor
 **/
class AccountDepartment extends Department {
  constructor () {
    super("Accounts Department");
  }

  // Method to print Meeting time.
  printMeeting(): void {
    console.log("Account department meeting is at 10.00am");
  }
}

/**
 * IT Department class Derived from Department abstract class.
 *@class ITDepartment
 *@constructor
 **/
class ITDepartment extends Department {
  constructor () {
    super("IT Department");
  }

  // Method to print Meeting time.
  printMeeting(): void {
    console.log("IT department meeting is at 11.00am");
  }
}

let accounts = new AccountDepartment; // Account Department Object created.
accounts.printName(); //Department Name is:Account Department
accounts.printMeeting(); // Account department meeting is at 10.00am

let web = new ITDepartment; // IT Department Object Created.
web.printName(); // Department Name is:IT Department
web.printMeeting(); // IT department meeting is at 11.00am