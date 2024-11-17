// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

contract Arithmetic {
    // Pure function: adds two numbers
    function add(uint a, uint b) public pure returns (uint) {
        return a + b;
    }

    // Pure function: subtracts two numbers
    function subtract(uint a, uint b) public pure returns (uint) {
        require(a >= b, "a should be greater than or equal to b");
        return a - b;
    }

    // Pure function: multiplies two numbers
    function multiply(uint a, uint b) public pure returns (uint) {
        return a * b;
    }
}