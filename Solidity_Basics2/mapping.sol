// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract MappingExample {
    //Define a mapping to store values associated with addresses
    mapping (address => uint256) public valueMapping;


    function setValue(uint256 _value) public {
        require(_value !=0, "Value Cannot be 0");
        valueMapping [msg.sender] = _value;
     }

     function getValue() public view returns (uint256) {
         require(valueMapping[msg.sender] !=0, "No value set for sender");
         return valueMapping [msg.sender];
     }
}