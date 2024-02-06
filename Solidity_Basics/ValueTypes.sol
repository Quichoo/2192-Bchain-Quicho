// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract ValueTypes {
    bool public b = true;
    uint public u = 123;
    int public i = 123;
    
    int public minInt = type(int).min;
    int public maxInt = type(int).max;

    address public addr = 0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97;
    bytes32 public b32 = 0x67c223da15a59764cd7b73f921cf3e09f6464a2a3a3469255844352d2f6e3acf;
}