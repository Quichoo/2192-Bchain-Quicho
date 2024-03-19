// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract FallbackExample {
    event FallbackReceived(address sender, uint amount);
    //Event to log payment record
    event PaymentReceived(address payer, uint256 amount);

    //Fallback Function
    fallback() external payable {
        emit FallbackReceived(msg.sender, msg.value);
    }

    //Function to recieve Ether
    receive() external payable {
        emit PaymentReceived(msg.sender, msg.value);
    }
}