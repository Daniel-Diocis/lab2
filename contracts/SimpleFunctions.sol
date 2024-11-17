// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

contract SimpleFunctions {
    uint public count = 0;

    // Public function that increments the count
    function incrementCount() public {
        count += 1;
    }

    // Internal function that doubles the count
    function doubleCount() internal {
        count *= 2;
    }

    // Public function to get the current count
    function getCount() public view returns (uint) {
        return count;
    }

    // Function to reset count based on a condition
    function resetIfGreaterThan(uint threshold) public {
        if (count > threshold) {
            count = 0;
        }
    }
}