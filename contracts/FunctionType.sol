// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

contract FunctionType {
    // Variabile pubblica, il che significa che verrà automaticamente creata una funzione getter
    uint public statevariable; 

    // Funzione che imposta il valore di statevariable
    function simpleFunction(uint a) public {
        statevariable = a;
    }

    /////////////////////////////////////
    // Funzione readonly o getter (non necessaria per variabili pubbliche)
    // La funzione è commentata perché statevariable è già pubblica

    // function viewfunction() public view returns(uint) {
    //     return statevariable;
    // }
    /////////////////////////////////////

    // Funzione pure che restituisce la somma di due numeri
    function pureFunction(uint a, uint b) public pure returns(uint) {
        uint c = a + b;
        return c;
    }

    // Funzione che chiama pureFunction e assegna il risultato a statevariable
    function callPure(uint a, uint b) public {
        statevariable = pureFunction(a, b);
    }
}