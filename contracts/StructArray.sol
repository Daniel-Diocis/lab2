// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

contract StructArray {
    struct Person {
        string name;
        string eventt;
    }

    Person[] public persons;

    function addPerson(string memory name, string memory eventt) public {
        persons.push(Person(name, eventt));
    }
}