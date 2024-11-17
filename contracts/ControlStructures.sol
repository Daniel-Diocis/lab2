// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

contract ControlStructures {
    // This function checks if a number is even or odd
    function isEven(uint number) public pure returns (string memory) {
        if (number % 2 == 0) {
            return "Even";
        } else {
            return "Odd";
        }
    }

    // This function calculates the sum of numbers from 1 to n
    function sumToN(uint n) public pure returns (uint) {
        uint sum = 0;
        for (uint i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }

    // This function counts down from n to 0
    function countdown(uint n) public pure returns (string memory) {
        string memory result = "";
        while (n > 0) {
            result = string(abi.encodePacked(result, uintToString(n), " "));
            n--;
        }
        return result;
    }

    // Helper function to convert uint to string
    function uintToString(uint v) internal pure returns (string memory) {
        if (v == 0) {
            return "0";
        }
        uint maxLen = 78;
        bytes memory reversed = new bytes(maxLen);
        uint len = 0;
        while (v != 0) {
            uint remainder = v % 10;
            v = v / 10;
            reversed[len++] = bytes1(uint8(48 + remainder));
        }
        bytes memory s = new bytes(len);
        for (uint i = 0; i < len; i++) {
            s[i] = reversed[len - 1 - i];
        }
        return string(s);
    }
}
