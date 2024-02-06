// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract LocalVariables {
    uint public i;
    bool public b;
    address public myAddress;

    function foo() external {
        uint x = 123;
        bool f = false;

        x += 456;
        f = true;

        i = 123;
        b = false;
        myAddress = address(1);
    }

    function boo() external  {
        uint a = 456;
        
        a += 22;

        i = 5;
        b = true;
        myAddress = address(2);
    }
}
//the value inside the function is only used inside the function
//to call the results you must click the function and click the value