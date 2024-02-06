// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract GlobbalVariables {
    function globalVar() external view returns (address, uint, uint, uint, uint) {
        address sender = msg.sender;
        uint timestamp = block.timestamp;
        uint blockNum = block.number;

        uint gaslimit = block.gaslimit;
        uint gasprice = tx.gasprice;
        return (sender, timestamp, blockNum, gaslimit, gasprice);
    }
}
//there are global variables that can't be used such as block.difficulty and coinbase for trial
