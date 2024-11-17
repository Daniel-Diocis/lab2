// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BankAccount {
    uint private balance;

    // Deposit function: adds an amount to the balance
    function deposit(uint amount) public {
        balance += amount;
    }

    // Withdraw function: deducts an amount from the balance
    function withdraw(uint amount) public {
        require(amount <= balance, "Insufficient balance");
        balance -= amount;
    }

    // View function to check balance
    function getBalance() public view returns (uint) {
        return balance;
    }

    // Pure function to calculate simple interest
    function calculateInterest(uint principal, uint rate, uint time) public pure returns (uint) {
        return (principal * rate * time) / 100;
    }
}