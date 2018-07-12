// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-552-2121');

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printInfo(accountHolder, accountNumber, businessName) {
	console.log(`Account Holder Name: ${accountHolder}`);
	console.log(`Account Holder Number: ${accountNumber}`);
	console.log(`Business Name: ${businessName}`);
}

// Add function to print all addresses, including a header


// Add function to print phone types and numbers


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
let transactions = new Map();

// Add function to add transactions
function addTransaction(date, amount){
	transactions.set(date, amount);
	return transactions;
}

// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', +1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', +2200);

// Add function to show balance status

function showBalanceStatus(balanceAmount){
	console.log(`Balance: ${balanceAmount}`);
	if (balanceAmount < 0){
		console.log("YOU ARE OVERDRAWN");
	} else if (balanceAmount > 0 && balanceAmount < 20){
		console.log("Warning: You are close to zero balance");
	} else {
		console.log("Thank you for your business.");
	}
}

// Add function to show transactions
function showTransactions(someMap, balanceAmount) {
	console.log(`Balance: ${balanceAmount}`);

	for (let key of someMap) {
		let t_type;
		if (key[1] > 0) {
			t_type = 'deposit';
		} else {
			t_type = 'withdrawal';
		}

		console.log(key[0], t_type, key[1], balanceAmount += key[1]);
	}

	if (balanceAmount < 0) {
		balanceAmount -= 25;
	}

	return showBalanceStatus(balanceAmount);
}

showTransactions(transactions, 26000);


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const customerInfo = {
	'Account Holder': accountHolder,
	'Account Number': accountNumber,
	'Business Name': businessName,
	'Addresses': addresses,
	'Phone Numbers': phoneNumbers,
	'Transactions': transactions,
	'Starting Balance': 26000
};

// Function to add customer attributes
function addCustomerInfo(favMelon = 'Cantalope', numPets = 0){
	customerInfo['Favorite Melon'] = favMelon;
	customerInfo['Number of Pets'] = numPets;

	return customerInfo;
}

// Add attributes for this user

addCustomerInfo('Casaba', 2);

// ///////////////////////////////////////////////////////
// Getting a Business Loan

// function getBusinessLoan(annualIncome, someObject) {
// 	let interestRate;
// 	let preferredCustomer;

// 	if (someObject.favMelon === 'Casaba') || (someObject.numPets > 5) {
// 		preferredCustomer = true;
// 	} 

// 	if (annualIncome < 100000) {

// 		if (preferredCustomer === true) {
// 			interestRate = 0.05;
// 		} else {
// 			interestRate = 0.08;
// 		}

// 	} else if (annualIncome > 100000) && (annualIncome < 200000) {
// 		if (preferredCustomer === true) {
// 			interestRate = 0.04;
// 		} else {
// 			interestRate = 0.07;
// 		}

// 	} else {
// 		interestRate = 0.04;
// 	}

// 	return interestRate;
// }

// console.log(getBusinessLoan(150000, customerInfo));

// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




