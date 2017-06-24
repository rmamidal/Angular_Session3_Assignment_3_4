var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Department Abstract class
 *@class Department:Abstract
 *@constructor
**/
var Department = (function () {
    function Department(depName) {
        this.name = depName;
    }
    // Method to print Department Name.
    Department.prototype.printName = function () {
        console.log("Department Name is:" + this.name);
    };
    return Department;
}());
/**
* Account Department class Derived from Department abstract class.
*@class AccountDepartment
*@constructor
**/
var AccountDepartment = (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment() {
        return _super.call(this, "Accounts Department") || this;
    }
    // Method to print Meeting time.
    AccountDepartment.prototype.printMeeting = function () {
        console.log("Account department meeting is at 10.00am");
    };
    return AccountDepartment;
}(Department));
/**
* IT Department class Derived from Department abstract class.
*@class ITDepartment
*@constructor
**/
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment() {
        return _super.call(this, "IT Department") || this;
    }
    // Method to print Meeting time.
    ITDepartment.prototype.printMeeting = function () {
        console.log("IT department meeting is at 11.00am");
    };
    return ITDepartment;
}(Department));
var accounts = new AccountDepartment; // Account Department Object created.
accounts.printName(); //Department Name is:Account Department
accounts.printMeeting(); // Account department meeting is at 10.00am
var web = new ITDepartment; // IT Department Object Created.
web.printName(); // Department Name is:IT Department
web.printMeeting(); // IT department meeting is at 11.00am
