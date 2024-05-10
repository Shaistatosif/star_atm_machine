import inquirer from "inquirer";
// initialize user balance and pin code
let myBlance = 5000;
let myPin = 1234;
//print welcome message
console.log("Welcome to code with Shaista Tosif - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin code:",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is Correct, login Successfully");
    console.log(`current Account Balance is ${myBlance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an Operation:",
            choices: ["withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the Amount to Withdraw:"
            }
        ]);
        if (amountAns.amount > myBlance) {
            console.log("Insufficient Balance");
        }
        else {
            myBlance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw Successfully`);
            console.log(`Your Remaining Balance is : ${myBlance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Account Balance is :${myBlance} `);
    }
}
else {
    console.log("Pin is Incorrect ,Try Again");
}
