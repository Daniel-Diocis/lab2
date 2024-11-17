// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

contract Test {

    // Dichiarazione delle variabili di stato
    uint256 public a1;
    bool public abc;
    string public xyz;
    address public owner;

    // Costruttore del contratto
    constructor() {
        owner = msg.sender;  // Assegna l'indirizzo del creatore del contratto a 'owner'
    }

    // Funzione per sommare due numeri e assegnare il risultato alla variabile a1
    function testing(uint a, uint b) public {
        a1 = a + b;
    }

    // Funzione che restituisce l'indirizzo del chiamante del contratto
    function contractvalue() public view returns(address) {
        return msg.sender; // Restituisce l'indirizzo dell'account che ha invocato la funzione
    }

    // Funzione che restituisce il timestamp corrente del blocco
    function timecheck() public view returns(uint) {
        return block.timestamp; // Restituisce il timestamp del blocco corrente
    }
}