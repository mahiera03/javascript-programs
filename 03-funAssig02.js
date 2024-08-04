console.log("=====Bank Details using normal function=====");
console.log("==== output for Argument no-01====");

function bankDetails(bankName, accountNum, location, pinCode) {
  console.log(
    "My bank name is",
    bankName,
    ",",
    "and BankAccount Number is",
    accountNum,
    ",",
    "located in",
    location,
    ",",
    pinCode,
    "."
  );
}
bankDetails("CITI Bank", 345682345, "Pune", 431202);

console.log("==== output for Argument no-02====");

bankDetails("Axis Bank", 7856782345, "Mumbai", 441202);

console.log("==== output for Argument no-03====");

bankDetails("HDFC Bank", 8956782345, "Pune", 631202, "Open");