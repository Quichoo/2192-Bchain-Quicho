// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract FunctionIntro {
    //Function can return multiple values
    function add(uint x, uint y) external pure returns (uint) {
        return (x + y);
    }
    function sub(uint x, uint y) external pure returns (uint) {
        return (x - y);
    }
    function multi(uint x, uint y) external pure returns (uint) {
        return (x * y);
    }
    function div(uint x, uint y) external pure returns (uint) {
        return (x / y);
    }
}