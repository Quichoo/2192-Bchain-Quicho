// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract MappingExample {
    //Define a mapping to store values associated with addresses
    mapping (address => uint256) public valueMapping;

    //modifier to check if the value being set is not zero
    modifier  nonZeroValue(uint256 _value) {
        require(_value != 0, "value cannot be zero");
        _;
    }
    //modifier to check if there's a value set for the sender
    modifier valueHasBeenSet() {
        require(valueMapping[msg.sender] !=0, "No value set for sender");
        _;
    }
    function setValue(uint256 _value) public nonZeroValue(_value) {
        valueMapping [msg.sender] = _value;
    }
    function getValue() public view valueHasBeenSet returns (uint256) {
        return valueMapping [msg.sender];
    }
}